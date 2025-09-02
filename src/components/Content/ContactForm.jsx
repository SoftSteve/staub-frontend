import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import Footer from "./Footer";
import confetti from 'canvas-confetti';
import Snackbar from '@mui/material/Snackbar';



export default function ContactForm() {
    const [contactOptions, setContactOptions] = useState([]);
    const [imageLoading, setImageLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${API_URL}/api/get-contact-options/`);
                if (!response.ok) {
                    throw new Error(`error status ${response.status}`);
                }
                const result = await response.json();
                setContactOptions(result);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const postData = {
            name,
            email,
            address,
            phone,
            message
        };
        
        fetch(`${API_URL}/api/guest-message/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setMessage('');

            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#10b981', '#3b82f6', '#facc15', '#ef4444']
            });

            setOpen(true);
        })
        .catch(error => {
            console.error('Error creating post', error);
        });
    };


    

    return(
        <div className="flex flex-col w-full h-full gap-4 bg-blueprint pb-32">
            <div className="w-full h-screen relative overflow-hidden">

                <img
                    onLoad={() => setImageLoading(false)}
                    onError={() => setImageLoading(true)}
                    src="service-additions.jpg"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 z-0" />

                <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-96 gap-8">

                    <div className="md:hidden justify-center">
                    <img 
                        src="staub-logo-1.png" 
                        alt="logo" 
                        className="w-full max-w-xs h-auto"
                    />
                    </div>
                    
                    <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 items-center md:items-start">
                    <h1 className="text-3xl md:text-6xl font-bold text-white">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-white max-w-xl">
                        Have questions or ready to get started? Give us a call today to schedule your free consultation.
                    </p>

                    {contactOptions && contactOptions.map((items) => (
                        <div key={items.id} className="flex flex-col gap-2 md:gap-3 text-white items-center md:items-start">
                   
                        <div className="flex flex-row gap-2 items-center">
                            <h1 className="text-lg md:text-xl">Email:</h1>
                            <a
                            href={`mailto:${items.email}`}
                            className="text-lg md:text-xl underline decoration-white/40 hover:text-blue-300 hover:decoration-blue-300 duration-300 transition-all"
                            >
                            {items.email}
                            </a>
                        </div>

                  
                        <div className="flex flex-row gap-2 items-center">
                            <h1 className="text-lg md:text-xl">Phone:</h1>
                            <a
                            href={`tel:${items.phone}`}
                            className="text-lg md:text-xl underline decoration-white/40 hover:text-blue-300 hover:decoration-blue-300 duration-300 transition-all"
                            >
                            {items.phone}
                            </a>
                        </div>
                        </div>
                    ))}

                    <motion.button 
                        onClick={() => document.getElementById('message-form')?.scrollIntoView({behavior: "smooth"})}
                        className="flex flex-row items-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-white/20 border border-white/30 rounded-full shadow-lg mt-4"
                        whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgb(59, 130, 246)", 
                        boxShadow: "0 10px 15px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95, backgroundColor: "rgb(59, 130, 246)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1>Send a Message</h1>
                        <IoIosArrowDown className="text-xl animate-bounce self-end"/>
                    </motion.button>
                    </div>

                    <div className="hidden md:flex w-full md:w-1/2 justify-center">
                    <img 
                        src="staub-logo-1.png" 
                        alt="logo" 
                        className="w-full max-w-sm md:max-w-2xl h-auto"
                    />
                    </div>

                </div>
                </div>

            <div id="message-form" className="flex flex-col px-4 scroll-mt-16 md:px-12 py-12 gap-8 md:w-1/2 md:self-center md:py-32">
                <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="text-3xl font-bold md:text-6xl">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-500 md:text-2xl">Have a project in mind? Send us a message and we’ll get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6  h-full w-full">
                    <div className="flex flex-row gap-2 justify-evenly">
                        <div className="flex flex-col gap-4 w-full overflow-hidden">
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700">Full Name*</span>
                            <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="border border-black/40 focus:outline-none focus:border-blue-500 focus:border-2 p-2 rounded-xl shadow-md"
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700">Email*</span>
                            <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@email.com"
                            className="border border-black/40 p-2 focus:outline-none focus:border-blue-500 focus:border-2 rounded-xl shadow-md"
                            />
                        </label>
                        </div>

                        <div className="flex flex-col gap-4 w-full overflow-hidden">
                        <label className="flex flex-col gap-1">
                            <span className="text-sm font-medium text-gray-700">Phone*</span>
                            <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="717-999-9999"
                            className="border border-black/40 focus:outline-none focus:border-blue-500 focus:border-2 p-2 rounded-xl shadow-md"
                            />
                        </label>

                        <label className="flex flex-col gap-1 mb-1">
                            <span className="text-sm font-medium text-gray-700">Address*</span>
                            <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="123 Main Street"
                            className="border border-black/40 focus:outline-none focus:border-blue-500 focus:border-2 p-2 rounded-xl shadow-md"
                            />
                        </label>
                        </div>
                    </div>

                    <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-gray-700">Message*</span>
                        <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="border border-black/40 h-40 p-3 focus:outline-none focus:border-blue-500 focus:border-2 rounded-xl shadow-md"
                        />
                    </label>
                    <motion.button 
                        whileTap={{scale:0.95}}
                        whileHover={{scale:1.05}}
                        type="submit" 
                        className="py-2 px-3 self-end rounded-full bg-black text-white text-lg shadow-md"
                    >
                        Send Message
                    </motion.button>
                </form>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Message Sent ✅"
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                />
            </div>
            <Footer/>
            
            </div>


    );
}