import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'glassmorphism-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A glassmorphism slide with title, description, and bullet points each paired with an icon featuring frosted glass effects.'

const glassmorphismBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Modern Solutions').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Discover innovative approaches that transform your business with cutting-edge technology and seamless user experiences.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("innovation gear")
        }),
    })).min(2).max(4).default([
        {
            title: 'Smart Innovation',
            description: 'Leverage advanced AI and machine learning to streamline operations and boost productivity.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/checks-bold.svg',
                __icon_query__: 'innovation gear'
            }
        },
        {
            title: 'Seamless Integration',
            description: 'Connect all your tools and platforms with unified APIs and cloud-based solutions.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/fediverse-logo-bold.svg',
                __icon_query__: 'connect network'
            }
        },
        {
            title: 'Enhanced Security',
            description: 'Protect your data with enterprise-grade encryption and advanced security protocols.',
            icon: {
                __icon_url__: 'https://presenton-public.s3.ap-southeast-1.amazonaws.com/static/icons/bold/checks-bold.svg',
                __icon_query__: 'shield security'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = glassmorphismBulletIconsSlideSchema

export type GlassmorphismBulletIconsSlideData = z.infer<typeof glassmorphismBulletIconsSlideSchema>

interface GlassmorphismBulletIconsSlideLayoutProps {
    data?: Partial<GlassmorphismBulletIconsSlideData>
}

const GlassmorphismBulletIconsSlideLayout: React.FC<GlassmorphismBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Plus Jakarta Sans)"
                }}
            >
                {/* Decorative Glass Orbs */}
                <div className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-30" style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.2)"
                }}></div>
                <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full opacity-20" style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255,255,255,0.25)"
                }}></div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && <span className="text-lg font-semibold" style={{ color: 'var(--primary-text, #ffffff)' }}>
                                {(slideData as any)?.__companyName__ || 'Company Name'}
                            </span>}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Header Section */}
                    <div className="mb-6">
                        <div className="p-6 rounded-3xl" style={{
                            background: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                        }}>
                            <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--primary-text, #ffffff)" }}>
                                {slideData?.title || 'Modern Solutions'}
                            </h1>
                            <div className="w-20 h-1 mb-4 rounded-full" style={{ background: "var(--primary-color, #7c3aed)" }}></div>
                            <p className="text-xl leading-relaxed" style={{ color: "var(--primary-text, #ffffff)" }}>
                                {slideData?.description || 'Discover innovative approaches that transform your business with cutting-edge technology and seamless user experiences.'}
                            </p>
                        </div>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div key={index} className="p-5 rounded-2xl flex items-start gap-4" style={{
                                background: "rgba(255,255,255,0.15)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                            }}>
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{
                                    background: "rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.3)"
                                }}>
                                    <RemoteSvgIcon
                                        url={bullet.icon.__icon_url__}
                                        strokeColor={"currentColor"}
                                        className="w-6 h-6"
                                        color="var(--primary-text, #ffffff)"
                                        title={bullet.icon.__icon_query__}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {bullet.title}
                                    </h3>
                                    <p className="text-base leading-relaxed opacity-90" style={{ color: "var(--primary-text, #ffffff)" }}>
                                        {bullet.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Glass Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2" style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(124,58,237,0.3) 50%, rgba(255,255,255,0.1) 100%)",
                    backdropFilter: "blur(10px)"
                }}></div>
            </div>
        </>
    )
}

export default GlassmorphismBulletIconsSlideLayout