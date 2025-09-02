import { IoIosArrowDown } from "react-icons/io";
import Contact from "./ContactSection";
import Footer from "./Footer";
import ServiceCard from "./Service";
import { motion } from 'framer-motion';
import About from "./About";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [titleSection, setTitleSection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${API_URL}/api/get-title/`);
                console.log(API_URL)
                if (!response.ok) {
                    throw new Error(`error status ${response.status}`)
                }
                const result = await response.json();
                setTitleSection(result);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
return (
    <div className="flex flex-col gap-4 md:gap-24 mb-40 md:pb-32">

        <div className="relative flex w-full h-screen overflow-hidden">

            <video
                src="hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-white text-center">
                {titleSection && titleSection.map((item) => (
                    <React.Fragment key={item.id}>
                        <img src="staub-logo-1.png" alt="logo" className="w-full max-w-xs md:max-w-xl h-auto"/>
                        <p className="mt-6 text-lg max-w-2xl md:text-3xl">
                        {item.body}
                        </p>
                    </React.Fragment>
                    ))}
                

                <div className="flex flex-row items-center justify-center gap-8 mt-10">
                    <motion.button 
                        onClick={() => navigate('/contact')}
                        className="px-8 py-3 text-lg font-semibold text-white bg-white/20 border border-white/30 rounded-full shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgb(59, 130, 246)", 
                            boxShadow: "0 10px 15px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95, backgroundColor: "rgb(59, 130, 246)" }}
                        transition={{ duration: 0.3 }}
                    >
                        Get a Quote
                    </motion.button>

                    <button
                        onClick={() => {
                        document
                            .getElementById("learn-more")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex flex-col items-center gap-1 text-white hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out"
                    >
                        <span className="text-lg font-medium">Learn More</span>
                        <IoIosArrowDown className="text-2xl animate-bounce" />
                    </button>
                </div>
            </div>
        </div>

        <About/>  

        <ServiceCard/>

        <Contact/>

        <Footer/>
    </div>
  );
}
