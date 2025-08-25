import { IoIosArrowDown } from "react-icons/io";
import Contact from "./ContactSection";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
import { motion } from 'framer-motion';
import QuoteLink from "../CustomUi/QuoteLink";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-24 mb-40 md:pb-32">
        {/* Hero Section */}
        <div className="relative flex w-full h-screen overflow-hidden">
            {/* Background video */}
            <video
                src="hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-white text-center">
                <h1 className="text-4xl font-bold leading-tight max-w-3xl md:text-7xl">
                Building Trust. Building Homes. Building Futures.
                </h1>

                <p className="mt-6 text-lg max-w-2xl md:text-3xl">
                With over 40 years of experience, we bring craftsmanship, care, and dedication 
                to every project. From the first handshake to the final nail, your vision is our mission.
                </p>

                {/* CTA Button */}
                <div className="flex flex-row items-center justify-center gap-8 mt-10">
                    {/* Get a Quote Button */}
                    <motion.button 
                        className="px-8 py-3 text-lg font-semibold text-white bg-white/20 border border-white/30 rounded-full shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgb(21, 128, 61)", 
                            boxShadow: "0 10px 15px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95, backgroundColor: "rgb(21, 128, 61)" }}
                        transition={{ duration: 0.3 }}
                    >
                        Get a Quote
                    </motion.button>

                    {/* Learn More Button */}
                    <button
                        onClick={() => {
                        document
                            .getElementById("learn-more")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex flex-col items-center gap-1 text-white hover:text-green-400 transition duration-300 ease-in-out"
                    >
                        <span className="text-lg font-medium">Learn More</span>
                        <IoIosArrowDown className="text-2xl animate-bounce" />
                    </button>
                </div>
            </div>
        </div>

        {/* Learn More Section */}
        <div
            id="learn-more"
            className="flex flex-col gap-6 w-full py-12 md:px-8 scroll-mt-24 text-gray-800 md:flex-row md:justify-between md:items-center"
            >
            <div className="flex flex-col px-4 gap-4 md:w-1/2 md:gap-12">
                <h1 className="text-3xl md:text-6xl font-bold">
                Your Home, 
                Our Craft
                </h1>
                <p className="text-xl md:text-2xl md:leading-relaxed">
                We take pride in delivering exceptional quality at fair prices. From custom decks and fences 
                to full home renovations, no project is too big or too small. Founded by a father and son team 
                with decades of hands-on experience, we treat every home like our own combining skill, care, 
                and honesty in every nail we drive and every board we lay. Your vision is our blueprint.
                </p>
                <QuoteLink/>
            </div>

            <img
                className="w-full md:w-1/2 shadow-lg object-cover aspect-[4/5] md:aspect-[3/2] md:rounded-xl"
                src="deck.jpeg"
                alt="Custom deck by our team"
            />
        </div>
        <ServiceCard/>
        <Contact/>
        <Footer/>
    </div>
  );
}
