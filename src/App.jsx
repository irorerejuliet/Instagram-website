import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import FeedPage from './Pages/FeedPage';

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<FeedPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App
