import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-academia-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A scholarly cover slide with dark academia aesthetic, featuring presentation title, description, presenter info, and optional image.'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Classical Literature & Modern Thought').meta({
        description: "Main title of the presentation",
    }),
    description: z.string().min(10).max(150).default('An exploration of timeless literary themes and their enduring relevance in contemporary discourse, examining the intersection of classical wisdom and modern intellectual inquiry.').meta({
        description: "Presentation description text",
    }),
    presenterName: z.string().min(2).max(50).default('Professor Margaret Blackwood').meta({
        description: "Name of the presenter",
    }),
    image: z.object({
        __image_url__: z.string().default("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        __image_prompt__: z.string().min(10).max(50).default("Ancient library with leather-bound books")
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

    const presenterInitials = getInitials(slideData?.presenterName || 'Professor Margaret Blackwood');

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Spectral)"
                }}
            >
                {/* Decorative Elements */}
                <div 
                    className="absolute top-8 left-12 w-16 h-px opacity-30"
                    style={{ background: "var(--primary-color, #c8a882)" }}
                />
                <div 
                    className="absolute bottom-8 right-12 w-16 h-px opacity-30"
                    style={{ background: "var(--primary-color, #c8a882)" }}
                />
                
                {/* Ornamental Corner */}
                <div className="absolute top-6 left-6 text-xs opacity-20" style={{ color: "var(--primary-color, #c8a882)" }}>❦</div>
                <div className="absolute bottom-6 right-6 text-xs opacity-20" style={{ color: "var(--primary-color, #c8a882)" }}>❦</div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #e8dcc8)' }}>
                                    {(slideData as any)?.__companyName__ || 'Institution Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-6">
                        {/* Title */}
                        <h1 
                            className="text-5xl font-bold leading-tight"
                            style={{ color: "var(--background-text, #e8dcc8)" }}
                        >
                            {slideData?.title || 'Classical Literature & Modern Thought'}
                        </h1>

                        {/* Ornamental Divider */}
                        <div className="flex items-center gap-4">
                            <div 
                                className="flex-1 h-px"
                                style={{ background: "var(--stroke, rgba(200, 168, 130, 0.25))" }}
                            />
                            <div 
                                className="text-sm opacity-60"
                                style={{ color: "var(--primary-color, #c8a882)" }}
                            >
                                ❦
                            </div>
                            <div 
                                className="flex-1 h-px"
                                style={{ background: "var(--stroke, rgba(200, 168, 130, 0.25))" }}
                            />
                        </div>

                        {/* Description */}
                        <p 
                            className="text-lg leading-relaxed opacity-90"
                            style={{ color: "var(--background-text, #e8dcc8)" }}
                        >
                            {slideData?.description || 'An exploration of timeless literary themes and their enduring relevance in contemporary discourse, examining the intersection of classical wisdom and modern intellectual inquiry.'}
                        </p>

                        {/* Presenter Section */}
                        <div 
                            className="rounded p-5 border mt-8"
                            style={{
                                backgroundColor: 'var(--card-color, rgba(200, 168, 130, 0.08))',
                                borderColor: 'var(--stroke, rgba(200, 168, 130, 0.25))',
                                borderRadius: '4px'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                {/* Initials Circle */}
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center border"
                                    style={{ 
                                        backgroundColor: "var(--primary-color, #c8a882)",
                                        borderColor: "var(--stroke, rgba(200, 168, 130, 0.25))"
                                    }}
                                >
                                    <span 
                                        className="font-semibold text-sm"
                                        style={{ color: "var(--primary-text, #2a1a0e)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                {/* Presenter Info */}
                                <div className="flex flex-col">
                                    <span 
                                        className="text-lg font-semibold"
                                        style={{ color: "var(--background-text, #e8dcc8)" }}
                                    >
                                        {slideData?.presenterName || 'Professor Margaret Blackwood'}
                                    </span>
                                    <span 
                                        className="text-sm opacity-75"
                                        style={{ color: "var(--primary-color, #c8a882)" }}
                                    >
                                        Scholar & Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div 
                            className="w-full max-w-md h-80 overflow-hidden border"
                            style={{ 
                                borderColor: "var(--stroke, rgba(200, 168, 130, 0.25))",
                                borderRadius: '4px'
                            }}
                        >
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
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