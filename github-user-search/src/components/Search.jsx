import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

const Search = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  // ✅ This is the missing function
  const fetchUserData = async () => {
    try {
      const data = await searchGitHubUsers(query, location, parseInt(minRepos) || 0);
      onResults(data.items); // pass results to parent (if needed)
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(); // Call it when the form is submitted
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Search username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Location (optional)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Minimum Repos (optional)"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default Search;
