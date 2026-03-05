import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'ocean-deep-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in ocean deep theme.'

const bulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Ocean Innovation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Dive deep into transformative solutions that flow seamlessly through modern business challenges, creating waves of innovation and sustainable growth.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("water wave")
        }),
    })).min(2).max(4).default([
        {
            title: 'Fluid Adaptability',
            description: 'Like ocean currents, our solutions adapt seamlessly to changing business environments and requirements.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/water-drop-bold.svg',
                __icon_query__: 'water drop flow'
            }
        },
        {
            title: 'Deep Analytics',
            description: 'Explore the depths of your data with comprehensive insights that surface actionable intelligence.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/chart-line-bold.svg',
                __icon_query__: 'analytics chart'
            }
        },
        {
            title: 'Sustainable Growth',
            description: 'Build lasting success with environmentally conscious strategies that preserve resources for the future.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/leaf-bold.svg',
                __icon_query__: 'growth leaf'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = bulletIconsSlideSchema

export type BulletIconsSlideData = z.infer<typeof bulletIconsSlideSchema>

interface BulletIconsSlideLayoutProps {
    data?: Partial<BulletIconsSlideData>
}

const BulletIconsSlideLayout: React.FC<BulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Raleway)"
                }}
            >
                {/* Decorative Wave Pattern */}
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <svg width="400" height="300" viewBox="0 0 400 300">
                        <path
                            d="M0,150 Q100,50 200,150 T400,150 L400,0 L0,0 Z"
                            fill="var(--primary-color, #00bcd4)"
                        />
                    </svg>
                </div>

                {/* Floating Bubble Accents */}
                <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
                    <div className="w-16 h-16 rounded-full" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
                </div>
                <div className="absolute bottom-32 right-32 opacity-5 pointer-events-none">
                    <div className="w-24 h-24 rounded-full" style={{ background: "var(--primary-color, #00bcd4)" }}></div>
                </div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #c8e0f0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-20 pb-12">
                    {/* Title Section */}
                    <div className="mb-10">
                        <h1 
                            style={{ color: "var(--background-text, #c8e0f0)" }} 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            {slideData?.title || 'Ocean Innovation'}
                        </h1>
                        
                        {/* Curved Divider */}
                        <div className="mt-6">
                            <svg width="120" height="8" viewBox="0 0 120 8">
                                <path
                                    d="M0,4 Q30,0 60,4 T120,4"
                                    stroke="var(--primary-color, #00bcd4)"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <p 
                            style={{ 
                                color: "var(--background-text, #c8e0f0)", 
                                fontFamily: "var(--body-font-family, Open Sans)" 
                            }} 
                            className="text-xl leading-relaxed max-w-4xl opacity-90"
                        >
                            {slideData?.description || 'Dive deep into transformative solutions that flow seamlessly through modern business challenges, creating waves of innovation and sustainable growth.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-2xl backdrop-blur-sm"
                                style={{
                                    border: "1px solid rgba(0,188,212,0.15)",
                                    background: "rgba(0,188,212,0.06)",
                                    backdropFilter: "blur(8px)"
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon Container */}
                                    <div 
                                        className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{ 
                                            background: "var(--primary-color, #00bcd4)",
                                            boxShadow: "0 8px 25px rgba(0,188,212,0.3)"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-7 h-7"
                                            color="var(--primary-text, #0a1628)"
                                            title={bullet.icon.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            style={{ color: "var(--background-text, #c8e0f0)" }} 
                                            className="text-xl font-semibold mb-3"
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            style={{ 
                                                color: "var(--background-text, #c8e0f0)", 
                                                fontFamily: "var(--body-font-family, Open Sans)" 
                                            }} 
                                            className="text-base leading-relaxed opacity-80"
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

export default BulletIconsSlideLayout