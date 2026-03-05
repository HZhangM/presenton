import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Creating Lasting Memories'),
  description: z.string().min(10).max(200).default('Exploring the key elements that make moments unforgettable and how we can intentionally craft experiences that stand the test of time.'),
  keyPoints: z.array(z.object({
    title: z.string().min(5).max(60).default('Capture Authentic Moments'),
    description: z.string().min(10).max(100).default('Focus on genuine emotions and spontaneous interactions that reveal true character.')
  })).min(2).max(4).default([
    {
      title: 'Capture Authentic Moments',
      description: 'Focus on genuine emotions and spontaneous interactions that reveal true character.'
    },
    {
      title: 'Document the Details',
      description: 'Small elements like handwritten notes and personal items tell the bigger story.'
    },
    {
      title: 'Create Connection Points',
      description: 'Build bridges between past experiences and future aspirations through storytelling.'
    },
    {
      title: 'Preserve Physical Memories',
      description: 'Tangible keepsakes and photo albums create lasting touchpoints for reflection.'
    }
  ])
});

export const layoutId = 'polaroid-memoir-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in polaroid-style cards with nostalgic scrapbook aesthetic.';

const PolaroidMemoirContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Caveat)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain flex-shrink-0" />}
                <span
                  style={{ backgroundColor: 'var(--stroke, rgba(212, 118, 78, 0.2))' }}
                  className='w-[2px] h-4 flex-shrink-0'></span>
                {(data as any)?.__companyName__ && <span className="text-sm font-semibold flex-1 min-w-0" style={{ color: 'var(--background-text, #3a3020)' }}>
                  {(data as any)?.__companyName__ || 'Company Name'}
                </span>}
              </div>
            </div>
          </div>
        )}

        <div className="px-12 py-8 h-full flex flex-col">
          {/* Header Section */}
          <div className="mb-6">
            <h1 
              className="text-4xl font-bold mb-3"
              style={{ 
                color: 'var(--primary-color, #d4764e)',
                fontFamily: 'var(--heading-font-family, Caveat)'
              }}
            >
              {title}
            </h1>
            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--background-text, #3a3020)',
                fontFamily: 'var(--body-font-family, Lato)'
              }}
            >
              {description}
            </p>
            <div 
              className="mt-4 h-px"
              style={{ 
                background: 'var(--stroke, rgba(212, 118, 78, 0.2))',
                borderTop: '1px dashed rgba(212, 118, 78, 0.3)'
              }}
            ></div>
          </div>

          {/* Key Points Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {keyPoints?.map((point, index) => (
              <div
                key={index}
                className="relative p-4 pb-10"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '2px',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
                  transform: `rotate(${[-1, 2, -2, 1][index % 4]}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                {/* Tape decoration */}
                <div 
                  className="absolute -top-2 -left-2 w-8 h-4 opacity-60"
                  style={{
                    background: 'var(--primary-color, #d4764e)',
                    transform: 'rotate(-45deg)',
                    borderRadius: '1px'
                  }}
                ></div>
                
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ 
                    color: 'var(--primary-color, #d4764e)',
                    fontFamily: 'var(--heading-font-family, Caveat)'
                  }}
                >
                  {point.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ 
                    color: 'var(--background-text, #3a3020)',
                    fontFamily: 'var(--body-font-family, Lato)'
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative washi tape accent */}
          <div 
            className="absolute bottom-8 right-8 w-20 h-3 opacity-40"
            style={{
              background: 'repeating-linear-gradient(90deg, var(--primary-color, #d4764e) 0px, var(--primary-color, #d4764e) 8px, transparent 8px, transparent 12px)',
              transform: 'rotate(5deg)'
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default PolaroidMemoirContentSlide;