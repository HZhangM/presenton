import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'sunset-warm-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in warm sunset theme.'

const sunsetWarmBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Mission').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('We believe in creating meaningful connections through innovative solutions that bring warmth and efficiency to every interaction.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("innovation")
        }),
    })).min(2).max(4).default([
        {
            title: 'Innovation First',
            description: 'We embrace cutting-edge technology to solve complex problems with elegant, user-friendly solutions.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/lightbulb-bold.svg',
                __icon_query__: 'innovation lightbulb'
            }
        },
        {
            title: 'Customer Focus',
            description: 'Every decision we make prioritizes our customers\' success and satisfaction above all else.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/heart-bold.svg',
                __icon_query__: 'customer heart focus'
            }
        },
        {
            title: 'Quality Excellence',
            description: 'We maintain the highest standards in everything we deliver, ensuring reliability and excellence.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/star-bold.svg',
                __icon_query__: 'quality star excellence'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = sunsetWarmBulletIconsSlideSchema

export type SunsetWarmBulletIconsSlideData = z.infer<typeof sunsetWarmBulletIconsSlideSchema>

interface SunsetWarmBulletIconsSlideLayoutProps {
    data?: Partial<SunsetWarmBulletIconsSlideData>
}

const SunsetWarmBulletIconsSlideLayout: React.FC<SunsetWarmBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Nunito)"
                }}
            >
                {/* Company Logo/Name Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-lg font-bold" style={{ color: 'var(--background-text, #3d1e00)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Circular Glow - Top Right */}
                <div 
                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, var(--primary-color, #e65100), transparent 70%)" }}
                ></div>

                {/* Decorative Circular Glow - Bottom Left */}
                <div 
                    className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-15 blur-2xl"
                    style={{ background: "radial-gradient(circle, #ff8f00, transparent 60%)" }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-20 pb-12">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 
                            className="text-5xl lg:text-6xl font-800 mb-6"
                            style={{ 
                                color: "var(--background-text, #3d1e00)",
                                fontFamily: "var(--heading-font-family, Nunito)"
                            }}
                        >
                            {slideData?.title || 'Our Mission'}
                        </h1>
                        
                        {/* Gradient divider */}
                        <div 
                            className="h-1 w-32 mb-6 rounded-full"
                            style={{ 
                                background: "linear-gradient(90deg, transparent, var(--primary-color, #e65100), transparent)"
                            }}
                        ></div>
                        
                        <p 
                            className="text-xl leading-relaxed max-w-3xl"
                            style={{ 
                                color: "var(--background-text, #3d1e00)",
                                fontFamily: "var(--body-font-family, 'Nunito Sans')",
                                fontWeight: "500"
                            }}
                        >
                            {slideData?.description || 'We believe in creating meaningful connections through innovative solutions that bring warmth and efficiency to every interaction.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index}
                                className="p-8 rounded-20"
                                style={{
                                    background: "rgba(255,255,255,0.55)",
                                    backdropFilter: "blur(12px)",
                                    border: "1px solid rgba(255,255,255,0.4)",
                                    borderRadius: "20px",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                                }}
                            >
                                <div className="flex items-start gap-6">
                                    {/* Icon Container */}
                                    <div 
                                        className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                                        style={{ 
                                            background: "var(--primary-color, #e65100)",
                                            boxShadow: "0 4px 12px rgba(230, 81, 0, 0.3)"
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-8 h-8"
                                            color="var(--primary-text, #ffffff)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-2xl font-700 mb-4"
                                            style={{ 
                                                color: "var(--background-text, #3d1e00)",
                                                fontFamily: "var(--heading-font-family, Nunito)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            className="text-lg leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #3d1e00)",
                                                fontFamily: "var(--body-font-family, 'Nunito Sans')",
                                                fontWeight: "500"
                                            }}
                                        >
                                            {bullet.description}
                                        </p>
                                        
                                        {/* Pill-shaped tag */}
                                        <div 
                                            className="inline-block mt-4 px-4 py-2 rounded-full text-sm font-600"
                                            style={{
                                                background: "var(--stroke, rgba(230, 81, 0, 0.2))",
                                                color: "var(--primary-color, #e65100)"
                                            }}
                                        >
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SunsetWarmBulletIconsSlideLayout