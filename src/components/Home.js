import React from "react";
import Faq from "./faq/Faq";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Pricing from "./pricing/Pricing";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Pricing/>
            <Testimonials/>
            <Faq/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
