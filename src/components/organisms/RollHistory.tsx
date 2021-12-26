import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
`;

interface RollHistoryProps{
    dieRoll: number;
}

export const RollHistory: FC<RollHistoryProps> = ({dieRoll}) => {
    return (
        <Container>
            <div>
                <p>You rolled a {dieRoll} (d{dieRoll})</p>
            </div>
        </Container>
    );
};
