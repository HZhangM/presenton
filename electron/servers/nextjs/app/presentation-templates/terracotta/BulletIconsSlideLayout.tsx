import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'terracotta-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in warm terracotta theme.'

const terracottaBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Artisan Craftsmanship').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover the timeless beauty of handcrafted Mediterranean traditions, where every piece tells a story of heritage and skilled artisanship.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("craft tools")
        }),
    })).min(2).max(4).default([
        {
            title: 'Traditional Techniques',
            description: 'Time-honored methods passed down through generations of skilled Mediterranean artisans.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/hammer-bold.svg',
                __icon_query__: 'craft tools'
            }
        },
        {
            title: 'Natural Materials',
            description: 'Locally sourced clay and minerals create authentic terracotta with unique character and warmth.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/leaf-bold.svg',
                __icon_query__: 'natural earth'
            }
        },
        {
            title: 'Artisan Legacy',
            description: 'Each piece reflects centuries of cultural heritage and the personal touch of master craftspeople.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'heritage star'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = terracottaBulletIconsSlideSchema

export type TerracottaBulletIconsSlideData = z.infer<typeof terracottaBulletIconsSlideSchema>

interface TerracottaBulletIconsSlideLayoutProps {
    data?: Partial<TerracottaBulletIconsSlideData>
}

const TerracottaBulletIconsSlideLayout: React.FC<TerracottaBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
            >
                {/* Decorative diamond ornament - top right */}
                <div className="absolute top-8 right-8 opacity-20" style={{ color: "var(--primary-color, #8d4e2a)" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9l-6.91 2.74L12 18l-3.09-6.26L2 9l6.91-2.74L12 2z" />
                    </svg>
                </div>

                {/* Decorative line accent - bottom left */}
                <div className="absolute bottom-12 left-8 w-24 h-px opacity-30" style={{ backgroundColor: "var(--primary-color, #8d4e2a)" }}></div>

                {/* Company logo/name header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #2d1a0e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                            style={{ 
                                color: "var(--background-text, #2d1a0e)",
                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                            }}
                        >
                            {slideData?.title || 'Artisan Craftsmanship'}
                        </h1>
                        
                        {/* Decorative divider with diamond */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-px" style={{ backgroundColor: "var(--stroke, rgba(141, 78, 42, 0.2))" }}></div>
                            <div className="mx-3" style={{ color: "var(--primary-color, #8d4e2a)" }}>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                                    <path d="M4 0l1 3 3 1-3 1-1 3-1-3L0 4l3-1L4 0z" />
                                </svg>
                            </div>
                            <div className="w-16 h-px" style={{ backgroundColor: "var(--stroke, rgba(141, 78, 42, 0.2))" }}></div>
                        </div>

                        <p 
                            className="text-lg leading-relaxed max-w-4xl mx-auto"
                            style={{ 
                                color: "var(--background-text, #2d1a0e)",
                                fontFamily: "var(--body-font-family, Libre Baskerville)"
                            }}
                        >
                            {slideData?.description || 'Discover the timeless beauty of handcrafted Mediterranean traditions, where every piece tells a story of heritage and skilled artisanship.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className={`grid gap-8 flex-1 ${bulletPoints.length <= 2 ? 'grid-cols-2' : bulletPoints.length === 3 ? 'grid-cols-3' : 'grid-cols-2 grid-rows-2'}`}>
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="rounded-lg p-6 border"
                                style={{
                                    background: "var(--card-color, rgba(255, 250, 240, 0.8))",
                                    border: "1px solid var(--stroke, rgba(141, 78, 42, 0.15))",
                                    borderRadius: "8px"
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ 
                                            backgroundColor: "var(--primary-color, #8d4e2a)",
                                            border: "1px solid rgba(141, 78, 42, 0.2)"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-6 h-6"
                                            color="var(--primary-text, #faf0e6)"
                                            title={bullet.icon.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-xl font-semibold mb-3"
                                            style={{ 
                                                color: "var(--background-text, #2d1a0e)",
                                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            className="text-base leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #2d1a0e)",
                                                fontFamily: "var(--body-font-family, Libre Baskerville)"
                                            }}
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TerracottaBulletIconsSlideLayout