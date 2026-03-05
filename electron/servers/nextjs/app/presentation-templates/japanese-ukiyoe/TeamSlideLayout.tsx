import React from 'react'
import * as z from "zod";

export const layoutId = 'japanese-ukiyoe-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A team slide with traditional Japanese ukiyo-e aesthetic featuring indigo and vermillion accents'

const memberSchema = z.object({
    name: z.string().min(2).max(40).default('Hiroshi Tanaka'),
    role: z.string().min(2).max(40).default('Senior Engineer'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("Professional headshot portrait")
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('Our Team').meta({
        description: "Main title of the slide",
    }),
    members: z.array(memberSchema).min(2).max(4).default([
        {
            name: 'Akira Yamamoto',
            role: 'Lead Designer',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman headshot portrait'
            }
        },
        {
            name: 'Yuki Sato',
            role: 'Product Manager',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman headshot portrait'
            }
        },
        {
            name: 'Kenji Nakamura',
            role: 'Technical Lead',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businessman headshot portrait'
            }
        },
        {
            name: 'Mei Suzuki',
            role: 'UX Director',
            image: {
                __image_url__: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                __image_prompt__: 'Professional businesswoman headshot portrait'
            }
        }
    ]).meta({
        description: "Team members with names, roles, and photos",
    })
})

const JapaneseUkiyoeTeamSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) return 'grid-cols-2'
        if (count === 3) return 'grid-cols-3'
        return 'grid-cols-2 sm:grid-cols-4'
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Shippori Mincho)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-4">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-base font-semibold" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a3a)',
                                        fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Decorative hanko seal */}
                <div 
                    className="absolute top-16 right-16 w-12 h-12 rounded-full opacity-80"
                    style={{ backgroundColor: "var(--primary-color, #c23b22)" }}
                >
                    <div 
                        className="absolute inset-2 rounded-full border-2"
                        style={{ borderColor: "var(--primary-text, #ffffff)" }}
                    ></div>
                </div>

                {/* Wave motif decoration */}
                <div className="absolute bottom-8 left-8 opacity-20">
                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
                        <path 
                            d="M0 12C10 6 20 18 30 12C40 6 50 18 60 12C70 6 80 18 90 12C100 6 110 18 120 12" 
                            stroke="var(--background-text, #1a1a3a)" 
                            strokeWidth="2" 
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="flex flex-col h-full pt-16 pb-12 px-12">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-5xl font-bold mb-4"
                            style={{ color: "var(--background-text, #1a1a3a)" }}
                        >
                            {slideData?.title || 'Our Team'}
                        </h1>
                        <div 
                            className="h-px w-24"
                            style={{ 
                                background: "var(--stroke, rgba(30, 30, 80, 0.15))",
                                position: 'relative'
                            }}
                        >
                            <div 
                                className="absolute -right-1 -top-1 w-2 h-2 rounded-full"
                                style={{ backgroundColor: "var(--background-text, #1a1a3a)" }}
                            ></div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className={`grid ${getGridClasses(members.length)} gap-6 w-full max-w-4xl`}>
                            {members.map((member, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-5"
                                    style={{
                                        background: "var(--card-color, rgba(255, 255, 250, 0.7))",
                                        border: "1px solid var(--stroke, rgba(30, 30, 80, 0.15))",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2" style={{ borderColor: "var(--stroke, rgba(30, 30, 80, 0.15))" }}>
                                        <img
                                            src={member.image.__image_url__}
                                            alt={member.image.__image_prompt__}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 
                                        className="text-xl font-bold mb-2"
                                        style={{ color: "var(--background-text, #1a1a3a)" }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p 
                                        className="text-sm font-medium"
                                        style={{ 
                                            color: "var(--primary-color, #c23b22)",
                                            fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
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

export default JapaneseUkiyoeTeamSlide