import { useEffect, useState } from "react";
import QuoteLink from "../CustomUi/QuoteLink";

export default function About() {
    const [aboutSection, setAboutSection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${API_URL}/api/get-about/`);
                if (!response.ok) {
                    throw new Error(`error status ${response.status}`);
                }
                const result = await response.json();
                setAboutSection(result);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return(
        <div
            id="learn-more"
            className="flex flex-col gap-6 w-full py-12 md:px-8 scroll-mt-16 md:mt-scroll-24 text-gray-800 md:flex-row md:justify-between md:items-center"
            >
            {aboutSection && aboutSection.map((items) => (
                <div key={items.id} className="flex flex-col px-4 gap-4 md:w-1/2 md:gap-12">
                    <h1 className="text-3xl md:text-6xl font-bold">
                        {items.header}
                    </h1>
                    <p className="text-xl text-gray-600 md:text-2xl md:leading-loose">
                        {items.body}
                    </p>
               <    QuoteLink/>
                </div>
            ))}
            <img
                className="w-full md:w-1/2 shadow-lg object-cover aspect-[4/5] md:aspect-[3/2] md:rounded-xl"
                src="deck.jpeg"
                alt="Custom deck by our team"
            />
        </div>
    );
}