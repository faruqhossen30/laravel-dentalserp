import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { 
    Globe, 
    Mail, 
    Phone, 
    MapPin, 
    Facebook, 
    Twitter, 
    Linkedin, 
    Instagram,
    Info
} from 'lucide-react';

export default function GeneralIndex({ settings, title = 'General Settings' }: { settings: any, title?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        site_name: settings.site_name || '',
        site_description: settings.site_description || '',
        footer_email: settings.footer_email || '',
        footer_phone: settings.footer_phone || '',
        footer_address: settings.footer_address || '',
        facebook_url: settings.facebook_url || '',
        twitter_url: settings.twitter_url || '',
        linkedin_url: settings.linkedin_url || '',
        instagram_url: settings.instagram_url || '',
        youtube_url: settings.youtube_url || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.general-setting.update'));
    };

    return (
        <AdminLayout header={title}>
            <Head title={title} />
            
            <form onSubmit={handleSubmit} className="max-w-4xl space-y-6 pb-12">
                {/* Site Information */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2 text-pink-600 mb-2">
                            <Info className="h-5 w-5" />
                            <CardTitle>Site Information</CardTitle>
                        </div>
                        <CardDescription>
                            Basic information about your website that appears in the footer and meta tags.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="site_name">Site Name</Label>
                            <Input 
                                id="site_name"
                                value={data.site_name}
                                onChange={e => setData('site_name', e.target.value)}
                                placeholder="Dental SERP"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="site_description">Site Description</Label>
                            <Textarea 
                                id="site_description"
                                value={data.site_description}
                                onChange={e => setData('site_description', e.target.value)}
                                placeholder="The Lead Gen Experts for Dentists..."
                                rows={3}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2 text-pink-600 mb-2">
                            <Mail className="h-5 w-5" />
                            <CardTitle>Contact Information</CardTitle>
                        </div>
                        <CardDescription>
                            Contact details shown in the footer and contact pages.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="footer_email">Footer Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input 
                                        id="footer_email"
                                        className="pl-10"
                                        value={data.footer_email}
                                        onChange={e => setData('footer_email', e.target.value)}
                                        placeholder="hello@dentalserp.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="footer_phone">Footer Phone</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input 
                                        id="footer_phone"
                                        className="pl-10"
                                        value={data.footer_phone}
                                        onChange={e => setData('footer_phone', e.target.value)}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="footer_address">Footer Address</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input 
                                    id="footer_address"
                                    className="pl-10"
                                    value={data.footer_address}
                                    onChange={e => setData('footer_address', e.target.value)}
                                    placeholder="123 Marketing Ave, Digital City, DC 12345"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Social Media Links */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2 text-pink-600 mb-2">
                            <Globe className="h-5 w-5" />
                            <CardTitle>Social Media Links</CardTitle>
                        </div>
                        <CardDescription>
                            Your social media profile URLs for the footer icons.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="facebook_url">Facebook URL</Label>
                                <div className="relative">
                                    <Facebook className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input 
                                        id="facebook_url"
                                        className="pl-10"
                                        value={data.facebook_url}
                                        onChange={e => setData('facebook_url', e.target.value)}
                                        placeholder="https://facebook.com/..."
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="twitter_url">Twitter URL</Label>
                                <div className="relative">
                                    <Twitter className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input 
                                        id="twitter_url"
                                        className="pl-10"
                                        value={data.twitter_url}
                                        onChange={e => setData('twitter_url', e.target.value)}
                                        placeholder="https://twitter.com/..."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                                <div className="relative">
                                    <Linkedin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input 
                                        id="linkedin_url"
                                        className="pl-10"
                                        value={data.linkedin_url}
                                        onChange={e => setData('linkedin_url', e.target.value)}
                                        placeholder="https://linkedin.com/in/..."
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="instagram_url">Instagram URL</Label>
                                <div className="relative">
                                    <Instagram className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input 
                                        id="instagram_url"
                                        className="pl-10"
                                        value={data.instagram_url}
                                        onChange={e => setData('instagram_url', e.target.value)}
                                        placeholder="https://instagram.com/..."
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end sticky bottom-6 z-10">
                    <Button type="submit" size="lg" className="bg-pink-600 hover:bg-pink-700 shadow-xl shadow-pink-600/20" disabled={processing}>
                        {processing ? 'Saving...' : 'Save All Settings'}
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
