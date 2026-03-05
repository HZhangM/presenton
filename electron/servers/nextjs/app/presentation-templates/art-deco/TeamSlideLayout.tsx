import React from 'react'
import * as z from "zod";

export const layoutId = 'art-deco-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A glamorous Art Deco themed team slide showcasing members with geometric patterns and gold accents'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).meta({
        description: "Team member's full name"
    }),
    role: z.string().min(2).max(40).meta({
        description: "Job title or position"
    }),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/400x400"),
        __image_prompt__: z.string().min(10).max(50).default("Professional business person headshot")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Distinguished Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Victoria Sterling',
            role: 'Chief Executive',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b1db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman executive headshot'
            }
        },
        {
            name: 'Alexander Rothschild',
            role: 'Chief Technology Officer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman CTO headshot'
            }
        },
        {
            name: 'Evangeline Beaumont',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman creative director headshot'
            }
        },
        {
            name: 'Theodore Ashford',
            role: 'Operations Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman operations director headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface TeamSlideLayoutProps {
    data?: Partial<TeamSlideData>
}

const ArtDecoTeamSlide: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2'
        } else if (count === 3) {
            return 'grid-cols-3'
        } else {
            return 'grid-cols-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Poiret One)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && 
                                    <span 
                                        className="text-lg font-light tracking-wider" 
                                        style={{ color: 'var(--primary-color, #d4af37)' }}
                                    >
                                        {(slideData as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                )}

                {/* Art Deco Sunburst Decoration */}
                <div className="absolute top-8 right-8 w-32 h-32 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <radialGradient id="sunburst" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" style={{stopColor: 'var(--primary-color, #d4af37)', stopOpacity: 0.3}} />
                                <stop offset="100%" style={{stopColor: 'var(--primary-color, #d4af37)', stopOpacity: 0.1}} />
                            </radialGradient>
                        </defs>
                        {Array.from({ length: 16 }, (_, i) => (
                            <line
                                key={i}
                                x1="50"
                                y1="50"
                                x2={50 + 40 * Math.cos((i * Math.PI) / 8)}
                                y2={50 + 40 * Math.sin((i * Math.PI) / 8)}
                                stroke="var(--primary-color, #d4af37)"
                                strokeWidth={i % 2 === 0 ? "0.5" : "0.25"}
                                opacity="0.6"
                            />
                        ))}
                        <circle cx="50" cy="50" r="8" fill="url(#sunburst)" />
                    </svg>
                </div>

                {/* Chevron Pattern Decoration */}
                <div className="absolute bottom-8 left-8 w-24 h-24 opacity-15">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        {Array.from({ length: 8 }, (_, i) => (
                            <polyline
                                key={i}
                                points={`20,${30 + i * 6} 50,${10 + i * 6} 80,${30 + i * 6}`}
                                fill="none"
                                stroke="var(--primary-color, #d4af37)"
                                strokeWidth="1"
                                opacity="0.8"
                            />
                        ))}
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-20 pb-8">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-light tracking-widest mb-6"
                            style={{ 
                                color: "var(--background-text, #e8d8b8)",
                                letterSpacing: "0.15em"
                            }}
                        >
                            {slideData?.title || 'Our Distinguished Team'}
                        </h1>
                        
                        {/* Art Deco Divider */}
                        <div className="flex items-center justify-center mb-8">
                            <div 
                                className="h-px flex-1 max-w-24"
                                style={{ background: "var(--primary-color, #d4af37)" }}
                            ></div>
                            <div className="mx-4">
                                <svg width="24" height="12" viewBox="0 0 24 12" className="opacity-80">
                                    <polygon 
                                        points="0,6 6,0 12,6 18,0 24,6 18,12 12,6 6,12" 
                                        fill="var(--primary-color, #d4af37)"
                                    />
                                </svg>
                            </div>
                            <div 
                                className="h-px flex-1 max-w-24"
                                style={{ background: "var(--primary-color, #d4af37)" }}
                            ></div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="relative">
                                    {/* Angular Corner Brackets */}
                                    <div className="absolute -top-2 -left-2 w-6 h-6">
                                        <svg viewBox="0 0 24 24" className="w-full h-full">
                                            <path 
                                                d="M0 0L0 8L2 8L2 2L8 2L8 0Z" 
                                                fill="var(--primary-color, #d4af37)" 
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6">
                                        <svg viewBox="0 0 24 24" className="w-full h-full">
                                            <path 
                                                d="M16 0L16 2L22 2L22 8L24 8L24 0Z" 
                                                fill="var(--primary-color, #d4af37)" 
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </div>
                                    
                                    {/* Member Card */}
                                    <div 
                                        className="text-center p-6 transition-all duration-300 hover:scale-105"
                                        style={{
                                            border: "1px solid rgba(212,175,55,0.25)",
                                            background: "rgba(212,175,55,0.04)"
                                        }}
                                    >
                                        {/* Member Photo */}
                                        <div className="w-24 h-24 mx-auto mb-4 overflow-hidden border-2 border-solid relative"
                                             style={{ borderColor: "var(--primary-color, #d4af37)" }}>
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Member Info */}
                                        <div>
                                            <h3 
                                                className="text-xl font-light tracking-wide mb-2"
                                                style={{ 
                                                    color: "var(--background-text, #e8d8b8)",
                                                    fontFamily: "var(--heading-font-family, Poiret One)",
                                                    letterSpacing: "0.1em"
                                                }}
                                            >
                                                {member.name}
                                            </h3>
                                            <p 
                                                className="text-sm font-medium tracking-wider uppercase"
                                                style={{ 
                                                    color: "var(--primary-color, #d4af37)",
                                                    fontFamily: "var(--body-font-family, Josefin Sans)",
                                                    letterSpacing: "0.15em"
                                                }}
                                            >
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Corner Brackets */}
                                    <div className="absolute -bottom-2 -left-2 w-6 h-6">
                                        <svg viewBox="0 0 24 24" className="w-full h-full">
                                            <path 
                                                d="M0 16L0 24L8 24L8 22L2 22L2 16Z" 
                                                fill="var(--primary-color, #d4af37)" 
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6">
                                        <svg viewBox="0 0 24 24" className="w-full h-full">
                                            <path 
                                                d="M16 22L16 24L24 24L24 16L22 16L22 22Z" 
                                                fill="var(--primary-color, #d4af37)" 
                                                opacity="0.7"
                                            />
                                        </svg>
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

export default ArtDecoTeamSlide