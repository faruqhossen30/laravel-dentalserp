export default function Process() {
    const processSteps = [
        {
            step: '01',
            title: 'Discovery Audit',
            description:
                'We perform a deep-dive analysis of your local market, competitors, and current map rankings.',
        },
        {
            step: '02',
            title: 'Strategy & Roadmap',
            description:
                'A custom blueprint designed to capture high-value dental keywords in your specific territory.',
        },
        {
            step: '03',
            title: 'Implementation',
            description:
                'Our team executes technical, on-page, and GBP dental SEO fixes to boost your visibility.',
        },
        {
            step: '04',
            title: 'Reporting & Growth',
            description:
                'Real-time dashboards showing your ROI, call volume, and new patient bookings.',
        },
    ];

    return (
        <section id="process" className="overflow-hidden bg-white py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                        How It Works
                    </h2>
                    <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-6xl">
                        Your 4-Step Road to Local Dominance
                    </h3>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-0 top-16 hidden h-1 w-full bg-slate-50 lg:block"></div>

                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((p, i) => (
                            <div
                                key={i}
                                className="group relative space-y-8 text-center md:text-left"
                            >
                                <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-[40px] border-4 border-slate-50 bg-white shadow-sm transition-all group-hover:border-indigo-600 group-hover:shadow-xl group-hover:shadow-indigo-100 md:mx-0">
                                    <span className="text-5xl font-black text-indigo-600">
                                        {p.step}
                                    </span>
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                                    {p.title}
                                </h4>
                                <p className="text-lg font-medium leading-relaxed text-slate-500">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
