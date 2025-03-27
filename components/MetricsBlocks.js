import { calculateMetrics } from '../lib/metrics';

export default function MetricsBlocks({ dailyData }) {
  const metrics = calculateMetrics(dailyData);

  return (
    <div className="metrics-grid">
      {metrics.map(metric => (
        <div key={metric.label} className="metric-block">
          <h3 className="metric-label">{metric.label}</h3>
          <p className="metric-value">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
