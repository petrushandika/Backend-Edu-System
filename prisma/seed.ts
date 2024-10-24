// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const schedule = [
//     {
//       day: 'Monday',
//       subject: 'Human-Computer Interaction*/**',
//       time: '18:30 - 21:30',
//       class: 'D631',
//       lecturer: 'TRI AGUS RIYADI',
//       description:
//         'This course discusses the interaction between humans and computers, including user interface design, usability concepts, and user experience to enhance interaction with systems.',
//       image:
//         'https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?t=st=1728787474~exp=1728791074~hmac=63eb60559b857bd09d31d431665259ba575c9520a23d91c5eca71b1bd4e40d97&w=740',
//     },
//     {
//       day: 'Tuesday',
//       subject: 'Social Networking & Creative Content',
//       time: '18:30 - 20:30',
//       class: 'D632',
//       lecturer: 'ERVAN CATUR ANGKOSO',
//       description:
//         'This course explores how social networks work and how to utilize digital platforms to create effective creative content.',
//       image:
//         'https://img.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg?t=st=1728787570~exp=1728791170~hmac=74861303b743a611908e46c5c81ee0b8cbf065e57b8668ca4047dfbefa7d17c0&w=740',
//     },
//     {
//       day: 'Wednesday',
//       subject: 'Information Security Systems *',
//       time: '18:30 - 21:30',
//       class: 'D633',
//       lecturer: 'DONIE MARGAVIANTO NURROKHMAN',
//       description:
//         'This course focuses on information systems security, covering techniques and tools to protect data and technology infrastructure from threats and attacks.',
//       image:
//         'https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?t=st=1728787598~exp=1728791198~hmac=3ce926e1264cecaba98f25e5ec45912d258a27fb5eacee126abaad319196e632&w=740',
//     },
//     {
//       day: 'Thursday',
//       subject: 'Data Mining Concepts',
//       time: '17:30 - 19:30',
//       class: 'D632',
//       lecturer: 'IHSAN JATNIKA',
//       description:
//         'This course introduces concepts and techniques in data mining, including how to identify patterns in large data sets to make better decisions.',
//       image:
//         'https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?t=st=1728787772~exp=1728791372~hmac=a235a500b450738174c913e8ee170f2570f17c81b4befa47528cc1041fac4eb7&w=740',
//     },
//     {
//       day: 'Thursday',
//       subject: 'Web-Based Programming **',
//       time: '19:30 - 21:30',
//       class: 'D632',
//       lecturer: 'ERVAN CATUR ANGKOSO',
//       description:
//         'This course teaches the basics of web programming, covering front-end and back-end technologies for building dynamic web applications.',
//       image:
//         'https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?t=st=1728787686~exp=1728791286~hmac=5a150c955e2fdf19b1c593f738602c00619d8eea58e076b4f80036a180ea47a4&w=740',
//     },
//     {
//       day: 'Friday',
//       subject: 'Statistics **',
//       time: '17:30 - 21:30',
//       class: 'D636',
//       lecturer: 'THOMAS WIDODO',
//       description:
//         'This course covers the basic concepts of statistics, data analysis, and the application of statistics in various disciplines for data-driven decision making.',
//       image:
//         'https://img.freepik.com/free-vector/social-media-data-center-smm-stats-digital-marketing-research-market-trends-analysis-female-expert-studying-online-survey-results_335657-2392.jpg?t=st=1728787660~exp=1728791260~hmac=c068df3586fa30d81296fe016098aeff0b77612817a7a2fd2fe4d57befaf739d&w=740',
//     },
//     {
//       day: 'Saturday',
//       subject: 'Indonesian Language 2',
//       time: '09:30 - 11:30',
//       class: 'E444',
//       lecturer: 'MARGARETHA SUMARWATI',
//       description:
//         'This course teaches the proper use of the Indonesian language in academic contexts and enhances writing and speaking skills.',
//       image:
//         'https://img.freepik.com/free-vector/social-development-abstract-concept-vector-illustration-children-learn-social-skills-competence-positive-impact-successful-communication-career-success-education-abstract-metaphor_335657-1426.jpg?t=st=1728787813~exp=1728791413~hmac=f222a20690fd262c7dee2c33c398abe0244daee85c1e8ed17c07c43d2d499656&w=740',
//     },
//     {
//       day: 'Saturday',
//       subject: 'Research Methods',
//       time: '11:30 - 13:30',
//       class: 'E444',
//       lecturer: 'RIRIN YULIYANTI',
//       description:
//         'This course provides the fundamentals of scientific research methods, including research design, data collection, analysis, and report writing.',
//       image:
//         'https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?t=st=1728789997~exp=1728793597~hmac=b8af59ba821f2176da22176abd9a8989bb15d7264052783349899a2fd3dfa4a6&w=740',
//     },
//     {
//       day: 'Saturday',
//       subject: 'Graph & Algorithm Analysis',
//       time: '14:30 - 17:30',
//       class: 'E444',
//       lecturer: 'WINARTI DWI ASTUTI',
//       description:
//         'This course focuses on graph theory and algorithm analysis, including how algorithms are applied to solve complex problems in computing.',
//       image:
//         'https://img.freepik.com/free-vector/statistical-analysis-man-cartoon-character-with-magnifying-glass-analyzing-data-circular-diagram-with-colorful-segments-statistics-audit-research-concept-illustration_335657-2063.jpg?t=st=1728787640~exp=1728791240~hmac=07a2d01802a45ae2a4c96ccfaa88f7e67c82543e12e20291ad2c8362244dbcd5&w=740',
//     },
//   ];

//   for (const course of schedule) {
//     await prisma.subjects.create({
//       data: course,
//     });
//   }

//   console.log('Seeding completed!');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
