
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
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      glowColor: "shadow-emerald-500/20",
    },
    {
      title: "Active Users",
      value: "45.2K",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      glowColor: "shadow-blue-500/20",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      trend: "down",
      icon: BarChart,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      glowColor: "shadow-amber-500/20",
    },
    {
      title: "System Health",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      icon: Activity,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      glowColor: "shadow-purple-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card 
            key={metric.title} 
            className={`bg-slate-800/50 border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:${metric.glowColor} group relative overflow-hidden`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.bgColor} ${metric.glowColor} transition-all duration-300 group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className={`flex items-center space-x-1 ${
                  metric.trend === "up" ? "text-emerald-400" : "text-red-400"
                } font-semibold`}>
                  <TrendIcon className="w-4 h-4" />
                  <span className="text-sm">{metric.change}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1 uppercase tracking-wide">{metric.title}</h3>
                <p className="text-3xl font-bold text-white tracking-tight">{metric.value}</p>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-4 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${metric.color.replace('text-', 'from-')} to-transparent rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '60%' }}></div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
