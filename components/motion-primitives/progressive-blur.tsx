'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';

export const GRADIENT_ANGLES = { top: 0, right: 90, bottom: 180, left: 270 };

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
  /** 1 = no darken, <1 darkens (try 0.7) */
  brightness?: number;
  /** 0-1 black tint applied over the masked area (try 0.08) */
  tint?: number;
} & HTMLMotionProps<'div'>;

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  brightness = 1,   // lower than 1 to darken
  tint = 0,         // small value adds subtle dark overlay
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);

  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map((pos, posIndex) =>
          `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${Math.min(
            pos * 100,
            100
          )}%`
        );
        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`;
        
        const filter = `blur(${index * blurIntensity}px) brightness(${brightness})`;

        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: gradient,

 
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%',
              WebkitMaskImage: gradient,
              backdropFilter: filter,
              WebkitBackdropFilter: filter,
              // optional dark tint on top of the blurred backdrop
              backgroundColor: tint > 0 ? `rgba(0,0,0,${tint})` : undefined,
            }}
            {...props}
          />
        );
      })}
    </div>
  );
}
