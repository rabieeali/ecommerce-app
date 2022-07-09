import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartProvider from "./context/CartProvider";
import NavigationBar from './components/NavigationBar';
console.clear();
const App = () => {
  return (
    <Router>
      <CartProvider>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
