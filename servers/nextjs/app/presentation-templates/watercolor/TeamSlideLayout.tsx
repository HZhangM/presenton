import React from 'react'
import * as z from "zod";

export const layoutId = 'watercolor-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A watercolor-themed team showcase with glass-morphism cards and elegant serif typography'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(z.object({
        name: z.string().min(2).max(40).default('Team Member').meta({
            description: "Team member's full name"
        }),
        role: z.string().min(2).max(40).default('Position').meta({
            description: "Job title or role"
        }),
        image: z.object({
            __image_url__: z.string().default("https://placehold.co/640x360"),
            __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
        })
    })).min(2).max(4).default([
        {
            name: 'Elena Rodriguez',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman creative director headshot'
            }
        },
        {
            name: 'Marcus Chen',
            role: 'Lead Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman developer headshot'
            }
        },
        {
            name: 'Sophia Williams',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman designer headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export { Schema }

type TeamSlideData = z.infer<typeof Schema>

interface WatercolorTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const WatercolorTeamSlide: React.FC<WatercolorTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-1 md:grid-cols-2 gap-8'
        } else if (count <= 4) {
            return 'grid-cols-2 gap-6'
        } else {
            return 'grid-cols-2 lg:grid-cols-3 gap-4'
        }
    }

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
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && (
                                    <span 
                                        className="text-lg font-semibold" 
                                        style={{ 
                                            color: 'var(--background-text, #2d2d3d)',
                                            fontFamily: "var(--heading-font-family, Playfair Display)"
                                        }}
                                    >
                                        {(slideData as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative watercolor blobs */}
                <div className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)', filter: 'blur(16px)' }}></div>
                <div className="absolute bottom-32 right-24 w-24 h-24 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)', filter: 'blur(12px)' }}></div>

                <div className="relative z-10 h-full px-16 py-20 flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-16">
                        <h1 
                            className="text-6xl font-bold mb-4" 
                            style={{ 
                                color: "var(--background-text, #2d2d3d)",
                                fontFamily: "var(--heading-font-family, Playfair Display)"
                            }}
                        >
                            {slideData?.title || 'Our Team'}
                        </h1>
                        <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, transparent 0%, var(--primary-color, #7c5cbf) 50%, transparent 100%)" }}></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} w-full max-w-5xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-8 rounded-3xl"
                                    style={{
                                        backdropFilter: 'blur(12px)',
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        borderRadius: '24px',
                                        boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
                                    }}
                                >
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h3 
                                        className="text-2xl font-bold mb-2" 
                                        style={{ 
                                            color: "var(--background-text, #2d2d3d)",
                                            fontFamily: "var(--heading-font-family, Playfair Display)"
                                        }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p 
                                        className="text-lg font-medium" 
                                        style={{ 
                                            color: "var(--primary-color, #7c5cbf)",
                                            fontFamily: "var(--body-font-family, Lora)"
                                        }}
                                    >
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WatercolorTeamSlide