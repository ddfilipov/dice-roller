import { FC, useState } from "react";
import { DieProps, DieRollProps } from "../../App";
import { Die } from "./Die";

export interface DiceSelectorProps {
    die: DieProps;
    dieRoll: DieRollProps;
    setDieRoll: ({ side, icon }: DieRollProps) => void;
    updateRollHistory: (roll: number) => void;
}

export const DiceSelector: FC<DiceSelectorProps> = ({ die, dieRoll, setDieRoll, updateRollHistory }) => {
    const handleRollDie = () => {
        getRandomNumber(die);
        // updateRollHistory(die.side);
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
