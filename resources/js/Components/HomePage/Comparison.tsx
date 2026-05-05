import { CheckCircle2, X } from 'lucide-react';

export default function Comparison() {
    const comparisonData = [
        ['Dental Niche Expertise', true, false],
        ['GDC/ASA Compliance Awareness', true, false],
        ['Local Pack Dominance Focus', true, 'Maybe'],
        ['Patient Booking Attribution', true, false],
        ['Exclusivity per Territory', true, 'Rarely'],
    ];

    return (
        <section className="bg-slate-50 py-32">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                        The Difference
                    </h2>
                    <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900">
                        Why DentalSERP is the Only Choice
                    </h3>
                </div>

                <div className="overflow-hidden rounded-[60px] border border-slate-200 bg-white shadow-2xl">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-10 text-xl font-black uppercase tracking-widest">
                                    Feature
                                </th>
                                <th className="p-10 text-center text-xl font-black uppercase tracking-widest text-indigo-400">
                                    DentalSERP
                                </th>
                                <th className="p-10 text-center text-xl font-black uppercase tracking-widest text-slate-400">
                                    Generalists
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {comparisonData.map(
                                ([feature, _dserp, general], i) => (
                                    <tr
                                        key={i}
                                        className="transition-colors hover:bg-slate-50"
                                    >
                                        <td className="p-10 font-black uppercase tracking-tight text-slate-700">
                                            {feature as string}
                                        </td>
                                        <td className="p-10 text-center">
                                            <div className="flex justify-center">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50">
                                                    <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-10 text-center font-bold text-slate-300">
                                            {typeof general === 'boolean' ? (
                                                general ? (
                                                    <CheckCircle2 className="mx-auto h-6 w-6 text-slate-200" />
                                                ) : (
                                                    <X className="mx-auto h-6 w-6 text-red-200" />
                                                )
                                            ) : (
                                                general
                                            )}
                                        </td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
