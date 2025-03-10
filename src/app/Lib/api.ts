
    export const fetchHealthNews = async () => {
        const apiKey = process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY;
        const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=health&languages=en`;
      
        const res = await fetch(url, { next: { revalidate: 3600 } }); // Cache pendant 1 heure
        if (!res.ok) throw new Error('Failed to fetch health news');
      
        return res.json();
      };
  