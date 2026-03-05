import React from 'react'
import * as z from "zod";

export const layoutId = 'stained-glass-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A cathedral stained glass inspired cover slide with ornate typography and jewel tones'

const introSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Sacred Wisdom').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Illuminating pathways through ancient knowledge and modern insights, our comprehensive approach transforms understanding into wisdom that guides meaningful progress.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Catherine Blackwood').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ __image_url__: z.string().default("https://placehold.co/640x360"), __image_prompt__: z.string().min(10).max(50).default("Stained glass cathedral window with jewel tones") }).meta({
        description: "Supporting image for the slide",
    })
})

export const Schema = introSlideSchema

export type IntroSlideData = z.infer<typeof introSlideSchema>

interface IntroSlideLayoutProps {
    data?: Partial<IntroSlideData>
}

const StainedGlassIntroSlide: React.FC<IntroSlideLayoutProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Catherine Blackwood');
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Merriweather)"
                }}
            >
                {/* Decorative Cross Elements */}
                <div className="absolute top-8 right-8 opacity-20" style={{ color: 'var(--primary-color, #c0392b)' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                
                <div className="absolute bottom-8 left-8 opacity-15" style={{ color: 'var(--primary-color, #c0392b)' }}>
                    <div className="w-16 h-2 rounded" style={{ background: 'var(--stroke, rgba(192, 57, 43, 0.3))' }}></div>
                    <div className="w-2 h-16 rounded mt-1 mx-auto" style={{ background: 'var(--stroke, rgba(192, 57, 43, 0.3))' }}></div>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-base font-bold" style={{ color: 'var(--background-text, #e8e0d0)', fontFamily: 'var(--body-font-family, Merriweather Sans)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="relative z-10 flex h-full px-12 pt-12 pb-8">
                    <div className="flex-1 flex items-center justify-center pr-8">
                        <div className="w-full max-w-lg h-80 rounded-lg overflow-hidden shadow-lg" style={{
                            border: '2px solid rgba(192,57,43,0.25)',
                            background: 'rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(6px)',
                            borderRadius: '8px'
                        }}>
                            <img
                                src={slideData?.image?.__image_url__ || ''}
                                alt={slideData?.image?.__image_prompt__ || slideData?.title || ''}
                                className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center pl-8 space-y-6">
                        <h1 
                            className="text-5xl lg:text-6xl font-black leading-tight"
                            style={{ color: "var(--background-text, #e8e0d0)" }}
                        >
                            {slideData?.title || 'Sacred Wisdom'}
                        </h1>

                        <div className="flex items-center justify-center w-20">
                            <div className="h-px flex-1" style={{ background: 'var(--primary-color, #c0392b)' }}></div>
                            <div className="mx-2 w-2 h-2 rounded-full" style={{ background: 'var(--primary-color, #c0392b)' }}></div>
                            <div className="h-px flex-1" style={{ background: 'var(--primary-color, #c0392b)' }}></div>
                        </div>

                        <p 
                            className="text-lg leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #e8e0d0)", 
                                fontFamily: 'var(--body-font-family, Merriweather Sans)' 
                            }}
                        >
                            {slideData?.description || 'Illuminating pathways through ancient knowledge and modern insights, our comprehensive approach transforms understanding into wisdom that guides meaningful progress.'}
                        </p>

                        <div 
                            className="p-5 rounded-lg shadow-sm"
                            style={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(6px)',
                                borderRadius: '8px'
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
                                    style={{ background: "var(--primary-color, #c0392b)" }}
                                >
                                    <span 
                                        className="font-bold text-base"
                                        style={{ color: "var(--primary-text, #ffffff)" }}
                                    >
                                        {presenterInitials}
                                    </span>
                                </div>

                                <div className="flex flex-col">
                                    <span 
                                        className="text-xl font-bold"
                                        style={{ color: "var(--background-text, #e8e0d0)" }}
                                    >
                                        {slideData?.presenterName || 'Catherine Blackwood'}
                                    </span>
                                    <span 
                                        className="text-base opacity-80"
                                        style={{ 
                                            color: "var(--background-text, #e8e0d0)", 
                                            fontFamily: 'var(--body-font-family, Merriweather Sans)' 
                                        }}
                                    >
                                        Presenter
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StainedGlassIntroSlide