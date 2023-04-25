import { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      const apiURL = 'https://api.api-ninjas.com/v1/quotes';
      try {
        setIsLoading(true);
        const request = await fetch(apiURL, {
          headers: {
            'X-Api-Key': '1+VG6tT5g1zodFX5W5b/5Q==nRqeAENQeNAshuC4',
          },
        });
        const data = await request.json();
        setData(data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuotes();
  }, []);

  if (hasError) return <div>Something went wrong </div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data?.map((quote) => (
        <p key={quote.author}>
          {quote.quote}
          {' '}
          -
          {' '}
          {quote.author}
        </p>
      ))}
    </div>
  );
};

export default Quotes;
