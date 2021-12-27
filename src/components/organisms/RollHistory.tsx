import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
`;

interface RollHistoryProps {
    rolls: number[];
}

export const RollHistory: FC<RollHistoryProps> = ({ rolls }) => {
    return (
        <Container>
            <ul>
                {rolls.map((roll, index) => (
                    <li key={index}>You have rolled a {roll}.</li>
                ))}
            </ul>
        </Container>
    );
};
