import { FC } from "react";
import { DieRollProps } from "../../App";

interface DieRoll {
    roll: DieRollProps;
}

export const Die: FC<DieRoll> = ({ roll }) => {
    return (
        <div>
            <img src={roll.icon} alt="image of a die" />
        </div>
    );
};
