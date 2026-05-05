import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            text: "DentalSERP completely transformed our visibility. We used to be buried on page 3, now we're #1 for 'Dental Implants London'. Our bookings have tripled in 6 months.",
            author: 'Dr. Sarah Chen',
            role: 'Principal Dentist, London Smiles',
        },
        {
            text: 'Finally, an agency that understands the GDC regulations. I never have to worry about our content being non-compliant. They are true dental marketing specialists.',
            author: 'James Miller',
            role: 'Practice Manager, Birmingham Dental Care',
        },
        {
            text: "The transparent reporting is a breath of fresh air. I can see exactly how many calls we've had and which keywords are driving patients into the chair every day.",
            author: 'Dr. Robert Vance',
            role: 'Owner, Vance Cosmetic Dentistry',
        },
    ];

    return (
        <section className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                        Success Stories
                    </h2>
                    <h3 className="text-4xl font-black uppercase leading-tight tracking-tight text-slate-900 md:text-6xl">
                        Trusted by High-Performing <br /> Dental Practices
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="flex flex-col justify-between rounded-[48px] border border-slate-100 bg-slate-50 p-12 transition-all hover:shadow-xl"
                        >
                            <div>
                                <div className="mb-8 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <p className="mb-10 text-xl font-medium italic leading-relaxed text-slate-700">
                                    "{t.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-black text-white">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-black uppercase tracking-tight text-slate-900">
                                        {t.author}
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-slate-400">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
