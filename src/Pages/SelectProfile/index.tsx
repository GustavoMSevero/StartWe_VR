
import idea from '../../assets/ideia.png';
import ecosystem from '../../assets/ecossistema.png'

import { useNavigate } from 'react-router-dom';

import { Welcome, Text1, Text2, Images, ImageLeft, LampIdea, HaveAnIdea, ImageRight, LampEcosystem, WantToBe } from './styles'

function SelectProfile() {

    const navigate = useNavigate();

    return (
        <div>
            <Welcome>Bem Vindo a StartUs</Welcome>
            <Text1>Aqui você se conecta ao ecossistema de startups da forma que preferir!</Text1>
            <Text2>Como você deseja se conectar?</Text2>
            <Images>
                <ImageLeft>
                    <div>
                        <LampIdea onClick={() => navigate("/perfil-startup")} href="/perfil-startup">
                            <img src={idea} alt="ideia"  width="200" height="200" />
                        </LampIdea>
                        <HaveAnIdea>
                            Tenho uma ideia e quero encontrar parceiros
                        </HaveAnIdea>
                    </div>
                </ImageLeft>
                <ImageRight>
                    <div>
                        <LampEcosystem onClick={() => navigate("/perfil-participante")} href="/perfil-participante">
                            <img src={ecosystem} alt="ideia"  width="200" height="200" />
                        </LampEcosystem>
                        <WantToBe>
                            Quero fazer parte desse ecossistema.
                        </WantToBe>
                    </div>
                </ImageRight>
            </Images>
        </div>
    )
}

export default SelectProfile