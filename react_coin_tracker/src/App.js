import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(0);
  const [money, setMoney] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCost(json[0].quotes.USD.price);
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setCost(event.target.value);
    setMoney(1);
  };

  const inputChange = (event) => setMoney(event.target.value);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
          <option></option>
        </select>
      )}
      <h2>Please enter the amount</h2>
      <div>
        <input
          type="number"
          value={money}
          onChange={inputChange}
          placeholder="dollor"
        />
        $
      </div>
      <h2>You can get {money / cost}</h2>
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
