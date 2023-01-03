import { FC } from "react"
import Figure from "../models/figures/Figure"

interface ILostFigures {
    figures: Figure[]
}

const LostFigures: FC<ILostFigures> = ({ figures }) => {
    
    return (
        <div>
            {figures.map(figure =>
                <div key={figure.id}>
                    <h2>{figure.name}</h2>
                    <img src={figure.logo} alt={figure.name} />
                </div>
            )}
        </div>
    )
}

export default LostFigures