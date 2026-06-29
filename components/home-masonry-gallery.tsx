"use client"

import { motion } from "framer-motion"

const QKUNIO_PHOTOS = [
  {
    id: "jeju-korea-2",
    src: "/qkunio/Jeju-Korea-2.JPG",
    width: 3240,
    height: 4864,
    alt: "Jeju Korea frame 2",
  },
  {
    id: "jeju-korea-1",
    src: "/qkunio/Jeju-Korea-1.JPG",
    width: 1000,
    height: 750,
    alt: "Jeju Korea frame 1",
  },
  {
    id: "jeju-korean-3",
    src: "/qkunio/Jeju-Korean-3.JPG",
    width: 3621,
    height: 2926,
    alt: "Jeju Korean frame 3",
  },
  {
    id: "xiamen-fujian-1",
    src: "/qkunio/%E5%8E%A6%E9%97%A8-%E7%A6%8F%E5%BB%BA-1.JPG",
    width: 3629,
    height: 1901,
    alt: "Xiamen Fujian frame 1",
  },
  {
    id: "longyan-fujian-1",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-1.JPG",
    width: 1080,
    height: 1920,
    alt: "Longyan Fujian frame 1",
  },
  {
    id: "longyan-fujian-2",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-2.JPG",
    width: 1080,
    height: 1920,
    alt: "Longyan Fujian frame 2",
  },
  {
    id: "longyan-fujian-3",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-3.JPG",
    width: 810,
    height: 1440,
    alt: "Longyan Fujian frame 3",
  },
]

export function HomeMasonryGallery() {
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
            <h2 className="font-schools-out max-w-3xl text-5xl leading-tight tracking-normal text-primary md:text-7xl">
              Look for More
            </h2>
          </div>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 2xl:columns-4">
          {QKUNIO_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: (index % 6) * 0.04 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div
                className="group relative w-full overflow-hidden rounded-3xl bg-secondary"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
