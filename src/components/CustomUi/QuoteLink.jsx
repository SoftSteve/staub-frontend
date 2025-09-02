import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export default function QuoteLink() {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/contact');  
    };
    
    return(
        <motion.div
            onClick={handleContact}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}} 
            className="flex flex-row gap-2 cursor-pointer w-fit text-blue-500 items-center"
        >
            <button className="p-2 rounded-full text-2xl md:text-3xl bg-blue-500 shadow-md">
                <GoArrowRight className="text-white font-semibold custom-bounce-right"/>
            </button>
            <h1 className="text-xl underline decoration-blue-500 md:text-2xl">Get a Quote</h1>
        </motion.div>
    );
}