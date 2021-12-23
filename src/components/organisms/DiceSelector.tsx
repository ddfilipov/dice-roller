import { FC } from "react";
import { Die } from "./Die";

export const DiceSelector: FC = () => {
    const sixSidedDie = [1, 2, 3, 4, 5, 6];
    const getRandomNumber = (die: number[]) => {
        const dieNumber = Math.floor(Math.random() * die.length);
        console.log(die[dieNumber]);
        return die[dieNumber];
    };
    return (
        <div>
            <Die />
            <button
                type="button"
                onClick={() => {
                    getRandomNumber(sixSidedDie);
                }}
            >
                Roll
            </button>
        </div>
    );
};
