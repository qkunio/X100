"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { getAllCollections } from "@/lib/collections"
import { useShutterSound } from "./sound-effects"

const FEATURED_PHOTO_IDS = [
  "morocco-2",
  "new-zealand-3",
  "tokyo-7",
  "bali-4",
  "iceland-12",
  "morocco-11",
  "tokyo-18",
  "new-zealand-17",
  "bali-13",
  "iceland-7",
  "morocco-19",
  "tokyo-20",
  "new-zealand-8",
  "bali-1",
  "iceland-4",
]

export function HomeMasonryGallery() {
  const collections = getAllCollections()
  const { playShutterSound } = useShutterSound()

  const photos = FEATURED_PHOTO_IDS.flatMap((photoId) => {
    const collection = collections.find((item) =>
      item.photos.some((photo) => photo.id === photoId)
    )
    const photo = collection?.photos.find((item) => item.id === photoId)

    return collection && photo ? [{ collection, photo }] : []
  })

  return (
    <section className="relative z-10 bg-background px-4 pb-24 pt-6 md:px-8 md:pb-32">
      <div className="mx-auto max-w-[1800px]">
        <motion.div
          className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-120px" }}
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Selected Frames
            </p>
            <h2 className="max-w-3xl text-4xl text-primary md:text-6xl">
              The story keeps falling into place.
            </h2>
          </div>
          <Link
            href="/showcase"
            onClick={playShutterSound}
            className="group inline-flex items-center gap-2 self-start text-sm text-primary transition-colors hover:text-primary/70 md:self-auto"
          >
            View all collections
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4">
          {photos.map(({ collection, photo }, index) => (
            <motion.div
              key={photo.id}
              className="mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: (index % 6) * 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <Link
                href={`/collections/${collection.slug}`}
                onClick={playShutterSound}
                className="group block overflow-hidden rounded-3xl bg-secondary"
                aria-label={`Open ${collection.title}`}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center justify-between gap-4 text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
                      <span className="text-sm">{collection.title}</span>
                      <ArrowRight
                        size={16}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
