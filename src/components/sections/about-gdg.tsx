import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutGdg() {
  return (
    <section id="about" className="section-padding bg-dark-blue relative">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-teal/5 rounded-full blur-[150px] transform -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16">
          About <span className="text-white">GDG</span> IGDTUW
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-medium-blue/40 border-none overflow-hidden shadow-lg shadow-teal/5">
              <CardContent className="p-8">
                <p className="text-light-gray mb-6 leading-relaxed">
                  Here at GDG IGDTUW, we explore technology and use it to build products that brings about positive change in society. We conduct mentorship sessions, workshops, knowledge transfer sessions, hackathons, coding contests, open source programs, etc. where students from across the globe get to showcase their knowledge and develop their skillset.
                </p>

                <div className="flex items-center gap-3 relative">
                  <div className="relative w-7 h-7">
                    <Image
                      src="https://ext.same-assets.com/844291147/2018733539.svg"
                      alt="Achievement Icon"
                      width={28}
                      height={28}
                    />
                  </div>
                  <p className="text-sm text-light-gray/80">
                    We have helped more than 7000+ university students to expand their technical knowledge and skills.
                  </p>
                </div>

                <div className="flex justify-between mt-8">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://ext.same-assets.com/844291147/4252861238.svg"
                      alt="Icon 1"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://ext.same-assets.com/844291147/3394157246.svg"
                      alt="Icon 2"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://ext.same-assets.com/844291147/2116589346.svg"
                      alt="Icon 3"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal/10 rounded-full blur-[30px] -z-10" />

            <div className="relative rounded-2xl overflow-hidden border border-teal/20 shadow-lg shadow-teal/5">
              <Image
                src="https://ext.same-assets.com/844291147/2398135625.jpeg"
                alt="GDG IGDTUW Team"
                width={600}
                height={400}
                className="object-cover"
              />

              <div className="absolute bottom-4 right-4 backdrop-blur-md bg-dark-blue/70 p-3 rounded-lg border border-teal/20">
                <div className="relative w-6 h-6">
                  <Image
                    src="https://ext.same-assets.com/844291147/1367661487.svg"
                    alt="Google Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
