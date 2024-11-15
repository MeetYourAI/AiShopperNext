import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

type SectionBlogHeroProps = {
  coverImage: string | StaticImageData;
  title: string;
  date: string;
  tag: string;
};

const SectionBlogHero: FC<SectionBlogHeroProps> = ({
  coverImage,
  title,
  date,
  tag,
}) => {
  return (
    <div className="mb-10">
      <div className="relative aspect-[16/7]">
        <Image
          src={coverImage}
          alt="cover image"
          className="object-cover"
          fill
        />
        <div className="absolute bottom-0 p-16 xl:w-2/3">
          <span className="inline-block bg-black px-2 py-1 text-sm text-white">
            {tag}
          </span>
          <h1 className="text-4xl font-medium text-white">{title}</h1>
          <p className="flex gap-4 text-sm text-white">
            <span>by Devsphere labs</span>
            <span>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionBlogHero;
