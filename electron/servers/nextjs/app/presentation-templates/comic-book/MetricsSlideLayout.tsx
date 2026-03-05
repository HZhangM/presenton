import React from 'react'
import * as z from "zod"

export const layoutId = 'comic-book-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A bold comic book style slide for showcasing 2-4 key numeric metrics with pop art elements and dynamic styling'

const Schema = z.object({
    title: z.string().min(3).max(40).default('AMAZING RESULTS!'),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).default('Active Users'),
        value: z.string().min(1).max(10).default('250K+'),
        description: z.string().min(10).max(150).default('Our user base has grown exponentially with incredible engagement rates across all platforms and demographics.')
    })).min(2).max(4).default([
        {
            label: 'Active Users',
            value: '250K+',
            description: 'Our user base has grown exponentially with incredible engagement rates across all platforms and demographics.'
        },
        {
            label: 'Revenue Growth',
            value: '300%',
            description: 'Massive revenue increase year-over-year demonstrating strong market demand and solid business fundamentals.'
        },
        {
            label: 'Market Share',
            value: '45%',
            description: 'Dominant position in our target market with continued expansion into new segments and territories.'
        },
        {
            label: 'Customer Satisfaction',
            value: '98%',
            description: 'Outstanding customer feedback scores reflecting our commitment to quality service and product excellence.'
        }
    ])
})

export { Schema }

interface ComicBookMetricsSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const ComicBookMetricsSlide: React.FC<ComicBookMetricsSlideProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />

            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Bangers)" 
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-8 h-8" style={{ border: '2px solid var(--stroke, rgba(0, 0, 0, 0.8))' }} />}
                            {(slideData as any)?.__companyName__ && (
                                <span 
                                    className="text-lg font-bold" 
                                    style={{ 
                                        color: 'var(--background-text, #1a1a1a)',
                                        textShadow: '2px 2px 0 #ffffff',
                                        WebkitTextStroke: '1px var(--stroke, rgba(0, 0, 0, 0.8))'
                                    }}
                                >
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Comic Book Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 opacity-20 z-10">
                    <div 
                        className="w-full h-full rounded-full flex items-center justify-center transform rotate-12"
                        style={{ 
                            background: 'var(--primary-color, #e53935)',
                            border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                            boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
                        }}
                    >
                        <span 
                            className="text-xl font-bold"
                            style={{ 
                                color: 'var(--primary-text, #ffffff)',
                                textShadow: '2px 2px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
                            }}
                        >
                            POW!
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 w-20 h-20 opacity-15 z-10">
                    <div 
                        className="w-full h-full transform -rotate-12"
                        style={{ 
                            background: 'repeating-conic-gradient(from 0deg, var(--primary-color, #e53935) 0deg 45deg, #ffd700 45deg 90deg)',
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                            border: '2px solid var(--stroke, rgba(0, 0, 0, 0.8))'
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-20 px-8 py-6 h-full flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-6 flex-shrink-0">
                        <h1 
                            className="text-4xl md:text-5xl font-bold tracking-wide transform -skew-x-3"
                            style={{ 
                                color: 'var(--background-text, #1a1a1a)',
                                textShadow: '3px 3px 0 #ffffff, 6px 6px 0 var(--primary-color, #e53935)',
                                WebkitTextStroke: '2px var(--stroke, rgba(0, 0, 0, 0.8))'
                            }}
                        >
                            {slideData?.title || 'AMAZING RESULTS!'}
                        </h1>
                        <div 
                            className="w-32 h-2 mx-auto mt-4"
                            style={{ 
                                background: 'var(--primary-color, #e53935)',
                                border: '2px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                boxShadow: '2px 2px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
                            }}
                        />
                    </div>

                    {/* Metrics Grid */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-4 transform hover:scale-105 transition-transform"
                                    style={{ 
                                        background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                                        border: '3px solid var(--stroke, rgba(0, 0, 0, 0.8))',
                                        borderRadius: '4px',
                                        boxShadow: '4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))'
                                    }}
                                >
                                    {/* Metric Label */}
                                    <div 
                                        className="text-sm font-bold mb-2 tracking-wide"
                                        style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: 'var(--body-font-family, Comic Neue)',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {metric.label}
                                    </div>

                                    {/* Metric Value */}
                                    <div 
                                        className="text-3xl md:text-4xl font-bold mb-3 transform -skew-x-2"
                                        style={{ 
                                            color: 'var(--primary-color, #e53935)',
                                            textShadow: '2px 2px 0 #ffffff, 4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))',
                                            WebkitTextStroke: '1px var(--stroke, rgba(0, 0, 0, 0.8))'
                                        }}
                                    >
                                        {metric.value}
                                    </div>

                                    {/* Metric Description */}
                                    <div 
                                        className="text-xs leading-tight"
                                        style={{ 
                                            color: 'var(--background-text, #1a1a1a)',
                                            fontFamily: 'var(--body-font-family, Comic Neue)'
                                        }}
                                    >
                                        {metric.description}
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

export default ComicBookMetricsSlide