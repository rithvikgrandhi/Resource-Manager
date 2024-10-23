# Resource Management System

## Tech Stack
- Backend: .NET 7 Web API
- Frontend: Angular 16
- Database: SQL Server
- Authentication: JWT

## Database Schema

```sql
-- Users and Authentication
CREATE TABLE [Users] (
    UserId INT PRIMARY KEY IDENTITY(1,1),
    Email VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    UserType VARCHAR(20) NOT NULL, -- Director, HR, Employee, Applicant
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    CreatedAt DATETIME DEFAULT GETDATE()
)

-- Job Requirements
CREATE TABLE [JobRequirements] (
    RequirementId INT PRIMARY KEY IDENTITY(1,1),
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    EmploymentType VARCHAR(20) NOT NULL, -- FullTime, Contract
    NumberOfPositions INT NOT NULL,
    ProjectName VARCHAR(100), -- For contract positions
    Duration INT, -- In months, for contract positions
    Status VARCHAR(20) DEFAULT 'Open',
    CreatedBy INT FOREIGN KEY REFERENCES Users(UserId),
    CreatedAt DATETIME DEFAULT GETDATE()
)

-- Required Skills for Jobs
CREATE TABLE [RequiredSkills] (
    RequiredSkillId INT PRIMARY KEY IDENTITY(1,1),
    RequirementId INT FOREIGN KEY REFERENCES JobRequirements(RequirementId),
    SkillName VARCHAR(100) NOT NULL
)

-- Job Applications
CREATE TABLE [JobApplications] (
    ApplicationId INT PRIMARY KEY IDENTITY(1,1),
    RequirementId INT FOREIGN KEY REFERENCES JobRequirements(RequirementId),
    ApplicantId INT FOREIGN KEY REFERENCES Users(UserId),
    Status VARCHAR(30) DEFAULT 'Applied', -- Applied, UnderReview, HRScreening, RecruitmentTest, TechnicalInterview, HRInterview
    Resume VARCHAR(255), -- File path
    CreatedAt DATETIME DEFAULT GETDATE(),
    LastUpdatedAt DATETIME
)

-- Employee Skills
CREATE TABLE [EmployeeSkills] (
    EmployeeSkillId INT PRIMARY KEY IDENTITY(1,1),
    EmployeeId INT FOREIGN KEY REFERENCES Users(UserId),
    SkillName VARCHAR(100) NOT NULL,
    Certification VARCHAR(255), -- Certificate file path
    ValidUntil DATETIME,
    CreatedAt DATETIME DEFAULT GETDATE()
)
```

## Backend Structure (.NET)

```plaintext
ResourceManagement.API/
├── Controllers/
│   ├── AuthController.cs
│   ├── JobRequirementsController.cs
│   ├── ApplicationsController.cs
│   └── EmployeeSkillsController.cs
├── Models/
│   ├── User.cs
│   ├── JobRequirement.cs
│   ├── JobApplication.cs
│   └── EmployeeSkill.cs
├── Services/
│   ├── AuthService.cs
│   ├── JobService.cs
│   └── SkillsService.cs
└── Data/
    └── ApplicationDbContext.cs
```

## Frontend Structure (Angular)

```plaintext
src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   │   ├── director/
│   │   ├── hr/
│   │   └── employee/
│   ├── jobs/
│   │   ├── job-list/
│   │   ├── job-create/
│   │   └── job-detail/
│   ├── applications/
│   │   ├── application-list/
│   │   └── application-status/
│   └── skills/
│       ├── skill-list/
│       └── skill-upload/
├── shared/
│   ├── models/
│   └── services/
└── assets/
```

## Key API Endpoints

```plaintext
Authentication:
POST /api/auth/login
POST /api/auth/register

Job Requirements:
GET /api/jobs
POST /api/jobs
PUT /api/jobs/{id}
GET /api/jobs/{id}

Applications:
GET /api/applications
POST /api/applications
PUT /api/applications/{id}/status
GET /api/applications/{id}

Skills:
GET /api/skills
POST /api/skills
PUT /api/skills/{id}
POST /api/skills/upload-certificate
```

## Essential Features to Implement

1. **Authentication & Authorization**
   - JWT-based auth
   - Role-based access

2. **Job Requirements Management**
   - Create/Edit requirements
   - View requirements list
   - Filter by type (Full-time/Contract)

3. **Application Tracking**
   - Basic application submission
   - Status updates
   - File upload for resumes

4. **Skills Management**
   - Add/Edit skills
   - Certificate upload
   - Basic skill matching

5. **Dashboards**
   - Role-specific views
   - Status summaries
