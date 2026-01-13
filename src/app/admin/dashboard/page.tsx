'use client';

import React, { useEffect } from 'react';
// Force rebuild: v1
import Link from 'next/link';
import { WorkflowProvider, useWorkflow, ProjectPhase, Task } from '@/components/orchestrator/WorkflowEngine';

// --- ICONS ---
function CheckCircleIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function AlertIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
}
function BellIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
}

// --- SUB-COMPONENTS ---

function HealthStatusBar() {
    const { state, syncCrossModuleData } = useWorkflow();
    const { health } = state;

    useEffect(() => {
        syncCrossModuleData(); // Initial sync
    }, []);

    // Determine Global Status
    let globalStatus: 'GREEN' | 'YELLOW' | 'RED' = 'GREEN';
    if (!health.mmlSync) globalStatus = 'RED';
    else if (health.investmentGrade === 'D' || health.investmentGrade === 'E') globalStatus = 'YELLOW';

    return (
        <div className={`w-full p-4 rounded-xl border flex justify-between items-center transition-colors ${
            globalStatus === 'GREEN' ? 'bg-emerald-50 border-emerald-200' :
            globalStatus === 'YELLOW' ? 'bg-amber-50 border-amber-200' :
            'bg-red-50 border-red-200'
        }`}>
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${
                    globalStatus === 'GREEN' ? 'bg-emerald-100 text-emerald-600' :
                    globalStatus === 'YELLOW' ? 'bg-amber-100 text-amber-600' :
                    'bg-red-100 text-red-600'
                }`}>
                    {globalStatus === 'GREEN' ? <CheckCircleIcon className="w-6 h-6" /> : <AlertIcon className="w-6 h-6" />}
                </div>
                <div>
                    <h3 className={`font-bold ${
                        globalStatus === 'GREEN' ? 'text-emerald-900' :
                        globalStatus === 'YELLOW' ? 'text-amber-900' :
                        'text-red-900'
                    }`}>
                        {globalStatus === 'GREEN' ? 'Compliance Status: Excellent' :
                         globalStatus === 'YELLOW' ? 'Compliance Status: Attention Needed' :
                         'Compliance Status: CRITICAL'}
                    </h3>
                    <div className="flex gap-4 text-xs mt-1 opacity-80">
                         <span className={health.mmlSync ? 'text-emerald-700 font-semibold' : 'text-red-700 font-bold'}>
                             MML Registry: {health.mmlSync ? 'Synced' : 'Error'}
                         </span>
                         <span>•</span>
                         <span className={['A','B'].includes(health.investmentGrade) ? 'text-emerald-700' : 'text-amber-700'}>
                             Invest. Grade: {health.investmentGrade}
                         </span>
                         <span>•</span>
                         <span className={health.fundingSecured ? 'text-emerald-700' : 'text-slate-600'}>
                             Funding: {health.fundingSecured ? 'Secured' : 'Pending'}
                         </span>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => syncCrossModuleData()} 
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-50 shadow-sm"
            >
                Refresh Audit
            </button>
        </div>
    );
}

function PhaseTracker() {
    const { state } = useWorkflow();
    const phases: ProjectPhase[] = ['SCAN', 'OPTIMIZE', 'FUND', 'EXECUTE', 'SETTLE'];
    
    const currentIndex = phases.indexOf(state.currentPhase);

    return (
        <div className="flex justify-between items-center relative my-8 px-4">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10" />
            
            {phases.map((phase, idx) => {
                const isCompleted = idx < currentIndex;
                const isCurrent = idx === currentIndex;
                
                return (
                    <div key={phase} className="flex flex-col items-center bg-white px-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all ${
                            isCompleted ? 'bg-blue-600 border-blue-600 text-white' :
                            isCurrent ? 'bg-white border-blue-600 text-blue-600 scale-110' :
                            'bg-slate-100 border-slate-200 text-slate-400'
                        }`}>
                            {isCompleted ? <CheckCircleIcon className="w-5 h-5" /> : idx + 1}
                        </div>
                        <span className={`text-xs font-bold mt-2 ${
                            isCurrent ? 'text-blue-900' : 'text-slate-400'
                        }`}>
                            {phase}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

function ActionCenter() {
    const { state, completeTask, advancePhase } = useWorkflow();
    const activeTasks = state.tasks.filter(t => t.phase === state.currentPhase && t.status === 'PENDING');

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="font-bold text-lg text-slate-800">Unified Action Feed</h2>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {state.currentPhase} PHASE
                </span>
            </div>

            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {activeTasks.length === 0 ? (
                    <div className="text-center py-10">
                        <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                             <CheckCircleIcon className="w-8 h-8 text-emerald-500" />
                        </div>
                        <h3 className="text-slate-900 font-bold">All caught up!</h3>
                        <p className="text-slate-500 text-sm mb-6">Phase {state.currentPhase} requirements met.</p>
                        <button 
                            onClick={advancePhase}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg transition-all"
                        >
                            Proceed to Next Phase →
                        </button>
                    </div>
                ) : (
                    activeTasks.map(task => (
                        <div key={task.id} className={`group relative p-5 rounded-xl border-l-4 transition-all hover:shadow-md ${
                            task.priority === 'HIGH' ? 'bg-red-50 border-red-500' :
                            task.priority === 'MEDIUM' ? 'bg-amber-50 border-amber-500' :
                            'bg-slate-50 border-blue-400'
                        }`}>
                             <div className="flex justify-between items-start">
                                 <div>
                                     <div className="flex items-center gap-2 mb-1">
                                         <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                                             task.priority === 'HIGH' ? 'bg-red-100 text-red-700' :
                                             task.priority === 'MEDIUM' ? 'bg-amber-100 text-amber-700' :
                                             'bg-blue-100 text-blue-700'
                                         }`}>
                                             {task.priority} Priority
                                         </span>
                                         <span className="text-[10px] font-semibold text-slate-400 uppercase">
                                             {task.type}
                                         </span>
                                     </div>
                                     <h3 className="font-bold text-slate-900">{task.title}</h3>
                                     <p className="text-sm text-slate-600 mt-1">{task.description}</p>
                                 </div>
                                 
                                 {task.actionUrl && (
                                     <Link href={task.actionUrl} className="text-blue-600 hover:underline text-sm font-semibold">
                                         Open Tool →
                                     </Link>
                                 )}
                             </div>
                             
                             <div className="mt-4 flex justify-end">
                                 <button 
                                    onClick={() => completeTask(task.id)}
                                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-800 hover:text-white transition-colors shadow-sm"
                                 >
                                    Mark Done
                                 </button>
                             </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

function CommunityPulse() {
    // Mock Notifications
    const notifications = [
        { id: 1, source: 'IoT Sensors', msg: 'Water leak detected in B-block basement.', time: '2m ago', urgent: true },
        { id: 2, source: 'Construction', msg: 'Crane arrival scheduled for Monday 8:00.', time: '1h ago', urgent: false },
        { id: 3, source: 'Sauna Booking', msg: 'Slot 18:00-19:00 cancelled by Apt 4B.', time: '3h ago', urgent: false },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                 <BellIcon className="w-5 h-5 text-slate-500" />
                 <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide">Community Pulse</h3>
             </div>
             <div className="divide-y divide-slate-100">
                 {notifications.map(n => (
                     <div key={n.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                         <div className="flex justify-between items-start">
                             <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                 n.urgent ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'
                             }`}>
                                 {n.source}
                             </span>
                             <span className="text-[10px] text-slate-400">{n.time}</span>
                         </div>
                         <p className="text-sm text-slate-800 mt-2 font-medium leading-snug">{n.msg}</p>
                     </div>
                 ))}
             </div>
             <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
                 <button className="text-xs font-bold text-blue-600 hover:text-blue-800">View All Alerts</button>
             </div>
        </div>
    );
}

// --- MAIN DASHBOARD LAYOUT ---

function DashboardContent() {
    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-8 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Board Cockpit</h1>
                    <p className="text-slate-500 mt-1">Unified Workflow Orchestrator for Asunto Oy Itä-Helsingin Merihiekka</p>
                </header>

                {/* 1. Global Health Bar */}
                <HealthStatusBar />

                {/* 2. Workflow Visualizer */}
                <PhaseTracker />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                    {/* 3. Action Feed (Main) */}
                    <div className="lg:col-span-2 h-full">
                        <ActionCenter />
                    </div>

                    {/* 4. Sidebar Widgets */}
                    <div className="space-y-8 h-full flex flex-col">
                        <CommunityPulse />
                        
                        {/* Progressive Disclosure: Only show Bank/Stats if relevant */}
                        <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-6 text-white shadow-lg flex-1">
                             <h3 className="font-bold uppercase tracking-wider opacity-70 text-sm mb-4">Quick Stats</h3>
                             <div className="space-y-6">
                                 <div>
                                     <div className="text-3xl font-bold">4.8 M€</div>
                                     <div className="text-xs opacity-60">Estimated Renovation Cost</div>
                                 </div>
                                 <div>
                                     <div className="text-3xl font-bold text-emerald-400">124k €</div>
                                     <div className="text-xs opacity-60">Proj. Annual Energy Savings</div>
                                 </div>
                             </div>
                             
                             <div className="mt-8 pt-8 border-t border-white/10">
                                 <Link 
                                     href="/admin/finance/loans" 
                                     className="block w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-center font-bold transition-all border border-white/20"
                                 >
                                     Access Finance Hub →
                                 </Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <WorkflowProvider>
            <DashboardContent />
        </WorkflowProvider>
    );
}
