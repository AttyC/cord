// import logo from './logo.svg';
import './App.css';
import Stories from './components/Stories';

import mexico from './img/mexico.jpg'
import creditCard from './img/card.jpg'
import womanLaptop from './img/woman-laptop.jpg'
import carDashboard from './img/car-insurance.jpg'

function App() {
  const storyData = [
    {
      "url": "https://www.definitely-not-just-techcrunch.com/story-1",
      "thumbnail": mexico,
      "headline": "Mexico’s Kavak drives away with $700M in new funding, doubling its valuation to $8.7B"
    },
    {
      "url": "https://www.definitely-not-just-techcrunch.com/story-2",
      "thumbnail": womanLaptop,
      "headline": "Alpha Medical closes $24M Series B round to expand women’s telehealth — without the video calls"
    },
    {
      "url": "https://www.definitely-not-just-techcrunch.com/story-3",
      "thumbnail": carDashboard,
      "headline": "Just raises $8M in its effort to beat Root at the car insurance game"
    },
    {
      "url": "https://www.definitely-not-just-techcrunch.com/story-4",
      "thumbnail": creditCard,
      "headline": "Bilt Rewards banks $60M growth on a $350M valuation to advance credit card benefits for renters"
    }
  ]


  return (
    <ul className="story-grid">
      {storyData && (
        <Stories stories={storyData} />
      )}
      {!storyData && (
        <h1>Stories are currently unavailable, <br /> please visit us again later, thanks!</h1>
      )}
    </ul>
  );
}

export default App;
