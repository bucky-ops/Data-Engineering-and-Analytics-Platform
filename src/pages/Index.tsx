
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="container mx-auto px-6 py-8">
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
