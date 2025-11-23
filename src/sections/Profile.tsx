'use client';

import Typewriter from "@/components/Typewriter";

export default function Profile({ }: {}) {
    const status = { value: false, text: "open for hire"};

    return (
        <section className="profile">
            <div className="content-wrapper">
                <img src="/userIcon.jpg" alt="user icon" />
            </div>
            <ul className="profile-list">
                <li>
                    <div className="list-title">NAME</div>
                    <p><Typewriter messages={["Marharyta Neskoromna"]} /></p>
                </li>
                <li>
                    <div className="list-title">occupation</div>
                    <p><Typewriter messages={["Frontend developer"]} /></p>
                </li>
                <li>
                    <div className="list-title">corporation</div>
                    <p><Typewriter messages={["Freelancing"]} /></p>
                </li>
                <li>
                    <div className="list-title">availability</div>
                    <div className={status.value ? "panel active": "panel"}>
                        <div className="panel-header text-dark">{status.text}</div>
                    </div>
                </li>
            </ul>
        </section>
    );
}