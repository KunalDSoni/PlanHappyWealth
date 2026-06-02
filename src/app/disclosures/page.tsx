import type { Metadata } from "next";
import { SubPage } from "@/components/layout/SubPage";
import { LegalDoc } from "@/components/layout/LegalDoc";
import { SITE, FOUNDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclosures",
  description: `AMFI, SEBI and IRDAI disclosures published by ${SITE.name}.`,
};

const SECTIONS = [
  {
    n: "01",
    title: "Regulatory standing",
    body: (
      <>
        <p>
          {SITE.name} operates as an AMFI-registered Mutual Fund Distributor. The practice is
          led by {FOUNDER.name} ({FOUNDER.credentials.join(", ")}), who has more than{" "}
          {FOUNDER.experienceYears} years of practice in personal finance.
        </p>
        <p>
          AMFI ARN, IRDAI licence numbers and SEBI registration details (where applicable) are
          available on request and will be published in this section following counsel review.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Mutual fund distribution",
    body: (
      <>
        <p>
          Mutual fund investments are subject to market risks. Read all scheme-related
          documents carefully before investing. Past performance is not indicative of future
          returns. Distribution commissions, where receivable, are disclosed in the relevant
          scheme documents and are governed by AMFI&apos;s code of conduct for distributors.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "Insurance distribution",
    body: (
      <p>
        Insurance products are placed through licensed channels. Premiums, terms and exclusions
        are governed by the insurer&apos;s policy wording. The practice does not underwrite
        risk; insurer claims-settlement experience and ratings will be referenced where
        appropriate.
      </p>
    ),
  },
  {
    n: "04",
    title: "No assurance of returns",
    body: (
      <p>
        Nothing on this website — including the Wealth Blueprint, the Future Wealth Horizon,
        the Financial Health Assessment and any dashboards or charts — constitutes a guarantee
        of returns or a promise of any particular outcome. Illustrative numbers are educational.
      </p>
    ),
  },
  {
    n: "05",
    title: "Conflict-of-interest disclosure",
    body: (
      <p>
        Recommendations are tested against the family&apos;s blueprint first and the
        distribution economics second. Where a material conflict exists between a household&apos;s
        interest and a distribution arrangement, the household&apos;s interest prevails.
      </p>
    ),
  },
  {
    n: "06",
    title: "Investor awareness",
    body: (
      <>
        <p>
          Investors are encouraged to verify the credentials of any intermediary, the
          KYC-registration status of any platform, and the AMFI-published list of registered
          distributors before transacting. Investor education and grievance redressal links
          will be published here following counsel review.
        </p>
      </>
    ),
  },
];

export default function DisclosuresPage() {
  return (
    <SubPage
      kicker="Disclosures"
      title={
        <>
          What is required, <span className="text-gradient-gold">stated plainly.</span>
        </>
      }
      lede="The regulator's language, translated into ours — so the household knows exactly what stands behind every recommendation."
    >
      <LegalDoc sections={SECTIONS} />
    </SubPage>
  );
}
