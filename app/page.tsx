"use client"

import { ArrowRight } from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion"
import { HeroGalleryScroll } from "@/components/hero-gallery-scroll"
import { HomeMasonryGallery } from "@/components/home-masonry-gallery"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Spacer for header */}
      <div className="header-height"></div>

      {/* Hero Section with Slider */}
      <HeroGalleryScroll />

      <HomeMasonryGallery />

       {/* Call to Action */}
      <section className="z-10 min-w-[90%] justify-self-center mr-4 ml-4 py-20 lg:my-20 sm:mt-0 sm:mb-20 px-4 md:px-8 px-2 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">Collaborate?</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">
            Whether you're looking for prints, licensing, or a custom photography project, feel free to get in touch.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
            Get in Touch
          </AnimatedButton>
        </motion.div>
      </section>

    </div>
  )
}
