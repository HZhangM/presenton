import React from 'react'
import * as z from "zod";

export const layoutId = 'japanese-ukiyoe-quote-slide'
export const layoutName = 'Quote Slide'
export const layoutDescription = 'A slide featuring a prominent quote with author attribution and traditional Japanese ukiyo-e aesthetic.'

const Schema = z.object({
    heading: z.string().min(1).max(30).default('Wisdom').meta({
        description: "Main heading of the slide",
    }),
    quote: z.string().min(10).max(200).default('The cherry blossoms fall, teaching us that beauty lies not in permanence, but in the graceful acceptance of change and the fleeting nature of all things.').meta({
        description: "The main quote text content",
    }),
    author: z.string().min(2).max(50).default('Ancient Japanese Proverb').meta({
        description: "Author of the quote",
    }),
    backgroundImage: z.object({ 
        __image_url__: z.string().default("https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80"), 
        __image_prompt__: z.string().min(10).max(50).default("Traditional Japanese landscape with cherry blossoms") 
    }).default({
        __image_url__: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
        __image_prompt__: "Traditional Japanese landscape with cherry blossoms"
    }).meta({
        description: "Background image for the slide",
    })
})

export { Schema }

interface JapaneseUkiyoeQuoteSlideProps {
    data?: Partial<z.infer<typeof Schema>>
}

const JapaneseUkiyoeQuoteSlide: React.FC<JapaneseUkiyoeQuoteSlideProps> = ({ data: slideData }) => {
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
                    <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-6 h-6 flex-shrink-0" />}
                                {(slideData as any)?.__companyName__ && <span className="text-sm font-medium" style={{ color: 'var(--background-text, #1a1a3a)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${slideData?.backgroundImage?.__image_url__ || ''}')`,
                    }}
                />

                {/* Background Overlay */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--card-color, rgba(255, 255, 250, 0.7))', opacity: 0.85 }}
                />

                {/* Decorative Elements */}
                <div 
                    className="absolute top-12 right-16 w-8 h-8 rounded-full opacity-80"
                    style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}
                />
                <div 
                    className="absolute bottom-20 left-12 w-6 h-6 rounded-full opacity-60"
                    style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}
                />
                <div 
                    className="absolute top-1/3 left-0 right-0 h-px opacity-20"
                    style={{ backgroundColor: 'var(--background-text, #1a1a3a)' }}
                />

                {/* Wave Motif */}
                <div className="absolute bottom-0 left-0 right-0 opacity-10">
                    <svg viewBox="0 0 1280 100" className="w-full h-20" style={{ fill: 'var(--background-text, #1a1a3a)' }}>
                        <path d="M0,50 Q320,10 640,50 T1280,50 L1280,100 L0,100 Z" />
                    </svg>
                </div>

                {/* Main Content */}
                <div className="relative z-20 px-16 py-12 flex-1 flex flex-col justify-center h-full">
                    <div className="text-center space-y-8 max-w-5xl mx-auto">
                        
                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 
                                className="text-4xl font-bold leading-tight"
                                style={{ 
                                    color: "var(--background-text, #1a1a3a)",
                                    fontFamily: "var(--heading-font-family, Shippori Mincho)"
                                }}
                            >
                                {slideData?.heading || 'Wisdom'}
                            </h1>
                            
                            {/* Decorative divider with circle endpoint */}
                            <div className="flex justify-center items-center gap-2">
                                <div 
                                    className="w-16 h-px"
                                    style={{ backgroundColor: 'var(--background-text, #1a1a3a)', opacity: 0.3 }}
                                />
                                <div 
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}
                                />
                                <div 
                                    className="w-16 h-px"
                                    style={{ backgroundColor: 'var(--background-text, #1a1a3a)', opacity: 0.3 }}
                                />
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="space-y-6">
                            {/* Quote Text */}
                            <blockquote 
                                className="text-2xl font-medium leading-relaxed"
                                style={{ 
                                    color: "var(--background-text, #1a1a3a)",
                                    fontFamily: "var(--heading-font-family, Shippori Mincho)"
                                }}
                            >
                                "{slideData?.quote || 'The cherry blossoms fall, teaching us that beauty lies not in permanence, but in the graceful acceptance of change and the fleeting nature of all things.'}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex justify-center items-center space-x-4 mt-6">
                                <div 
                                    className="w-12 h-px"
                                    style={{ backgroundColor: 'var(--background-text, #1a1a3a)', opacity: 0.4 }}
                                />
                                <cite 
                                    className="text-lg font-medium not-italic px-4"
                                    style={{ 
                                        color: "var(--primary-color, #c23b22)",
                                        fontFamily: "var(--body-font-family, Zen Kaku Gothic New)"
                                    }}
                                >
                                    {slideData?.author || 'Ancient Japanese Proverb'}
                                </cite>
                                <div 
                                    className="w-12 h-px"
                                    style={{ backgroundColor: 'var(--background-text, #1a1a3a)', opacity: 0.4 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom border accent */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                    style={{ backgroundColor: 'var(--stroke, rgba(30, 30, 80, 0.15))' }}
                />
            </div>
        </>
    )
}

export default JapaneseUkiyoeQuoteSlide