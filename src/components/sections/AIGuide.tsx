"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, ShieldCheck, Bot, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { askGuide } from "@/lib/ai-guide";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const STARTERS = [
  "How much do I need to retire at 55?",
  "How much term insurance is enough?",
  "Where should a beginner start investing?",
  "Help me plan for my child's education",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi, I'm your Plan Happy AI guide. Ask me anything about retirement, insurance, investing, or planning a goal — I'll explain it simply, then point you to a human advisor when it counts.",
};

export function AIGuide() {
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      // Runs client-side — works on static hosts (GitHub Pages) with no server.
      const reply = await askGuide(next);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Let's connect you with a human advisor — book a free session below." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-guide" className="relative overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-gold opacity-30" />
      <div className="section">
        <SectionHeading
          kicker="AI Financial Guide"
          title={<>Answers now. <span className="text-gradient-gold">Humans when it matters.</span></>}
          description="A futuristic guide trained on planning fundamentals — available 24/7 to demystify your next decision, with a real advisor one tap away."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-[2rem] border border-cloud/12 bg-navy-800/50 shadow-glass-lg backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-cloud/8 px-6 py-4">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-200 to-gold-500 text-cloud">
                <Bot size={20} />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-navy-800 bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-medium text-cloud">Plan Happy AI Guide</p>
                <p className="text-xs text-emerald-300">Online · typically replies instantly</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-cloud/10 px-3 py-1 text-[11px] text-cloud-dim">
                <ShieldCheck size={12} className="text-gold" /> Private &amp; secure
              </span>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-[22rem] space-y-4 overflow-y-auto px-6 py-6">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={cn("flex gap-3", m.role === "user" ? "flex-row-reverse" : "")}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      m.role === "user" ? "bg-cloud/8 text-cloud-muted" : "bg-gold/15 text-gold",
                    )}
                  >
                    {m.role === "user" ? <User size={15} /> : <Sparkles size={15} />}
                  </span>
                  <div
                    className={cn(
                      "max-w-[78%] text-pretty rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      m.role === "user"
                        ? "rounded-tr-sm bg-gold text-cloud"
                        : "rounded-tl-sm border border-cloud/8 bg-cloud/[0.03] text-cloud-muted",
                    )}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Sparkles size={15} />
                    </span>
                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-cloud/8 bg-cloud/[0.03] px-4 py-3.5">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-1.5 w-1.5 rounded-full bg-gold/70"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 1.2, delay: d * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Starters */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-6 pb-3">
                {STARTERS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-cloud/10 px-3 py-1.5 text-xs text-cloud-dim transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-3 border-t border-cloud/8 px-4 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about retirement, insurance, investing…"
                aria-label="Ask the AI guide"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-cloud placeholder:text-cloud-faint focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-cloud transition-opacity disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          <p className="mt-4 text-center text-[11px] text-cloud-faint">
            Educational guidance only, not personalized advice. For decisions, a certified human advisor reviews your full picture.
          </p>
        </div>
      </div>
    </section>
  );
}
