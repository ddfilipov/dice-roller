import { FC } from "react";
import { DieRollProps } from "../../App";

interface DieRoll {
    roll: DieRollProps;
}

export const Die: FC<DieRoll> = ({ roll }) => {
    return (
        <div>
            <p>Number: {roll.side}</p>
            <img src={roll.icon} alt="image of a die" />
        </div>
    );
};
