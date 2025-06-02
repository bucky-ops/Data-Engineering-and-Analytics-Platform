
import { TrendingUp, TrendingDown, DollarSign, Users, BarChart, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MetricsOverview = () => {
  const metrics = [
    {
      title: "Revenue",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Active Users",
      value: "45.2K",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      trend: "down",
      icon: BarChart,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      icon: Activity,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={metric.title} className="bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className={`flex items-center space-x-1 ${
                  metric.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  <TrendIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-purple-200 mb-1">{metric.title}</h3>
                <p className="text-3xl font-bold text-white">{metric.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
