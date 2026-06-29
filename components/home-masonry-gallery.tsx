"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { withBasePath } from "@/lib/base-path"

const QKUNIO_PHOTOS = [
  {
    id: "jeju-korea-2",
    src: "/qkunio/Jeju-Korea-2.JPG",
    width: 3240,
    height: 4864,
    alt: "Jeju Korea frame 2",
    story: "傍晚的码头，把光收进水中",
  },
  {
    id: "jeju-korea-1",
    src: "/qkunio/Jeju-Korea-1.JPG",
    width: 1000,
    height: 750,
    alt: "Jeju Korea frame 1",
    story: "海面泛舟",
  },
  {
    id: "jeju-korean-3",
    src: "/qkunio/Jeju-Korean-3.JPG",
    width: 3621,
    height: 2926,
    alt: "Jeju Korean frame 3",
    story: "济州西线海边的钢琴",
  },
  {
    id: "xiamen-fujian-1",
    src: "/qkunio/%E5%8E%A6%E9%97%A8-%E7%A6%8F%E5%BB%BA-1.JPG",
    width: 3629,
    height: 1901,
    alt: "Xiamen Fujian frame 1",
    story: "海边日出，孤舟慢渡",
  },
  {
    id: "longyan-fujian-1",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-1.JPG",
    width: 1080,
    height: 1920,
    alt: "Longyan Fujian frame 1",
    story: "山城一角，清泉石上流",
  },
  {
    id: "longyan-fujian-2",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-2.JPG",
    width: 1080,
    height: 1920,
    alt: "Longyan Fujian frame 2",
    story: "老街的垂钓者",
  },
  {
    id: "longyan-fujian-3",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-3.JPG",
    width: 810,
    height: 1440,
    alt: "Longyan Fujian frame 3",
    story: "从山城到同济",
  },
  {
    id: "huangxing-park-shanghai-1",
    src: "/qkunio/%E9%BB%84%E5%85%B4%E5%85%AC%E5%9B%AD-%E4%B8%8A%E6%B5%B7-1.PNG",
    width: 1448,
    height: 1086,
    alt: "Huangxing Park Shanghai",
    story: "公园里的一小片安静，替城市保留了呼吸。",
  },
  {
    id: "jiading-library-tongji-1",
    src: "/qkunio/%E5%98%89%E5%AE%9A%E5%9B%BE%E4%B9%A6%E9%A6%86-%E5%90%8C%E6%B5%8E-1.JPG",
    width: 1266,
    height: 845,
    alt: "Jiading Library Tongji",
    story: "书页没有声音，光却在墙面上读了很久。",
  },
  {
    id: "longyan-fujian-4",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-4.JPG",
    width: 3488,
    height: 2378,
    alt: "Longyan Fujian frame 4",
    story: "回家的路，总有熟悉的坡度",
  },
  {
    id: "longyan-fujian-5",
    src: "/qkunio/%E9%BE%99%E5%B2%A9-%E7%A6%8F%E5%BB%BA-5.JPG",
    width: 2598,
    height: 4617,
    alt: "Longyan Fujian frame 5",
    story: "水库旁的卡车和牛群",
  },
  {
    id: "xiamen-fujian-2",
    src: "/qkunio/%E5%8E%A6%E9%97%A8-%E7%A6%8F%E5%BB%BA-2.JPG",
    width: 6000,
    height: 4000,
    alt: "Xiamen Fujian frame 2",
    story: "海边的颜色很松弛，所有远方都暂时停在眼前。",
  },
]

export function HomeMasonryGallery() {
  const [flippedPhotoIds, setFlippedPhotoIds] = useState<string[]>([])

  const togglePhoto = (photoId: string) => {
    setFlippedPhotoIds((currentPhotoIds) =>
      currentPhotoIds.includes(photoId)
        ? currentPhotoIds.filter((currentPhotoId) => currentPhotoId !== photoId)
        : [...currentPhotoIds, photoId]
    )
  }

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
              <button
                type="button"
                aria-label={photo.alt}
                aria-pressed={flippedPhotoIds.includes(photo.id)}
                onClick={() => togglePhoto(photo.id)}
                className="group block w-full cursor-pointer rounded-3xl text-left outline-none [perspective:1400px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              >
                <motion.div
                  className="relative size-full rounded-3xl shadow-sm transition-shadow duration-300 [transform-style:preserve-3d] group-hover:shadow-xl"
                  animate={{
                    rotateY: flippedPhotoIds.includes(photo.id) ? 180 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-3xl bg-secondary [backface-visibility:hidden]">
                    <img
                      src={withBasePath(photo.src)}
                      alt={photo.alt}
                      className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                  </div>
                  <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] gap-4 rounded-3xl border border-border bg-background p-4 text-primary shadow-inner [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-6">
                    <span className="font-fulu-melody text-2xl md:text-3xl">Qkunio</span>
                    <p className="font-written-sc flex items-center text-balance text-center text-[clamp(1.35rem,5vw,2.6rem)] leading-[1.45] text-primary">
                      {photo.story}
                    </p>
                    <span className="max-w-[12rem] text-xs text-muted-foreground md:text-sm">
                      {photo.alt}
                    </span>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
