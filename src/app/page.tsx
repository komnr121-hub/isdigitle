import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { PartnersMarquee } from '@/components/sections/PartnersMarquee'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyUsSection, ProcessSection, TestimonialsSection, FAQSection, CTASection } from '@/components/sections/HomeSections'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { SITE } from '@/lib/data'

export const metadata: Metadata = {
  title: `${SITE.name} — Premium Digital Agency Network`,
  description: SITE.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersMarquee />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection preview />
      <FAQSection />
      <CTASection />
    </>
  )
}
