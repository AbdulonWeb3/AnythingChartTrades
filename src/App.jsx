function App() {
  return (
    <div className="container">

      <header className="hero">
        <h1>AnythingChartTrades</h1>
        <p>Premium Forex & Crypto Signal Platform</p>
        <button>Join Now</button>
      </header>

      <section className="pricing">
        <h2>Subscription Plans</h2>

        <div className="cards">
          <div className="card">
            <h3>Weekly</h3>
            <p>$10</p>
          </div>

          <div className="card">
            <h3>Monthly</h3>
            <p>$50</p>
          </div>

          <div className="card">
            <h3>Lifetime</h3>
            <p>$500</p>
          </div>
        </div>
      </section>

      <section className="signals">
        <h2>What You Get</h2>
        <ul>
          <li>Forex Signals (EURUSD, GBPUSD, XAUUSD)</li>
          <li>Crypto Signals (BTC, ETH, SOL)</li>
          <li>Entry / Stop Loss / Take Profit</li>
          <li>Real-time updates</li>
        </ul>
      </section>

      <footer>
        <p>© 2026 AnythingChartTrades</p>
      </footer>

    </div>
  );
}

export default App;