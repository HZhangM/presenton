import React from 'react'
import * as z from "zod";

export const layoutId = 'monochrome-noir-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A stark black and white intro slide with dramatic typography and high contrast geometric elements'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('MONOCHROME').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Pure contrast meets bold design. Experience the power of minimalism with maximum impact through stark geometric elements and dramatic typography.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('JOHN DOE').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("stark black and white architectural interior") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        __image_prompt__: "stark black and white architectural interior"
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

    const presenterInitials = getInitials(slideData?.presenterName || 'JOHN DOE');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Space Grotesk)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 px-4 py-2" style={{ 
                                border: '2px solid var(--primary-color, #000000)', 
                                background: 'var(--primary-text, #ffffff)' 
                            }}>
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-base font-bold uppercase tracking-wider" style={{ color: 'var(--primary-color, #000000)' }}>
                                    {(slideData as any)?.__companyName__ || 'COMPANY'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 opacity-10" style={{ background: 'var(--primary-color, #000000)' }}></div>
                <div className="absolute bottom-32 left-12 w-2 h-48 opacity-20" style={{ background: 'var(--primary-color, #000000)' }}></div>

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-12">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-12 space-y-6">
                        {/* Title */}
                        <h1 style={{ color: "var(--background-text, #000000)" }} className="text-7xl font-bold uppercase tracking-tighter leading-none">
                            {slideData?.title || 'MONOCHROME'}
                        </h1>

                        {/* Divider */}
                        <div style={{ background: "var(--primary-color, #000000)" }} className="w-full h-1"></div>

                        {/* Description */}
                        <p style={{ color: "var(--background-text, #000000)" }} className="text-xl font-medium leading-relaxed max-w-xl">
                            {slideData?.description || 'Pure contrast meets bold design. Experience the power of minimalism with maximum impact through stark geometric elements and dramatic typography.'}
                        </p>

                        {/* Presenter Section */}
                        <div className="mt-8 p-6" style={{
                            border: '2px solid var(--primary-color, #000000)',
                            background: 'var(--primary-text, #ffffff)'
                        }}>
                            <div className="flex items-center gap-6">
                                <div style={{ background: "var(--primary-color, #000000)" }} className="w-16 h-16 flex items-center justify-center">
                                    <span className="font-bold text-xl uppercase" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {presenterInitials}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span style={{ color: "var(--primary-color, #000000)" }} className="text-2xl font-bold uppercase tracking-wide">
                                        {slideData?.presenterName || 'JOHN DOE'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-lg h-96 overflow-hidden" style={{ border: '2px solid var(--primary-color, #000000)' }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover grayscale contrast-125"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroSlideLayout