export default async function getRandomQuote() {
  try {
    const response = await fetch(
      'http://localhost:3000/quotes/quote-and-info',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return await response.json();
  } catch (e) {
    console.error(e);
  }
  return {};
}
