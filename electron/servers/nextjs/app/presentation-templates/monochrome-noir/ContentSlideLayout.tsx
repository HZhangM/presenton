import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Strategic Overview'),
  description: z.string().min(1).max(200).default('Core insights and strategic recommendations for driving organizational excellence through focused execution and measurable outcomes.'),
  keyPoints: z.array(z.object({
    title: z.string().min(1).max(60).default('Market Leadership Position'),
    description: z.string().min(1).max(100).default('Establishing dominant market presence through strategic positioning and competitive differentiation.')
  })).min(2).max(4).default([
    {
      title: 'Market Leadership Position',
      description: 'Establishing dominant market presence through strategic positioning and competitive differentiation.'
    },
    {
      title: 'Operational Excellence Framework',
      description: 'Implementing systematic processes to drive efficiency and deliver consistent high-quality results.'
    },
    {
      title: 'Innovation Pipeline Development',
      description: 'Building sustainable innovation capabilities to maintain competitive advantage and future growth.'
    },
    {
      title: 'Strategic Partnership Expansion',
      description: 'Leveraging key partnerships to accelerate growth and expand market reach through collaboration.'
    }
  ])
});

export const layoutId = 'monochrome-noir-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in stark monochrome design.';

const MonochromeNoirContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Space Grotesk)" }}>
        
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] h-[32px] object-contain flex-shrink-0" />}
                <div className="w-[2px] h-4 flex-shrink-0" style={{ backgroundColor: 'var(--stroke, rgba(0, 0, 0, 0.2))' }}></div>
                {(data as any)?.__companyName__ && <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #000000)' }}>
                  {(data as any)?.__companyName__}
                </span>}
              </div>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-8 w-16 h-16 border-2 border-black opacity-20"></div>
        <div className="absolute bottom-8 left-8 w-24 h-2 bg-black opacity-10"></div>

        <div className="px-12 pt-20 pb-12 h-full flex flex-col">
          
          <div className="flex-shrink-0 mb-8">
            <h1 
              className="text-5xl font-bold mb-4" 
              style={{ 
                color: 'var(--background-text, #000000)', 
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}
            >
              {title}
            </h1>
            
            <div className="h-[3px] w-full mb-4" style={{ backgroundColor: 'var(--primary-color, #000000)' }}></div>
            
            <p 
              className="text-lg leading-relaxed max-w-4xl" 
              style={{ color: 'var(--background-text, #000000)' }}
            >
              {description}
            </p>
          </div>

          <div className="flex-1 min-h-0">
            <div className="grid grid-cols-2 gap-4 h-full">
              {keyPoints?.map((point, index) => (
                <div 
                  key={index}
                  className="border-2 border-black bg-white p-4 flex flex-col relative"
                  style={{ 
                    borderRadius: '0',
                    background: '#ffffff'
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: 'var(--primary-color, #000000)' }}
                  >
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 pt-6">
                    <h3 
                      className="text-lg font-bold mb-2 leading-tight"
                      style={{ color: 'var(--primary-color, #000000)' }}
                    >
                      {point.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--background-text, #000000)' }}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonochromeNoirContentSlide;