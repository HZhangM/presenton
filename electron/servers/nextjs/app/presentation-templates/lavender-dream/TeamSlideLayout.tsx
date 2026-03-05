import React from 'react'
import * as z from "zod"

export const layoutId = 'lavender-dream-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in a soft lavender theme'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40),
    role: z.string().min(2).max(40),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
    })
})

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Dream Team'),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'Isabella Rose',
            role: 'Creative Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman creative director headshot'
            }
        },
        {
            name: 'Sophia Grace',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional woman designer headshot'
            }
        },
        {
            name: 'Luna Violet',
            role: 'Art Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman art director headshot'
            }
        }
    ])
})

const LavenderDreamTeamSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const members = data?.members || []
    const title = data?.title || 'Our Dream Team'
    
    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-2'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                            {(data as any)?.__companyName__ && (
                                <span className="text-lg font-semibold" style={{ color: 'var(--background-text, #3a2050)' }}>
                                    {(data as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative floral element */}
                <div className="absolute top-8 right-12 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M60 20C80 40 100 60 80 80C60 100 40 80 20 60C40 40 60 20 60 20Z" fill="var(--primary-color, #9b59b6)" opacity="0.3" />
                        <circle cx="60" cy="60" r="25" fill="var(--primary-color, #9b59b6)" opacity="0.2" />
                        <path d="M60 35L65 50L80 45L70 60L85 65L70 70L80 85L65 80L60 95L55 80L40 85L50 70L35 65L50 60L40 45L55 50L60 35Z" fill="var(--primary-color, #9b59b6)" opacity="0.15" />
                    </svg>
                </div>

                {/* Decorative accent line */}
                <div className="absolute bottom-20 left-12 opacity-20">
                    <div className="w-32 h-px" style={{ background: "var(--primary-color, #9b59b6)" }}></div>
                </div>

                <div className="flex flex-col h-full px-12 pt-20 pb-12">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4" 
                            style={{ 
                                color: "var(--background-text, #3a2050)",
                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                            }}
                        >
                            {title}
                        </h1>
                        
                        {/* Divider */}
                        <div className="flex justify-center mb-6">
                            <div 
                                className="h-px w-2/5" 
                                style={{ background: "var(--primary-color, #9b59b6)", opacity: 0.3 }}
                            ></div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div 
                                        className="p-6 rounded-2xl border mx-auto max-w-xs"
                                        style={{
                                            background: "rgba(255,255,255,0.6)",
                                            backdropFilter: "blur(12px)",
                                            border: "1px solid rgba(255,255,255,0.4)",
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
                                        }}
                                    >
                                        {/* Member Photo */}
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--stroke, rgba(155, 89, 182, 0.15))" }}>
                                            <img
                                                src={member.image.__image_url__}
                                                alt={member.image.__image_prompt__}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Member Info */}
                                        <h3 
                                            className="text-xl font-bold mb-2" 
                                            style={{ 
                                                color: "var(--background-text, #3a2050)",
                                                fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p 
                                            className="text-base font-medium" 
                                            style={{ 
                                                color: "var(--primary-color, #9b59b6)",
                                                fontFamily: "var(--body-font-family, Mulish)"
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
            </div>
        </>
    )
}

export default LavenderDreamTeamSlide