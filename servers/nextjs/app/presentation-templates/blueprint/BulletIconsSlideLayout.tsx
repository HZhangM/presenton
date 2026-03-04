import React from 'react'
import * as z from "zod";
import { RemoteSvgIcon } from '@/app/hooks/useRemoteSvgIcon';

export const layoutId = 'blueprint-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A slide with title, description, and bullet points each paired with an icon in blueprint paper style.'

const IconSchema = z.object({
    __icon_url__: z.string().default(""),
    __icon_query__: z.string().min(5).max(20).default("technical icon")
})

const blueprintBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('System Blueprint').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Technical specifications and component analysis for the proposed engineering solution with detailed measurements and tolerances.').meta({
        description: "Main description text explaining the technical content",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(2).max(60).meta({
            description: "Bullet point title",
        }),
        description: z.string().min(10).max(100).meta({
            description: "Bullet point description",
        }),
        icon: IconSchema,
    })).min(2).max(4).default([
        {
            title: 'LOAD BEARING CAPACITY',
            description: 'Primary structural components rated for 2500N maximum load with safety factor of 3.2',
            icon: {
                __icon_url__: '',
                __icon_query__: 'engineering load'
            }
        },
        {
            title: 'THERMAL SPECIFICATIONS',
            description: 'Operating temperature range: -40°C to +85°C with thermal expansion coefficient compensation',
            icon: {
                __icon_url__: '',
                __icon_query__: 'temperature gauge'
            }
        },
        {
            title: 'DIMENSIONAL TOLERANCE',
            description: 'Critical measurements maintained within ±0.05mm precision across all manufacturing stages',
            icon: {
                __icon_url__: '',
                __icon_query__: 'ruler measure'
            }
        }
    ]).meta({
        description: "List of technical bullet points with icons and specifications",
    })
})

export const Schema = blueprintBulletIconsSlideSchema

export type BlueprintBulletIconsSlideData = z.infer<typeof blueprintBulletIconsSlideSchema>

interface BlueprintBulletIconsSlideLayoutProps {
    data?: Partial<BlueprintBulletIconsSlideData>
}

const BlueprintBulletIconsSlideLayout: React.FC<BlueprintBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, JetBrains Mono)"
                }}
            >
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1280 720">
                        <defs>
                            <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--primary-color, #4dabf7)" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
                    </svg>
                </div>

                {/* Crosshair Markers */}
                <div className="absolute top-4 left-4 text-2xl font-bold" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>
                <div className="absolute top-4 right-4 text-2xl font-bold" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>
                <div className="absolute bottom-4 left-4 text-2xl font-bold" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>
                <div className="absolute bottom-4 right-4 text-2xl font-bold" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>

                {/* Company Logo/Name Header Block */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4">
                        <div 
                            className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-wider font-medium"
                            style={{ 
                                border: "1px dashed var(--stroke, rgba(77, 171, 247, 0.35))",
                                background: "var(--card-color, rgba(77, 171, 247, 0.08))",
                                borderRadius: "2px",
                                color: "var(--primary-text, #0d2137)"
                            }}
                        >
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-4 h-4" />}
                            <span>{(slideData as any)?.__companyName__ || 'COMPANY SPEC'}</span>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-8 sm:px-12 lg:px-20 pt-16 pb-8">
                    {/* Title Block - Technical Drawing Style */}
                    <div className="mb-8">
                        <div 
                            className="inline-block px-4 py-2 mb-4"
                            style={{ 
                                border: "1px dashed var(--stroke, rgba(77, 171, 247, 0.35))",
                                background: "var(--card-color, rgba(77, 171, 247, 0.08))",
                                borderRadius: "2px"
                            }}
                        >
                            <div className="text-xs uppercase tracking-widest mb-1 font-medium" style={{ color: "var(--primary-color, #4dabf7)" }}>
                                DRAWING TITLE
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide" style={{ color: "var(--primary-text, #0d2137)" }}>
                                {slideData?.title || 'SYSTEM BLUEPRINT'}
                            </h1>
                        </div>

                        {/* Description */}
                        <p 
                            className="text-sm leading-relaxed max-w-4xl"
                            style={{ 
                                color: "var(--background-text, #c8d8e8)",
                                fontFamily: "var(--body-font-family, IBM Plex Mono)"
                            }}
                        >
                            {slideData?.description || 'Technical specifications and component analysis for the proposed engineering solution with detailed measurements and tolerances.'}
                        </p>
                    </div>

                    {/* Dimension Line Divider */}
                    <div className="flex items-center mb-8">
                        <div className="text-xs font-bold" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>
                        <div className="flex-1 mx-2" style={{ borderTop: "1px dashed var(--stroke, rgba(77, 171, 247, 0.35))" }}></div>
                        <div className="text-xs font-bold" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="flex items-start space-x-4 p-4"
                                style={{ 
                                    border: "1px dashed var(--stroke, rgba(77, 171, 247, 0.35))",
                                    background: "var(--card-color, rgba(77, 171, 247, 0.08))",
                                    borderRadius: "2px"
                                }}
                            >
                                {/* Technical Icon Container */}
                                <div 
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                                    style={{ 
                                        border: "1px dashed var(--primary-color, #4dabf7)",
                                        background: "var(--primary-color, #4dabf7)",
                                        borderRadius: "2px"
                                    }}
                                >
                                    <RemoteSvgIcon
                                        url={bullet.icon.__icon_url__}
                                        strokeColor={"currentColor"}
                                        className="w-6 h-6"
                                        color="var(--primary-text, #ffffff)"
                                        title={bullet.icon.__icon_query__}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Technical Label */}
                                    <div className="flex items-center mb-2">
                                        <div className="text-xs font-bold mr-2" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>+</div>
                                        <h3 
                                            className="text-base font-bold uppercase tracking-wide"
                                            style={{ color: "var(--primary-text, #0d2137)" }}
                                        >
                                            {bullet.title}
                                        </h3>
                                    </div>
                                    <p 
                                        className="text-sm leading-relaxed"
                                        style={{ 
                                            color: "var(--background-text, #c8d8e8)",
                                            fontFamily: "var(--body-font-family, IBM Plex Mono)"
                                        }}
                                    >
                                        {bullet.description}
                                    </p>

                                    {/* Technical Annotation */}
                                    <div className="mt-2 text-xs uppercase tracking-widest font-medium" style={{ color: "var(--primary-color, #4dabf7)" }}>
                                        SPEC #{String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Technical Info */}
                    <div className="mt-6 flex justify-between items-center text-xs uppercase tracking-widest" style={{ color: "var(--stroke, rgba(77, 171, 247, 0.35))" }}>
                        <span>SCALE 1:1</span>
                        <span>REV. A</span>
                        <span>SHEET 1 OF 1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlueprintBulletIconsSlideLayout