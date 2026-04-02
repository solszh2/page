"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[55vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 去掉原来的背景光晕，因为我们已经在背景上使用了漂亮的渐变蓝 */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -z-10 animate-drift-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] -z-10 animate-drift-slower" />

      <div className="opacity-0 animate-fade-in-up text-center max-w-3xl z-10 flex flex-col items-center mt-12">
        {/* 标题：改为纯白，以便在蓝底上清晰显示 */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-5 flex items-center justify-center gap-2 drop-shadow-sm">
          高教社汽车书目 <span className="text-3xl md:text-4xl animate-drive inline-block ml-2 drop-shadow-md">🚗</span>
        </h1>
        {/* 介绍：半透明白色 */}
        <p className="text-base md:text-xl text-white/90 mb-10 font-medium tracking-[0.2em] drop-shadow-sm">
          查书 · 看书 · 用书
        </p>

        {/* 按钮：毛玻璃白底 + 蓝色文字 */}
        <a 
          href="/catalog.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-lg border border-white/50 shadow-lg rounded-full text-[#1f64ff] font-semibold hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="text-sm md:text-base tracking-widest">点击获取汽车电子专业目录</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-fade-in-up">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white">Explore</span>
        <svg className="animate-float-soft" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}