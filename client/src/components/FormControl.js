import useToggleState from "../hooks/useToggleState";
import { Button } from "./Button";
import Dropdown from "./Dropdown/Dropdown";
import { Flex } from "./Flex";
import { InputField } from "./InputField";

export function InputFormControl({
    label,
    type="text",
    labelId,
    value,
    setValue
}) {
    const [empty, _, setEmptyToFalse, setEmptyToTrue] = useToggleState()
    const showEmptyAlert = () => {
        if(!value) {
            setEmptyToTrue()
        } else {
            setEmptyToFalse()
        }
    }
    return (
        <Flex
            column
            margin="0.5rem"
        >
            <label htmlFor={labelId} style={{ margin: "0.5rem" }}>{label}</label>
            <InputField type={type} id={labelId} name={labelId} value={value} onChange={setValue} onBlur={showEmptyAlert} />
            {empty && <p>Please fill in this empty field.</p>}
        </Flex>
    )
}

export function SelectFormControl({
    label,
    labelId,
    option,
    setOption,
    options = ['One', 'Two', 'Three', 'Four'],
    selectFieldId = "listbox1",
    // open,
    // toggle,
    // close
}) {
    return (
        <Flex
            column
            margin="0.5rem"
        >
            <label id={`${labelId}-label`} style={{ margin: "0.5rem" }}>{label}</label>
            <Dropdown
                selected={option}
                setSelected={setOption}
                label={labelId}
                options={options}
                selectFieldId={selectFieldId}
                // expanded={open}
                // toggleExpanded={toggle}
                // setExpandedToFalse={close}
            />
        </Flex>
    )
}

export function ActionsFormControl({
    resetText="",
    reset=null,
    submitText,
    submit,
}) {
    return (
        <Flex
            margin="0.5rem"
            justify="flex-end"    
        >
            {!!reset &&
                <Button type="button" onClick={reset}>{resetText}</Button>
            }
            <Button onClick={submit}>{submitText}</Button>
        </Flex>
    )
}