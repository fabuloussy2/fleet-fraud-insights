# Fleetlens Implementation Plan

Fleetlens is an AI-powered fleet operational intelligence platform designed for Nigerian logistics operators to detect financial leakage (fuel siphoning, ghost trips, etc.). This plan focuses on building the frontend dashboard and shell based on the provided design system and requirements.

## Scope
- **Shell & Navigation:** Sidebar with near-black background, Topbar with "Morning Intelligence Report" title.
- **Dashboard:** Savings banner, 4-cell stat row, Anomaly table, Fleet Intelligence Chat, and XAI Side Panel.
- **Design System:** Implementation of specific tokens (Gold accent, DM Serif Display, Inter, JetBrains Mono, 4px/8px radius).
- **Data Layer:** Mocked data mirroring the FastAPI structure until backend integration is ready.
- **Routing:** Setting up all required paths (`/dashboard`, `/fleet`, `/vehicles/:id`, etc.).

## Non-Goals
- Real-time GPS tracking implementation (simulated/mocked only).
- Actual PDF generation in the reports page (UI skeleton only).
- Physical connection to the local FastAPI (will use mocked client initially to ensure UI works).

## Assumptions
- The "FastAPI running at localhost:8000" is available but the frontend should be resilient to its absence.
- Fonts (DM Serif Display, Inter, JetBrains Mono) can be loaded via Google Fonts.

## Affected Areas
- `src/styles/tokens.css`: Core design tokens and variable definitions.
- `src/components/layout/`: Shell, Sidebar, Topbar.
- `src/components/dashboard/`: Dashboard specific components.
- `src/App.tsx`: Routing configuration.

---

## Phases

### Phase 1: Foundation & Design System (frontend_engineer)
- Install dependencies: `lucide-react`, `recharts`, `react-router-dom`, `clsx`, `tailwind-merge`.
- Configure `src/index.css` and `src/styles/tokens.css` with the Fleetlens palette and typography.
- Set up Google Fonts imports in `index.html`.

### Phase 2: Layout & Shell (frontend_engineer)
- Create `Sidebar.tsx` (dark theme, gold accents for active state).
- Create `Topbar.tsx` (title, date, actions).
- Create `Shell.tsx` to wrap pages.
- Set up `react-router-dom` with the specified paths.

### Phase 3: Dashboard Core (frontend_engineer)
- **SavingsBanner.tsx**: The ROI/Fraud exposure strip.
- **StatRow.tsx**: The 4-cell summary cards.
- **AnomalyTable.tsx**: Data-dense table with "Risk", "Vehicle", etc.
- **Shared Components**: `RiskPill`, `EngineTag`.

### Phase 4: Intelligence & XAI (frontend_engineer)
- **FleetChat.tsx**: The LLM chat interface on the right.
- **XAIPanel.tsx**: Drawer/Side-panel that triggers on table row click.
- **SignalBar.tsx**: Confidence indicator for the XAI panel.

### Phase 5: Routing & Mock Data (frontend_engineer)
- Implement `useAnomalies` and `useFleetChat` hooks with mock data.
- Create placeholder pages for `/fleet`, `/drivers`, `/anomalies`, etc., to allow navigation.

---

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup theme, layout, and build the complex interactive dashboard components.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** Build the entire UI shell and Dashboard according to the Fleetlens design specs.
- **Files:** 
    - `src/index.css` (tokens)
    - `src/components/layout/*`
    - `src/components/dashboard/*`
    - `src/App.tsx` (routes)
    - `src/hooks/*` (data fetching/mocking)
- **Depends on:** none
- **Acceptance criteria:**
    - Sidebar is near-black (#111110).
    - Gold accent (#A07840) used sparingly but effectively.
    - Anomaly table rows open the XAI Side Panel.
    - Dashboard matches the visual hierarchy in the requirements.
    - All routes in the structure exist (even if just text placeholders).
