import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const data = await searchGitHubUsers(formData);
      setUsers(data.items);
    } catch (err) {
      setError('Looks like we can’t find any users with those criteria.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-200 text-center p-10 text-xl font-bold">
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-6 rounded-lg">
        <h2 className="text-x1 font-semibold text-center">Advanced GitHub User Search</h2>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          name="minRepos"
          type="number"
          placeholder="Minimum Repositories"
          value={formData.minRepos}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border border-gray-200 rounded shadow flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  );
};

export default Search;
