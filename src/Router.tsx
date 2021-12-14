// import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinID" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
      {/* 
      
      이전 버전
      <Switch>
        <Route path="/:coinID">
          <Coin/>
        </Route>        
        <Route path="/" >
          <Coins />
        </Route>
      </Switch> 
      
      */}
    </BrowserRouter>
  );
}

export default Router;
