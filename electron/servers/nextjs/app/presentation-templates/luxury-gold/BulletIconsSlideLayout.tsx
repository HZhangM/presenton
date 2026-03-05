import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'luxury-gold-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A luxurious slide with title, description, and bullet points each paired with an icon in premium black and gold styling.'

const luxuryGoldBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('PREMIUM SOLUTIONS').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Elevate your business with our exclusive suite of premium services designed for discerning professionals who demand excellence.').meta({
        description: "Main description text explaining the content",
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
            __icon_query__: z.string().min(5).max(20).default("luxury crown")
        })
    })).min(2).max(4).default([
        {
            title: 'EXCLUSIVE ACCESS',
            description: 'Unlock premium features and services available only to our distinguished members.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/crown-bold.svg',
                __icon_query__: 'crown luxury'
            }
        },
        {
            title: 'SUPERIOR QUALITY',
            description: 'Experience unmatched excellence with our meticulously crafted solutions.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/diamond-bold.svg',
                __icon_query__: 'diamond quality'
            }
        },
        {
            title: 'PERSONALIZED SERVICE',
            description: 'Receive bespoke attention tailored to your unique requirements and preferences.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'star service'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = luxuryGoldBulletIconsSlideSchema

export type LuxuryGoldBulletIconsSlideData = z.infer<typeof luxuryGoldBulletIconsSlideSchema>

interface LuxuryGoldBulletIconsSlideLayoutProps {
    data?: Partial<LuxuryGoldBulletIconsSlideData>
}

const LuxuryGoldBulletIconsSlideLayout: React.FC<LuxuryGoldBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cinzel)"
                }}
            >
                {/* Decorative Gold Line - Top */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-40" style={{ background: `linear-gradient(90deg, transparent, var(--primary-color, #d4a843), transparent)` }}></div>

                {/* Decorative Crown Ornament */}
                <div className="absolute top-8 right-12 opacity-10">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color, #d4a843)">
                        <path d="M5 16L3 7l3 3 4-6 4 6 3-3-2 9H5zm2.7-2h8.6l.9-4.4L15 11l-3-4.5L9 11l-2.2-1.4L7.7 14z"/>
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-base font-bold tracking-wide"
                                        style={{ 
                                            color: 'var(--background-text, #e8d5b0)',
                                            fontFamily: "var(--heading-font-family, Cinzel)"
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Title Section */}
                    <div className="mb-10">
                        <h1 
                            className="text-5xl font-black tracking-wider mb-4"
                            style={{ 
                                color: "var(--background-text, #e8d5b0)",
                                fontFamily: "var(--heading-font-family, Cinzel)",
                                background: `linear-gradient(135deg, var(--background-text, #e8d5b0), var(--primary-color, #d4a843))`,
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text"
                            }}
                        >
                            {slideData?.title || 'PREMIUM SOLUTIONS'}
                        </h1>
                        
                        <div className="w-24 h-px bg-gradient-to-r from-gold-500 to-transparent mb-6" style={{ background: `linear-gradient(90deg, var(--primary-color, #d4a843), transparent)` }}></div>
                        
                        <p 
                            className="text-xl leading-relaxed max-w-4xl"
                            style={{ 
                                color: "var(--background-text, #e8d5b0)",
                                fontFamily: "var(--body-font-family, EB Garamond)",
                                opacity: 0.9
                            }}
                        >
                            {slideData?.description || 'Elevate your business with our exclusive suite of premium services designed for discerning professionals who demand excellence.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded border"
                                style={{
                                    border: "1px solid var(--stroke, rgba(212, 168, 67, 0.3))",
                                    background: "var(--card-color, rgba(212, 168, 67, 0.06))"
                                }}
                            >
                                <div className="flex items-start space-x-5">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-14 h-14 rounded border flex items-center justify-center"
                                        style={{
                                            border: "1px solid var(--stroke, rgba(212, 168, 67, 0.3))",
                                            background: "var(--primary-color, #d4a843)"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-7 h-7"
                                            color="var(--primary-text, #1a1a1a)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-lg font-bold mb-3 tracking-wide"
                                            style={{ 
                                                color: "var(--primary-color, #d4a843)",
                                                fontFamily: "var(--heading-font-family, Cinzel)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        
                                        <p 
                                            className="text-base leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #e8d5b0)",
                                                fontFamily: "var(--body-font-family, EB Garamond)",
                                                opacity: 0.85
                                            }}
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Bottom Border */}
                    <div className="mt-8 flex items-center">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500" style={{ background: `linear-gradient(90deg, transparent, var(--primary-color, #d4a843))` }}></div>
                        <div className="w-2 h-2 mx-4 transform rotate-45 border" style={{ borderColor: "var(--primary-color, #d4a843)", background: "var(--primary-color, #d4a843)" }}></div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500" style={{ background: `linear-gradient(90deg, var(--primary-color, #d4a843), transparent)` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LuxuryGoldBulletIconsSlideLayout