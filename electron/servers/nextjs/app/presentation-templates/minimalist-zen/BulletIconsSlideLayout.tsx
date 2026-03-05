import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'minimalist-zen-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A minimalist zen slide with title, description, and bullet points each paired with an icon.'

const bulletPointsWithIconsSchema = z.object({
    title: z.string().min(3).max(40).default('Essential Elements').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('The path to clarity begins with understanding the fundamental principles that guide thoughtful design and purposeful action.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("zen circle") 
        }),
    })).min(2).max(4).default([
        {
            title: 'Simplicity',
            description: 'Remove the unnecessary to reveal what truly matters, allowing essence to emerge naturally.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/circle-bold.svg',
                __icon_query__: 'circle simple'
            }
        },
        {
            title: 'Balance',
            description: 'Find harmony between elements, creating space for breathing and natural flow.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/scale-bold.svg',
                __icon_query__: 'balance scales'
            }
        },
        {
            title: 'Mindfulness',
            description: 'Every choice serves a purpose, every element has meaning in the greater whole.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'mindful heart'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = bulletPointsWithIconsSchema

export type BulletPointsWithIconsData = z.infer<typeof bulletPointsWithIconsSchema>

interface BulletPointsWithIconsSlideLayoutProps {
    data?: Partial<BulletPointsWithIconsData>
}

const BulletPointsWithIconsSlideLayout: React.FC<BulletPointsWithIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Noto Serif JP)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-normal" style={{ color: 'var(--background-text, #2d2d2d)', fontFamily: 'var(--body-font-family, Noto Sans JP)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Enso Circle */}
                <div className="absolute top-20 right-24 opacity-20">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="var(--primary-color, #1a1a1a)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="280 40"
                            transform="rotate(-90 60 60)"
                        />
                    </svg>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-32 left-16 w-32 h-px" style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-24 pb-16">
                    {/* Title Section */}
                    <div className="mb-12 max-w-2xl">
                        <h1 
                            style={{ 
                                color: "var(--background-text, #2d2d2d)",
                                fontFamily: "var(--heading-font-family, Noto Serif JP)"
                            }} 
                            className="text-5xl font-normal leading-tight mb-8"
                        >
                            {slideData?.title || 'Essential Elements'}
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-px" style={{ background: 'var(--stroke, rgba(0, 0, 0, 0.1))' }}></div>
                        </div>

                        <p 
                            style={{ 
                                color: "var(--background-text, #2d2d2d)",
                                fontFamily: "var(--body-font-family, Noto Sans JP)"
                            }} 
                            className="text-lg font-light leading-relaxed"
                        >
                            {slideData?.description || 'The path to clarity begins with understanding the fundamental principles that guide thoughtful design and purposeful action.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="space-y-12 max-w-4xl">
                            {bulletPoints.map((bullet, index) => (
                                <div key={index} className="flex items-start space-x-8">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor="var(--primary-color, #1a1a1a)"
                                            className="w-8 h-8"
                                            color="var(--primary-color, #1a1a1a)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <h3 
                                            style={{ 
                                                color: "var(--background-text, #2d2d2d)",
                                                fontFamily: "var(--heading-font-family, Noto Serif JP)"
                                            }} 
                                            className="text-2xl font-normal mb-4"
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            style={{ 
                                                color: "var(--background-text, #2d2d2d)",
                                                fontFamily: "var(--body-font-family, Noto Sans JP)"
                                            }} 
                                            className="text-base font-light leading-relaxed max-w-xl"
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BulletPointsWithIconsSlideLayout