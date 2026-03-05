import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('System Status Report'),
  description: z.string().min(10).max(200).default('Current operational parameters and key metrics for the main system components. All subsystems are running within normal operational thresholds.'),
  keyPoints: z.array(z.object({
    title: z.string().min(5).max(60).default('Core Processing Unit'),
    description: z.string().min(10).max(100).default('Operating at 98% efficiency with optimal temperature levels and stable power consumption.')
  })).min(2).max(4).default([
    {
      title: 'Network Connection',
      description: 'Stable connection established with 99.7% uptime and low latency response times.'
    },
    {
      title: 'Memory Banks',
      description: 'All memory sectors operational with 15% capacity remaining for additional processes.'
    },
    {
      title: 'Security Protocols',
      description: 'Firewall active, encryption enabled, no threats detected in the last 24 hours.'
    }
  ])
});

export const layoutId = 'pixel-retro-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in retro gaming pixel art style';

const PixelRetroContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, 'Press Start 2P')",
          border: "2px solid rgba(80,200,120,0.4)"
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[32px] h-[32px] object-contain" />}
                <div 
                  style={{ backgroundColor: 'var(--stroke, rgba(80,200,120,0.35))' }}
                  className="w-[2px] h-4"
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-xs font-normal"
                    style={{ 
                      color: 'var(--background-text, #50c878)',
                      fontFamily: "var(--body-font-family, 'VT323')"
                    }}
                  >
                    {(data as any)?.__companyName__ || 'SYSTEM'}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col h-full p-12 pt-20">
          <div className="mb-8">
            <div 
              className="text-left mb-6"
              style={{
                fontSize: '28px',
                lineHeight: '36px',
                color: 'var(--primary-color, #50c878)',
                fontFamily: "var(--heading-font-family, 'Press Start 2P')"
              }}
            >
              {title}
            </div>
            
            <div 
              className="border-t-2 border-dashed mb-6"
              style={{ borderColor: 'var(--stroke, rgba(80,200,120,0.35))' }}
            />
            
            <div 
              className="text-left mb-8"
              style={{
                fontSize: '20px',
                lineHeight: '24px',
                color: 'var(--background-text, #50c878)',
                fontFamily: "var(--body-font-family, 'VT323')"
              }}
            >
              {description}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1">
            {keyPoints?.map((point, index) => (
              <div 
                key={index}
                className="p-6"
                style={{
                  border: '2px solid rgba(80,200,120,0.3)',
                  background: 'rgba(80,200,120,0.06)',
                  borderRadius: '0'
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div 
                    className="w-2 h-2 mt-2 flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary-color, #50c878)' }}
                  />
                  <div 
                    className="text-left"
                    style={{
                      fontSize: '14px',
                      lineHeight: '18px',
                      color: 'var(--primary-color, #50c878)',
                      fontFamily: "var(--heading-font-family, 'Press Start 2P')"
                    }}
                  >
                    {point.title}
                  </div>
                </div>
                <div 
                  className="text-left pl-5"
                  style={{
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: 'var(--background-text, #50c878)',
                    fontFamily: "var(--body-font-family, 'VT323')"
                  }}
                >
                  {point.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="absolute top-16 right-12 w-4 h-4 animate-pulse"
          style={{ backgroundColor: 'var(--primary-color, #50c878)', opacity: 0.6 }}
        />
        
        <div 
          className="absolute bottom-16 left-12"
          style={{ color: 'var(--stroke, rgba(80,200,120,0.35))', fontFamily: "var(--body-font-family, 'VT323')", fontSize: '12px' }}
        >
          ████████████████
        </div>
      </div>
    </>
  );
};

export default PixelRetroContentSlide;