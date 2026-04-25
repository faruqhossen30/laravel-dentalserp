import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Mail, Phone, Building2, User, Calendar, ArrowLeft } from 'lucide-react';

export default function Show({ contact }: { contact: any }) {
    return (
        <AdminLayout header="View Message">
            <Head title={`Message from ${contact.name}`} />
            
            <div className="mb-4">
                <Link href={route('admin.contacts.index')}>
                    <Button variant="outline" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Messages
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Sender Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                    <User className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400">Full Name</div>
                                    <div className="font-semibold text-slate-900">{contact.name}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400">Email Address</div>
                                    <div className="font-semibold text-slate-900">{contact.email}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400">Contact Number</div>
                                    <div className="font-semibold text-slate-900">{contact.contact}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                    <Building2 className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400">Organization</div>
                                    <div className="font-semibold text-slate-900">{contact.organization || 'Not provided'}</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                    <Calendar className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold uppercase text-slate-400">Received At</div>
                                    <div className="font-semibold text-slate-900">{new Date(contact.created_at).toLocaleString()}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium">Message Content</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 min-h-[300px] whitespace-pre-wrap text-slate-700 leading-relaxed">
                                {contact.message}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
