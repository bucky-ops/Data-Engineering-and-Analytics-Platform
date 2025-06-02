
import { Bell, Search, Settings, User, BarChart3, Database, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardHeader = ({ activeTab, setActiveTab }: DashboardHeaderProps) => {
  const tabs = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "sources", label: "Data Sources", icon: Database },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "insights", label: "Insights", icon: TrendingUp },
  ];

  return (
    <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl relative">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-emerald-600/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:shadow-blue-500/40 group-hover:scale-105">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">InsightMosaic</h1>
              <p className="text-sm text-slate-400 font-medium">Executive Command Center</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 bg-slate-800/50 rounded-xl p-1 backdrop-blur-sm border border-slate-700/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 relative group ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-20 animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              <Input
                placeholder="Search insights..."
                className="pl-10 w-64 bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-400 focus:border-blue-500 transition-all duration-300 hover:bg-slate-800/70"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs animate-pulse">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
              <Settings className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
