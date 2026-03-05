import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).describe('Main slide title').default('Arctic Innovation'),
  description: z.string().min(10).max(200).describe('Supporting description text').default('Discover cutting-edge solutions that transform frozen landscapes into opportunities for sustainable growth and technological advancement.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Arctic landscape with ice formations')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Arctic landscape with ice formations'
  })
});

export const layoutId = 'arctic-ice-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const ArcticIceImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Outfit)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-6 z-30">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && (
                  <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />
                )}
                <div 
                  className="w-[1px] h-4"
                  style={{ backgroundColor: 'var(--stroke, rgba(2,136,209,0.15))' }}
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-light"
                    style={{ color: 'var(--background-text, #1a3a50)' }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex w-full h-full">
          <div className="flex-1 flex flex-col justify-center px-16 py-20">
            <div 
              className="p-8 rounded-2xl backdrop-blur-[16px] border"
              style={{
                background: 'rgba(255, 255, 255, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div 
                className="w-16 h-[2px] mb-6"
                style={{ backgroundColor: 'var(--primary-color, #0288d1)' }}
              />
              
              <h1 
                className="text-[48px] font-light leading-[1.1] mb-6 tracking-[-1px]"
                style={{ color: 'var(--background-text, #1a3a50)' }}
              >
                {data.title}
              </h1>
              
              <p 
                className="text-lg font-light leading-relaxed"
                style={{ color: 'var(--background-text, #1a3a50)', opacity: 0.8 }}
              >
                {data.description}
              </p>
            </div>
          </div>

          <div className="flex-1 relative flex items-center justify-center p-12">
            <div 
              className="w-full h-[500px] rounded-2xl overflow-hidden backdrop-blur-[16px] border"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
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

        <div 
          className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--primary-color, #0288d1) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        <div 
          className="absolute bottom-16 left-16 w-1 h-24 opacity-10"
          style={{ backgroundColor: 'var(--primary-color, #0288d1)' }}
        />
      </div>
    </>
  );
};

export default ArcticIceImageTextSlide;