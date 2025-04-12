import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const mentors = [
  {
    id: 'radhika',
    name: 'Radhika Bansal',
    image: 'https://ext.same-assets.com/844291147/3383682840.jpeg',
    linkedIn: 'https://www.linkedin.com/in/radhika403/'
  },
  {
    id: 'sanidhya',
    name: 'Sanidhya Goel',
    image: 'https://ext.same-assets.com/844291147/1654619510.jpeg',
    linkedIn: 'https://www.linkedin.com/in/sanidhyagoel18/'
  },
  {
    id: 'tejaswi',
    name: 'Tejaswi Tyagi',
    image: 'https://ext.same-assets.com/844291147/4161236347.jpeg',
    linkedIn: 'https://www.linkedin.com/in/tejaswi-tyagi/'
  },
  {
    id: 'akanksha',
    name: 'Akanksha Jha',
    image: 'https://ext.same-assets.com/844291147/2781346206.svg',
    linkedIn: 'https://www.linkedin.com/in/akanksha-jha-8609a422a'
  },
  {
    id: 'vikranth',
    name: 'Vikranth Udandarao',
    image: 'https://ext.same-assets.com/844291147/1781543147.jpeg',
    linkedIn: 'https://www.linkedin.com/in/vikranth-udandarao/'
  },
  {
    id: 'rudra',
    name: 'Rudra Pratap Dash',
    image: 'https://ext.same-assets.com/844291147/2825720357.jpeg',
    linkedIn: 'https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267/'
  },
  {
    id: 'aishvi',
    name: 'Aishvi Guleria',
    image: 'https://ext.same-assets.com/844291147/518744092.png',
    linkedIn: 'https://www.linkedin.com/in/aishvi-guleria-09a04222b'
  },
  {
    id: 'pratham',
    name: 'Pratham Batra',
    image: 'https://ext.same-assets.com/844291147/1303750506.jpeg',
    linkedIn: 'https://www.linkedin.com/in/pratham1908/'
  }
];

export default function Mentors() {
  return (
    <section id="mentors" className="section-padding bg-gradient-to-b from-dark-blue to-darker-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[40%] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Mentors</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-light-gray/80">
            Our mentors are industry experts who will guide you through the hackathon,
            helping you refine ideas and overcome technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MentorProps {
  mentor: {
    id: string;
    name: string;
    image: string;
    linkedIn: string;
  }
}

function MentorCard({ mentor }: MentorProps) {
  return (
    <Card className="bg-medium-blue/40 border-none overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(28,168,213,0.2)]">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent opacity-60" />

          <Link
            href={mentor.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 p-1.5 rounded-full bg-teal/80 hover:bg-teal transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5 text-dark-blue" />
          </Link>
        </div>

        <div className="p-3 text-center">
          <h3 className="text-sm font-medium text-teal line-clamp-1">{mentor.name}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
