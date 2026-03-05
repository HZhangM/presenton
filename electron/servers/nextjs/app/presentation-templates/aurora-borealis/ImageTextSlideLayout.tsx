import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Aurora Awakening'),
  description: z.string().min(1).max(200).default('Witness the ethereal dance of northern lights as they paint the sky with brilliant greens and purples, creating a celestial masterpiece that connects earth to the infinite cosmos above.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Northern lights aurora borealis over snowy landscape')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Northern lights aurora borealis over snowy landscape'
  })
});

export const layoutId = 'aurora-borealis-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, themed with aurora borealis elements.';

const AuroraBorealisImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Poppins)" 
        }}
      >
        {/* Company Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && (
                  <img 
                    src={(data as any)?._logo_url__} 
                    alt="logo" 
                    className="w-[60px] object-contain" 
                  />
                )}
                <span
                  style={{ backgroundColor: 'var(--stroke, rgba(78,204,163,0.25))' }}
                  className='w-[2px] h-4'
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-semibold" 
                    style={{ color: 'var(--background-text, #d0e8e0)' }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Decorative Aurora Glow */}
        <div 
          className="absolute top-0 left-0 w-96 h-64 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--primary-color, #4ecca3) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        
        {/* Decorative Curved Lines */}
        <div className="absolute top-32 right-16 w-80 h-1 opacity-30 pointer-events-none">
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(139, 92, 246, 0.6) 100%)'
            }}
          />
        </div>

        {/* Main Content */}
        <div className="flex w-full h-full">
          {/* Text Side */}
          <div className="w-1/2 p-12 flex flex-col justify-center">
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm"
              style={{
                border: '1px solid rgba(78,204,163,0.15)',
                background: 'rgba(78,204,163,0.06)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h1 
                className="text-4xl font-bold mb-6 leading-tight"
                style={{ 
                  color: 'var(--background-text, #d0e8e0)',
                  fontFamily: 'var(--heading-font-family, Poppins)'
                }}
              >
                {data.title}
              </h1>
              
              {/* Gradient Divider */}
              <div 
                className="w-20 h-1 mb-6 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, var(--primary-color, #4ecca3) 0%, rgba(139, 92, 246, 0.8) 100%)'
                }}
              />
              
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: 'var(--background-text, #d0e8e0)',
                  fontFamily: 'var(--body-font-family, "Nunito Sans")'
                }}
              >
                {data.description}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-1/2 p-8 flex items-center justify-center">
            <div 
              className="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: '1px solid rgba(78,204,163,0.2)'
              }}
            >
              <img
                src={data.image?.__image_url__}
                alt={data.image?.__image_prompt__}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Subtle Shimmer Effect */}
        <div 
          className="absolute bottom-16 left-16 w-64 h-32 opacity-10 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, var(--primary-color, #4ecca3) 50%, transparent 100%)',
            filter: 'blur(40px)',
            transform: 'rotate(-15deg)'
          }}
        />
      </div>
    </>
  );
};

export default AuroraBorealisImageTextSlide;