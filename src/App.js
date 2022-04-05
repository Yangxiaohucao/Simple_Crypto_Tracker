import { useState, useEffect } from "react";
import "./App.css";
import BasicTable from "./basicTable";

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((coins) => setCoins(coins));
  }, []);

  useEffect(() => {
    const newFilteredCoins = coins.splice(0, 30);
    console.log(newFilteredCoins);
    setFilteredCoins(newFilteredCoins);
  }, []);

  return (
    <div className="App">
      <title>Cryptocurrency Prices by Market Cap</title>
      <BasicTable coins={filteredCoins} />
    </div>
  );
}

export default App;
