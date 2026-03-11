"use client";

interface Book {
  name: string;
  author: string;
  tagline: string;
  coverImage: string;
  purchaseLink: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="glass rounded-[20px] p-5 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/80 hover:-translate-y-1">
      {/* 封面与信息 */}
      <div className="flex gap-5 mb-5">
        <div className="w-24 h-32 shrink-0 rounded-lg overflow-hidden shadow-md bg-gray-100">
          <img 
            src={book.coverImage} 
            alt={book.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-lg font-semibold text-gray-900 leading-tight mb-1">{book.name}</h4>
          <p className="text-xs text-gray-400 font-medium mb-2">{book.author}</p>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{book.tagline}</p>
        </div>
      </div>

      {/* 购买按钮 */}
      <div className="mt-auto pt-2">
        <button 
          onClick={() => window.open(book.purchaseLink, '_blank')}
          className="w-full py-2.5 bg-[#0071e3] text-white hover:bg-[#0077ed] active:scale-[0.98] rounded-xl text-sm font-medium transition-all"
        >
          购买链接
        </button>
      </div>
    </div>
  );
}