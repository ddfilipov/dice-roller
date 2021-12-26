import { FC, useState } from "react";
import { Die } from "./Die";
import d6s1 from "../../assets/images/d6s1.png";
import d6s2 from "../../assets/images/d6s2.png";
import d6s3 from "../../assets/images/d6s3.png";
import d6s4 from "../../assets/images/d6s4.png";
import d6s5 from "../../assets/images/d6s5.png";
import d6s6 from "../../assets/images/d6s6.png";

export interface DieRollProps {
    side: number;
    icon: string;
}

export interface DieProps {
    side: number[];
    icon: string[];
}

export const DiceSelector: FC = () => {
    const [dieRoll, setDieRoll] = useState<DieRollProps>({ side: 1, icon: d6s1 });
    const sixSidedDie = {
        side: [1, 2, 3, 4, 5, 6],
        icon: [d6s1, d6s2, d6s3, d6s4, d6s5, d6s6],
    };

    const getRandomNumber = (die: DieProps) => {
        const dieNumber = Math.floor(Math.random() * die.side.length);
        const dieRollNumber = die.side[dieNumber];
        const dieRollIcon = die.icon[dieNumber];
        setDieRoll({ side: dieRollNumber, icon: dieRollIcon });
    };

    return (
        <div>
            <Die roll={dieRoll} />
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
