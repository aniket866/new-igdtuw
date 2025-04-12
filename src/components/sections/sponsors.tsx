import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
  {
    id: 'rc-igdtuw',
    name: 'RC IGDTUW',
    logo: 'https://ext.same-assets.com/844291147/190227351.png',
    url: 'https://sites.google.com/view/rcigdtuw/home'
  },
  {
    id: 'unstop',
    name: 'Unstop',
    logo: 'https://ext.same-assets.com/844291147/3958719899.png',
    url: 'https://unstop.com/'
  },
  {
    id: 'geekroom',
    name: 'GeekRoom',
    logo: 'https://ext.same-assets.com/844291147/1901213000.jpeg',
    url: 'https://www.geekroom.in/'
  },
  {
    id: 'sprint',
    name: 'Sprint India',
    logo: 'https://ext.same-assets.com/844291147/3393283192.png',
    url: 'https://www.sprintindia.work/about-us/'
  },
  {
    id: 'interview-buddy',
    name: 'Interview Buddy',
    logo: 'https://ext.same-assets.com/844291147/1437394304.jpeg',
    url: 'https://dev.interviewbuddy.in/'
  },
  {
    id: 'codecrafters',
    name: 'CodeCrafters',
    logo: 'https://ext.same-assets.com/844291147/2116536155.jpeg',
    url: 'https://codecrafters.io/'
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-padding bg-darker-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[30%] h-[40%] bg-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[30%] bg-blue-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm">
            <div className="text-teal font-medium">Our amazing partners</div>
          </div>
        </div>

        <h2 className="section-title">Sponsors</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-light-gray/80">
            Devcation'25 is proudly supported by these incredible organizations that share our vision
            of fostering innovation and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        <div className="mt-16 max-w-lg mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal mb-4">Become a Sponsor</h3>
          <p className="text-light-gray mb-6">
            Support the next generation of innovators and gain visibility in the tech community.
            Contact us to learn about sponsorship opportunities.
          </p>
          <Link
            href="mailto:dscigdtuw@gmail.com"
            className="inline-block px-6 py-3 bg-teal text-dark-blue font-medium rounded-lg hover:bg-teal/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

interface SponsorCardProps {
  sponsor: {
    id: string;
    name: string;
    logo: string;
    url: string;
  }
}

function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <Link
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="h-32 p-4 bg-medium-blue/20 rounded-xl border border-teal/10 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-medium-blue/40 hover:shadow-[0_0_15px_rgba(28,168,213,0.15)]">
        <div className="relative w-full h-full">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            fill
            className="object-contain p-4"
          />
        </div>
      </div>
    </Link>
  );
}
