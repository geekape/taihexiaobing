/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Camera, Video, Instagram, Mail, ArrowRight, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const portfolioItems = [
  { id: 1, title: "喜庆出门", category: "接亲纪实", src: "https://picsum.photos/seed/chinese_wedding_1/1200/1600" },
  { id: 2, title: "中式秀禾", category: "新娘写真", src: "https://picsum.photos/seed/chinese_wedding_2/1200/800" },
  { id: 3, title: "敬茶改口", category: "情感瞬间", src: "https://picsum.photos/seed/chinese_wedding_3/800/1200" },
  { id: 4, title: "执手礼成", category: "仪式现场", src: "https://picsum.photos/seed/chinese_wedding_4/1200/1200" },
  { id: 5, title: "伴娘团合影", category: "欢聚时刻", src: "https://picsum.photos/seed/chinese_wedding_5/1000/1500" },
  { id: 6, title: "晚宴敬酒", category: "宴会抓拍", src: "https://picsum.photos/seed/chinese_wedding_6/1500/1000" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  // Handle scroll for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-6 flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm text-ink" 
            : "bg-transparent text-white"
        }`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif tracking-[0.2em] uppercase"
        >
          摄影师小兵 <span className={`text-[10px] block tracking-[0.5em] opacity-60 ${isScrolled ? "text-ink" : "text-white"}`}>Xiaobing Studio</span>
        </motion.div>

        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.3em] font-medium">
          <a href="#work" className="hover:text-gold transition-colors">作品集</a>
          <a href="#about" className="hover:text-gold transition-colors">创作理念</a>
          <a href="#services" className="hover:text-gold transition-colors">服务项目</a>
          <a href="#contact" className="hover:text-gold transition-colors">预约咨询</a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center gap-8 text-2xl font-serif"
        >
          <a href="#work" onClick={() => setIsMenuOpen(false)}>作品集</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>创作理念</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>服务项目</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>预约咨询</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-black">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/wedding_main_hero/1920/1080" 
            alt="Wedding Hero" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 font-sans"
          >
            记录生命中最珍贵的婚礼时刻
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-6xl md:text-9xl font-serif font-light leading-tight"
          >
            永恒的 <br />
            <span className="italic">婚礼艺术</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-24 bg-white/30 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 96] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-32 px-6 md:px-24 bg-paper">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 block"
          >
            创作理念
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif leading-relaxed mb-12"
          >
            “我们不只是在拍摄照片，我们是在留住那些<span className="italic">未曾言说</span>、<span className="italic">未曾察觉</span>且<span className="italic">永生难忘</span>的瞬间。”
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm md:text-base text-ink/60 leading-loose font-sans max-w-2xl mx-auto"
          >
            摄影师小兵是一家专注于高端婚礼及电影感叙事的精品工作室。
            我们追求极简主义与情感深度，为珍视瞬间艺术的客户打造永恒的视觉遗产。
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-20 px-4 md:px-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[3/4] mb-6 relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.4em] border border-white/40 px-6 py-3">查看系列</span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gold mb-1 block">{item.category}</span>
                  <h3 className="text-xl font-serif">{item.title}</h3>
                </div>
                <ArrowRight size={16} className="text-ink/30 group-hover:text-gold transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-paper border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4 block">Service Packages</span>
            <h2 className="text-4xl md:text-5xl font-serif">服务项目与报价</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 p-8 bg-white/50 border border-ink/5 hover:border-gold/30 transition-colors"
            >
              <Camera className="text-gold w-8 h-8" strokeWidth={1} />
              <h3 className="text-2xl font-serif">摄影跟拍 <span className="text-gold block text-lg mt-2 font-sans font-light tracking-wider">¥800</span></h3>
              <ul className="space-y-3 text-ink/60 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 精修 30张，200+ 底片全送（拍多少送多少）</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 婚礼当天可修 9张（发朋友圈）</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 拍摄时长：全天 (8小时)</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 p-8 bg-white/50 border border-ink/5 hover:border-gold/30 transition-colors"
            >
              <Video className="text-gold w-8 h-8" strokeWidth={1} />
              <h3 className="text-2xl font-serif">摄像跟拍 <span className="text-gold block text-lg mt-2 font-sans font-light tracking-wider">¥1280</span></h3>
              <ul className="space-y-3 text-ink/60 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 5分钟左右 婚礼短片MV</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 全程1小时+ 原片素材（拍多少送多少）</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 拍摄时长：全天 (8小时)</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 p-8 bg-white border border-gold/20 shadow-xl shadow-gold/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gold text-white text-[9px] px-3 py-1 uppercase tracking-widest">Recommended</div>
              <div className="flex gap-3">
                <Camera className="text-gold w-8 h-8" strokeWidth={1} />
                <Video className="text-gold w-8 h-8" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif">摄影 + 摄像 <span className="text-gold block text-lg mt-2 font-sans font-light tracking-wider">¥1580</span></h3>
              <ul className="space-y-3 text-ink/60 text-sm leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 10-15分钟左右 婚礼短片MV</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 送无人机航拍 + 10张精修全家福</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 底片全送 + 全程1小时原片素材（含航拍）</li>
                <li className="flex items-start gap-3"><div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0" /> 拍摄时长：全天 (8小时)</li>
              </ul>
            </motion.div>
          </div>

          {/* Notes */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 p-10 border border-ink/5 bg-white/30 backdrop-blur-sm"
          >
            <h4 className="text-ink mb-8 text-xs uppercase tracking-[0.4em] font-semibold flex items-center gap-4">
              注意事项 <div className="h-[1px] flex-1 bg-ink/10" />
            </h4>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-[11px] text-ink/50 leading-loose font-sans">
              <p>1. 距离大于 30 公里，需要报销车费</p>
              <p>2. 如需提前一晚到达，需要提供食宿</p>
              <p>3. 定金 30% 确认档期，当天拍摄结束支付尾款</p>
              <p>4. 精修照片及视频皆婚礼结束后 15 天内返，上传百度网盘</p>
              <p>5. 拍摄成片默认认可作为宣传使用，如有不便请提前告知</p>
              <p>6. 拍摄时间超时按一小时 50 算</p>
              <p>7. 无人机航拍需看当地是否是适飞区，还有天气情况</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-serif mb-12"
          >
            让我们共同创造 <br /> <span className="italic text-gold">永恒</span> 的记忆。
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-20">
            <div className="group flex flex-col items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <Mail size={20} className="group-hover:text-gold transition-colors" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em]">微信咨询: zcb861013016</span>
            </div>
            <div className="group flex flex-col items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <Camera size={20} className="group-hover:text-gold transition-colors" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em]">全网统一名称: 摄影师小兵</span>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] opacity-40">
            <p>© 2026 摄影师小兵工作室. 版权所有.</p>
            <div className="flex gap-8">
              <a href="#">隐私政策</a>
              <a href="#">服务条款</a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cursor (Optional but adds premium feel) */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: -16,
          y: -16,
        }}
        style={{
          translateX: "var(--mouse-x)",
          translateY: "var(--mouse-y)",
        }}
      />
    </div>
  );
}

// Add mouse movement listener for the custom cursor
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
}
