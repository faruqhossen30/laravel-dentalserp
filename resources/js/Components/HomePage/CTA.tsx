export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-white py-32">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[80px] bg-gradient-to-tr from-indigo-700 to-indigo-500 p-16 text-center text-white shadow-2xl shadow-indigo-200 md:p-32">
                    {/* Decorative Circle */}
                    <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10"></div>

                    <h2 className="mx-auto mb-10 max-w-4xl text-4xl font-black uppercase leading-[1.1] tracking-tighter md:text-7xl">
                        Ready to Claim Your Local <br /> Dental Market?
                    </h2>
                    <p className="mx-auto mb-16 max-w-2xl text-xl font-medium leading-relaxed text-indigo-50 opacity-90">
                        Get your free Local SEO Audit today and see the exact
                        steps needed to fill your appointment book with
                        high-value patients.
                    </p>
                    <button className="rounded-full bg-white px-12 py-6 text-lg font-black uppercase tracking-widest text-indigo-600 shadow-2xl shadow-indigo-900/20 transition-all hover:scale-110 active:scale-95">
                        Get Your Free Dental SEO Audit
                    </button>
                </div>
            </div>
        </section>
    );
}
