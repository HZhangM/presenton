import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'magazine-editorial-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in magazine editorial style.'

const magazineEditorialBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Breaking Industry News').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Market leaders are revolutionizing their approach to digital transformation, setting new standards for innovation and operational excellence across industries.').meta({
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
            __icon_query__: z.string().min(5).max(20).default("trending chart")
        })
    })).min(2).max(4).default([
        {
            title: 'Digital Innovation',
            description: 'Companies embrace cutting-edge technologies to streamline operations and enhance customer experiences.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'digital innovation'
            }
        },
        {
            title: 'Market Growth',
            description: 'Strategic investments in technology infrastructure drive unprecedented growth and market expansion.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'growth chart'
            }
        },
        {
            title: 'Industry Leadership',
            description: 'Forward-thinking organizations establish themselves as industry leaders through bold strategic decisions.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'leadership crown'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = magazineEditorialBulletIconsSlideSchema

export type MagazineEditorialBulletIconsSlideData = z.infer<typeof magazineEditorialBulletIconsSlideSchema>

interface MagazineEditorialBulletIconsSlideLayoutProps {
    data?: Partial<MagazineEditorialBulletIconsSlideData>
}

const MagazineEditorialBulletIconsSlideLayout: React.FC<MagazineEditorialBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, DM Serif Display)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        fontFamily: "var(--heading-font-family, DM Serif Display)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                        <div 
                            className="mt-4 h-0.5"
                            style={{ background: 'var(--background-text, #1a1a1a)' }}
                        ></div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-10"
                    style={{ 
                        background: 'var(--primary-color, #e53935)',
                        clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                    }}
                ></div>
                
                <div 
                    className="absolute bottom-0 left-0 w-24 h-1 opacity-30"
                    style={{ background: 'var(--primary-color, #e53935)' }}
                ></div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-5xl font-normal mb-6 leading-tight"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--heading-font-family, DM Serif Display)"
                            }}
                        >
                            {slideData?.title || 'Breaking Industry News'}
                        </h1>
                        <div 
                            className="h-1 w-20 mb-6"
                            style={{ background: 'var(--primary-color, #e53935)' }}
                        ></div>
                        <p 
                            className="text-xl leading-relaxed max-w-4xl"
                            style={{ 
                                color: "var(--background-text, #1a1a1a)",
                                fontFamily: "var(--body-font-family, DM Sans)"
                            }}
                        >
                            {slideData?.description || 'Market leaders are revolutionizing their approach to digital transformation, setting new standards for innovation and operational excellence across industries.'}
                        </p>
                    </div>

                    {/* Divider */}
                    <div 
                        className="h-0.5 w-full mb-8"
                        style={{ background: 'var(--background-text, #1a1a1a)' }}
                    ></div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {bulletPoints.map((bullet, index) => (
                            <div
                                key={index}
                                className="p-4 relative flex items-start gap-4"
                                style={{
                                    border: '2px solid var(--background-text, #1a1a1a)',
                                    background: '#ffffff',
                                    borderRadius: 0
                                }}
                            >
                                {/* Drop Number */}
                                <div
                                    className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center text-sm font-bold"
                                    style={{
                                        background: 'var(--primary-color, #e53935)',
                                        color: 'var(--primary-text, #ffffff)',
                                        fontFamily: "var(--body-font-family, DM Sans)"
                                    }}
                                >
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                    <RemoteSvgIcon
                                        url={bullet.icon.__icon_url__}
                                        className="w-8 h-8"
                                        color="var(--background-text, #1a1a1a)"
                                        title={bullet.icon.__icon_query__}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3
                                        className="text-2xl font-normal mb-1 leading-tight"
                                        style={{
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--heading-font-family, DM Serif Display)"
                                        }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <div
                                        className="w-8 h-0.5 mb-2"
                                        style={{ background: 'var(--primary-color, #e53935)' }}
                                    ></div>
                                    <p
                                        className="text-base leading-relaxed font-normal"
                                        style={{
                                            color: "var(--background-text, #1a1a1a)",
                                            fontFamily: "var(--body-font-family, DM Sans)"
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

export default MagazineEditorialBulletIconsSlideLayout