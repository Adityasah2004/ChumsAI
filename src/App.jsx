import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import { injectSpeedInsights } from '@vercel/speed-insights';
import "./App.css";

const App = () => {
  injectSpeedInsights();
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;