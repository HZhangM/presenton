import React from 'react'
import * as z from "zod";

export const layoutId = 'japanese-ukiyoe-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A Japanese Ukiyo-e themed slide with title, description, and bullet points each paired with an icon.'

const japaneseUkiyoeBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('伝統の智慧 Traditional Wisdom').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Ancient Japanese principles guide modern excellence, combining timeless wisdom with contemporary innovation to create lasting value and meaningful progress.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("japanese wave")
        })
    })).min(2).max(4).default([
        {
            title: '和 Harmony',
            description: 'Balance between elements creates peaceful coexistence and sustainable growth in all endeavors.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/yin-yang-bold.svg',
                __icon_query__: 'harmony balance'
            }
        },
        {
            title: '美 Beauty',
            description: 'Find elegance in simplicity and appreciate the profound beauty in everyday moments.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/flower-bold.svg',
                __icon_query__: 'cherry blossom'
            }
        },
        {
            title: '心 Spirit',
            description: 'Cultivate inner strength and mindful awareness to navigate challenges with grace.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'meditation spirit'
            }
        },
        {
            title: '道 Path',
            description: 'The journey of continuous improvement leads to mastery and enlightenment.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/path-bold.svg',
                __icon_query__: 'mountain path'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = japaneseUkiyoeBulletIconsSlideSchema

export type JapaneseUkiyoeBulletIconsSlideData = z.infer<typeof japaneseUkiyoeBulletIconsSlideSchema>

interface JapaneseUkiyoeBulletIconsSlideLayoutProps {
    data?: Partial<JapaneseUkiyoeBulletIconsSlideData>
}

const JapaneseUkiyoeBulletIconsSlideLayout: React.FC<JapaneseUkiyoeBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Shippori Mincho)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a3a)',
                                        fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Hanko Seal */}
                <div className="absolute top-16 right-16 w-8 h-8 rounded-full opacity-80" style={{ background: 'var(--primary-color, #c23b22)' }}>
                    <div className="absolute inset-1 rounded-full border border-white opacity-60"></div>
                </div>

                {/* Decorative Wave Pattern */}
                <div className="absolute bottom-20 left-20 opacity-20">
                    <svg width="80" height="30" viewBox="0 0 80 30">
                        <path
                            d="M0,15 Q20,5 40,15 T80,15"
                            fill="none"
                            stroke="var(--background-text, #1a1a3a)"
                            strokeWidth="1"
                        />
                        <path
                            d="M0,20 Q20,10 40,20 T80,20"
                            fill="none"
                            stroke="var(--background-text, #1a1a3a)"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-12 pb-8">
                    {/* Header Section */}
                    <div className="mb-5 max-w-4xl">
                        <h1 
                            className="text-3xl font-semibold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a3a)",
                                fontFamily: "var(--heading-font-family, Shippori Mincho)"
                            }}
                        >
                            {slideData?.title || '伝統の智慧 Traditional Wisdom'}
                        </h1>
                        
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-16 h-px" style={{ background: 'var(--background-text, #1a1a3a)' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary-color, #c23b22)' }}></div>
                        </div>

                        <p 
                            className="text-base leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #1a1a3a)",
                                fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                            }}
                        >
                            {slideData?.description || 'Ancient Japanese principles guide modern excellence, combining timeless wisdom with contemporary innovation to create lasting value and meaningful progress.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-3"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 250, 0.7))',
                                    border: '1px solid var(--stroke, rgba(30, 30, 80, 0.15))',
                                    borderRadius: '4px'
                                }}
                            >
                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-7 h-7"
                                        style={{ filter: "brightness(0) saturate(100%)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-lg font-semibold mb-1 leading-tight"
                                        style={{
                                            color: "var(--background-text, #1a1a3a)",
                                            fontFamily: "var(--heading-font-family, Shippori Mincho)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #1a1a3a)",
                                            fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                                        }}
                                    >
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

export default JapaneseUkiyoeBulletIconsSlideLayout