import './App.css';
import AllMetupsPage from './pages/AllMetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
        </Routes>
      </Layout>
  );
}

export default App;
