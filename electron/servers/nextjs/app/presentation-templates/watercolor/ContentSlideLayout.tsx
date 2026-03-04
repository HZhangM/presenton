import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Watercolor Content Overview'),
  description: z.string().min(10).max(200).default('This elegant content slide showcases key information with soft watercolor aesthetics and glass-morphism design elements for a refined presentation experience.'),
  keyPoints: z.array(z.object({
    title: z.string().min(5).max(60).default('Key Point Title'),
    description: z.string().min(10).max(100).default('Detailed description of this important point with supporting information and context.')
  })).min(2).max(4).default([
    {
      title: 'Elegant Design Principles',
      description: 'Soft watercolor aesthetics combined with modern glass-morphism effects create visual appeal.'
    },
    {
      title: 'Typography Excellence',
      description: 'Beautiful serif fonts enhance readability while maintaining sophisticated appearance.'
    },
    {
      title: 'Content Organization',
      description: 'Structured layout ensures clear information hierarchy and smooth content flow.'
    }
  ])
});

export const layoutId = 'watercolor-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points featuring watercolor aesthetics.';

const WatercolorContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Playfair Display)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                <span
                  style={{ backgroundColor: 'var(--stroke, rgba(124,92,191,0.25))' }}
                  className='w-[2px] h-4 rounded-full'
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-medium" 
                    style={{ 
                      color: 'var(--background-text, #2d2d3d)',
                      fontFamily: "var(--body-font-family, Lora)"
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="absolute top-16 left-16 w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, var(--primary-color, #7c5cbf) 0%, transparent 70%)',
            filter: 'blur(16px)'
          }}
        />

        <div className="flex flex-col h-full px-16 py-20">
          <div className="mb-8">
            <h1 
              className="text-5xl font-bold mb-6"
              style={{ 
                color: 'var(--background-text, #2d2d3d)',
                fontFamily: "var(--heading-font-family, Playfair Display)"
              }}
            >
              {title}
            </h1>
            <p 
              className="text-lg leading-relaxed max-w-4xl"
              style={{ 
                color: 'var(--background-text, #2d2d3d)',
                fontFamily: "var(--body-font-family, Lora)"
              }}
            >
              {description}
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 mt-8">
            {keyPoints?.map((point, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl"
                style={{
                  backdropFilter: 'blur(12px)',
                  background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
                }}
              >
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    color: 'var(--primary-color, #7c5cbf)',
                    fontFamily: "var(--heading-font-family, Playfair Display)"
                  }}
                >
                  {point?.title}
                </h3>
                <p 
                  className="text-base leading-relaxed"
                  style={{ 
                    color: 'var(--background-text, #2d2d3d)',
                    fontFamily: "var(--body-font-family, Lora)"
                  }}
                >
                  {point?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatercolorContentSlide;