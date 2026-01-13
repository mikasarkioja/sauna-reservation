'use client';

import React, { useState } from 'react';
import { generateLoanPacket, submitToBankAPI, verifyBoardChair, BankOffer } from '@/lib/bank-bridge';

// Mock Project Data
const PROJECTS = [
  { id: 'proj_1', name: 'Traditional Pipe Renovation', amount: 4000000, type: 'TRADITIONAL' as const },
  { id: 'proj_2', name: 'Green Energy Modernization', amount: 4800000, type: 'ENERGY_EFFICIENCY' as const },
];

export default function LoanDashboard() {
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [offers, setOffers] = useState<BankOffer[]>([]);
  const [auditLog, setAuditLog] = useState<string[]>([]);

  const handleApply = async (project: typeof PROJECTS[0]) => {
    setActiveProject(project);
    setIsVerifying(true);
    // Simulate ID verification step
    setTimeout(async () => {
       const verified = await verifyBoardChair('210281-XXXX');
       if (verified) {
           setIsVerifying(false);
           startApplicationProcess(project);
       }
    }, 1500);
  };

  const startApplicationProcess = async (project: typeof PROJECTS[0]) => {
    setIsApplying(true);
    setAuditLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] Identity Verified. Starting application for ${project.name}.`]);

    try {
        // 1. Generate Packet
        setAuditLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] Generating Credit Bundle (Inv. Grade, Minutes, MML Data)...`]);
        const packet = await generateLoanPacket(project.id, project.amount, project.type);
        
        setAuditLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] Packet Ready. IG Score: ${packet.financialHealth.score}/100.`]);

        // 2. Submit to Banks (Parallel)
        const bankIds = ['OP', 'NORDEA', 'DANSKE'] as const;
        const promises = bankIds.map(bank => submitToBankAPI(packet, bank));
        
        setAuditLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] Transmitting to active bank interfaces...`]);
        
        const results = await Promise.all(promises);
        setOffers(results);
        
        setAuditLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] 3 Offers Received.`]);

    } catch (error) {
        console.error(error);
        setAuditLog(prev => [...prev, `[ERROR] Application failed.`]);
    } finally {
        setIsApplying(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Bank Loan Bridge</h1>
                <p className="text-slate-500">Secure Credit Assessment & Application System</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span>BankAPI Connection: Active</span>
            </div>
        </header>

        {/* 1. PROJECT SELECTION */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-semibold mb-4 text-slate-800">Available Projects for Financing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map(project => (
                    <div key={project.id} className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                        activeProject?.id === project.id ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-slate-300'
                    }`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">{project.name}</h3>
                                <p className="text-slate-500 text-sm">{project.type === 'ENERGY_EFFICIENCY' ? '🌿 Green Loan Eligible' : '🏢 Standard Renovation'}</p>
                            </div>
                            <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-mono">
                                {(project.amount / 1000000).toFixed(1)} M€
                            </span>
                        </div>
                        
                        <div className="mt-6">
                            <button 
                                onClick={() => handleApply(project)}
                                disabled={isApplying || isVerifying || (offers.length > 0 && activeProject?.id === project.id)}
                                className="w-full py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isApplying && activeProject?.id === project.id ? 'Processing...' : 'One-Click Apply'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* 2. LOADING STATE / SECURITY CHECK */}
        {isVerifying && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Verifying Identity</h3>
                    <p className="text-slate-500 text-sm">Waiting for Strong Electronic Identification (BankID)...</p>
                </div>
            </div>
        )}

        {/* 3. OFFERS COMPARISON */}
        {offers.length > 0 && (
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-800">Received Loan Offers</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offers.map((offer) => {
                         const vastikeImpact = offer.monthlyPayment / 4800; // Mock m2
                         const totalCost = offer.monthlyPayment * offer.termYears * 12;
                         const loanAmount = activeProject!.amount;
                         const interestCost = totalCost - loanAmount;

                         return (
                            <div key={offer.bankName} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative group">
                                <div className={`h-2 w-full ${offer.bankName === 'OP' ? 'bg-orange-500' : offer.bankName === 'NORDEA' ? 'bg-blue-600' : 'bg-blue-900'}`}></div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-xl">{offer.bankName}</h3>
                                        {activeProject?.type === 'ENERGY_EFFICIENCY' && (
                                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">-0.20% Green</span>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase">Margin</p>
                                            <p className="text-3xl font-black text-slate-900">{offer.margin.toFixed(2)}%</p>
                                            <p className="text-xs text-slate-400">+ Euribor 12kk (3.5%)</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                                            <div>
                                                <p className="text-xs text-slate-500">Monthly Cost</p>
                                                <p className="font-semibold">{Math.round(offer.monthlyPayment).toLocaleString()} €</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500">Vastike Impact</p>
                                                <p className="font-semibold text-blue-600">+{vastikeImpact.toFixed(2)} €/m²</p>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-xs text-slate-500">Total Interest (20y)</p>
                                            <p className="text-sm font-medium text-slate-700">{(interestCost / 1000000).toFixed(2)} M€</p>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full mt-6 py-2 border-2 border-slate-900 rounded-lg font-bold hover:bg-slate-900 hover:text-white transition-all">
                                        Select Offer
                                    </button>
                                </div>
                            </div>
                         );
                    })}
                </div>
            </section>
        )}

        {/* 4. AUDIT LOG */}
        <section className="bg-slate-900 text-slate-400 p-6 rounded-xl font-mono text-xs overflow-y-auto max-h-48">
            <h3 className="text-slate-200 font-bold mb-2 uppercase tracking-wider">System Audit Trail</h3>
            <div className="space-y-1">
                {auditLog.length === 0 && <p className="opacity-50">Waiting for user action...</p>}
                {auditLog.map((log, i) => (
                    <div key={i} className="border-l-2 border-slate-700 pl-2">{log}</div>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
