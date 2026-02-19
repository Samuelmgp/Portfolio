import { FiDownload } from "react-icons/fi";
import PageWrapper from "../components/layout/PageWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import resumePdf from "../assets/SAMUEL_GARCIA_CV_WEB_PUB.pdf";

export default function Resume() {
  return (
    <PageWrapper>
      <SectionHeading title="Resume" subtitle="Download or view below" />

      <div className="flex justify-center mb-6">
        <a
          href={resumePdf}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-deep transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <FiDownload size={16} />
          Download PDF
        </a>
      </div>

      <Card hover={false} className="overflow-hidden">
        <div className="aspect-[8.5/11] w-full">
          <object
            data={resumePdf}
            type="application/pdf"
            className="h-full w-full"
          >
            <p className="flex h-full items-center justify-center text-text-muted p-8 text-center">
              Your browser does not support embedded PDFs.{" "}
              <a
                href={resumePdf}
                className="text-primary hover:text-primary-deep ml-1"
              >
                Download the PDF
              </a>
              .
            </p>
          </object>
        </div>
      </Card>
    </PageWrapper>
  );
}
