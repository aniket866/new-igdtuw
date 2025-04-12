import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-teal transition-colors px-3 py-2 text-sm font-medium"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="bg-darker-blue/90 backdrop-blur-sm sticky top-0 z-50 border-b border-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="https://ext.same-assets.com/844291147/3393283192.png"
                  alt="Devcation Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="text-teal font-bold text-xl">Devcation'25</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#aboutdev">Devcation'25</NavLink>
              <NavLink href="#timeline">Timeline</NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-teal px-3 py-2 text-sm font-medium">
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-medium-blue border-dark-blue">
                  <DropdownMenuItem asChild>
                    <Link href="#tracks" className="hover:bg-teal/10 cursor-pointer">
                      Tracks
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#prizes" className="hover:bg-teal/10 cursor-pointer">
                      Prizes
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="#sponsors" className="hover:bg-teal/10 cursor-pointer">
                      Sponsors
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <NavLink href="#contact">Contact</NavLink>

              <Link href="https://discord.gg/eG4YP3gA48" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  size="sm"
                  className="ml-4 bg-teal hover:bg-teal/80 text-dark-blue"
                >
                  Join Discord
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-teal"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
