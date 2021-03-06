import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Investors from './components/investors/Investors';
import Explore from './components/explore/Explore';

const button = [
  {
      id: 1,
      title: "Explore",
      background: "#18A7B9",
      border: "none",
      color: "#FFFFFF",
      box_shadow: "0px 64.8148px 46.8519px rgba(24, 167, 185, 0.0759259), 0px 38.5185px 25.4815px rgba(24, 167, 185, 0.0607407), 0px 20px 13px rgba(24, 167, 185, 0.05), 0px 8.14815px 6.51852px rgba(24, 167, 185, 0.0392593), 0px 1.85185px 3.14815px rgba(24, 167, 185, 0.0240741)",
  },
  {
      id: 2,
      title: "Contact Us",
      background: "#FFFFFF",
      border: "1px solid #18A7B9",
      color: "#18A7B9",
      box_shadow: "none",
  }
];

const stats = [
  {
    id: 1,
    stat: "25,356",
    title: "Projects Done",
  },
  {
    id: 2,
    stat: "15,200",
    title: "Buildings Done",
  },
  {
    id: 3,
    stat: "350+",
    title: "Total Employees",
  }
]

const reasons = [
  {
      id: "01",
      description: "And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.",
      background: "#18A7B9"
  },
  {
      id: "02",
      description: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.",
      background: "#FE8432",
  },
  {
      id: "03",
      description: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.",
      background: "#42B918",
  },
];

function App() {
  return (
    <div className="App">
      <Hero items={button} stats={stats}/>
      <Investors />
      <Explore items={button} reasons={reasons}/>
    </div>
  );
}

export default App;
