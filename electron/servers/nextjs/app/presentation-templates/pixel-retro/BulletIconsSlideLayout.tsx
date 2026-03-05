import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'pixel-retro-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A retro gaming pixel art style slide with title, description, and bullet points paired with icons.'

const pixelRetroBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('GAME OVER').meta({
        description: "Main title of the slide",
    }),
    description: z.string().max(150).default('System analysis complete. Critical errors detected in legacy protocols. Initiating diagnostic procedures for optimal performance restoration.').meta({
        description: "Main description text explaining the content",
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
            __icon_query__: z.string().min(5).max(20).default("warning alert") 
        }),
    })).min(2).max(4).default([
        {
            title: 'SYSTEM ERROR',
            description: 'Critical malfunction detected in primary systems. Immediate attention required for restoration.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/warning-bold.svg',
                __icon_query__: 'warning alert'
            }
        },
        {
            title: 'MEMORY FULL',
            description: 'Storage capacity exceeded maximum threshold. Data corruption imminent without intervention.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/database-bold.svg',
                __icon_query__: 'database storage'
            }
        },
        {
            title: 'POWER LOW',
            description: 'Energy levels dropping below operational requirements. Backup systems activated automatically.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/battery-bold.svg',
                __icon_query__: 'battery power'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = pixelRetroBulletIconsSlideSchema

export type PixelRetroBulletIconsSlideData = z.infer<typeof pixelRetroBulletIconsSlideSchema>

interface PixelRetroBulletIconsSlideLayoutProps {
    data?: Partial<PixelRetroBulletIconsSlideData>
}

const PixelRetroBulletIconsSlideLayout: React.FC<PixelRetroBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                }}
            >
                {/* Decorative pixel grid background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                        backgroundImage: `
                            linear-gradient(90deg, var(--stroke, rgba(80,200,120,0.35)) 1px, transparent 1px),
                            linear-gradient(var(--stroke, rgba(80,200,120,0.35)) 1px, transparent 1px)
                        `,
                        backgroundSize: '32px 32px'
                    }}></div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-30" style={{ background: 'var(--primary-color, #50c878)' }}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 opacity-20" style={{ background: 'var(--primary-color, #50c878)' }}></div>

                {/* Company header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6" style={{
                        borderBottom: '2px dashed var(--stroke, rgba(80,200,120,0.35))',
                        paddingBottom: '12px'
                    }}>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-bold" style={{ 
                                    color: 'var(--primary-color, #50c878)',
                                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                }}>
                                    {(slideData as any)?.__companyName__ || 'SYSTEM'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 pt-20 pb-8">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 style={{ 
                            color: "var(--primary-color, #50c878)",
                            fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                        }} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            {slideData?.title || 'GAME OVER'}
                        </h1>
                        
                        {/* Blinking cursor effect */}
                        <div className="mt-4 flex items-center">
                            <div className="w-4 h-6 animate-pulse" style={{ background: 'var(--primary-color, #50c878)' }}></div>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="flex flex-1 gap-12">
                        {/* Left Section - Description */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="p-6" style={{
                                border: '2px solid var(--stroke, rgba(80,200,120,0.3))',
                                background: 'var(--card-color, rgba(80,200,120,0.06))'
                            }}>
                                <div className="mb-4 text-xs font-bold" style={{ 
                                    color: "var(--primary-color, #50c878)",
                                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                }}>
                                    > SYSTEM_LOG.TXT
                                </div>
                                <p style={{ 
                                    color: "var(--background-text, #50c878)",
                                    fontFamily: "var(--body-font-family, 'VT323')"
                                }} className="text-xl leading-relaxed">
                                    {slideData?.description || 'System analysis complete. Critical errors detected in legacy protocols. Initiating diagnostic procedures for optimal performance restoration.'}
                                </p>
                            </div>
                        </div>

                        {/* Right Section - Bullet Points */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="space-y-6">
                                {bulletPoints.map((bullet, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        {/* Pixel bullet point */}
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-4 h-4" style={{ background: 'var(--primary-color, #50c878)' }}></div>
                                        </div>

                                        {/* Icon */}
                                        <div style={{ 
                                            border: '2px solid var(--stroke, rgba(80,200,120,0.4))',
                                            background: 'var(--primary-color, #50c878)'
                                        }} className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                            <RemoteSvgIcon
                                                url={bullet.icon?.__icon_url__}
                                                strokeColor={"currentColor"}
                                                className="w-6 h-6"
                                                color="var(--primary-text, #1a1a2e)"
                                                title={bullet.icon?.__icon_query__}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 style={{ 
                                                color: "var(--primary-color, #50c878)",
                                                fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                            }} className="text-lg font-bold mb-3">
                                                {bullet.title}
                                            </h3>
                                            
                                            {/* Dashed divider */}
                                            <div className="mb-3 h-0.5" style={{
                                                backgroundImage: `repeating-linear-gradient(90deg, var(--stroke, rgba(80,200,120,0.35)) 0, var(--stroke, rgba(80,200,120,0.35)) 4px, transparent 4px, transparent 8px)`
                                            }}></div>
                                            
                                            <p style={{ 
                                                color: "var(--background-text, #50c878)",
                                                fontFamily: "var(--body-font-family, 'VT323')"
                                            }} className="text-lg leading-relaxed">
                                                {bullet.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PixelRetroBulletIconsSlideLayout