import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionContextValue {
  openItems: string[]
  toggle: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

interface AccordionProps {
  children: React.ReactNode
  defaultValue?: string[]
  className?: string
}

export function Accordion({ children, defaultValue = [], className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultValue)

  const toggle = React.useCallback((value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }, [])

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn('space-y-4', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { openItems } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/5 transition-all duration-300',
        isOpen && 'border-white/20',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({ value, children, className }: AccordionTriggerProps) {
  const { openItems, toggle } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        'flex w-full items-center justify-between p-6 text-left text-lg font-medium text-white transition-colors hover:text-white/90',
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-5 w-5 text-gray-400 transition-transform duration-300',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  )
}

interface AccordionContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionContent({ value, children, className }: AccordionContentProps) {
  const { openItems } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('px-6 pb-6 text-gray-400', className)}>{children}</div>
    </div>
  )
}
