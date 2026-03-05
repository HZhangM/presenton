import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Sacred Knowledge'),
  description: z.string().min(10).max(200).default('Illuminating insights that guide our path forward through the cathedral of understanding and divine wisdom.'),
  keyPoints: z.array(z.object({
    title: z.string().min(5).max(60).default('Divine Inspiration'),
    description: z.string().min(10).max(100).default('Through contemplation and reverence, we discover the sacred truths that illuminate our journey.')
  })).min(2).max(4).default([
    {
      title: 'Sacred Foundation',
      description: 'Building upon timeless principles that have guided generations through wisdom and understanding.'
    },
    {
      title: 'Illuminated Path',
      description: 'Following the light that shines through the stained glass of experience and knowledge.'
    },
    {
      title: 'Divine Purpose',
      description: 'Embracing our calling with reverence and dedication to higher spiritual truths.'
    }
  ])
});

export const layoutId = 'stained-glass-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A reverent content slide with ornate serif typography, featuring title, description, and key points in jewel-toned stained glass theme.';

const StainedGlassContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Merriweather)" 
        }}
      >
        {/* Decorative cross ornament */}
        <div 
          className="absolute top-8 right-8 w-6 h-6 opacity-30"
          style={{ color: "var(--primary-color, #c0392b)" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Decorative jewel accent */}
        <div 
          className="absolute bottom-12 left-12 w-8 h-8 opacity-20 rounded-full"
          style={{ background: "var(--primary-color, #c0392b)" }}
        />

        {/* Company header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && (
                  <img src={(data as any)?._logo_url__} alt="logo" className="w-10 h-10 flex-shrink-0 object-contain" />
                )}
                <div 
                  className="w-0.5 h-4 flex-shrink-0"
                  style={{ backgroundColor: 'var(--stroke, rgba(192, 57, 43, 0.3))' }}
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-bold flex-1 min-w-0"
                    style={{ 
                      color: 'var(--background-text, #e8e0d0)',
                      fontFamily: "var(--body-font-family, Merriweather Sans)"
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col h-full p-12 pt-20">
          {/* Header Section */}
          <div className="flex-shrink-0 text-center mb-8">
            <h1 
              className="text-5xl font-black mb-4 tracking-tight"
              style={{ color: "var(--background-text, #e8e0d0)" }}
            >
              {title}
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div 
                className="h-px flex-1 max-w-24"
                style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
              />
              <div 
                className="w-2 h-2 mx-4 rounded-full"
                style={{ background: "var(--primary-color, #c0392b)" }}
              />
              <div 
                className="h-px flex-1 max-w-24"
                style={{ background: "var(--stroke, rgba(192, 57, 43, 0.3))" }}
              />
            </div>
            
            <p 
              className="text-xl leading-relaxed max-w-4xl mx-auto"
              style={{ 
                color: "var(--background-text, #e8e0d0)",
                fontFamily: "var(--body-font-family, Merriweather Sans)"
              }}
            >
              {description}
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="flex-1 min-h-0">
            <div className="grid grid-cols-2 gap-4 h-full">
              {keyPoints?.map((point, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg flex flex-col"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(6px)"
                  }}
                >
                  <h3 
                    className="text-lg font-bold mb-2 flex-shrink-0"
                    style={{ color: "var(--primary-color, #c0392b)" }}
                  >
                    {point.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed flex-1 min-h-0"
                    style={{ 
                      color: "var(--background-text, #e8e0d0)",
                      fontFamily: "var(--body-font-family, Merriweather Sans)"
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StainedGlassContentSlide;