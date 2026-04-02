"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-6 overflow-hidden">

      <div className="opacity-0 animate-fade-in-up text-center z-10 flex flex-col items-center w-full max-w-4xl">
        
        {/* 修复1：使用 relative inline-block 包裹，让小汽车脱离文档流 */}
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            高教社汽车书目
          </h1>
          {/* 小汽车绝对定位在右侧，不参与父级的居中计算，不管它多大都不会挤压文字 */}
          <span className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-20 text-4xl md:text-5xl animate-drive drop-shadow-lg pointer-events-none">
            🚗
          </span>
        </div>
        
        {/* 修复2：增加 pl-[0.25em] 抵消 tracking 带来的右侧空白，实现视觉的绝对居中 */}
        <p className="text-lg md:text-2xl text-white/90 mb-12 font-medium tracking-[0.25em] pl-[0.25em] drop-shadow-sm uppercase">
          查书 · 看书 · 用书
        </p>

        {/* 按钮（颜色已适配之前的灰蓝渐变） */}
        <a 
          href="/catalog.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-10 py-5 bg-white/95 backdrop-blur-md border border-white/40 shadow-[0_20px_50px_rgba(108,148,198,0.2)] rounded-full text-[#6c94c6] font-bold hover:bg-white hover:shadow-[0_25px_60px_rgba(108,148,198,0.35)] hover:-translate-y-1 transition-all active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span className="text-base md:text-lg tracking-widest pl-[0.1em]">点击获取汽车电子专业目录</span>
        </a>
      </div>

      {/* 底部探索提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-fade-in-up">
        {/* 修复3：增加 pl-[0.4em] 抵消 tracking-[0.4em] 的偏差，让 Explore More 完全垂直对齐上方的按钮 */}
        <span className="text-[11px] tracking-[0.4em] pl-[0.4em] uppercase font-bold text-white whitespace-nowrap">
          Explore More
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}