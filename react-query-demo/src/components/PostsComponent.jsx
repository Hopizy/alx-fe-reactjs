import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // useQuery automatically caches and manages state
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'], // cache key
    queryFn: fetchPosts,
    staleTime: 5000, // 5s before refetch considered
    cacheTime: 1000 * 60 * 5, // 5 minutes in cache
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button 
        onClick={() => refetch()} 
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded shadow-sm">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
