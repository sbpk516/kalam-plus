import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { thadmFAQ } from '@/data/thadm'

export function ThadmFAQ() {
  return (
    <section className="section-container section-padding">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white lg:text-4xl">
        Frequently asked{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
          questions
        </span>
      </h2>
      <div className="mx-auto max-w-2xl">
        <Accordion className="space-y-3">
          {thadmFAQ.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger value={item.id}>{item.question}</AccordionTrigger>
              <AccordionContent value={item.id}>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
