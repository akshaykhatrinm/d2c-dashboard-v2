// lib/metrics.js
// Calculates dashboard metrics with comments for easy updates
export function calculateMetrics(dailyData) {
  // Total Spend: Sum of Spents Total (in Rs.)
  const totalSpend = Math.round(dailyData.reduce((sum, row) => sum + (parseFloat(row['Spents Total']) || 0), 0));

  // Total GMV: Sum of GMV (in Rs.), empty treated as 0
  const totalGMV = Math.round(dailyData.reduce((sum, row) => sum + (parseFloat(row.GMV) || 0), 0));

  // Total Units: Sum of Units sold
  const totalUnits = Math.round(dailyData.reduce((sum, row) => sum + (parseInt(row.Units) || 0), 0));

  // ASP (Average Selling Price): GMV / Units, in Rs.
  const asp = totalUnits ? Math.round(totalGMV / totalUnits) : 0;

  // CAC (Customer Acquisition Cost): Spend / Units, in Rs.
  const cac = totalUnits ? Math.round(totalSpend / totalUnits) : 0;

  return [
    { label: 'Units Sold', value: totalUnits },
    { label: 'ASP (₹)', value: asp },
    { label: 'CAC (₹)', value: cac },
    { label: 'GMV (₹)', value: totalGMV },
    { label: 'Total Spend (₹)', value: totalSpend },
  ];
}

// To add new metrics:
// 1. Calculate the metric using dailyData (e.g., const newMetric = ...)
// 2. Add it to the return array: { label: 'New Metric (₹)', value: newMetric }
// 3. Ensure it’s rounded to remove decimals
