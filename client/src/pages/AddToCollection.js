// import Dropdown from "../components/Dropdown/Dropdown";
// import { Flex } from "../components/Flex"
// import { InputField } from "../components/InputField";
import React, { useState } from "react";
import useInputState from "../hooks/useInputState";
import { ActionsFormControl, InputFormControl, SelectFormControl } from "../components/FormControl";
import { Container } from "../components/Container";
// import useToggleState from "../hooks/useToggleState";

function AddToCollection() {
    const [name, setName] = useInputState()
    const [content, setContent] = useInputState()
    const [level, setLevel] = useInputState()
    const [option, setOption] = useState("")
    const emptyField = (
        !name ||
        !content ||
        !level ||
        !option
    )
    const submitForm = (e) => {
        e.preventDefault()
        if(emptyField) {
            console.log("Please fill in the important fields.");
        } else {
            const registry = {
                name,
                content,
                level,
                option
            }
            console.log(registry);
        }
    }
    // const [expanded, toggleExpanded, setExpandedToFalse] = useToggleState()
    return (
        <Container
            column
            fluid
        >
            <form>
                <InputFormControl
                    label="Nombre"
                    labelId="name"
                    value={name}
                    setValue={setName}
                />
                <InputFormControl
                    label="Contenido"
                    labelId="content"
                    value={content}
                    setValue={setContent}
                />
                <InputFormControl
                    label="Nivel"
                    labelId="level"
                    value={level}
                    setValue={setLevel}
                />
                <SelectFormControl 
                    label="Opciones"
                    labelId="opciones1"
                    option={option}
                    setOption={setOption}
                    // open={expanded}
                    // toggle={toggleExpanded}
                    // close={setExpandedToFalse}
                />
                <ActionsFormControl
                    submitText="Agregar"
                    submit={submitForm}
                />
            </form>
        </Container>
    )
}

export default AddToCollection;