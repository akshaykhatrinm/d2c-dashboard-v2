# Nexxbase Marketing Dashboard

## Overview
This dashboard displays marketing performance data from a Google Sheet, including units sold, GMV, spend, and more, with AI analysis powered by Gemini.

## Environment Variables
Add these in Vercel > Settings > Environment Variables:
- `NEXT_PUBLIC_CSV_URL`: URL to the Google Sheet CSV (e.g., `https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv`).
- `NEXT_PUBLIC_BASE_URL`: Base URL of the deployed app (e.g., `https://nexxbase-dashboard.vercel.app`).
- `GEMINI_API_KEY`: API key for Gemini AI (get from Google AI Studio).

## Updating Metrics
Edit `lib/metrics.js`:
1. Add new metric calculations in `calculateMetrics` (e.g., `const newMetric = ...`).
2. Add to the return array: `{ label: 'New Metric (₹)', value: newMetric }`.
3. Use `Math.round` to remove decimals and ₹ for Rupees.

## Updating Gemini Prompt
Edit `lib/geminiPrompt.js`:
1. Modify the `getGeminiPrompt` function to change the analysis prompt.
2. Ensure it uses Rs. and filters GMV >= 100,000 as needed.

## CSS Customization
Edit `styles/dashboard.css`:
- Adjust fonts, sizes, alignment, etc.
- Current setup uses Roboto 10px, centered layout, and wrapped text.

## Deployment
- Push changes to GitHub.
- Vercel auto-deploys after commits or env var updates.
