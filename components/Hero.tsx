"use client";

export default function Hero() {
  return (
    // 关键修改：从单色深蓝改为从偏亮深蓝到深邃蓝的渐变 bg-gradient-to-br from-[#2f689e] to-[#153450]
    <section className="relative w-full min-h-[55vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#2f689e] to-[#153450]">
      {/* 背景光晕：保留光晕，在渐变上增加细腻的层次 */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-200/10 rounded-full blur-[100px] -z-10 mix-blend-overlay animate-drift-slow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-300/10 rounded-full blur-[100px] -z-10 mix-blend-overlay animate-drift-slower" />

      <div className="opacity-0 animate-fade-in-up text-center max-w-3xl z-10 flex flex-col items-center mt-12">
        
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.15em] text-white mb-5 flex items-center justify-center gap-2 ml-24">
          高教社汽车书目 <span className="text-3xl md:text-4xl animate-drive inline-block ml-2">🚗</span>
        </h1>
        <p className="text-base md:text-xl text-white/80 mb-10 font-medium tracking-[0.2em]">
          查书 · 看书 · 用书
        </p>

        <a 
          href="/catalog.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-7 py-3.5 bg-white/95 backdrop-blur-lg border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.1)] rounded-full text-[#1c2d37] font-semibold hover:bg-white hover:shadow-md transition-all active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="text-sm md:text-base tracking-wider">点击获取汽车电子专业目录</span>
        </a>
      </div>

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-fade-in-up z-30 pointer-events-none text-white/70" style={{ animationDelay: '400ms' }}>
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Explore</span>
        <svg className="animate-float-soft" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}