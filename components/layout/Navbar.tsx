"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#ff6b00]">eventic</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for events"
                className="w-full pl-4 pr-10 py-2 rounded-md"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link href="/signin" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Link>
            <Button className="bg-[#ff6b00] hover:bg-[#ff6b00]/90">Sign up</Button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="flex items-center space-x-6 py-3 text-sm">
          <Link href="/" className="text-[#ff6b00]">Home</Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-900">Browse Events</Link>
          <Link href="/explore" className="text-gray-600 hover:text-gray-900">Explore</Link>
          <Link href="/venues" className="text-gray-600 hover:text-gray-900">Venues</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How It works?</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="/tickets" className="text-gray-600 hover:text-gray-900">My tickets</Link>
          <Link href="/create-event" className="text-gray-600 hover:text-gray-900">Add my event</Link>
        </div>
      </div>
    </nav>
  );
}