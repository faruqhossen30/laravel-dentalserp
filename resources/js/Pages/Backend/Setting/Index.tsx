import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Separator } from '@/Components/ui/separator';
import { Mail, Shield, Server, UserCheck } from 'lucide-react';

export default function Index({ settings, title = 'General Settings' }: { settings: any, title?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        mail_to_address: settings.mail_to_address || '',
        mail_host: settings.mail_host || '',
        mail_port: settings.mail_port || '',
        mail_username: settings.mail_username || '',
        mail_password: settings.mail_password || '',
        mail_encryption: settings.mail_encryption || 'tls',
        mail_from_address: settings.mail_from_address || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'));
    };

    return (
        <AdminLayout header={title}>
            <Head title={title} />
            
            <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
                {/* Mail Recipient */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2 text-pink-600 mb-2">
                            <UserCheck className="h-5 w-5" />
                            <CardTitle>Notification Settings</CardTitle>
                        </div>
                        <CardDescription>
                            Configure where contact form notifications should be sent.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="mail_to_address">To Email Address</Label>
                            <Input 
                                id="mail_to_address"
                                value={data.mail_to_address}
                                onChange={e => setData('mail_to_address', e.target.value)}
                                placeholder="admin@example.com"
                            />
                            {errors.mail_to_address && <p className="text-sm text-red-500">{errors.mail_to_address}</p>}
                        </div>
                    </CardContent>
                </Card>

                {/* SMTP Configuration */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2 text-pink-600 mb-2">
                            <Server className="h-5 w-5" />
                            <CardTitle>SMTP Configuration</CardTitle>
                        </div>
                        <CardDescription>
                            Configure your outgoing mail server settings. These will override the .env settings if provided.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="mail_host">Mail Host</Label>
                                <Input 
                                    id="mail_host"
                                    value={data.mail_host}
                                    onChange={e => setData('mail_host', e.target.value)}
                                    placeholder="smtp.mailtrap.io"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mail_port">Mail Port</Label>
                                <Input 
                                    id="mail_port"
                                    value={data.mail_port}
                                    onChange={e => setData('mail_port', e.target.value)}
                                    placeholder="587"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="mail_username">Mail Username</Label>
                                <Input 
                                    id="mail_username"
                                    value={data.mail_username}
                                    onChange={e => setData('mail_username', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mail_password">Mail Password</Label>
                                <Input 
                                    id="mail_password"
                                    type="password"
                                    value={data.mail_password}
                                    onChange={e => setData('mail_password', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="mail_encryption">Encryption</Label>
                                <Input 
                                    id="mail_encryption"
                                    value={data.mail_encryption}
                                    onChange={e => setData('mail_encryption', e.target.value)}
                                    placeholder="tls"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mail_from_address">From Address</Label>
                                <Input 
                                    id="mail_from_address"
                                    value={data.mail_from_address}
                                    onChange={e => setData('mail_from_address', e.target.value)}
                                    placeholder="noreply@example.com"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        {processing ? 'Saving...' : 'Save Settings'}
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
