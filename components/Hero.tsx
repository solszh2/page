"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[55vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 背景光晕调整为参考图的浅蓝色 */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10 animate-drift-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 animate-drift-slower" />

      <div className="opacity-0 animate-fade-in-up text-center max-w-3xl z-10 flex flex-col items-center mt-12">
        {/* 标题：黑色 */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-black mb-5 flex items-center justify-center gap-2">
          高教社汽车书目 <span className="text-3xl md:text-4xl animate-drive inline-block ml-2">🚗</span>
        </h1>
        {/* 介绍：黑色 */}
        <p className="text-base md:text-xl text-black/70 mb-10 font-medium tracking-[0.2em]">
          查书 · 看书 · 用书
        </p>

        <a 
          href="/catalog.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-lg border border-white shadow-sm rounded-full text-black font-semibold hover:bg-white hover:shadow-md transition-all active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="text-sm md:text-base tracking-widest">点击获取汽车电子专业目录</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-fade-in-up">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-black">Explore</span>
        <svg className="animate-float-soft" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}