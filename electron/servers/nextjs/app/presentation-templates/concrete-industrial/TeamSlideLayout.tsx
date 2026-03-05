import React from 'react'
import * as z from "zod";

export const layoutId = 'concrete-industrial-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A grid layout showcasing team members with names, roles, and photos in concrete industrial style.'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('JOHN SMITH'),
    role: z.string().min(2).max(40).default('PROJECT MANAGER'),
    image: z.object({
        __image_url__: z.string().default('https://placehold.co/640x640'),
        __image_prompt__: z.string().min(10).max(50).default('professional construction worker headshot')
    })
});

const teamSlideSchema = z.object({
    title: z.string().min(3).max(40).default('OUR TEAM').meta({
        description: "Main title of the slide",
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'SARAH JOHNSON',
            role: 'SITE SUPERVISOR',
            image: {
                __image_url__: 'https://placehold.co/640x640',
                __image_prompt__: 'professional female construction supervisor'
            }
        },
        {
            name: 'MIKE TORRES',
            role: 'SAFETY OFFICER',
            image: {
                __image_url__: 'https://placehold.co/640x640',
                __image_prompt__: 'professional male safety officer hardhat'
            }
        },
        {
            name: 'ALEX CHEN',
            role: 'LEAD ENGINEER',
            image: {
                __image_url__: 'https://placehold.co/640x640',
                __image_prompt__: 'professional engineer with blueprints'
            }
        }
    ])
})

export const Schema = teamSlideSchema

export type TeamSlideData = z.infer<typeof teamSlideSchema>

interface TeamSlideLayoutProps {
    data?: Partial<TeamSlideData>
}

const ConcreteIndustrialTeamSlide: React.FC<TeamSlideLayoutProps> = ({ data: slideData }) => {
    const members = slideData?.members || []

    const getGridClasses = (count: number) => {
        if (count <= 2) {
            return 'grid-cols-2 gap-4'
        } else if (count === 3) {
            return 'grid-cols-3 gap-4'
        } else {
            return 'grid-cols-4 gap-4'
        }
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bebas Neue)" }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" />}
                                {(slideData as any)?.__companyName__ && <span className="text-xl font-bold tracking-wide uppercase" style={{ color: 'var(--background-text, #1a1a1a)' }}>
                                    {(slideData as any)?.__companyName__ || 'COMPANY NAME'}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Hazard Stripe Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-8 opacity-30" style={{ background: "repeating-linear-gradient(45deg, var(--primary-color, #ff6d00), var(--primary-color, #ff6d00) 10px, #000 10px, #000 20px)" }}></div>

                {/* Steel Beam Decorative Element */}
                <div className="absolute bottom-0 left-0 w-80 h-4 opacity-20" style={{ background: "linear-gradient(90deg, var(--stroke, rgba(0,0,0,0.15)) 0%, transparent 100%)" }}>
                    <div className="w-full h-1 mt-1" style={{ background: "var(--primary-color, #ff6d00)" }}></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full flex flex-col px-12 pt-14 pb-10">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-6xl font-bold tracking-wider uppercase mb-4" 
                            style={{ color: "var(--background-text, #1a1a1a)" }}
                        >
                            {slideData?.title || 'OUR TEAM'}
                        </h1>
                        <div 
                            className="w-24 h-1" 
                            style={{ background: "var(--primary-color, #ff6d00)" }}
                        ></div>
                    </div>

                    {/* Team Members Grid */}
                    <div className={`grid ${getGridClasses(members.length)} max-w-5xl`}>
                        {members.map((member, index) => (
                            <div key={index} className="group">
                                <div 
                                    className="p-4 h-full"
                                    style={{ 
                                        background: "var(--card-color, rgba(255, 255, 255, 0.85))",
                                        borderLeft: "4px solid var(--primary-color, #ff6d00)",
                                        borderRadius: "0",
                                        boxShadow: "2px 2px 0 rgba(0,0,0,0.1)"
                                    }}
                                >
                                    {/* Member Photo */}
                                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden" style={{ background: "var(--stroke, rgba(0,0,0,0.15))" }}>
                                        <img
                                            src={member.image.__image_url__ || ''}
                                            alt={member.image.__image_prompt__ || member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="text-center">
                                        <div 
                                            className="text-xs font-bold tracking-widest uppercase mb-2 px-2 py-1"
                                            style={{ 
                                                color: "var(--primary-text, #ffffff)",
                                                background: "var(--primary-color, #ff6d00)",
                                                fontFamily: "var(--body-font-family, Roboto Condensed)"
                                            }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3
                                            className="text-base font-bold tracking-wide uppercase mb-1" 
                                            style={{ 
                                                color: "var(--background-text, #1a1a1a)",
                                                fontFamily: "var(--heading-font-family, Bebas Neue)"
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p 
                                            className="text-sm font-bold uppercase tracking-wide" 
                                            style={{ 
                                                color: "var(--primary-color, #ff6d00)",
                                                fontFamily: "var(--body-font-family, Roboto Condensed)"
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
        </>
    )
}

export default ConcreteIndustrialTeamSlide