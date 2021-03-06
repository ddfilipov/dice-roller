import { FC, useState } from "react";
import { DieProps, DieRollProps } from "../../App";
import { Die } from "../molecules/Die";

export interface DiceSelectorProps {
    die: DieProps;
    dieRoll: DieRollProps;
    rollDie: ({ side, icon }: DieRollProps) => void;
}

export const DiceSelector: FC<DiceSelectorProps> = ({ die, dieRoll, rollDie }) => {
    const handleRollDie = () => {
        const dieSidePosition = getDieSidePosition(die);
        rollDie({ side: die.side[dieSidePosition], icon: die.icon[dieSidePosition] });
    };

    const getDieSidePosition = (die: DieProps) => {
        const dieNumber = Math.floor(Math.random() * die.side.length);
        return dieNumber;
    };

    return (
        <div>
            <label htmlFor="dice">Choose a die: </label>
            <select name="dice">
                <option value="two">2-sided coin</option>
                <option value="four">4-sided die</option>
                <option selected value="six">
                    6-sided die
                </option>
                <option value="eight">8-sided die</option>
                <option value="ten">10-sided die</option>
            </select>
            <Die roll={dieRoll} />
            <button type="button" onClick={handleRollDie}>
                Roll
            </button>
        </div>
    );
};
