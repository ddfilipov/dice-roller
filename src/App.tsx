import React from "react";
import { DiceSelector } from "./components/organisms/DiceSelector";
import { RollHistory } from "./components/organisms/RollHistory";

function App() {
    return (
        <div className="App">
            <DiceSelector />
            <RollHistory />
        </div>
    );
}

export default App;
