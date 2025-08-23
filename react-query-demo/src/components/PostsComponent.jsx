import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching, // shows background refetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000,        // Data considered "fresh" for 5s
    cacheTime: 1000 * 60,   // Cache persists for 1 min
    refetchOnWindowFocus: true, // 👈 auto refetch when tab regains focus
    keepPreviousData: true,     // 👈 keep old data while fetching new one
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

      {isFetching && <p className="text-sm text-gray-500">Updating in background…</p>}

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
