'use client';

import { useState } from 'react';

interface Quest {
    desc: string;
    position: string;
    company: string;
    mission: string;
}
const questsData: Quest[] = [
    {
        desc: 'Fulltime project',
        position: 'Full-stack Developer',
        company: 'rockit media',
        mission: 'To empower media buying through seamless  solutions. I build tools and chatbots that simplify workflows, automate and make every step smarter, faster, and more intuitive.'
    },
    // {
    //     desc: 'Pet-project',
    //     position: 'Owner',
    //     company: '–',
    //     mission: 'AI Cats twitter platform'
    // },
];

export default function ActiveQuest({ }: {}) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [firstShow, setFirstShow] = useState(true);

    const toggle = (i: number) => {
        setOpenIndex(prev => (prev === i ? null : i));
        setFirstShow(false);
    };

    console.log('questsData.length', questsData.length)
    return (
        <section className="active-quest">
            {questsData.length != 0 ? questsData.map((quest, index) => (
                <div
                    className={`panel ${openIndex === index && firstShow ? 'show' : '' } ${openIndex === index ? 'open' : ''}`}
                    onClick={() => toggle(index)}
                    aria-expanded={openIndex === index}
                    role="button"
                    tabIndex={index}
                    key={index}
                >
                    <div className="panel-header">active quest</div>
                    <div className="panel-content">
                        <div className="panel-desc">{quest.desc}</div>
                        <ul>
                            <li>
                                <div className="panel-title">Position</div>
                                <p className="primary">{quest.position}</p>
                            </li>
                            <li>
                                <div className="panel-title">Company</div>
                                <p>{quest.company}</p>
                            </li>
                            <li>
                                <div className="panel-title">Mission</div>
                                <p>{quest.mission}</p>
                            </li>
                        </ul>

                    </div>
                </div>
            )) : (
                <div className="panel no-data">
                    <div className="panel-header">no active quests</div>
                </div>)}
        </section>
    );
}