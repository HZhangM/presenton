import React from 'react'
import * as z from "zod";

export const layoutId = 'marble-classic-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A classical marble slide with title, description, and bullet points each paired with an icon.'

const marbleClassicBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Classical Excellence').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Timeless principles of elegance and sophistication that define exceptional quality and enduring value in every endeavor.').meta({
        description: "Main description text explaining the topic",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(2).max(60).meta({
            description: "Bullet point title",
        }),
        description: z.string().min(10).max(100).meta({
            description: "Bullet point description",
        }),
        icon: z.object({
            __icon_url__: z.string().default(""),
            __icon_query__: z.string().min(5).max(20).default("luxury icon")
        })
    })).min(2).max(4).default([
        {
            title: 'Timeless Design',
            description: 'Embracing classical aesthetics that transcend trends and maintain their elegance throughout the ages.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/crown-bold.svg',
                __icon_query__: 'classical column'
            }
        },
        {
            title: 'Premium Quality',
            description: 'Uncompromising standards of excellence that reflect the finest craftsmanship and attention to detail.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/diamond-bold.svg',
                __icon_query__: 'premium diamond'
            }
        },
        {
            title: 'Refined Elegance',
            description: 'Sophisticated refinement that speaks to discerning tastes and appreciation for the finer things in life.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'elegant star'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = marbleClassicBulletIconsSlideSchema

export type MarbleClassicBulletIconsSlideData = z.infer<typeof marbleClassicBulletIconsSlideSchema>

interface MarbleClassicBulletIconsSlideLayoutProps {
    data?: Partial<MarbleClassicBulletIconsSlideData>
}

const MarbleClassicBulletIconsSlideLayout: React.FC<MarbleClassicBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-normal tracking-wide" 
                                    style={{ 
                                        color: 'var(--background-text, #2a2a2a)',
                                        fontFamily: "var(--body-font-family, Montserrat)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-16 right-20 opacity-10">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <rect
                            x="30"
                            y="30"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="var(--primary-color, #4a4a4a)"
                            strokeWidth="1"
                            transform="rotate(45 40 40)"
                        />
                    </svg>
                </div>

                <div 
                    className="absolute bottom-20 left-16 w-24 h-px opacity-20"
                    style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-14 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-4xl font-semibold mb-4 leading-tight tracking-wide"
                            style={{ 
                                color: "var(--background-text, #2a2a2a)",
                                fontFamily: "var(--heading-font-family, Cormorant)"
                            }}
                        >
                            {slideData?.title || 'Classical Excellence'}
                        </h1>
                        
                        {/* Elegant Divider */}
                        <div className="flex items-center justify-center mb-4 max-w-md">
                            <div 
                                className="h-px flex-1"
                                style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                            ></div>
                            <div 
                                className="w-2 h-2 mx-4 transform rotate-45"
                                style={{ 
                                    background: 'var(--primary-color, #4a4a4a)',
                                    opacity: 0.6
                                }}
                            ></div>
                            <div 
                                className="h-px flex-1"
                                style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}
                            ></div>
                        </div>

                        <p 
                            className="text-lg leading-relaxed font-normal max-w-3xl"
                            style={{ 
                                color: "var(--background-text, #2a2a2a)",
                                fontFamily: "var(--body-font-family, Montserrat)"
                            }}
                        >
                            {slideData?.description || 'Timeless principles of elegance and sophistication that define exceptional quality and enduring value in every endeavor.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="space-y-4 max-w-5xl">
                            {bulletPoints.map((bullet, index) => (
                                <div
                                    key={index}
                                    className="p-4 flex items-start gap-4"
                                    style={{
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.75))',
                                        border: '1px solid var(--stroke, rgba(0, 0, 0, 0.1))',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 16px rgba(0,0,0,0.04)'
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src={bullet.icon?.__icon_url__}
                                            alt={bullet.icon?.__icon_query__}
                                            className="w-8 h-8"
                                            style={{ filter: "brightness(0) saturate(100%)" }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="text-xl font-semibold mb-1 tracking-wide leading-tight"
                                            style={{
                                                color: "var(--background-text, #2a2a2a)",
                                                fontFamily: "var(--heading-font-family, Cormorant)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p
                                            className="text-base leading-relaxed font-normal"
                                            style={{
                                                color: "var(--background-text, #2a2a2a)",
                                                fontFamily: "var(--body-font-family, Montserrat)"
                                            }}
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarbleClassicBulletIconsSlideLayout