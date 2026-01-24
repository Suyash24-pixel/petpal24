import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is PetPal free to use?",
    answer: "Yes! PetPal is completely free to download and use. We believe every pet deserves great care, regardless of budget. We may introduce optional premium features in the future, but the core app will always be free.",
  },
  {
    question: "Which pets is PetPal for?",
    answer: "Right now, PetPal is designed for dogs and cats—the UK's most popular pets! We're working on adding support for rabbits, guinea pigs, and other small animals soon. Let us know which pets you'd like to see!",
  },
  {
    question: "Do I need to be techy to use it?",
    answer: "Not at all! We designed PetPal to be as simple as possible. If you can use WhatsApp or Instagram, you can use PetPal. Our friendly interface guides you through everything step by step.",
  },
  {
    question: "Is my data and my pet's data safe?",
    answer: "Absolutely. Your privacy and your pet's data are our top priority. All data is encrypted, stored securely in the UK, and we never sell your information to third parties. Your pet's details stay yours.",
  },
  {
    question: "When is insurance integration coming?",
    answer: "We're working hard on it! We're currently partnering with leading UK pet insurers to make claims and policy management seamless. Join the waitlist to be the first to know when it launches.",
  },
  {
    question: "Can I use PetPal on Android?",
    answer: "Not yet, but soon! We launched on iOS first, but Android is our next priority. Join the waitlist and we'll let you know the moment it's ready for you.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-24">
      <div className="container">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
            Got questions?<br className="hidden md:block" /> We've got answers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about PetPal. Can't find what you're looking for? 
            Just reach out—we're always happy to help!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-border/30 px-6 shadow-soft data-[state=open]:shadow-card transition-all"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
