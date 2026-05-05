import { BarChart3, Shield, Zap } from 'lucide-react';

export default function Principles() {
    return (
        <section className="relative overflow-hidden bg-indigo-600 py-32 text-white">
            <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 text-center lg:grid-cols-3 lg:text-left">
                    <div className="space-y-6">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md lg:mx-0">
                            <Shield className="h-8 w-8" />
                        </div>
                        <h4 className="text-3xl font-black uppercase tracking-tight">
                            Dental-First
                        </h4>
                        <p className="text-lg font-medium leading-relaxed text-indigo-100">
                            We only work with dentists. We know your industry,
                            your treatments, and your patients inside out.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md lg:mx-0">
                            <BarChart3 className="h-8 w-8" />
                        </div>
                        <h4 className="text-3xl font-black uppercase tracking-tight">
                            Transparent Reporting
                        </h4>
                        <p className="text-lg font-medium leading-relaxed text-indigo-100">
                            No jargon or vanity metrics. See exactly where your
                            leads come from via our real-time dashboard.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-md lg:mx-0">
                            <Zap className="h-8 w-8" />
                        </div>
                        <h4 className="text-3xl font-black uppercase tracking-tight">
                            No Contracts
                        </h4>
                        <p className="text-lg font-medium leading-relaxed text-indigo-100">
                            We earn your business every single month with
                            undeniable results. No lock-ins, just performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
