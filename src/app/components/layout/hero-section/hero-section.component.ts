import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  // download () {
  //   window.open('/assets/resume.pdf', '_blank');
  // }





  generatePDF() {
    const doc = new jsPDF();

    // Add a border or background color
    doc.setFillColor(230, 230, 230);
    doc.rect(0, 0, 210, 297, 'F'); // A4 size background fill

    // Personal Information (Heading Section)
    doc.setTextColor(0, 102, 204); // Blue color
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Akash Bera", 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.text("Software Developer", 105, 27, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text("akashbera.cr7@gmail.com | +91 8972187723 | Ghatal, West Bengal", 105, 33, { align: 'center' });

    // Draw a line under the heading
    doc.setDrawColor(0, 102, 204); // Line color
    doc.line(15, 40, 195, 40);

    // Section: Profile Summary
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Profile Summary", 15, 50);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80);
    doc.text("Results-driven and detail-oriented Angular Developer with 2 years of experience building responsive, user-friendly web applications. Proficient in modern web development frameworks and technologies, including Angular, TypeScript, HTML5, CSS3, and RESTful APIs. Skilled in optimizing performance, improving user experiences, and collaborating in Agile environments to deliver high-quality code. Passionate about learning new technologies and enhancing the front-end architecture of dynamic applications.", 15, 57, { maxWidth: 180, align: 'justify' });

    // Section: Skills
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Skills", 15, 80);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80);
    doc.text("• JavaScript, TypeScript, HTML5, CSS3, Java", 15, 87);
    doc.text("• Frameworks: Angular, Node.js", 15, 93);
    doc.text("• Tools: Git, VS Code, Jira, Postman", 15, 99);
    doc.text("• Databases: PostgreSQL, MySQL", 15, 105);

    // Section: Work Experience
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Work Experience", 15, 115);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Software Developer", 15, 125);

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("National Informatics Center | Jan 2023 - Present", 15, 130);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(80);
    doc.text("• Developed scalable web applications using Angular and .NET.", 15, 137);

    // Section: Projects
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Projects", 15, 150);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("i) Administrative Approval and Financial Sanction (Govt. of West Bengal)", 15, 157);
    doc.text("ii) E-Bantan (Govt. of West Bengal)", 15, 163);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(80);
    doc.text("Responsibilities:", 15, 169);

    doc.text("-> Developed and maintained responsive web applications using Angular.", 15, 176);
    doc.text("-> Utilized Angular CLI and TypeScript to build efficient and scalable applications.", 15, 183);
    doc.text("-> Integrated RESTful APIs and third-party libraries for enhanced functionality.", 15, 190);
    doc.text("-> Proficiency in object-oriented programming and experience applying modern design patterns.", 15, 197);
    doc.text("-> Used Git for version control and Jenkins for CI/CD purposes.", 15, 204);
    doc.text("-> Worked with Business Analysts to implement needed functionalities.", 15, 211);
    doc.text("-> Collaborated with Testing and QA Teams for optimized team efforts.", 15, 218);

    // Draw a line under the work experience section
    doc.setDrawColor(0, 102, 204);
    doc.line(15, 225, 195, 225);

    // Section: Education
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("Education", 15, 235);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Bachelor of Computer Applications", 15, 245);

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("MAKAUT University | 2018 - 2021", 15, 250);
    doc.text("Tamralipta Institute of Management and Technology | 2018 - 2021", 15, 255);
    doc.text("Percentage: 84.00%", 15, 260);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Master of Computer Applications", 15, 270);

    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("MAKAUT University | 2021 - 2023", 15, 275);
    doc.text("Haldia Institute of Technology | 2021 - 2023", 15, 280);
    doc.text("CGPA: 8.65", 15, 285);

    // Footer: Contact Info
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100);
    doc.text("Portfolio: https://abisback.github.io/portfolio | LinkedIn: https://www.linkedin.com/in/akash-bera-70b00a222", 105, 293, { align: 'center' });

    // Open PDF in a new tab
    const pdfBlob = doc.output('blob');
    const pdfURL = URL.createObjectURL(pdfBlob);
    window.open(pdfURL);
  }







}
