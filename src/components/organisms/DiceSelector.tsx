import { FC } from "react";
import { Die } from "./Die";

export const DiceSelector: FC = () => {
    return (
        <div>
            <Die />
            <button type="button">Roll</button>
        </div>
    );
};
