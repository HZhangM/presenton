import React from 'react'
import * as z from "zod";

export const layoutId = 'brutalist-web-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A brutalist web slide with title, description, and bullet points each paired with an icon featuring raw design and heavy borders.'

const brutalistWebBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('RAW TRUTH').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('No filters. No polish. Just the brutal honesty of uncompromising design that serves function over form and substance over style.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("structure block")
        })
    })).min(2).max(4).default([
        {
            title: 'EXPOSED STRUCTURE',
            description: 'Show the skeleton. Reveal the framework. Let users see how the system actually works beneath.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/grid-bold.svg',
                __icon_query__: 'grid structure'
            }
        },
        {
            title: 'FUNCTION FIRST',
            description: 'Every element serves a purpose. No decoration for decoration sake. Utility drives design.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/wrench-bold.svg',
                __icon_query__: 'wrench tool'
            }
        },
        {
            title: 'HEAVY BORDERS',
            description: 'Thick black lines define boundaries. Visual hierarchy through weight and contrast.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/square-bold.svg',
                __icon_query__: 'square block'
            }
        },
        {
            title: 'ZERO POLISH',
            description: 'Embrace the rough edges. Beauty through rawness and uncompromising authenticity.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/hammer-bold.svg',
                __icon_query__: 'hammer raw'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = brutalistWebBulletIconsSlideSchema

export type BrutalistWebBulletIconsSlideData = z.infer<typeof brutalistWebBulletIconsSlideSchema>

interface BrutalistWebBulletIconsSlideLayoutProps {
    data?: Partial<BrutalistWebBulletIconsSlideData>
}

const BrutalistWebBulletIconsSlideLayout: React.FC<BrutalistWebBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Anton)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div 
                            className="flex items-center gap-3 p-3"
                            style={{
                                border: '4px solid #111111',
                                background: '#ffffff',
                                borderRadius: 0,
                                boxShadow: '6px 6px 0 #111111'
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-bold uppercase" 
                                    style={{ 
                                        color: 'var(--background-text, #111111)',
                                        fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-16 right-16 w-16 h-16 opacity-30"
                    style={{ 
                        background: 'var(--primary-color, #ff4500)',
                        border: '4px solid #111111'
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-20 left-12 w-24 h-4"
                    style={{ 
                        background: '#111111',
                        transform: 'skew(-15deg)'
                    }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <div 
                            className="text-xs font-bold uppercase mb-2 px-2 py-1 inline-block"
                            style={{ 
                                color: 'var(--primary-text, #ffffff)',
                                background: 'var(--primary-color, #ff4500)',
                                fontFamily: "var(--body-font-family, IBM Plex Mono)"
                            }}
                        >
                            BRUTALIST_DESIGN
                        </div>
                        <h1 
                            className="text-4xl font-normal mb-4 leading-none uppercase"
                            style={{ 
                                color: "var(--background-text, #111111)",
                                fontFamily: "var(--heading-font-family, Anton)"
                            }}
                        >
                            {slideData?.title || 'RAW TRUTH'}
                        </h1>
                        
                        {/* Thick divider */}
                        <div 
                            className="h-1 w-full mb-4"
                            style={{ background: '#111111' }}
                        ></div>
                        
                        <p 
                            className="text-sm leading-relaxed max-w-3xl font-medium"
                            style={{ 
                                color: "var(--background-text, #111111)",
                                fontFamily: "var(--body-font-family, IBM Plex Mono)"
                            }}
                        >
                            {slideData?.description || 'No filters. No polish. Just the brutal honesty of uncompromising design that serves function over form and substance over style.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 gap-3 max-w-5xl">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 flex items-start gap-4"
                                style={{
                                    border: '4px solid #111111',
                                    background: '#ffffff',
                                    borderRadius: 0,
                                    boxShadow: '6px 6px 0 #111111'
                                }}
                            >
                                {/* Oversized Number */}
                                <div
                                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl font-normal"
                                    style={{
                                        background: 'var(--primary-color, #ff4500)',
                                        color: 'var(--primary-text, #ffffff)',
                                        fontFamily: "var(--heading-font-family, Anton)",
                                        border: '4px solid #111111'
                                    }}
                                >
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ filter: "brightness(0)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-lg font-normal mb-1 leading-tight uppercase"
                                        style={{
                                            color: "var(--background-text, #111111)",
                                            fontFamily: "var(--heading-font-family, Anton)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-xs leading-relaxed font-medium"
                                        style={{
                                            color: "var(--background-text, #111111)",
                                            fontFamily: "var(--body-font-family, IBM Plex Mono)"
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

export default BrutalistWebBulletIconsSlideLayout