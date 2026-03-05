import React from 'react'
import * as z from "zod";

export const layoutId = 'origami-paper-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'An origami paper themed slide with title, description, and bullet points each paired with an icon.'

const origamiPaperBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Creative Elements').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover the art of thoughtful design through carefully crafted elements that bring clarity and purpose to every creative endeavor.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("origami paper")
        })
    })).min(2).max(4).default([
        {
            title: 'Paper Craftsmanship',
            description: 'Transform simple materials into meaningful designs through precision and careful attention to detail.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/origami-bold.svg',
                __icon_query__: 'origami craft'
            }
        },
        {
            title: 'Geometric Precision',
            description: 'Mathematical beauty emerges from clean lines and thoughtful proportions in every fold.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/triangle-bold.svg',
                __icon_query__: 'geometric shape'
            }
        },
        {
            title: 'Layered Depth',
            description: 'Multiple dimensions create visual interest through subtle shadows and overlapping elements.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/layers-bold.svg',
                __icon_query__: 'paper layers'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = origamiPaperBulletIconsSlideSchema

export type OrigamiPaperBulletIconsSlideData = z.infer<typeof origamiPaperBulletIconsSlideSchema>

interface OrigamiPaperBulletIconsSlideLayoutProps {
    data?: Partial<OrigamiPaperBulletIconsSlideData>
}

const OrigamiPaperBulletIconsSlideLayout: React.FC<OrigamiPaperBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Outfit)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-normal" style={{ color: 'var(--background-text, #2d2d3d)', fontFamily: 'var(--body-font-family, Nunito Sans)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Triangle 1 */}
                <div 
                    className="absolute top-12 right-20 opacity-10"
                    style={{
                        width: '80px',
                        height: '80px',
                        background: 'var(--primary-color, #e07a5f)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        transform: 'rotate(15deg)'
                    }}
                ></div>

                {/* Decorative Triangle 2 */}
                <div 
                    className="absolute bottom-24 left-12 opacity-8"
                    style={{
                        width: '60px',
                        height: '60px',
                        background: 'var(--primary-color, #e07a5f)',
                        clipPath: 'polygon(30% 0%, 0% 100%, 100% 70%)',
                        transform: 'rotate(-25deg)'
                    }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-16 pt-14 pb-8">
                    {/* Title Section */}
                    <div className="mb-6 max-w-3xl">
                        <h1 
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--heading-font-family, Outfit)"
                            }} 
                            className="text-4xl font-medium leading-tight mb-4"
                        >
                            {slideData?.title || 'Creative Elements'}
                        </h1>
                        
                        {/* Origami Divider */}
                        <div className="flex items-center mb-4">
                            <div className="h-px flex-1" style={{ background: 'var(--stroke, rgba(224, 122, 95, 0.15))' }}></div>
                            <div 
                                className="w-3 h-3 mx-3"
                                style={{
                                    background: 'var(--primary-color, #e07a5f)',
                                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                                }}
                            ></div>
                            <div className="h-px flex-1" style={{ background: 'var(--stroke, rgba(224, 122, 95, 0.15))' }}></div>
                        </div>

                        <p 
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--body-font-family, Nunito Sans)"
                            }} 
                            className="text-base font-normal leading-relaxed"
                        >
                            {slideData?.description || 'Discover the art of thoughtful design through carefully crafted elements that bring clarity and purpose to every creative endeavor.'}
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index}
                                className="p-4 flex items-start gap-3"
                                style={{
                                    background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    borderRadius: '4px',
                                    boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
                                }}
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={bullet.icon.__icon_url__}
                                        alt={bullet.icon.__icon_query__}
                                        className="w-8 h-8"
                                        style={{ filter: `brightness(0) saturate(100%) sepia(100%) hue-rotate(15deg)` }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--heading-font-family, Outfit)"
                                        }} 
                                        className="text-lg font-medium mb-2 leading-tight"
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p 
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--body-font-family, Nunito Sans)"
                                        }} 
                                        className="text-sm font-normal leading-relaxed"
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

export default OrigamiPaperBulletIconsSlideLayout