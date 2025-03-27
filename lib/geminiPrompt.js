export function getGeminiPrompt(date, csvData) {
  return `
    You are a Senior Marketing Analyst analyzing daily campaign performance for ${date}.
    Data (CSV format, filtered for campaigns with GMV >= 100,000 Rs.):
    ${csvData}
    Analyze the following columns:
    - Date
    - PowerBI Name (campaign name)
    - Units (units sold and orders)
    - GMV (in Rs.)
    - PP% (prepaid percentage)
    - Spents Total (total spend in Rs.)
    - FB Spent (Facebook spend in Rs.)
    - GA Spent (Google Ads spend in Rs.)
    - OtherSpent (other spend in Rs.)
    Provide a summary of key metrics (e.g., total GMV, total spend, units sold) and 2-3 actionable insights.
    Use Rs. for currency, no decimals in numbers.
    Return your response in plain text.
  `;
}
