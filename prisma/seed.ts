import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create User
  const userLecturer = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.lecturer@example.com',
      password: 'securepassword',
      role: 'LECTURER',
    },
  });

  const userStudent = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.student@example.com',
      password: 'securepassword',
      role: 'STUDENT',
    },
  });

  // Create Lecturer
  const lecturer = await prisma.lecturer.create({
    data: {
      userId: userLecturer.id,
    },
  });

  // Create Student
  const student = await prisma.student.create({
    data: {
      userId: userStudent.id,
      npm: 123456789,
      class: 'REGULAR',
      status: 'ACTIVE',
      information: 'A regular student',
    },
  });

  // Create Subject
  const subject = await prisma.subject.create({
    data: {
      image: 'subject-image.png',
      title: 'Computer Science 101',
      description: 'Introduction to Computer Science',
      category: 'Technology',
      timePost: new Date(),
      likes: 10,
    },
  });

  // Create Schedule
  const schedule = await prisma.schedule.create({
    data: {
      day: 'Monday',
      image: 'schedule-image.png',
      title: 'Lecture 1',
      description: 'Introduction to the course',
      code: 'CS101',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour later
      subjectId: subject.id,
      lecturerId: lecturer.id,
    },
  });

  // Create Announcement
  const announcement = await prisma.announcement.create({
    data: {
      title: 'Exam Notification',
      description: 'Midterm exam will be held on next Friday',
      time: new Date(),
      userId: userLecturer.id,
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
