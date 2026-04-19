# Lail Academy — Class Management MVP

Class-focused website + admin dashboard for applications, student lifecycle, and fee tracking in **MVR**.

## MVP Scope

- Public pages: home, classes, apply now, pay fees, notices, login
- Admin dashboard:
  - Summary cards
  - Page editor
  - Classes CRUD (name/details/availability/slots/monthly fee)
  - Gallery + Downloads + Announcements
  - Enrollments + Students management
  - Payments verification
  - Settings (name/tagline/logo/contact/footer + password change)
- Student data model:
  - ID Card No as enrollment identifier
  - Status lifecycle: pending/approved/studying/completed/dropout
  - Archive flag
  - Monthly fee billing + pending balance
- Pay Fee sync:
  - ID card + class + student name validation
  - Updates enrollment payments and pending fees

## Stack

- Frontend: Next.js 16 + TypeScript + Tailwind
- Backend: NestJS 11 + Prisma + PostgreSQL
- Auth: JWT access + refresh tokens
- Monorepo: Turborepo + npm workspaces

## Requirements

- Node.js **20.9+** (Next.js 16 requirement)
- PostgreSQL (or Docker via `docker-compose.yml`)

## Run Locally

```bash
npm install
docker-compose up -d

cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local

cd apps/api
npx prisma migrate dev
npx prisma db seed
```

Start services:

```bash
# API (port 4000)
cd apps/api && npm run dev

# Web (port 3001)
cd apps/web && npm run dev
```

## Default Admin Login (seed)

- `admin@lailacademy.edu`
- `password123`

## Go-Live (Production)

1) Prepare production env files:

```bash
cp apps/api/.env.production.example apps/api/.env
cp apps/web/.env.production.example apps/web/.env.local
```

2) Set secure values in `apps/api/.env`:
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `CORS_ORIGIN` (your frontend domain)

3) Run migrations on production DB:

```bash
cd apps/api
npx prisma migrate deploy
```

4) Build both apps:

```bash
cd /path/to/repo
npm run build
```

5) Start services:
- API: `cd apps/api && npm run start:prod`
- Web: `cd apps/web && npm run start`

## Database Backup / Restore

Backup:

```bash
npm run db:backup
```

Restore:

```bash
npm run db:restore -- ./backups/your_file.dump
```

## Admin Hardening Checklist

- Change seeded admin password immediately.
- Disable or delete unused demo accounts.
- Use strong random JWT secrets.
- Set HTTPS on production domain and reverse proxy.
- Restrict `CORS_ORIGIN` to exact frontend origin.
- Run DB backup before every release.
- Keep audit logs enabled and review payment verification activity.

## Notes

- Public site settings are served by `GET /api/content/site-settings`.
- Currency defaults to **MVR** for fee structures and UI labels.
- Class availability and slots are synced in apply/pay flows.
