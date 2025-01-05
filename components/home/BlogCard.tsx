"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  category: string;
  readTime: string;
  href: string;
  imageUrl: string;
}

export function BlogCard({ title, category, readTime, href, imageUrl }: BlogCardProps) {
  return (
    <Link href={href}>
      <Card className="group h-full overflow-hidden bg-white hover:shadow-lg transition-shadow">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
            <span className="text-[#ff6b00]">{category}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-[#ff6b00] transition-colors">
            {title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}