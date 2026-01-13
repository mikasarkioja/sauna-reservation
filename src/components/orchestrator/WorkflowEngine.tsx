'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// --- Types ---

export type ProjectPhase = 
  | 'SCAN'      // Energy Scanner + Resident Quests
  | 'OPTIMIZE'  // ROI Calculator + Scenario Planner
  | 'FUND'      // Investment Grade + Bank Bridge
  | 'EXECUTE'   // Tendering + Contracts
  | 'SETTLE';   // Loan Watch + Digital Minutes

export interface ProjectState {
  currentPhase: ProjectPhase;
  progress: number; // 0-100 within phase
  tasks: Task[];
  health: {
    mmlSync: boolean;
    investmentGrade: 'A' | 'B' | 'C' | 'D' | 'E';
    fundingSecured: boolean;
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  type: 'DECISION' | 'REVIEW' | 'SIGNATURE' | 'INFO';
  status: 'PENDING' | 'COMPLETED';
  phase: ProjectPhase;
  actionUrl?: string;
}

// --- Context ---

interface WorkflowContextType {
  state: ProjectState;
  completeTask: (taskId: string) => void;
  advancePhase: () => void;
  syncCrossModuleData: () => Promise<void>;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

// --- State Machine Logic ---

const INITIAL_TASKS: Task[] = [
  { id: 't1', title: 'Review Energy Scan', description: 'Analyze potential heat loss in A-block.', priority: 'HIGH', type: 'REVIEW', status: 'PENDING', phase: 'SCAN', actionUrl: '/admin/scenarios' },
  { id: 't2', title: 'Launch Resident Survey', description: 'Gather feedback on renovation wishes.', priority: 'MEDIUM', type: 'DECISION', status: 'PENDING', phase: 'SCAN' },
];

export function WorkflowProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProjectState>({
    currentPhase: 'SCAN',
    progress: 25,
    tasks: INITIAL_TASKS,
    health: {
      mmlSync: false,
      investmentGrade: 'D', // Starts low
      fundingSecured: false,
    }
  });

  // Cross-Module Data Sync Simulation
  const syncCrossModuleData = async () => {
    console.log('[Workflow] Syncing modules...');
    
    // Simulating "If approved ROI Scenario -> Populate Draft Loan"
    // In a real app, this would check DB state.
    // Here we just simulate a state update.
    
    // Simulate MML Sync check
    const mmlSynced = Math.random() > 0.2; // 80% chance success
    
    setState(prev => ({
      ...prev,
      health: {
        ...prev.health,
        mmlSync: mmlSynced,
        // If funding phase, maybe grade improves
        investmentGrade: prev.currentPhase === 'FUND' ? 'B' : prev.health.investmentGrade
      }
    }));
  };

  const completeTask = (taskId: string) => {
    setState(prev => {
      const updatedTasks = prev.tasks.map(t => 
        t.id === taskId ? { ...t, status: 'COMPLETED' as const } : t
      );
      
      // Calculate new progress
      const pendingInPhase = updatedTasks.filter(t => t.phase === prev.currentPhase && t.status === 'PENDING');
      const totalInPhase = updatedTasks.filter(t => t.phase === prev.currentPhase);
      const newProgress = totalInPhase.length > 0 
        ? Math.round(((totalInPhase.length - pendingInPhase.length) / totalInPhase.length) * 100) 
        : 100;

      return {
        ...prev,
        tasks: updatedTasks,
        progress: newProgress
      };
    });
  };

  const advancePhase = () => {
    setState(prev => {
      let nextPhase: ProjectPhase = prev.currentPhase;
      let nextTasks: Task[] = [];
      let nextGrade = prev.health.investmentGrade;

      switch (prev.currentPhase) {
        case 'SCAN':
          nextPhase = 'OPTIMIZE';
          nextTasks = [
             { id: 't3', title: 'Select Renovation Scenario', description: 'Choose between Reactive, Proactive, or Optimized.', priority: 'HIGH', type: 'DECISION', status: 'PENDING', phase: 'OPTIMIZE', actionUrl: '/admin/scenarios' },
             { id: 't4', title: 'Check ROI Calculation', description: 'Verify energy savings assumptions.', priority: 'LOW', type: 'REVIEW', status: 'PENDING', phase: 'OPTIMIZE' }
          ];
          break;
        case 'OPTIMIZE':
          nextPhase = 'FUND';
          nextTasks = [
             { id: 't5', title: 'Apply for Green Loan', description: 'Investment Grade B achieved. Eligible for -0.20% margin.', priority: 'HIGH', type: 'ACTION', status: 'PENDING', phase: 'FUND', actionUrl: '/admin/finance/loans' },
             { id: 't6', title: 'Sign Board Minutes', description: 'Authorize loan application.', priority: 'HIGH', type: 'SIGNATURE', status: 'PENDING', phase: 'FUND' }
          ];
          nextGrade = 'B'; // Optimization improves grade
          break;
        case 'FUND':
          nextPhase = 'EXECUTE';
          nextTasks = [
            { id: 't7', title: 'Sign Roof Contract', description: 'Contractor: Kattotutka Oy.', priority: 'HIGH', type: 'SIGNATURE', status: 'PENDING', phase: 'EXECUTE' },
            { id: 't8', title: 'Approve Milestone Payment', description: 'Material delivery confirmed.', priority: 'MEDIUM', type: 'DECISION', status: 'PENDING', phase: 'EXECUTE' }
          ];
          break;
        case 'EXECUTE':
          nextPhase = 'SETTLE';
          nextTasks = [
            { id: 't9', title: 'Final Inspection', description: 'Sign off on delivery.', priority: 'HIGH', type: 'REVIEW', status: 'PENDING', phase: 'SETTLE' }
          ];
          break;
        default:
          break;
      }

      return {
        ...prev,
        currentPhase: nextPhase,
        tasks: [...prev.tasks, ...nextTasks], // Keep history? Or just active? Let's keep for history log.
        progress: 0,
        health: {
            ...prev.health,
            investmentGrade: nextGrade
        }
      };
    });
  };

  return (
    <WorkflowContext.Provider value={{ state, completeTask, advancePhase, syncCrossModuleData }}>
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
}
