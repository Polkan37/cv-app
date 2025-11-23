'use client';

import Typewriter from "@/components/Typewriter";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Profile from "./Profile";

export default function Hero({ }: {}) {
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <section className="hero">
            {isMobile ? <Profile /> : ``}
            <h1><span>F</span>ront<span>E</span>nd</h1>
            <img src="/warrior.png" alt="" />
            <h1 className="big">DEV</h1>
            <p><Typewriter messages={["Let's bring the future closer"]} /></p>
        </section>
    );
}