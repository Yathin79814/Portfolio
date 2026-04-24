export const FRAME_COUNT = 240;

export const preloadImages = (): HTMLImageElement[] => {
  if (typeof window === "undefined") return [];
  
  const images: HTMLImageElement[] = [];
  for (let i = 0; i < FRAME_COUNT; i++) {
    const img = new Image();
    const idx = (i + 1).toString().padStart(3, "0");
    img.src = `/sequence/ezgif-frame-${idx}.png`;
    images.push(img);
  }
  return images;
};
