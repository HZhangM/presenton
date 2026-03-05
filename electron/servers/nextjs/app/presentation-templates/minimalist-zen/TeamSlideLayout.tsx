import React from 'react'
import * as z from "zod";

export const layoutId = 'minimalist-zen-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A minimalist zen-inspired team slide with ultra-clean white space and subtle Japanese typography'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('田中太郎'),
    role: z.string().min(2).max(40).default('Creative Director'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional zen portrait headshot")
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('私たちのチーム').meta({
        description: "Main title of the team slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: '田中太郎',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional zen portrait headshot'
            }
        },
        {
            name: '佐藤花子',
            role: 'Design Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional zen portrait headshot'
            }
        },
        {
            name: '山田次郎',
            role: 'Strategy Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional zen portrait headshot'
            }
        }
    ])
})

export type TeamSlideData = z.infer<typeof Schema>

interface TeamSlideLayoutProps {
    data?: Partial<TeamSlideData>
}

const MinimalistZenTeamSlide: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-2 gap-4'
        if (count === 3) return 'grid-cols-3 gap-4'
        return 'grid-cols-4 gap-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-16 pt-8">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-sm font-light tracking-wider"
                                    style={{ 
                                        color: 'var(--background-text, #2d2d2d)',
                                        fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative Enso Circle */}
                <div className="absolute top-20 right-20 w-16 h-16 opacity-10">
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                        <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            fill="none" 
                            stroke="var(--primary-color, #1a1a1a)" 
                            strokeWidth="2" 
                            strokeDasharray="165 10"
                            transform="rotate(-90 32 32)"
                        />
                    </svg>
                </div>

                {/* Subtle Horizontal Line */}
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 opacity-20">
                    <div 
                        className="w-80 h-px"
                        style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                    />
                </div>

                <div className="flex flex-col items-center justify-center h-full px-20 py-12">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-5xl font-normal tracking-wide mb-4"
                            style={{ 
                                color: "var(--background-text, #2d2d2d)",
                                fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                            }}
                        >
                            {slideData?.title || '私たちのチーム'}
                        </h1>
                        
                        {/* Centered Divider */}
                        <div className="flex justify-center">
                            <div 
                                className="w-32 h-px"
                                style={{ background: "var(--stroke, rgba(0, 0, 0, 0.1))" }}
                            />
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                        {members.map((member, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-3">
                                {/* Member Photo */}
                                <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm border border-opacity-5" style={{ borderColor: "var(--stroke, rgba(0, 0, 0, 0.1))" }}>
                                    <img
                                        src={member.image.__image_url__ || ''}
                                        alt={member.image.__image_prompt__ || member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Member Info */}
                                <div className="space-y-2">
                                    <h3
                                        className="text-base font-bold tracking-wide"
                                        style={{ 
                                            color: "var(--background-text, #2d2d2d)",
                                            fontFamily: "var(--heading-font-family, 'Noto Serif JP')"
                                        }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-sm font-light tracking-wider opacity-70"
                                        style={{ 
                                            color: "var(--background-text, #2d2d2d)",
                                            fontFamily: "var(--body-font-family, 'Noto Sans JP')"
                                        }}
                                    >
                                        {member.role}
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

export default MinimalistZenTeamSlide