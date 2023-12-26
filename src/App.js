import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PricingPage from "./routes/PricingPage";
import FaqPage from "./routes/FaqPage";
import ContactPage from "./routes/ContactPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/pricing' element={<PricingPage/>} />
                <Route path='/faq' element={<FaqPage/>} />
                <Route path='/contact' element={<ContactPage/>} />
            </Routes>
        </>
    );
};

export default App;
