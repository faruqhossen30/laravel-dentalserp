import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: 'How long until I see results?',
            a: "Most practices see significant movement within 3-6 months. However, Google Business Profile optimizations can often yield 'quick wins' in call volume within the first few weeks.",
        },
        {
            q: 'Do you work with my competitors?',
            a: 'No. We offer exclusivity for your local area. We only work with one dental practice per territory to ensure we are never competing against our own results.',
        },
        {
            q: "What is included in the 'Free Audit'?",
            a: "You'll receive a comprehensive video walkthrough of your current local SEO performance, a map ranking heatmap, and a 3-step action plan to improve your rankings.",
        },
        {
            q: 'Is SEO better than Paid Ads (PPC)?',
            a: 'PPC is instant; SEO is long-term equity. We recommend both, but prioritize SEO because it builds a sustainable flow of patients at a much lower cost-per-acquisition over time.',
        },
    ];

    return (
        <section id="faqs" className="bg-slate-50 py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                        FAQs
                    </h2>
                    <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900">
                        Common Questions
                    </h3>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                        >
                            <button
                                className="group flex w-full items-center justify-between p-10 text-left outline-none"
                                onClick={() =>
                                    setActiveFaq(activeFaq === i ? null : i)
                                }
                            >
                                <span className="text-xl font-black uppercase tracking-tight text-slate-900">
                                    {faq.q}
                                </span>
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full transition-all ${activeFaq === i ? 'rotate-180 bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}
                                >
                                    <ChevronDown className="h-6 w-6" />
                                </div>
                            </button>
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${activeFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="border-t border-slate-50 p-10 pt-0 text-lg font-medium leading-relaxed text-slate-500">
                                        {faq.a}
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
