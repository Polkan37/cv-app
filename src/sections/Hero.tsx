'use client';

import Typewriter from "@/components/Typewriter";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Profile from "./Profile";
import Image from 'next/image';
import warrior from '../../public/image7.webp';

export default function Hero({ }: {}) {
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <section className="hero">
            {isMobile ? <Profile /> : ``}
            <h1><span>S</span>oftware</h1>
            <h1 className="big">dev</h1>
            <p>
                <Typewriter messages={[" JS/TS • Node.js • React"]} />
            </p>
            <div className="buttons">
                <a href="https://github.com/Polkan37" target="_blank" rel="noopener noreferrer" type="button" className="btn">
                    Github
                </a>
                <a href="/contact" type="button" className="btn">
                    Contact
                </a>
            </div>
            <Image
                className="hero-image"
                src={warrior}
                alt="Warrior"
                placeholder="blur"
            />
        </section>
    );
}