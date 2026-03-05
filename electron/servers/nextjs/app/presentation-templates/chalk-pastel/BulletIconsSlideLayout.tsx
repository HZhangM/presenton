import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'chalk-pastel-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A chalk pastel themed slide with title, description, and bullet points paired with icons'

const chalkPastelBulletIconsSchema = z.object({
    title: z.string().min(3).max(40).default('Creative Ideas').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Unleash your creativity with our innovative approach to problem-solving and artistic expression through collaborative methods.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("creative idea")
        })
    })).min(2).max(4).default([
        {
            title: 'Artistic Vision',
            description: 'Transform your ideas into beautiful visual concepts with our creative design methodology.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'palette art'
            }
        },
        {
            title: 'Collaborative Process',
            description: 'Work together with our team to bring your creative vision to life through iterative feedback.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'team collaboration'
            }
        },
        {
            title: 'Innovative Solutions',
            description: 'Discover unique approaches that set your project apart from traditional design methods.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'lightbulb innovation'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = chalkPastelBulletIconsSchema

export type ChalkPastelBulletIconsData = z.infer<typeof chalkPastelBulletIconsSchema>

interface ChalkPastelBulletIconsSlideProps {
    data?: Partial<ChalkPastelBulletIconsData>
}

const ChalkPastelBulletIconsSlide: React.FC<ChalkPastelBulletIconsSlideProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []
    const pastelColors = ['#e57373', '#64b5f6', '#fff176', '#81c784']

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Kalam)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #3a3530)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative chalk dots */}
                <div className="absolute top-16 right-20 opacity-60">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ background: '#e57373' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: '#64b5f6' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: '#fff176' }}></div>
                    </div>
                </div>

                {/* Wavy decorative line */}
                <div className="absolute bottom-20 left-20 opacity-30">
                    <svg width="120" height="20" viewBox="0 0 120 20">
                        <path 
                            d="M0 10 Q30 0 60 10 T120 10" 
                            stroke="var(--primary-color, #e57373)" 
                            strokeWidth="2" 
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-12">
                    {/* Title Section */}
                    <div className="mb-6 text-center">
                        <h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 relative inline-block"
                            style={{ color: "var(--background-text, #3a3530)" }}
                        >
                            {slideData?.title || 'Creative Ideas'}
                            <svg 
                                className="absolute -bottom-2 left-0 w-full h-3" 
                                viewBox="0 0 200 12"
                                style={{ opacity: 0.4 }}
                            >
                                <path 
                                    d="M0 8 Q50 2 100 8 T200 8" 
                                    stroke="var(--primary-color, #e57373)" 
                                    strokeWidth="3" 
                                    fill="none"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </h1>
                        <p 
                            className="text-lg leading-relaxed max-w-3xl mx-auto"
                            style={{ 
                                color: "var(--background-text, #3a3530)",
                                fontFamily: "var(--body-font-family, Nunito)"
                            }}
                        >
                            {slideData?.description || 'Unleash your creativity with our innovative approach to problem-solving and artistic expression through collaborative methods.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid gap-8 w-full max-w-5xl ${bulletPoints.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                            {bulletPoints.map((bullet, index) => (
                                <div 
                                    key={index}
                                    className="p-6 rounded-2xl relative"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 255, 0.5))",
                                        border: "2px solid var(--stroke, rgba(229, 115, 115, 0.25))"
                                    }}
                                >
                                    {/* Pastel accent block */}
                                    <div 
                                        className="absolute -top-2 -left-2 w-8 h-8 rounded-full opacity-60"
                                        style={{ background: pastelColors[index % pastelColors.length] }}
                                    ></div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div 
                                            className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
                                            style={{ background: pastelColors[index % pastelColors.length] }}
                                        >
                                            <RemoteSvgIcon
                                                url={bullet.icon?.__icon_url__}
                                                strokeColor={"currentColor"}
                                                className="w-7 h-7"
                                                color="var(--primary-text, #ffffff)"
                                                title={bullet.icon?.__icon_query__}
                                            />
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h3 
                                                className="text-xl font-bold mb-3"
                                                style={{ color: "var(--background-text, #3a3530)" }}
                                            >
                                                {bullet.title}
                                            </h3>
                                            <p 
                                                className="text-base leading-relaxed"
                                                style={{ 
                                                    color: "var(--background-text, #3a3530)",
                                                    fontFamily: "var(--body-font-family, Nunito)"
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
            </div>
        </>
    )
}

export default ChalkPastelBulletIconsSlide