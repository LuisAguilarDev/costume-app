import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import LastStep from './pages/lastStep';
import Nomatch from './pages/nomatch';
import Result from './pages/result';
import ImageGallery from './pages/history';
import SpookyStory from './pages/spookyStory';

function App() {
  return (
    <div className="relative min-h-full w-full h-full m:w-full lg:w-[1024px]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="last_step" element={<LastStep />} />
          <Route path="result" element={<Result />} />
          <Route path="history" element={<ImageGallery />} />
          <Route path="spooky" element={<SpookyStory />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
