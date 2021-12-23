import { FC, useState } from "react";
import { Die, DieProps } from "./Die";
import d6s6 from "./d6.svg";

export interface RollType {
    side: number;
    icon: string;
}

export const DiceSelector: FC = () => {
    const [die, setDie] = useState<RollType>({ side: 1, icon: "uno" });

    const sixSidedDie = {
        side: [1, 2, 3, 4, 5, 6],
        icon: ["uno", "dos", "tres", "cuatro", "cinco", "seis"],
    };
    // const sixSidedDie = [1, 2, 3, 4, 5, 6];
    const getRandomNumber = (die: DieProps) => {
        const dieNumber = Math.floor(Math.random() * die.side.length);
        const dieSide = die.side[dieNumber];
        const dieIcon = die.icon[dieNumber];
        setDie({ side: dieSide, icon: dieIcon });
    };

    return (
        <div>
            <Die roll={die} />
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
