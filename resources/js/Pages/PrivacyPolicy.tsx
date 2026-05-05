import { Head, Link } from '@inertiajs/react';
import {
    ChevronDown,
    Eye,
    Facebook,
    FileText,
    Globe,
    Instagram,
    Linkedin,
    Lock,
    Mail,
    Menu,
    Shield,
    Twitter,
    X,
    Youtube,
} from 'lucide-react';
import { useState } from 'react';

export default function PrivacyPolicy() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: route('about') },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Case Studies', href: '#' },
        { name: 'Contact', href: route('contact') },
    ];

    const sections = [
        {
            title: 'Information We Collect',
            icon: Eye,
            content:
                'We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and organization details.',
        },
        {
            title: 'How We Use Information',
            icon: FileText,
            content:
                'We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Dental SERP and our users. We also use this information to offer you tailored content.',
        },
        {
            title: 'Information Sharing',
            icon: Globe,
            content:
                'We do not share personal information with companies, organizations, or individuals outside of Dental SERP unless one of the following circumstances applies: with your consent, for external processing, or for legal reasons.',
        },
        {
            title: 'Data Security',
            icon: Lock,
            content:
                'We work hard to protect Dental SERP and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use industry-standard encryption and security protocols.',
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-100">
            <Head title="Privacy Policy - Dental SERP" />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-xl font-bold italic text-white shadow-lg shadow-pink-600/20">
                                D
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black uppercase tracking-tight text-pink-600">
                                    DENTAL
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    SERP
                                </span>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-8 lg:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-1 text-[15px] font-bold uppercase tracking-wider text-slate-700 transition-colors hover:text-pink-600"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className="h-4 w-4 opacity-50" />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <button className="hidden h-12 items-center justify-center rounded-full bg-pink-600 px-8 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-pink-600/20 transition-all hover:scale-105 hover:bg-pink-700 active:scale-95 sm:flex">
                                Get a Quote
                            </button>
                            <button
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 lg:hidden"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-[100] bg-white p-6 lg:hidden">
                        <div className="mb-10 flex items-center justify-between">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-xl font-bold italic text-white">
                                    D
                                </div>
                                <span className="text-lg font-black uppercase text-pink-600">
                                    DENTAL SERP
                                </span>
                            </Link>
                            <button
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="border-b border-slate-50 pb-4 text-2xl font-black uppercase tracking-tight text-slate-900"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="mt-4 h-16 w-full rounded-2xl bg-pink-600 text-lg font-black uppercase tracking-widest text-white">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 py-20 text-white lg:py-32">
                <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-pink-600/10 blur-[120px]"></div>
                <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-pink-500/20 bg-pink-600/20 text-pink-500 backdrop-blur-sm">
                        <Shield className="h-10 w-10" />
                    </div>
                    <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
                        Privacy <span className="text-pink-600">Policy</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-white/60">
                        Last Updated: May 2, 2026. Your privacy is our top
                        priority. Learn how we handle and protect your data.
                    </p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {sections.map((section, i) => (
                            <div key={i} className="group">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
                                        <section.icon className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="pl-16">
                                    <p className="text-lg leading-relaxed text-slate-600">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-10">
                            <h3 className="mb-6 text-xl font-black uppercase text-slate-900">
                                Contact Us About Privacy
                            </h3>
                            <p className="mb-8 leading-relaxed text-slate-600">
                                If you have any questions about this Privacy
                                Policy or our treatment of your personal
                                information, please write to us by email at:
                            </p>
                            <div className="flex w-fit items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-600 text-white">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        Email Address
                                    </div>
                                    <div className="text-lg font-bold text-slate-900">
                                        privacy@dentalserp.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-black py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5">
                        <div className="col-span-2 md:col-span-3 lg:col-span-2">
                            <Link
                                href="/"
                                className="mb-8 flex items-center gap-2"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-xl font-bold italic text-white shadow-lg shadow-pink-600/20">
                                    D
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-lg font-black uppercase tracking-tight text-pink-600">
                                        DENTAL SERP
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                        The Lead Gen Experts
                                    </span>
                                </div>
                            </Link>
                            <p className="mb-8 max-w-sm leading-relaxed text-white/40">
                                We specialize in high-intent lead generation
                                exclusively for the dental industry, using
                                data-driven strategies to fuel your growth.
                            </p>
                            <div className="flex gap-4">
                                {[
                                    Facebook,
                                    Twitter,
                                    Linkedin,
                                    Instagram,
                                    Youtube,
                                ].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-pink-600 hover:bg-pink-600 hover:text-white"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-8 text-[10px] font-black uppercase tracking-widest text-pink-600">
                                Services
                            </h4>
                            <ul className="space-y-4 text-sm font-bold text-white/40">
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    SEO Strategy
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Paid Ads
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Web Design
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Consulting
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-8 text-[10px] font-black uppercase tracking-widest text-pink-600">
                                Company
                            </h4>
                            <ul className="space-y-4 text-sm font-bold text-white/40">
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    <Link href={route('about')}>About Us</Link>
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Our Team
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Careers
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Contact
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-8 text-[10px] font-black uppercase tracking-widest text-pink-600">
                                Resources
                            </h4>
                            <ul className="space-y-4 text-sm font-bold text-white/40">
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Case Studies
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Blog
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    Newsletter
                                </li>
                                <li className="cursor-pointer uppercase tracking-wider transition-colors hover:text-white">
                                    FAQs
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
                            © 2026 Dental SERP. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <Link
                                href={route('privacy')}
                                className="text-[10px] font-black uppercase tracking-widest text-white/20 transition-colors hover:text-pink-600"
                            >
                                Privacy Policy
                            </Link>
                            <a
                                href="#"
                                className="text-[10px] font-black uppercase tracking-widest text-white/20 transition-colors hover:text-pink-600"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
