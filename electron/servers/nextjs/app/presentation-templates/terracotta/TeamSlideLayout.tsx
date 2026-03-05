import React from 'react'
import * as z from "zod";

export const layoutId = 'terracotta-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A warm Mediterranean-styled team showcase with terracotta tones and elegant typography'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('Maria Santos'),
    role: z.string().min(2).max(40).default('Creative Director'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait warm lighting")
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Our Artisan Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Elena Rodriguez',
            role: 'Master Craftsperson',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b1-5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman craftsperson warm terracotta background'
            }
        },
        {
            name: 'Marco Benedetti',
            role: 'Design Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional man designer Mediterranean style'
            }
        },
        {
            name: 'Sofia Moreau',
            role: 'Artisan Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman artisan warm lighting'
            }
        }
    ]).meta({
        description: "Team members with their information",
    })
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface TerracottaTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const TerracottaTeamSlide: React.FC<TerracottaTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-1 md:grid-cols-2 gap-8'
        } else if (count === 3) {
            return 'grid-cols-1 md:grid-cols-3 gap-6'
        } else {
            return 'grid-cols-2 md:grid-cols-4 gap-6'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, 'Cormorant Garamond')"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #2d1a0e)' }}>
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                        <circle cx="60" cy="60" r="50" stroke="var(--primary-color, #8d4e2a)" strokeWidth="2" fill="none" opacity="0.3"/>
                        <path d="M60 10 L65 25 L80 20 L70 35 L85 40 L70 45 L80 60 L65 55 L60 70 L55 55 L40 60 L50 45 L35 40 L50 35 L40 20 L55 25 Z" fill="var(--primary-color, #8d4e2a)" opacity="0.4"/>
                    </svg>
                </div>

                <div className="absolute bottom-12 left-8 w-64 h-1 opacity-20" style={{ background: "var(--primary-color, #8d4e2a)" }}></div>
                <div className="absolute bottom-16 left-12 w-4 h-4 rotate-45 opacity-20" style={{ background: "var(--primary-color, #8d4e2a)" }}></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h1 
                            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
                            style={{ 
                                color: "var(--background-text, #2d1a0e)",
                                fontFamily: "var(--heading-font-family, 'Cormorant Garamond')"
                            }}
                        >
                            {slideData?.title || 'Our Artisan Team'}
                        </h1>
                        
                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="w-24 h-px" style={{ background: "var(--stroke, rgba(141, 78, 42, 0.2))" }}></div>
                            <div className="w-2 h-2 rotate-45" style={{ background: "var(--primary-color, #8d4e2a)" }}></div>
                            <div className="w-24 h-px" style={{ background: "var(--stroke, rgba(141, 78, 42, 0.2))" }}></div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center group">
                                    {/* Member Card */}
                                    <div 
                                        className="p-6 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
                                        style={{ 
                                            background: "var(--card-color, rgba(255, 250, 240, 0.8))",
                                            border: "1px solid var(--stroke, rgba(141, 78, 42, 0.15))"
                                        }}
                                    >
                                        {/* Member Photo */}
                                        <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md" 
                                             style={{ border: "2px solid var(--stroke, rgba(141, 78, 42, 0.2))" }}>
                                            <img
                                                src={member.image.__image_url__ || 'https://placehold.co/128x128'}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Member Info */}
                                        <div>
                                            <h3 
                                                className="text-xl font-bold mb-2"
                                                style={{ 
                                                    color: "var(--background-text, #2d1a0e)",
                                                    fontFamily: "var(--heading-font-family, 'Cormorant Garamond')"
                                                }}
                                            >
                                                {member.name}
                                            </h3>
                                            <p 
                                                className="text-base font-medium italic"
                                                style={{ 
                                                    color: "var(--primary-color, #8d4e2a)",
                                                    fontFamily: "var(--body-font-family, 'Libre Baskerville')"
                                                }}
                                            >
                                                {member.role}
                                            </p>
                                        </div>
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

export default TerracottaTeamSlide