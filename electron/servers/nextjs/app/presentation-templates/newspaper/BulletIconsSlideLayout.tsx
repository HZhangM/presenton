import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'newspaper-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A newspaper-styled slide with title, description, and bullet points each paired with an icon.'

const bulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Breaking News').meta({
        description: "Main title of the slide",
    }),
    description: z.string().max(150).default('Local businesses report significant changes in operational procedures following new industry regulations and market developments.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("news article") 
        }),
    })).min(2).max(4).default([
        {
            title: 'Market Analysis',
            description: 'Industry experts weigh in on the current market trends affecting local commerce and trade.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/chart-line-bold.svg',
                __icon_query__: 'chart analysis'
            }
        },
        {
            title: 'Policy Updates',
            description: 'New regulatory framework introduces changes that will impact business operations citywide.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/file-text-bold.svg',
                __icon_query__: 'document policy'
            }
        },
        {
            title: 'Economic Impact',
            description: 'Financial implications of recent developments show mixed results across different sectors.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/dollar-sign-bold.svg',
                __icon_query__: 'money economy'
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
            <link href="https://fonts.googleapis.com/css2?family=Unna:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Unna)"
                }}
            >
                {/* Decorative masthead border */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--primary-color, #1a1a1a)" }}></div>
                <div className="absolute top-2 left-0 right-0 h-px" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>

                {/* Decorative column divider */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4 pb-4" style={{ borderBottom: "1px solid var(--stroke, rgba(0, 0, 0, 0.2))" }}>
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span 
                                    className="text-sm font-bold tracking-wide uppercase" 
                                    style={{ 
                                        color: 'var(--primary-color, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, Unna)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__ || 'THE HERALD'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Title Section with headline rule */}
                    <div className="mb-8">
                        <div className="mb-4">
                            <div className="h-1" style={{ background: "var(--primary-color, #1a1a1a)" }}></div>
                            <div className="h-px mt-1" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>
                        </div>
                        <h1 
                            style={{ 
                                color: "var(--primary-color, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, Unna)"
                            }} 
                            className="text-5xl font-bold leading-tight mb-4"
                        >
                            {slideData?.title || 'Breaking News'}
                        </h1>
                        <div className="h-px" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p 
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, 'Source Serif 4')"
                            }} 
                            className="text-lg leading-relaxed"
                        >
                            {slideData?.description || 'Local businesses report significant changes in operational procedures following new industry regulations and market developments.'}
                        </p>
                    </div>

                    {/* Decorative flourish */}
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2">
                            <div className="h-px w-8" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #1a1a1a)" }}></div>
                            <div className="h-px w-8" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>
                        </div>
                    </div>

                    {/* Bullet Points in newspaper columns */}
                    <div className="flex-1 grid grid-cols-2 gap-12">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="pb-4"
                                style={{ 
                                    borderTop: index < 2 ? "2px solid var(--primary-color, #1a1a1a)" : "none",
                                    borderBottom: "1px solid var(--stroke, rgba(0, 0, 0, 0.2))",
                                    paddingTop: "16px"
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center border"
                                        style={{ 
                                            borderColor: "var(--primary-color, #1a1a1a)",
                                            background: "transparent"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-5 h-5"
                                            color="var(--primary-color, #1a1a1a)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            style={{ 
                                                color: "var(--primary-color, #1a1a1a)",
                                                fontFamily: "var(--heading-font-family, Unna)"
                                            }} 
                                            className="text-xl font-bold mb-2 uppercase tracking-wide"
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            style={{ 
                                                color: "var(--background-text, #1a1a1a)",
                                                fontFamily: "var(--body-font-family, 'Source Serif 4')"
                                            }} 
                                            className="text-base leading-relaxed"
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom border */}
                    <div className="mt-8">
                        <div className="h-px" style={{ background: "var(--stroke, rgba(0, 0, 0, 0.2))" }}></div>
                        <div className="h-1 mt-1" style={{ background: "var(--primary-color, #1a1a1a)" }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BulletIconsSlideLayout