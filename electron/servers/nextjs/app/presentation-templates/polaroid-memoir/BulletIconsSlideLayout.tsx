import React from 'react'
import * as z from "zod";

export const layoutId = 'polaroid-memoir-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A polaroid memoir slide with title, description, and bullet points each paired with an icon in nostalgic scrapbook style.'

const polaroidMemoirBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Cherished Moments').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Every memory tells a story, captured in time like precious photographs that remind us of the beautiful journey we have traveled together.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("heart memory")
        })
    })).min(2).max(4).default([
        {
            title: 'Sweet Memories',
            description: 'Capturing those spontaneous moments that make life extraordinary and fill our hearts with joy.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'heart love'
            }
        },
        {
            title: 'Family Adventures',
            description: 'From weekend getaways to holiday traditions, every adventure becomes a treasured story.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/map-bold.svg',
                __icon_query__: 'adventure map'
            }
        },
        {
            title: 'Growing Together',
            description: 'Watching loved ones grow and change while celebrating each milestone along the way.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'growth star'
            }
        },
        {
            title: 'Timeless Bonds',
            description: 'The connections we share that only grow stronger with each passing season of life.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/infinity-bold.svg',
                __icon_query__: 'infinity bond'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = polaroidMemoirBulletIconsSlideSchema

export type PolaroidMemoirBulletIconsSlideData = z.infer<typeof polaroidMemoirBulletIconsSlideSchema>

interface PolaroidMemoirBulletIconsSlideLayoutProps {
    data?: Partial<PolaroidMemoirBulletIconsSlideData>
}

const PolaroidMemoirBulletIconsSlideLayout: React.FC<PolaroidMemoirBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Caveat)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-normal" 
                                    style={{ 
                                        color: 'var(--background-text, #3a3020)',
                                        fontFamily: "var(--body-font-family, Lato)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Tape Strip */}
                <div 
                    className="absolute top-16 right-20 w-16 h-8 opacity-60 transform rotate-12"
                    style={{ 
                        background: 'linear-gradient(45deg, var(--primary-color, #d4764e) 25%, transparent 25%), linear-gradient(-45deg, var(--primary-color, #d4764e) 25%, transparent 25%)',
                        backgroundSize: '8px 8px'
                    }}
                ></div>

                {/* Decorative Pin */}
                <div 
                    className="absolute bottom-20 left-16 w-3 h-3 rounded-full opacity-40"
                    style={{ background: 'var(--primary-color, #d4764e)' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-12 pb-8">
                    {/* Title Section */}
                    <div className="mb-5 text-center">
                        <h1 
                            className="text-4xl font-bold mb-4 leading-tight transform -rotate-1"
                            style={{ 
                                color: "var(--background-text, #3a3020)",
                                fontFamily: "var(--heading-font-family, Caveat)"
                            }}
                        >
                            {slideData?.title || 'Cherished Moments'}
                        </h1>
                        
                        {/* Divider - Perforated Line */}
                        <div className="flex justify-center mb-4">
                            <div 
                                className="w-32 h-px"
                                style={{ 
                                    background: 'transparent',
                                    borderTop: '1px dashed var(--stroke, rgba(212, 118, 78, 0.2))'
                                }}
                            ></div>
                        </div>

                        <p 
                            className="text-lg font-normal leading-relaxed max-w-2xl mx-auto"
                            style={{ 
                                color: "var(--background-text, #3a3020)",
                                fontFamily: "var(--body-font-family, Lato)"
                            }}
                        >
                            {slideData?.description || 'Every memory tells a story, captured in time like precious photographs that remind us of the beautiful journey we have traveled together.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4 place-content-center">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 relative flex items-start gap-3 transform"
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '2px',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                                    padding: '12px 12px 40px 12px',
                                    transform: `rotate(${index % 2 === 0 ? '1deg' : '-1.5deg'})`
                                }}
                            >
                                {/* Tape Decoration */}
                                <div
                                    className="absolute -top-2 -right-2 w-8 h-4 opacity-70 transform rotate-45"
                                    style={{
                                        background: 'var(--primary-color, #d4764e)',
                                        opacity: 0.3
                                    }}
                                ></div>

                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ filter: "sepia(100%) saturate(200%) hue-rotate(15deg) brightness(0.8)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-xl font-bold mb-1 leading-tight"
                                        style={{
                                            color: "var(--background-text, #3a3020)",
                                            fontFamily: "var(--heading-font-family, Caveat)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #3a3020)",
                                            fontFamily: "var(--body-font-family, Lato)"
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

export default PolaroidMemoirBulletIconsSlideLayout