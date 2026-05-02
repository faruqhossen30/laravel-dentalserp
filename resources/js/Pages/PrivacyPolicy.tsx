import { Head, Link } from '@inertiajs/react';
import { 
    ChevronDown, 
    Menu, 
    X,
    Shield,
    Lock,
    Eye,
    FileText,
    Globe,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube
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
            title: "Information We Collect",
            icon: Eye,
            content: "We collect information that you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and organization details."
        },
        {
            title: "How We Use Information",
            icon: FileText,
            content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Dental SERP and our users. We also use this information to offer you tailored content."
        },
        {
            title: "Information Sharing",
            icon: Globe,
            content: "We do not share personal information with companies, organizations, or individuals outside of Dental SERP unless one of the following circumstances applies: with your consent, for external processing, or for legal reasons."
        },
        {
            title: "Data Security",
            icon: Lock,
            content: "We work hard to protect Dental SERP and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use industry-standard encryption and security protocols."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-pink-100 text-slate-900">
            <Head title="Privacy Policy - Dental SERP" />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white font-bold text-xl italic shadow-lg shadow-pink-600/20">
                                D
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-pink-600 uppercase">DENTAL</span>
                                <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">SERP</span>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className="flex items-center gap-1 text-[15px] font-bold text-slate-700 hover:text-pink-600 transition-colors uppercase tracking-wider"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <button className="hidden sm:flex h-12 items-center justify-center rounded-full bg-pink-600 px-8 text-sm font-black text-white uppercase tracking-widest transition-all hover:bg-pink-700 hover:scale-105 active:scale-95 shadow-lg shadow-pink-600/20">
                                Get a Quote
                            </button>
                            <button 
                                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
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
                        <div className="flex items-center justify-between mb-10">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white font-bold text-xl italic">
                                    D
                                </div>
                                <span className="text-lg font-black text-pink-600 uppercase">DENTAL SERP</span>
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
                                    className="text-2xl font-black text-slate-900 uppercase tracking-tight border-b border-slate-50 pb-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="mt-4 h-16 w-full rounded-2xl bg-pink-600 text-lg font-black text-white uppercase tracking-widest">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32 text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-pink-600/20 text-pink-500 mb-8 backdrop-blur-sm border border-pink-500/20">
                        <Shield className="h-10 w-10" />
                    </div>
                    <h1 className="text-4xl font-black tracking-tight sm:text-6xl uppercase leading-tight mb-6">
                        Privacy <span className="text-pink-600">Policy</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/60 text-lg font-medium leading-relaxed">
                        Last Updated: May 2, 2026. Your privacy is our top priority. Learn how we handle and protect your data.
                    </p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {sections.map((section, i) => (
                            <div key={i} className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-sm">
                                        <section.icon className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight">{section.title}</h2>
                                </div>
                                <div className="pl-16">
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
                            <h3 className="text-xl font-black uppercase text-slate-900 mb-6">Contact Us About Privacy</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                If you have any questions about this Privacy Policy or our treatment of your personal information, please write to us by email at:
                            </p>
                            <div className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 w-fit">
                                <div className="h-12 w-12 rounded-2xl bg-pink-600 flex items-center justify-center text-white">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Address</div>
                                    <div className="text-lg font-bold text-slate-900">privacy@dentalserp.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-20 text-white border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                        <div className="col-span-2 md:col-span-3 lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-8">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white font-bold text-xl italic shadow-lg shadow-pink-600/20">
                                    D
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-lg font-black tracking-tight text-pink-600 uppercase">DENTAL SERP</span>
                                    <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">The Lead Gen Experts</span>
                                </div>
                            </Link>
                            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                                We specialize in high-intent lead generation exclusively for the dental industry, using data-driven strategies to fuel your growth.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all text-white/60 hover:text-white">
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-8">Services</h4>
                            <ul className="space-y-4 text-sm font-bold text-white/40">
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">SEO Strategy</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Paid Ads</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Web Design</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Consulting</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-8">Company</h4>
                            <ul className="space-y-4 text-sm font-bold text-white/40">
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">
                                    <Link href={route('about')}>About Us</Link>
                                </li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Our Team</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Careers</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Contact</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-8">Resources</h4>
                            <ul className="space-y-4 text-sm font-bold text-white/40">
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Case Studies</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Blog</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">Newsletter</li>
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">FAQs</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">© 2026 Dental SERP. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href={route('privacy')} className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-pink-600 transition-colors">Privacy Policy</Link>
                            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-pink-600 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
