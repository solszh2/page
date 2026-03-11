"use client";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  tagline: string;
  coverImage: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.id}`} className="block group">
      <div className="glass rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/50 cursor-pointer h-full flex flex-col">
        {/* 封面图 */}
        <div className="h-56 overflow-hidden bg-gray-100">
          <img 
            src={category.coverImage} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {/* 内容 */}
        <div className="p-6 flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">{category.name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{category.tagline}</p>
        </div>
      </div>
    </Link>
  );
}