export async function fetchSummaryData() {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error('Failed to fetch summary data');
  }
  return response.json();
}