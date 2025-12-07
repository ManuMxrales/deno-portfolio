import { useCallback } from "preact/hooks";
import { jsPDF } from "jspdf";

import enTranslation from "../utils/i18n/en.json" with { type: "json" };

type Props = {
  label: string;
};

const translation = enTranslation;

const DownloadCV = ({ label }: Props) => {
  const generatePDF = useCallback(() => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 10;

    const addTextBlock = (
      text: string,
      indent = 0,
      maxWidth = 190,
      lineHeight = 5.5,
    ) => {
      const lines = doc.splitTextToSize(text, maxWidth - indent);
      for (const line of lines) {
        doc.text(line, 10 + indent, y);
        y += lineHeight;
      }
    };

    const me = translation.me as typeof translation.me & {
      phone?: string;
      email?: string;
      linkedin?: string;
      summary?: string;
    };

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    const nameText = "FRANCISCO MANUEL SANCHEZ MORALES";
    const nameWidth = doc.getTextWidth(nameText);
    doc.text(nameText, (pageWidth - nameWidth) / 2, y);
    y += 10;

    doc.setFontSize(14);
    const titleText = "SOFTWARE DEVELOPER";
    const titleWidth = doc.getTextWidth(titleText);
    doc.text(titleText, (pageWidth - titleWidth) / 2, y);
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const phone = me.phone || "";
    const email = me.email || "";
    const linkedin = me.linkedin || "";

    const contactInfo = `Cel: ${phone} E-Mail: ${email}`.trim();
    const contactWidth = doc.getTextWidth(contactInfo);
    doc.text(contactInfo, (pageWidth - contactWidth) / 2, y);

    if (linkedin) {
      y += 10;
      const linkedinLabel = "LinkedIn";
      const linkedinWidth = doc.getTextWidth(linkedinLabel);
      doc.setTextColor(59, 130, 246);
      doc.textWithLink(
        linkedinLabel,
        (pageWidth - linkedinWidth) / 2,
        y,
        { url: linkedin, bold: true },
      );
      doc.setTextColor(0, 0, 0);
    }
    doc.line(10, y + 5, pageWidth - 10, y + 5);
    y += 15;

    // SUMMARY Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text("SUMMARY", 10, y);
    doc.setTextColor(0, 0, 0);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    addTextBlock(me.summary || "", 10, 190, 4.5);
    y += 5;

    // WORK EXPERIENCE Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text("WORK EXPERIENCE", 10, y);
    doc.setTextColor(0, 0, 0);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    y += 5;

    for (const job of translation.experience.jobs) {
      // Company name and date on same line
      doc.setFont("helvetica", "bold");
      const jobLine = `${job.name} ${job.date}`;
      addTextBlock(jobLine, 10, 190, 5);
      y += 5;
      for (const station of job.stations) {
        doc.setFont("helvetica", "normal");
        addTextBlock(station.role, 10, 190, 5);
        for (const task of station.tasks) {
          addTextBlock(`- ${task}`, 14, 186, 5);
        }
      }
      y += 5;
    }

    // TECHNOLOGIES Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text("TECHNOLOGIES", 10, y);
    doc.setTextColor(0, 0, 0);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Collect all technologies from skills sections
    const allTechnologies: string[] = [];
    for (const section of translation.skills.sections) {
      allTechnologies.push(...section.skills);
    }
    const techList = allTechnologies.map((tech) => {
      const upperTechs = ["GIT", "ANGULAR", "LIT", "HTML", "CSS"];
      if (upperTechs.includes(tech.toUpperCase())) {
        return tech.toUpperCase();
      }
      return tech;
    });
    addTextBlock(techList.join(", "), 10, 190, 4.5);
    y += 10;

    // SKILLS Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text("SKILLS", 10, y);
    doc.setTextColor(0, 0, 0);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    addTextBlock(
      "Web development, Team Work Skills, Self-taught, Problem-solving, SCRUM",
      10,
      190,
      4.5,
    );
    y += 10;

    // EDUCATION Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text("EDUCATION", 10, y);
    doc.setTextColor(0, 0, 0);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    for (const milestone of translation.education.milestones) {
      doc.setFont("helvetica", "bold");
      addTextBlock(milestone.title, 10, 190, 5);
      doc.setFont("helvetica", "normal");
      addTextBlock(milestone.text, 14, 186, 5);
      if (milestone.date) {
        addTextBlock(milestone.date, 14, 186, 5);
      }
    }

    doc.save("ResumeManuelSanchez.pdf");
  }, []);

  return (
    <button
      type="button"
      class="text-gray-dark font-bold text-md bg-slate-50 rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent hover:border-gray-light dark:bg-black dark:text-neutral-50"
      onClick={generatePDF}
    >
      {label}
    </button>
  );
};

export default DownloadCV;
