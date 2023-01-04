import { FC, useState, useRef, useEffect } from "react"
import { Colors } from "../models/Colors";
import { ITimer } from "../types/types";

const Timer: FC<ITimer> = ({ player, restart }) => {
    const [whiteTimer, setWhiteTimer] = useState<number>(500);
    const [darkTimer, setDarkTimer] = useState<number>(500);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer()
    }, [player]);

    function startTimer() {
        if (timer.current) clearInterval(timer.current);

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
        restart();
    }

    return (
        <div className="timer">
            <p className="timer__move timer__title">
                Ход
                {player?.color === Colors.white
                    ? <span className="move__white">Белых</span>
                    : <span className="move__dark">Черных</span>
                }
            </p>
            <div className="wrapper_time">
                <p className="timer__title">Время</p>
                <p className="timer_time">
                    <span className="time_white">
                        {whiteTimer}
                    </span>
                    <span className="time_dark">
                        {darkTimer}
                    </span>
                </p>
            </div>
            <div className="wrapper__btn">
                <button
                    className="btn_restart"
                    onClick={clickHandler}
                >
                    restart
                </button>
            </div>
        </div>
    )
}

export default Timer