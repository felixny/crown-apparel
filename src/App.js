import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/signin/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Route >
    </Routes>
  );
}

export default App;
