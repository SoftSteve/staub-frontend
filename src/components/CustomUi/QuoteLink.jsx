import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";

export default function QuoteLink() {
    return(
        <motion.button 
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}} 
            className="flex flex-row gap-2 w-fit text-blue-500 items-center"
        >
            <button className="p-2 rounded-full text-2xl md:text-3xl bg-blue-500">
                <GoArrowRight className="text-white font-semibold custom-bounce-right"/>
            </button>
            <h1 className="text-xl md:text-2xl">Get a Quote</h1>
        </motion.button>
    );
}