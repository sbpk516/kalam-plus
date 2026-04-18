import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { thadmFAQ } from '@/data/thadm'

export function ThadmFAQ() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 lg:py-36">
      <div className="section-container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500">
            Frequently asked
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-[56px] lg:leading-[1.05]">
            Questions,
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              answered.
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion className="space-y-3">
            {thadmFAQ.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger value={item.id}>{item.question}</AccordionTrigger>
                <AccordionContent value={item.id}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
