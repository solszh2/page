"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 细腻渐变背景 */}
      <div className="absolute inset-0 -z-10 bg-[#f5f5f7]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full bg-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50 rounded-full bg-blob" style={{animationDelay: '-6s'}} />
      </div>

      {/* 文案区域 */}
      <div className="animate-fade-up text-center px-6">
        <div className="glass px-10 py-12 rounded-[32px] shadow-sm max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-relaxed text-gray-900">
            Hi 这里是高教社汽车的书录介绍。
          </h1>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}