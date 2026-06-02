import type { Metadata } from "next";
import { SubPage } from "@/components/layout/SubPage";
import { LegalDoc } from "@/components/layout/LegalDoc";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of ${SITE.name}.`,
};

const SECTIONS = [
  {
    n: "01",
    title: "Acceptance of terms",
    body: (
      <p>
        By accessing this website you agree to be bound by these terms. If you do not accept
        them, please do not use the website. The practice may revise these terms from time to
        time; the latest version always applies.
      </p>
    ),
  },
  {
    n: "02",
    title: "Nature of content",
    body: (
      <>
        <p>
          The material on this website is published for general information and educational
          purposes only. It is not, and should not be construed as, investment advice, a
          recommendation to buy or sell any security or insurance product, a solicitation, or
          a guarantee of returns.
        </p>
        <p>
          {SITE.name} is an AMFI-registered Mutual Fund Distributor. Personalised advice is
          provided only after a documented engagement with the practice.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "Illustrative figures",
    body: (
      <p>
        Household specimens, blueprints, horizons, dashboards and projections shown on this
        website are illustrative. Names are composite, figures are educational, and outcomes
        for any actual household will differ.
      </p>
    ),
  },
  {
    n: "04",
    title: "Intellectual property",
    body: (
      <p>
        Frameworks published on this website — including the Wealth Blueprint and the Future
        Wealth Horizon — together with all copy, code and visual design, are the intellectual
        property of {SITE.name} and may not be reproduced without written permission.
      </p>
    ),
  },
  {
    n: "05",
    title: "Third-party links",
    body: (
      <p>
        Links to external sites are provided for convenience. {SITE.name} is not responsible
        for the content, accuracy or policies of any third-party site.
      </p>
    ),
  },
  {
    n: "06",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the Republic of India. Any disputes will be
        subject to the exclusive jurisdiction of the courts at Mumbai.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <SubPage
      kicker="Terms of use"
      title={
        <>
          The terms are short. <span className="text-gradient-gold">So is the spirit behind them.</span>
        </>
      }
      lede="Use this website in good faith. The material is educational; the relationship is what makes it advisory."
    >
      <LegalDoc sections={SECTIONS} />
    </SubPage>
  );
}
