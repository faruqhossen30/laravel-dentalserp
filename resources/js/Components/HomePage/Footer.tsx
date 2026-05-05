import {
    Activity,
    Facebook,
    Instagram,
    Linkedin,
    MapPin,
    MessageSquare,
    Twitter,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-900 py-24 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 grid grid-cols-1 gap-20 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-10 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-400">
                                <Activity className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">
                                Dental
                                <span className="ml-1 uppercase text-indigo-400">
                                    SERP
                                </span>
                            </span>
                        </div>
                        <p className="mb-10 text-sm font-medium leading-relaxed text-slate-400 opacity-80">
                            The premium local SEO agency specialized exclusively
                            for high-performing dental practices across the UK.
                        </p>
                        <div className="flex gap-5">
                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 shadow-sm transition-all hover:bg-indigo-600 hover:text-white"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 shadow-sm transition-all hover:bg-indigo-600 hover:text-white"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 shadow-sm transition-all hover:bg-indigo-600 hover:text-white"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 shadow-sm transition-all hover:bg-indigo-600 hover:text-white"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white opacity-50">
                            Services
                        </h5>
                        <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    GBP Optimization
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    Local SEO Strategy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    Dental Content
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    Review Strategy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white opacity-50">
                            Agency
                        </h5>
                        <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-10 text-xs font-black uppercase tracking-[0.3em] text-white opacity-50">
                            Contact
                        </h5>
                        <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                            <li className="flex items-center gap-3">
                                <MessageSquare className="h-4 w-4 text-indigo-400" />
                                hello@dentalserp.com
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-indigo-400" />
                                Manchester, UK
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 md:flex-row">
                    <div>© 2024 DentalSERP. All rights reserved.</div>
                    <div className="flex gap-10">
                        <a
                            href="#"
                            className="transition-colors hover:text-indigo-400"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-indigo-400"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
