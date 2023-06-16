import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UnitOne from "./pages/UnitOne";
import UnitTwo from "./pages/UnitTwo";
import Policy from "./pages/Policy";
import Induction from "./pages/Induction";
import PolicyHome from "../components/policy/Home";
import Quality from "../components/policy/Quality";
import Environment from "../components/policy/Environment";
import OHS from "../components/policy/OHS";
import InductionHome from "../components/induction/Home";
import Obligation from "../components/induction/Obligation";
import Hazards from "../components/induction/Hazards";
import Safety from "../components/induction/Safety";
import Food from "../components/induction/Food";
import PPE from "../components/induction/PPE";
import FirstAid from "../components/induction/FirstAid";
import Waste from "../components/induction/Waste";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="unit-i" element={<UnitOne />} />
                <Route path="unit-ii" element={<UnitTwo />} />
                <Route path="policy" element={<Policy />}>
                    <Route index element={<PolicyHome />} />
                    <Route path="home" element={<PolicyHome />} />
                    <Route path="quality" element={<Quality />} />
                    <Route path="environment" element={<Environment />} />
                    <Route path="ohs" element={<OHS />} />
                </Route>
                <Route path="induction" element={<Induction />}>
                    <Route index element={<InductionHome />} />
                    <Route path="home" element={<InductionHome />} />
                    <Route path="obligation" element={<Obligation />} />
                    <Route path="hazards" element={<Hazards />} />
                    <Route path="safety" element={<Safety />} />
                    <Route path="food" element={<Food />} />
                    <Route path="ppe" element={<PPE />} />
                    <Route path="first-aid" element={<FirstAid />} />
                    <Route path="waste" element={<Waste />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
