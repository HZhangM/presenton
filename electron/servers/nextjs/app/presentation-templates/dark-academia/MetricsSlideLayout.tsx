import React from 'react'
import * as z from "zod";

export const layoutId = 'dark-academia-metrics-slide'
export const layoutName = 'Metrics Slide'
export const layoutDescription = 'A scholarly metrics slide with rich library aesthetic, dark wood tones, and serif typography showcasing key numeric metrics'

const Schema = z.object({
    title: z.string().min(3).max(40).default('Scholarly Metrics').meta({
        description: "Main title of the slide",
    }),
    metrics: z.array(z.object({
        label: z.string().min(2).max(50).meta({
            description: "Metric label/title"
        }),
        value: z.string().min(1).max(10).meta({
            description: "Metric value (e.g., 150+, 95%, $2M)"
        }),
        description: z.string().min(10).max(150).meta({
            description: "Detailed description of the metric"
        }),
    })).min(2).max(4).default([
        {
            value: '1,847',
            label: 'Manuscripts Catalogued',
            description: 'Ancient texts and scholarly works preserved in our extensive collection across multiple disciplines and historical periods.'
        },
        {
            value: '92%',
            label: 'Research Accuracy',
            description: 'Peer-reviewed studies demonstrate exceptional precision in our methodological approaches and analytical frameworks.'
        },
        {
            value: '45',
            label: 'Distinguished Fellows',
            description: 'Renowned academics and researchers contributing to the advancement of knowledge within our scholarly community.'
        },
        {
            value: '234',
            label: 'Publications',
            description: 'Original research papers and monographs published in prestigious journals and academic presses worldwide.'
        }
    ]).meta({
        description: "List of key metrics to display",
    })
})

export { Schema }

export type MetricsSlideData = z.infer<typeof Schema>

interface MetricsSlideLayoutProps {
    data?: Partial<MetricsSlideData>
}

const DarkAcademiaMetricsSlide: React.FC<MetricsSlideLayoutProps> = ({ data: slideData }) => {
    const metrics = slideData?.metrics || []

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />
            
            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Spectral)"
                }}
            >
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #e8dcc8)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1280 720" fill="none">
                        <path d="M50 100 Q 200 50 350 100 T 650 100 Q 800 130 950 100 Q 1100 70 1230 100" stroke="var(--primary-color, #c8a882)" strokeWidth="1" fill="none" opacity="0.3" />
                        <path d="M50 200 Q 200 150 350 200 T 650 200 Q 800 230 950 200 Q 1100 170 1230 200" stroke="var(--primary-color, #c8a882)" strokeWidth="1" fill="none" opacity="0.2" />
                        <circle cx="640" cy="360" r="200" stroke="var(--stroke, rgba(200,168,130,0.25))" strokeWidth="1" fill="none" opacity="0.15" />
                    </svg>
                </div>

                <div className="absolute top-20 right-20 opacity-8">
                    <div className="text-6xl" style={{ color: 'var(--stroke, rgba(200,168,130,0.25))' }}>❦</div>
                </div>

                <div className="relative z-10 px-12 pt-16 pb-12 flex-1 flex flex-col h-full">
                    <div className="text-center mb-8">
                        <h1 
                            className="text-4xl font-semibold mb-6" 
                            style={{ 
                                color: "var(--background-text, #e8dcc8)",
                                fontFamily: "var(--heading-font-family, Spectral)"
                            }}
                        >
                            {slideData?.title || 'Scholarly Metrics'}
                        </h1>
                        
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px flex-1" style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}></div>
                            <div className="text-lg" style={{ color: 'var(--primary-color, #c8a882)' }}>❦</div>
                            <div className="h-px flex-1" style={{ background: 'var(--stroke, rgba(200,168,130,0.25))' }}></div>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
                            {metrics.map((metric, index) => (
                                <div 
                                    key={index} 
                                    className="p-6 rounded" 
                                    style={{ 
                                        border: '1px solid rgba(200,168,130,0.15)', 
                                        background: 'rgba(200,168,130,0.06)', 
                                        borderRadius: '4px' 
                                    }}
                                >
                                    <div className="text-center space-y-3">
                                        <div 
                                            className="text-sm font-medium tracking-wide uppercase"
                                            style={{ color: "var(--primary-color, #c8a882)" }}
                                        >
                                            {metric.label}
                                        </div>
                                        
                                        <div 
                                            className="text-4xl font-bold"
                                            style={{ 
                                                color: "var(--background-text, #e8dcc8)",
                                                fontFamily: "var(--heading-font-family, Spectral)"
                                            }}
                                        >
                                            {metric.value}
                                        </div>
                                        
                                        <div 
                                            className="text-sm leading-relaxed"
                                            style={{ 
                                                color: "var(--background-text, #e8dcc8)",
                                                opacity: 0.8,
                                                fontFamily: "var(--body-font-family, Spectral)"
                                            }}
                                        >
                                            {metric.description}
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

export default DarkAcademiaMetricsSlide