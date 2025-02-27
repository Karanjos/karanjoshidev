"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  ...props
}: ImageWrapperProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const srcPath = theme === "dark" ? srcForDarkMode || src : src;

  return <Image src={srcPath} alt={alt} {...props} />;
};
export default ImageWrapper;
