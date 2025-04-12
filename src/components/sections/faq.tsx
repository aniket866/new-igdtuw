import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: 'who-contribute',
    question: 'Who can contribute?',
    answer: 'Devcation is open to anyone with an interest in technology, innovation, and problem-solving. Participants can include students, developers, designers, entrepreneurs, and professionals from various backgrounds.'
  },
  {
    id: 'reach-out',
    question: 'Where can we reach out in case of queries?',
    answer: 'You can reach out to us on our Discord Server with any queries. Kindly use the doubt channel for the same!'
  },
  {
    id: 'coding-exp',
    question: 'Do I need to have coding experience to participate?',
    answer: 'While coding experience is beneficial, it\'s not always necessary to participate in a hackathon. Many hackathons welcome participants with diverse skill sets, including design, business development, marketing, and project management. If you\'re a beginner you can also look at our mini events'
  },
  {
    id: 'after-hackathon',
    question: 'What happens after the hackathon ends?',
    answer: 'After the hackathon concludes, top 10 teams will be invited to present their projects to judges and fellow participants during the final pitching round at IGDTUW. Winners will be announced, and prizes awarded based on the judging criteria. Date for this is 15th April, 2025.'
  },
  {
    id: 'stay-updated',
    question: 'How can I stay updated on hackathon announcements and events?',
    answer: 'Stay informed about Devcation\'25 by joining our Discord Server. Know more about upcoming hackathons and events by GDG IGDTUW by joining our GDG Chapter.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-dark-blue relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="inline-block px-4 py-2 rounded-full bg-teal/10 border border-teal/20 backdrop-blur-sm">
            <div className="text-teal font-medium">Have questions?</div>
          </div>
        </div>

        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-teal/10">
                <AccordionTrigger className="text-left font-medium text-light-gray hover:text-teal py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-light-gray/80 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://discord.gg/eG4YP3gA48"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-medium-blue/40 hover:bg-medium-blue/60 text-teal border border-teal/20 rounded-lg transition-colors"
          >
            Join Discord
          </a>

          <a
            href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-medium-blue/40 hover:bg-medium-blue/60 text-teal border border-teal/20 rounded-lg transition-colors"
          >
            Join WhatsApp
          </a>

          <a
            href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal text-dark-blue font-medium rounded-lg hover:bg-teal/90 transition-colors"
          >
            Join Our Chapter
          </a>
        </div>
      </div>
    </section>
  );
}
