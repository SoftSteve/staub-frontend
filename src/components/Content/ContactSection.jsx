import { motion } from 'framer-motion';
export default function Contact() {
    return(
        <div className="flex flex-col md:w-1/2 justify-center items-center self-center px-4 gap-8 py-10 md:py-20">
            <h1 className="text-3xl font-semibold md:text-6xl font-bold">Lets Work Together</h1>
            <p className="text-xl text-center text-gray-500 md:text-2xl">Whether you're planning a custom deck, a new fence, or a full home renovation, we're here to bring your vision 
                to life. Share your ideas, ask questions, or request a free consultation. We'll work with you every step of 
                the way to make your project simple, stress-free, and built to last.</p>
            <motion.button 
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className="py-2 px-3 bg-black text-white text-lg font-semibold shadow-md rounded-full md:py-3 md:px-4"
            >
                Contact Us
            </motion.button>
        </div>
    );
}