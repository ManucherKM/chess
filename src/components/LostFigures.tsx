import { FC } from "react"
import { ILostFigures } from "../types/types"

const LostFigures: FC<ILostFigures> = ({ figures }) => {
    return (
        <div className="lostfigures">
            {figures.map(figure =>
                <img key={figure.id} src={figure.logo} alt={figure.name} />
            )}
        </div>
    )
}

export default LostFigures