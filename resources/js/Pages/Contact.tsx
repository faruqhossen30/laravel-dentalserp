import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Building2,
    ChevronDown,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    MessageSquare,
    Phone,
    Send,
    Smartphone,
    Twitter,
    User,
    X,
    Youtube,
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const { flash } = usePage().props as any;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        contact: '',
        organization: '',
        message: '',
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: route('about') },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Case Studies', href: '#' },
        { name: 'Contact', href: route('contact') },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-100">
            <Head title="Contact Us - Dental SERP" />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-xl font-bold italic text-white shadow-lg shadow-pink-600/20">
                                D
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-pink-600">
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
                                    className={`flex items-center gap-1 text-[15px] font-bold uppercase tracking-wider transition-colors ${link.name === 'Contact' ? 'text-pink-600' : 'text-slate-700 hover:text-pink-600'}`}
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

            {/* Contact Hero */}
            <section className="relative overflow-hidden bg-[#fff5f7] py-20 lg:py-32">
                <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-pink-100/50 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/2 rounded-full bg-yellow-100/50 opacity-50 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                        Get In <span className="text-pink-600">Touch</span>
                    </h1>
                    <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-600">
                        Have questions about our lead generation services? Our
                        team of experts is ready to help you grow your practice.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                        {/* Info Column */}
                        <div className="lg:col-span-5">
                            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-pink-600">
                                Contact Info
                            </h2>
                            <h3 className="mb-12 text-4xl font-black uppercase leading-tight text-slate-900">
                                Let's Start a <br /> Conversation
                            </h3>

                            <div className="space-y-10">
                                <div className="group flex items-start gap-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-pink-600 shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            Email Us
                                        </div>
                                        <div className="text-xl font-bold text-slate-900">
                                            hello@dentalserp.com
                                        </div>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-pink-600 shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            Call Us
                                        </div>
                                        <div className="text-xl font-bold text-slate-900">
                                            +1 (555) 000-0000
                                        </div>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-pink-600 shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            Visit Us
                                        </div>
                                        <div className="text-xl font-bold text-slate-900">
                                            123 Marketing Ave, <br />
                                            Digital City, DC 12345
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 border-t border-slate-100 pt-16">
                                <div className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    Follow Us
                                </div>
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
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400 shadow-sm transition-all hover:bg-pink-600 hover:text-white"
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-8 shadow-xl shadow-slate-200/50 md:p-12">
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {flash?.success && (
                                        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm font-bold text-emerald-600">
                                            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                            {flash.success}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="ml-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <User className="h-3 w-3" />{' '}
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        'name',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="John Doe"
                                                className={`h-14 w-full border bg-white ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5`}
                                                required
                                            />
                                            {errors.name && (
                                                <div className="ml-4 mt-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ml-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <Mail className="h-3 w-3" />{' '}
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="john@example.com"
                                                className={`h-14 w-full border bg-white ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5`}
                                                required
                                            />
                                            {errors.email && (
                                                <div className="ml-4 mt-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="ml-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <Smartphone className="h-3 w-3" />{' '}
                                                Contact Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={data.contact}
                                                onChange={(e) =>
                                                    setData(
                                                        'contact',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="+1 (555) 000-0000"
                                                className={`h-14 w-full border bg-white ${errors.contact ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5`}
                                                required
                                            />
                                            {errors.contact && (
                                                <div className="ml-4 mt-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                                                    {errors.contact}
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="ml-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <Building2 className="h-3 w-3" />{' '}
                                                Organization
                                            </label>
                                            <input
                                                type="text"
                                                value={data.organization}
                                                onChange={(e) =>
                                                    setData(
                                                        'organization',
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Your Company"
                                                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-6 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="ml-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <MessageSquare className="h-3 w-3" />{' '}
                                            Your Message
                                        </label>
                                        <textarea
                                            rows={5}
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    'message',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Tell us about your goals..."
                                            className={`w-full border bg-white ${errors.message ? 'border-red-500' : 'border-slate-200'} resize-none rounded-3xl p-6 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5`}
                                            required
                                        ></textarea>
                                        {errors.message && (
                                            <div className="ml-4 mt-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                                                {errors.message}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="group flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-pink-600 text-lg font-black uppercase tracking-widest text-white shadow-xl shadow-pink-600/20 transition-all hover:bg-pink-700"
                                    >
                                        Send Message{' '}
                                        <Send
                                            className={`h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${processing ? 'animate-pulse' : ''}`}
                                        />
                                    </button>
                                </form>
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
                                We specialize in high-intent lead generation for
                                the dental and insurance industries, using
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
