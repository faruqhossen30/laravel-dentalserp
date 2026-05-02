import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { 
    ChevronDown, 
    Menu, 
    X,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Send,
    MessageSquare,
    Building2,
    User,
    Smartphone
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
        <div className="min-h-screen bg-white font-sans selection:bg-pink-100 text-slate-900">
            <Head title="Contact Us - Dental SERP" />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white font-bold text-xl italic shadow-lg shadow-pink-600/20">
                                D
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-pink-600">DENTAL</span>
                                <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">SERP</span>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className={`flex items-center gap-1 text-[15px] font-bold transition-colors uppercase tracking-wider ${link.name === 'Contact' ? 'text-pink-600' : 'text-slate-700 hover:text-pink-600'}`}
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

            {/* Contact Hero */}
            <section className="relative overflow-hidden bg-[#fff5f7] py-20 lg:py-32">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-pink-100/50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-3xl opacity-50"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] uppercase max-w-5xl mx-auto">
                        Get In <span className="text-pink-600">Touch</span>
                    </h1>
                    <p className="mt-8 mx-auto max-w-2xl text-lg text-slate-600 font-medium leading-relaxed">
                        Have questions about our lead generation services? Our team of experts is ready to help you grow your practice.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Info Column */}
                        <div className="lg:col-span-5">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Contact Info</h2>
                            <h3 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-12">
                                Let's Start a <br /> Conversation
                            </h3>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start group">
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-sm">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                                        <div className="text-xl font-bold text-slate-900">hello@dentalserp.com</div>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-sm">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</div>
                                        <div className="text-xl font-bold text-slate-900">+1 (555) 000-0000</div>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-sm">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Visit Us</div>
                                        <div className="text-xl font-bold text-slate-900">123 Marketing Ave, <br />Digital City, DC 12345</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-16 border-t border-slate-100">
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Follow Us</div>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                                        <a key={i} href="#" className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-slate-400 shadow-sm">
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {flash?.success && (
                                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-600 px-6 py-4 rounded-2xl text-sm font-bold flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                            {flash.success}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                                <User className="h-3 w-3" /> Full Name
                                            </label>
                                            <input 
                                                type="text" 
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                placeholder="John Doe" 
                                                className={`w-full h-14 bg-white border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all text-slate-900 placeholder:text-slate-300`} 
                                                required
                                            />
                                            {errors.name && <div className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-wider">{errors.name}</div>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                                <Mail className="h-3 w-3" /> Email Address
                                            </label>
                                            <input 
                                                type="email" 
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                placeholder="john@example.com" 
                                                className={`w-full h-14 bg-white border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all text-slate-900 placeholder:text-slate-300`} 
                                                required
                                            />
                                            {errors.email && <div className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-wider">{errors.email}</div>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                                <Smartphone className="h-3 w-3" /> Contact Number
                                            </label>
                                            <input 
                                                type="tel" 
                                                value={data.contact}
                                                onChange={e => setData('contact', e.target.value)}
                                                placeholder="+1 (555) 000-0000" 
                                                className={`w-full h-14 bg-white border ${errors.contact ? 'border-red-500' : 'border-slate-200'} rounded-2xl px-6 outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all text-slate-900 placeholder:text-slate-300`} 
                                                required
                                            />
                                            {errors.contact && <div className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-wider">{errors.contact}</div>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                                <Building2 className="h-3 w-3" /> Organization
                                            </label>
                                            <input 
                                                type="text" 
                                                value={data.organization}
                                                onChange={e => setData('organization', e.target.value)}
                                                placeholder="Your Company" 
                                                className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all text-slate-900 placeholder:text-slate-300" 
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                            <MessageSquare className="h-3 w-3" /> Your Message
                                        </label>
                                        <textarea 
                                            rows={5} 
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            placeholder="Tell us about your goals..." 
                                            className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-slate-200'} rounded-3xl p-6 outline-none focus:border-pink-600 focus:ring-4 focus:ring-pink-600/5 transition-all text-slate-900 placeholder:text-slate-300 resize-none`}
                                            required
                                        ></textarea>
                                        {errors.message && <div className="text-red-500 text-[10px] font-bold mt-1 ml-4 uppercase tracking-wider">{errors.message}</div>}
                                    </div>

                                    <button 
                                        type="submit"
                                        disabled={processing}
                                        className="w-full h-16 rounded-2xl bg-pink-600 text-white text-lg font-black uppercase tracking-widest hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 flex items-center justify-center gap-3 group"
                                    >
                                        Send Message <Send className={`h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${processing ? 'animate-pulse' : ''}`} />
                                    </button>
                                </form>
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
                                We specialize in high-intent lead generation for the dental and insurance industries, using data-driven strategies to fuel your growth.
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
