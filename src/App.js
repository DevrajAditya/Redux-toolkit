import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import store from './store/store';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
  <Provider store={store}>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/cart" element={<Cart />}>Cart</Route>
      </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
