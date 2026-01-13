# Taloyhtiö OS (As Oy Esimerkki)

**Taloyhtiö OS** is a comprehensive Digital Twin and Management System for modern Finnish housing companies. It moves beyond simple property management into strategic asset management, financial optimization, and automated governance.

## 🚀 Key Modules

### 1. Board Cockpit (Unified Workflow Orchestrator)
**Location:** `/admin/dashboard`
The central command center for the Board of Directors.
- **Action Feed**: Prioritized tasks based on the project phase (SCAN -> OPTIMIZE -> FUND -> EXECUTE -> SETTLE).
- **Compliance Health Bar**: Real-time monitor of MML Registry sync status and Investment Grade.
- **Community Pulse**: Aggregated alerts from IoT sensors, maintenance feeds, and construction logs.

### 2. Financial & Strategic Engine

#### 📈 Long-Term Scenario Planner
**Location:** `/admin/scenarios`
Simulate the 20-year financial impact of different renovation strategies:
- **Reactive**: "Fix when broken" (High emergency costs).
- **Proactive**: Planned maintenance based on technical lifespans.
- **Optimized**: Bundled projects (e.g., Pipes + Energy) with synergy discounts and green finance.

#### 💎 Investment Grade Analyzer
**Location:** `/admin/investment`
A Bloomberg-style terminal for assessing the housing company's financial health score (A-E) based on 4 pillars:
1.  **Repair Debt**: Technical value vs. maintenance history.
2.  **Funding**: Adequacy of reserves (Hoitovastike).
3.  **Energy Efficiency**: EPC rating and modernizations.
4.  **Governance**: Audit status and PTS planning.

#### 🏦 Bank Loan Bridge
**Location:** `/admin/finance/loans`
- **Credit Bundler**: Automatically compiles Investment Grade reports, Board minutes, and Registry data.
- **One-Click Apply**: Submits loan applications to multiple banks (OP, Nordea, Danske) via simulated APIs.
- **Green Loan Logic**: Auto-detects energy-efficiency projects to request margin discounts (-0.20%).

### 3. Core Services

#### 🧖 Sauna Reservation System
**Location:** `/` (Public) & `/admin/bookings` (Management)
- Digital booking calendar for residents.
- Integrated **Stripe** payments.
- Admin dashboard for tracking revenue and utilization.

## 🛠 Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL (Supabase) + Prisma ORM
- **Styling**: Tailwind CSS
- **Integrations**: Stripe, Mock MML (Maanmittauslaitos), Mock Bank APIs

## 📦 Installation
1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Set up `.env` with `DATABASE_URL`, `STRIPE_SECRET_KEY`, etc.
4.  Run development server: `npm run dev`

## 🔮 Future Roadmap
- **AR Maintenance**: Augmented Reality view for locating shut-off valves.
- **Digital Twin**: IFC model integration.
- **Resident Democracy**: Voting app for Yhtiökokous.
