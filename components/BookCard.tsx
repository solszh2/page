import Link from "next/link";

interface Book {
  id?: string;
  name: string;
  author: string;
  price?: string; 
  tagline: string;
  coverImage: string;
  purchaseLink: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="glass rounded-[24px] p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white h-full">
      {/* 封面图 */}
      <div className="aspect-[3/4] w-full mb-4 rounded-xl overflow-hidden shadow-inner bg-gray-50 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={book.coverImage || "https://via.placeholder.com/150x200?text=暂无封面"} 
          alt={book.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 核心信息 */}
      <div className="space-y-2 mb-6 flex-1">
        <h4 className="text-xl font-bold text-gray-900 line-clamp-2">{book.name}</h4>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">{book.author}</span>
          {book.price && <span className="font-bold text-[#ff3b30]">¥{book.price}</span>}
        </div>
        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed italic mt-2">
          “{book.tagline}”
        </p>
      </div>

      {/* 在线阅读链接按钮 */}
<a 
  href={book.purchaseLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto w-full py-3 bg-brand-dark text-white hover:bg-brand-main active:scale-[0.98] rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2"
>
        <span>在线阅读</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}