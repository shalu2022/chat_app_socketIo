import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, isAuth, component, exact }) => (
              <Route key={path} exact={exact} path={path} element={component} />
            ))}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
