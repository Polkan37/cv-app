'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type NavItem = { href: string; label: string, description: string, title: string };

const NAV_ITEMS: NavItem[] = [
    { href: '/', label: 'beginning', description: 'Introduction.', title: 'Home' },
    { href: '/experience', label: 'Logs', description: 'degrees, Internships, and On Job Training.', title: 'My Path' },
    { href: '/about', label: 'About me', description: 'Skill sets and Future Goals.', title: 'About me' },
    { href: '/projects', label: 'creations', description: 'Personal Projects, Wireframes, Mockups.', title: 'Works' },
    { href: '/contact', label: 'Contact', description: 'Open new connection if you have quest for me', title: 'Contact' },
];

export default function Navigation() {
    const path = usePathname();
    const [isActive, setIsActive] = useState(path);
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(NAV_ITEMS.find(el => el.href === path)?.title);
    const isMobile = useMediaQuery('(max-width: 950px)');

    useEffect(() => {
        setTimeout(() => {
            setIsActive(path);
            const header = NAV_ITEMS.find(el => el.href === path)?.title;
            setTitle(header);
        }, 100);
    }, [path])

    return (
        <nav className="navigation">
            {isMobile ? (
                <div id="mobile">
                    <div className="navigation-header">
                        <button
                            className={`navigation-button ${isOpen ? 'open' : ''}`}
                            onClick={() => setIsOpen(v => !v)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav"
                        >
                            Navigation
                        </button>
                        <p className="navigation-page-title">
                            {title}
                        </p>
                    </div>
                    <div className={`navigation-wrapper ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div className="navigation-title">
                            <p>Navigation</p>
                            <button
                                id='nav-close'
                                aria-label="Close navigation"
                                onClick={() => setIsOpen(false)}
                            ></button>
                        </div>
                        <ul>
                            <TopBar />
                            {NAV_ITEMS.map(({ href, label, description }, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            key={href}
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className={href === isActive ? "panel active" : "panel"}>
                                                <div className="panel-header">{label}</div>
                                                <div className="panel-content">
                                                    <div className="panel-description">
                                                        {description}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ) : (
                <div id="desktop">
                    <ul>
                        {NAV_ITEMS.map(({ href, label, description }, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className={href === isActive ? "panel active" : "panel"}>
                                            <div className="panel-header">{label}</div>
                                            <div className="panel-content">
                                                <div className="panel-description">
                                                    {description}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
}