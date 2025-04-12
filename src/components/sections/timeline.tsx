import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';

const timelineEvents = [
  {
    id: 'opening',
    title: 'Opening Ceremony & Registration',
    description: 'Submission for all Mini Events and the Registration for the Hackathon Starts',
    date: 'April 4th, 2025'
  },
  {
    id: 'hackstart',
    title: 'Hacking Period Starts!',
    description: 'Get ready to code, create, and innovate!',
    date: 'April 8th, 2025'
  },
  {
    id: 'hackend',
    title: 'Hacking Period Ends',
    description: 'Make sure to wrap up your projects and prepare for submission.',
    date: 'April 12th, 2025'
  },
  {
    id: 'mentorship',
    title: 'Mentorship Round Starts',
    description: 'Providing mentorship and feedback for every submitted project.',
    date: 'April 13th, 2025'
  },
  {
    id: 'closing',
    title: 'Final pitching and closing ceremony',
    description: 'Don`t miss out on this memorable event!',
    date: 'April 15th, 2025'
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding bg-darker-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[40%] h-[50%] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm">
            <div className="text-teal font-medium">Mark your calendar</div>
          </div>
        </div>

        <h2 className="section-title">Timeline</h2>

        <div className="max-w-4xl mx-auto">
          <div className="pl-4 md:pl-0">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.id}
                event={event}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
  };
  isLast: boolean;
}

function TimelineItem({ event, isLast }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
        <div className="md:w-1/3">
          <h3 className="text-xl md:text-2xl font-bold text-teal mb-2">
            {event.title}
          </h3>
          <div className="flex items-center text-light-gray/70 text-sm mb-4 md:mb-0">
            <CalendarDays className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>
        </div>

        <div className="md:w-2/3 bg-medium-blue/40 backdrop-blur-sm p-5 rounded-xl border border-teal/10 shadow-lg shadow-teal/5">
          <p className="text-light-gray">{event.description}</p>

          <div className="mt-3 flex items-center text-teal/70 text-xs">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            <span>Key Milestone</span>
          </div>
        </div>
      </div>
    </div>
  );
}
