import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Separator } from '@/Components/ui/separator';
import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Bookmark,
    Calendar,
    ChevronRight,
    Facebook,
    Link as LinkIcon,
    Search,
    Share2,
    Twitter,
} from 'lucide-react';
// Removed date-fns import and replaced with native Intl.DateTimeFormat below

interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string;
    created_at: string;
    categories?: { name: string }[];
}

interface Props {
    blog: Blog;
    relatedPosts: Blog[];
}

export default function Show({ blog, relatedPosts }: Props) {
    return (
        <FrontendLayout title={`${blog.title} - Ultra Trip`}>
            {/* Post Header / Hero */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden md:h-[80vh]">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 pb-20 md:px-6">
                        <div className="max-w-4xl space-y-6">
                            <div className="flex items-center gap-4">
                                <Link
                                    href={route('news.index')}
                                    className="rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-emerald-600 hover:text-white"
                                >
                                    <ArrowLeft size={20} />
                                </Link>
                                <Badge className="bg-emerald-600 px-4 py-1 font-bold uppercase tracking-widest text-white">
                                    TRAIL RUNNING
                                </Badge>
                            </div>
                            <h1 className="font-outfit text-4xl font-black uppercase italic leading-tight tracking-tighter text-white drop-shadow-2xl md:text-7xl">
                                {blog.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/80 md:text-sm">
                                <span className="flex items-center gap-2">
                                    <Calendar
                                        size={18}
                                        className="text-emerald-500"
                                    />
                                    {new Date(
                                        blog.created_at,
                                    ).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: '2-digit',
                                        year: 'numeric',
                                    })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                    8 MIN READ
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                    BY ULTRA TEAM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-16 px-4 md:mt-24 md:px-6">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                    {/* Left Sidebar (Share & Info) */}
                    <div className="sticky top-32 hidden h-fit space-y-8 lg:col-span-1 lg:block">
                        <div className="flex flex-col gap-4">
                            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-emerald-600 hover:text-white">
                                <Share2 size={20} />
                            </button>
                            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-emerald-600 hover:text-white">
                                <Bookmark size={20} />
                            </button>
                            <Separator className="my-4" />
                            <Link
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 transition-colors hover:bg-[#1877F2] hover:text-white"
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 transition-colors hover:bg-[#1DA1F2] hover:text-white"
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 transition-colors hover:bg-black hover:text-white"
                            >
                                <LinkIcon size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Main Article Content */}
                    <div className="space-y-12 lg:col-span-7">
                        <div
                            className="prose prose-xl prose-zinc prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-light prose-strong:text-slate-900 prose-strong:font-bold prose-blockquote:border-l-8 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:p-8 prose-blockquote:italic prose-blockquote:rounded-r-2xl max-w-none first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-black first-letter:text-emerald-600 selection:bg-emerald-100 selection:text-emerald-900"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Article Footer */}
                        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-16 md:flex-row">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                                    TAGS:
                                </span>
                                <div className="flex gap-2">
                                    {['Training', 'Endurance', 'Mindset'].map(
                                        (tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-slate-100 transition-colors hover:bg-emerald-600 hover:text-white"
                                            >
                                                {tag}
                                            </Badge>
                                        ),
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button className="rounded-full bg-emerald-600 px-8 font-bold uppercase tracking-widest text-white">
                                    Next Story{' '}
                                    <ChevronRight size={16} className="ml-1" />
                                </Button>
                            </div>
                        </div>

                        {/* Newsletter Mini */}
                        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-10 text-white">
                            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-600/10 transition-transform duration-700 group-hover:scale-150"></div>
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter">
                                    Never miss a pulse
                                </h3>
                                <p className="max-w-sm font-light text-slate-400">
                                    Join 15,000+ ultra runners receiving weekly
                                    tips, race reports, and exclusive member
                                    discounts.
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow rounded-lg border border-white/10 bg-white/5 px-6 outline-none focus:border-emerald-500"
                                    />
                                    <Button className="bg-emerald-600 px-8 font-bold uppercase text-white hover:bg-emerald-700">
                                        Join now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar (Related Posts & Search) */}
                    <div className="space-y-12 lg:col-span-4">
                        {/* Search Box */}
                        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
                            <h4 className="mb-4 text-sm font-black uppercase tracking-widest">
                                Search News
                            </h4>
                            <div className="relative">
                                <Search
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    size={18}
                                />
                                <input
                                    type="text"
                                    placeholder="Type keywords..."
                                    className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 outline-none transition-colors focus:border-black"
                                />
                            </div>
                        </div>

                        {/* Related Posts */}
                        <div className="space-y-6">
                            <h4 className="w-fit border-b-4 border-emerald-500 pb-1 text-sm font-black uppercase tracking-widest">
                                You Might Like
                            </h4>
                            <div className="space-y-8">
                                {relatedPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={route('news.show', post.slug)}
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                                                TRENDING
                                            </span>
                                            <h5 className="text-sm font-bold leading-tight transition-colors group-hover:text-emerald-600">
                                                {post.title}
                                            </h5>
                                            <span className="text-[10px] text-gray-400">
                                                {new Date(
                                                    post.created_at,
                                                ).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: '2-digit',
                                                })}{' '}
                                                • 5 min read
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Advertisement / Promo */}
                        <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="https://picsum.photos/seed/race_promo/800/1000"
                                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                <h4 className="mb-4 text-2xl font-black uppercase italic leading-none tracking-tighter">
                                    ULTRA TRIP <br />
                                    <span className="text-emerald-500">
                                        Official Gear
                                    </span>
                                </h4>
                                <Button className="w-full rounded-none bg-emerald-600 font-bold uppercase tracking-widest text-white hover:bg-emerald-700">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
