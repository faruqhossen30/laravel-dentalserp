import { Activity, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b border-slate-100 bg-white/80 py-3 backdrop-blur-md' : 'bg-transparent py-5'}`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 shadow-lg shadow-indigo-200">
                            <Activity className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">
                            Dental
                            <span className="ml-1 uppercase tracking-tighter text-indigo-600">
                                SERP
                            </span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#services"
                            className="text-sm font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            Services
                        </a>
                        <a
                            href="#results"
                            className="text-sm font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            Results
                        </a>
                        <a
                            href="#process"
                            className="text-sm font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            Process
                        </a>
                        <a
                            href="#faqs"
                            className="text-sm font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            FAQs
                        </a>
                        <button className="rounded-full bg-indigo-600 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-100 transition-all hover:scale-105 hover:bg-indigo-700 active:scale-95">
                            Get Free SEO Audit
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-slate-600 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-b border-slate-100 bg-white px-4 py-6 shadow-xl duration-300 animate-in slide-in-from-top md:hidden">
                    <a
                        href="#services"
                        onClick={() => setIsMenuOpen(false)}
                        className="border-b border-slate-50 px-4 py-2 text-lg font-black uppercase tracking-tight text-slate-900"
                    >
                        Services
                    </a>
                    <a
                        href="#results"
                        onClick={() => setIsMenuOpen(false)}
                        className="border-b border-slate-50 px-4 py-2 text-lg font-black uppercase tracking-tight text-slate-900"
                    >
                        Results
                    </a>
                    <a
                        href="#process"
                        onClick={() => setIsMenuOpen(false)}
                        className="border-b border-slate-50 px-4 py-2 text-lg font-black uppercase tracking-tight text-slate-900"
                    >
                        Process
                    </a>
                    <a
                        href="#faqs"
                        onClick={() => setIsMenuOpen(false)}
                        className="border-b border-slate-50 px-4 py-2 text-lg font-black uppercase tracking-tight text-slate-900"
                    >
                        FAQs
                    </a>
                    <button className="mt-2 w-full rounded-2xl bg-indigo-600 py-4 font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-100">
                        Get Free SEO Audit
                    </button>
                </div>
            )}
        </nav>
    );
}
