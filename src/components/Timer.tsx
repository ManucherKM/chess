import { FC, useState, useRef, useEffect } from "react"
import { Colors } from "../models/Colors";
import Player from "../models/Player"

interface ITimer {
    player: Player | null,
    restart: () => void,
}

const Timer: FC<ITimer> = ({ player, restart }) => {
    const [whiteTimer, setWhiteTimer] = useState(500);
    const [darkTimer, setDarkTimer] = useState(500);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);


    useEffect(() => {
        startTimer()
    }, [player]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }

        const callback = player?.color === Colors.white ? dicWhite : dicDark;

        timer.current = setInterval(callback, 1000);
    }

    function dicWhite() {
        setWhiteTimer(prev => prev - 1)
    }

    function dicDark() {
        setDarkTimer(prev => prev - 1)
    }

    function clickHandler() {
        setWhiteTimer(500);
        setDarkTimer(500);
        restart()
    }

    return (
        <div>
            <h2>Белые: {whiteTimer}</h2>
            <h2>Черные: {darkTimer}</h2>
            <button onClick={clickHandler}>restart</button>
        </div>
    )
}

export default Timer