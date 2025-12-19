import { LegalPage } from "@/components/pages/legal-page";
import { legalContent } from "@/data/legal";

export default function Page() {
  return <LegalPage content={legalContent.disclaimer} />;
}
