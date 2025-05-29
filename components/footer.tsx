import React from 'react';
import Link from 'next/link';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
    { href: '/resources', label: 'Resources' },
];

const resourceLinks = [
    { href: '/snippets', label: 'Code Snippets' },
    { href: '/demos', label: 'Demos' },
    { href: '/inspiration', label: 'Design Inspiration' },
];

const socialLinks = [
    { href: 'https://github.com/', icon: <IconBrandGithub />, label: 'GitHub' },
    { href: 'https://twitter.com/', icon: <IconBrandTwitter />, label: 'Twitter' },
    { href: 'https://linkedin.com/', icon: <IconBrandLinkedin />, label: 'LinkedIn' },
    { href: 'https://instagram.com/', icon: <IconBrandInstagram />, label: 'Instagram' },
    { href: 'https://youtube.com/', icon: <IconBrandYoutube />, label: 'YouTube' },
];

const Footer = () => (
    <footer className="w-full border-t px-4 md:px-14 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
        <div className="mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-paragraph hover:text-neutral-700 dark:hover:text-neutral-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Social */}
            <div>
                <div className="flex flex-col gap-4">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="text-sm font-semibold flex  items-start text-paragraph hover:text-neutral-700 dark:hover:text-neutral-400 transition-colors"
                        >
                            {social.label}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Resources */}
            <div>
                <nav className="flex flex-col gap-4">
                    {resourceLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-paragraph hover:text-neutral-700 dark:hover:text-neutral-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 py-4 px-4 text-xs text-neutral-500 dark:text-neutral-400">
            Inspired by <span className="font-semibold text-neutral-700 dark:text-neutral-200">Manu Arora</span>
        </div>
    </footer>
);

export default Footer;