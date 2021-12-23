import { FC } from "react";
import { RollType } from "./DiceSelector";

export interface DieProps {
    side: number[];
    icon: string[];
}

interface DieList {
    dado: DieProps;
}

interface RollTypeCombo {
    roll: RollType;
}

export const Die: FC<RollTypeCombo> = ({ roll }) => {
    return (
        <div>
            <p>Number: {roll.side}</p>
            <p>Icon:{roll.icon} </p>
        </div>
    );
};
