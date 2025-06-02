
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { DataSourcesPanel } from "@/components/dashboard/DataSourcesPanel";
import { AnalyticsWorkbench } from "@/components/dashboard/AnalyticsWorkbench";
import { PredictiveInsights } from "@/components/dashboard/PredictiveInsights";
import { SystemStatus } from "@/components/dashboard/SystemStatus";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Futuristic background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-emerald-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="container mx-auto px-6 py-8 animate-fade-in">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <MetricsOverview />
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                  <AnalyticsWorkbench />
                </div>
                <div className="space-y-6">
                  <PredictiveInsights />
                  <SystemStatus />
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "sources" && <DataSourcesPanel />}
          
          {activeTab === "analytics" && (
            <div className="space-y-8">
              <AnalyticsWorkbench expanded />
              <PredictiveInsights />
            </div>
          )}
          
          {activeTab === "insights" && <PredictiveInsights expanded />}
        </main>
      </div>
    </div>
  );
};

export default Index;
