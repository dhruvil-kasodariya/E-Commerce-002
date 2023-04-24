import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.component";
import Home from "./routes/Home/home.component";
import Authentication from "./routes/Authentication/authentication.component";
import "./App.scss";
import Shop from "./routes/Shop/shop.component";
import Checkout from "./routes/Checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
