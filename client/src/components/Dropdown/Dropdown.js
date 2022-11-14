import useToggleState from "../../hooks/useToggleState";
import { Flex } from "../Flex";
import { Frame } from "../Frame";
import { Option } from "./Option";
import { Select } from "./Select";

function Dropdown({
    options = ['One', 'Two', 'Three'],
    label,
    selected = null,
    setSelected,
    selectFieldId = "listbox1",
    // expanded,
    // toggleExpanded,
    // setExpandedToFalse
}) {
    const [expanded, toggleExpanded, setExpandedToFalse] = useToggleState(false)
    return (
        <>
            <Flex
                id={label}
                aria-expanded={expanded}
                aria-controls={selectFieldId}
                aria-haspopup="listbox"
                aria-labelledby={`${label}-label`}
                role="combobox"
                aria-activedescendant=""
                onClick={toggleExpanded}
                pointer
                margin="0.5rem"
            >
                <Frame
                    background="skyblue"
                    borderRadius="4px"
                    border="1px solid blue"
                    fontSize="clamp(1.1rem, 1.3vw, 1.3rem)"
                    padding="0.3rem"
                >
                    {!!selected ? selected : "Choose an option..."}
                </Frame>
            </Flex>
            {!!expanded &&
                <Select
                    column
                    id={selectFieldId}
                    role="listbox"
                    aria-labelledby={`${label}-label`}
                    // margin="0.5rem"
                >
                    {
                        options.map((option, i) => {
                            // const [selected, toggleSelected] = useToggleState(false)
                            const handleSelect = () => {
                                setSelected(option)
                                setExpandedToFalse()
                            }
                            return <Option
                                        key={i}
                                        id={`${label}-${i}`}
                                        role="option"
                                        pointer
                                        // aria-selected={selected} 
                                        // onFocus={toggleSelected}
                                        onClick={handleSelect}
                                    >
                                        {option}
                                    </Option>
                        })
                    }
                </Select>
            }
            
        </>
    )
}

export default Dropdown;