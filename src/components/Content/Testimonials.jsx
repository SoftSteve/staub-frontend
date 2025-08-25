import { useState } from "react";

const testimonials =[
    {
    quote: "Staub General Contracting was quick, reasonably priced, and very helpful while building my back patio.",
    name: "John Doe",
    detail: "Back Patio, 1 Week",
    image: "hs-3.jpg",
  },
  {
    quote: "The deck came out better than I could have imagined. They were professional and efficient.",
    name: "Sarah Lee",
    detail: "Custom Deck, 2 Weeks",
    image: "hs-3.jpg",
  },
  {
    quote: "Honest, reliable, and great craftsmanship. I’ll definitely call them again.",
    name: "Michael Smith",
    detail: "Fence Installation, 3 Days",
    image: "hs-3.jpg",
  },
  {
    quote: "They completely transformed my backyard. I couldn’t be happier with the results!",
    name: "Emily Clark",
    detail: "Backyard Remodel, 3 Weeks",
    image: "hs-3.jpg",
  },
  {
    quote: "Professional, friendly, and top-notch work quality. Highly recommended.",
    name: "David Johnson",
    detail: "Kitchen Renovation, 1 Month",
    image: "hs-3.jpg",
  },
]
export default function Testimonials() {
    return(
        <div className="flex flex-col w-full px-4 md:px-8 gap-4">
            <h1 className="text-3xl font-semibold md:text-6xl md:font-semibold">Customer Testimonials</h1>
            <div className="flex flex-row w-full gap-2">
                {testimonials.map((test, i) => (
                    <div className="bg-white/60 text-black text-lg flex flex-col p-3 gap-4 relative md:h-[12.5rem] w-full rounded-xl border border-black/30 shadow-md">
                    <p>{test.quote}</p>
                    <div className="flex flex-row w-full items-center gap-4">
                        <div className="w-16 h-16 bg-center bg-cover inset-0 rounded-full" style={{backgroundImage: `url(${test.image})`}}/>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-semibold">{test.name}</h1>
                            <p className="text-lg text-gray-400">{test.detail}</p>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
         </div>
    );
}