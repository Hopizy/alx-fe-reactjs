// src/App.jsx

import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;

