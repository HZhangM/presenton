import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'vintage-paper-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A vintage paper themed slide with title, description, and bullet points each paired with an icon.'

const vintagePageBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Ancient Wisdom').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('The timeless principles that have guided civilizations through centuries of progress and transformation, offering insights for modern challenges.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("knowledge book")
        }),
    })).min(2).max(4).default([
        {
            title: 'Traditional Knowledge',
            description: 'Ancient texts and manuscripts preserve wisdom that remains relevant across generations.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'book scroll ancient'
            }
        },
        {
            title: 'Cultural Heritage',
            description: 'Time-honored practices and customs that connect us to our ancestral roots and identity.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'heritage culture'
            }
        },
        {
            title: 'Philosophical Insights',
            description: 'Enduring philosophical principles that guide ethical decision-making and personal growth.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'wisdom philosophy'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = vintagePageBulletIconsSlideSchema

export type VintagePaperBulletIconsSlideData = z.infer<typeof vintagePageBulletIconsSlideSchema>

interface VintagePaperBulletIconsSlideLayoutProps {
    data?: Partial<VintagePaperBulletIconsSlideData>
}

const VintagePaperBulletIconsSlideLayout: React.FC<VintagePaperBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                }}
            >
                {/* Decorative corner flourishes */}
                <div className="absolute top-4 left-4 opacity-20" style={{ color: 'var(--primary-color, #8b4513)' }}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                        <path d="M30 5 L35 15 L45 10 L40 20 L50 25 L40 30 L45 40 L35 35 L30 45 L25 35 L15 40 L20 30 L10 25 L20 20 L15 10 L25 15 Z" />
                    </svg>
                </div>

                <div className="absolute bottom-4 right-4 opacity-15" style={{ color: 'var(--primary-color, #8b4513)' }}>
                    <svg width="80" height="20" viewBox="0 0 80 20" fill="currentColor">
                        <path d="M5 10 L15 5 L25 10 L35 5 L45 10 L55 5 L65 10 L75 5" stroke="currentColor" strokeWidth="1" fill="none" />
                        <circle cx="40" cy="10" r="3" />
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-16 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #3a2e1e)', fontFamily: 'var(--body-font-family, Crimson Text)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-16 pt-16 pb-12">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
                            style={{ 
                                color: "var(--background-text, #3a2e1e)",
                                fontFamily: "var(--heading-font-family, Playfair Display)"
                            }}
                        >
                            <span className="text-8xl float-left mr-3 mt-2 leading-none" style={{ color: "var(--primary-color, #8b4513)" }}>
                                {(slideData?.title || 'Ancient Wisdom')[0]}
                            </span>
                            {(slideData?.title || 'Ancient Wisdom').slice(1)}
                        </h1>
                    </div>

                    {/* Ornamental divider */}
                    <div className="flex items-center mb-8">
                        <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(139, 69, 19, 0.25))' }}></div>
                        <div className="mx-4" style={{ color: 'var(--primary-color, #8b4513)' }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                            </svg>
                        </div>
                        <div className="flex-1 h-px" style={{ background: 'var(--stroke, rgba(139, 69, 19, 0.25))' }}></div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p 
                            className="text-xl leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #3a2e1e)",
                                fontFamily: "var(--body-font-family, Crimson Text)"
                            }}
                        >
                            {slideData?.description || 'The timeless principles that have guided civilizations through centuries of progress and transformation, offering insights for modern challenges.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-sm"
                                style={{ 
                                    border: '1px solid rgba(139,69,19,0.15)',
                                    background: 'rgba(255,250,240,0.5)'
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ background: "var(--primary-color, #8b4513)" }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-6 h-6"
                                            color="var(--primary-text, #f5e6c8)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-xl font-bold mb-3"
                                            style={{ 
                                                color: "var(--primary-color, #8b4513)",
                                                fontFamily: "var(--heading-font-family, Playfair Display)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            className="text-base leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #3a2e1e)",
                                                fontFamily: "var(--body-font-family, Crimson Text)"
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

export default VintagePaperBulletIconsSlideLayout