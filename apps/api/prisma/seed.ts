import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { getDefaultHomeContent } from '../src/common/default-home-content';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Development seed: reset data for repeatable runs
  await prisma.payment.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.student.deleteMany();
  await prisma.applicant.deleteMany();
  await prisma.notice.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.course.deleteMany();
  await prisma.feeStructure.deleteMany();
  await prisma.intake.deleteMany();
  await prisma.program.deleteMany();
  await prisma.department.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.siteSetting.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 10);

  // ─── Admin User ───────────────────────────────────────
  const admin = await prisma.user.upsert({
    where: { email: 'admin@lailacademy.edu' },
    update: {},
    create: {
      email: 'admin@lailacademy.edu',
      name: 'System Administrator',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log('✅ Admin user created:', admin.email);

  await prisma.siteSetting.create({
    data: {
      collegeName: 'Lail Academy',
      tagline: 'Quality classes for every learner',
      phone: '+960 977-7441',
      email: 'lail.academymv@gmail.com',
      address: 'Lail Academy, Maldives',
      footerText: 'Lail Academy contact info',
      homeContent: getDefaultHomeContent(),
    },
  });
  console.log('✅ Site settings created');

  // ─── Departments ──────────────────────────────────────
  const deptCS = await prisma.department.upsert({
    where: { code: 'CS' },
    update: {},
    create: { name: 'Computer Science', code: 'CS' },
  });

  const deptBUS = await prisma.department.upsert({
    where: { code: 'BUS' },
    update: {},
    create: { name: 'Business Administration', code: 'BUS' },
  });

  const deptENG = await prisma.department.upsert({
    where: { code: 'ENG' },
    update: {},
    create: { name: 'Engineering', code: 'ENG' },
  });

  console.log('✅ Departments created');

  // ─── Programs ─────────────────────────────────────────
  const bscCS = await prisma.program.upsert({
    where: { code: 'BSC-CS' },
    update: {},
    create: {
      name: 'Bachelor of Science in Computer Science',
      code: 'BSC-CS',
      description: 'A comprehensive program covering software engineering, algorithms, and data structures.',
      duration: '4 years',
      departmentId: deptCS.id,
    },
  });

  const mscCS = await prisma.program.upsert({
    where: { code: 'MSC-CS' },
    update: {},
    create: {
      name: 'Master of Science in Computer Science',
      code: 'MSC-CS',
      description: 'Advanced studies in AI, machine learning, and distributed systems.',
      duration: '2 years',
      departmentId: deptCS.id,
    },
  });

  const bba = await prisma.program.upsert({
    where: { code: 'BBA' },
    update: {},
    create: {
      name: 'Bachelor of Business Administration',
      code: 'BBA',
      description: 'Comprehensive business education covering management, finance, and marketing.',
      duration: '4 years',
      departmentId: deptBUS.id,
    },
  });

  const mba = await prisma.program.upsert({
    where: { code: 'MBA' },
    update: {},
    create: {
      name: 'Master of Business Administration',
      code: 'MBA',
      description: 'Graduate program focused on leadership, strategy, and enterprise management.',
      duration: '2 years',
      departmentId: deptBUS.id,
    },
  });

  const bscEE = await prisma.program.upsert({
    where: { code: 'BSC-EE' },
    update: {},
    create: {
      name: 'Bachelor of Science in Electrical Engineering',
      code: 'BSC-EE',
      description: 'Study of electrical systems, signal processing, and embedded systems.',
      duration: '4 years',
      departmentId: deptENG.id,
    },
  });

  const bscME = await prisma.program.upsert({
    where: { code: 'BSC-ME' },
    update: {},
    create: {
      name: 'Bachelor of Science in Mechanical Engineering',
      code: 'BSC-ME',
      description: 'Study of mechanics, thermodynamics, and manufacturing.',
      duration: '4 years',
      departmentId: deptENG.id,
    },
  });

  console.log('✅ Programs created');

  // ─── Public Courses (for class applications) ─────────
  const courseRobotics = await prisma.course.create({
    data: {
      title: 'Robotics Basics',
      code: 'CLS-ROBO-01',
      description: 'Foundational robotics class for beginners.',
      duration: '3 months',
      slots: 50,
      monthlyFee: 120,
      availability: 'OPEN',
      isActive: true,
    },
  });

  await prisma.course.create({
    data: {
      title: 'English Communication',
      code: 'CLS-ENG-01',
      description: 'Spoken and written communication class.',
      duration: '2 months',
      slots: 40,
      monthlyFee: 100,
      availability: 'OPEN',
      isActive: true,
    },
  });

  console.log('✅ Public courses created');

  // ─── Intakes ──────────────────────────────────────────
  const intakeFall2026 = await prisma.intake.create({
    data: {
      name: 'Fall 2026',
      programId: bscCS.id,
      startDate: new Date('2026-09-01'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-08-15'),
      maxCapacity: 120,
      status: 'ACTIVE',
    },
  });

  const intakeSpring2027 = await prisma.intake.create({
    data: {
      name: 'Spring 2027',
      programId: bscCS.id,
      startDate: new Date('2027-01-15'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-12-31'),
      maxCapacity: 80,
      status: 'ACTIVE',
    },
  });

  await prisma.intake.create({
    data: {
      name: 'Fall 2026',
      programId: mscCS.id,
      startDate: new Date('2026-09-01'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-08-01'),
      maxCapacity: 40,
      status: 'ACTIVE',
    },
  });

  await prisma.intake.create({
    data: {
      name: 'Fall 2026',
      programId: bba.id,
      startDate: new Date('2026-09-01'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-08-15'),
      maxCapacity: 100,
      status: 'ACTIVE',
    },
  });

  await prisma.intake.create({
    data: {
      name: 'Fall 2026',
      programId: mba.id,
      startDate: new Date('2026-09-01'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-07-31'),
      maxCapacity: 50,
      status: 'ACTIVE',
    },
  });

  await prisma.intake.create({
    data: {
      name: 'Fall 2026',
      programId: bscEE.id,
      startDate: new Date('2026-09-01'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-08-15'),
      maxCapacity: 60,
      status: 'ACTIVE',
    },
  });

  await prisma.intake.create({
    data: {
      name: 'Fall 2026',
      programId: bscME.id,
      startDate: new Date('2026-09-01'),
      endDate: new Date('2027-06-30'),
      applicationDeadline: new Date('2026-08-15'),
      maxCapacity: 60,
      status: 'ACTIVE',
    },
  });

  console.log('✅ Intakes created');

  // ─── Fee Structures ───────────────────────────────────
  const tuitionCS = await prisma.feeStructure.create({
    data: {
      name: 'Tuition Fee - BSc CS',
      amount: 5000,
      currency: 'MVR',
      programId: bscCS.id,
    },
  });

  await prisma.feeStructure.create({
    data: {
      name: 'Registration Fee - BSc CS',
      amount: 200,
      currency: 'MVR',
      programId: bscCS.id,
    },
  });

  await prisma.feeStructure.create({
    data: {
      name: 'Tuition Fee - MSc CS',
      amount: 8000,
      currency: 'MVR',
      programId: mscCS.id,
    },
  });

  await prisma.feeStructure.create({
    data: {
      name: 'Tuition Fee - BBA',
      amount: 4500,
      currency: 'MVR',
      programId: bba.id,
    },
  });

  await prisma.feeStructure.create({
    data: {
      name: 'Tuition Fee - MBA',
      amount: 12000,
      currency: 'MVR',
      programId: mba.id,
    },
  });

  console.log('✅ Fee structures created');

  // ─── Sample Applicant ─────────────────────────────────
  const applicantUser = await prisma.user.upsert({
    where: { email: 'john.doe@example.com' },
    update: {},
    create: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: hashedPassword,
      role: 'APPLICANT',
    },
  });

  const applicant1 = await prisma.applicant.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      dateOfBirth: new Date('2000-05-15'),
      address: '123 Main St, Springfield, IL',
      nationality: 'US',
      previousEdu: 'Springfield High School - GPA 3.8',
      programId: bscCS.id,
      intakeId: intakeFall2026.id,
      userId: applicantUser.id,
    },
  });

  // Another applicant
  const applicantUser2 = await prisma.user.upsert({
    where: { email: 'jane.smith@example.com' },
    update: {},
    create: {
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      password: hashedPassword,
      role: 'APPLICANT',
    },
  });

  await prisma.applicant.create({
    data: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+1987654321',
      dateOfBirth: new Date('2001-03-22'),
      address: '456 Oak Ave, Chicago, IL',
      nationality: 'US',
      previousEdu: 'Lincoln High School - GPA 3.9',
      programId: bscCS.id,
      intakeId: intakeFall2026.id,
      userId: applicantUser2.id,
    },
  });

  console.log('✅ Sample applicants created');

  // ─── Sample Approved Student ──────────────────────────
  const studentUser = await prisma.user.upsert({
    where: { email: 'alex.johnson@example.com' },
    update: {},
    create: {
      email: 'alex.johnson@example.com',
      name: 'Alex Johnson',
      password: hashedPassword,
      role: 'STUDENT',
    },
  });

  const approvedApplicant = await prisma.applicant.create({
    data: {
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex.johnson@example.com',
      phone: '+1122334455',
      dateOfBirth: new Date('1999-11-10'),
      nationality: 'US',
      previousEdu: 'Central High School - GPA 3.7',
      programId: bscCS.id,
      intakeId: intakeFall2026.id,
      status: 'APPROVED',
      userId: studentUser.id,
    },
  });

  const student1 = await prisma.student.create({
    data: {
      studentId: 'STU-2026-0001',
      applicantId: approvedApplicant.id,
      userId: studentUser.id,
    },
  });

  // ─── Sample Invoice & Payment ─────────────────────────
  const invoice1 = await prisma.invoice.create({
    data: {
      invoiceNumber: 'INV-2026-0001',
      studentId: student1.id,
      feeStructureId: tuitionCS.id,
      amount: 5000,
      dueDate: new Date('2026-09-01'),
      status: 'PARTIAL',
      paidAmount: 2000,
    },
  });

  await prisma.payment.create({
    data: {
      invoiceId: invoice1.id,
      amount: 2000,
      method: 'BANK_TRANSFER',
      reference: 'TXN-001-2026',
      status: 'VERIFIED',
      verifiedAt: new Date(),
    },
  });

  console.log('✅ Sample student, invoice, and payment created');

  // ─── Sample Class Enrollment ──────────────────────────
  const classEnrollment = await prisma.enrollment.create({
    data: {
      parentName: 'Aishath Rasheed',
      fullName: 'Ibrahim Rasheed',
      sex: 'MALE',
      birthDate: new Date('2012-06-12'),
      email: 'ibrahim.rasheed@example.com',
      phone: '+9607712345',
      viberPhone: '+9607712345',
      address: 'Male, Maldives',
      telegramId: '123456789',
      message: 'Interested in evening batch',
      courseId: courseRobotics.id,
      status: 'STUDYING',
      idCardNo: 'A10234',
      classFee: 1800,
      totalPaid: 600,
      billingStartDate: new Date('2026-02-15'),
      approvedAt: new Date('2026-02-10'),
      startedAt: new Date('2026-02-15'),
    },
  });

  await prisma.payment.create({
    data: {
      enrollmentId: classEnrollment.id,
      amount: 600,
      method: 'BANK_TRANSFER',
      reference: 'A10234 | Robotics Basics',
      status: 'VERIFIED',
      verifiedAt: new Date(),
    },
  });

  console.log('✅ Sample class enrollment created');

  // ─── Notices ──────────────────────────────────────────
  await prisma.notice.create({
    data: {
      title: 'Fall 2026 Admissions Open',
      content: 'We are now accepting applications for the Fall 2026 semester. Apply before the deadline to secure your spot in your preferred program.',
      audience: 'ALL',
      isPublished: true,
    },
  });

  await prisma.notice.create({
    data: {
      title: 'Scholarship Opportunities Available',
      content: 'Merit-based and need-based scholarships are available for new students. Check our financial aid page for eligibility criteria and application process.',
      audience: 'APPLICANTS',
      isPublished: true,
    },
  });

  await prisma.notice.create({
    data: {
      title: 'Fee Payment Reminder',
      content: 'All students are reminded to complete their fee payments before the due date to avoid late fees. Payment can be made online or through bank transfer.',
      audience: 'STUDENTS',
      isPublished: true,
    },
  });

  await prisma.notice.create({
    data: {
      title: 'Campus Orientation Week',
      content: 'New student orientation week begins September 1st. Attendance is mandatory for all first-year students.',
      audience: 'STUDENTS',
      isPublished: true,
      expiryDate: new Date('2026-09-07'),
    },
  });

  console.log('✅ Notices created');

  // ─── Audit Log ────────────────────────────────────────
  await prisma.auditLog.create({
    data: {
      userId: admin.id,
      action: 'SEED',
      entity: 'System',
      entityId: '0',
      details: 'Database seeded with sample data',
    },
  });

  console.log('✅ Audit log entry created');
  console.log('\n🎉 Database seeding complete!');
  console.log('\n📋 Accounts:');
  console.log('   Admin: admin@lailacademy.edu / password123');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
