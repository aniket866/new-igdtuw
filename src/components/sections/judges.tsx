import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const judges = [
  {
    id: 'kartik',
    name: 'Kartik Mathur',
    image: 'https://ext.same-assets.com/844291147/1437394304.jpeg',
    linkedIn: 'https://www.linkedin.com/in/kartik-mathur/'
  },
  {
    id: 'vani',
    name: 'Vani Chitkara',
    image: 'https://ext.same-assets.com/844291147/2116536155.jpeg',
    linkedIn: 'https://www.linkedin.com/in/vani-chitkara/'
  },
  {
    id: 'aarnav',
    name: 'Aarnav Jindal',
    image: 'https://ext.same-assets.com/844291147/264581515.jpeg',
    linkedIn: 'https://www.linkedin.com/in/aarnavjindal/'
  }
];

export default function Judges() {
  return (
    <section id="judges" className="section-padding bg-dark-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[35%] h-[60%] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm">
            <div className="text-teal font-medium">Meet the experts</div>
          </div>
        </div>

        <h2 className="section-title">Judges</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-light-gray/80">
            Our distinguished panel of judges brings expertise from various domains to evaluate your innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {judges.map((judge) => (
            <JudgeCard key={judge.id} judge={judge} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface JudgeProps {
  judge: {
    id: string;
    name: string;
    image: string;
    linkedIn: string;
  }
}

function JudgeCard({ judge }: JudgeProps) {
  return (
    <Card className="bg-medium-blue/40 border-none overflow-hidden h-full hover:bg-medium-blue/70 transition-all duration-300">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={judge.image}
            alt={judge.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-medium-blue via-transparent to-transparent opacity-90" />
        </div>

        <div className="p-6 flex flex-col items-center text-center mt-auto">
          <h3 className="text-xl font-bold text-teal mb-1">{judge.name}</h3>

          <Link
            href={judge.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 p-2 rounded-full bg-teal/10 hover:bg-teal/20 transition-colors"
          >
            <Linkedin className="h-5 w-5 text-teal" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
