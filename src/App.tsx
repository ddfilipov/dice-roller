import React from "react";
import { DiceSelector } from "./components/organisms/DiceSelector";
import { RollHistory } from "./components/organisms/RollHistory";

function App() {
    const addNewRollHistory = (roll: number) => {};

    return (
        <div className="App">
            <DiceSelector updateRollHistory={addNewRollHistory} />
            <RollHistory />
        </div>
    );
}

export default App;
