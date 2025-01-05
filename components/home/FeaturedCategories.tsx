"use client";

import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Concert / Music",
    href: "/categories/concert-music",
  },
  {
    title: "Trip / Camp",
    href: "/categories/trip-camp",
  },
  {
    title: "Sport / Fitness",
    href: "/categories/sport-fitness",
  },
  {
    title: "Cinema",
    href: "/categories/cinema",
  },
  {
    title: "Museum / Monument",
    href: "/categories/museum-monument",
  },
  {
    title: "Recreation park / Attraction",
    href: "/categories/recreation-park",
  },
  {
    title: "Theater",
    href: "/categories/theater",
  },
  {
    title: "Restaurant / Gastronomy",
    href: "/categories/restaurant",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          FEATURED CATEGORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.href}
              title={category.title}
              href={category.href}
              className="bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80')] bg-cover bg-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}