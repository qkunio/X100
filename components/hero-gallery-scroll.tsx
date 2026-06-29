'use client'

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const IMAGES = [
  "/qkunio/Jeju-Korea-2.JPG",
  "/qkunio/Jeju-Korea-1.JPG",
  "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-1.JPG",
  "/qkunio/%E5%8E%A6%E9%97%A8-%E7%A6%8F%E5%BB%BA-1.JPG",
  "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-2.JPG",
]

export function HeroGalleryScroll() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale
        className="relative z-10 px-6 text-center"
        style={{ translate: "-50% -30%" }}
      >
        <motion.p
          className="font-schools-out max-w-[92vw] text-[clamp(3.25rem,14vw,4.5rem)] leading-[1.15] tracking-normal text-primary text-backdrop-invert md:max-w-5xl md:text-[clamp(4.5rem,10vw,6rem)] md:leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Lets Explore the World
        </motion.p>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroDemo1() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <AnimatedButton href="/about" variant="outline" icon={<ArrowRight size={16} />}>
              Learn more about my journey
            </AnimatedButton>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroDemo2() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant="fourCells"
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm text-stone-500 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
         <AnimatedButton href="/about" variant="outline" icon={<ArrowRight size={16} />}>
              Learn more about my journey
            </AnimatedButton>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}

export function HeroDemo3() {
  return (
    <ContainerScroll className="h-[350vh] bg-slate-900 text-slate-100">
      <BentoGrid
        variant="threeCells"
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              width="100%"
              height="100%"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>
      <ContainerScale className="text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
          Your Animated Hero
        </h1>
        <p className="my-6 max-w-xl text-sm opacity-80 md:text-base">
          Yet another hero section, this time with scroll trigger animations,
          animating the hero content with motion.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-indigo-700 px-4 py-2 font-medium hover:bg-indigo-400">
            Get Started
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium text-white"
          >
            Learn more
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}
