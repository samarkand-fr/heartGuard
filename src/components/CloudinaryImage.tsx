"use client";
import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function CloudinaryImage({ src, alt, width = 500, height = 500 }: CloudinaryImageProps) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      crop="fill"
      className="rounded-lg shadow-lg"
    />
  );
}
