import React, { useEffect, useState } from "react";
import { DiceSelector } from "./components/organisms/DiceSelector";
import { RollHistory } from "./components/organisms/RollHistory";
import d6s1 from "./assets/images/d6s1.png";
import d6s2 from "./assets/images/d6s2.png";
import d6s3 from "./assets/images/d6s3.png";
import d6s4 from "./assets/images/d6s4.png";
import d6s5 from "./assets/images/d6s5.png";
import d6s6 from "./assets/images/d6s6.png";

export interface DieRollProps {
    side: number;
    icon: string;
}

export interface DieProps {
    side: number[];
    icon: string[];
}

function App() {
    const [dieRoll, setDieRoll] = useState<DieRollProps>({ side: 1, icon: d6s1 });
    const [rollHistory, setRollHistory] = useState<number[]>([]);

    const rollDie = (dieRoll: DieRollProps) => {
        setDieRoll(dieRoll);
        setRollHistory([...rollHistory, dieRoll.side]);
    }
    
    const sixSidedDie = {
        side: [1, 2, 3, 4, 5, 6],
        icon: [d6s1, d6s2, d6s3, d6s4, d6s5, d6s6],
    };

    return (
        <div className="App">
            <DiceSelector die={sixSidedDie} dieRoll={dieRoll} rollDie={rollDie} />
            <RollHistory rolls={rollHistory} />
        </div>
    );
}

export default App;
