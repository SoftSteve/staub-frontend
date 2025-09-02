import QuoteLink from "../CustomUi/QuoteLink";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
    const [serviceSection, setServiceSection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await fetch(`${API_URL}/api/get-service/`);
          if (!response.ok) {
            throw new Error(`error status: ${response.status}`)
          }
          const result = await response.json()
          setServiceSection(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    return(
        <div id="services" className="flex flex-col w-full gap-8 px-4 scroll-mt-24 md:py-20 md:px-12">
          {serviceSection && serviceSection.map((items) => (
            <div key={items.id} className="flex flex-col gap-4 md:w-1/2 md:gap-6">
                <h1 className="text-3xl font-semibold md:text-6xl md:font-bold">{items.header}</h1>
                <p className="text-xl text-gray-600 md:text-2xl md:leading-loose">{items.body}</p>
                <QuoteLink/>
            </div>
          ))}
          <ServiceCard/>
        </div>
        
    );
}