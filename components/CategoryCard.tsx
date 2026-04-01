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
      <div className="glass-card rounded-[32px] overflow-hidden cursor-pointer h-full flex flex-col p-3">
        {/* 增加高度并使用 contain 确保封面完整 */}
        <div className="h-72 overflow-hidden rounded-[24px] bg-gray-50/50 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={category.coverImage} 
            alt={category.name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-2"
          />
        </div>
        
        <div className="p-5 flex-1 flex flex-col justify-center">
          {/* 类别名称：纯黑 */}
          <h3 className="text-xl font-bold mb-2 text-black">{category.name}</h3>
          {/* 介绍文字：纯黑、非斜体 */}
          <p className="text-black/80 text-sm leading-relaxed line-clamp-2 italic-none">
            {category.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}