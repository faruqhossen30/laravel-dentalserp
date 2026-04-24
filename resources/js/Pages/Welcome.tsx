import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { 
    Search, 
    ChevronDown, 
    MoveRight, 
    ChevronLeft, 
    ChevronRight, 
    Plus, 
    Minus, 
    ArrowRight, 
    HelpCircle, 
    Menu, 
    X,
    CheckCircle2,
    Star,
    ArrowUpRight,
    Play,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube
} from 'lucide-react';
import { useState } from 'react';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Case Studies', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    const stats = [
        { label: '15+', value: 'Years Experience' },
        { label: '100+', value: 'Team Members' },
        { label: '97%', value: 'Client Retention' },
        { label: '£100M+', value: 'Managed Spend' },
    ];

    const serviceCards = [
        { 
            title: 'Insurance', 
            description: 'Insurance lead generation services for agents and brokers.', 
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
            color: 'bg-pink-600'
        },
        { 
            title: 'Real Estate', 
            description: 'Real estate lead generation services for agents and brokers.', 
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
            color: 'bg-pink-600'
        },
        { 
            title: 'Solar', 
            description: 'Solar lead generation services for installers and providers.', 
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop',
            color: 'bg-pink-600'
        },
        { 
            title: 'Financial', 
            description: 'Financial lead generation services for advisors and firms.', 
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop',
            color: 'bg-pink-600'
        },
    ];

    const processSteps = [
        { 
            num: '01', 
            title: 'Search Engine Optimization', 
            description: 'Our SEO experts will help you rank higher on search engines and get more organic traffic.' 
        },
        { 
            num: '02', 
            title: 'Paid Search Ads', 
            description: 'We create and manage highly effective paid search campaigns that drive conversions.' 
        },
        { 
            num: '03', 
            title: 'Conversion Rate Optimization', 
            description: 'We optimize your website to convert more visitors into leads and customers.' 
        },
    ];

    const resultsCards = [
        { category: 'Insurance', title: 'How we helped an insurance company grow their leads by 200%', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop' },
        { category: 'Solar', title: 'Solar installation company sees 150% increase in bookings', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop' },
        { category: 'Real Estate', title: 'Real estate agent dominates local market with our SEO', image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop' },
        { category: 'Legal', title: 'Law firm reduces cost per lead by 40%', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop' },
        { category: 'Medical', title: 'Dental clinic reaches new patient targets in 3 months', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' },
        { category: 'Finance', title: 'Investment firm sees record-breaking growth with PPC', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
    ];

    const faqs = [
        { q: "What is your lead generation process?", a: "We use a multi-channel approach including SEO, PPC, and social media to target your ideal audience and convert them into high-quality leads." },
        { q: "How much does your service cost?", a: "Our pricing is tailored to your specific needs and goals. We offer both fixed-price and performance-based models." },
        { q: "Do you offer any guarantees?", a: "While we can't guarantee specific results, we have a proven track record of delivering significant growth for our clients." },
        { q: "How do you track and report results?", a: "We provide comprehensive reporting and dashboards so you can see exactly how your campaigns are performing in real-time." },
    ];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-pink-100 text-slate-900">
            <Head title="Dental SERP - LP-Driven Pay-Per-Lead Agency" />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600 text-white font-bold text-xl italic shadow-lg shadow-pink-600/20">
                                D
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-black tracking-tight text-pink-600">DENTAL</span>
                                <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">SERP</span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
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

                        {/* CTA Button */}
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
            <section className="relative overflow-hidden bg-[#fff5f7] py-20 lg:py-32">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-pink-100/50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-3xl opacity-50"></div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] uppercase max-w-5xl mx-auto">
                        The LP-Driven Pay-Per-Lead Agency for <span className="text-pink-600">Insurance Industries</span>
                    </h1>
                    <p className="mt-8 mx-auto max-w-2xl text-lg text-slate-600 font-medium leading-relaxed">
                        We help insurance agents and brokers get more high-quality leads that actually convert into sales.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="h-16 w-full sm:w-auto px-12 rounded-full bg-yellow-400 text-slate-900 text-lg font-black uppercase tracking-widest hover:bg-yellow-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/20">
                            Get More Leads
                        </button>
                    </div>

                    {/* Logo/Badge Row */}
                    <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                        {['Google', 'Clutch', 'Trustpilot', 'Forbes', 'Meta'].map((name) => (
                            <span key={name} className="text-2xl font-black text-slate-300 uppercase tracking-tighter">{name}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-black py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center border-r border-white/10 last:border-0">
                                <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">{stat.label}</div>
                                <div className="text-sm font-bold text-white/60 uppercase tracking-widest">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Why Choose Us</h2>
                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase">
                            Why the Right Website Design is the Key to Profitability
                        </h3>
                        <p className="mt-6 text-lg text-slate-600">
                            Your website is your best salesperson. We make sure it's working 24/7 to bring you new business.
                        </p>
                        <button className="mt-8 text-pink-600 font-black uppercase tracking-widest text-sm border-b-2 border-pink-600 pb-1 hover:text-pink-700 hover:border-pink-700 transition-all">
                            View All Industries
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceCards.map((card) => (
                            <div key={card.title} className="group relative overflow-hidden rounded-3xl bg-slate-50 transition-all hover:shadow-2xl hover:-translate-y-2">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                </div>
                                <div className="absolute bottom-0 p-8 text-white">
                                    <h4 className="text-2xl font-black uppercase mb-2">{card.title}</h4>
                                    <p className="text-sm text-white/80 line-clamp-2 mb-6">{card.description}</p>
                                    <button className="flex h-10 w-full items-center justify-center rounded-xl bg-pink-600 text-xs font-black uppercase tracking-widest group-hover:bg-pink-700 transition-all">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="py-24 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]"></div>
                
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
                        <h3 className="text-4xl lg:text-5xl font-black leading-tight uppercase">
                            How We Help You Grow Your Business
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {processSteps.map((step) => (
                            <div key={step.num} className="relative p-10 rounded-4xl bg-white/5 border border-white/10 hover:border-pink-600/50 transition-all group">
                                <div className="text-6xl font-black text-pink-600/20 group-hover:text-pink-600 transition-colors mb-6">{step.num}</div>
                                <h4 className="text-2xl font-black uppercase mb-4">{step.title}</h4>
                                <p className="text-white/60 leading-relaxed mb-8">{step.description}</p>
                                <button className="text-sm font-black text-pink-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="h-16 px-12 rounded-full bg-yellow-400 text-slate-900 text-lg font-black uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Process Grid Section */}
            <section className="py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 grid grid-cols-3 gap-6">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="aspect-square bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all hover:shadow-xl hover:-translate-y-1">
                                    <div className="w-full h-full bg-slate-50 rounded-xl"></div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Integration</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-tight mb-8">
                                Our Lead Generation Process Works with Your Tools
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                We integrate seamlessly with your CRM and other marketing tools to ensure a smooth flow of leads from capture to conversion. No more manual data entry or lost opportunities.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['Automated lead capture', 'CRM integration', 'Real-time notifications', 'Custom reporting'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-bold text-slate-700">
                                        <CheckCircle2 className="h-6 w-6 text-pink-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="h-14 px-10 rounded-full bg-yellow-400 text-slate-900 font-black uppercase tracking-widest hover:bg-yellow-500 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Grid Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Case Studies</h2>
                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-tight">
                            Real Results For Real Businesses
                        </h3>
                        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                            See how we've helped companies like yours grow their revenue through strategic lead generation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resultsCards.map((card, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video overflow-hidden rounded-3xl mb-6 relative">
                                    <img src={card.image} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-pink-600">
                                        {card.category}
                                    </div>
                                </div>
                                <h4 className="text-xl font-black text-slate-900 uppercase leading-tight mb-4 group-hover:text-pink-600 transition-colors">{card.title}</h4>
                                <button className="text-xs font-black text-pink-600 uppercase tracking-widest flex items-center gap-2">
                                    Read More <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <button className="h-16 px-12 rounded-full bg-pink-600 text-white text-lg font-black uppercase tracking-widest hover:bg-pink-700 transition-all">
                            View All Results
                        </button>
                    </div>
                </div>
            </section>

            {/* Success Path Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-[1.1]">
                                The Best Path Towards Client Success
                            </h3>
                        </div>
                        <button className="h-14 px-8 rounded-full border-2 border-pink-600 text-pink-600 font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all whitespace-nowrap">
                            Get Started
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <div className="h-16 w-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-pink-600/40 group-hover:scale-110 transition-transform">
                                    <Star className="h-8 w-8 text-white fill-white" />
                                </div>
                                <h4 className="text-3xl font-black uppercase mb-6 leading-tight">Elite Digital Marketing Strategy</h4>
                                <p className="text-white/60 text-lg leading-relaxed mb-10">
                                    We don't just run ads; we build comprehensive growth engines that dominate your competition and secure your market position.
                                </p>
                                <ul className="space-y-4 mb-12">
                                    {['Market Analysis', 'Competitor Research', 'Strategic Planning', 'Full-Scale Execution'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-white/80 font-bold uppercase text-sm tracking-widest">
                                            <CheckCircle2 className="h-5 w-5 text-pink-600" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="h-14 w-full rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all">
                                    Read Full Story
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-pink-50 rounded-[40px] p-10 flex flex-col md:flex-row gap-10 items-center border border-pink-100/50">
                                <div className="w-full md:w-1/3 aspect-square bg-pink-200 rounded-3xl overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h4 className="text-2xl font-black text-slate-900 uppercase mb-4 leading-tight">Advanced Lead Nurturing Systems</h4>
                                    <p className="text-slate-600 mb-6">Automation and AI-driven sequences that turn "just looking" into "ready to buy".</p>
                                    <button className="text-pink-600 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-[40px] p-10 flex flex-col md:flex-row gap-10 items-center border border-slate-100">
                                <div className="w-full md:w-1/3 aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Meeting" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h4 className="text-2xl font-black text-slate-900 uppercase mb-4 leading-tight">Transparent Performance ROI</h4>
                                    <p className="text-slate-600 mb-6">Every penny accounted for. Every lead tracked. Clear, honest reporting monthly.</p>
                                    <button className="text-slate-900 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Excellence Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900">Service Excellence</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border border-slate-100 rounded-[32px] p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Trustpilot_logo.svg/1200px-Trustpilot_logo.svg.png" className="h-10 object-contain mb-4 grayscale opacity-50" alt="Trustpilot" />
                            <div className="flex gap-1 mb-2 text-emerald-500">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">4.9/5 Rating</span>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-[32px] p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Clutch_logo.svg/2560px-Clutch_logo.svg.png" className="h-10 object-contain mb-4 grayscale opacity-50" alt="Clutch" />
                            <div className="flex gap-1 mb-2 text-pink-600">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Top Rated 2024</span>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-[32px] p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" className="h-10 object-contain mb-4 grayscale opacity-50" alt="Google" />
                            <div className="flex gap-1 mb-2 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Premier Partner</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Partner Section */}
            <section className="py-24 bg-black text-white relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">DENTAL SERP</h2>
                            <h3 className="text-4xl lg:text-6xl font-black uppercase leading-[1.1] mb-8">
                                Your Partner <br className="hidden lg:block" /> For <span className="text-pink-600">Growth</span>
                            </h3>
                            <p className="text-xl text-white/60 leading-relaxed mb-10">
                                We are more than just an agency; we are an extension of your team. Our success is directly tied to yours, which is why we obsess over the details that drive results.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div>
                                    <div className="text-4xl font-black text-pink-600 mb-2">98%</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-white/40">Success Rate</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-pink-600 mb-2">24/7</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-white/40">Monitoring</div>
                                </div>
                            </div>
                            <button className="h-16 px-12 rounded-full bg-yellow-400 text-slate-900 text-lg font-black uppercase tracking-widest hover:bg-yellow-500 transition-all">
                                View Our Results
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] rounded-[60px] overflow-hidden rotate-3 shadow-2xl shadow-pink-600/20">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-pink-600 p-10 rounded-[40px] shadow-2xl -rotate-3 hidden md:block">
                                <Play className="h-12 w-12 text-white fill-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies & Insights Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Insights</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-tight">Case Studies & Insights</h3>
                        </div>
                        <button className="h-14 px-8 rounded-full border-2 border-pink-600 text-pink-600 font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all">
                            View All Case Studies
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Featured Case Study */}
                        <div className="lg:col-span-12 group cursor-pointer">
                            <div className="bg-slate-50 rounded-[40px] overflow-hidden flex flex-col md:flex-row border border-slate-100">
                                <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Featured Insight" />
                                </div>
                                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                                    <span className="text-pink-600 font-black uppercase tracking-widest text-xs mb-4">Featured Story</span>
                                    <h4 className="text-3xl font-black text-slate-900 uppercase leading-tight mb-6">How We Helped a Multi-State Insurance Agency Triple Their Lead Volume</h4>
                                    <p className="text-slate-600 text-lg mb-8">Discover the exact strategy we used to scale operations across 15 states while reducing cost-per-lead by 35%.</p>
                                    <button className="text-pink-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read More <ArrowRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Smaller Case Studies */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="lg:col-span-4 group cursor-pointer">
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                                    <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?q=80&w=600&auto=format&fit=crop`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Insight" />
                                    <div className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                                        Update
                                    </div>
                                </div>
                                <h5 className="text-xl font-black text-slate-900 uppercase leading-tight mb-4 group-hover:text-pink-600 transition-colors">The Future of AI in Insurance Lead Generation</h5>
                                <button className="text-xs font-black text-pink-600 uppercase tracking-widest flex items-center gap-2">
                                    Learn More <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center lg:hidden">
                        <button className="text-pink-600 font-black uppercase tracking-widest text-sm border-b-2 border-pink-600 pb-1">View All</button>
                    </div>
                </div>
            </section>

            {/* Leading Agency Help Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Why Us?</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase leading-tight mb-8">
                                How a Leading Digital Marketing Agency Can Help Your Business
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                We provide the expertise and tools needed to scale your business quickly and efficiently. Our data-driven approach ensures that every marketing dollar spent contributes to your bottom line.
                            </p>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                                {[
                                    { val: '124%', label: 'Increase in Lead Volume' },
                                    { val: '321%', label: 'Return on Ad Spend' },
                                    { val: '45%', label: 'Lower Cost Per Lead' },
                                    { val: '2.5x', label: 'Faster Sales Cycle' }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-pink-600 mb-1">{stat.val}</div>
                                        <div className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="aspect-[3/4] bg-slate-100 rounded-[32px] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Marketing" />
                                    </div>
                                    <div className="aspect-square bg-pink-600 rounded-[32px] flex items-center justify-center p-8">
                                        <div className="text-white text-center">
                                            <div className="text-4xl font-black mb-2">15+</div>
                                            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Years of Experience</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-square bg-yellow-400 rounded-[32px] flex items-center justify-center p-8">
                                        <div className="text-slate-900 text-center">
                                            <div className="text-4xl font-black mb-2">500+</div>
                                            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Happy Clients</div>
                                        </div>
                                    </div>
                                    <div className="aspect-[3/4] bg-slate-100 rounded-[32px] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Team Banner */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Team Background" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8">Join The A-Team</h2>
                    <button className="h-16 px-12 rounded-full bg-white text-slate-900 text-lg font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all">
                        View Openings
                    </button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-sm font-black text-pink-600 uppercase tracking-[0.3em] mb-4">Questions?</h2>
                            <h3 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-8">
                                Common Questions About Our Services
                            </h3>
                            <p className="text-slate-600 mb-10">
                                Can't find the answer you're looking for? Reach out to our team and we'll be happy to help.
                            </p>
                            <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100">
                                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Mail className="h-8 w-8 text-pink-600" />
                                </div>
                                <h4 className="text-lg font-black uppercase mb-2">Need Help?</h4>
                                <p className="text-sm text-slate-500 mb-6">Our experts are ready to answer your questions.</p>
                                <button className="h-12 w-full rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-pink-600 transition-all">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-2/3 flex flex-col gap-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`rounded-3xl border transition-all duration-500 ${activeFaq === index ? 'bg-pink-50 border-pink-100' : 'bg-white border-slate-100'}`}>
                                    <button 
                                        className="flex w-full items-center justify-between text-left p-8 outline-none group"
                                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    >
                                        <span className={`text-xl font-black uppercase tracking-tight transition-colors ${activeFaq === index ? 'text-pink-600' : 'text-slate-900'}`}>{faq.q}</span>
                                        <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-pink-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                                            <ChevronDown className="h-6 w-6" />
                                        </div>
                                    </button>
                                    <div className={`grid transition-all duration-500 ease-in-out ${activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden px-8 pb-8">
                                            <p className="text-slate-600 text-lg leading-relaxed">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Form Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2"></div>
                
                <div className="mx-auto max-w-3xl px-4 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-black uppercase leading-tight mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-white/60 text-lg mb-12">
                        Get a free strategy session and custom quote for your lead generation needs. No pressure, just results.
                    </p>
                    
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-pink-600 transition-all text-white placeholder:text-white/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-pink-600 transition-all text-white placeholder:text-white/20" />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Your Message</label>
                            <textarea rows={4} placeholder="Tell us about your goals..." className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 outline-none focus:border-pink-600 transition-all text-white placeholder:text-white/20 resize-none"></textarea>
                        </div>
                        <button className="sm:col-span-2 h-16 mt-4 rounded-2xl bg-yellow-400 text-slate-900 text-lg font-black uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20">
                            Submit Now
                        </button>
                    </form>
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
                                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">About Us</li>
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
                            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-pink-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-pink-600 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
