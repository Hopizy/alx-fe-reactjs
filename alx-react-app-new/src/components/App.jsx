import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './Counter';
function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={28} bio="Frontend developer and travel enthusiast." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
