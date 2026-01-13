'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Wallet, 
  TrendingUp, 
  ClipboardList, 
  Home, 
  Wrench, 
  Settings,
  LogOut
} from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Etusivu (Digital Twin)', href: '/admin/dashboard', icon: Home },
  { label: 'Työmaapäiväkirja', href: '/admin/construction', icon: ClipboardList },
  { label: 'Varaukset', href: '/admin/bookings', icon: LayoutDashboard }, // Existing admin
  { label: 'Talkoot & Tehtävät', href: '/admin/tasks', icon: Wrench },
  { label: 'PTS & Historia', href: '/admin/scenarios', icon: TrendingUp },
  { label: 'Kuntoarvio', href: '/admin/investment', icon: ClipboardList },
  { label: 'Talous', href: '/admin/finance/loans', icon: Wallet },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <div>
              <h1 className="font-bold text-white leading-none">Taloyhtiö OS</h1>
              <p className="text-xs text-slate-500 mt-1">As Oy Esimerkki</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-slate-800">
            <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    P
                </div>
                <div>
                    <div className="text-xs font-bold text-white">Pekka Puheenjohtaja</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500">Hallitus</div>
                </div>
            </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-red-900/20 hover:text-red-400 text-slate-400 w-full transition-colors">
                <LogOut size={18} />
                Sign Out
            </button>
            <div className="mt-4 text-center text-[10px] text-slate-600">
                v0.4.0 Beta
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
}
