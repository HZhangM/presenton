import React from 'react'
import * as z from "zod";

export const layoutId = 'polaroid-memoir-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A nostalgic scrapbook-style team showcase with polaroid-frame member cards and handwritten typography'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Amazing Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(z.object({
        name: z.string().min(2).max(40).default('Sarah Johnson').meta({
            description: "Team member's full name"
        }),
        role: z.string().min(2).max(40).default('Creative Director').meta({
            description: "Job title or position"
        }),
        image: z.object({
            __image_url__: z.string().default("https://placehold.co/640x360"),
            __image_prompt__: z.string().min(10).max(50).default("professional team member headshot")
        })
    })).min(2).max(4).default([
        {
            name: 'Sarah Johnson',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businesswoman headshot'
            }
        },
        {
            name: 'Mike Chen',
            role: 'Senior Developer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businessman headshot'
            }
        },
        {
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businesswoman headshot'
            }
        },
        {
            name: 'David Park',
            role: 'UX Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'professional businessman headshot'
            }
        }
    ]).meta({
        description: "List of team members with their information",
    })
})

export { Schema }

interface PolaroidMemoirTeamSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const PolaroidMemoirTeamSlide: React.FC<PolaroidMemoirTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2'
        } else {
            return 'grid-cols-2 lg:grid-cols-3'
        }
    }

    const getRotation = (index: number) => {
        const rotations = ['-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1']
        return rotations[index % rotations.length]
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Caveat)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && (
                                <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />
                            )}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold" 
                                    style={{ color: 'var(--background-text, #3a3020)' }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative tape strips */}
                <div className="absolute top-16 right-8 w-20 h-6 bg-yellow-200 opacity-40 transform rotate-12"></div>
                <div className="absolute bottom-20 left-12 w-16 h-4 bg-pink-200 opacity-40 transform -rotate-6"></div>

                {/* Washi tape accent */}
                <div className="absolute top-32 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-30"></div>

                {/* Main Content */}
                <div className="relative z-10 h-full px-8 pt-12 pb-8 flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4 transform -rotate-1" 
                            style={{ color: "var(--primary-color, #d4764e)" }}
                        >
                            {slideData?.title || 'Our Amazing Team'}
                        </h1>
                        
                        {/* Dashed divider */}
                        <div 
                            className="w-32 mx-auto border-t-2 border-dashed mt-4" 
                            style={{ borderColor: "var(--stroke, rgba(212, 118, 78, 0.2))" }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 max-w-4xl w-full`}>
                            {members.map((member, index) => (
                                <div key={index} className={`transform ${getRotation(index)} hover:rotate-0 transition-transform duration-300`}>
                                    {/* Polaroid Card */}
                                    <div 
                                        className="relative"
                                        style={{
                                            background: "#ffffff",
                                            border: "1px solid rgba(0,0,0,0.06)",
                                            borderRadius: "2px",
                                            boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
                                            padding: "12px 12px 40px 12px"
                                        }}
                                    >
                                        {/* Tape decoration */}
                                        <div className="absolute -top-2 right-4 w-8 h-4 bg-yellow-100 opacity-60 transform rotate-45"></div>
                                        
                                        {/* Photo */}
                                        <div className="w-full h-32 mb-3 overflow-hidden" style={{ background: "var(--card-color, rgba(255, 255, 255, 0.92))" }}>
                                            <img
                                                src={member.image.__image_url__ || ''}
                                                alt={member.image.__image_prompt__ || member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Handwritten-style label area */}
                                        <div className="text-center space-y-1">
                                            <h3 
                                                className="text-xl font-bold" 
                                                style={{ 
                                                    color: "var(--background-text, #3a3020)",
                                                    fontFamily: "var(--heading-font-family, Caveat)"
                                                }}
                                            >
                                                {member.name}
                                            </h3>
                                            <p 
                                                className="text-sm" 
                                                style={{ 
                                                    color: "var(--background-text, #3a3020)",
                                                    fontFamily: "var(--body-font-family, Lato)"
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

export default PolaroidMemoirTeamSlide