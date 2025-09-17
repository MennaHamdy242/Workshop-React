import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to /blog */}
        <Route path="/" element={<Navigate to="/blog" replace />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;