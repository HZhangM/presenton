import React from 'react'
import * as z from "zod";

export const layoutId = 'polaroid-memoir-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A warm nostalgic intro slide with polaroid-style cards and handwritten typography'

const Schema = z.object({
    title: z.string().min(3).max(40).default('My Journey Story').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('A collection of memories, experiences, and moments that shaped our path. Each story tells a unique chapter of growth, discovery, and meaningful connections.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Mitchell').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("nostalgic vintage photo of memories")
    }).meta({
        description: "Supporting polaroid-style image",
    })
})

export { Schema }

export type IntroSlideData = z.infer<typeof Schema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const IntroSlideLayout: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Mitchell');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3a3020)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Decorative tape elements */}
                <div className="absolute top-8 right-16 w-16 h-6 bg-yellow-200 opacity-70 transform rotate-12" 
                     style={{ background: 'rgba(255, 215, 0, 0.3)' }}></div>
                <div className="absolute bottom-12 left-20 w-12 h-6 bg-pink-200 opacity-60 transform -rotate-6"
                     style={{ background: 'rgba(255, 182, 193, 0.4)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-4">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #3a3020)" }} className="text-5xl lg:text-6xl font-bold leading-tight">
                            {slideData?.title || 'My Journey Story'}
                        </h1>

                        {/* Handwritten style accent line */}
                        <div className="w-24 h-0.5 transform -rotate-1" 
                             style={{ background: "var(--primary-color, #d4764e)" }}></div>

                        {/* Description */}
                        <p style={{ 
                            color: "var(--background-text, #3a3020)", 
                            fontFamily: "var(--body-font-family, Lato)"
                        }} className="text-lg leading-relaxed max-w-lg">
                            {slideData?.description || 'A collection of memories, experiences, and moments that shaped our path. Each story tells a unique chapter of growth, discovery, and meaningful connections.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="bg-white border border-black border-opacity-6 rounded-sm shadow-lg p-4 max-w-xs transform -rotate-1"
                            style={{
                                background: '#ffffff',
                                border: '1px solid rgba(0,0,0,0.06)',
                                borderRadius: '2px',
                                boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                                padding: '12px 12px 20px 12px'
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div style={{ background: "var(--primary-color, #d4764e)" }} 
                                     className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="font-bold text-sm" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span style={{ 
                                        color: "var(--background-text, #3a3020)", 
                                        fontFamily: "var(--body-font-family, Lato)"
                                    }} className="text-lg font-bold block">
                                        {slideData?.presenterName || 'Sarah Mitchell'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Polaroid Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="bg-white border border-black border-opacity-6 rounded-sm shadow-lg transform rotate-2"
                            style={{
                                background: '#ffffff',
                                border: '1px solid rgba(0,0,0,0.06)',
                                borderRadius: '2px',
                                boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                                padding: '12px 12px 40px 12px'
                            }}
                        >
                            <div className="w-80 h-80 overflow-hidden">
                                <img
                                    src={slideData?.image?.__image_url__ || ''}
                                    alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout