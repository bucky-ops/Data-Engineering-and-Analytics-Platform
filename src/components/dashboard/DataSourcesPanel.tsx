
import { Database, Cloud, Wifi, CheckCircle, AlertTriangle, XCircle, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DataSourcesPanel = () => {
  const dataSources = [
    {
      name: "PostgreSQL Primary",
      type: "Database",
      status: "connected",
      lastSync: "2 minutes ago",
      records: "2.4M",
      icon: Database,
      health: 98,
    },
    {
      name: "Salesforce CRM",
      type: "Cloud API",
      status: "connected",
      lastSync: "5 minutes ago",
      records: "156K",
      icon: Cloud,
      health: 95,
    },
    {
      name: "Kafka Stream",
      type: "Real-time",
      status: "connected",
      lastSync: "Live",
      records: "∞",
      icon: Wifi,
      health: 99,
    },
    {
      name: "MySQL Analytics",
      type: "Database",
      status: "warning",
      lastSync: "1 hour ago",
      records: "890K",
      icon: Database,
      health: 75,
    },
    {
      name: "AWS S3 Bucket",
      type: "File Storage",
      status: "error",
      lastSync: "3 hours ago",
      records: "45GB",
      icon: Cloud,
      health: 45,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      connected: "bg-green-400/20 text-green-400",
      warning: "bg-yellow-400/20 text-yellow-400",
      error: "bg-red-400/20 text-red-400",
    };
    return variants[status as keyof typeof variants] || "bg-gray-400/20 text-gray-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Data Sources</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Source
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {dataSources.map((source) => {
          const Icon = source.icon;
          return (
            <Card key={source.name} className="bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-sm">{source.name}</CardTitle>
                      <p className="text-purple-200 text-xs">{source.type}</p>
                    </div>
                  </div>
                  {getStatusIcon(source.status)}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getStatusBadge(source.status)}>
                    {source.status.charAt(0).toUpperCase() + source.status.slice(1)}
                  </Badge>
                  <span className="text-xs text-purple-200">Health: {source.health}%</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-200">Last Sync:</span>
                    <span className="text-white">{source.lastSync}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-200">Records:</span>
                    <span className="text-white">{source.records}</span>
                  </div>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      source.health >= 90 ? "bg-green-400" :
                      source.health >= 70 ? "bg-yellow-400" : "bg-red-400"
                    }`}
                    style={{ width: `${source.health}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
