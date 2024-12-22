import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Users (Lecturers and Students)
  const userLecturer1 = await prisma.user.create({
    data: {
      name: 'Tri Agus Riyadi',
      email: 'triagusriyadi@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer2 = await prisma.user.create({
    data: {
      name: 'Ervan Catur Angkoso',
      email: 'ervancaturangkoso@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer3 = await prisma.user.create({
    data: {
      name: 'Donie Margavianto Nurrokhman',
      email: 'doniemargaviantonurrokhman@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer4 = await prisma.user.create({
    data: {
      name: 'Ihsan Jatnika',
      email: 'ihsanjatnika@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer5 = await prisma.user.create({
    data: {
      name: 'Ervan Catur Angkoso',
      email: 'ervancaturangkoso1@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer6 = await prisma.user.create({
    data: {
      name: 'Thomas Widodo',
      email: 'thomaswidodo@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer7 = await prisma.user.create({
    data: {
      name: 'Margaretha Sumarwati',
      email: 'margarethasumarwati@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer8 = await prisma.user.create({
    data: {
      name: 'Ririn Yuliyanti',
      email: 'ririnyuliyanti@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userLecturer9 = await prisma.user.create({
    data: {
      name: 'Winarti Dwi Astuti',
      email: 'winartidwiastuti@gmail.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userStudent1 = await prisma.user.create({
    data: {
      name: 'Petrus Handika',
      email: 'petrushandikasinaga@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent2 = await prisma.user.create({
    data: {
      name: 'Muhammad Zydan Kurniaatmaja',
      email: 'muhammadzydankurniaatmaja@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent3 = await prisma.user.create({
    data: {
      name: 'Gavy Anak Satriadi',
      email: 'gavyanaksatriadi@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent4 = await prisma.user.create({
    data: {
      name: 'Reza Nova Cahyar',
      email: 'rezanovacahyar@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent5 = await prisma.user.create({
    data: {
      name: 'Segaf',
      email: 'segaf@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent6 = await prisma.user.create({
    data: {
      name: 'Bagas Arga Obednego Arafonta Siregar',
      email: 'bagasargaobednegoarafontasiregar@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent7 = await prisma.user.create({
    data: {
      name: 'Monica Thabita Panjaitan',
      email: 'monicathabitapanjaitan@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent8 = await prisma.user.create({
    data: {
      name: 'Suprihartanti',
      email: 'suprihartanti@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent9 = await prisma.user.create({
    data: {
      name: 'Yohanes Wiwit Prasetyo',
      email: 'yohaneswiwitprasetyo@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent10 = await prisma.user.create({
    data: {
      name: 'Farhan Fathurrahman',
      email: 'farhanfathurrahman@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent11 = await prisma.user.create({
    data: {
      name: 'Fathaniyah Nur Hasifah',
      email: 'fathaniyahnurhasifah@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent12 = await prisma.user.create({
    data: {
      name: 'Lukas Suvonda',
      email: 'lukassuvonda@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent13 = await prisma.user.create({
    data: {
      name: 'Ruben Wijaya Johanes Sinurat',
      email: 'rubenwijayajohanessinurat@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent14 = await prisma.user.create({
    data: {
      name: 'Raihan Hafizh Hidayat',
      email: 'raihanhafizhhidayat@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent15 = await prisma.user.create({
    data: {
      name: 'Akmal Amrulloh',
      email: 'akmalamrulloh@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent16 = await prisma.user.create({
    data: {
      name: 'An Nisa Julia Azhar',
      email: 'annisajuliaazhar@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent17 = await prisma.user.create({
    data: {
      name: 'Virel Fauzan Mufarrizal Novian',
      email: 'virelfauzanmufarrizalnovian@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent18 = await prisma.user.create({
    data: {
      name: 'Dennis Luisky Santoso',
      email: 'dennisluiskysantoso@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent19 = await prisma.user.create({
    data: {
      name: 'Wahyu Mochamad Ridwan',
      email: 'wahyumochamadridwan@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent20 = await prisma.user.create({
    data: {
      name: 'Saefudin Ilham',
      email: 'saefudinilham@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent21 = await prisma.user.create({
    data: {
      name: 'Fransiskus Silvianus Nugroho',
      email: 'fransiskussilvianusnugroho@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent22 = await prisma.user.create({
    data: {
      name: 'Antonius Silvanus Prasetyo',
      email: 'antoniussilvanusprasetyo@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent23 = await prisma.user.create({
    data: {
      name: 'Anwar Muttaqin Sihombing',
      email: 'anwarmuttaqinsihombing@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent24 = await prisma.user.create({
    data: {
      name: 'Bagus Aditia Saputra',
      email: 'bagusaditiasaputra@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent25 = await prisma.user.create({
    data: {
      name: 'Danu Shahabi',
      email: 'danushahabi@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent26 = await prisma.user.create({
    data: {
      name: 'Febrian Firmansyah',
      email: 'febrianfirmansyah@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent27 = await prisma.user.create({
    data: {
      name: 'Ihsan Irham Ghifari',
      email: 'ihsanirhamghifari@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent28 = await prisma.user.create({
    data: {
      name: 'Ilham Krisnamurti',
      email: 'ilhamkrisnamurti@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  const userStudent29 = await prisma.user.create({
    data: {
      name: 'Revangga Widyandaru',
      email: 'revanggawidyandaru@gmail.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  // Create Lecturers
  const lecturer1 = await prisma.lecturer.create({
    data: {
      userId: userLecturer1.id,
    },
  });

  const lecturer2 = await prisma.lecturer.create({
    data: {
      userId: userLecturer2.id,
    },
  });

  const lecturer3 = await prisma.lecturer.create({
    data: {
      userId: userLecturer3.id,
    },
  });

  const lecturer4 = await prisma.lecturer.create({
    data: {
      userId: userLecturer4.id,
    },
  });

  const lecturer5 = await prisma.lecturer.create({
    data: {
      userId: userLecturer5.id,
    },
  });

  const lecturer6 = await prisma.lecturer.create({
    data: {
      userId: userLecturer6.id,
    },
  });

  const lecturer7 = await prisma.lecturer.create({
    data: {
      userId: userLecturer7.id,
    },
  });

  const lecturer8 = await prisma.lecturer.create({
    data: {
      userId: userLecturer8.id,
    },
  });

  const lecturer9 = await prisma.lecturer.create({
    data: {
      userId: userLecturer9.id,
    },
  });

  // Create Students
  const student1 = await prisma.student.create({
    data: {
      userId: userStudent1.id,
      npm: 11122114,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student2 = await prisma.student.create({
    data: {
      userId: userStudent2.id,
      npm: 11122023,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student3 = await prisma.student.create({
    data: {
      userId: userStudent3.id,
      npm: 11122583,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student4 = await prisma.student.create({
    data: {
      userId: userStudent4.id,
      npm: 19122005,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student5 = await prisma.student.create({
    data: {
      userId: userStudent5.id,
      npm: 11122356,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student6 = await prisma.student.create({
    data: {
      userId: userStudent6.id,
      npm: 11122586,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student7 = await prisma.student.create({
    data: {
      userId: userStudent7.id,
      npm: 11122568,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student8 = await prisma.student.create({
    data: {
      userId: userStudent8.id,
      npm: 17123294,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student9 = await prisma.student.create({
    data: {
      userId: userStudent9.id,
      npm: 11122487,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student10 = await prisma.student.create({
    data: {
      userId: userStudent10.id,
      npm: 11122536,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student11 = await prisma.student.create({
    data: {
      userId: userStudent11.id,
      npm: 10122476,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student12 = await prisma.student.create({
    data: {
      userId: userStudent12.id,
      npm: 19122012,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student13 = await prisma.student.create({
    data: {
      userId: userStudent13.id,
      npm: 10122143,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student14 = await prisma.student.create({
    data: {
      userId: userStudent14.id,
      npm: 11122181,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student15 = await prisma.student.create({
    data: {
      userId: userStudent15.id,
      npm: 11122535,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student16 = await prisma.student.create({
    data: {
      userId: userStudent16.id,
      npm: 10122155,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student17 = await prisma.student.create({
    data: {
      userId: userStudent17.id,
      npm: 11122540,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student18 = await prisma.student.create({
    data: {
      userId: userStudent18.id,
      npm: 10122350,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student19 = await prisma.student.create({
    data: {
      userId: userStudent19.id,
      npm: 11122466,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student20 = await prisma.student.create({
    data: {
      userId: userStudent20.id,
      npm: 11122306,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student21 = await prisma.student.create({
    data: {
      userId: userStudent21.id,
      npm: 10122524,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student22 = await prisma.student.create({
    data: {
      userId: userStudent22.id,
      npm: 10122197,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student23 = await prisma.student.create({
    data: {
      userId: userStudent23.id,
      npm: 10122199,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student24 = await prisma.student.create({
    data: {
      userId: userStudent24.id,
      npm: 10122266,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student25 = await prisma.student.create({
    data: {
      userId: userStudent25.id,
      npm: 10122330,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student26 = await prisma.student.create({
    data: {
      userId: userStudent26.id,
      npm: 10122497,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student27 = await prisma.student.create({
    data: {
      userId: userStudent27.id,
      npm: 11122555,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student28 = await prisma.student.create({
    data: {
      userId: userStudent28.id,
      npm: 10122622,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  const student29 = await prisma.student.create({
    data: {
      userId: userStudent29.id,
      npm: 11122241,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'Aktif',
    },
  });

  // Create Subjects
  const subject1 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?t=st=1728787474~exp=1728791074~hmac=63eb60559b857bd09d31d431665259ba575c9520a23d91c5eca71b1bd4e40d97&w=740',
      title: 'Interaksi Manusia & Komputer*/**',
      description:
        'Mata kuliah ini membahas tentang interaksi antara manusia dan komputer, termasuk desain antarmuka pengguna, konsep usability, dan user experience untuk meningkatkan interaksi dengan sistem.',
      category: 'Technology',
      timePost: new Date(),
      likes: 10,
    },
  });

  const subject2 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg?t=st=1728787570~exp=1728791170~hmac=74861303b743a611908e46c5c81ee0b8cbf065e57b8668ca4047dfbefa7d17c0&w=740',
      title: 'Jejaring Sosial & Konten Kreatif',
      description:
        'Mata kuliah ini mengeksplorasi cara kerja jejaring sosial serta memanfaatkan platform digital untuk menghasilkan konten kreatif yang efektif.',
      category: 'Technology',
      timePost: new Date(),
      likes: 12,
    },
  });

  const subject3 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?t=st=1728787598~exp=1728791198~hmac=3ce926e1264cecaba98f25e5ec45912d258a27fb5eacee126abaad319196e632&w=740',
      title: 'Sistem Keamanan Tek. Informasi *',
      description:
        'Mata kuliah ini berfokus pada keamanan sistem informasi, mencakup teknik dan alat untuk melindungi data dan infrastruktur teknologi dari ancaman dan serangan.',
      category: 'Security',
      timePost: new Date(),
      likes: 18,
    },
  });

  const subject4 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?t=st=1728787772~exp=1728791372~hmac=a235a500b450738174c913e8ee170f2570f17c81b4befa47528cc1041fac4eb7&w=740',
      title: 'Konsep Data Mining',
      description:
        'Mata kuliah ini memperkenalkan konsep dan teknik dalam data mining, termasuk cara mengidentifikasi pola dalam data besar untuk membuat keputusan yang lebih baik.',
      category: 'Data Science',
      timePost: new Date(),
      likes: 25,
    },
  });

  const subject5 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?t=st=1728787686~exp=1728791286~hmac=5a150c955e2fdf19b1c593f738602c00619d8eea58e076b4f80036a180ea47a4&w=740',
      title: 'Pemrograman Berbasis Web **',
      description:
        'Mata kuliah ini mengajarkan dasar-dasar pemrograman web, meliputi teknologi front-end dan back-end untuk membangun aplikasi web dinamis.',
      category: 'Technology',
      timePost: new Date(),
      likes: 30,
    },
  });

  const subject6 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/social-media-data-center-smm-stats-digital-marketing-research-market-trends-analysis-female-expert-studying-online-survey-results_335657-2392.jpg?t=st=1728787660~exp=1728791260~hmac=c068df3586fa30d81296fe016098aeff0b77612817a7a2fd2fe4d57befaf739d&w=740',
      title: 'Statistika **',
      description:
        'Mata kuliah ini membahas konsep dasar statistika, analisis data, dan penerapan statistika dalam berbagai disiplin ilmu untuk pengambilan keputusan berbasis data.',
      category: 'Science',
      timePost: new Date(),
      likes: 35,
    },
  });

  const subject7 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/social-development-abstract-concept-vector-illustration-children-learn-social-skills-competence-positive-impact-successful-communication-career-success-education-abstract-metaphor_335657-1426.jpg?t=st=1728787813~exp=1728791413~hmac=f222a20690fd262c7dee2c33c398abe0244daee85c1e8ed17c07c43d2d499656&w=740',
      title: 'Bahasa Indonesia 2',
      description:
        'Mata kuliah ini mengajarkan penggunaan Bahasa Indonesia secara baik dan benar dalam konteks akademik serta meningkatkan keterampilan berbahasa tulis dan lisan.',
      category: 'Language',
      timePost: new Date(),
      likes: 40,
    },
  });

  const subject8 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?t=st=1728789997~exp=1728793597~hmac=b8af59ba821f2176da22176abd9a8989bb15d7264052783349899a2fd3dfa4a6&w=740',
      title: 'Metode Penelitian',
      description:
        'Mata kuliah ini memberikan dasar-dasar metode penelitian ilmiah, termasuk perancangan penelitian, pengumpulan data, analisis, dan penyusunan laporan penelitian.',
      category: 'Research',
      timePost: new Date(),
      likes: 45,
    },
  });

  const subject9 = await prisma.subject.create({
    data: {
      image:
        'https://img.freepik.com/free-vector/statistical-analysis-man-cartoon-character-with-magnifying-glass-analyzing-data-circular-diagram-with-colorful-segments-statistics-audit-research-concept-illustration_335657-2063.jpg?t=st=1728787640~exp=1728791240~hmac=07a2d01802a45ae2a4c96ccfaa88f7e67c82543e12e20291ad2c8362244dbcd5&w=740',
      title: 'Graf & Analisis Algoritma',
      description:
        'Mata kuliah ini berfokus pada teori graf dan analisis algoritma, termasuk bagaimana algoritma diterapkan untuk memecahkan masalah kompleks dalam komputasi.',
      category: 'Computer Science',
      timePost: new Date(),
      likes: 50,
    },
  });

  // Create Schedules
  const schedule1 = await prisma.schedule.create({
    data: {
      day: 'Senin',
      image:
        'https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?t=st=1728787474~exp=1728791074~hmac=63eb60559b857bd09d31d431665259ba575c9520a23d91c5eca71b1bd4e40d97&w=740',
      title: 'Interaksi Manusia & Komputer*/**',
      description:
        'Mata kuliah ini membahas tentang interaksi antara manusia dan komputer, termasuk desain antarmuka pengguna, konsep usability, dan user experience untuk meningkatkan interaksi dengan sistem.',
      code: 'CS101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject1.id,
      lecturerId: lecturer1.id,
    },
  });

  const schedule2 = await prisma.schedule.create({
    data: {
      day: 'Selasa',
      image:
        'https://img.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg?t=st=1728787570~exp=1728791170~hmac=74861303b743a611908e46c5c81ee0b8cbf065e57b8668ca4047dfbefa7d17c0&w=740',
      title: 'Jejaring Sosial & Konten Kreatif',
      description:
        'Mata kuliah ini mengeksplorasi cara kerja jejaring sosial serta memanfaatkan platform digital untuk menghasilkan konten kreatif yang efektif.',
      code: 'SOC101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject2.id,
      lecturerId: lecturer2.id,
    },
  });

  const schedule3 = await prisma.schedule.create({
    data: {
      day: 'Rabu',
      image:
        'https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?t=st=1728787598~exp=1728791198~hmac=3ce926e1264cecaba98f25e5ec45912d258a27fb5eacee126abaad319196e632&w=740',
      title: 'Sistem Keamanan Tek. Informasi *',
      description:
        'Mata kuliah ini berfokus pada keamanan sistem informasi, mencakup teknik dan alat untuk melindungi data dan infrastruktur teknologi dari ancaman dan serangan.',
      code: 'ITSEC101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject3.id,
      lecturerId: lecturer3.id,
    },
  });

  const schedule4 = await prisma.schedule.create({
    data: {
      day: 'Kamis',
      image:
        'https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?t=st=1728787772~exp=1728791372~hmac=a235a500b450738174c913e8ee170f2570f17c81b4befa47528cc1041fac4eb7&w=740',
      title: 'Konsep Data Mining',
      description:
        'Mata kuliah ini memperkenalkan konsep dan teknik dalam data mining, termasuk cara mengidentifikasi pola dalam data besar untuk membuat keputusan yang lebih baik.',
      code: 'DM101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject4.id,
      lecturerId: lecturer4.id,
    },
  });

  const schedule5 = await prisma.schedule.create({
    data: {
      day: 'Kamis',
      image:
        'https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?t=st=1728787686~exp=1728791286~hmac=5a150c955e2fdf19b1c593f738602c00619d8eea58e076b4f80036a180ea47a4&w=740',
      title: 'Pemrograman Berbasis Web **',
      description:
        'Mata kuliah ini mengajarkan dasar-dasar pemrograman web, meliputi teknologi front-end dan back-end untuk membangun aplikasi web dinamis.',
      code: 'WEB101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject5.id,
      lecturerId: lecturer5.id,
    },
  });

  const schedule6 = await prisma.schedule.create({
    data: {
      day: 'Jumat',
      image:
        'https://img.freepik.com/free-vector/social-media-data-center-smm-stats-digital-marketing-research-market-trends-analysis-female-expert-studying-online-survey-results_335657-2392.jpg?t=st=1728787660~exp=1728791260~hmac=c068df3586fa30d81296fe016098aeff0b77612817a7a2fd2fe4d57befaf739d&w=740',
      title: 'Statistika **',
      description:
        'Mata kuliah ini membahas konsep dasar statistika, analisis data, dan penerapan statistika dalam berbagai disiplin ilmu untuk pengambilan keputusan berbasis data.',
      code: 'STAT101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject6.id,
      lecturerId: lecturer6.id,
    },
  });

  const schedule7 = await prisma.schedule.create({
    data: {
      day: 'Sabtu',
      image:
        'https://img.freepik.com/free-vector/social-development-abstract-concept-vector-illustration-children-learn-social-skills-competence-positive-impact-successful-communication-career-success-education-abstract-metaphor_335657-1426.jpg?t=st=1728787813~exp=1728791413~hmac=f222a20690fd262c7dee2c33c398abe0244daee85c1e8ed17c07c43d2d499656&w=740',
      title: 'Bahasa Indonesia 2',
      description:
        'Mata kuliah ini mengajarkan penggunaan Bahasa Indonesia secara baik dan benar dalam konteks akademik serta meningkatkan keterampilan berbahasa tulis dan lisan.',
      code: 'BINDO201',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject7.id,
      lecturerId: lecturer7.id,
    },
  });

  const schedule8 = await prisma.schedule.create({
    data: {
      day: 'Sabtu',
      image:
        'https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?t=st=1728789997~exp=1728793597~hmac=b8af59ba821f2176da22176abd9a8989bb15d7264052783349899a2fd3dfa4a6&w=740',
      title: 'Metode Penelitian',
      description:
        'Mata kuliah ini memberikan dasar-dasar metode penelitian ilmiah, termasuk perancangan penelitian, pengumpulan data, analisis, dan penyusunan laporan penelitian.',
      code: 'RES101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject8.id,
      lecturerId: lecturer8.id,
    },
  });

  const schedule9 = await prisma.schedule.create({
    data: {
      day: 'Sabtu',
      image:
        'https://img.freepik.com/free-vector/statistical-analysis-man-cartoon-character-with-magnifying-glass-analyzing-data-circular-diagram-with-colorful-segments-statistics-audit-research-concept-illustration_335657-2063.jpg?t=st=1728787640~exp=1728791240~hmac=07a2d01802a45ae2a4c96ccfaa88f7e67c82543e12e20291ad2c8362244dbcd5&w=740',
      title: 'Graf & Analisis Algoritma',
      description:
        'Mata kuliah ini berfokus pada teori graf dan analisis algoritma, termasuk bagaimana algoritma diterapkan untuk memecahkan masalah kompleks dalam komputasi.',
      code: 'GRAPH101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      subjectId: subject9.id,
      lecturerId: lecturer9.id,
    },
  });

  // Create Announcements
  const announcement1 = await prisma.announcement.create({
    data: {
      title: 'Exam Notification',
      description: 'Midterm exam will be held on next Friday',
      time: new Date(),
      userId: userLecturer1.id,
    },
  });

  const announcement2 = await prisma.announcement.create({
    data: {
      title: 'Holiday Announcement',
      description: 'No classes next week due to public holiday',
      time: new Date(),
      userId: userLecturer2.id,
    },
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
