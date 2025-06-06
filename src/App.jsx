
import { Route, Router, Routes } from 'react-router-dom'
import FeedPage from './Pages/FeedPage';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import AuthPage from './Pages/AuthPage';

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Home />}>
            <Route index element={<FeedPage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App
