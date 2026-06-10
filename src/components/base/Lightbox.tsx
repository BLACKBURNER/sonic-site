import { useEffect, useCallback } from 'react';

export interface LightboxItem {
  image: string;
  title: string;
  category: string;
  description: string;
}

interface LightboxProps {
  items: LightboxItem[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

/**
 * Lightbox — unified fullscreen image viewer.
 *
 * Handles its own keyboard events (Escape, ArrowLeft, ArrowRight)
 * and click-outside-to-close. Uses the Sonic z-modal layer so it
 * always sits above navigation drawers.
 */
export default function Lightbox({
  items,
  activeIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen || items.length === 0) return null;

  const current = items[activeIndex] ?? items[0];

  return (
    <div
      className="fixed inset-0 bg-black/95 z-modal flex items-center justify-center opacity-0 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-sonic-lime hover:bg-sonic-lime transition-all duration-standard ease-sonic group z-10 cursor-pointer"
        aria-label="Close lightbox"
      >
        <i className="ri-close-line text-2xl text-white group-hover:text-sonic-dark" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm border-2 border-sonic-lime/40 px-6 py-3 z-10">
        <span className="text-white font-black text-lg">
          {activeIndex + 1} / {items.length}
        </span>
      </div>

      {/* Previous Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-sonic-lime hover:bg-sonic-lime transition-all duration-standard ease-sonic group cursor-pointer"
        aria-label="Previous image"
      >
        <i className="ri-arrow-left-line text-2xl text-white group-hover:text-sonic-dark" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-sonic-lime hover:bg-sonic-lime transition-all duration-standard ease-sonic group cursor-pointer"
        aria-label="Next image"
      >
        <i className="ri-arrow-right-line text-2xl text-white group-hover:text-sonic-dark" />
      </button>

      {/* Main Image */}
      <div
        className="max-w-6xl max-h-[80vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.image}
          alt={current.title}
          className="max-w-full max-h-[80vh] object-contain"
        />

        {/* Image Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
          <div className="inline-block bg-sonic-lime/20 backdrop-blur-sm border border-sonic-lime/40 px-4 py-1 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-white">
              {current.category}
            </span>
          </div>
          <h3 className="text-3xl font-black text-white mb-2">
            {current.title}
          </h3>
          <p className="text-white/90 text-lg">{current.description}</p>
        </div>
      </div>
    </div>
  );
}