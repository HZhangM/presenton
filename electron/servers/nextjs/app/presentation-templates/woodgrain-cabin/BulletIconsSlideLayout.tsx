import React from 'react'
import * as z from "zod";

export const layoutId = 'woodgrain-cabin-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A rustic cabin-themed slide with title, description, and bullet points each paired with an icon.'

const woodgrainCabinBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Mountain Essentials').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover the fundamental elements that make every wilderness adventure memorable and safe in the great outdoors.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("mountain peak")
        })
    })).min(2).max(4).default([
        {
            title: 'Shelter & Warmth',
            description: 'A reliable shelter and proper insulation are your first defense against the elements.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/home-bold.svg',
                __icon_query__: 'cabin shelter'
            }
        },
        {
            title: 'Navigation Tools',
            description: 'Compass, map, and GPS ensure you always find your way back to safety.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/compass-bold.svg',
                __icon_query__: 'compass navigation'
            }
        },
        {
            title: 'Fire & Light',
            description: 'Multiple fire-starting methods and reliable lighting for cooking and signaling.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/fire-bold.svg',
                __icon_query__: 'campfire flame'
            }
        },
        {
            title: 'Food & Water',
            description: 'Adequate provisions and water purification methods for sustained energy.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/water-bold.svg',
                __icon_query__: 'water bottle'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = woodgrainCabinBulletIconsSlideSchema

export type WoodgrainCabinBulletIconsSlideData = z.infer<typeof woodgrainCabinBulletIconsSlideSchema>

interface WoodgrainCabinBulletIconsSlideLayoutProps {
    data?: Partial<WoodgrainCabinBulletIconsSlideData>
}

const WoodgrainCabinBulletIconsSlideLayout: React.FC<WoodgrainCabinBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Amatic SC)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #f5efe6)',
                                        fontFamily: "var(--body-font-family, Cabin)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Pine Tree */}
                <div className="absolute top-16 right-16 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <path
                            d="M40 10 L50 30 L30 30 Z M40 20 L55 40 L25 40 Z M40 30 L60 50 L20 50 Z M38 50 L42 70 L38 70 Z"
                            fill="var(--primary-color, #d4a76a)"
                        />
                    </svg>
                </div>

                {/* Decorative Wood Burn Lines */}
                <div className="absolute bottom-20 left-12 opacity-30">
                    <svg width="100" height="20" viewBox="0 0 100 20">
                        <path
                            d="M0 10 Q25 5 50 10 T100 10"
                            stroke="var(--primary-color, #d4a76a)"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M0 15 Q25 12 50 15 T100 15"
                            stroke="var(--primary-color, #d4a76a)"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-14 pb-8">
                    {/* Header Section */}
                    <div className="mb-5">
                        <h1 
                            className="text-4xl font-bold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #f5efe6)",
                                fontFamily: "var(--heading-font-family, Amatic SC)"
                            }}
                        >
                            {slideData?.title || 'Mountain Essentials'}
                        </h1>
                        
                        {/* Wood Burn Style Divider */}
                        <div className="flex items-center justify-center mb-4">
                            <div 
                                className="flex-1 h-px"
                                style={{ background: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}
                            ></div>
                            <div 
                                className="mx-4 text-lg"
                                style={{ color: 'var(--primary-color, #d4a76a)' }}
                            >
                                ✕
                            </div>
                            <div 
                                className="flex-1 h-px"
                                style={{ background: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}
                            ></div>
                        </div>

                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: "var(--background-text, #f5efe6)",
                                fontFamily: "var(--body-font-family, Cabin)"
                            }}
                        >
                            {slideData?.description || 'Discover the fundamental elements that make every wilderness adventure memorable and safe in the great outdoors.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-4"
                                style={{
                                    background: "var(--card-color, rgba(255, 250, 240, 0.9))",
                                    border: "1px solid rgba(139,90,43,0.15)",
                                    borderRadius: "8px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                }}
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ filter: "sepia(100%) hue-rotate(25deg) saturate(2) brightness(0.8)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-2xl font-bold mb-2 leading-tight"
                                        style={{
                                            color: "var(--primary-text, #2a1a0e)",
                                            fontFamily: "var(--heading-font-family, Amatic SC)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--primary-text, #2a1a0e)",
                                            fontFamily: "var(--body-font-family, Cabin)"
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

export default WoodgrainCabinBulletIconsSlideLayout