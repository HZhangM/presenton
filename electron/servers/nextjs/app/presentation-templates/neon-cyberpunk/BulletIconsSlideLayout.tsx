import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'neon-cyberpunk-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A neon cyberpunk themed slide with title, description, and bullet points paired with icons featuring glowing effects and futuristic styling.'

const neonCyberpunkBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Neural Network').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Advanced AI systems revolutionize data processing with quantum-enhanced algorithms and neural pathway optimization for maximum efficiency.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("circuit board")
        }),
    })).min(2).max(4).default([
        {
            title: 'Quantum Processing',
            description: 'Accelerated computation through quantum entanglement protocols and multi-dimensional data structures.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/cpu-bolt-bold.svg',
                __icon_query__: 'quantum processor'
            }
        },
        {
            title: 'Neural Pathways',
            description: 'Self-optimizing network architecture with adaptive learning algorithms and predictive analytics.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/brain-bold.svg',
                __icon_query__: 'neural network'
            }
        },
        {
            title: 'Data Encryption',
            description: 'Military-grade security protocols with blockchain verification and quantum-resistant algorithms.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/shield-check-bold.svg',
                __icon_query__: 'security shield'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = neonCyberpunkBulletIconsSlideSchema

export type NeonCyberpunkBulletIconsSlideData = z.infer<typeof neonCyberpunkBulletIconsSlideSchema>

interface NeonCyberpunkBulletIconsSlideLayoutProps {
    data?: Partial<NeonCyberpunkBulletIconsSlideData>
}

const NeonCyberpunkBulletIconsSlideLayout: React.FC<NeonCyberpunkBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Orbitron)"
                }}
            >
                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 sm:px-12 lg:px-20 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--background-text, #e0e0f0)' }}>
                                    {(slideData as any)?.__companyName__ || 'Company Name'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Corner Brackets */}
                <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2" style={{ borderColor: 'var(--primary-color, #ff2d95)' }}></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2" style={{ borderColor: 'var(--primary-color, #ff2d95)' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2" style={{ borderColor: 'var(--primary-color, #ff2d95)' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2" style={{ borderColor: 'var(--primary-color, #ff2d95)' }}></div>

                {/* Glitch Bars */}
                <div className="absolute top-32 right-12 w-16 h-1" style={{ background: 'var(--primary-color, #ff2d95)', boxShadow: '0 0 8px var(--primary-color, #ff2d95)' }}></div>
                <div className="absolute bottom-32 left-12 w-20 h-1" style={{ background: '#00ffff', boxShadow: '0 0 8px #00ffff' }}></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-8">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider"
                            style={{ 
                                color: "var(--background-text, #e0e0f0)",
                                textShadow: '0 0 20px var(--primary-color, #ff2d95)'
                            }}
                        >
                            {slideData?.title || 'Neural Network'}
                        </h1>
                        <div className="w-24 h-0.5 mt-4" style={{ background: 'linear-gradient(90deg, var(--primary-color, #ff2d95) 0%, #00ffff 100%)', boxShadow: '0 0 10px var(--primary-color, #ff2d95)' }}></div>
                    </div>

                    {/* Description */}
                    <div className="mb-10">
                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: "var(--background-text, #e0e0f0)",
                                fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                            }}
                        >
                            {slideData?.description || 'Advanced AI systems revolutionize data processing with quantum-enhanced algorithms and neural pathway optimization for maximum efficiency.'}
                        </p>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded border"
                                style={{
                                    border: '1px solid rgba(255,45,149,0.2)',
                                    background: 'rgba(10,10,30,0.7)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 15px rgba(255,45,149,0.1)'
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div 
                                        className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center border"
                                        style={{ 
                                            background: 'var(--card-color, rgba(255, 45, 149, 0.08))',
                                            border: '1px solid var(--stroke, rgba(255, 45, 149, 0.3))',
                                            boxShadow: '0 0 15px rgba(255,45,149,0.2)'
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon?.__icon_url__}
                                            strokeColor={"currentColor"}
                                            className="w-6 h-6"
                                            color={index % 2 === 0 ? "var(--primary-color, #ff2d95)" : "#00ffff"}
                                            title={bullet.icon?.__icon_query__}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 
                                            className="text-xl font-bold mb-3 tracking-wide"
                                            style={{ 
                                                color: index % 2 === 0 ? "var(--primary-color, #ff2d95)" : "#00ffff",
                                                textShadow: `0 0 10px ${index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : '#00ffff'}`
                                            }}
                                        >
                                            {bullet.title}
                                        </h3>
                                        <p 
                                            className="text-base leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #e0e0f0)",
                                                fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                                            }}
                                        >
                                            {bullet.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Neon Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1280 720">
                        <defs>
                            <pattern id="cyberpunk-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--primary-color, #ff2d95)" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#cyberpunk-grid)" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default NeonCyberpunkBulletIconsSlideLayout