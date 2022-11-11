import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Card.css"

function Card({ link = null }) {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(link)

    useEffect(() => () => {
        if (clicked) {
            return navigate(link)
        }
    }, [clicked])

    return (
        <div className="Card" onClick={link && handleClick}>
            <div className="Card__header">
                <span>
                    <img src="https://static.pokemonpets.com/images/monsters-images-300-300/6172-Shiny-Pichu-Spikyeared.webp" alt="pichu" />
                </span>
            </div>
            <div className="Card__header--sep"><hr className="linea" /></div>
            <div className="Card__body">
                <div className="Card__body--wrapper">
                    <h1>Shiny Pichu</h1>
                    <p>Electric</p>
                    <p>Lv. 26</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Card;