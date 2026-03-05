import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-academia-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in dark academia style.'

const darkAcademiaBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Scholarly Pursuits').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('The pursuit of knowledge requires dedication to timeless principles that have guided scholars through centuries of intellectual discovery and academic excellence.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("academic book")
        })
    })).min(2).max(4).default([
        {
            title: 'Classical Literature',
            description: 'Immerse yourself in the profound works of antiquity that shaped human thought and culture.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/book-bold.svg',
                __icon_query__: 'classical book'
            }
        },
        {
            title: 'Philosophical Inquiry',
            description: 'Question the fundamental nature of existence through rigorous philosophical examination.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/lightbulb-bold.svg',
                __icon_query__: 'philosophy light'
            }
        },
        {
            title: 'Historical Research',
            description: 'Uncover the hidden narratives of the past through meticulous archival investigation.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/magnifying-glass-bold.svg',
                __icon_query__: 'research magnify'
            }
        },
        {
            title: 'Academic Writing',
            description: 'Master the art of scholarly discourse through precise and eloquent written expression.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/pen-bold.svg',
                __icon_query__: 'academic pen'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = darkAcademiaBulletIconsSlideSchema

export type DarkAcademiaBulletIconsSlideData = z.infer<typeof darkAcademiaBulletIconsSlideSchema>

interface DarkAcademiaBulletIconsSlideLayoutProps {
    data?: Partial<DarkAcademiaBulletIconsSlideData>
}

const DarkAcademiaBulletIconsSlideLayout: React.FC<DarkAcademiaBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Spectral)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-medium" 
                                    style={{ 
                                        color: 'var(--background-text, #e8dcc8)',
                                        fontFamily: "var(--body-font-family, Spectral)"
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
                    className="absolute top-16 right-16 w-32 h-32 opacity-15"
                    style={{ 
                        background: 'radial-gradient(circle, var(--primary-color, #c8a882) 2px, transparent 2px)',
                        backgroundSize: '16px 16px'
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-16 left-16 text-6xl opacity-10 font-serif"
                    style={{ color: 'var(--primary-color, #c8a882)' }}
                >
                    ❦
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-12 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-3xl font-semibold mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #e8dcc8)",
                                fontFamily: "var(--heading-font-family, Spectral)"
                            }}
                        >
                            {slideData?.title || 'Scholarly Pursuits'}
                        </h1>
                        
                        {/* Decorative divider */}
                        <div className="flex items-center justify-center mb-4">
                            <div 
                                className="h-px flex-1 max-w-16"
                                style={{ background: 'var(--stroke, rgba(200, 168, 130, 0.25))' }}
                            ></div>
                            <div 
                                className="mx-3 text-lg"
                                style={{ color: 'var(--primary-color, #c8a882)' }}
                            >
                                ❦
                            </div>
                            <div 
                                className="h-px flex-1 max-w-16"
                                style={{ background: 'var(--stroke, rgba(200, 168, 130, 0.25))' }}
                            ></div>
                        </div>
                        
                        <p 
                            className="text-base leading-relaxed max-w-4xl font-normal"
                            style={{ 
                                color: "var(--background-text, #e8dcc8)",
                                fontFamily: "var(--body-font-family, Spectral)"
                            }}
                        >
                            {slideData?.description || 'The pursuit of knowledge requires dedication to timeless principles that have guided scholars through centuries of intellectual discovery and academic excellence.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-1 gap-4 max-w-5xl">
                            {bulletPoints.map((bullet, index) => (
                                <div
                                    key={index}
                                    className="p-4 flex items-start gap-4"
                                    style={{
                                        border: '1px solid rgba(200,168,130,0.15)',
                                        background: 'rgba(200,168,130,0.06)',
                                        borderRadius: '4px'
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src={bullet.icon.__icon_url__}
                                            alt={bullet.icon.__icon_query__}
                                            className="w-8 h-8"
                                            style={{ 
                                                filter: "brightness(0) saturate(100%) invert(85%) sepia(23%) saturate(464%) hue-rotate(7deg) brightness(95%) contrast(89%)"
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="text-lg font-semibold mb-2 leading-snug"
                                            style={{
                                                color: "var(--primary-color, #c8a882)",
                                                fontFamily: "var(--heading-font-family, Spectral)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed font-normal"
                                            style={{
                                                color: "var(--background-text, #e8dcc8)",
                                                fontFamily: "var(--body-font-family, Spectral)"
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
            </div>
        </>
    )
}

export default DarkAcademiaBulletIconsSlideLayout