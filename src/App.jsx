import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import { injectSpeedInsights } from '@vercel/speed-insights';
import "./App.css";
import RefreshToken from "./components/RefreshToken";

const App = () => {
  injectSpeedInsights();
  return (
    <BrowserRouter>
      <RefreshToken />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;