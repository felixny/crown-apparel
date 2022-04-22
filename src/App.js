import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Authetication from './routes/authetication/Authetication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='auth' element={<Authetication />} />
      </Route >
    </Routes>
  );
}

export default App;
