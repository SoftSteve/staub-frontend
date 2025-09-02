import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules"; 
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiTalk } from "react-icons/gi";
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";

export default function ServiceCard() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/service-list`);
        if (!response.ok) {
          throw new Error(`error status: ${response.status}`);
        }
        const result = await response.json();
        setServices(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative">
      <Swiper
        speed={600}
        resistance={true}
        resistanceRatio={0.1}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.1}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 3.1 },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = "#custom-prev-button";
          swiper.params.navigation.nextEl = "#custom-next-button";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {services.map((service, i) => (
          <SwiperSlide className="shadow-md" key={i}>
            <motion.div
              onClick={() => navigate('contact')}
              whileHover="hover"
              className="relative cursor-pointer flex flex-col rounded-xl shadow-md w-full h-[400px] md:h-[500px] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${API_URL}${service.image}')` }}
              />

              <motion.div
                initial={{ x: 150, y:-75, opacity: 0 }}
                variants={{
                  hover: { x: 0, y:0, opacity: 1, transition: { duration: 0.4 } },
                }}
                className="absolute flex flex-row gap-2 items-center top-10 right-10 bg-blue-500 cursor-pointer rounded-full shadow-md px-3 py-2 z-30"
              >
                <Link to='contact' className="text-white text-sm md:text-base font-semibold">
                  Learn More
                </Link>
                <GiTalk className="text-white md:text-2xl"/>
              </motion.div>

              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 flex flex-col justify-end h-full pb-6 px-6 text-white">
                <h2 className="text-xl md:text-3xl font-bold">{service.title}</h2>
                <p className="text-sm md:text-lg mt-2">{service.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex absolute inset-y-0 left-0 items-center z-20">
        <button
          id="custom-prev-button"
          className="p-2 bg-white/30 text-white rounded-full hover:bg-black transition"
        >
          <IoIosArrowBack size={24} />
        </button>
      </div>
      <div className="hidden md:flex absolute inset-y-0 right-0 items-center z-20">
        <button
          id="custom-next-button"
          className="p-2 bg-white/30 text-white rounded-full hover:bg-black transition"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </section>
  );
}
