import React from 'react'
import * as z from "zod";

export const layoutId = 'candy-pastel-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A playful intro slide with bubbly typography, rounded shapes and candy pastel colors'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Sweet Presentation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Join us for a delightful journey through our latest product features and innovations. Experience the perfect blend of creativity and functionality in our sweetest update yet!').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Emma Sweet').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("colorful candy pastel workspace")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Emma Sweet');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Fredoka)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-16 right-20 w-16 h-16 rounded-full opacity-20"
                    style={{ background: 'var(--primary-color, #ab47bc)' }}
                />
                <div 
                    className="absolute bottom-32 left-16 w-12 h-12 rounded-full opacity-15"
                    style={{ background: '#FFB6C1' }}
                />
                <div 
                    className="absolute top-1/3 right-12 w-8 h-8 rounded-full opacity-25"
                    style={{ background: '#98FB98' }}
                />

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 rounded-full" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-lg font-semibold rounded-full px-4 py-2"
                                    style={{ 
                                        color: 'var(--background-text, #4a3560)',
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.7))',
                                        border: '2px solid var(--stroke, rgba(171, 71, 188, 0.2))'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'Sweet Company'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-8">
                        {/* Title */}
                        <h1 
                            style={{ color: "var(--background-text, #4a3560)" }} 
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            {slideData?.title || 'Sweet Presentation'}
                        </h1>

                        {/* Dotted line divider */}
                        <div 
                            className="w-32 h-1 rounded-full"
                            style={{ 
                                background: `repeating-linear-gradient(to right, var(--primary-color, #ab47bc), var(--primary-color, #ab47bc) 8px, transparent 8px, transparent 16px)`
                            }}
                        />

                        {/* Description */}
                        <p 
                            style={{ 
                                color: "var(--background-text, #4a3560)",
                                fontFamily: "var(--body-font-family, Quicksand)"
                            }} 
                            className="text-lg sm:text-xl leading-relaxed font-medium"
                        >
                            {slideData?.description || 'Join us for a delightful journey through our latest product features and innovations. Experience the perfect blend of creativity and functionality in our sweetest update yet!'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded-3xl p-6 shadow-lg max-w-md"
                            style={{
                                background: 'var(--card-color, rgba(255,255,255,0.65))',
                                border: '2px solid var(--stroke, rgba(171,71,188,0.12))',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Presenter Avatar */}
                                <div 
                                    style={{ background: "var(--primary-color, #ab47bc)" }} 
                                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                                >
                                    <span 
                                        className="font-bold text-lg"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        style={{ color: "var(--background-text, #4a3560)" }} 
                                        className="text-xl font-bold"
                                    >
                                        {slideData?.presenterName || 'Emma Sweet'}
                                    </span>
                                    <div 
                                        className="px-3 py-1 rounded-full text-sm font-medium mt-1"
                                        style={{ 
                                            background: '#FFE4E1',
                                            color: 'var(--primary-color, #ab47bc)'
                                        }}
                                    >
                                        Presenter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-lg h-96 rounded-3xl overflow-hidden shadow-xl"
                            style={{
                                border: '2px solid var(--stroke, rgba(171,71,188,0.15))'
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || 'Presentation image'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout