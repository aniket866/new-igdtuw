import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    id: 'twitter',
    icon: Twitter,
    href: 'https://twitter.com/gdsc_igdtuw',
    label: 'Twitter'
  },
  {
    id: 'facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/GDSCIGDTUW/',
    label: 'Facebook'
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/dscigdtuw/mycompany/',
    label: 'LinkedIn'
  },
  {
    id: 'instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/gdsc_igdtuw',
    label: 'Instagram'
  },
  {
    id: 'youtube',
    icon: Youtube,
    href: 'https://www.youtube.com/@DSCIGDTUW',
    label: 'YouTube'
  }
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-darker-blue pt-16 pb-8 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-10 h-10 mr-2">
                <Image
                  src="https://ext.same-assets.com/844291147/3393283192.png"
                  alt="Devcation Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-teal font-bold text-xl">Devcation'25</span>
            </Link>

            <p className="text-light-gray/80 mb-6 max-w-md">
              A week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women
              that celebrates diversity in the TechForGood Domain.
            </p>

            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-medium-blue/40 hover:bg-medium-blue/60 text-teal rounded-full transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-teal mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-light-gray hover:text-teal transition-colors">Home</Link>
              <Link href="#about" className="text-light-gray hover:text-teal transition-colors">About GDG IGDTUW</Link>
              <Link href="#aboutdev" className="text-light-gray hover:text-teal transition-colors">About Devcation'25</Link>
              <Link href="#tracks" className="text-light-gray hover:text-teal transition-colors">Tracks</Link>
              <Link href="#timeline" className="text-light-gray hover:text-teal transition-colors">Timeline</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold text-teal mb-6">Contact Us</h3>
            <div className="flex items-start space-x-3 mb-4">
              <Mail className="h-5 w-5 text-teal mt-0.5" />
              <a
                href="mailto:dscigdtuw@gmail.com"
                className="text-light-gray hover:text-teal transition-colors"
              >
                dscigdtuw@gmail.com
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-light-gray font-medium mb-3">Send us a message</h4>
              <p className="text-light-gray/70 text-sm">
                Send your message here and we will try to get back to you as soon as possible.
              </p>

              <div className="mt-4">
                <a
                  href="mailto:dscigdtuw@gmail.com"
                  className="inline-block px-4 py-2 bg-teal text-dark-blue font-medium rounded-lg hover:bg-teal/90 transition-colors"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal/10 pt-8 mt-12">
          <p className="text-center text-light-gray/60 text-sm">
            © {new Date().getFullYear()} Devcation'25 | Google Developer Groups - IGDTUW. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
