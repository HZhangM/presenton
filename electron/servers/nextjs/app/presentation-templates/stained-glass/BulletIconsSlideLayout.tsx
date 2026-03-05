import React from 'react'
import * as z from "zod";

export const layoutId = 'stained-glass-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A stained glass themed slide with title, description, and bullet points each paired with an icon.'

const stainedGlassBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Sacred Principles').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Through reverent contemplation and timeless wisdom, we discover the illuminated path toward spiritual growth and divine understanding.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("cross symbol")
        })
    })).min(2).max(4).default([
        {
            title: 'Faith',
            description: 'Trust in the divine plan guides our steps through uncertainty toward everlasting light.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'faith heart'
            }
        },
        {
            title: 'Hope',
            description: 'The eternal flame of hope illuminates our darkest hours with promise of redemption.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'hope star'
            }
        },
        {
            title: 'Grace',
            description: 'Divine grace flows through humble hearts, blessing all who seek truth with compassion.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/sun-bold.svg',
                __icon_query__: 'grace sun'
            }
        },
        {
            title: 'Wisdom',
            description: 'Sacred wisdom emerges from prayer and contemplation of eternal truths.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/book-bold.svg',
                __icon_query__: 'wisdom book'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = stainedGlassBulletIconsSlideSchema

export type StainedGlassBulletIconsSlideData = z.infer<typeof stainedGlassBulletIconsSlideSchema>

interface StainedGlassBulletIconsSlideLayoutProps {
    data?: Partial<StainedGlassBulletIconsSlideData>
}

const StainedGlassBulletIconsSlideLayout: React.FC<StainedGlassBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

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
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #e8e0d0)', fontFamily: 'var(--body-font-family, Merriweather Sans)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Cross Element */}
                <div className="absolute top-24 right-24 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <path
                            d="M35 0 h10 v30 h30 v10 h-30 v30 h-10 v-30 h-30 v-10 h30 z"
                            fill="var(--primary-color, #c0392b)"
                        />
                    </svg>
                </div>

                {/* Decorative Ruby Accent */}
                <div 
                    className="absolute bottom-16 left-24 w-16 h-16 opacity-30 rounded-full"
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #c0392b), transparent 70%)'
                    }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-14 pb-8">
                    {/* Title Section */}
                    <div className="mb-6 max-w-3xl">
                        <h1 
                            style={{ 
                                color: "var(--background-text, #e8e0d0)",
                                fontFamily: "var(--heading-font-family, Merriweather)"
                            }} 
                            className="text-4xl font-bold leading-tight mb-6"
                        >
                            {slideData?.title || 'Sacred Principles'}
                        </h1>
                        
                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(192,57,43,0.3))' }}></div>
                            <div className="px-4">
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <path
                                        d="M8 2 L10 6 L14 6 L11 9 L12 14 L8 11 L4 14 L5 9 L2 6 L6 6 Z"
                                        fill="var(--primary-color, #c0392b)"
                                        opacity="0.6"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(192,57,43,0.3))' }}></div>
                        </div>

                        <p 
                            style={{ 
                                color: "var(--background-text, #e8e0d0)",
                                fontFamily: "var(--body-font-family, Merriweather Sans)"
                            }} 
                            className="text-lg font-normal leading-relaxed opacity-90"
                        >
                            {slideData?.description || 'Through reverent contemplation and timeless wisdom, we discover the illuminated path toward spiritual growth and divine understanding.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-1 gap-4 max-w-5xl">
                            {bulletPoints.map((bullet, index) => (
                                <div
                                    key={index}
                                    className="p-4 flex items-start gap-4"
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(6px)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg"
                                        style={{
                                            background: 'rgba(192,57,43,0.2)',
                                            border: '1px solid rgba(192,57,43,0.3)'
                                        }}
                                    >
                                        <img
                                            src={bullet.icon.__icon_url__}
                                            alt={bullet.icon.__icon_query__}
                                            className="w-6 h-6"
                                            style={{ filter: "brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(17%) hue-rotate(314deg) brightness(97%) contrast(92%)" }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 
                                            style={{ 
                                                color: "var(--primary-color, #c0392b)",
                                                fontFamily: "var(--heading-font-family, Merriweather)"
                                            }} 
                                            className="text-xl font-bold mb-2"
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            style={{ 
                                                color: "var(--background-text, #e8e0d0)",
                                                fontFamily: "var(--body-font-family, Merriweather Sans)"
                                            }} 
                                            className="text-base font-normal leading-relaxed opacity-90"
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

export default StainedGlassBulletIconsSlideLayout