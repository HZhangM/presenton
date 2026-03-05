import React from 'react'
import * as z from "zod";

export const layoutId = 'mountain-mist-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in mountain mist style.'

const mountainMistBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Serene Pathways').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Through the gentle layers of understanding, we discover the essential elements that guide us toward clarity and purposeful action.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("mountain peak")
        })
    })).min(2).max(4).default([
        {
            title: 'Gentle Focus',
            description: 'Embracing clarity through mindful attention to what matters most in our journey forward.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/eye-bold.svg',
                __icon_query__: 'gentle eye'
            }
        },
        {
            title: 'Quiet Strength',
            description: 'Finding power in stillness and wisdom in the spaces between thoughts and actions.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/mountain-bold.svg',
                __icon_query__: 'mountain strength'
            }
        },
        {
            title: 'Natural Flow',
            description: 'Allowing processes to unfold organically while maintaining gentle guidance toward our goals.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/wave-bold.svg',
                __icon_query__: 'flowing water'
            }
        },
        {
            title: 'Peaceful Progress',
            description: 'Moving forward with intention and grace, honoring both the journey and destination.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/leaf-bold.svg',
                __icon_query__: 'peaceful leaf'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = mountainMistBulletIconsSlideSchema

export type MountainMistBulletIconsSlideData = z.infer<typeof mountainMistBulletIconsSlideSchema>

interface MountainMistBulletIconsSlideLayoutProps {
    data?: Partial<MountainMistBulletIconsSlideData>
}

const MountainMistBulletIconsSlideLayout: React.FC<MountainMistBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Philosopher)"
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
                                        color: 'var(--background-text, #1a2a3a)',
                                        fontFamily: "var(--body-font-family, Karla)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Mist Layer */}
                <div 
                    className="absolute top-0 right-0 w-80 h-40 opacity-10 rounded-full blur-3xl"
                    style={{ 
                        background: 'linear-gradient(135deg, var(--primary-color, #546e7a) 0%, transparent 70%)'
                    }}
                ></div>

                {/* Decorative Horizontal Rule */}
                <div 
                    className="absolute bottom-24 left-12 w-32 h-px opacity-30"
                    style={{ background: 'var(--stroke, rgba(84, 110, 122, 0.15))' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-12 pb-8">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 
                            className="text-3xl font-normal mb-4 leading-tight"
                            style={{ 
                                color: "var(--background-text, #1a2a3a)",
                                fontFamily: "var(--heading-font-family, Philosopher)"
                            }}
                        >
                            {slideData?.title || 'Serene Pathways'}
                        </h1>
                        
                        {/* Centered Divider */}
                        <div className="flex justify-center mb-4">
                            <div 
                                className="w-2/5 h-px opacity-40"
                                style={{ background: 'var(--stroke, rgba(84, 110, 122, 0.15))' }}
                            ></div>
                        </div>

                        <p 
                            className="text-base leading-relaxed max-w-3xl opacity-80"
                            style={{ 
                                color: "var(--background-text, #1a2a3a)",
                                fontFamily: "var(--body-font-family, Karla)"
                            }}
                        >
                            {slideData?.description || 'Through the gentle layers of understanding, we discover the essential elements that guide us toward clarity and purposeful action.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-1 gap-4 max-w-4xl">
                            {bulletPoints.map((bullet, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-5"
                                    style={{
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.55))',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        borderRadius: '12px'
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                        <img
                                            src={bullet.icon.__icon_url__}
                                            alt={bullet.icon.__icon_query__}
                                            className="w-8 h-8 opacity-70"
                                            style={{ filter: "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1624%) hue-rotate(188deg) brightness(96%) contrast(95%)" }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="text-lg font-normal mb-1 leading-snug"
                                            style={{
                                                color: "var(--background-text, #1a2a3a)",
                                                fontFamily: "var(--heading-font-family, Philosopher)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed font-normal opacity-80"
                                            style={{
                                                color: "var(--background-text, #1a2a3a)",
                                                fontFamily: "var(--body-font-family, Karla)"
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

export default MountainMistBulletIconsSlideLayout