"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 768 // Check if device is mobile
      
      // Update scrolled state
      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Handle header visibility - only hide after 20px scroll on mobile
      if (isMobile) {
        if (currentScrollY > 20 && currentScrollY > lastScrollY) {
          // Scrolling down and past 20px
          setIsVisible(false)
        } else {
          // Scrolling up or before 20px
          setIsVisible(true)
        }
      } else {
        // Desktop behavior
        if (currentScrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-2 left-2 right-2 z-50 transition-all duration-300 header-height ${
        isScrolled ? "bg-background backdrop-blur-md shadow-sm" : "bg-transparent"
      } ${!isVisible ? "-translate-y-[80px]" : "translate-y-0"}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* <Logo /> */}
            <Link
              href="/"
              className={`font-old-london p-3 text-2xl  duration-300w-10 h-10 flex items-center justify-center rounded-full bg-background/90 text-primary transition-colors ${
                isScrolled || pathname !== "/" ? "text-primary" : "text-primary"
              }`}
            >
              Qkunio
            </Link>
          </div>
          {/* Theme Toggle at the end of the header */}
          <div className="flex-shrink-0 md:block toggle-container">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
