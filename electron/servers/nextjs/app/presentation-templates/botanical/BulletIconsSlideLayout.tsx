import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'botanical-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A botanical-themed slide with title, description, and bullet points each paired with an icon featuring elegant green palette and botanical accents.'

const botanicalBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Natural Solutions').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Our botanical approach combines natural elements with modern innovation to create sustainable and elegant solutions for contemporary challenges.').meta({
        description: "Main description text explaining the topic",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Sustainable Growth').meta({
            description: "Bullet point title",
        }),
        description: z.string().min(15).max(100).default('Implementing eco-friendly practices that nurture long-term success while preserving natural resources.').meta({
            description: "Bullet point description",
        }),
        icon: z.object({
            __icon_url__: z.string().default(""),
            __icon_query__: z.string().min(5).max(20).default("leaf nature growth")
        }),
    })).min(2).max(4).default([
        {
            title: 'Organic Innovation',
            description: 'Blending traditional botanical wisdom with cutting-edge technology for superior results.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/leaf-bold.svg',
                __icon_query__: 'leaf nature organic'
            }
        },
        {
            title: 'Natural Harmony',
            description: 'Creating balanced ecosystems that support both business growth and environmental wellbeing.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/flower-bold.svg',
                __icon_query__: 'flower harmony balance'
            }
        },
        {
            title: 'Rooted Excellence',
            description: 'Building strong foundations through time-tested principles and sustainable practices.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/tree-bold.svg',
                __icon_query__: 'tree roots strong'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = botanicalBulletIconsSlideSchema

export type BotanicalBulletIconsSlideData = z.infer<typeof botanicalBulletIconsSlideSchema>

interface BotanicalBulletIconsSlideLayoutProps {
    data?: Partial<BotanicalBulletIconsSlideData>
}

const BotanicalBulletIconsSlideLayout: React.FC<BotanicalBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bodoni Moda)"
                }}
            >
                {/* Decorative vine element */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <path d="M20 20 Q60 40 80 80 Q100 120 140 140 Q180 160 180 180" 
                              stroke="var(--primary-color, #558b2f)" 
                              strokeWidth="2" 
                              fill="none" />
                        <circle cx="80" cy="80" r="3" fill="var(--primary-color, #558b2f)" />
                        <circle cx="140" cy="140" r="3" fill="var(--primary-color, #558b2f)" />
                    </svg>
                </div>

                {/* Decorative leaf element */}
                <div className="absolute bottom-8 left-8 w-32 h-32 opacity-8 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M20 80 Q50 20 80 80 Q50 60 20 80" 
                              fill="var(--stroke, rgba(85, 139, 47, 0.2))" />
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #2d3a2e)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-8">
                    {/* Title and Description */}
                    <div className="mb-12">
                        <h1 
                            style={{ color: "var(--background-text, #2d3a2e)" }} 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            {slideData?.title || 'Natural Solutions'}
                        </h1>
                        
                        {/* Decorative divider with leaf */}
                        <div className="flex items-center mb-6">
                            <div className="h-px flex-1" style={{ background: "var(--stroke, rgba(85, 139, 47, 0.2))" }}></div>
                            <div className="mx-4">
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M2 14 Q8 2 14 14 Q8 10 2 14" fill="var(--primary-color, #558b2f)" />
                                </svg>
                            </div>
                            <div className="h-px flex-1" style={{ background: "var(--stroke, rgba(85, 139, 47, 0.2))" }}></div>
                        </div>

                        <p 
                            style={{ 
                                color: "var(--background-text, #2d3a2e)", 
                                fontFamily: "var(--body-font-family, Lato)" 
                            }} 
                            className="text-xl leading-relaxed max-w-4xl"
                        >
                            {slideData?.description || 'Our botanical approach combines natural elements with modern innovation to create sustainable and elegant solutions for contemporary challenges.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="rounded-lg p-6 border"
                                style={{ 
                                    background: "var(--card-color, rgba(255, 255, 255, 0.75))",
                                    border: "1px solid var(--stroke, rgba(85, 139, 47, 0.1))",
                                    borderRadius: "12px"
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center border"
                                        style={{ 
                                            background: "var(--primary-color, #558b2f)",
                                            border: "1px solid rgba(85,139,47,0.15)"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-7 h-7"
                                            color="var(--primary-text, #ffffff)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            style={{ color: "var(--background-text, #2d3a2e)" }} 
                                            className="text-xl font-bold mb-3"
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            style={{ 
                                                color: "var(--background-text, #2d3a2e)", 
                                                fontFamily: "var(--body-font-family, Lato)" 
                                            }} 
                                            className="text-base leading-relaxed"
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Small leaf bullet marker */}
                                <div className="mt-4 flex justify-end">
                                    <svg width="12" height="12" viewBox="0 0 12 12">
                                        <path d="M1 10 Q6 2 11 10 Q6 7 1 10" fill="var(--stroke, rgba(85, 139, 47, 0.2))" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotanicalBulletIconsSlideLayout