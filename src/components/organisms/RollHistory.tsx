import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
`;

export const RollHistory: FC = () => {
    return (
        <Container>
            <div>
                <p>You rolled X (dX)</p>
            </div>
        </Container>
    );
};
