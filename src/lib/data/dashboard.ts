export const NET_WORTH_SERIES = [
  { year: "2019", value: 42 },
  { year: "2020", value: 58 },
  { year: "2021", value: 81 },
  { year: "2022", value: 96 },
  { year: "2023", value: 134 },
  { year: "2024", value: 178 },
  { year: "2025", value: 226 },
] as const;

export const GOALS_PROGRESS = [
  { label: "Retirement", current: 64, target: 100, eta: "2039" },
  { label: "Child Education", current: 78, target: 100, eta: "2034" },
  { label: "Dream Home", current: 91, target: 100, eta: "2027" },
] as const;

export const ALLOCATION = [
  { label: "Indian Equity", pct: 44, color: "#D4AF37" },
  { label: "Global Equity", pct: 21, color: "#9FC0E8" },
  { label: "Debt & Bonds", pct: 22, color: "#4C6A8E" },
  { label: "Gold & Alts", pct: 8, color: "#C9A227" },
  { label: "Cash", pct: 5, color: "#5A6478" },
] as const;
