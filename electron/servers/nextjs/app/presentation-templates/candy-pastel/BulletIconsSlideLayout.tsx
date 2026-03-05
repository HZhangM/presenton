import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'candy-pastel-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A playful pastel slide with title, description, and bullet points each paired with an icon in candy-themed styling.'

const candyPastelBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Sweet Solutions').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover delightful ways to enhance your business with our playful and effective approaches that bring joy to productivity.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("star sparkle")
        }),
    })).min(2).max(4).default([
        {
            title: 'Colorful Innovation',
            description: 'Brighten up your workflow with creative solutions that make work feel like play.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/palette-bold.svg',
                __icon_query__: 'palette colors'
            }
        },
        {
            title: 'Sweet Collaboration',
            description: 'Build stronger teams with tools that encourage connection and shared success.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/users-bold.svg',
                __icon_query__: 'team users'
            }
        },
        {
            title: 'Magical Results',
            description: 'Transform ordinary processes into extraordinary outcomes with our enchanting approach.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/sparkles-bold.svg',
                __icon_query__: 'magic sparkles'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = candyPastelBulletIconsSlideSchema

export type CandyPastelBulletIconsSlideData = z.infer<typeof candyPastelBulletIconsSlideSchema>

interface CandyPastelBulletIconsSlideLayoutProps {
    data?: Partial<CandyPastelBulletIconsSlideData>
}

const CandyPastelBulletIconsSlideLayout: React.FC<CandyPastelBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Fredoka)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-16 right-20 opacity-20">
                    <div className="w-16 h-16 rounded-full" style={{ background: "var(--primary-color, #ab47bc)" }}></div>
                </div>
                <div className="absolute bottom-20 left-16 opacity-15">
                    <div className="w-12 h-12 rounded-full" style={{ background: "#FFB3BA" }}></div>
                </div>
                <div className="absolute top-1/3 left-10 opacity-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-color, #ab47bc)">
                        <path d="M12 0l3.09 6.26L22 9l-6.91 2.74L12 18l-3.09-6.26L2 9l6.91-2.74L12 0z" />
                    </svg>
                </div>

                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-full" style={{ 
                                background: "var(--card-color, rgba(255, 255, 255, 0.7))",
                                border: "2px solid var(--stroke, rgba(171, 71, 188, 0.2))"
                            }}>
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-600" style={{ color: 'var(--background-text, #4a3560)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-20 pb-12">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-700 mb-4"
                            style={{ 
                                color: "var(--background-text, #4a3560)",
                                fontFamily: "var(--heading-font-family, Fredoka)"
                            }}
                        >
                            {slideData?.title || 'Sweet Solutions'}
                        </h1>
                        <div className="mx-auto mb-6" style={{ width: "120px", height: "4px", background: "var(--primary-color, #ab47bc)", borderRadius: "24px" }}></div>
                        <p 
                            className="text-xl max-w-3xl mx-auto leading-relaxed"
                            style={{ 
                                color: "var(--background-text, #4a3560)",
                                fontFamily: "var(--body-font-family, Quicksand)"
                            }}
                        >
                            {slideData?.description || 'Discover delightful ways to enhance your business with our playful and effective approaches that bring joy to productivity.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid gap-4 w-full max-w-5xl ${bulletPoints.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}>
                            {bulletPoints.map((bullet, index) => (
                                <div
                                    key={index}
                                    className="p-4 flex items-start gap-3"
                                    style={{
                                        background: "rgba(255,255,255,0.65)",
                                        border: "2px solid rgba(171,71,188,0.12)",
                                        borderRadius: "24px",
                                        boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-md"
                                        style={{ background: "var(--primary-color, #ab47bc)" }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor="currentColor"
                                            className="w-6 h-6"
                                            color="var(--primary-text, #ffffff)"
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className="text-2xl font-600 mb-1"
                                            style={{
                                                color: "var(--background-text, #4a3560)",
                                                fontFamily: "var(--heading-font-family, Fredoka)"
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p
                                            className="text-base leading-relaxed"
                                            style={{
                                                color: "var(--background-text, #4a3560)",
                                                fontFamily: "var(--body-font-family, Quicksand)"
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

export default CandyPastelBulletIconsSlideLayout