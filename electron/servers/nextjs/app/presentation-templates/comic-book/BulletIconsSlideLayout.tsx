import React from 'react'
import * as z from "zod";

export const layoutId = 'comic-book-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A comic book themed slide with title, description, and bullet points each paired with an icon.'

const comicBookBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('SUPER FEATURES!').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Unleash the incredible power of these amazing features that will transform your experience and deliver extraordinary results!').meta({
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
            __icon_query__: z.string().min(5).max(20).default("lightning bolt")
        })
    })).min(2).max(4).default([
        {
            title: 'Lightning Speed',
            description: 'Blazing fast performance that delivers results in the blink of an eye with incredible efficiency.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/bolt-bold.svg',
                __icon_query__: 'lightning bolt'
            }
        },
        {
            title: 'Super Strength',
            description: 'Unmatched power and reliability that handles even the toughest challenges with ease.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/dumbbell-bold.svg',
                __icon_query__: 'strength power'
            }
        },
        {
            title: 'X-Ray Vision',
            description: 'Crystal clear insights that reveal hidden opportunities and unlock amazing potential.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/eye-bold.svg',
                __icon_query__: 'vision eye'
            }
        },
        {
            title: 'Hero Support',
            description: 'Always there when you need us most with legendary customer service and assistance.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shield-bold.svg',
                __icon_query__: 'shield hero'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = comicBookBulletIconsSlideSchema

export type ComicBookBulletIconsSlideData = z.infer<typeof comicBookBulletIconsSlideSchema>

interface ComicBookBulletIconsSlideLayoutProps {
    data?: Partial<ComicBookBulletIconsSlideData>
}

const ComicBookBulletIconsSlideLayout: React.FC<ComicBookBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Bangers)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-xl font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, Bangers)",
                                        textShadow: '2px 2px 0 #ffffff'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative POW Badge */}
                <div className="absolute top-16 right-20 opacity-30">
                    <div
                        className="w-20 h-20 rounded-full flex items-center justify-center transform rotate-12 text-sm font-normal"
                        style={{
                            background: 'var(--primary-color, #e53935)',
                            color: 'var(--primary-text, #ffffff)',
                            border: '3px solid #1a1a1a',
                            boxShadow: '4px 4px 0 #1a1a1a',
                            fontFamily: "var(--heading-font-family, Bangers)"
                        }}
                    >
                        POW!
                    </div>
                </div>

                {/* Decorative Halftone Pattern */}
                <div className="absolute bottom-20 left-16 opacity-20">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <defs>
                            <pattern id="halftone" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                <circle cx="4" cy="4" r="2" fill="var(--primary-color, #e53935)" />
                            </pattern>
                        </defs>
                        <rect width="60" height="60" fill="url(#halftone)" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-14 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-4xl font-normal mb-4 leading-tight transform -skew-x-6"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, Bangers)",
                                textShadow: '3px 3px 0 #ffffff',
                                WebkitTextStroke: '2px #1a1a1a'
                            }}
                        >
                            {slideData?.title || 'SUPER FEATURES!'}
                        </h1>
                        
                        {/* Jagged Divider */}
                        <div className="relative mb-4">
                            <svg width="100" height="8" viewBox="0 0 100 8">
                                <path
                                    d="M0,4 L10,0 L20,8 L30,0 L40,8 L50,0 L60,8 L70,0 L80,8 L90,0 L100,4"
                                    stroke="var(--stroke, rgba(0, 0, 0, 0.8))"
                                    strokeWidth="3"
                                    fill="none"
                                />
                            </svg>
                        </div>

                        <p 
                            className="text-lg leading-relaxed max-w-4xl font-normal"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, Comic Neue)"
                            }}
                        >
                            {slideData?.description || 'Unleash the incredible power of these amazing features that will transform your experience and deliver extraordinary results!'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-3"
                                style={{
                                    border: '3px solid #1a1a1a',
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                    borderRadius: '4px',
                                    boxShadow: '4px 4px 0 #1a1a1a'
                                }}
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center"
                                        style={{
                                            background: '#ffeb3b',
                                            border: '2px solid #1a1a1a'
                                        }}
                                    >
                                        <img
                                            src={bullet.icon.__icon_url__}
                                            alt={bullet.icon.__icon_query__}
                                            className="w-6 h-6"
                                            style={{ filter: "brightness(0)" }}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-xl font-normal mb-2 leading-tight"
                                        style={{
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--heading-font-family, Bangers)",
                                            textShadow: '1px 1px 0 #ffffff'
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, Comic Neue)"
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

export default ComicBookBulletIconsSlideLayout