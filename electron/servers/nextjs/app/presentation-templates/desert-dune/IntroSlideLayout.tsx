import React from 'react'
import * as z from "zod";

export const layoutId = 'desert-dune-intro-slide'
export const layoutName = 'Intro Slide'
export const layoutDescription = 'A warm desert-themed intro slide with sandy tones, golden accents, and elegant typography'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Desert Innovation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Embracing the vast potential of sustainable solutions, we bring innovative approaches to modern challenges with the calm wisdom of the desert.').meta({
        description: "Main description text content",
    }),
    presenterName: z.string().min(2).max(50).default('Sarah Ahmed').meta({
        description: "Name of the presenter",
    }),
    image: z.object({ 
        __image_url__: z.string().default("https://placehold.co/640x360"), 
        __image_prompt__: z.string().min(10).max(50).default("Desert landscape with golden dunes") 
    }).meta({
        description: "Supporting image for the slide",
    })
})

export { Schema }

export type IntroSlideData = z.infer<typeof Schema>

interface DesertDuneIntroSlideProps {
    data?: Partial<IntroSlideData>
}

const DesertDuneIntroSlide: React.FC<DesertDuneIntroSlideProps> = ({ data: slideData }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
    };

    const presenterInitials = getInitials(slideData?.presenterName || 'Sarah Ahmed');

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Tenor Sans)"
                }}
            >
                {/* Decorative arch element */}
                <div className="absolute top-12 right-16 w-32 h-16 border-2 border-t-0 rounded-b-full opacity-20"
                     style={{ borderColor: "var(--primary-color, #b8860b)" }}>
                </div>
                
                {/* Decorative golden line */}
                <div className="absolute top-0 left-1/4 w-px h-24 opacity-30"
                     style={{ backgroundColor: "var(--primary-color, #b8860b)" }}>
                </div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-5">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && 
                                    <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />
                                }
                                {(slideData as any)?.__companyName__ && 
                                    <span className="text-sm font-medium" style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: "var(--body-font-family, Work Sans)"
                                    }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="relative z-10 flex h-full px-12 pt-16 pb-8">
                    {/* Left section - Content */}
                    <div className="flex-1 flex flex-col justify-center pr-8 space-y-5">
                        {/* Title */}
                        <h1 className="text-5xl font-normal leading-tight" style={{ 
                            color: "var(--background-text, #3a2e1e)",
                            fontFamily: "var(--heading-font-family, Tenor Sans)"
                        }}>
                            {slideData?.title || 'Desert Innovation'}
                        </h1>

                        {/* Golden divider */}
                        <div className="flex justify-start">
                            <div className="w-20 h-px" style={{ 
                                backgroundColor: "var(--primary-color, #b8860b)" 
                            }}></div>
                        </div>

                        {/* Description */}
                        <p className="text-lg font-light leading-relaxed max-w-lg" style={{ 
                            color: "var(--background-text, #3a2e1e)",
                            fontFamily: "var(--body-font-family, Work Sans)"
                        }}>
                            {slideData?.description || 'Embracing the vast potential of sustainable solutions, we bring innovative approaches to modern challenges with the calm wisdom of the desert.'}
                        </p>

                        {/* Presenter card */}
                        <div className="mt-8 inline-block">
                            <div className="p-4 rounded-lg border" style={{
                                background: "var(--card-color, rgba(255, 255, 255, 0.6))",
                                backdropFilter: "blur(10px)",
                                borderColor: "var(--stroke, rgba(184, 134, 11, 0.2))"
                            }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ 
                                        backgroundColor: "var(--primary-color, #b8860b)" 
                                    }}>
                                        <span className="font-medium text-sm" style={{ 
                                            color: "var(--primary-text, #ffffff)" 
                                        }}>
                                            {presenterInitials}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-base" style={{ 
                                            color: "var(--background-text, #3a2e1e)",
                                            fontFamily: "var(--body-font-family, Work Sans)"
                                        }}>
                                            {slideData?.presenterName || 'Sarah Ahmed'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Image */}
                    <div className="flex-1 flex items-center justify-center pl-8">
                        <div className="w-full max-w-md h-72 rounded-xl overflow-hidden border" style={{
                            borderColor: "var(--stroke, rgba(184, 134, 11, 0.2))"
                        }}>
                            <img
                                src={slideData?.image?.__image_url__ || 'https://placehold.co/640x360'}
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

export default DesertDuneIntroSlide