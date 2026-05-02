import { Head, Link } from '@inertiajs/react';
import { 
    ChevronDown, 
    Menu, 
    X,
    CheckCircle2,
    Star,
    ArrowRight,
    Users,
    Target,
    Heart,
    Zap,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Stethoscope,
    Search,
    ShieldCheck
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
            title: "Precision Targeting",
            desc: "We don't just find patients; we find the right patients for your specific dental treatments. Our data-driven approach ensures high-quality leads."
        },
        {
            icon: Heart,
            title: "Dental Focused",
            desc: "Our entire ecosystem is built around the unique needs of dental practices. We understand the language of dentistry and patient care."
        },
        {
            icon: Zap,
            title: "Rapid Growth",
            desc: "Our strategies are designed to deliver measurable growth in patient bookings within months, helping you scale your clinic efficiently."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-pink-100 text-slate-900">
            <Head title="About Us - Dental SERP | Exclusively for Dentists" />

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
                                    className={`flex items-center gap-1 text-[15px] font-bold transition-colors uppercase tracking-wider ${link.name === 'About Us' ? 'text-pink-600' : 'text-slate-700 hover:text-pink-600'}`}
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

            {/* About Hero Section */}
            <section className="relative overflow-hidden bg-[#fff5f7] py-20 lg:py-32">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-pink-100/50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-3xl opacity-50"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">About Dental SERP</h2>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl leading-[1.1] uppercase mb-8">
                                We Are The <span className="text-pink-600">Dental</span> Marketing Experts
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                                Specialized digital marketing and SEO services designed exclusively for dentists. We know exactly how to connect your practice with high-intent patients.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-pink-100">
                                    <ShieldCheck className="h-5 w-5 text-pink-600" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-slate-700">100% Dental Focus</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-pink-100">
                                    <Stethoscope className="h-5 w-5 text-pink-600" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-slate-700">Medical Precision</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[60px] overflow-hidden rotate-3 shadow-2xl shadow-pink-600/20 border-8 border-white">
                                <img 
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" 
                                    className="w-full h-full object-cover" 
                                    alt="Modern Dental Clinic" 
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[40px] shadow-2xl -rotate-3 border border-slate-50">
                                <div className="text-4xl font-black text-pink-600 mb-1">100%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dentist Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Our Story</h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight uppercase mb-10">
                            Empowering Dentists Since Day One
                        </h3>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-center">
                            <p>
                                Dental marketing is not like general digital marketing. It requires a deep understanding of patient psychology and the clinical value of various procedures. Dental SERP began with a clear mission: to bridge the gap between skilled dentists and the patients who need them most.
                            </p>
                            <p>
                                At Dental SERP, we realized early on that general marketing agencies often fail to understand the nuances of dentistry. From dental implants to orthodontic treatments, every service requires a specialized approach. We've dedicated ourselves to mastering these nuances to provide you with unrivaled SEO results and lead generation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Values Section */}
            <section className="py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
                        <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight uppercase">
                            Built Specifically For <span className="text-pink-600">Your Practice</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((val, i) => (
                            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                                <div className="h-16 w-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-600 group-hover:text-white transition-all text-pink-600">
                                    <val.icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-2xl font-black uppercase text-slate-900 mb-4">{val.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services Highlight */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6 pt-12">
                                    <div className="aspect-square bg-slate-100 rounded-[40px] flex flex-col items-center justify-center p-8 text-center border border-slate-200">
                                        <Search className="h-10 w-10 text-pink-600 mb-4" />
                                        <div className="font-black uppercase text-xs tracking-widest text-slate-900">Local SEO</div>
                                    </div>
                                    <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service" />
                                    </div>
                                    <div className="aspect-square bg-pink-600 rounded-[40px] flex flex-col items-center justify-center p-8 text-center text-white">
                                        <Users className="h-10 w-10 mb-4" />
                                        <div className="font-black uppercase text-xs tracking-widest">Lead Gen</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
                            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase leading-tight mb-8">
                                We Only Speak <span className="text-pink-600">Dentist</span>
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Every SEO strategy we implement is fine-tuned for dental professionals. We analyze your local competition and position your clinic as the primary choice for patients in your area.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Specialized Keyword Research for Dental Treatments',
                                    'Google Maps Optimization for Local Clinics',
                                    'Conversion-focused Dental Website Audits',
                                    'High-Authority Dental Backlink Building'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                                        <CheckCircle2 className="h-6 w-6 text-pink-600 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="h-14 px-10 rounded-full bg-pink-600 text-white font-black uppercase tracking-widest hover:bg-pink-700 transition-all flex items-center gap-2 group">
                                Learn More <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px]"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl lg:text-6xl font-black uppercase mb-8 leading-tight">
                        Is Your Practice Ready <br /> <span className="text-pink-600">For Growth?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12">
                        Don't let your competitors take all the local patients. Join hundreds of successful dentists who trust Dental SERP to fuel their practice.
                    </p>
                    <Link 
                        href={route('contact')}
                        className="inline-flex h-16 items-center justify-center rounded-full bg-yellow-400 px-12 text-lg font-black text-slate-900 uppercase tracking-widest transition-all hover:bg-yellow-500 hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/20"
                    >
                        Start Your Growth Journey
                    </Link>
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
