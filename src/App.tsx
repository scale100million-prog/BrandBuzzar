/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star,
  MessageCircle,
  Play,
  TrendingUp,
  Zap,
  Globe,
  Users,
  Timer
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

function Counter({ target }: { target: number }) {
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, target, { 
      duration: 2,
      ease: "easeOut"
    });
    return controls.stop;
  }, [count, target]);

  return <motion.span>{rounded}</motion.span>;
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="text-vsl-red font-bold font-mono text-xl md:text-2xl leading-none tabular-nums flex items-center gap-2">
      <Timer className="w-5 h-5" />
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans text-[#1A1A2E] pb-24">
      {/* VSL Landing Page Header */}
      <header className="relative pt-6 md:pt-12 pb-0 px-4 text-center overflow-hidden">
        {/* Decorative Grid and Grains */}
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-brand-yellow/10 via-transparent to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100 mb-8 md:mb-16"
        >
          <div className="bg-[#FFC700] p-1.5 rounded-full flex shrink-0">
            <Star className="w-4 h-4 text-slate-900" fill="currentColor" />
          </div>
          <p className="text-sm md:text-base">
            <span className="text-[#FF8A00] font-black"><Counter target={100} />+</span> <span className="text-slate-500 font-bold ml-1">Manufacturers Helped</span>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-[38px] leading-[1.1] md:text-6xl lg:text-[76px] font-extrabold tracking-tight mb-8 md:mb-12 text-[#1E1E31]"
          >
            Attention Manufacturers and <br className="hidden md:block" /> 
            Exporters in India: <span className="text-[#FF8A00] block mt-2">Your Next Big Order Is Already Going to a Competitor.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#4A4B65] max-w-4xl mx-auto leading-relaxed mb-8 md:mb-16 font-medium"
          >
            Right now a buyer in <span className="text-[#1E1E31] font-black">Dubai, Australia, or India</span> is searching Google for <br className="hidden md:block" /> your product. He will call whoever shows up first. <span className="text-[#1E1E31] font-black">We make sure they find you. Not your competitor.</span>
          </motion.p>
        </div>

        {/* VSL Section */}
        <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
             <Play className="w-6 h-6 text-brand-orange" fill="currentColor" /> Watch this first.
          </h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8 relative rounded-2xl md:rounded-[32px] overflow-hidden border-4 md:border-8 border-white shadow-2xl bg-black aspect-video group"
          >
            {/* @ts-ignore */}
            <wistia-player media-id="mn5yvl7243" videoFoam="true" className="w-full h-full block"></wistia-player>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-slate-600 mb-10 font-medium italic">
              We show you what a buyer sees when they search for your product on Google right now — and why they are <span className="relative inline-block text-slate-900 font-bold">
                calling someone else.
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-0.5 left-0 h-[6px] bg-brand-orange/20 -z-10 rounded-sm"
                />
              </span>
            </p>
            <a 
              href="https://calendly.com/buzzarbrand/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glow-yellow text-slate-900 md:text-2xl font-black px-12 py-7 rounded-full inline-flex items-center justify-center text-center leading-tight active:scale-95 w-full md:w-auto relative z-20 cursor-pointer"
            >
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 2 — SOCIAL PROOF */}
      <section className="pt-12 pb-16 px-4 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-200 mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Success Stories</span>
            <div className="w-2 h-2 bg-brand-yellow rounded-full" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-16 text-slate-900">
            Real Results for <span className="text-blue-600">Manufacturers.</span> <br />
            Verified by <span className="text-slate-400 italic">Founders.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Chitranjan Dunake"
            role="CEO, Triface International"
            quote="Brand Buzzar helped us improve our SEO and attract direct buyer inquiries from Google. We started getting more serious prospects who were already searching for our services."
            imgId="1DhoKrcuf42jU6BxcV0jrJVQSQNoz9jOS"
          />
          <TestimonialCard 
            name="Mihir Parekh"
            role="CEO, Varahi Soft"
            quote="After working with Brand Buzzar, our website started bringing more high-intent leads directly from Google. Their SEO service helped us get visibility in front of real buyers."
            imgId="1r60oF-dnpc7rEs7_7n6yUtm6wF793-EX"
            highlight
          />
          <TestimonialCard 
            name="Yogesh Patel"
            role="CEO, DrCardio"
            quote="Brand Buzzar helped DrCardio rank better on Google and generate more direct inquiries from interested buyers. Their SEO work brought us quality leads, not just traffic."
            imgId="11f_vncXl68b7FmkfsBcVV2VgOxm6W5XQ"
            imgClass="object-top"
          />
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://calendly.com/buzzarbrand/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow-yellow md:text-xl px-12 py-6 rounded-full active:scale-95 inline-flex items-center justify-center text-center relative z-20 cursor-pointer"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>

      {/* SECTION 3 — THE PROBLEM (REDESIGNED) */}
      <section className="pt-16 pb-12 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-orange/5 blur-[100px] pointer-events-none" />
          <h2 className="font-display text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-[#1E1E31] leading-none">
            YOUR PRODUCT IS GOOD.
          </h2>
          <h2 className="font-display text-3xl md:text-5xl font-black text-[#FF8A00] tracking-tight uppercase leading-none">
            BUYERS JUST CANNOT FIND YOU.
          </h2>
          <div className="mt-8 space-y-4">
            <p className="text-xl md:text-2xl text-[#4A4B65] font-bold max-w-4xl mx-auto leading-tight">
              Serious buyers are searching for what you make right now. If they don't find you, they call your competitor.
            </p>
            <p className="text-lg text-[#8888A0] font-medium max-w-3xl mx-auto">
              This is not a product problem. It is a visibility problem. And it is solvable.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start relative">
          {/* Timeline Rail Background */}
          <div className="absolute top-0 left-[420px] bottom-0 w-[2px] bg-slate-100 hidden lg:block" />

          {/* Left Column: Why Traditional Methods Fail */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-orange/20" />
              <h3 className="text-lg font-black text-[#1E1E31] leading-tight mb-8 uppercase tracking-wider">
                Why Traditional Methods Are Failing You:
              </h3>
              
              <div className="bg-[#F8FAFF] p-8 rounded-3xl border border-blue-50/50">
                <p className="text-lg md:text-xl text-[#6B7280] italic leading-relaxed font-medium">
                  "We help manufacturers in Gujarat's industrial belt stop being invisible and start getting calls."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The 3 Points */}
          <div className="lg:col-span-8 space-y-6 relative ml-0 lg:ml-12">
            {[
              {
                id: "01",
                title: "The Exhibition Trap",
                desc: "Spending ₹2L-10L to come home with business cards that go nowhere.",
                delay: 0.1
              },
              {
                id: "02",
                title: "The IndiaMART Race to the Bottom",
                desc: "Being placed next to 200 competitors where the only value is 'cheapest price'.",
                delay: 0.2
              },
              {
                id: "03",
                title: "The Dubai/Australia Gap",
                desc: "Serious international buyers aren't on IndiaMART; they are searching Google and ChatGPT.",
                delay: 0.3
              }
            ].map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: point.delay }}
                className="flex items-center gap-6 group relative"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex shrink-0 w-12 h-12 bg-white rounded-full items-center justify-center border-2 border-brand-orange shadow-lg shadow-brand-orange/20 relative z-10 -ml-18">
                  <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                </div>

                <div className="flex-1 bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/40 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="shrink-0 w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl text-xl font-black text-[#1E1E31] border border-slate-100">
                    {point.id}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-black text-[#1E1E31]">{point.title}</h4>
                    <p className="text-[#64748B] font-bold text-base md:text-lg flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-brand-orange shrink-0" />
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <a 
            href="https://calendly.com/buzzarbrand/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow-yellow md:text-xl px-12 py-6 rounded-full active:scale-95 font-black uppercase tracking-tight inline-flex items-center justify-center text-center relative z-20 cursor-pointer"
          >
            Book Your Strategy Call
          </a>
        </div>
      </section>

      {/* SECTION 4 — ABOUT (REDESIGNED) */}
      <section className="pt-12 pb-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white px-5 py-1.5 rounded-full shadow-sm border border-slate-100 mb-10"
          >
            <div className="w-1.5 h-1.5 bg-[#FF8A00] rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#8888A0]">The Brand Buzzar Story</span>
            <div className="w-1.5 h-1.5 bg-[#FF8A00] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-[#1E1E31]">
              We Are Not a Generic Agency. <br />
              <span className="text-[#FF8A00]">We Work Inside Your Market.</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-10 text-lg md:text-xl text-[#4A4B65] font-medium leading-relaxed mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We built Brand Buzzar in <span className="text-[#1E1E31] font-black border-b-4 border-brand-yellow/30 pb-0.5">Vadodara</span> — right in the heart of India's industrial belt. We don't sit in glass towers in Mumbai or Delhi; we are on the ground where the product is actually being made.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We kept seeing the same frustration: manufacturers with world-class products who were completely invisible to global buyers. Every agency they tried offered them "traffic reports" — <span className="relative inline-block italic font-black text-[#1E1E31] text-2xl">
                but nobody gave them buyers.
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                  className="absolute bottom-1 left-0 h-[8px] bg-[#FF8A00]/20 -z-10 rounded-sm"
                />
              </span>
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { label: "Location", val: "Vadodara-based", sub: "Gujarat Industrial Belt", icon: <Globe className="w-5 h-5 text-[#FF8A00]" /> },
              { label: "Track Record", val: "Verified ROI", sub: "AU, KU, UAE Markets", icon: <TrendingUp className="w-5 h-5 text-[#FF8A00]" /> },
              { label: "Commitment", val: "6 Clients Max", sub: "Per Quarter Exclusivity", icon: <Star className="w-5 h-5 text-[#FF8A00]" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 relative group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-slate-100 group-hover:bg-brand-yellow/10 transition-colors">
                  {stat.icon}
                </div>
                <p className="text-[#FF8A00] font-black text-xs uppercase tracking-widest mb-3">{stat.label}</p>
                <p className="text-[#1E1E31] font-black text-2xl leading-tight mb-2">{stat.val}</p>
                <p className="text-sm font-bold text-[#8888A0]">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFF] p-10 md:p-16 rounded-[60px] border border-blue-50 relative overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 blur-3xl rounded-full pointer-events-none" />
            <p className="text-2xl md:text-3xl text-[#1E1E31] font-black italic leading-[1.4] relative z-10">
              "We take a maximum of 6 manufacturers per quarter. One person from our team owns your account, knows your product, and works until the buyers come in."
            </p>
          </motion.div>

          <div className="mt-20">
            <a 
              href="https://calendly.com/buzzarbrand/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glow-yellow md:text-xl px-12 py-6 rounded-full active:scale-95 font-black uppercase tracking-tight inline-flex items-center justify-center text-center relative z-20 cursor-pointer"
            >
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="pt-16 pb-12 px-4 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#1E1E31] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Will this work for my product?",
                a: "If buyers search Google for products in your category — and they do — this works. Before we take you on we check whether that buyer demand actually exists for what you make. If it does not, we tell you on the discovery call and we do not take your money."
              },
              {
                q: "I tried a digital marketing agency before and got nothing. How is this different?",
                a: "The agency you tried most likely tracked website visits and page rankings. We track one thing: how many serious buyers called you this month. We also back it with a guarantee in writing. The agency you tried before almost certainly did not."
              },
              {
                q: "How much of my time does this need?",
                a: "One 30-minute call per week in the first month. Less after that. Your job is to tell us about your product and buyers in week one and to reply to the buyers who start calling. Our team handles everything else."
              },
              {
                q: "What if 90 days pass and we still have not gotten buyers?",
                a: "We keep working at no extra cost until you do. That is the guarantee, in writing. We only take on manufacturers where we are confident the result is achievable. We do not say yes to everyone."
              },
              {
                q: "Why only 6 manufacturers per quarter?",
                a: "Every client gets one person from our team working their account from day one. That person cannot do this well for 30 clients at once. Six is the number that lets us deliver and back it with a guarantee."
              },
              {
                q: "We already have IndiaMART. Do we need to stop?",
                a: "No. Keep it running. Most manufacturers find that within 6 months the quality of buyers coming in from Google is far higher and they reduce IndiaMART on their own. That decision is always yours."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
                <summary className="p-6 md:p-8 cursor-pointer list-none flex items-center justify-between font-bold text-lg md:text-xl select-none text-[#1E1E31] hover:text-[#FF8A00] transition-colors">
                  <span className="max-w-[90%] leading-tight">{faq.q}</span>
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center transition-transform group-open:rotate-45">
                    <span className="text-3xl font-light text-slate-300">+</span>
                  </div>
                </summary>
                <div className="px-8 pb-8 text-[#4A4B65] leading-relaxed font-medium text-base md:text-lg">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="pt-16 pb-16 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4 mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black mb-2 text-slate-900 leading-tight">You Make a Good Product.</h2>
            <h2 className="font-display text-4xl md:text-6xl font-black text-blue-600 tracking-tight leading-tight uppercase italic">Serious Buyers Should Be Finding You.</h2>
          </motion.div>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-16 font-bold max-w-2xl mx-auto leading-relaxed">
            Right now they are searching. They are calling whoever shows up. One conversation can change whether that is you or your competitor.
          </p>

          <a 
            href="https://calendly.com/buzzarbrand/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow-yellow text-slate-900 md:text-3xl font-black px-16 py-8 rounded-full inline-flex items-center justify-center text-center leading-tight active:scale-95 shadow-2xl shadow-brand-yellow/40 mb-12 relative z-20 cursor-pointer"
          >
            Book Your Strategy Call
          </a>
          

        </div>
      </section>

      {/* Floating Sticky Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-slate-200 z-50 p-5 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
             <div className="hidden md:block w-10 h-10 bg-vsl-red/10 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-vsl-red" fill="currentColor" />
             </div>
            <div className="flex flex-col">
              <CountdownTimer />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Limited-Time Offer</span>
            </div>
          </div>
          
          <a 
            href="https://calendly.com/buzzarbrand/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow-yellow text-xs md:text-xl px-8 md:px-16 py-4 rounded-full active:scale-95 inline-flex items-center justify-center text-center relative z-20 cursor-pointer"
          >
            Book Your Strategy Call
          </a>
        </div>
      </footer>

    </div>
  );
}

function TestimonialCard({ name, role, quote, imgId, highlight = false, imgClass = "" }: any) {
  return (
    <div className={`relative p-10 rounded-[40px] border transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center ${highlight ? 'bg-slate-900 text-white border-slate-800 shadow-2xl shadow-blue-500/20' : 'bg-white text-slate-900 border-slate-100 shadow-xl shadow-slate-200/50'}`}>
      <div className="mb-6">
        <div className={`relative w-28 h-28 rounded-3xl overflow-hidden border-2 ${highlight ? 'border-brand-yellow shadow-[0_0_20px_rgba(255,210,0,0.3)]' : 'border-blue-100 shadow-lg'} bg-slate-50 mx-auto`}>
          <img 
            src={`https://lh3.googleusercontent.com/d/${imgId}`} 
            alt={name}
            className={`w-full h-full object-cover scale-110 ${imgClass}`}
            referrerPolicy="no-referrer"
            onError={(e: any) => {
              const backupUrl = `https://drive.google.com/uc?export=view&id=${imgId}`;
              if (e.target.src !== backupUrl) {
                e.target.src = backupUrl;
              } else {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
              }
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h4 className={`font-black text-2xl leading-tight ${highlight ? 'text-white' : 'text-slate-900'}`}>{name}</h4>
        <p className={`text-base font-bold opacity-70 mt-1 uppercase tracking-wider ${highlight ? 'text-brand-yellow' : 'text-blue-600'}`}>{role}</p>
      </div>

      <div className="mb-8">
        <Star className={`w-6 h-6 mx-auto ${highlight ? 'text-brand-yellow' : 'text-blue-600'}`} fill="currentColor" />
      </div>

      <p className={`text-lg md:text-xl font-bold leading-relaxed italic ${highlight ? 'text-slate-200' : 'text-slate-700'}`}>
        "{quote}"
      </p>
    </div>
  );
}
