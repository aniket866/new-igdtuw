import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight
} from 'lucide-react';

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-teal transition-colors"
  >
    <Icon size={20} />
  </Link>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark-blue pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[40%] bg-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <br />
              <span className="gradient-text">Devcation'25</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              A week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                className="bg-teal hover:bg-teal/90 text-dark-blue font-medium"
                size="lg"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <SocialLink href="https://twitter.com/gdsc_igdtuw" icon={Twitter} />
                <SocialLink href="https://www.facebook.com/GDSCIGDTUW/" icon={Facebook} />
                <SocialLink href="https://www.linkedin.com/company/dscigdtuw/mycompany/" icon={Linkedin} />
                <SocialLink href="https://www.instagram.com/gdsc_igdtuw" icon={Instagram} />
                <SocialLink href="https://www.youtube.com/@DSCIGDTUW" icon={Youtube} />
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-10 text-sm text-gray-400">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-teal font-bold text-2xl">4.6/5+</span>
                <span>Hacker rating</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-teal font-bold text-2xl">300+</span>
                <span>Hacks</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-teal font-bold text-2xl">25+</span>
                <span>Speakers and mentors</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-teal font-bold text-2xl">500+</span>
                <span>Hackers</span>
              </div>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
            <Image
              src="https://ext.same-assets.com/844291147/1901213000.jpeg"
              alt="Devcation Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
