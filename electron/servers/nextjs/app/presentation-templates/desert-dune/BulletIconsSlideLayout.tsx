import React from 'react'
import * as z from "zod";

export const layoutId = 'desert-dune-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A desert dune themed slide with title, description, and bullet points each paired with an icon.'

const desertDuneBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Desert Essentials').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Navigate the vast landscape of opportunities with wisdom gained from the timeless beauty and resilience of the desert environment.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("desert sun")
        })
    })).min(2).max(4).default([
        {
            title: 'Resilience',
            description: 'Like desert flora, true strength emerges from adapting to challenging environments with grace.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shield-bold.svg',
                __icon_query__: 'shield protection'
            }
        },
        {
            title: 'Clarity',
            description: 'The desert sky offers infinite perspective, revealing what truly matters in the vast expanse.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/eye-bold.svg',
                __icon_query__: 'vision clarity'
            }
        },
        {
            title: 'Patience',
            description: 'Desert wisdom teaches that the most beautiful transformations happen slowly and deliberately.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/clock-bold.svg',
                __icon_query__: 'time patience'
            }
        },
        {
            title: 'Abundance',
            description: 'Even in apparent scarcity, the desert reveals hidden treasures to those who look deeper.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/gem-bold.svg',
                __icon_query__: 'treasure gem'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = desertDuneBulletIconsSlideSchema

export type DesertDuneBulletIconsSlideData = z.infer<typeof desertDuneBulletIconsSlideSchema>

interface DesertDuneBulletIconsSlideLayoutProps {
    data?: Partial<DesertDuneBulletIconsSlideData>
}

const DesertDuneBulletIconsSlideLayout: React.FC<DesertDuneBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

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
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #3a2e1e)',
                                        fontFamily: "var(--body-font-family, Work Sans)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Arch Element */}
                <div className="absolute top-16 right-20 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <path
                            d="M10 70 C10 35, 45 10, 80 10"
                            fill="none"
                            stroke="var(--primary-color, #b8860b)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M15 65 C15 35, 45 15, 75 15"
                            fill="none"
                            stroke="var(--primary-color, #b8860b)"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Golden Line Accent */}
                <div 
                    className="absolute bottom-24 left-12 w-24 h-px opacity-30"
                    style={{ background: 'var(--primary-color, #b8860b)' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-12 pb-8">
                    {/* Title Section */}
                    <div className="mb-6 max-w-3xl">
                        <h1 
                            className="text-3xl font-normal mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #3a2e1e)",
                                fontFamily: "var(--heading-font-family, Tenor Sans)"
                            }}
                        >
                            {slideData?.title || 'Desert Essentials'}
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center mb-6">
                            <div 
                                className="w-1/2 h-px"
                                style={{ background: 'var(--primary-color, #b8860b)' }}
                            ></div>
                        </div>

                        <p 
                            className="text-base font-light leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #3a2e1e)",
                                fontFamily: "var(--body-font-family, Work Sans)"
                            }}
                        >
                            {slideData?.description || 'Navigate the vast landscape of opportunities with wisdom gained from the timeless beauty and resilience of the desert environment.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-3"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.55)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    borderRadius: '12px'
                                }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ 
                                            filter: `brightness(0) saturate(100%) invert(20%) sepia(20%) saturate(1000%) hue-rotate(30deg) brightness(0.8)` 
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-lg font-normal mb-2 leading-tight"
                                        style={{
                                            color: "var(--background-text, #3a2e1e)",
                                            fontFamily: "var(--heading-font-family, Tenor Sans)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm font-light leading-relaxed"
                                        style={{
                                            color: "var(--background-text, #3a2e1e)",
                                            fontFamily: "var(--body-font-family, Work Sans)"
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
        </>
    )
}

export default DesertDuneBulletIconsSlideLayout