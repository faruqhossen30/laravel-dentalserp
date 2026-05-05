import { ArrowRight, Award } from 'lucide-react';

export default function Hero() {
    const results = [
        {
            location: 'Manchester',
            metric: '+312%',
            label: 'Increase in Organic Calls',
            subtext: 'From 12 to 49 calls per month in 90 days.',
        },
        {
            location: 'Birmingham',
            metric: '+187%',
            label: 'Map Pack Impressions',
            subtext: "Dominated 'Invisalign Birmingham' in 4 months.",
        },
        {
            location: 'London',
            metric: '62 → 410',
            label: 'Monthly Enquiries',
            subtext: 'Scale-up for a multi-surgery cosmetic practice.',
        },
    ];

    return (
        <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-48">
            {/* Background Blobs */}
            <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 animate-pulse rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>
            <div className="duration-[5000ms] absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/4 translate-y-1/4 animate-pulse rounded-full bg-blue-50 opacity-60 blur-3xl"></div>

            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <div className="mb-8 inline-flex animate-bounce items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
                    <Award className="h-3 w-3" />
                    #1 Rated Dental SEO Agency
                </div>
                <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 lg:text-8xl">
                    Fill Your Dental Appointment Book with{' '}
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Local SEO
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-600">
                    The specialized local SEO agency that helps dental practices
                    dominate Google, outperform competitors in the Maps pack,
                    and attract high-value patients on autopilot.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-10 py-5 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-indigo-200 transition-all hover:scale-105 hover:bg-indigo-700 active:scale-95 sm:w-auto">
                        Get Free SEO Audit
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-100 bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-50 sm:w-auto">
                        See Our Results
                    </button>
                </div>

                {/* Dashboard Preview Mockup */}
                <div className="relative mx-auto mt-20 max-w-5xl px-4">
                    <div className="relative overflow-hidden rounded-[40px] border-8 border-slate-900/5 bg-slate-50 shadow-2xl">
                        <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-slate-100 px-6">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                            <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                            <div className="ml-4 h-4 w-32 rounded-full bg-slate-200"></div>
                        </div>
                        <div className="p-8 md:p-16">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                {results.map((res, i) => (
                                    <div
                                        key={i}
                                        className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
                                    >
                                        <div className="mb-4 text-xs font-black uppercase tracking-widest text-indigo-600">
                                            {res.location}
                                        </div>
                                        <div className="mb-2 text-5xl font-black tracking-tighter text-slate-900 transition-colors group-hover:text-indigo-600">
                                            {res.metric}
                                        </div>
                                        <div className="mb-4 text-xs font-black uppercase tracking-widest text-slate-500">
                                            {res.label}
                                        </div>
                                        <p className="text-sm font-medium leading-relaxed text-slate-400">
                                            {res.subtext}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
