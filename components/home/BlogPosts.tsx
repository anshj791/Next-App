"use client";

import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways Event Managers Can Increase Event Registration",
    category: "Marketing",
    readTime: "6 min read",
    href: "/blog/increase-event-registration",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Corporate Event Management Best Practices",
    category: "Tips",
    readTime: "10 min read",
    href: "/blog/corporate-event-management",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Do More With Your Event Budget at Your Next Meeting",
    category: "Collaboration",
    readTime: "7 min read",
    href: "/blog/event-budget-tips",
    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Your Complete Guide to the Event Evaluation Process",
    category: "Community",
    readTime: "5 min read",
    href: "/blog/event-evaluation-guide",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "4 Reasons Why Your Event Description Is Hurting Attendance",
    category: "Content",
    readTime: "8 min read",
    href: "/blog/event-description-tips",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
];

export default function BlogPosts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          LATEST BLOG POSTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              category={post.category}
              readTime={post.readTime}
              href={post.href}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}