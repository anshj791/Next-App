import Navbar from "@/components/layout/Navbar";
import EventCarousel from "@/components/home/EventCarousel";
import EventGrid from "@/components/home/EventGrid";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import BlogPosts from "@/components/home/BlogPosts";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <EventCarousel />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <EventGrid />
        <FeaturedCategories />
        </div>
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}