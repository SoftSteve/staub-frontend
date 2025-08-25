import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import QuoteLink from "../CustomUi/QuoteLink";

const services = [
  {
    title: "Custom Decks",
    description: "Beautifully crafted decks built to last.",
    image: "service-deck.jpg",
  },
  {
    title: "Home Additions",
    description: "Expand your space with seamless, high-quality additions.",
    image: "service-additions.jpg",
  },
  {
    title: "Sunrooms",
    description: "Enjoy sunlight year-round with custom-designed sunrooms.",
    image: "service-sunroom.jpg",
  },
  {
    title: "Basements",
    description: "Transform your basement into a functional, stylish living area.",
    image: "service-basement.jpg",
  },
  {
    title: "Kitchens",
    description: "Modern and efficient kitchens tailored to your lifestyle.",
    image: "service-kitchen.jpg",
  },
  {
    title: "Fences",
    description: "Durable and attractive fences to define your property.",
    image: "service-fence.jpg",
  },
  {
    title: "Roofing",
    description: "Reliable roofing solutions that protect and enhance your home.",
    image: "service-roofing.jpg",
  },
];

export default function ServiceCard() {
    return(
        <div className="flex flex-col w-full gap-8 px-4 md:py-20 md:px-12">

            <div className="flex flex-col gap-4 md:w-1/2 md:gap-6">
                <h1 className="text-3xl font-semibold md:text-6xl md:font-bold">Services</h1>
                <p className="text-xl text-gray-400 md:text-2xl">Serving Central Pennsylvania, we provide high-quality, professional contracting services. 
                    From custom decks and fences to full home renovations, our experienced team delivers 
                    reliable, efficient, and precise work — every project handled with skill and integrity.</p>
                <QuoteLink/>
            </div>
            
            <section className="">
                <Swiper
                    speed={600}
                    resistance={true}
                    resistanceRatio={0.1}
                    modules={[ Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.1}
                    breakpoints={{
                    768: { slidesPerView: 3.1 },
                    }}
                    autoplay={{ delay: 5000 }}
                >
                    {services.map((service, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative flex flex-col rounded-xl shadow-md w-full h-[400px] overflow-hidden">
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${service.image}')` }}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30" />
                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-end h-full pb-6 px-6 text-white">
                            <h2 className="text-xl font-bold">{service.title}</h2>
                            <p className="text-sm mt-2">{service.description}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </section>
        </div>
        
    );
}