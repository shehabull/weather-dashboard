import Header from "./components/Header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  const apikey = f3c46f6ac2f9c5136cab406604a5758e;

  return (
    <>
      <Header />
      <main>
        <WeatherBoard />
      </main>
    </>
  );
}

export default App;
