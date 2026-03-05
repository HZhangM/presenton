import React from 'react'
import * as z from "zod";

export const layoutId = 'pixel-retro-team-slide'
export const layoutName = 'Team Slide'
export const layoutDescription = 'A retro gaming pixel art style team slide showcasing team members with 8-bit aesthetic'

const teamMemberSchema = z.object({
    name: z.string().min(2).max(40).default('PLAYER_01'),
    role: z.string().min(2).max(40).default('GAME_DEV'),
    image: z.object({
        __image_url__: z.string().default("https://placehold.co/640x360"),
        __image_prompt__: z.string().min(10).max(50).default("retro gaming character portrait")
    })
});

export const Schema = z.object({
    title: z.string().min(3).max(40).default('TEAM_ROSTER').meta({
        description: "Main title of the team slide"
    }),
    members: z.array(teamMemberSchema).min(2).max(4).default([
        {
            name: 'ALEX_ZERO',
            role: 'LEAD_PROGRAMMER',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'pixel art programmer character'
            }
        },
        {
            name: 'MAYA_ONE',
            role: 'PIXEL_ARTIST',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'pixel art designer character'
            }
        },
        {
            name: 'ZACH_TWO',
            role: 'SOUND_ENGINEER',
            image: {
                __image_url__: 'https://placehold.co/640x360',
                __image_prompt__: 'pixel art audio engineer character'
            }
        }
    ])
});

type TeamSlideData = z.infer<typeof Schema>

interface PixelRetroTeamSlideProps {
    data?: Partial<TeamSlideData>
}

const PixelRetroTeamSlide: React.FC<PixelRetroTeamSlideProps> = ({ data: slideData }) => {
    const members = slideData?.members || []
    
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, 'Press Start 2P')" 
                }}
            >
                {/* Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4 p-3" style={{ 
                            border: "2px solid var(--stroke, rgba(80,200,120,0.35))",
                            background: "var(--card-color, rgba(80,200,120,0.08))"
                        }}>
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-sm font-bold" style={{ 
                                    color: 'var(--primary-color, #50c878)',
                                    fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Pixel decorations */}
                <div className="absolute top-20 right-8 opacity-20">
                    <div className="grid grid-cols-8 gap-1">
                        {Array(64).fill(0).map((_, i) => (
                            <div 
                                key={i} 
                                className="w-2 h-2" 
                                style={{ 
                                    background: Math.random() > 0.7 ? "var(--primary-color, #50c878)" : "transparent" 
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Terminal cursor animation */}
                <div className="absolute bottom-12 left-8">
                    <div className="flex items-center gap-2 text-xs" style={{ 
                        color: "var(--primary-color, #50c878)",
                        fontFamily: "var(--body-font-family, 'VT323')"
                    }}>
                        <span>SYSTEM_READY</span>
                        <div className="w-2 h-4 animate-pulse" style={{ 
                            background: "var(--primary-color, #50c878)" 
                        }}></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col justify-center h-full px-12 py-16">
                    {/* Title */}
                    <div className="mb-12">
                        <h1 
                            className="text-4xl font-bold mb-4 text-center"
                            style={{ 
                                color: "var(--primary-color, #50c878)",
                                fontFamily: "var(--heading-font-family, 'Press Start 2P')",
                                textShadow: "2px 2px 0px rgba(0,0,0,0.5)"
                            }}
                        >
                            {slideData?.title || 'TEAM_ROSTER'}
                        </h1>
                        
                        {/* Pixel divider */}
                        <div className="flex justify-center mt-6">
                            <div className="flex gap-1">
                                {Array(20).fill(0).map((_, i) => (
                                    <div 
                                        key={i}
                                        className="w-2 h-2"
                                        style={{ background: "var(--stroke, rgba(80,200,120,0.35))" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className={`grid ${members.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'} gap-8 max-w-5xl mx-auto`}>
                        {members.map((member, index) => (
                            <div key={index} className="text-center">
                                {/* Member Card */}
                                <div 
                                    className="p-4 mb-4"
                                    style={{
                                        border: "2px solid var(--stroke, rgba(80,200,120,0.35))",
                                        background: "var(--card-color, rgba(80,200,120,0.08))"
                                    }}
                                >
                                    {/* Image Container */}
                                    <div 
                                        className="w-32 h-32 mx-auto mb-4 overflow-hidden"
                                        style={{ border: "2px solid var(--stroke, rgba(80,200,120,0.35))" }}
                                    >
                                        <img 
                                            src={member.image.__image_url__} 
                                            alt={member.image.__image_prompt__}
                                            className="w-full h-full object-cover"
                                            style={{ imageRendering: "pixelated" }}
                                        />
                                    </div>
                                    
                                    {/* Name */}
                                    <h3 
                                        className="text-sm font-bold mb-2"
                                        style={{ 
                                            color: "var(--primary-color, #50c878)",
                                            fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                                        }}
                                    >
                                        {member.name}
                                    </h3>
                                    
                                    {/* Role */}
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <div 
                                            className="w-2 h-2"
                                            style={{ background: "var(--primary-color, #50c878)" }}
                                        />
                                        <p 
                                            className="text-lg"
                                            style={{ 
                                                color: "var(--background-text, #50c878)",
                                                fontFamily: "var(--body-font-family, 'VT323')"
                                            }}
                                        >
                                            {member.role}
                                        </p>
                                        <div 
                                            className="w-2 h-2"
                                            style={{ background: "var(--primary-color, #50c878)" }}
                                        />
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

export default PixelRetroTeamSlide