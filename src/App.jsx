import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [laoding, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchResults = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
      );

      if (data.hits.length === 0) {
        setResults([]);
        setError("No results found");
      } else {
        const resultsWithKarma = await Promise.all(
          data.hits.map(async (item) => {
            const authorName = item.author;
            let submissionCount = "";

            try {
              const authorData = await axios.get(
                `https://hn.algolia.com/api/v1/users/${authorName}`
              );
              submissionCount = authorData.data.karma;
            } catch (err) {
              console.error("Error fetching author data:", err);
            }

            return {
              id: item.objectID,
              title: item.title,
              url: item.url,
              author: item.author,
              submissionCount,
            };
          })
        );

        setResults(resultsWithKarma);
        
      }
    } catch (err) {
      setError("Error fetching data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (laoding) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="flex gap-2">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search user..."
          className="bg-gray-300 py-2 px-3 rounded-b-lg"
        />
        <button
          onClick={() => fetchResults(query)}
          className="bg-amber-400 py-2 px-3 rounded-b-lg"
        >
          Search
        </button>
      </div>
      <br />
      <div>
        {results.length > 0 && (
          <table className="table-auto w-full border-collapse border border-gray-400 shadow-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Title
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Author
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Submission Count
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2">
                    <a
                      href={item.url}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      {item.title || "No Title"}
                    </a>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.author}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.submissionCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
