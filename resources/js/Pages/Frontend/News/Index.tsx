import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/Components/ui/card';
import FrontendLayout from '@/Layouts/FrontendLayout';
import { Link } from '@inertiajs/react';
import { ArrowRight, Calendar, Clock, TrendingUp } from 'lucide-react';
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
    blogs: {
        data: Blog[];
        links: any;
        current_page: number;
        last_page: number;
    };
}

export default function Index({ blogs }: Props) {
    const featuredBlog = blogs.data[0];
    const otherBlogs = blogs.data.slice(1);

    return (
        <FrontendLayout title="Latest News - Ultra Trip">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
                    <div className="space-y-4">
                        <Badge className="flex w-fit items-center gap-2 rounded-full bg-emerald-600 px-4 py-1 font-bold text-white hover:bg-emerald-700">
                            <TrendingUp size={14} /> NEWS & STORIES
                        </Badge>
                        <h1 className="text-5xl font-black uppercase leading-none tracking-tighter text-slate-900 md:text-7xl">
                            Fresh from <br />
                            <span className="text-emerald-600">The Trails</span>
                        </h1>
                    </div>
                    <div className="hidden max-w-sm border-r-4 border-emerald-500 pr-6 text-right text-lg font-light italic text-slate-500 md:block">
                        "If you want to run, run a mile. If you want to
                        experience a different life, run a marathon."
                    </div>
                </div>

                {/* Featured Post */}
                {featuredBlog && (
                    <div className="group relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
                        <Link
                            href={route('news.show', featuredBlog.slug)}
                            className="block"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-[300px] overflow-hidden lg:h-[600px]">
                                    <img
                                        src={featuredBlog.image}
                                        alt={featuredBlog.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                    <div className="absolute left-6 top-6">
                                        <Badge className="bg-emerald-600 px-4 py-1 text-sm font-bold text-white">
                                            FEATURED STORY
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-8 bg-zinc-950 p-8 lg:p-16">
                                    <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-2">
                                            <Calendar
                                                size={16}
                                                className="text-[#C5FF00]"
                                            />
                                            {new Date(
                                                featuredBlog.created_at,
                                            ).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </span>
                                        <span className="flex items-center gap-2 text-emerald-500">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                                            LATEST UPDATE
                                        </span>
                                    </div>
                                    <h2 className="font-outfit text-4xl font-black leading-tight tracking-tighter text-white transition-colors group-hover:text-[#C5FF00] lg:text-6xl">
                                        {featuredBlog.title}
                                    </h2>
                                    <p className="line-clamp-3 text-lg font-light leading-relaxed text-gray-400">
                                        {featuredBlog.content
                                            .replace(/<[^>]*>?/gm, '')
                                            .substring(0, 300)}
                                        ...
                                    </p>
                                    <div className="pt-4">
                                        <Button className="group/btn h-14 rounded-full bg-emerald-600 px-8 font-bold uppercase tracking-widest text-white hover:bg-emerald-700">
                                            READ FULL ARTICLE
                                            <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-2" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* News Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {otherBlogs.map((blog) => (
                        <Card
                            key={blog.id}
                            className="group flex h-full flex-col border-none bg-transparent shadow-none"
                        >
                            <Link
                                href={route('news.show', blog.slug)}
                                className="flex h-full flex-col"
                            >
                                <CardHeader className="mb-6 overflow-hidden rounded-2xl p-0">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute left-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                                            <Badge className="bg-black font-bold text-[#C5FF00]">
                                                TECH & GEAR
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow space-y-4 p-0">
                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {new Date(
                                                blog.created_at,
                                            ).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: '2-digit',
                                            })}
                                        </span>
                                        <span className="h-1 w-1 rounded-full bg-gray-600"></span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} />5 MIN READ
                                        </span>
                                    </div>
                                    <h3 className="font-outfit line-clamp-2 text-2xl font-black tracking-tight transition-colors group-hover:text-[#C5FF00]">
                                        {blog.title}
                                    </h3>
                                    <p className="line-clamp-3 text-sm font-light italic leading-relaxed text-gray-500">
                                        "
                                        {blog.content
                                            .replace(/<[^>]*>?/gm, '')
                                            .substring(0, 150)}
                                        ..."
                                    </p>
                                </CardContent>
                                <CardFooter className="mt-auto p-0 pt-6">
                                    <span className="flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-600">
                                        CONTINUE READING{' '}
                                        <ArrowRight
                                            size={16}
                                            className="text-emerald-500"
                                        />
                                    </span>
                                </CardFooter>
                            </Link>
                        </Card>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                {blogs.last_page > 1 && (
                    <div className="mt-20 flex justify-center border-t border-gray-100 pt-10">
                        <div className="flex gap-2">
                            {Array.from(
                                { length: blogs.last_page },
                                (_, i) => i + 1,
                            ).map((page) => (
                                <button
                                    key={page}
                                    className={`flex h-12 w-12 items-center justify-center font-bold transition-all ${
                                        page === blogs.current_page
                                            ? 'scale-110 bg-black text-[#C5FF00] shadow-lg'
                                            : 'hover:bg-zinc-100'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </FrontendLayout>
    );
}
