import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1 className="text-xl font-bold">Login Page</h1>
      <p>You must log in to access protected routes.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default Login;
