"use client";

import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  price: number;
  imageUrl: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },
  {
    id: 1,
    title: "Camping Trip",
    location: "ATLANTIQUE PARC: Les Mathes, France",
    date: "Fri 28 Feb 2025, 1:00 PM EST",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80",
    category: "Trip / Camp"
  },

  
];

export default function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Card className="group cursor-pointer overflow-hidden">
            <div className="relative">
              {/* Category Tag */}
              <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                {event.category}
              </span>
              
              {/* Date Tag */}
              <div className="absolute top-4 left-4 bg-white rounded-lg overflow-hidden">
                <div className="bg-[#ff6b00] text-white px-2 py-1 text-sm text-center">
                  {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                </div>
                <div className="px-3 py-1 text-center">
                  {new Date(event.date).getDate()}
                </div>
              </div>

              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-lg font-bold text-[#ff6b00]">
                  ${event.price}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}