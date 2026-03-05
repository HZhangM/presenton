import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'watercolor-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon using watercolor theme styling.'

const watercolorBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Benefits').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover the transformative advantages that our innovative solutions bring to your business operations and growth strategy.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("growth chart")
        }),
    })).min(2).max(4).default([
        {
            title: 'Enhanced Productivity',
            description: 'Streamline your workflows with intelligent automation and intuitive design that adapts to your needs.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/checks-bold.svg',
                __icon_query__: 'productivity boost'
            }
        },
        {
            title: 'Cost Efficiency',
            description: 'Reduce operational expenses while maximizing return on investment through smart resource allocation.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/fediverse-logo-bold.svg',
                __icon_query__: 'cost savings'
            }
        },
        {
            title: 'Seamless Integration',
            description: 'Connect with existing systems effortlessly, ensuring smooth transitions and minimal disruption.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/checks-bold.svg',
                __icon_query__: 'integration connect'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = watercolorBulletIconsSlideSchema

export type WatercolorBulletIconsSlideData = z.infer<typeof watercolorBulletIconsSlideSchema>

interface WatercolorBulletIconsSlideLayoutProps {
    data?: Partial<WatercolorBulletIconsSlideData>
}

const WatercolorBulletIconsSlideLayout: React.FC<WatercolorBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                }}
            >
                {/* Decorative watercolor blobs */}
                <div className="absolute top-20 right-32 w-64 h-64 rounded-full opacity-10" style={{
                    background: "radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)",
                    filter: "blur(40px)"
                }}></div>
                <div className="absolute bottom-16 left-20 w-48 h-48 rounded-full opacity-8" style={{
                    background: "radial-gradient(circle, var(--primary-color, #7c5cbf) 20%, transparent 60%)",
                    filter: "blur(30px)"
                }}></div>

                {/* Company logo/name header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-medium" style={{ 
                                    color: 'var(--background-text, #2d2d3d)',
                                    fontFamily: "var(--body-font-family, Lora)"
                                }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main content */}
                <div className="flex flex-col h-full px-12 lg:px-20 pt-20 pb-12">
                    {/* Header section */}
                    <div className="mb-6 text-center">
                        <h1 
                            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--heading-font-family, Playfair Display)"
                            }}
                        >
                            {slideData?.title || 'Key Benefits'}
                        </h1>
                        <div 
                            className="w-24 h-1 mx-auto mb-8 rounded-full opacity-60"
                            style={{ background: "linear-gradient(90deg, transparent, var(--primary-color, #7c5cbf), transparent)" }}
                        ></div>
                        <p 
                            className="text-xl leading-relaxed max-w-4xl mx-auto"
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--body-font-family, Lora)"
                            }}
                        >
                            {slideData?.description || 'Discover the transformative advantages that our innovative solutions bring to your business operations and growth strategy.'}
                        </p>
                    </div>

                    {/* Bullet points grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid gap-4 w-full max-w-5xl ${bulletPoints.length <= 2 ? 'grid-cols-2' : bulletPoints.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                            {bulletPoints.map((bullet, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-3xl border flex items-start gap-4"
                                    style={{
                                        backdropFilter: "blur(12px)",
                                        background: "var(--card-color, rgba(255, 255, 255, 0.65))",
                                        border: "1px solid var(--stroke, rgba(124, 92, 191, 0.25))",
                                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg"
                                        style={{ background: "var(--primary-color, #7c5cbf)" }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-6 h-6"
                                            color="var(--primary-text, #ffffff)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="text-2xl font-bold mb-1"
                                            style={{
                                                color: "var(--background-text, #2d2d3d)",
                                                fontFamily: "var(--heading-font-family, Playfair Display)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p
                                            className="text-lg leading-relaxed"
                                            style={{
                                                color: "var(--background-text, #2d2d3d)",
                                                fontFamily: "var(--body-font-family, Lora)"
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

export default WatercolorBulletIconsSlideLayout