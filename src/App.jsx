import { useState, useEffect } from 'react';

const TICKERS = [
  { pair: 'EURUSD', price: '1.0847', change: '+0.23%', up: true },
  { pair: 'GBPUSD', price: '1.2853', change: '+0.41%', up: true },
  { pair: 'XAUUSD', price: '2,347.80', change: '-0.18%', up: false },
  { pair: 'BTCUSDT', price: '108,240', change: '+1.47%', up: true },
  { pair: 'ETHUSDT', price: '3,891', change: '+2.31%', up: true },
  { pair: 'USDJPY', price: '157.34', change: '-0.09%', up: false },
  { pair: 'SOLUSDT', price: '187.42', change: '+3.81%', up: true },
  { pair: 'USDCHF', price: '0.9024', change: '+0.12%', up: true },
  { pair: 'AUDUSD', price: '0.6578', change: '-0.34%', up: false },
  { pair: 'BNBUSDT', price: '612.70', change: '+0.87%', up: true },
];

function TickerBar() {
  return (
    <div className="ticker-bar">
      <div className="ticker-label">LIVE</div>
      <div className="ticker-track">
        <div className="ticker-content">
          {[...TICKERS, ...TICKERS].map((t, i) => (
            <span key={i} className={`ticker-item ${t.up ? 'up' : 'down'}`}>
              <span className="ticker-pair">{t.pair}</span>
              <span className="ticker-price">{t.price}</span>
              <span className="ticker-change">{t.change}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-logo">ACT</div>
      <div className="nav-links">
        <a href="#features">Signals</a>
        <a href="#pricing">Pricing</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">Premium Signal Service</div>
          <h1 className="hero-title">
            <span className="hero-title-line1">Anything</span>
            <span className="hero-title-line2">Chart</span>
            <span className="hero-title-line3">Trades</span>
          </h1>
        </div>
        <div className="hero-right">
          <p className="hero-sub">
            Professional Forex &amp; Crypto signals with precision entry, stop loss, and take profit levels — delivered when the market moves.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">94.7%</span>
              <span className="stat-label">Signal Accuracy</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">3,200+</span>
              <span className="stat-label">Active Members</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">Daily</span>
              <span className="stat-label">New Signals</span>
            </div>
          </div>
          <a href="#pricing" className="hero-cta">Join Now</a>
        </div>
      </div>
    </header>
  );
}

const FEATURES = [
  {
    title: 'Forex Signals',
    desc: 'Professional trade setups across major and minor pairs. Every call includes full risk management.',
    tags: ['EURUSD', 'GBPUSD', 'XAUUSD', 'USDJPY'],
    accent: false,
  },
  {
    title: 'Crypto Signals',
    desc: 'Spot and futures opportunities across Bitcoin, Ethereum, and high-potential altcoins.',
    tags: ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'BNBUSDT'],
    accent: true,
  },
  {
    title: 'Real-Time Delivery',
    desc: 'Signals posted immediately when conditions align. Never miss an entry window.',
    tags: ['Instant Alerts', 'Risk Management', 'Exit Levels', 'Market Analysis'],
    accent: false,
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-label">WHY CHOOSE US</span>
        <h2 className="section-title">Precision. Speed. Profit.</h2>
      </div>
      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <div key={i} className={`feature-card ${f.accent ? 'feature-card-accent' : ''}`}>
            <div className="feature-number">0{i + 1}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <div className="feature-tags">
              {f.tags.map((tag, j) => (
                <span key={j} className="feature-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: 'Weekly',
    price: '10',
    period: '/wk',
    features: ['All Forex Calls', 'All Crypto Calls', 'Market Updates', 'Telegram Access'],
    featured: false,
  },
  {
    name: 'Monthly',
    price: '50',
    period: '/mo',
    features: ['All Forex Calls', 'All Crypto Calls', 'Priority Access', 'Direct Support', 'Detailed Analysis'],
    featured: true,
  },
  {
    name: 'Lifetime',
    price: '500',
    period: ' once',
    features: ['Lifetime Access', 'All Future Updates', 'VIP Access', 'Personal Support', 'Exclusive Calls'],
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-label">SUBSCRIPTION PLANS</span>
        <h2 className="section-title">Choose Your Access Level</h2>
      </div>
      <div className="pricing-grid">
        {PLANS.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.featured ? 'pricing-featured' : ''}`}>
            {plan.featured && <div className="pricing-badge">Most Popular</div>}
            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-price">
              <span className="price-currency">$</span>
              <span className="price-amount">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((feat, j) => (
                <li key={j}>
                  <span className="check-mark">+</span>
                  {feat}
                </li>
              ))}
            </ul>
            <a href="#payments" className="pricing-cta">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
}

const SIGNALS = [
  {
    type: 'FOREX',
    pair: 'GBPUSD',
    direction: 'BUY',
    entry: '1.2850',
    sl: '1.2800',
    tp: '1.2950',
    rr: '2:1',
    active: true,
  },
  {
    type: 'CRYPTO',
    pair: 'BTCUSDT',
    direction: 'LONG',
    entry: '108,000',
    sl: '106,500',
    tp: '112,000',
    rr: '2.7:1',
    active: true,
  },
  {
    type: 'FOREX',
    pair: 'XAUUSD',
    direction: 'SELL',
    entry: '2,341.50',
    sl: '2,355.00',
    tp: '2,310.00',
    rr: '2.3:1',
    active: false,
  },
];

function SignalCard({ signal }) {
  const isLong = signal.direction === 'BUY' || signal.direction === 'LONG';
  return (
    <div className={`signal-card ${isLong ? 'signal-long' : 'signal-short'}`}>
      <div className="signal-header">
        <div className="signal-meta">
          <span className="signal-type">{signal.type}</span>
          <span className="signal-pair">{signal.pair}</span>
        </div>
        <div className="signal-right-col">
          <span className={`signal-dir ${isLong ? 'dir-long' : 'dir-short'}`}>{signal.direction}</span>
          <span className={`signal-status ${signal.active ? 'status-active' : 'status-closed'}`}>
            {signal.active && <span className="live-dot" />}
            {signal.active ? 'ACTIVE' : 'CLOSED'}
          </span>
        </div>
      </div>
      <div className="signal-data">
        <div className="signal-field">
          <span className="field-label">ENTRY</span>
          <span className="field-value">{signal.entry}</span>
        </div>
        <div className="signal-field">
          <span className="field-label">STOP LOSS</span>
          <span className="field-value field-sl">{signal.sl}</span>
        </div>
        <div className="signal-field">
          <span className="field-label">TAKE PROFIT</span>
          <span className="field-value field-tp">{signal.tp}</span>
        </div>
        <div className="signal-field">
          <span className="field-label">R:R RATIO</span>
          <span className="field-value">{signal.rr}</span>
        </div>
      </div>
    </div>
  );
}

function SampleSignals() {
  return (
    <section className="signals" id="signals">
      <div className="section-header">
        <span className="section-label">SAMPLE SIGNALS</span>
        <h2 className="section-title">What Members Receive</h2>
      </div>
      <div className="signals-list">
        {SIGNALS.map((s, i) => <SignalCard key={i} signal={s} />)}
      </div>
    </section>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError('Enter a valid email address.'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1400);
  };

  return (
    <section className="login-section" id="login">
      <div className="section-header">
        <span className="section-label">MEMBER ACCESS</span>
        <h2 className="section-title">Member Portal</h2>
      </div>
      <div className="login-container">
        <div className="login-box">
          {success ? (
            <div className="login-success">
              <div className="success-icon">+</div>
              <p>Access granted. Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className={`form-input ${error.includes('email') || (error && !email) ? 'input-error' : ''}`}
                  type="email"
                  placeholder="trader@example.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(''); }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  className={`form-input ${error && !password ? 'input-error' : ''}`}
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                />
              </div>
              {error && <div className="form-error">{error}</div>}
              <button className={`form-submit ${loading ? 'loading' : ''}`} type="submit" disabled={loading}>
                {loading ? 'Verifying...' : 'Access Portal'}
              </button>
              <div className="form-footer">
                Not a member? <a href="#pricing">View Plans</a>
              </div>
            </form>
          )}
        </div>
        <div className="login-aside">
          <div className="login-stat">
            <span>24/7</span>
            <p>Signal Coverage</p>
          </div>
          <div className="login-divider" />
          <div className="login-stat">
            <span>3,200+</span>
            <p>Active Members</p>
          </div>
          <div className="login-divider" />
          <div className="login-stat">
            <span>Daily</span>
            <p>New Signals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PAYMENTS = [
  { name: 'USDT (BEP20)', desc: 'Crypto Payment Accepted', tag: 'MANUAL' },
  { name: 'Paystack', desc: 'Automatic Subscription', tag: 'AUTO' },
  { name: 'Flutterwave', desc: 'Automatic Subscription', tag: 'AUTO' },
  { name: 'Bank Transfer', desc: 'Manual Verification', tag: 'MANUAL' },
];

function Payments() {
  return (
    <section className="payments" id="payments">
      <div className="section-header">
        <span className="section-label">PAYMENT METHODS</span>
        <h2 className="section-title">Flexible Payment Options</h2>
      </div>
      <div className="payments-grid">
        {PAYMENTS.map((p, i) => (
          <div key={i} className="payment-card">
            <div className="payment-tag">{p.tag}</div>
            <h3 className="payment-name">{p.name}</h3>
            <p className="payment-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">ACT</div>
      <p className="footer-copy">2026 AnythingChartTrades. All Rights Reserved.</p>
      <p className="footer-disclaimer">
        Trading signals are for informational purposes only. Past performance does not guarantee future results. All trading involves risk.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <TickerBar />
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <SampleSignals />
      <Login />
      <Payments />
      <Footer />
    </div>
  );
}
