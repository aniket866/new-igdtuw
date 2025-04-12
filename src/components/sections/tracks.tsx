import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const tracks = [
  {
    id: 'healthtech',
    name: 'HealthTech',
    icon: 'https://ext.same-assets.com/844291147/2750879449.png',
    color: 'from-blue-500 to-teal',
    description: 'Develop innovative solutions for healthcare challenges using technology.'
  },
  {
    id: 'edtech',
    name: 'EdTech',
    icon: 'https://ext.same-assets.com/844291147/3625480128.png',
    color: 'from-emerald-500 to-teal',
    description: 'Create tools and platforms that enhance the learning experience.'
  },
  {
    id: 'sustainable',
    name: 'Sustainable Development',
    icon: 'https://ext.same-assets.com/844291147/738489222.png',
    color: 'from-indigo-500 to-blue-400',
    description: 'Build solutions that address environmental challenges and promote sustainability.'
  },
  {
    id: 'fintech',
    name: 'FinTech',
    icon: 'https://ext.same-assets.com/844291147/2317696455.png',
    color: 'from-rose-500 to-orange-400',
    description: 'Develop applications that innovate in the financial technology space.'
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="section-padding bg-darker-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[40%] h-[60%] bg-teal/5 rounded-full blur-[120px] transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[40%] h-[60%] bg-blue-500/5 rounded-full blur-[120px] transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm">
            <div className="text-teal font-medium">Choose your path</div>
          </div>
        </div>

        <h2 className="section-title">Tracks</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-light-gray/80">
            Select from our diverse challenge tracks to showcase your skills and build impactful solutions.
            Each track focuses on a different domain where technology can make a significant difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TrackProps {
  track: {
    id: string;
    name: string;
    icon: string;
    color: string;
    description: string;
  }
}

function TrackCard({ track }: TrackProps) {
  return (
    <Card className="track-card border-none h-full">
      <CardContent className="p-6 pt-8 flex flex-col h-full items-center text-center">
        <div className="mb-6 relative w-20 h-20">
          <Image
            src={track.icon}
            alt={`${track.name} icon`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <h3 className="text-xl font-bold text-teal mb-3">{track.name}</h3>

        <p className="text-light-gray/80 text-sm">
          {track.description}
        </p>

        <div className={`mt-6 w-full h-1 bg-gradient-to-r ${track.color} rounded-full opacity-50`} />
      </CardContent>
    </Card>
  );
}
