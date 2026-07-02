import { useState } from "react";
import {
    Container,
    TopHeader,
    Content,
    Form,
    TwoColumns,
    Column,
    FormField,
    SectionLabel,
    SubSectionLabel,
    FormInput,
    FormSelect,
    FormTextarea,
    FormTextareaLarge,
    CheckboxGroup,
    CheckboxItem,
    OtherField,
    OtherInput,
    RadioGroup,
    RadioItem,
    Footer,
    ButtonRegister,
} from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PARTNER_OPTIONS = [
    "Comercial",
    "Contábil",
    "Desenvolvedor",
    "Designer",
    "Financeiro",
    "Gestão",
    "Jurídico",
    "Marketing",
] as const;

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
        value: "produto comercialização",
        label: "Produto em comercialização: produto já está inserido no mercado.",
    },
];

type CheckboxMap = Record<string, boolean>;

type StartupForm = {
    iduser: number;
    nameResponsable: string;
    nameStartup: string;
    city: string;
    state: string;
    description: string;
    needInvestment: boolean;
    businessPartners: CheckboxMap;
    businessPartnerOther: string;
    businessPartnerOtherChecked: boolean;
    serviceProvision: CheckboxMap;
    serviceOther: string;
    serviceOtherChecked: boolean;
    stage: string;
    problem: string;
    solution: string;
    differential: string;
    option: string;
};

function createCheckboxMap(): CheckboxMap {
    return Object.fromEntries(
        PARTNER_OPTIONS.map((option) => [option, false])
    );
}

function StartupProfile() {
    const navigate = useNavigate();
    const iduser = localStorage.getItem("iduser") ?? "";
    const username = localStorage.getItem("username") ?? "";

    const [input, setInput] = useState<StartupForm>({
        iduser: 0,
        nameResponsable: "",
        nameStartup: "",
        city: "",
        state: "",
        description: "",
        needInvestment: false,
        businessPartners: createCheckboxMap(),
        businessPartnerOther: "",
        businessPartnerOtherChecked: false,
        serviceProvision: createCheckboxMap(),
        serviceOther: "",
        serviceOtherChecked: false,
        stage: "",
        problem: "",
        solution: "",
        differential: "",
        option: "",
    });

    function change(
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const { name, value } = event.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    function toggleCheckbox(
        group: "businessPartners" | "serviceProvision",
        option: string,
        checked: boolean
    ) {
        setInput((values) => ({
            ...values,
            [group]: { ...values[group], [option]: checked },
        }));
    }

    function toggleField(
        field: "needInvestment" | "businessPartnerOtherChecked" | "serviceOtherChecked",
        checked: boolean
    ) {
        setInput((values) => ({ ...values, [field]: checked }));
    }

    function submit(event: React.FormEvent) {
        event.preventDefault();
        input.option = "Register Startup";
        input.iduser = Number(iduser);
        input.nameResponsable = username;
        axios.post("http://localhost:8888/web/react/StartWe_VR/php/apiStartup.php", input).then(function(response) {
            // console.log(response.data)
            navigate("/feed");
        }).catch(function(error) {
            console.log(error);
        })
    }

    function renderCheckboxGroup(
        group: "businessPartners" | "serviceProvision",
        otherChecked: boolean,
        otherValue: string,
        otherField: "businessPartnerOther" | "serviceOther",
        otherToggle: "businessPartnerOtherChecked" | "serviceOtherChecked",
        title: string
    ) {
        return (
            <CheckboxGroup>
                <SectionLabel>{title}</SectionLabel>
                {PARTNER_OPTIONS.map((option) => (
                    <CheckboxItem key={option}>
                        <input
                            type="checkbox"
                            checked={input[group][option]}
                            onChange={(e) =>
                                toggleCheckbox(group, option, e.target.checked)
                            }
                        />
                        {option}
                    </CheckboxItem>
                ))}
                <OtherField>
                    <CheckboxItem>
                        <input
                            type="checkbox"
                            checked={otherChecked}
                            onChange={(e) =>
                                toggleField(otherToggle, e.target.checked)
                            }
                        />
                        Outro (Especifique)
                    </CheckboxItem>
                    <OtherInput
                        type="text"
                        name={otherField}
                        value={otherValue}
                        onChange={change}
                    />
                </OtherField>
            </CheckboxGroup>
        );
    }

    return (
        <Container>
            <TopHeader>Cadastro de Startup</TopHeader>

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
                                    value={input.nameStartup}
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
                                    value={input.city}
                                    onChange={change}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label htmlFor="inputState">Estado</label>
                                <FormSelect
                                    id="inputState"
                                    name="state"
                                    value={input.state}
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
                                    value={input.description}
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
                                checked={input.needInvestment}
                                onChange={(e) =>
                                    toggleField("needInvestment", e.target.checked)
                                }
                            />
                            Investimento
                        </CheckboxItem>
                    </div>

                    <TwoColumns>
                        {renderCheckboxGroup(
                            "businessPartners",
                            input.businessPartnerOtherChecked,
                            input.businessPartnerOther,
                            "businessPartnerOther",
                            "businessPartnerOtherChecked",
                            "Parceiros de negócio"
                        )}
                        {renderCheckboxGroup(
                            "serviceProvision",
                            input.serviceOtherChecked,
                            input.serviceOther,
                            "serviceOther",
                            "serviceOtherChecked",
                            "Prestação de serviço"
                        )}
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
                                            value={option.value}
                                            checked={input.stage === option.value}
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
                                    value={input.problem}
                                    onChange={change}
                                    required
                                />
                            </FormField>

                            <FormField>
                                <label htmlFor="inputSolution">A solução:</label>
                                <FormTextarea
                                    id="inputSolution"
                                    name="solution"
                                    value={input.solution}
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
                                    value={input.differential}
                                    onChange={change}
                                    required
                                    />
                            </FormField>
                        </Column>
                    </TwoColumns>
                </Form>
            </Content>

            <Footer>
                <ButtonRegister type="submit" form="startup-profile-form">
                    Cadastrar
                </ButtonRegister>
            </Footer>
        </Container>
    );
}

export default StartupProfile;
