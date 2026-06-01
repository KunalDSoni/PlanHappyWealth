/**
 * AI Financial Guide — shared knowledge base.
 *
 * Runs fully in the browser (so the guide works on static hosts like GitHub
 * Pages with no server), and is also reused by the optional `/api/ai-guide`
 * route for server deployments that want to upgrade to a live LLM.
 *
 * Educational guidance only — never a substitute for personalized advice.
 */

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function scriptedReply(qRaw: string): string {
  const q = qRaw.toLowerCase();

  if (/(retire|retirement|55|60|corpus)/.test(q)) {
    return "A simple way to size retirement: estimate your annual expenses at retirement, then multiply by ~25 (the 4% rule). So ₹12L/yr of spending suggests a ₹3 Cr corpus. The earlier you start an escalating SIP, the gentler the monthly number. Want a planner to model your exact figure? Book a free session below.";
  }
  if (/(insur|term|cover|life cover|protection)/.test(q)) {
    return "A good rule of thumb for life insurance is 10–20× your annual income, plus any large loans, minus existing assets. Pure term cover is the cheapest, cleanest way to get there — avoid mixing insurance with investment. I can have an advisor right-size yours precisely.";
  }
  if (/(invest|sip|mutual fund|stock|begin|start|beginner)/.test(q)) {
    return "Beginners do best with a simple, automated, diversified setup: an emergency fund first, then monthly SIPs into low-cost index and diversified equity funds matched to your risk comfort. Consistency beats timing. The key is to start small and increase with every raise.";
  }
  if (/(child|education|kid|college|school)/.test(q)) {
    return "For a child's education, define the goal year and today's cost, then inflate it (~8–10%/yr for education). Invest in equity-heavy funds while the horizon is long, gliding to safer assets in the final 2–3 years. A dedicated corpus keeps this goal from competing with retirement.";
  }
  if (/(tax|80c|save tax|deduction)/.test(q)) {
    return "Tax efficiency is about structure, not just deductions: use the right account types, hold equity long enough for favourable treatment, and harvest losses thoughtfully. Done well it can quietly add 1–2% a year — real return with no extra risk. A review usually pays for itself.";
  }
  if (/(home|house|property|down payment)/.test(q)) {
    return "For a home, separate the down-payment goal (shorter horizon, safer assets) from your long-term investing. Keep your EMI under ~35% of income so the home funds your life rather than the reverse. Timing the purchase around your other goals avoids derailing them.";
  }
  return "Great question. The honest answer depends on your full picture — income, goals, timeline, and risk comfort. I can give you the fundamentals here, and for anything that affects real money, a certified Plan Happy advisor will review your specifics, free. Want me to set that up?";
}

/**
 * Client-side ask. Resolves locally with a small, natural delay so the
 * typing indicator reads as real. Swap the body for a `fetch('/api/ai-guide')`
 * call if you deploy with a server and a live model.
 */
export function askGuide(messages: ChatMessage[]): Promise<string> {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const delay = 500 + Math.min(1100, last.length * 14);
  return new Promise((resolve) => setTimeout(() => resolve(scriptedReply(last)), delay));
}
