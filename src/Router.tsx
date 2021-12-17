// import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  modeToggle: () => void;
}

function Router({ modeToggle }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinID/*" element={<Coin />}></Route>
        <Route path="/" element={<Coins modeToggle={modeToggle} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
