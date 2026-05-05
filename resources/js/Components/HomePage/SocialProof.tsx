import { PhoneCall, Search as SearchIcon, Star } from 'lucide-react';

export default function SocialProof() {
    return (
        <section className="border-y border-slate-100 bg-slate-50/50 py-16">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-4 sm:px-6 md:gap-24 lg:px-8">
                <div className="flex flex-col items-center gap-2">
                    <div className="mb-1 flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                        ))}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        4.9★ Average Review Score
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <SearchIcon className="mb-1 h-6 w-6 text-indigo-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        #1 Invisalign Local Pack
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <PhoneCall className="mb-1 h-6 w-6 text-indigo-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        +312% Organic Call Growth
                    </span>
                </div>
            </div>
        </section>
    );
}
