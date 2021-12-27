import { FC, useState } from "react";
import { DieProps, DieRollProps } from "../../App";
import { Die } from "../molecules/Die";

export interface DiceSelectorProps {
    die: DieProps;
    dieRoll: DieRollProps;
    setDieRoll: ({ side, icon }: DieRollProps) => void;
}

export const DiceSelector: FC<DiceSelectorProps> = ({ die, dieRoll, setDieRoll }) => {
    const handleRollDie = () => {
        getRandomNumber(die);
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
            <button type="button" onClick={handleRollDie}>
                Roll
            </button>
        </div>
    );
};
