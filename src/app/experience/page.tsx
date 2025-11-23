'use client';

import { useState } from 'react';

const DATA = [
  {
    "id": "kd8k82nun",
    "title": "+120EXP – Developer for media buying team",
    "date": "2023 - currently",
    "location": "Research Facility, Planet X-17",
    "description": "To empower media buying through seamless solutions. I build tools and chatbots that simplify workflows, automate and make every step smarter, faster, and more intuitive.",
    "status": "Active"
  },
  {
    "id": "ypb54aahn",
    "title": "+20 SKILLS – html5/css3/JavaScript Fundamentals",
    "date": "2022",
    "location": "SoftServe",
    "description": "",
    "status": "completed"
  },
  {
    "id": "w6mgx5s2k",
    "title": "+100EXP – Marketing Odyssey",
    "date": "2017-2022",
    "location": "Newtrex",
    "description": "",
    "status": "completed"
  },
  {
    "id": "gzfjmpfe9",
    "title": "+10 SKILLS – Computerised control systems and automatics (Master)",
    "date": "2015-2017",
    "location": "KNU",
    "description": "",
    "status": "completed"
  },
  {
    "id": "cc2nh2krn",
    "title": "BASIC SKILLS ACHIEVED – System Engineering (Bachelor)",
    "date": "2011-2015",
    "location": "KNU",
    "description": "",
    "status": "completed"
  }
];


export default function Experience() {
  const [activeItem, setActiveItem] = useState<string | null>(DATA[0]?.id || null);

  const handleClick = (id: string) => {
    setActiveItem(prevIndex => (prevIndex === id ? null : id));
  };

  return (
    <section className="experience">
        <div className="section-title">
          <h1>data log dump initialized.</h1>
        </div>
        <div className="main-container-wrapper">
          <div className="experience-content">
            <ul className="experience-list">
              { DATA.length > 0 ? DATA.map( (item) => (
                <li className={ activeItem === item.id ? "active" : ""} key={item.id} onClick={() => handleClick(item.id)}>
                  <div className="experience-list-title">
                    <p>LOG ENTRY: {[item.title]}</p>
                    <span>DATE: {item.date}</span>
                  </div>
                  <div className="experience-list-content content">
                    <p>
                      <span className="content-title">PROJECT STATUS:</span>
                      {item.status}
                    </p>
                    <p>
                      <span className="content-title">LOCATION:</span>
                      {item.location}
                    </p>
                    { item?.description && (
                    <p>
                      <span className="content-title">Descriprion:</span>
                      {item.description}
                    </p>
                    )}
                  </div>
                </li>
              )): (
                <li><p>no any data yet</p></li>
              )}
            </ul>
          </div>
        </div>
    </section>
    );
}
