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
            <h1><span>F</span>ront<span>E</span>nd</h1>
            <Image
                className="hero-image"
                src={warrior}
                alt="Warrior"
                placeholder="blur"
            />
            <h1 className="big">DEV</h1>
            <p><Typewriter messages={["Let's bring the future closer"]} /></p>
        </section>
    );
}