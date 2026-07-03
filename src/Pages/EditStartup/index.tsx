import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";

import {
    Page,
    TopHeader,
    Brand,
    HeaderTitle,
    Body,
    MainContent,
    Content,
    TwoColumns,
    Column,
    CheckboxGroup,
    SectionLabel,
    CheckboxItem,
    OtherField,
    OtherInput,
    Form,
    FormField,
    FormInput,
    FormSelect,
    FormTextarea,
    FormTextareaLarge,
    RadioGroup,
    RadioItem,
    SubSectionLabel,
} from "./styles";

import { ButtonRegister } from "../StartupProfile/styles";

type Startups = {
    idStartup: number;
    emailUser: string;
    nameStartup: string;
    nameResponsable: string;
    description: string;
    investment: string;
    bpComercial: string;
    bpAccounting: string;
    bpDeveloper: string;
    bpDesigner: string;
    bpFinancial: string;
    bpManagement: string;
    bpLegal: string;
    bpMarketing: string;
    bpOtherChecked: string;
    bpOther: string;
    spComercial: string;
    spAccounting: string;
    spDeveloper: string;
    spDesigner: string;
    spFinancial: string;
    spManagement: string;
    spLegal: string;
    spMarketing: string;
    spOtherChecked: string;
    spOther: string;
    stage: string;
    problem: string;
    solution: string;
    differential: string;
};

const BRAZIL_STATES = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

const STAGE_OPTIONS = [
    {
        value: "idéia",
        label: "Ideia: a proposta ainda é uma ideia, nenhum experimento foi feito.",
    },
    {
        value: "prototipo conceitual",
        label: "Protótipo conceitual: produto foi elaborado no papel ou computador.",
    },
    {
        value: "prototipo testado",
        label: "Protótipo testado: experimentos e testes foram realizados e demonstraram consistência.",
    },
    {
        value: "mvp finalizado",
        label: "MVP finalizado: produto foi elaborado na sua primeira versão e mostrou viabilidade técnica e econômica.",
    },
    {
        value: "produto em comercialização",
        label: "Produto em comercialização: produto já está inserido no mercado.",
    },
];

type CheckboxMap = Record<string, boolean>;

type StartupForm = {
    idStartup: number;
    nameStartup: string;
    city: string;
    state: string;
    description: string;
    investment: boolean;

    bpComercial: boolean;
    bpAccounting: boolean;
    bpDeveloper: boolean;
    bpDesigner: boolean;
    bpFinancial: boolean;
    bpManagement: boolean;
    bpLegal: boolean;
    bpMarketing: boolean;
    bpOtherChecked: boolean;
    bpOther: string;

    spComercial: boolean;
    spAccounting: boolean;
    spDeveloper: boolean;
    spDesigner: boolean;
    spFinancial: boolean;
    spManagement: boolean;
    spLegal: boolean;
    spMarketing: boolean;
    spOtherChecked: boolean;
    spOther: string;

    stage: string;
    problem: string;
    solution: string;
    differential: string;
    option: string;
};

function EditStartup() {

    const navigate = useNavigate();
    
    const { idStartup } = useParams();

    const [input, setInput] = useState<StartupForm>({
        idStartup: 0,
        nameStartup: "",
        city: "",
        state: "",
        description: "",
        investment: false,
        bpComercial: false,
        bpAccounting: false,
        bpDeveloper: false,
        bpDesigner: false,
        bpFinancial: false,
        bpManagement: false,
        bpLegal: false,
        bpMarketing: false,
        bpOtherChecked: false,
        bpOther: "",
        spComercial: false,
        spAccounting: false,
        spDeveloper: false,
        spDesigner: false,
        spFinancial: false,
        spManagement: false,
        spLegal: false,
        spMarketing: false,
        spOtherChecked: false,
        spOther: "",
        stage: "",
        problem: "",
        solution: "",
        differential: "",
        option: "",
    });

    function getMyStartupToEdit() {
        axios.get("http://localhost:8888/web/react/StartWe_VR/php/apiStartup.php", {
                params: {
                    idStartup: idStartup,
                    option: "Get My Startup To Edit",
                },
            })
            .then(function (response) {
                const data = response.data;
            if (data && typeof data === 'object' && !Array.isArray(data)) {
                setInput(data);
            } else if (Array.isArray(data) && data.length > 0) {
                setInput(data[0]); // pega o primeiro se vier array
            } else {
                setInput(null);
            }
            });
    }

    useEffect(() => {
        getMyStartupToEdit();
    }, []);

    // Substitua a função change atual por estas duas:

    function change(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        setInput((values) => ({ ...values, [name]: checked }));
    }

    function toggleField(
        field: "needInvestment" | "businessPartnerOtherChecked" | "serviceOtherChecked",
        checked: boolean
    ) {
        setInput((values) => ({ ...values, [field]: checked }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        input.option = "Update Startup";
        input.idStartup = Number(idStartup);
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiStartup.php", input).then(function (response) {
                // console.log(response.data);
                navigate("/feed");
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <Page>
            <TopHeader>
                <Brand>StartUs</Brand>
                <HeaderTitle>Perfil Startup</HeaderTitle>
            </TopHeader>

            <Body>
                <Card />

                <MainContent>
                    <Content>
                    <Form id="startup-profile-form" onSubmit={submit}>
                        <TwoColumns>
                            <Column>
                                <FormField>
                                    <label htmlFor="inputStartupName">Nome Startup</label>
                                    <FormInput
                                        id="inputStartupName"
                                        type="text"
                                        name="nameStartup"
                                        value={input?.nameStartup}
                                        onChange={change}
                                        required
                                    />
                                </FormField>

                                <FormField>
                                    <label htmlFor="inputCity">Cidade</label>
                                    <FormInput
                                        id="inputCity"
                                        type="text"
                                        name="city"
                                        value={input?.city}
                                        onChange={change}
                                        required
                                    />
                                </FormField>

                                <FormField>
                                    <label htmlFor="inputState">Estado</label>
                                    <FormSelect
                                        id="inputState"
                                        name="state"
                                        value={input?.state}
                                        onChange={change}
                                        required
                                    >
                                        <option value="">Selecionar estado...</option>
                                        {BRAZIL_STATES.map((uf) => (
                                            <option key={uf} value={uf}>
                                                {uf}
                                            </option>
                                        ))}
                                    </FormSelect>
                                </FormField>
                            </Column>

                            <Column>
                                <FormField>
                                    <label htmlFor="inputDescription">
                                        Descrição (resumo)
                                    </label>
                                    <FormTextareaLarge
                                        id="inputDescription"
                                        name="description"
                                        value={input?.description}
                                        placeholder="Sou engenheiro elétrico a 10 anos..."
                                        onChange={change}
                                        required
                                    />
                                </FormField>
                            </Column>
                        </TwoColumns>

                        <div>
                            <SectionLabel>Qual sua necessidade?</SectionLabel>
                            <CheckboxItem>
                                <input
                                    type="checkbox"
                                    checked={input?.investment}
                                    onChange={handleCheckboxChange}
                                />
                                Investimento
                            </CheckboxItem>
                        </div>

                        <TwoColumns>
                            <SectionLabel>Parceiros de negócio</SectionLabel>
                            <CheckboxGroup>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpComercial" checked={!!input?.bpComercial} onChange={handleCheckboxChange} />Comercial
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpAccounting" checked={!!input?.bpAccounting} onChange={handleCheckboxChange} />Contábil
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpDeveloper" checked={!!input?.bpDeveloper} onChange={handleCheckboxChange} />Desenvolvedor
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpDesigner" checked={!!input?.bpDesigner} onChange={handleCheckboxChange} />Designer
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpFinancial" checked={!!input?.bpFinancial} onChange={handleCheckboxChange} />Financeiro
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpManagement" checked={!!input?.bpManagement} onChange={handleCheckboxChange} />Gestão
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpLegal" checked={!!input?.bpLegal} onChange={handleCheckboxChange} />Jurídico
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpMarketing" checked={!!input?.bpMarketing} onChange={handleCheckboxChange} />Marketing
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="bpOtherChecked" checked={!!input?.bpOtherChecked} onChange={handleCheckboxChange} />Outro
                                </CheckboxItem>
                                <OtherField>
                                    <OtherInput type="text" name="bpOther" value={input?.bpOther ?? ""} onChange={change} />
                                </OtherField>
                            </CheckboxGroup>
                            <SectionLabel>Prestação de serviço</SectionLabel> 
                            <CheckboxGroup>
                                <CheckboxItem>
                                    <input type="checkbox" name="spComercial" checked={!!input?.spComercial} onChange={handleCheckboxChange} />Comercial
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spAccounting" checked={!!input?.spAccounting} onChange={handleCheckboxChange} />Contábil
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spDeveloper" checked={!!input?.spDeveloper} onChange={handleCheckboxChange} />Desenvolvedor
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spDesigner" checked={!!input?.spDesigner} onChange={handleCheckboxChange} />Designer
                                </CheckboxItem>
                                <CheckboxItem>                        
                                    <input type="checkbox" name="spFinancial" checked={!!input?.spFinancial} onChange={handleCheckboxChange} />Financeiro
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spManagement" checked={!!input?.spManagement} onChange={handleCheckboxChange} />Gestão
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spLegal" checked={!!input?.spLegal} onChange={handleCheckboxChange} />Jurídico
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spMarketing" checked={!!input?.spMarketing} onChange={handleCheckboxChange} />Marketing
                                </CheckboxItem>
                                <CheckboxItem>
                                    <input type="checkbox" name="spOtherChecked" checked={!!input?.spOtherChecked} onChange={handleCheckboxChange} />Outro
                                </CheckboxItem>
                                <OtherField>
                                    <OtherInput type="text" name="spOther" value={input?.spOther ?? ""} onChange={change} />
                                </OtherField>
                            </CheckboxGroup>
                        </TwoColumns>

                        <TwoColumns>
                            <Column>
                                <SectionLabel>Estágio:</SectionLabel>
                                <SubSectionLabel>
                                    Selecione a maturidade de sua solução:
                                </SubSectionLabel>
                                <RadioGroup>
                                {STAGE_OPTIONS.map((option) => (
                                    <RadioItem key={option.value}>
                                        <input
                                            type="radio"
                                            name="stage"
                                            value={option.value}                    // ← Correto
                                            checked={input?.stage === option.value} // ← Já está bom
                                            onChange={change}
                                        />
                                        {option.label}
                                    </RadioItem>
                                ))}
                            </RadioGroup>
                            </Column>

                            <Column>
                                <FormField>
                                    <label htmlFor="inputProblem">O problema:</label>
                                    <FormTextarea
                                        id="inputProblem"
                                        name="problem"
                                        value={input?.problem}
                                        onChange={change}
                                        required
                                    />
                                </FormField>

                                <FormField>
                                    <label htmlFor="inputSolution">A solução:</label>
                                    <FormTextarea
                                        id="inputSolution"
                                        name="solution"
                                        value={input?.solution}
                                        onChange={change}
                                        required
                                    />
                                </FormField>

                                <FormField>
                                    <label htmlFor="inputDifferential">
                                        Diferencial inovativo:
                                    </label>
                                    <FormTextarea
                                        id="inputDifferential"
                                        name="differential"
                                        value={input?.differential}
                                        onChange={change}
                                        required
                                        />
                                </FormField>
                            </Column>
                        </TwoColumns>
                        <ButtonRegister type="submit" form="startup-profile-form">
                        Atualizar
                        </ButtonRegister>
                    </Form>
                </Content>

                </MainContent>
            </Body>
        </Page>
    );
}

export default EditStartup;
