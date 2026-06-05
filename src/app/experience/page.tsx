'use client';

import { useState } from 'react';

const DATA = [
  {
    "id": "kd8k82nun",
    "title": "+120EXP – Developer for marketing team",
    "date": "2023 - 03/2026",
    "location": "Rockit Media",
    "description": "Building tools and web apps for marketing teams as Full-stack developer. Proficient in React, Next.js, TypeScript, Node.js/Express, and MySQL. Experienced with Vite, Redux Toolkit, Tailwind, SCSS, MUI, and PWA development. Built chatbots, automation pipelines, Telegram bots, and custom landing page builders.",
    "status": "completed"
  },
  {
    "id": "ypb54aahn",
    "title": "+20 SKILLS – html5/css3/JavaScript Fundamentals",
    "date": "2022",
    "location": "SoftServe",
    "description": "Course of basics give me fundamental knowledge in web development and IT teamwork. How git works and team collaboration.",
    "status": "completed"
  },
  {
    "id": "w6mgx5s2k",
    "title": "+100EXP – Marketing Odyssey",
    "date": "2017-2022",
    "location": "Newtrex",
    "description": "Worked as a email marketing specialist, focusing on campaign optimization and customer engagement. Gained experience in data analysis, A/B testing, and marketing automation tools to drive successful email campaigns. Grew to SEO specialist and worked with large amount of sites. Make technical optimizations to improve site performance, user experience and search engine rankings, order and organize content. Gain the basics of web development.",
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
            {DATA.length > 0 ? DATA.map((item) => (
              <li className={activeItem === item.id ? "active" : ""} key={item.id} onClick={() => handleClick(item.id)}>
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
                  {item?.description && (
                    <p style={{ whiteSpace: 'pre-line' }}>
                      <span className="content-title">Descriprion:</span>
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            )) : (
              <li><p>no any data yet</p></li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
