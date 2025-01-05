'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-600 hover:text-gray-900">About us</Link></li>
              <li><Link href="/help-center" className="text-gray-600 hover:text-gray-900">Help center</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/venues" className="text-gray-600 hover:text-gray-900">Venues</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Send us an email</Link></li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><Link href="/create-account" className="text-gray-600 hover:text-gray-900">Create an account</Link></li>
              <li><Link href="/sell-tickets" className="text-gray-600 hover:text-gray-900">Sell tickets online</Link></li>
              <li><Link href="/my-tickets" className="text-gray-600 hover:text-gray-900">My tickets</Link></li>
              <li><Link href="/forgot-password" className="text-gray-600 hover:text-gray-900">Forgot your password?</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing and fees</Link></li>
            </ul>
          </div>

          {/* Event Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/events/concert-music" className="text-gray-600 hover:text-gray-900">Concert / Music</Link></li>
              <li><Link href="/events/trip-camp" className="text-gray-600 hover:text-gray-900">Trip / Camp</Link></li>
              <li><Link href="/events/sport-fitness" className="text-gray-600 hover:text-gray-900">Sport / Fitness</Link></li>
              <li><Link href="/events/cinema" className="text-gray-600 hover:text-gray-900">Cinema</Link></li>
              <li><Link href="/events/all" className="text-gray-600 hover:text-gray-900">All categories</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-600">Phone: +123456789</p>
              <p className="text-gray-600">Fax: +123456789</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700"><FaFacebook size={24} /></a>
                <a href="#" className="text-red-600 hover:text-red-700"><FaInstagram size={24} /></a>
                <a href="#" className="text-red-500 hover:text-red-600"><FaYoutube size={24} /></a>
                <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex space-x-4 text-sm text-gray-600">
              <Link href="/terms">Terms of service</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/cookies">Cookie policy</Link>
              <Link href="/gdpr">GDPR compliance</Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Language</span>
              <select className="border rounded px-2 py-1">
                <option>English</option>
                {/* Add more language options */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 