"use client";
import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import catalogData from "@/data/catalog.json";

type Book = {
  id: string;
  name: string;
  author: string;
  price?: string;
  tagline: string;
  coverImage: string;
  purchaseLink: string;
};

type Category = {
  id: string;
  name: string;
  tagline: string;
  coverImage: string;
  books: Book[];
};

const typedCatalogData = catalogData as Category[];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return typedCatalogData;
    const lowerTerm = searchTerm.toLowerCase();

    return typedCatalogData.filter((category) => {
      const matchCategory = 
        category.name.toLowerCase().includes(lowerTerm) || 
        category.tagline.toLowerCase().includes(lowerTerm);
        
      const matchBooks = category.books?.some((book) => 
        book.name.toLowerCase().includes(lowerTerm) || 
        book.tagline.toLowerCase().includes(lowerTerm) ||
        book.author.toLowerCase().includes(lowerTerm)
      );
      
      return matchCategory || matchBooks;
    });
  }, [searchTerm]);

 return (
    // 关键修改：移除之前的 bg-white，让 globals.css 的浅蓝渐变透出来
    <main className="min-h-screen relative z-10">
      <Hero />
      
      {/* 移除 bg-white */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-14 flex justify-center animate-fade-up">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="搜索模块名称或书籍关键词..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              // 搜索框保持白底，这样在浅蓝渐变的背景上会显得非常清爽、立体
              className="w-full pl-6 pr-14 py-4 rounded-full bg-white/90 backdrop-blur-sm border border-white shadow-sm text-[#1c2d37] placeholder-[#1c2d37]/40 text-base focus:bg-white focus:ring-2 focus:ring-[#2f689e] focus:border-transparent outline-none transition-all"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#1c2d37]/40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>

        {/* 模块网格 */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-brand-dark/50">
            未找到与 <span className="font-semibold text-brand-dark">"{searchTerm}"</span> 相关的结果
          </div>
        )}
      </section>

      <footer className="py-12 text-center text-brand-dark/50 text-xs font-medium uppercase tracking-wider">
        @2026中职二部 交通建筑分社
      </footer>
    </main>
  );
}