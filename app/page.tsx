"use client"

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
    </div>
  )
}
