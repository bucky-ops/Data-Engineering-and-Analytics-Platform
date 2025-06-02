
import { Server, Cpu, HardDrive, Wifi, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SystemStatus = () => {
  const systemMetrics = [
    { name: "CPU Usage", value: 68, icon: Cpu, color: "text-blue-400" },
    { name: "Memory", value: 74, icon: Server, color: "text-green-400" },
    { name: "Storage", value: 45, icon: HardDrive, color: "text-purple-400" },
    { name: "Network", value: 92, icon: Wifi, color: "text-yellow-400" },
  ];

  const securityStatus = [
    { name: "SSL Certificates", status: "Valid", color: "text-green-400" },
    { name: "Firewall", status: "Active", color: "text-green-400" },
    { name: "Data Encryption", status: "Enabled", color: "text-green-400" },
    { name: "Access Logs", status: "Monitored", color: "text-yellow-400" },
  ];

  return (
    <Card className="bg-white/10 border-white/20 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-white text-sm">System Health</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {systemMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-4 h-4 ${metric.color}`} />
                    <span className="text-sm text-purple-200">{metric.name}</span>
                  </div>
                  <span className="text-sm text-white">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white">Security Status</span>
          </div>
          <div className="space-y-2">
            {securityStatus.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <span className="text-xs text-purple-200">{item.name}</span>
                <span className={`text-xs ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
