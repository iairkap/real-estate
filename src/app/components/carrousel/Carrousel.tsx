'use client'
import * as React from "react"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import useMediaQuery from "@/app/hooks/useMediaQuery"

interface ImageCarouselProps {
    images: string[]
}
export default function ImageCarousel({ images }: ImageCarouselProps) {

    const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es móvil

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel()

    React.useEffect(() => {
        if (emblaApi && emblaApi.scrollTo) {
            emblaApi.scrollTo(currentIndex)
        }
    }, [currentIndex, emblaApi])

    const handlePrevious = React.useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }, [currentIndex])

    const handleNext = React.useCallback(() => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }, [currentIndex])

    return (
        <div className="w-full mx-auto space-y-4" ref={emblaRef}>
            {/* Main Images Display */}
            <div className={isMobile ? "space-y-4" : "grid grid-cols-2 gap-4"}>
                {images.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)).map((image, index) => (
                    <div key={index} className="aspect-[3/2] relative">
                        <img
                            src={image}
                            alt={`Main Image ${currentIndex + index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden"
                    >
                        <div
                            className={cn(
                                "absolute inset-0 transition-opacity",
                                currentIndex === index
                                    ? "opacity-0"
                                    : "bg-gradient-to-b from-[rgba(10,10,10,0.5)] to-[rgba(10,10,10,0.5)]"
                            )}
                        />
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Pagination with Arrows */}
            <div className="flex items-center justify-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="h-8 w-8"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-colors",
                                currentIndex === index ? "bg-[#703BF7]" : "bg-white"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleNext}
                    disabled={currentIndex >= images.length - 1}
                    className="h-8 w-8"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}