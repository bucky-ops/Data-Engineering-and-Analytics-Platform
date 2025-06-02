
import { TrendingUp, Brain, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PredictiveInsightsProps {
  expanded?: boolean;
}

export const PredictiveInsights = ({ expanded = false }: PredictiveInsightsProps) => {
  const insights = [
    {
      title: "Revenue Forecast",
      prediction: "+18% next quarter",
      confidence: 89,
      description: "Based on current trends and seasonal patterns",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Churn Risk",
      prediction: "12% at risk",
      confidence: 76,
      description: "Customer segments requiring immediate attention",
      icon: Target,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      title: "Market Opportunity",
      prediction: "New segment identified",
      confidence: 82,
      description: "Emerging market with 45% growth potential",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ];

  const anomalies = [
    { metric: "API Response Time", change: "+245%", severity: "high" },
    { metric: "User Engagement", change: "-15%", severity: "medium" },
    { metric: "Conversion Rate", change: "+8%", severity: "low" },
  ];

  return (
    <Card className={`bg-white/10 border-white/20 backdrop-blur-xl ${expanded ? "col-span-full" : ""}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Brain className="w-5 h-5" />
          <span>AI-Powered Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {insights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.title} className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                    <Icon className={`w-4 h-4 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-white">{insight.title}</h4>
                      <span className="text-xs text-purple-200">{insight.confidence}% confidence</span>
                    </div>
                    <p className="text-lg font-semibold text-white mb-1">{insight.prediction}</p>
                    <p className="text-xs text-purple-200">{insight.description}</p>
                    <Progress value={insight.confidence} className="mt-3 h-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {expanded && (
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-white font-medium mb-4">Real-Time Anomalies</h4>
            <div className="space-y-3">
              {anomalies.map((anomaly) => (
                <div key={anomaly.metric} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-purple-200">{anomaly.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${
                      anomaly.severity === "high" ? "text-red-400" :
                      anomaly.severity === "medium" ? "text-yellow-400" : "text-green-400"
                    }`}>
                      {anomaly.change}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${
                      anomaly.severity === "high" ? "bg-red-400" :
                      anomaly.severity === "medium" ? "bg-yellow-400" : "bg-green-400"
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
