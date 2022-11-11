import { Flex } from "./Flex";
import { Frame } from "./Frame";
import "../styles/Post.css"
import { Button } from "./Button";

function Post() {
    return (
        <div className="Post">
            <Flex className="Post__header"
                screen
                sm
            >
                <Flex column className="Post__header--left"
                    // flexGrow={1}
                    flexBasis="50%"
                >
                    <Flex className="Post__slideshow"
                        justify="center"
                        alignItems="center"
                    >
                        <Frame
                            margin="1rem"
                            maxWidth="60%"
                            aspectRatio="1/1"
                            justify="center"
                        >
                            <img src="https://source.unsplash.com/DziZIYOGAHc" alt="imagen1" style={{ objectFit: "cover", maxWidth: "100%", height: "auto"}}/>
                        </Frame>
                    </Flex>
                    <Flex className="Post__carousel">
                        <ul>
                            
                        </ul>
                    </Flex>
                </Flex>
                <Flex column className="Post__header--right"
                    // flexGrow={1}
                    flexBasis="50%"
                    justify="space-evenly"
                >
                    <Flex className="Post__brief--start"
                        margin="1rem"
                    >
                        <Flex column>
                            <Flex
                                margin="1rem"
                            >
                                <h1>Hola</h1>
                            </Flex>
                            <Flex
                                margin="1rem"
                            >
                                <h1>Hola</h1>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="Post__brief--end"
                        justify="space-evenly"
                    >
                        <Button><span>Más detalles</span></Button>
                        <Button><span>Intercambiar</span></Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="Post__body">
                <Flex className="Post__body--main">
                    
                </Flex>
            </Flex>
            <Flex className="Post__footer">
                <Flex className="Post__body--main">
                    
                </Flex>
            </Flex>
        </div>
    )
}

export default Post;