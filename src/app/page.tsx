"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ACE"
      button={{
        text: "Start Project",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "sparkles-gradient",
      }}
      title="Where Luxury Meets Digital Excellence"
      description="Ace Web Design transforms your vision into a high-converting digital masterpiece. We build bespoke web experiences that define brands."
      tag="PREMIUM AGENCY"
      buttons={[
        {
          text: "Explore Work",
          href: "#features",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/a-ultra-modern-luxury-web-design-agency--1774878367654-45c6e9d3.png"
      imageAlt="Ace Web Design Agency Hero"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Sophisticated Design for Growth"
      description="At Ace, we believe the best websites don't just look luxurious; they work as powerful engines for your business. Every pixel serves a purpose, every interaction is crafted for conversion."
      bulletPoints={[
        {
          title: "Bespoke Architecture",
          description: "Custom coded solutions, no templates.",
        },
        {
          title: "Conversion Focus",
          description: "Design that turns visitors into loyal clients.",
        },
        {
          title: "Luxury Standard",
          description: "Unmatched aesthetic detail at every touchpoint.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/professional-design-workspace-with-sleek-1774878370733-fbb08ee0.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: 1,
          tag: "UX/UI",
          title: "Custom UI Design",
          subtitle: "Crafted for clarity",
          description: "Beautifully intuitive interfaces that guide users naturally.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/sleek-mobile-app-interface-mockup-on-a-d-1774878370046-a12e446f.png",
        },
        {
          id: 2,
          tag: "Sales",
          title: "E-Commerce Engines",
          subtitle: "Built for scale",
          description: "High-converting stores designed to maximize revenue.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/modern-e-commerce-interface-mockup-displ-1774878369270-30c20788.png",
        },
        {
          id: 3,
          tag: "Brand",
          title: "Identity & Strategy",
          subtitle: "Define your legacy",
          description: "Comprehensive design systems that align with your vision.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/minimalist-branding-identity-showcase-bu-1774878370197-fb57919e.png",
        },
      ]}
      title="Expertise Refined"
      description="We specialize in high-impact digital solutions that elevate your online presence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "CEO",
          testimonial: "Ace transformed our brand from dated to premium. The ROI was immediate.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/portrait-of-a-confident-successful-ceo-p-1774878370228-32327326.png?_wi=1",
        },
        {
          id: "2",
          name: "David M.",
          role: "Creative Director",
          testimonial: "Sophisticated design, unmatched attention to detail. True professionals.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/portrait-of-a-creative-director-studio-l-1774878368085-7dadad12.png",
        },
        {
          id: "3",
          name: "Emily K.",
          role: "Founder",
          testimonial: "My site looks like a high-end fashion magazine, but performs like a machine.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/portrait-of-a-happy-tech-founder-studio--1774878370285-bc9d42b0.png",
        },
        {
          id: "4",
          name: "Marcus L.",
          role: "Marketing Manager",
          testimonial: "The design process was smooth, and the result is absolutely stellar.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/portrait-of-a-marketing-manager-professi-1774878371788-04182fbf.png",
        },
        {
          id: "5",
          name: "Elena R.",
          role: "Product Lead",
          testimonial: "An incredible eye for detail that completely leveled up our product landing page.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcXR0o4f3w2hcqqi6WPNix2hgO/portrait-of-a-confident-successful-ceo-p-1774878370228-32327326.png?_wi=2",
        },
      ]}
      title="What Partners Say"
      description="The standard of excellence our clients rely on."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you only work with luxury brands?",
          content: "We work with any brand that values design excellence and high-end results.",
        },
        {
          id: "q2",
          title: "What is the typical project timeline?",
          content: "Projects generally range from 6 to 12 weeks depending on scope.",
        },
        {
          id: "q3",
          title: "Do you provide ongoing support?",
          content: "Yes, we offer premium maintenance packages to keep your site at peak performance.",
        },
      ]}
      title="Frequently Asked"
      description="Common questions about working with Ace."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="READY TO START?"
      title="Let's Build Your Legacy"
      description="Get in touch to discuss your vision and see how Ace can elevate your agency."
      buttons={[
        {
          text: "Apply Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Agency",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Work",
              href: "#features",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="ACE"
      copyrightText="© 2025 ACE Design Agency."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
