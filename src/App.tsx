import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import LastStep from './pages/lastStep';
import Nomatch from './pages/nomatch';
import Result from './pages/result';

function App() {
  return (
    <div className="relative w-full h-full m:w-full lg:w-[1024px]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="last_step" element={<LastStep />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
