import React from 'react'
import * as z from "zod";

export const layoutId = 'pixel-retro-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A retro gaming pixel art style intro slide with 8-bit colors and blocky pixel typography.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('PIXEL QUEST').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Experience the ultimate retro gaming adventure with authentic 8-bit graphics, classic sound effects, and nostalgic gameplay mechanics that transport you back to the golden age of gaming.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Player One').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("retro pixel art gaming console controller") 
    }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const IntroSlideLayout: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Player One');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-bold" style={{ color: 'var(--background-text, #50c878)', fontFamily: "var(--body-font-family, 'VT323')" }}>
                                    {(slideData as any)?.__companyName__ || 'RETRO GAMES'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Pixel Art Decorative Elements */}
                <div className="absolute top-16 right-16 opacity-20">
                    <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div 
                                key={i} 
                                className="w-2 h-2" 
                                style={{ 
                                    backgroundColor: Math.random() > 0.7 ? 'var(--primary-color, #50c878)' : 'transparent' 
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-8 left-8 opacity-15">
                    <div className="flex space-x-1">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div 
                                key={i} 
                                className="w-1 h-1" 
                                style={{ backgroundColor: 'var(--stroke, rgba(80, 200, 120, 0.35))' }}
                            />
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-12 pb-8">
                    {/* Left Section - Image */}
                    <div className="flex-1 flex items-center justify-center pr-8">
                        <div className="w-full max-w-lg h-80 overflow-hidden" style={{ 
                            border: '2px solid rgba(80,200,120,0.3)',
                            background: 'rgba(80,200,120,0.06)'
                        }}>
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'retro gaming'}
                                className="w-full h-full object-cover"
                                style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                            />
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pl-8 space-y-8">
                        {/* Title */}
                        <h1 style={{ 
                            color: "var(--background-text, #50c878)",
                            fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                        }} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            {slideData?.title || 'PIXEL QUEST'}
                        </h1>

                        {/* Pixel accent line */}
                        <div className="flex space-x-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div 
                                    key={i} 
                                    className="w-3 h-3" 
                                    style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                                />
                            ))}
                        </div>

                        {/* Description */}
                        <div style={{ 
                            border: '2px solid rgba(80,200,120,0.3)',
                            background: 'rgba(80,200,120,0.06)'
                        }} className="p-6">
                            <p style={{ 
                                color: "var(--background-text, #50c878)",
                                fontFamily: "var(--body-font-family, 'VT323')"
                            }} className="text-lg sm:text-xl leading-relaxed">
                                {slideData?.description || 'Experience the ultimate retro gaming adventure with authentic 8-bit graphics, classic sound effects, and nostalgic gameplay mechanics that transport you back to the golden age of gaming.'}
                            </p>
                        </div>

                        {/* Presenter Section */}
                        <div style={{
                            border: '2px solid rgba(80,200,120,0.3)',
                            background: 'rgba(80,200,120,0.06)'
                        }} className="p-6">
                            <div className="flex items-center gap-6">
                                {/* Pixel Avatar */}
                                <div style={{ 
                                    background: "var(--primary-color, #50c878)",
                                    border: '2px solid rgba(80,200,120,0.4)'
                                }} className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                    <span className="font-bold text-xs lg:text-sm" style={{ 
                                        color: "var(--primary-text, #1a1a2e)",
                                        fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                    }}>
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2" style={{ backgroundColor: 'var(--primary-color, #50c878)' }}></div>
                                        <span style={{ 
                                            color: "var(--background-text, #50c878)",
                                            fontFamily: "var(--body-font-family, 'VT323')"
                                        }} className="text-xl lg:text-2xl font-bold">
                                            {slideData?.presenterName || 'Player One'}
                                        </span>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="w-1 h-1" 
                                                style={{ backgroundColor: 'var(--stroke, rgba(80, 200, 120, 0.35))' }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout