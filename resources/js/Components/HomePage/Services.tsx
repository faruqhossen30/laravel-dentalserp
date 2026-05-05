import {
    Globe,
    MapPin,
    PenTool,
    Settings,
    ThumbsUp,
    TrendingUp,
} from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: 'GBP Optimization',
            description:
                'Dominate the local pack where 70% of dental searches click and convert.',
            icon: <MapPin className="h-6 w-6" />,
        },
        {
            title: 'Local SEO',
            description:
                'Rank for every suburb and neighborhood surrounding your dental practice.',
            icon: <Globe className="h-6 w-6" />,
        },
        {
            title: 'Dental Content',
            description:
                'Expertly written dental articles that build trust and patient authority.',
            icon: <PenTool className="h-6 w-6" />,
        },
        {
            title: 'Link Building',
            description:
                'High-quality backlinks from health and local authoritative sources.',
            icon: <TrendingUp className="h-6 w-6" />,
        },
        {
            title: 'Technical SEO',
            description:
                'Blazing fast site speed and mobile optimization for patient convenience.',
            icon: <Settings className="h-6 w-6" />,
        },
        {
            title: 'Review Strategy',
            description:
                'Automated systems to collect and manage 5-star patient reviews on autopilot.',
            icon: <ThumbsUp className="h-6 w-6" />,
        },
    ];

    return (
        <section id="services" className="bg-slate-50 py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                        Our Services
                    </h2>
                    <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-6xl">
                        Comprehensive SEO Specialized <br /> for Dentistry
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group rounded-[48px] border border-slate-100 bg-white p-10 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm transition-all group-hover:bg-indigo-600 group-hover:text-white">
                                {service.icon}
                            </div>
                            <h4 className="mb-6 text-2xl font-black uppercase tracking-tight text-slate-900">
                                {service.title}
                            </h4>
                            <p className="text-lg font-medium leading-relaxed text-slate-500">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
