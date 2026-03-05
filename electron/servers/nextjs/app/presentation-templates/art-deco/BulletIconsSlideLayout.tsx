import React from 'react'
import * as z from "zod";

export const layoutId = 'art-deco-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'An Art Deco slide with title, description, and bullet points each paired with an icon featuring geometric patterns and gold accents.'

const artDecoBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Golden Age Principles').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Embrace the elegance and precision of the Jazz Age with these timeless design principles that defined an era of luxury and innovation.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("art deco")
        })
    })).min(2).max(4).default([
        {
            title: 'Geometric Elegance',
            description: 'Sharp lines and angular patterns create sophisticated visual hierarchies that command attention.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shape-bold.svg',
                __icon_query__: 'geometric shape'
            }
        },
        {
            title: 'Luxurious Materials',
            description: 'Premium finishes and metallic accents elevate the ordinary into extraordinary experiences.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/diamond-bold.svg',
                __icon_query__: 'luxury diamond'
            }
        },
        {
            title: 'Bold Typography',
            description: 'Dramatic letterforms with generous spacing create impactful statements that resonate.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/text-bold.svg',
                __icon_query__: 'typography text'
            }
        },
        {
            title: 'Sunburst Motifs',
            description: 'Radiating patterns symbolize the optimism and energy of the machine age and modern progress.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/sun-bold.svg',
                __icon_query__: 'sunburst sun'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = artDecoBulletIconsSlideSchema

export type ArtDecoBulletIconsSlideData = z.infer<typeof artDecoBulletIconsSlideSchema>

interface ArtDecoBulletIconsSlideLayoutProps {
    data?: Partial<ArtDecoBulletIconsSlideData>
}

const ArtDecoBulletIconsSlideLayout: React.FC<ArtDecoBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Poiret One)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-normal tracking-widest uppercase"
                                        style={{ 
                                            color: 'var(--primary-color, #d4af37)',
                                            fontFamily: 'var(--body-font-family, Josefin Sans)'
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div 
                            className="mt-3 h-px"
                            style={{ background: 'var(--stroke, rgba(212, 175, 55, 0.3))' }}
                        ></div>
                    </div>
                )}

                {/* Decorative Art Deco Sunburst */}
                <div className="absolute top-16 right-20 opacity-20">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <g transform="translate(50,50)">
                            {[...Array(16)].map((_, i) => (
                                <line
                                    key={i}
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="-35"
                                    stroke="var(--primary-color, #d4af37)"
                                    strokeWidth={i % 4 === 0 ? "2" : "1"}
                                    transform={`rotate(${i * 22.5})`}
                                    opacity={i % 2 === 0 ? "1" : "0.5"}
                                />
                            ))}
                        </g>
                    </svg>
                </div>

                {/* Decorative Corner Brackets */}
                <div className="absolute bottom-20 left-16 opacity-30">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <path
                            d="M0,45 L0,60 L15,60 M45,0 L60,0 L60,15"
                            fill="none"
                            stroke="var(--primary-color, #d4af37)"
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-14 pb-8">
                    {/* Title Section */}
                    <div className="mb-6 max-w-4xl">
                        <h1 
                            style={{ 
                                color: "var(--background-text, #e8d8b8)",
                                fontFamily: "var(--heading-font-family, Poiret One)"
                            }} 
                            className="text-4xl font-normal leading-tight mb-4 tracking-widest"
                        >
                            {slideData?.title || 'Golden Age Principles'}
                        </h1>
                        
                        {/* Art Deco Divider */}
                        <div className="flex items-center justify-center mb-6">
                            <div 
                                className="h-px flex-1 max-w-20"
                                style={{ background: 'var(--primary-color, #d4af37)' }}
                            ></div>
                            <div className="mx-4">
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <polygon
                                        points="10,2 12,8 18,10 12,12 10,18 8,12 2,10 8,8"
                                        fill="var(--primary-color, #d4af37)"
                                    />
                                </svg>
                            </div>
                            <div 
                                className="h-px flex-1 max-w-20"
                                style={{ background: 'var(--primary-color, #d4af37)' }}
                            ></div>
                        </div>

                        <p 
                            style={{ 
                                color: "var(--background-text, #e8d8b8)",
                                fontFamily: "var(--body-font-family, Josefin Sans)"
                            }} 
                            className="text-lg font-light leading-relaxed tracking-wide"
                        >
                            {slideData?.description || 'Embrace the elegance and precision of the Jazz Age with these timeless design principles that defined an era of luxury and innovation.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 relative flex items-start gap-4"
                                style={{
                                    border: '1px solid var(--stroke, rgba(212, 175, 55, 0.25))',
                                    background: 'var(--card-color, rgba(212, 175, 55, 0.04))',
                                    borderRadius: 0
                                }}
                            >
                                {/* Corner Brackets */}
                                <div className="absolute top-0 left-0">
                                    <svg width="16" height="16" viewBox="0 0 16 16">
                                        <path
                                            d="M0,8 L0,0 L8,0"
                                            fill="none"
                                            stroke="var(--primary-color, #d4af37)"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 right-0">
                                    <svg width="16" height="16" viewBox="0 0 16 16">
                                        <path
                                            d="M16,8 L16,16 L8,16"
                                            fill="none"
                                            stroke="var(--primary-color, #d4af37)"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                </div>

                                {/* Icon */}
                                <div 
                                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                                    style={{
                                        border: '1px solid var(--primary-color, #d4af37)',
                                        background: 'var(--primary-color, #d4af37)'
                                    }}
                                >
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-6 h-6"
                                        style={{ filter: "brightness(0) invert(1)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-xl font-normal mb-2 leading-tight tracking-wide"
                                        style={{
                                            color: "var(--primary-color, #d4af37)",
                                            fontFamily: "var(--heading-font-family, Poiret One)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-light tracking-wide"
                                        style={{
                                            color: "var(--background-text, #e8d8b8)",
                                            fontFamily: "var(--body-font-family, Josefin Sans)"
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

export default ArtDecoBulletIconsSlideLayout