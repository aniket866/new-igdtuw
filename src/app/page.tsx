import React from 'react';
import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import AboutGdg from '@/components/sections/about-gdg';
import AboutDevcation from '@/components/sections/about-devcation';
import Tracks from '@/components/sections/tracks';
import Judges from '@/components/sections/judges';
import Mentors from '@/components/sections/mentors';
import Timeline from '@/components/sections/timeline';
import Prizes from '@/components/sections/prizes';
import Sponsors from '@/components/sections/sponsors';
import FAQ from '@/components/sections/faq';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutGdg />
      <AboutDevcation />
      <Tracks />
      <Judges />
      <Mentors />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  );
}
