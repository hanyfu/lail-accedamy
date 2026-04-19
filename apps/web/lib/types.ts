// ─── Enums ──────────────────────────────────────────────

export type Role = 'ADMIN' | 'APPLICANT' | 'STUDENT';
export type UserStatus = 'ACTIVE' | 'INACTIVE';
export type ApplicantStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type IntakeStatus = 'ACTIVE' | 'CLOSED';
export type InvoiceStatus = 'PENDING' | 'PARTIAL' | 'PAID' | 'OVERDUE';
export type PaymentStatus = 'SUBMITTED' | 'VERIFIED' | 'REJECTED';
export type EnrollmentStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'STUDYING'
  | 'COMPLETED'
  | 'DROPOUT'
  | 'REJECTED';
export type EnrollmentSex = 'MALE' | 'FEMALE' | 'OTHER';
export type NoticeAudience = 'ALL' | 'APPLICANTS' | 'STUDENTS';

// ─── Models ─────────────────────────────────────────────

export interface User {
  id: number;
  email: string;
  name: string | null;
  role: Role;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Department {
  id: number;
  name: string;
  code: string;
  programs?: Program[];
  _count?: { programs: number };
  createdAt: string;
  updatedAt: string;
}

export interface Program {
  id: number;
  name: string;
  code: string;
  description: string | null;
  duration: string | null;
  departmentId: number;
  department?: Department;
  intakes?: Intake[];
  _count?: { intakes: number; applicants: number };
  createdAt: string;
  updatedAt: string;
}

export interface Intake {
  id: number;
  name: string;
  programId: number;
  program?: Program;
  startDate: string;
  endDate: string;
  applicationDeadline: string;
  maxCapacity: number;
  status: IntakeStatus;
  _count?: { applicants: number };
  createdAt: string;
  updatedAt: string;
}

export interface Applicant {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string | null;
  address: string | null;
  nationality: string | null;
  previousEdu: string | null;
  intakeId: number;
  intake?: Intake;
  programId: number;
  program?: Program;
  status: ApplicantStatus;
  rejectionNote: string | null;
  submittedAt: string;
  student?: Student | null;
  userId: number | null;
  user?: User;
  createdAt: string;
  updatedAt: string;
}

export interface Student {
  id: number;
  studentId: string;
  applicantId: number;
  applicant?: Applicant;
  userId: number;
  user?: User;
  enrolledAt: string;
  invoices?: Invoice[];
  _count?: { invoices: number };
  totalFees?: number;
  totalPaid?: number;
  pendingFees?: number;
  createdAt: string;
  updatedAt: string;
}

export interface FeeStructure {
  id: number;
  name: string;
  amount: number;
  currency: string;
  programId: number;
  program?: Program;
  intakeId: number | null;
  intake?: Intake | null;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: number;
  invoiceNumber: string;
  studentId: number;
  student?: Student;
  feeStructureId: number;
  feeStructure?: FeeStructure;
  amount: number;
  paidAmount: number;
  dueDate: string;
  status: InvoiceStatus;
  payments?: Payment[];
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: number;
  invoiceId: number | null;
  invoice?: Invoice | null;
  enrollmentId: number | null;
  enrollment?: Enrollment | null;
  amount: number;
  method: string;
  proofUrl: string | null;
  reference: string | null;
  status: PaymentStatus;
  notes: string | null;
  verifiedAt: string | null;
  paymentDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  audience: NoticeAudience;
  programId: number | null;
  program?: Program | null;
  intakeId: number | null;
  intake?: Intake | null;
  isPublished: boolean;
  expiryDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: number;
  userId: number;
  user?: User;
  action: string;
  entity: string;
  entityId: string;
  details: string | null;
  ipAddress: string | null;
  createdAt: string;
}

export interface Course {
  id: number;
  title: string;
  code: string;
  description: string | null;
  duration: string | null;
  slots: number;
  monthlyFee: number;
  availability: 'OPEN' | 'LIMITED' | 'FULL' | 'CLOSED';
  occupiedSlots?: number;
  availableSlots?: number;
  effectiveAvailability?: 'OPEN' | 'LIMITED' | 'FULL' | 'CLOSED';
  isActive: boolean;
  _count?: { enrollments: number };
  createdAt: string;
  updatedAt: string;
}

export type DownloadCategory =
  | 'ADMISSION'
  | 'ACADEMIC'
  | 'POLICY'
  | 'FORM'
  | 'OTHER';

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface DownloadItem {
  id: number;
  title: string;
  category: DownloadCategory;
  fileUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface AnnouncementConfig {
  id: number;
  isEnabled: boolean;
  text: string | null;
  link: string | null;
  audience?: 'ALL' | 'APPLICANTS' | 'STUDENTS';
  createdAt: string;
  updatedAt: string;
}

export interface Enrollment {
  id: number;
  parentName: string | null;
  fullName: string;
  sex: EnrollmentSex | null;
  birthDate: string | null;
  email: string;
  phone: string;
  viberPhone: string | null;
  address: string | null;
  telegramId: string | null;
  message: string | null;
  status: EnrollmentStatus;
  rejectionNote: string | null;
  idCardNo: string | null;
  classFee: number;
  totalBilled: number;
  totalPaid: number;
  pendingFee?: number;
  billingStartDate: string | null;
  billingStoppedAt: string | null;
  isArchived: boolean;
  archivedAt: string | null;
  approvedAt: string | null;
  startedAt: string | null;
  courseId: number | null;
  course?: Course | null;
  payments?: Payment[];
  createdAt: string;
  updatedAt: string;
}

export interface SiteSetting {
  id: number;
  collegeName: string | null;
  tagline: string | null;
  logoUrl: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  mapUrl: string | null;
  footerText: string | null;
  homeContent: HomeContent | null;
  createdAt: string;
  updatedAt: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    applyNow: string;
    browseClasses: string;
  };
  stats: {
    classes: string;
    students: string;
    placement: string;
    faculty: string;
  };
  features: {
    title: string;
    subtitle: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    step4: string;
    step4Desc: string;
  };
  cta: {
    title: string;
    subtitle: string;
    start: string;
    view: string;
  };
}

export interface PageDefinition {
  pageKey: string;
  sections: string[];
}

export interface PageSection {
  pageKey: string;
  sectionKey: string;
  fields: Record<string, any>;
}

// ─── API Response Types ─────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface DashboardStats {
  totalApplicants: number;
  pendingApplicants: number;
  totalStudents: number;
  totalInvoices: number;
  pendingPayments: number;
  totalDepartments: number;
  totalPrograms: number;
  totalInvoiced: number;
  totalCollected: number;
  outstanding: number;
  overdueInvoices: number;
}

export interface FinanceSummary {
  totalInvoiced: number;
  totalCollected: number;
  outstanding: number;
  pendingPayments: number;
  overdueInvoices: number;
}

// ─── API Error ──────────────────────────────────────────

export interface ApiError {
  success: false;
  statusCode: number;
  message: string;
  errors?: string[];
  timestamp: string;
}
