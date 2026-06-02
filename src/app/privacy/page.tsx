import type { Metadata } from "next";
import { SubPage } from "@/components/layout/SubPage";
import { LegalDoc } from "@/components/layout/LegalDoc";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and safeguards client information.`,
};

const SECTIONS = [
  {
    n: "01",
    title: "What we collect",
    body: (
      <>
        <p>
          When you correspond with the practice — by email, phone, the consultation form on
          this website, or in person — we collect the information you provide to us. That
          typically includes your name, contact details, family composition, income, savings,
          investments, insurance cover, financial goals and any documents you choose to share
          for the purpose of preparing your blueprint.
        </p>
        <p>
          We do not knowingly collect information from children under 18. We do not buy or sell
          personal data.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "How we use it",
    body: (
      <>
        <p>
          Information is used solely to (i) understand your household, (ii) draft and maintain
          your wealth blueprint, (iii) execute the instruments you elect to implement, and
          (iv) comply with applicable AMFI, SEBI, IRDAI, RBI and tax-reporting obligations.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share information only with the parties strictly necessary to act on your
          instructions — such as Asset Management Companies for mutual-fund transactions and
          regulated insurers for policy issuance — and with regulators where law requires.
        </p>
      </>
    ),
  },
  {
    n: "04",
    title: "How long we keep it",
    body: (
      <p>
        Personal records are retained for the duration of the advisory relationship and for
        the period thereafter that applicable regulations require — typically up to ten years
        for financial records.
      </p>
    ),
  },
  {
    n: "05",
    title: "Your rights",
    body: (
      <p>
        You may request a copy of the information we hold about you, ask us to correct
        inaccuracies, or withdraw consent for non-mandatory processing at any time. Write to{" "}
        <a className="text-gold underline-offset-4 hover:underline" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        .
      </p>
    ),
  },
  {
    n: "06",
    title: "Cookies and analytics",
    body: (
      <p>
        This website uses only the cookies necessary for it to function correctly. We may use
        privacy-respecting analytics to understand which pages are read; analytics data is
        aggregated and does not identify you.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <SubPage
      kicker="Privacy"
      title={
        <>
          Information is held <span className="text-gradient-gold">like the household itself.</span>
        </>
      }
      lede="We treat the family balance sheet, the names, the obligations and the hopes you share with us as confidential by default."
    >
      <LegalDoc sections={SECTIONS} />
    </SubPage>
  );
}
