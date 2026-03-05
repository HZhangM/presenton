import React from 'react'
import * as z from "zod";

export const layoutId = 'nature-forest-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in nature forest theme.'

const IconSchema = z.object({
    __icon_url__: z.string().default(""),
    __icon_query__: z.string().min(5).max(20).default("leaf nature")
});

const natureForestBulletIconsSchema = z.object({
    title: z.string().min(3).max(40).default('Forest Conservation').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Protecting our natural forests requires understanding their vital role in maintaining ecological balance and supporting diverse wildlife communities.').meta({
        description: "Main description text explaining the topic",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(2).max(60).meta({
            description: "Bullet point title",
        }),
        description: z.string().min(10).max(100).meta({
            description: "Bullet point description",
        }),
        icon: IconSchema,
    })).min(2).max(4).default([
        {
            title: 'Biodiversity Protection',
            description: 'Forests provide habitat for countless species, maintaining ecological diversity essential for healthy ecosystems.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'tree leaf nature'
            }
        },
        {
            title: 'Carbon Sequestration',
            description: 'Trees naturally absorb carbon dioxide from the atmosphere, helping combat climate change effects.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'cloud air wind'
            }
        },
        {
            title: 'Soil Conservation',
            description: 'Root systems prevent erosion and maintain soil quality, supporting long-term land productivity.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'earth ground soil'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = natureForestBulletIconsSchema

export type NatureForestBulletIconsSlideData = z.infer<typeof natureForestBulletIconsSchema>

interface NatureForestBulletIconsSlideLayoutProps {
    data?: Partial<NatureForestBulletIconsSlideData>
}

const RemoteSvgIcon: React.FC<{ url: string; className?: string; color?: string; title?: string }> = ({ url, className = "", color = "currentColor", title }) => {
    if (!url) return <div className={`${className} bg-current opacity-20 rounded`} style={{ color }} title={title} />
    return <img src={url} className={className} style={{ filter: `brightness(0) saturate(100%) invert(${color === '#ffffff' || color === 'white' ? '1' : '0'})` }} alt={title} />
}

const NatureForestBulletIconsSlideLayout: React.FC<NatureForestBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bitter)"
                }}
            >
                {/* Decorative leaf elements */}
                <div className="absolute top-12 right-16 opacity-10 transform rotate-12">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="var(--primary-color, #7cb342)">
                        <path d="M60 10 Q90 40 80 70 Q70 90 60 110 Q50 90 40 70 Q30 40 60 10 Z" />
                    </svg>
                </div>
                <div className="absolute bottom-16 left-12 opacity-8 transform -rotate-12">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="var(--primary-color, #7cb342)">
                        <path d="M40 5 Q60 25 55 45 Q50 60 40 70 Q30 60 25 45 Q20 25 40 5 Z" />
                    </svg>
                </div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8 rounded" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #e8efe0)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-20 pb-12">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 style={{ color: "var(--background-text, #e8efe0)" }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            {slideData?.title || 'Forest Conservation'}
                        </h1>
                        
                        {/* Organic divider */}
                        <div className="mt-6 mb-8">
                            <svg width="120" height="8" viewBox="0 0 120 8" className="opacity-40">
                                <path d="M0 4 Q30 1 60 4 Q90 7 120 4" 
                                      stroke="var(--primary-color, #7cb342)" 
                                      strokeWidth="2" 
                                      fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p style={{ 
                            color: "var(--background-text, #e8efe0)", 
                            fontFamily: "var(--body-font-family, Source Sans 3)"
                        }} className="text-xl leading-relaxed opacity-90 max-w-4xl">
                            {slideData?.description || 'Protecting our natural forests requires understanding their vital role in maintaining ecological balance and supporting diverse wildlife communities.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
                        {bulletPoints.map((bullet, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl" 
                                 style={{ 
                                     background: "var(--card-color, rgba(124, 179, 66, 0.1))",
                                     border: "1px solid var(--stroke, rgba(124, 179, 66, 0.25))"
                                 }}>
                                {/* Icon */}
                                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                                     style={{ background: "var(--primary-color, #7cb342)" }}>
                                    <RemoteSvgIcon
                                        url={bullet.icon.__icon_url__}
                                        className="w-7 h-7"
                                        color="var(--primary-text, #1a2e10)"
                                        title={bullet.icon.__icon_query__}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 style={{ 
                                        color: "var(--background-text, #e8efe0)",
                                        fontFamily: "var(--heading-font-family, Bitter)"
                                    }} className="text-xl font-bold mb-3">
                                        {bullet.title}
                                    </h3>
                                    <p style={{ 
                                        color: "var(--background-text, #e8efe0)", 
                                        fontFamily: "var(--body-font-family, Source Sans 3)"
                                    }} className="text-base leading-relaxed opacity-85">
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

export default NatureForestBulletIconsSlideLayout