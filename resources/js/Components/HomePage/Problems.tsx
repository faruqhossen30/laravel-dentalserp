import { X } from 'lucide-react';

export default function Problems() {
    const problems = [
        {
            title: 'No Dental Intent',
            description:
                "Generic agencies don't distinguish between 'dental checkup' and 'dental implants'—missing your highest-value leads.",
        },
        {
            title: 'Compliance Issues',
            description:
                'GDC and ASA guidelines are strict. Most agencies risk your reputation with non-compliant marketing claims.',
        },
        {
            title: 'Poor GBP Optimization',
            description:
                "Dental GBP features like 'Services' and 'Booking Links' are often ignored by generalist agencies.",
        },
        {
            title: 'Traffic vs. Bookings',
            description:
                "We don't report on 'hits'. We report on the actual patients booked into your practice management software.",
        },
    ];

    return (
        <section className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                        The Problem
                    </h2>
                    <h3 className="text-4xl font-black uppercase leading-tight tracking-tight text-slate-900 md:text-6xl">
                        Why Most SEO Agencies Fail <br /> Dental Practices
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {problems.map((prob, i) => (
                        <div
                            key={i}
                            className="group rounded-[40px] border border-slate-100 bg-slate-50 p-10 transition-all hover:border-indigo-200"
                        >
                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-all group-hover:scale-110 group-hover:bg-red-50">
                                <X className="h-6 w-6 text-red-500" />
                            </div>
                            <h4 className="mb-4 text-xl font-black uppercase leading-tight text-slate-900">
                                {prob.title}
                            </h4>
                            <p className="font-medium leading-relaxed text-slate-500">
                                {prob.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
