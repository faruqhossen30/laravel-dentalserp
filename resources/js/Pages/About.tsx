import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Facebook,
    Heart,
    Instagram,
    Linkedin,
    Menu,
    Search,
    ShieldCheck,
    Stethoscope,
    Target,
    Twitter,
    Users,
    X,
    Youtube,
    Zap,
} from 'lucide-react';
import { useState } from 'react';

export default function About() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: route('about') },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Case Studies', href: '#' },
        { name: 'Contact', href: route('contact') },
    ];

    const values = [
        {
            icon: Target,
            title: 'Precision Targeting',
            desc: "We don't just find patients; we find the right patients for your specific dental treatments. Our data-driven approach ensures high-quality leads.",
        },
        {
            icon: Heart,
            title: 'Dental Focused',
            desc: 'Our entire ecosystem is built around the unique needs of dental practices. We understand the language of dentistry and patient care.',
        },
        {
            icon: Zap,
            title: 'Rapid Growth',
            desc: 'Our strategies are designed to deliver measurable growth in patient bookings within months, helping you scale your clinic efficiently.',
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-100">
            <Head title="About Us - Dental SERP | Exclusively for Dentists" />

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
                                    className={`flex items-center gap-1 text-[15px] font-bold uppercase tracking-wider transition-colors ${link.name === 'About Us' ? 'text-pink-600' : 'text-slate-700 hover:text-pink-600'}`}
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

            {/* About Hero Section */}
            <section className="relative overflow-hidden bg-[#fff5f7] py-20 lg:py-32">
                <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-pink-100/50 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/2 rounded-full bg-yellow-100/50 opacity-50 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-pink-600">
                                About Dental SERP
                            </h2>
                            <h1 className="mb-8 text-4xl font-black uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
                                We Are The{' '}
                                <span className="text-pink-600">Dental</span>{' '}
                                Marketing Experts
                            </h1>
                            <p className="mb-8 text-xl font-medium leading-relaxed text-slate-600">
                                Specialized digital marketing and SEO services
                                designed exclusively for dentists. We know
                                exactly how to connect your practice with
                                high-intent patients.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 rounded-full border border-pink-100 bg-white px-6 py-3 shadow-sm">
                                    <ShieldCheck className="h-5 w-5 text-pink-600" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
                                        100% Dental Focus
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-pink-100 bg-white px-6 py-3 shadow-sm">
                                    <Stethoscope className="h-5 w-5 text-pink-600" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
                                        Medical Precision
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rotate-3 overflow-hidden rounded-[60px] border-8 border-white shadow-2xl shadow-pink-600/20">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                                    className="h-full w-full object-cover"
                                    alt="Modern Dental Clinic"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 -rotate-3 rounded-[40px] border border-slate-50 bg-white p-8 shadow-2xl">
                                <div className="mb-1 text-4xl font-black text-pink-600">
                                    100%
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    Dentist Success Rate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="overflow-hidden bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-pink-600">
                            Our Story
                        </h2>
                        <h3 className="mb-10 text-3xl font-black uppercase leading-tight text-slate-900 lg:text-5xl">
                            Empowering Dentists Since Day One
                        </h3>
                        <div className="space-y-6 text-center text-lg leading-relaxed text-slate-600">
                            <p>
                                Dental marketing is not like general digital
                                marketing. It requires a deep understanding of
                                patient psychology and the clinical value of
                                various procedures. Dental SERP began with a
                                clear mission: to bridge the gap between skilled
                                dentists and the patients who need them most.
                            </p>
                            <p>
                                At Dental SERP, we realized early on that
                                general marketing agencies often fail to
                                understand the nuances of dentistry. From dental
                                implants to orthodontic treatments, every
                                service requires a specialized approach. We've
                                dedicated ourselves to mastering these nuances
                                to provide you with unrivaled SEO results and
                                lead generation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Values Section */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <h2 className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-pink-600">
                            Why Choose Us
                        </h2>
                        <h3 className="text-3xl font-black uppercase leading-tight text-slate-900 lg:text-5xl">
                            Built Specifically For{' '}
                            <span className="text-pink-600">Your Practice</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="group rounded-[40px] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
                            >
                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition-all group-hover:bg-pink-600 group-hover:text-white">
                                    <val.icon className="h-8 w-8" />
                                </div>
                                <h4 className="mb-4 text-2xl font-black uppercase text-slate-900">
                                    {val.title}
                                </h4>
                                <p className="leading-relaxed text-slate-500">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services Highlight */}
            <section className="relative overflow-hidden bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-20 lg:flex-row">
                        <div className="order-2 w-full lg:order-1 lg:w-1/2">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6 pt-12">
                                    <div className="flex aspect-square flex-col items-center justify-center rounded-[40px] border border-slate-200 bg-slate-100 p-8 text-center">
                                        <Search className="mb-4 h-10 w-10 text-pink-600" />
                                        <div className="text-xs font-black uppercase tracking-widest text-slate-900">
                                            Local SEO
                                        </div>
                                    </div>
                                    <div className="aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop"
                                            className="h-full w-full object-cover"
                                            alt="Service"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop"
                                            className="h-full w-full object-cover"
                                            alt="Service"
                                        />
                                    </div>
                                    <div className="flex aspect-square flex-col items-center justify-center rounded-[40px] bg-pink-600 p-8 text-center text-white">
                                        <Users className="mb-4 h-10 w-10" />
                                        <div className="text-xs font-black uppercase tracking-widest">
                                            Lead Gen
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 w-full lg:order-2 lg:w-1/2">
                            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-pink-600">
                                Our Expertise
                            </h2>
                            <h3 className="mb-8 text-3xl font-black uppercase leading-tight text-slate-900 lg:text-5xl">
                                We Only Speak{' '}
                                <span className="text-pink-600">Dentist</span>
                            </h3>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                Every SEO strategy we implement is fine-tuned
                                for dental professionals. We analyze your local
                                competition and position your clinic as the
                                primary choice for patients in your area.
                            </p>
                            <ul className="mb-10 space-y-4">
                                {[
                                    'Specialized Keyword Research for Dental Treatments',
                                    'Google Maps Optimization for Local Clinics',
                                    'Conversion-focused Dental Website Audits',
                                    'High-Authority Dental Backlink Building',
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 font-bold text-slate-700"
                                    >
                                        <CheckCircle2 className="h-6 w-6 shrink-0 text-pink-600" />{' '}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="group flex h-14 items-center gap-2 rounded-full bg-pink-600 px-10 font-black uppercase tracking-widest text-white transition-all hover:bg-pink-700">
                                Learn More{' '}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-black py-24 text-center text-white">
                <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[120px]"></div>
                <div className="relative z-10 mx-auto max-w-4xl px-4">
                    <h2 className="mb-8 text-4xl font-black uppercase leading-tight lg:text-6xl">
                        Is Your Practice Ready <br />{' '}
                        <span className="text-pink-600">For Growth?</span>
                    </h2>
                    <p className="mb-12 text-xl text-white/60">
                        Don't let your competitors take all the local patients.
                        Join hundreds of successful dentists who trust Dental
                        SERP to fuel their practice.
                    </p>
                    <Link
                        href={route('contact')}
                        className="inline-flex h-16 items-center justify-center rounded-full bg-yellow-400 px-12 text-lg font-black uppercase tracking-widest text-slate-900 shadow-xl shadow-yellow-400/20 transition-all hover:scale-105 hover:bg-yellow-500 active:scale-95"
                    >
                        Start Your Growth Journey
                    </Link>
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
