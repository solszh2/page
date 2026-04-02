import Link from "next/link";
import { notFound } from "next/navigation";
import catalogData from "@/data/catalog.json";
import BookCard from "@/components/BookCard";

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

export function generateStaticParams() {
  return typedCatalogData.map((category) => ({
    id: category.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const category = typedCatalogData.find((c) => c.id === resolvedParams.id);

  if (!category) {
    notFound();
  }

  return (
    // 去除固定底色，透出全局噪点和渐变
    <main className="min-h-screen relative z-10 pb-24 animate-fade-up">
      {/* iOS 毛玻璃导航栏 */}
      <nav className="glass-nav sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-brand-dark text-sm font-semibold hover:opacity-70 transition-opacity flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          返回书目
        </Link>
        <h1 className="text-base font-bold text-brand-dark absolute left-1/2 -translate-x-1/2">
          {category.name}
        </h1>
      </nav>

      <header className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark mb-3">
          {category.name}
        </h2>
        <p className="text-brand-dark/60 text-lg max-w-2xl font-medium">{category.tagline}</p>
      </header>

      <section className="max-w-7xl mx-auto px-6">
        {category.books && category.books.length > 0 ? (
          <>
            {/* 书籍列表 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
              {category.books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            
            {/* 新增：在已添加的书籍之后，显示更多书籍还在整理中的提示 */}
            <div className="mt-20 mb-10 flex flex-col items-center justify-center text-brand-dark/40">
              <div className="w-12 h-[2px] bg-brand-dark/10 mb-4 rounded-full"></div>
              <p className="text-sm font-medium tracking-wide">更多书录还在整理中，敬请期待...</p>
            </div>
          </>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-brand-dark/40">
            {/* 原本针对完全没有书的分类的大提示，已移入 div 内部防止语法报错 */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4 opacity-50">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <p>书录正在整理中，敬请期待...</p>
          </div>
        )}
      </section>
    </main>
  );
}