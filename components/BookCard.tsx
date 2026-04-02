"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // 检查实际内容高度是否大于可视高度，如果是，则说明内容被截断了（超过了3行）
      setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [book.tagline]);

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
      <div className="space-y-2 mb-6 flex-1 flex flex-col">
        <h4 className="text-xl font-bold text-gray-900 line-clamp-2">{book.name}</h4>
        <div className="flex justify-between items-center text-sm">
          {/* 将作者名字颜色设为 #3498db 并加粗 */}
          <span className="text-[#3498db] font-medium">{book.author}</span>
          {book.price && <span className="font-bold text-[#ff3b30]">¥{book.price}</span>}
        </div>
        
        {/* 内容介绍部分：支持展开/收起 */}
        <div className="mt-2 flex-1">
          <p 
            ref={textRef}
            className={`text-sm text-gray-600 leading-relaxed italic ${isExpanded ? '' : 'line-clamp-3'}`}
          >
            “{book.tagline}”
          </p>
          {/* 只有当文字超过3行时，才会渲染这个展开按钮 */}
          {isOverflowing && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#093EDC] text-xs font-semibold mt-1 hover:underline focus:outline-none flex items-center gap-1"
            >
              {isExpanded ? '收起' : '展开全部'}
              <svg 
                className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
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