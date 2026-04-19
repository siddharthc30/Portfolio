import Image from "next/image";

type BannerProps = {
  /** Drop your banner image path here, e.g. "/banner.jpg"  
   *  Leave empty to show the gradient placeholder. */
  src?: string;
  alt?: string;
};

export function Banner({ src, alt = "Profile banner" }: BannerProps) {
  return (
    <div className="relative w-full h-52 sm:h-64 overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
        />
      ) : (
        <div className="absolute inset-0 banner-gradient" aria-hidden="true" />
      )}
      {/* Bottom fade so banner dissolves into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
