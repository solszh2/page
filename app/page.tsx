"use client";
import { useState, useMemo } from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import catalogData from "../data/catalog.json";

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

  // 使用 useMemo 实现实时过滤逻辑
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return typedCatalogData;
    const lowerTerm = searchTerm.toLowerCase();

    return typedCatalogData.filter((category) => {
      // 1. 匹配模块层级（模块名称、模块介绍）
      const matchCategory = 
        category.name.toLowerCase().includes(lowerTerm) || 
        category.tagline.toLowerCase().includes(lowerTerm);
        
      // 2. 匹配书籍层级（书籍名称、作者、推荐语）
      const matchBooks = category.books?.some((book) => 
        book.name.toLowerCase().includes(lowerTerm) || 
        book.tagline.toLowerCase().includes(lowerTerm) ||
        book.author.toLowerCase().includes(lowerTerm)
      );
      
      // 只要满足其一，该模块就会在首页显示
      return matchCategory || matchBooks;
    });
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* 搜索框区域 */}
        <div className="mb-12 flex justify-center animate-fade-up">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="通过模块名称或书籍关键词进行检索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent text-gray-900 transition-all text-base md:text-lg bg-white"
            />
            {/* 搜索图标 */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>

        {/* 模块网格 */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            没有找到与 <span className="text-[#0071e3] font-semibold">"{searchTerm}"</span> 相关的模块或书籍
          </div>
        )}
      </section>

      <footer className="py-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} 高教社汽车 · 保持克制
      </footer>
    </main>
  );
}