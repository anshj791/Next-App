"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  href: string;
  className?: string;
}

export function CategoryCard({ title, href, className }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className={cn(
        "group relative h-48 overflow-hidden cursor-pointer",
        className
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-end p-6">
          <h3 className="text-xl font-semibold text-white group-hover:translate-x-2 transition-transform">
            {title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}