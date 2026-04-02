"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 已删除动态的背景光晕/圆球，保持纯净的渐变背景 */}

      <div className="opacity-0 animate-fade-in-up text-center max-w-4xl z-10 flex flex-col items-center">
        {/* 标题：反白设计，使用纯白并增加微弱阴影确保在亮蓝处也清晰 */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 flex items-center justify-center gap-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
          高教社汽车书目 
          <span className="text-4xl md:text-5xl animate-drive inline-block drop-shadow-lg">🚗</span>
        </h1>
        
        {/* 介绍：高透明度白色 (White/90)，实现次要信息的反白效果 */}
        <p className="text-lg md:text-2xl text-white/90 mb-12 font-medium tracking-[0.25em] drop-shadow-sm uppercase">
          查书 · 看书 · 用书
        </p>

        {/* 按钮：高亮反差设计，白底 + 深蓝文字/阴影 */}
        <a 
          href="/catalog.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-10 py-5 bg-white backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(9,62,220,0.2)] rounded-full text-[#093EDC] font-bold hover:bg-blue-50 hover:shadow-[0_25px_60px_rgba(9,62,220,0.3)] hover:-translate-y-1 transition-all active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="text-base md:text-lg tracking-widest">点击获取汽车电子专业目录</span>
        </a>
      </div>

      {/* 底部探索提示：反白设计 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-fade-in-up">
        <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white">Explore More</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}