import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import type {
  AuthResponse, User, Department, Program, Intake,
  Applicant, Student, FeeStructure, Invoice, Payment,
  Notice, AuditLog, PaginatedResponse, DashboardStats, FinanceSummary,
  Course, GalleryImage, DownloadItem, AnnouncementConfig,
  Enrollment, SiteSetting, PageDefinition, PageSection,
} from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: { 'Content-Type': 'application/json' },
    });

    this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access_token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });

    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
              const { data } = await axios.post(`${API_URL}/auth/refresh`, {
                refresh_token: refreshToken,
              });
              localStorage.setItem('access_token', data.access_token);
              localStorage.setItem('refresh_token', data.refresh_token);
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
              }
              return this.client(originalRequest);
            }
          } catch {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            if (typeof window !== 'undefined') {
              window.location.href = '/dv/login';
            }
          }
        }
        return Promise.reject(error);
      },
    );
  }

  // ─── Auth ───────────────────────────────────────────────

  async login(email: string, password: string): Promise<AuthResponse> {
    const { data } = await this.client.post('/auth/login', { email, password });
    return data;
  }

  async register(body: { email: string; password: string; name?: string }): Promise<any> {
    const { data } = await this.client.post('/auth/register', body);
    return data;
  }

  async forgotPassword(email: string): Promise<any> {
    const { data } = await this.client.post('/auth/forgot-password', { email });
    return data;
  }

  async resetPassword(token: string, newPassword: string): Promise<any> {
    const { data } = await this.client.post('/auth/reset-password', { token, newPassword });
    return data;
  }

  async getProfile(): Promise<User> {
    const { data } = await this.client.get('/auth/me');
    return data;
  }

  // ─── Departments ────────────────────────────────────────

  async getDepartments(params?: Record<string, any>): Promise<PaginatedResponse<Department>> {
    const { data } = await this.client.get('/departments', { params });
    return data;
  }

  async getDepartment(id: number): Promise<Department> {
    const { data } = await this.client.get(`/departments/${id}`);
    return data;
  }

  async createDepartment(body: { name: string; code: string }): Promise<Department> {
    const { data } = await this.client.post('/departments', body);
    return data;
  }

  async updateDepartment(id: number, body: Partial<Department>): Promise<Department> {
    const { data } = await this.client.put(`/departments/${id}`, body);
    return data;
  }

  async deleteDepartment(id: number): Promise<void> {
    await this.client.delete(`/departments/${id}`);
  }

  // ─── Programs ───────────────────────────────────────────

  async getPrograms(params?: Record<string, any>): Promise<PaginatedResponse<Program>> {
    const { data } = await this.client.get('/programs', { params });
    return data;
  }

  async getPublicPrograms(): Promise<Program[]> {
    const { data } = await this.client.get('/programs/public');
    return data;
  }

  async getProgram(id: number): Promise<Program> {
    const { data } = await this.client.get(`/programs/${id}`);
    return data;
  }

  async createProgram(body: any): Promise<Program> {
    const { data } = await this.client.post('/programs', body);
    return data;
  }

  async updateProgram(id: number, body: Partial<Program>): Promise<Program> {
    const { data } = await this.client.put(`/programs/${id}`, body);
    return data;
  }

  async deleteProgram(id: number): Promise<void> {
    await this.client.delete(`/programs/${id}`);
  }

  // ─── Intakes ────────────────────────────────────────────

  async getIntakes(params?: Record<string, any>): Promise<PaginatedResponse<Intake>> {
    const { data } = await this.client.get('/intakes', { params });
    return data;
  }

  async getActiveIntakes(): Promise<Intake[]> {
    const { data } = await this.client.get('/intakes/active');
    return data;
  }

  async getIntake(id: number): Promise<Intake> {
    const { data } = await this.client.get(`/intakes/${id}`);
    return data;
  }

  async createIntake(body: any): Promise<Intake> {
    const { data } = await this.client.post('/intakes', body);
    return data;
  }

  async updateIntake(id: number, body: any): Promise<Intake> {
    const { data } = await this.client.put(`/intakes/${id}`, body);
    return data;
  }

  async deleteIntake(id: number): Promise<void> {
    await this.client.delete(`/intakes/${id}`);
  }

  // ─── Applicants ─────────────────────────────────────────

  async submitApplication(body: any): Promise<Applicant> {
    const { data } = await this.client.post('/applicants/apply', body);
    return data;
  }

  async getMyApplication(): Promise<Applicant | null> {
    const { data } = await this.client.get('/applicants/me');
    return data;
  }

  async getApplicants(params?: Record<string, any>): Promise<PaginatedResponse<Applicant>> {
    const { data } = await this.client.get('/applicants', { params });
    return data;
  }

  async getApplicant(id: number): Promise<Applicant> {
    const { data } = await this.client.get(`/applicants/${id}`);
    return data;
  }

  async updateApplicantStatus(id: number, body: { status: string; rejectionNote?: string }): Promise<Applicant> {
    const { data } = await this.client.put(`/applicants/${id}/status`, body);
    return data;
  }

  // ─── Students ───────────────────────────────────────────

  async getMyStudentProfile(): Promise<Student | null> {
    const { data } = await this.client.get('/students/me');
    return data;
  }

  async getStudents(params?: Record<string, any>): Promise<PaginatedResponse<Student>> {
    const { data } = await this.client.get('/students', { params });
    return data;
  }

  async getStudent(id: number): Promise<Student> {
    const { data } = await this.client.get(`/students/${id}`);
    return data;
  }

  // ─── Finance ────────────────────────────────────────────

  async getFeeStructures(params?: Record<string, any>): Promise<PaginatedResponse<FeeStructure>> {
    const { data } = await this.client.get('/finance/fee-structures', { params });
    return data;
  }

  async createFeeStructure(body: any): Promise<FeeStructure> {
    const { data } = await this.client.post('/finance/fee-structures', body);
    return data;
  }

  async updateFeeStructure(id: number, body: any): Promise<FeeStructure> {
    const { data } = await this.client.put(`/finance/fee-structures/${id}`, body);
    return data;
  }

  async deleteFeeStructure(id: number): Promise<void> {
    await this.client.delete(`/finance/fee-structures/${id}`);
  }

  async getInvoices(params?: Record<string, any>): Promise<PaginatedResponse<Invoice>> {
    const { data } = await this.client.get('/finance/invoices', { params });
    return data;
  }

  async getMyInvoices(): Promise<Invoice[]> {
    const { data } = await this.client.get('/finance/invoices/my');
    return data;
  }

  async getInvoice(id: number): Promise<Invoice> {
    const { data } = await this.client.get(`/finance/invoices/${id}`);
    return data;
  }

  async generateInvoice(body: any): Promise<Invoice> {
    const { data } = await this.client.post('/finance/invoices', body);
    return data;
  }

  async deleteInvoice(id: number): Promise<void> {
    await this.client.delete(`/finance/invoices/${id}`);
  }

  async getPayments(params?: Record<string, any>): Promise<PaginatedResponse<Payment>> {
    const { data } = await this.client.get('/finance/payments', { params });
    return data;
  }

  async submitPayment(formData: FormData): Promise<Payment> {
    const { data } = await this.client.post('/finance/payments', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  }

  async verifyPayment(id: number, body: { status: string; notes?: string }): Promise<Payment> {
    const { data } = await this.client.put(`/finance/payments/${id}/verify`, body);
    return data;
  }

  async getDashboardStats(): Promise<DashboardStats> {
    const { data } = await this.client.get('/finance/dashboard');
    return data;
  }

  async getFinanceSummary(): Promise<FinanceSummary> {
    const { data } = await this.client.get('/finance/summary');
    return data;
  }

  // ─── Notices ────────────────────────────────────────────

  async getPublicNotices(audience?: string): Promise<Notice[]> {
    const { data } = await this.client.get('/notices/public', { params: { audience } });
    return data;
  }

  async getNotices(params?: Record<string, any>): Promise<PaginatedResponse<Notice>> {
    const { data } = await this.client.get('/notices', { params });
    return data;
  }

  async getNotice(id: number): Promise<Notice> {
    const { data } = await this.client.get(`/notices/${id}`);
    return data;
  }

  async createNotice(body: any): Promise<Notice> {
    const { data } = await this.client.post('/notices', body);
    return data;
  }

  async updateNotice(id: number, body: any): Promise<Notice> {
    const { data } = await this.client.put(`/notices/${id}`, body);
    return data;
  }

  async deleteNotice(id: number): Promise<void> {
    await this.client.delete(`/notices/${id}`);
  }

  // ─── Audit Logs ─────────────────────────────────────────

  async getAuditLogs(params?: Record<string, any>): Promise<PaginatedResponse<AuditLog>> {
    const { data } = await this.client.get('/audit-logs', { params });
    return data;
  }

  // ─── CMS: Courses ──────────────────────────────────────

  async getCourses(params?: Record<string, any>): Promise<PaginatedResponse<Course>> {
    const { data } = await this.client.get('/courses', { params });
    return data;
  }

  async getPublicCourses(): Promise<Array<Pick<Course, 'id' | 'title' | 'code' | 'duration' | 'slots' | 'monthlyFee' | 'availability' | 'occupiedSlots' | 'availableSlots' | 'effectiveAvailability'>>> {
    const { data } = await this.client.get('/courses/public');
    return data;
  }

  async createCourse(body: any): Promise<Course> {
    const { data } = await this.client.post('/courses', body);
    return data;
  }

  async updateCourse(id: number, body: any): Promise<Course> {
    const { data } = await this.client.put(`/courses/${id}`, body);
    return data;
  }

  async deleteCourse(id: number): Promise<void> {
    await this.client.delete(`/courses/${id}`);
  }

  // ─── CMS: Gallery ──────────────────────────────────────

  async getGallery(params?: Record<string, any>): Promise<PaginatedResponse<GalleryImage>> {
    const { data } = await this.client.get('/gallery', { params });
    return data;
  }

  async createGalleryImage(formData: FormData): Promise<GalleryImage> {
    const { data } = await this.client.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  }

  async deleteGalleryImage(id: number): Promise<void> {
    await this.client.delete(`/gallery/${id}`);
  }

  // ─── CMS: Downloads ────────────────────────────────────

  async getDownloads(
    params?: Record<string, any>,
  ): Promise<PaginatedResponse<DownloadItem>> {
    const { data } = await this.client.get('/downloads', { params });
    return data;
  }

  async createDownload(formData: FormData): Promise<DownloadItem> {
    const { data } = await this.client.post('/downloads', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  }

  async deleteDownload(id: number): Promise<void> {
    await this.client.delete(`/downloads/${id}`);
  }

  // ─── CMS: Announcements ────────────────────────────────

  async getAnnouncementConfig(): Promise<AnnouncementConfig> {
    const { data } = await this.client.get('/announcements');
    return data;
  }

  async updateAnnouncementConfig(body: {
    isEnabled: boolean;
    text?: string;
    link?: string;
    audience?: 'ALL' | 'APPLICANTS' | 'STUDENTS';
  }): Promise<AnnouncementConfig> {
    const { data } = await this.client.put('/announcements', body);
    return data;
  }

  // ─── CMS: Enrollments ──────────────────────────────────

  async submitEnrollment(body: any): Promise<Enrollment> {
    const { data } = await this.client.post('/enrollments', body);
    return data;
  }

  async getEnrollments(params?: Record<string, any>): Promise<PaginatedResponse<Enrollment>> {
    const { data } = await this.client.get('/enrollments', { params });
    return data;
  }

  async updateEnrollment(id: number, body: {
    status?: 'APPROVED' | 'STUDYING' | 'COMPLETED' | 'DROPOUT' | 'REJECTED';
    rejectionNote?: string;
    idCardNo?: string;
    classFee?: number;
    courseId?: number;
    isArchived?: boolean;
  }): Promise<Enrollment> {
    const { data } = await this.client.put(`/enrollments/${id}`, body);
    return data;
  }

  async lookupEnrollmentByIdCard(params: {
    idCardNo: string;
    courseId?: number;
  }): Promise<{
    id: number;
    idCardNo: string;
    fullName: string;
    courseId: number | null;
    classFee: number;
    totalBilled: number;
    totalPaid: number;
    pendingFee: number;
  }> {
    const { data } = await this.client.get('/enrollments/lookup', { params });
    return data;
  }

  // ─── CMS: Page Editor ──────────────────────────────────

  async getPageDefinitions(): Promise<PageDefinition[]> {
    const { data } = await this.client.get('/page-editor/pages');
    return data;
  }

  async getPageSections(pageKey: string): Promise<PageSection[]> {
    const { data } = await this.client.get(`/page-editor/${pageKey}/sections`);
    return data;
  }

  async savePageSection(
    pageKey: string,
    sectionKey: string,
    fields: Record<string, any>,
  ): Promise<any> {
    const { data } = await this.client.put(
      `/page-editor/${pageKey}/sections/${sectionKey}`,
      { fields },
    );
    return data;
  }

  // ─── CMS: Site Settings ────────────────────────────────

  async getSiteSettings(): Promise<SiteSetting> {
    const { data } = await this.client.get('/settings/site');
    return data;
  }

  async getPublicSiteSettings(): Promise<Partial<SiteSetting>> {
    const { data } = await this.client.get('/content/site-settings');
    return data;
  }

  async updateSiteSettings(body: Partial<SiteSetting>): Promise<SiteSetting> {
    const { data } = await this.client.put('/settings/site', body);
    return data;
  }

  async changePassword(body: { currentPassword: string; newPassword: string }): Promise<any> {
    const { data } = await this.client.put('/settings/change-password', body);
    return data;
  }
}

export const api = new ApiClient();
