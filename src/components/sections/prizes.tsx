import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const prizeCategories = [
  {
    id: 'winners',
    title: 'Hack & Solve Winners',
    description: 'Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons.'
  },
  {
    id: 'mini',
    title: 'Mini Event Winners',
    description: 'Goodies, certificates, social media shoutouts, unstop coupons.'
  },
  {
    id: 'finalists',
    title: 'All Finalists',
    description: 'Exciting goodies, certificates, unstop coupons'
  },
  {
    id: 'participants',
    title: 'All Participants',
    description: 'Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all.'
  }
];

export default function Prizes() {
  return (
    <section id="prizes" className="section-padding bg-dark-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm">
            <div className="text-teal font-medium">What you can win</div>
          </div>
        </div>

        <h2 className="section-title">Prizes</h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-light-gray/80">
            Get rewarded for your innovation, creativity, and technical excellence
            with exciting prizes and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {prizeCategories.map((category) => (
            <PrizeCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center px-4 py-8 bg-medium-blue/20 backdrop-blur-sm rounded-2xl border border-teal/10">
          <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-teal mb-3">Special Awards</h3>
          <p className="text-light-gray">
            Additional prizes will be awarded for Best UI/UX Design, Most Innovative Solution,
            Best Use of AI, and Best Beginner Hack. Stay tuned for more details!
          </p>
        </div>
      </div>
    </section>
  );
}

interface PrizeCardProps {
  category: {
    id: string;
    title: string;
    description: string;
  }
}

function PrizeCard({ category }: PrizeCardProps) {
  return (
    <Card className="bg-medium-blue/30 border-none overflow-hidden h-full transition-all duration-300 hover:bg-medium-blue/50 hover:shadow-[0_0_25px_rgba(28,168,213,0.15)]">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-5 w-fit">
          <div className="bg-teal/10 p-2.5 rounded-xl">
            <Trophy
              className={`h-6 w-6 ${
                category.id === 'winners'
                  ? 'text-yellow-400'
                  : category.id === 'mini'
                    ? 'text-gray-300'
                    : category.id === 'finalists'
                      ? 'text-amber-500'
                      : 'text-teal'
              }`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-teal mb-3">{category.title}</h3>

        <p className="text-light-gray text-sm">
          {category.description}
        </p>
      </CardContent>
    </Card>
  );
}
