"use client";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* 氛围感渐变背景 (使用新主题色) */}
      <div className="absolute inset-0 -z-10 bg-brand-lighter/30">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-light/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-main/20 rounded-full blur-3xl" style={{animationDelay: '-6s'}} />
      </div>

      {/* 核心文案区域 */}
      <div className="animate-fade-up text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-brand-dark mb-6">
          高教社汽车书目
          <span className="block text-2xl md:text-3xl mt-4 font-normal text-brand-main">查书 · 看书 · 用书</span>
        </h1>
        
        {/* PDF 下载引导按钮 */}
        <a 
          href="/catalog.pdf" // 记得把实际的 PDF 文件放到 public 文件夹下，并改名为 catalog.pdf
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-brand-dark text-white rounded-full font-medium hover:bg-brand-main transition-colors shadow-md hover:shadow-lg active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          点击获取汽车电子专业目录
        </a>
      </div>
    </section>
  );
}