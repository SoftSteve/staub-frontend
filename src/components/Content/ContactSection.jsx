import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';

export default function Contact() {
    const [contactSection, setContactSection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${API_URL}/api/get-contact/`);
                if (!response.ok) {
                    throw new Error(`error status ${response.status}`);
                }
                const result = await response.json();
                setContactSection(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="flex justify-center w-full">
            {contactSection.map((items) => (
            <div
                key={items.id}
                className="flex flex-col justify-center items-center px-4 gap-8 py-10 md:py-20 w-full md:w-1/2"
            >
                <h1 className="text-3xl md:text-6xl font-bold">{items.header}</h1>
                <p className="text-xl md:text-2xl text-center text-gray-500 md:leading-loose">{items.body}</p>
                <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 px-3 md:py-3 md:px-4 bg-black text-white text-lg font-semibold shadow-md rounded-full"
                >
                Contact Us
                </motion.button>
            </div>
            ))}
        </div>
    );
}