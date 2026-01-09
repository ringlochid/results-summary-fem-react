import { useState, useEffect } from 'react';
import { fetchSummaryData } from './api/summaryApi';
import { CATEGORY_COLORS } from './constants/colors';

function ContinueButton() {
  return (
    <button className="continue-btn">
      <span>Continue</span>
    </button>
  )
}

function SummaryListItem({ category, score, icon }) {
  const colors = CATEGORY_COLORS[category] || {};
  
  return (
    <div 
      className="summary-list-item"
      style={{ backgroundColor: colors.background }}
    >
      <div className="summary-list-item-label">
        <img src={icon} alt={category} />
        <span style={{ color: colors.text }}>{category}</span>
      </div>
      <div className="summary-list-item-score">
        <span className="score">{score}</span>
        <span className="total"> / 100</span>
      </div>
    </div>
  )
}

function SummaryList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSummaryData()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="summary-list">Loading...</div>;
  if (error) return <div className="summary-list">Error: {error}</div>;

  return (
    <div className="summary-list">
      {items.map(item => (
        <SummaryListItem 
          key={item.category} 
          category={item.category}
          score={item.score}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

function SummaryContainer() {
  return (
    <aside className="summary-container">
      <h2>Summary</h2>
      <SummaryList />
      <ContinueButton />
    </aside>
  )
}

function ResultDescription({percent}) {
  return (
    <div className="result-description">
      <h1>Great</h1>
      <p>You scored higher than {percent}% of the people who have taken these tests.</p>
    </div>
  )
}

function ScoreContainer({score}) {
  return (
    <div className="score-container">
      <h1>{score? score:76}</h1>
      <span>of 100</span>
    </div>
  )
}

function ResultContent({score, percent}) {
  return (
    <div className="result-content">
      <h1>Your Result</h1>
      <ScoreContainer score={score}/>
      <ResultDescription percent={percent}/>
    </div>
  )
}

function ResultContainer({score, percent}) {
  return (
    <div className="result-container">
      <div className="result-content-card">
        <ResultContent score={score} percent={percent}/>
      </div>
      <SummaryContainer />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <ResultContainer score={76} percent={65}/>
    </div>
  )
}

export default App
