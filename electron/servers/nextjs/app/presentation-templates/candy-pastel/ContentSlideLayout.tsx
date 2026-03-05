import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
    title: z.string().min(1).max(40).describe('The main heading of the slide').default('Sweet Success Strategies'),
    description: z.string().min(1).max(200).describe('Brief description or subtitle for the slide').default('Discover delightful approaches to achieve your goals with these proven methods that bring sweetness to your business journey.'),
    keyPoints: z.array(z.object({
        title: z.string().min(1).max(60).describe('Title of the key point').default('Delightful Customer Experience'),
        description: z.string().min(1).max(100).describe('Description of the key point').default('Create magical moments that leave customers smiling and coming back for more.')
    })).min(2).max(4).default([
        {
            title: 'Delightful Customer Experience',
            description: 'Create magical moments that leave customers smiling and coming back for more.'
        },
        {
            title: 'Sweet Collaboration Methods',
            description: 'Foster teamwork with playful approaches that make working together feel like a treat.'
        },
        {
            title: 'Colorful Innovation Process',
            description: 'Embrace creative thinking with vibrant brainstorming sessions that spark joy.'
        },
        {
            title: 'Bubbly Growth Strategies',
            description: 'Implement fun and engaging tactics that make scaling your business feel effortless.'
        }
    ])
});

export const layoutId = 'candy-pastel-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points.';

const CandyPastelContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    const pastelColors = ['#FFB3E6', '#B3E5FC', '#C8E6C9', '#FFECB3'];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Fredoka)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <span
                                    style={{ backgroundColor: 'var(--stroke, rgba(171,71,188,0.2))' }}
                                    className='w-[2px] h-4 rounded-full'
                                />
                                {(data as any)?.__companyName__ && (
                                    <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #4a3560)' }}>
                                        {(data as any)?.__companyName__ || 'Company Name'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-6 right-6 opacity-20">
                    <div className="w-16 h-16 rounded-full" style={{ background: 'var(--primary-color, #ab47bc)' }}></div>
                </div>

                <div className="absolute bottom-6 left-6 opacity-15">
                    <div className="w-12 h-12 rounded-full bg-pink-300"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-300 -mt-4 ml-8"></div>
                </div>

                <div className="pt-24 px-16 pb-16 h-full">
                    <div className="text-center mb-12">
                        <h1 
                            className="text-5xl font-bold mb-6 leading-tight"
                            style={{ 
                                color: 'var(--background-text, #4a3560)',
                                fontFamily: 'var(--heading-font-family, Fredoka)'
                            }}
                        >
                            {title}
                        </h1>
                        <p 
                            className="text-xl leading-relaxed max-w-4xl mx-auto"
                            style={{ 
                                color: 'var(--background-text, #4a3560)',
                                fontFamily: 'var(--body-font-family, Quicksand)',
                                fontWeight: 500
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {keyPoints?.map((point, index) => (
                            <div 
                                key={index}
                                className="p-8 rounded-3xl relative overflow-hidden"
                                style={{
                                    background: 'var(--card-color, rgba(255,255,255,0.7))',
                                    border: '2px solid var(--stroke, rgba(171,71,188,0.12))',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
                                }}
                            >
                                <div className="absolute top-4 right-4">
                                    <div 
                                        className="w-6 h-6 rounded-full"
                                        style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
                                    ></div>
                                </div>
                                
                                <div className="mb-3">
                                    <span 
                                        className="inline-block px-4 py-2 rounded-full text-xs font-semibold"
                                        style={{
                                            backgroundColor: pastelColors[index % pastelColors.length],
                                            color: 'var(--background-text, #4a3560)'
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                
                                <h3 
                                    className="text-xl font-bold mb-4 leading-snug"
                                    style={{ 
                                        color: 'var(--primary-color, #ab47bc)',
                                        fontFamily: 'var(--heading-font-family, Fredoka)'
                                    }}
                                >
                                    {point.title}
                                </h3>
                                <p 
                                    className="text-base leading-relaxed"
                                    style={{ 
                                        color: 'var(--background-text, #4a3560)',
                                        fontFamily: 'var(--body-font-family, Quicksand)',
                                        fontWeight: 500
                                    }}
                                >
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CandyPastelContentSlide;