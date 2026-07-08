
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card';

import { Page, 
    TopHeader, 
    Brand, 
    HeaderTitle, 
    Body, 
    MainContent, 
    StartupCard, 
    FormRegister, 
    FormRow, 
    FormField, 
    FormActions, 
    ButtonUpdate 
} from './styles';
import axios from 'axios';

function PhotoUser() {

    const { iduser } = useParams();
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [file, setFile] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        
        if (selectedFile) {
            setFile(selectedFile);
            
            // Preview da imagem
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    function savePhoto(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        if (!file) {
            alert("Selecione uma foto!");
            return;
        }
    
        const formData = new FormData();
        formData.append("iduser", iduser || "");
        formData.append("photo", file);           // ← Arquivo real
        formData.append("option", "Save Photo");
    
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/photoUser.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",   // Axios geralmente configura sozinho, mas é bom deixar
            },
        })
        .then(function (response) {
            // console.log(response.data);
            alert("Foto salva com sucesso!");
        })
        .catch(function (error) {
            console.error(error);
            alert("Erro ao salvar foto");
        });
    }
    
    return (
        <Page>
            <TopHeader>
                <Brand>StartUs</Brand>
                <HeaderTitle>Perfil Usuário</HeaderTitle>
            </TopHeader>

            <Body>
                <Card />

                <MainContent>
                    <StartupCard>
                    <FormRegister onSubmit={savePhoto}>
                    <FormRow $twoColumns>
                                <FormField>
                                    <label htmlFor="userPhoto">Foto do Usuário</label>
                                    {/* Preview da imagem */}
                                    {selectedImage && (
                                        <div style={{ margin: '10px 0' }}>
                                            <img 
                                                src={selectedImage} 
                                                alt="Preview" 
                                                style={{ 
                                                    width: '150px', 
                                                    height: '150px', 
                                                    objectFit: 'cover',
                                                    borderRadius: '8px',
                                                    border: '2px solid #ccc'
                                                }} 
                                            />
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        id="userPhoto"
                                        accept="image/*"
                                        capture="environment" // ← Abre câmera no celular
                                        onChange={handleImageChange}
                                        style={{ marginTop: '8px' }}
                                    />
                                </FormField>
                            </FormRow>
                    <FormActions>
                        <ButtonUpdate type="submit">Salvar</ButtonUpdate>
                    </FormActions>
                </FormRegister>
                    </StartupCard>
                </MainContent>
            </Body>
        </Page>
    )
}

export default PhotoUser;