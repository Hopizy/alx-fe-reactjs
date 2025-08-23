// src/components/RegistrationForm.jsx
import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; // stop if errors exist
    }

    console.log("Submitting:", { username, email, password });

    // Simulate API call
    setTimeout(() => {
      alert("User registered successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
