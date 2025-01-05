"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "The Story (Book your seats)",
    location: "London Grand Theater: London, United Kingdom",
    date: "Sat 01 Mar 2025, 10:00 AM EST",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Summer Music Festival",
    location: "Central Park: New York, USA",
    date: "Sat 15 Jun 2025, 2:00 PM EST",
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Summer Music Festival",
    location: "Central Park: New York, USA",
    date: "Sat 15 Jun 2025, 2:00 PM EST",
    imageUrl: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  // Add more events as needed
];

export default function EventCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="relative h-[600px] group">
      {/* Carousel */}
      <div className="relative h-full overflow-hidden">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative h-full">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-20 left-20 text-white">
                <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
                <p className="text-lg mb-2">{event.location}</p>
                <p className="text-lg mb-6">{event.date}</p>
                <Button className="bg-[#ff6b00] hover:bg-[#ff6b00]/90">
                  BUY TICKETS
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}