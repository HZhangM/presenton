import React from 'react'
import * as z from "zod";

export const layoutId = 'lavender-dream-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A soft lavender themed slide with title, description, and bullet points each paired with an icon.'

const lavenderDreamBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Gentle Insights').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Embracing the soft beauty of thoughtful design, where every element flows together in harmonious balance, creating spaces of tranquility and grace.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("flower bloom")
        })
    })).min(2).max(4).default([
        {
            title: 'Gentle Harmony',
            description: 'Finding the perfect balance between elegance and simplicity, where every detail whispers beauty.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'gentle heart'
            }
        },
        {
            title: 'Soft Innovation',
            description: 'Creating meaningful change through thoughtful approaches that nurture growth and inspire creativity.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/lightbulb-bold.svg',
                __icon_query__: 'soft light'
            }
        },
        {
            title: 'Dreamy Vision',
            description: 'Transforming aspirations into reality with gentle persistence and unwavering dedication to beauty.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'dreamy star'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = lavenderDreamBulletIconsSlideSchema

export type LavenderDreamBulletIconsSlideData = z.infer<typeof lavenderDreamBulletIconsSlideSchema>

interface LavenderDreamBulletIconsSlideLayoutProps {
    data?: Partial<LavenderDreamBulletIconsSlideData>
}

const LavenderDreamBulletIconsSlideLayout: React.FC<LavenderDreamBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #3a2050)',
                                        fontFamily: "var(--body-font-family, Mulish)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Floral Ornament */}
                <div className="absolute top-20 right-24 opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <g fill="var(--primary-color, #9b59b6)">
                            <circle cx="40" cy="25" r="8" opacity="0.6" />
                            <circle cx="25" cy="40" r="8" opacity="0.6" />
                            <circle cx="55" cy="40" r="8" opacity="0.6" />
                            <circle cx="40" cy="55" r="8" opacity="0.6" />
                            <circle cx="40" cy="40" r="6" opacity="0.8" />
                        </g>
                    </svg>
                </div>

                {/* Decorative Curved Line */}
                <div className="absolute bottom-24 left-20 opacity-15">
                    <svg width="100" height="40" viewBox="0 0 100 40">
                        <path 
                            d="M0,20 Q25,5 50,20 T100,20" 
                            stroke="var(--primary-color, #9b59b6)" 
                            strokeWidth="2" 
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-14 pb-8">
                    {/* Title Section */}
                    <div className="mb-6 max-w-3xl">
                        <h1 
                            className="text-4xl font-semibold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #3a2050)",
                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                            }}
                        >
                            {slideData?.title || 'Gentle Insights'}
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center mb-6">
                            <div 
                                className="w-32 h-px opacity-40"
                                style={{ background: 'var(--primary-color, #9b59b6)' }}
                            ></div>
                        </div>

                        <p 
                            className="text-lg font-normal leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #3a2050)",
                                fontFamily: "var(--body-font-family, Mulish)"
                            }}
                        >
                            {slideData?.description || 'Embracing the soft beauty of thoughtful design, where every element flows together in harmonious balance, creating spaces of tranquility and grace.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-1 gap-4 max-w-4xl">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-5 flex items-start gap-4"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    borderRadius: '20px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                                }}
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8 opacity-80"
                                        style={{ filter: "hue-rotate(270deg) saturate(1.2)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-xl font-semibold mb-2 leading-tight"
                                        style={{
                                            color: "var(--background-text, #3a2050)",
                                            fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-base leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #3a2050)",
                                            fontFamily: "var(--body-font-family, Mulish)"
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

export default LavenderDreamBulletIconsSlideLayout