import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Transform Your Business'),
  description: z.string().min(10).max(200).default('Discover key insights and strategies that drive growth through innovative solutions and data-driven approaches.'),
  keyPoints: z.array(z.object({
    title: z.string().min(5).max(60).default('Strategic Innovation'),
    description: z.string().min(10).max(100).default('Leverage cutting-edge technology to streamline operations and enhance customer experience.')
  })).min(2).max(4).default([
    {
      title: 'Strategic Innovation',
      description: 'Leverage cutting-edge technology to streamline operations and enhance customer experience.'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable intelligence that drives informed decision making.'
    },
    {
      title: 'Market Leadership',
      description: 'Establish competitive advantage through differentiation and value proposition.'
    }
  ])
});

export const layoutId = 'electric-purple-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points.';

const ElectricPurpleContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Urbanist)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[40px] object-contain" />}
                <span
                  style={{ backgroundColor: 'var(--stroke, rgba(187,134,252,0.3))' }}
                  className='w-[2px] h-4'
                />
                {(data as any)?.__companyName__ && (
                  <span className="text-sm font-semibold" style={{ color: 'var(--background-text, #e8d0ff)' }}>
                    {(data as any)?.__companyName__ || 'Company Name'}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="absolute top-8 right-8 w-32 h-32 opacity-10">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--primary-color, #bb86fc) 0%, transparent 70%)',
              boxShadow: '0 0 40px rgba(187,134,252,0.3)'
            }}
          />
        </div>

        <div className="absolute bottom-12 left-12 w-24 h-1 opacity-20">
          <div style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #bb86fc) 50%, transparent 100%)'
          }} className="w-full h-full" />
        </div>

        <div className="flex flex-col h-full p-8 pt-16">
          <div className="flex-shrink-0 mb-6">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ color: 'var(--background-text, #e8d0ff)' }}
            >
              {title}
            </h1>
            <p 
              className="text-lg mb-4"
              style={{ color: 'var(--background-text, #e8d0ff)', opacity: 0.8 }}
            >
              {description}
            </p>
            <div 
              className="h-0.5 w-24"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #bb86fc) 50%, transparent 100%)'
              }}
            />
          </div>

          <div className="flex-1 min-h-0 grid gap-4" 
               style={{ 
                 gridTemplateColumns: keyPoints && keyPoints.length <= 2 ? '1fr' : '1fr 1fr',
                 gridTemplateRows: keyPoints && keyPoints.length <= 2 ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)'
               }}>
            {keyPoints?.map((point, index) => (
              <div
                key={index}
                className="p-4"
                style={{
                  border: '1px solid rgba(187,134,252,0.2)',
                  background: 'rgba(187,134,252,0.08)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 0 20px rgba(187,134,252,0.1)'
                }}
              >
                <h3 
                  className="text-lg font-semibold mb-1"
                  style={{ color: 'var(--primary-color, #bb86fc)' }}
                >
                  {point.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--background-text, #e8d0ff)', opacity: 0.9 }}
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

export default ElectricPurpleContentSlide;