'use client';

import Typewriter from "@/components/Typewriter";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Profile from "./Profile";
import Image from 'next/image';
import warrior from '../../public/person.webp';

export default function Hero({ }: {}) {
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <section className="hero">
            {isMobile ? <Profile /> : ``}
            <h1><span>F</span>rontend</h1>
            <h1 className="big">DEV</h1>
            <p>
                <Typewriter messages={["React • Next.js • TypeScript"]} />
            </p>
            <div className="buttons">
                <a href="https://drive.google.com/file/d/15if1j7jy4d460fQC_nRInNo4ii5Ac724/view?usp=sharing" target="_blank" rel="noopener noreferrer" type="button" className="btn">
                    Get CV
                </a>
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