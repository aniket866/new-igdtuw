import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutDevcation() {
  return (
    <section id="aboutdev" className="section-padding bg-gradient-to-b from-dark-blue to-darker-blue relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-teal/5 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[40%] bg-blue-400/5 rounded-full blur-[100px] transform -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">
          About <span className="gradient-text">Devcation'25</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-medium-blue/40 border-none shadow-xl backdrop-blur-sm overflow-hidden mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-teal/20 to-blue-600/20 p-4">
                    <Image
                      src="https://ext.same-assets.com/844291147/1901213000.jpeg"
                      alt="Devcation'25"
                      width={300}
                      height={300}
                      className="object-contain animate-float"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <p className="text-light-gray leading-relaxed">
                    <span className="font-semibold text-teal">Devcation</span> is a week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation'25 hackathon. These events are designed to spark your creativity, encourage innovative thinking, and help you craft tech solutions that stand out.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-light-gray">
            What to expect at <span className="text-teal">Devcation'25</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Hackathon"
              description="A 5-day intensive coding challenge to build innovative solutions across multiple tracks"
              iconSrc="https://ext.same-assets.com/220664563/3783633550.svg"
            />

            <FeatureCard
              title="Workshops"
              description="Learn from industry experts through hands-on sessions on cutting-edge technologies"
              iconSrc="https://ext.same-assets.com/220664563/548389142.svg"
            />

            <FeatureCard
              title="Mentorship"
              description="Get guidance from experienced mentors to perfect your projects and ideas"
              iconSrc="https://ext.same-assets.com/220664563/260646423.svg"
            />

            <FeatureCard
              title="Networking"
              description="Connect with like-minded developers, designers, and tech enthusiasts"
              iconSrc="https://ext.same-assets.com/220664563/4061061103.svg"
            />

            <FeatureCard
              title="Prizes"
              description="Win exciting prizes, swag kits, and recognition for your innovative solutions"
              iconSrc="https://ext.same-assets.com/220664563/1998606599.svg"
            />

            <FeatureCard
              title="Learning"
              description="Expand your knowledge and skills through collaborative problem-solving"
              iconSrc="https://ext.same-assets.com/220664563/1367661487.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, iconSrc }: { title: string; description: string; iconSrc: string }) {
  return (
    <Card className="bg-medium-blue/40 border-none overflow-hidden h-full transition-all duration-300 hover:bg-medium-blue/70 hover:shadow-[0_0_15px_rgba(28,168,213,0.2)]">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 rounded-xl bg-dark-blue/50 w-fit">
          <div className="relative w-6 h-6">
            <Image
              src={iconSrc}
              alt={title}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </div>

        <h4 className="text-xl font-bold text-teal mb-2">{title}</h4>
        <p className="text-light-gray/80 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
