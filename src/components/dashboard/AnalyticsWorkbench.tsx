
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalyticsWorkbenchProps {
  expanded?: boolean;
}

export const AnalyticsWorkbench = ({ expanded = false }: AnalyticsWorkbenchProps) => {
  const revenueData = [
    { month: "Jan", revenue: 2100000, users: 32000, conversion: 3.2 },
    { month: "Feb", revenue: 2300000, users: 35000, conversion: 3.4 },
    { month: "Mar", revenue: 2200000, users: 33000, conversion: 3.1 },
    { month: "Apr", revenue: 2500000, users: 38000, conversion: 3.6 },
    { month: "May", revenue: 2700000, users: 42000, conversion: 3.8 },
    { month: "Jun", revenue: 2400000, users: 45200, conversion: 3.24 },
  ];

  const performanceData = [
    { time: "00:00", cpu: 45, memory: 62, network: 78 },
    { time: "04:00", cpu: 52, memory: 58, network: 82 },
    { time: "08:00", cpu: 68, memory: 75, network: 65 },
    { time: "12:00", cpu: 73, memory: 82, network: 58 },
    { time: "16:00", cpu: 65, memory: 78, network: 72 },
    { time: "20:00", cpu: 58, memory: 70, network: 68 },
  ];

  return (
    <Card className={`bg-white/10 border-white/20 backdrop-blur-xl ${expanded ? "col-span-full" : ""}`}>
      <CardHeader>
        <CardTitle className="text-white text-xl">Real-Time Analytics Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="revenue" className="data-[state=active]:bg-white/20 data-[state=active]:text-white">Revenue Trends</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-white/20 data-[state=active]:text-white">System Performance</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-white/20 data-[state=active]:text-white">User Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#E9D5FF" />
                  <YAxis stroke="#E9D5FF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fillOpacity={1} fill="url(#revenueGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="#E9D5FF" />
                  <YAxis stroke="#E9D5FF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Line type="monotone" dataKey="cpu" stroke="#EF4444" strokeWidth={2} name="CPU %" />
                  <Line type="monotone" dataKey="memory" stroke="#10B981" strokeWidth={2} name="Memory %" />
                  <Line type="monotone" dataKey="network" stroke="#3B82F6" strokeWidth={2} name="Network %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#E9D5FF" />
                  <YAxis stroke="#E9D5FF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Bar dataKey="users" fill="#06B6D4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
