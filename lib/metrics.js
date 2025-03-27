export function calculateMetrics(dailyData) {
  const totalSpend = Math.round(dailyData.reduce((sum, row) => sum + (parseFloat(row['Spents Total']) || 0), 0));
  const totalGMV = Math.round(dailyData.reduce((sum, row) => sum + (parseFloat(row.GMV) || 0), 0));
  const totalUnits = Math.round(dailyData.reduce((sum, row) => sum + (parseInt(row.Units) || 0), 0));
  const asp = totalUnits ? Math.round(totalGMV / totalUnits) : 0;
  const cac = totalUnits ? Math.round(totalSpend / totalUnits) : 0;

  return [
    { label: 'Units Sold', value: totalUnits },
    { label: 'ASP (₹)', value: asp },
    { label: 'CAC (₹)', value: cac },
    { label: 'GMV (₹)', value: totalGMV },
    { label: 'Total Spend (₹)', value: totalSpend },
  ];
}
