import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import { MiniGamesCollection } from "./pages/MiniGamesCollection";
import { Route, Routes } from "react-router";
import SameColorsWins from "./games/SameColorsWins";
import MakeItPop from "./games/MakeItPop";
import SomeMathPractice from "./games/SomeMathPractice";
import { PairsMemory } from "./games/PairsMemory";
import SelectToAddsUpTo from "./games/SelectToAddsUpTo";


export default function App() {
    return (
        <div className="main">
            <Nav />
            <div className="leftRightCenterColumns">
                <div className="left"></div>
                <div className="center">
                    <Routes>
                        {/* pro "/" */}
                        <Route path="/" element={<MiniGamesCollection />} />
                        {/* example of creating route to specific game by title */}
                        <Route path="/game/same colors wins" element={<SameColorsWins />} />

                        <Route path="/game/make it pop" element={<MakeItPop />} />

                        <Route path="/game/some math practice" element={<SomeMathPractice />} />

                        <Route path="/game/pairs memory" element={<PairsMemory />} />

                        <Route path="/game/select to adds up to" element={<SelectToAddsUpTo />} />




                        {/* pro vše ostatní kromě toho co bylo definované nahoře nad touto poslední routhe path */}
                        <Route path="*" element={<div> 404: not found </div>} />
                    </Routes>

                </div>
                <div className="right"></div>
            </div>
            <Footer></Footer>
        </div>
    )
}