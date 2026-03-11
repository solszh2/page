import Link from "next/link";
import { notFound } from "next/navigation";
import catalogData from "../../../data/catalog.json";
import BookCard from "../../../components/BookCard";

// 定义数据格式
type Book = {
  id: string;
  name: string;
  author: string;
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

// 导出静态路由参数（Netlify 静态部署必备）
export function generateStaticParams() {
  return typedCatalogData.map((category) => ({
    id: category.id,
  }));
}

// 导出页面组件（刚才报错就是因为可能漏了这一大段）
export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = typedCatalogData.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] pb-24 animate-fade-up">
      <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[#0071e3] text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>
        <h1 className="text-lg font-semibold text-gray-900 absolute left-1/2 -translate-x-1/2">
          {category.name} 书录
        </h1>
      </nav>

      <header className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
          {category.name}
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl">{category.tagline}</p>
      </header>

      <section className="max-w-7xl mx-auto px-6">
        {category.books && category.books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400">
            书录正在整理中，敬请期待...
          </div>
        )}
      </section>
    </main>
  );
}