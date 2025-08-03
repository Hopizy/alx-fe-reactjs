import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(response.data.items);
      if (response.data.items.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setError('');
      }
    } catch (err) {
      setError('Failed to fetch data');
      setUsers([]);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        value={query}
        placeholder="Enter GitHub username"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width={40} />
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
