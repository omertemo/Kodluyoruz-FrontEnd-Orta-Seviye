import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { SelectContextProvider } from "./contexts/SelectContext";
import { WeatherContextProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <div className="App">
      <SelectContextProvider>
        <WeatherContextProvider>
          <Header />
          <Main />
          <Footer />
        </WeatherContextProvider>
      </SelectContextProvider>
    </div>
  );
}

export default App;
