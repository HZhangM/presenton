import React from 'react';
import * as z from "zod";

export const Schema = z.object({
    title: z.string().min(5).max(40).default('DIGITAL TRANSFORMATION'),
    description: z.string().min(20).max(200).default('Comprehensive overview of key initiatives and strategic implementations driving organizational evolution in the digital landscape.'),
    keyPoints: z.array(z.object({
        title: z.string().min(5).max(60).default('Enhanced Security Protocols'),
        description: z.string().min(10).max(100).default('Implementation of advanced cybersecurity measures and encryption standards.')
    })).min(2).max(4).default([
        {
            title: 'Neural Network Integration',
            description: 'Advanced AI systems processing data streams with 99.7% accuracy and real-time analytics.'
        },
        {
            title: 'Quantum Encryption Layer',
            description: 'Military-grade security protocols protecting sensitive information across all networks.'
        },
        {
            title: 'Cloud Infrastructure Upgrade',
            description: 'Scalable distributed systems enabling seamless global operations and data synchronization.'
        }
    ])
});

export const layoutId = 'neon-cyberpunk-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in neon cyberpunk theme.';

const NeonCyberpunkContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
    const { title, description, keyPoints } = data;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
            <div 
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{ 
                    background: "var(--background-color, transparent)", 
                    fontFamily: "var(--heading-font-family, Orbitron)" 
                }}
            >
                {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-8 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                                <div 
                                    className="w-[2px] h-6"
                                    style={{ 
                                        background: 'linear-gradient(180deg, var(--primary-color, #ff2d95) 0%, rgba(0,255,255,0.8) 100%)',
                                        boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                                    }}
                                />
                                {(data as any)?.__companyName__ && (
                                    <span 
                                        className="text-sm font-bold tracking-wider"
                                        style={{ 
                                            color: 'var(--background-text, #e0e0f0)',
                                            fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                                        }}
                                    >
                                        {(data as any)?.__companyName__}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative corner brackets */}
                <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2" style={{ borderColor: 'var(--primary-color, #ff2d95)', boxShadow: '0 0 10px var(--primary-color, #ff2d95)' }} />
                <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2" style={{ borderColor: 'rgba(0,255,255,0.7)', boxShadow: '0 0 10px rgba(0,255,255,0.5)' }} />
                <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2" style={{ borderColor: 'rgba(0,255,255,0.7)', boxShadow: '0 0 10px rgba(0,255,255,0.5)' }} />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2" style={{ borderColor: 'var(--primary-color, #ff2d95)', boxShadow: '0 0 10px var(--primary-color, #ff2d95)' }} />

                {/* Glitch accent bars */}
                <div 
                    className="absolute top-32 right-16 w-24 h-1 opacity-60"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #ff2d95) 50%, transparent 100%)',
                        boxShadow: '0 0 8px var(--primary-color, #ff2d95)'
                    }}
                />

                <div className="flex flex-col justify-center h-full px-16 py-20">
                    {/* Title */}
                    <div className="mb-8">
                        <h1 
                            className="text-6xl font-black tracking-wider mb-4"
                            style={{ 
                                color: 'var(--primary-text, #ffffff)',
                                textShadow: '0 0 20px var(--primary-color, #ff2d95)',
                                fontFamily: "var(--heading-font-family, Orbitron)"
                            }}
                        >
                            {title}
                        </h1>
                        <div 
                            className="w-full h-px mb-6"
                            style={{ 
                                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #ff2d95) 20%, rgba(0,255,255,0.8) 80%, transparent 100%)',
                                boxShadow: '0 0 10px var(--primary-color, #ff2d95)'
                            }}
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ 
                                color: 'var(--background-text, #e0e0f0)',
                                fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Key Points Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        {keyPoints?.map((point, index) => (
                            <div 
                                key={index}
                                className="p-6"
                                style={{
                                    border: '1px solid rgba(255,45,149,0.2)',
                                    background: 'rgba(10,10,30,0.7)',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 15px rgba(255,45,149,0.1)'
                                }}
                            >
                                <h3 
                                    className="text-xl font-bold mb-3 tracking-wide"
                                    style={{ 
                                        color: index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : 'rgba(0,255,255,0.9)',
                                        fontFamily: "var(--heading-font-family, Orbitron)",
                                        textShadow: `0 0 10px ${index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : 'rgba(0,255,255,0.5)'}`
                                    }}
                                >
                                    {point.title}
                                </h3>
                                <p 
                                    className="text-sm leading-relaxed"
                                    style={{ 
                                        color: 'var(--background-text, #e0e0f0)',
                                        fontFamily: "var(--body-font-family, 'Share Tech Mono')"
                                    }}
                                >
                                    {point.description}
                                </p>
                                <div 
                                    className="w-8 h-px mt-4"
                                    style={{ 
                                        background: index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : 'rgba(0,255,255,0.8)',
                                        boxShadow: `0 0 6px ${index % 2 === 0 ? 'var(--primary-color, #ff2d95)' : 'rgba(0,255,255,0.5)'}`
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NeonCyberpunkContentSlide;