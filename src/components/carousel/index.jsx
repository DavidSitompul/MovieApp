"use client"

import React, { useEffect, useState } from "react"

import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import Link from "next/link"

const CardCarousel = () => {
  const Banner = [
    {
      id: 34572,
      title: "Black Clover",
      url: "/images/blackclover.webp",
      score: 8.14,
      rating: "PG-13 - Teens 13 or older",
      genres: ["Action", "Comedy", "Fantasy"],
      synopsis:
        'Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the "Wizard King"—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.\n\nWhen they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno\'s Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno\'s voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a "Black Clover" giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!\n\n[Written by MAL Rewrite]',
    },
    {
      id: 51009,
      title: "JUJUTSU KAISEN (SEASON 2)",
      url: "/images/JJK.webp",
      score: 8.89,
      rating: "R17+",
      genres: ["Action", "Fantasy"],
      synopsis: "In the second season of Jujutsu Kaisen, Yuji Itadori and his friends face off against Suguru Geto and his followers in the Shibuya Incident, a battle that threatens to tear apart the world of jujutsu.",
    },
    {
      id: 32281,
      title: "Kimi no Na wa",
      url: "/images/Kimi.webp",
      score: 8.84,
      rating: "PG-13 - Teens 13 or older",
      genres: "Award Winning",
      synopsis:
        "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.[Written by MAL Rewrite]",
    },
  ]
  return (
    <>
      <Swiper
        className="bg-black md:drop-shadow-xl duration-300 transition-all  w-[95%] my-10 rounded-xl"
        // install Swiper modules
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
      >
        {Banner.map((b) => {
          return (
            <SwiperSlide key={b.id}>
              <div className="h-[550px] md:h-screen w-full relative">
                <Image alt={"img"} src={b.url} fill priority="true" />
                <div className="bg-black h-[70%] w-[200%] absolute -bottom-16 -left-32 blur-3xl opacity-70 "></div>
                <div className="absolute bottom-0 h-[70%] md:h-[45%] text-white">
                  <div className="relative h-full w-full px-5">
                    <div className=" h-full w-[65%] flex flex-col gap-y-3 md:gap-y-5 ">
                      <h1 className="font-bold text-[34px] drop-shadow-2xl line-clamp-2">{b.title}</h1>
                      <div className="flex flex-col md:flex-row gap-5">
                        <div className="bg-transparent border-2 text-sm font-light border-teal-300 rounded-lg h-[30px] md:h-[50px] lg:h-[30px] w-auto items-center flex p-2">{b.genres}</div>
                        <div className="bg-transparent border-2 text-sm font-light border-teal-300 rounded-lg h-[30px] md:h-[50px] lg:h-[30px] w-auto items-center flex p-2">{b.rating}</div>
                        <div className="bg-transparent border-2 text-sm font-light border-teal-300 rounded-lg h-[30px] md:h-[50px] lg:h-[30px] w-auto items-center flex p-2">{b.score}</div>
                      </div>
                      <p className="text-sm line-clamp-3">{b.synopsis}</p>
                      <Link href={`/anime/${b.id}`} className="bg-cyan-900 w-[150px] md:w-[20%] text-center p-2 rounded-sm hover:bg-opacity-90 lg:rounded-lg ">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default CardCarousel
