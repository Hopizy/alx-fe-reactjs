// src/services/githubService.js
import axios from 'axios';

/**
 * Search GitHub users with optional filters.
 * @param {string} query - The base search query (e.g., username).
 * @param {string} location - (Optional) Filter users by location.
 * @param {number} minRepos - (Optional) Filter users by minimum public repositories.
 * @returns {Promise} Axios response
 */
export const searchGitHubUsers = async (query, location = '', minRepos = 0) => {
  let searchQuery = query;

  if (location) {
    searchQuery += `+location:${location}`;
  }

  if (minRepos > 0) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};
