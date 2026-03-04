import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'chalkboard-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A chalkboard-themed slide with title, description, and bullet points each paired with an icon.'

const chalkboardBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Concepts').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Essential ideas that form the foundation of our understanding and guide our approach to problem-solving.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("lightbulb idea")
        })
    })).min(2).max(4).default([
        {
            title: 'Creative Thinking',
            description: 'Approaching problems with fresh perspectives and innovative solutions that challenge conventional wisdom.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'lightbulb idea'
            }
        },
        {
            title: 'Collaboration',
            description: 'Working together effectively to combine diverse skills and knowledge for better outcomes.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'people team'
            }
        },
        {
            title: 'Continuous Learning',
            description: 'Embracing growth mindset and staying curious to adapt to changing environments.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'book learning'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = chalkboardBulletIconsSlideSchema

export type ChalkboardBulletIconsSlideData = z.infer<typeof chalkboardBulletIconsSlideSchema>

interface ChalkboardBulletIconsSlideLayoutProps {
    data?: Partial<ChalkboardBulletIconsSlideData>
}

const ChalkboardBulletIconsSlideLayout: React.FC<ChalkboardBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e8e8d0)', fontFamily: "var(--body-font-family, Patrick Hand)" }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Chalk dust decorative dots */}
                <div className="absolute top-16 right-20 opacity-20">
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full" style={{ background: "var(--background-text, #e8e8d0)" }}></div>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--background-text, #e8e8d0)" }}></div>
                        <div className="w-1 h-1 rounded-full" style={{ background: "var(--background-text, #e8e8d0)" }}></div>
                    </div>
                </div>

                {/* Chalk star decoration */}
                <div className="absolute bottom-16 left-12 opacity-15" style={{ color: "var(--primary-color, #f2c94c)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9l-6.91 2.74L12 18l-3.09-6.26L2 9l6.91-2.74L12 2z" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Title Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            style={{ 
                                color: "var(--background-text, #e8e8d0)",
                                fontFamily: "var(--heading-font-family, Caveat)",
                                borderBottom: "3px wavy var(--primary-color, #f2c94c)",
                                paddingBottom: "8px"
                            }}
                        >
                            {slideData?.title || 'Key Concepts'}
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p 
                            className="text-xl leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #e8e8d0)",
                                fontFamily: "var(--body-font-family, Patrick Hand)"
                            }}
                        >
                            {slideData?.description || 'Essential ideas that form the foundation of our understanding and guide our approach to problem-solving.'}
                        </p>
                    </div>

                    {/* Divider */}
                    <div 
                        className="mb-8 opacity-40"
                        style={{ 
                            borderTop: "2px dashed var(--stroke, rgba(245, 240, 232, 0.25))",
                            width: "100%"
                        }}
                    ></div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded"
                                style={{
                                    border: "1px dashed rgba(255,255,255,0.2)",
                                    background: "rgba(255,255,255,0.05)",
                                    borderRadius: "4px"
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                                        style={{ 
                                            background: "var(--primary-color, #f2c94c)",
                                            border: "2px dashed rgba(255,255,255,0.3)"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-7 h-7"
                                            color="var(--primary-text, #1a3a2a)"
                                            title={bullet.icon.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-2xl font-bold mb-3"
                                            style={{ 
                                                color: "var(--primary-color, #f2c94c)",
                                                fontFamily: "var(--heading-font-family, Caveat)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            className="text-lg leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #e8e8d0)",
                                                fontFamily: "var(--body-font-family, Patrick Hand)"
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

export default ChalkboardBulletIconsSlideLayout