import Comparison from '@/Components/HomePage/Comparison';
import CTA from '@/Components/HomePage/CTA';
import FAQ from '@/Components/HomePage/FAQ';
import Footer from '@/Components/HomePage/Footer';
import Hero from '@/Components/HomePage/Hero';
import Navbar from '@/Components/HomePage/Navbar';
import Principles from '@/Components/HomePage/Principles';
import Problems from '@/Components/HomePage/Problems';
import Process from '@/Components/HomePage/Process';
import Services from '@/Components/HomePage/Services';
import SocialProof from '@/Components/HomePage/SocialProof';
import Testimonials from '@/Components/HomePage/Testimonials';
import { Head } from '@inertiajs/react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
            <Head>
                <title>
                    DentalSERP | Specialized Local SEO for Dental Practices
                </title>
                <meta
                    name="description"
                    content="The premium local SEO agency exclusively for dentists. Dominate Google Maps, attract more patients, and grow your practice."
                />
            </Head>

            <Navbar />

            <main>
                <Hero />
                <SocialProof />
                <Problems />
                <Principles />
                <Services />
                <Process />
                <Comparison />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>

            <Footer />
        </div>
    );
}
