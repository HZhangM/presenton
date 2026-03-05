import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Serene Mountain Views'),
  description: z.string().min(20).max(200).default('Discover the tranquil beauty of misty mountain landscapes where silence speaks louder than words, and every breath connects you to nature\'s gentle rhythm.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Misty mountain landscape with layered peaks')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Misty mountain landscape with layered peaks'
  })
});

export const layoutId = 'mountain-mist-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const MountainMistImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Philosopher)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && (
                  <img src={(data as any)?._logo_url__} alt="logo" className="w-[48px] object-contain opacity-80" />
                )}
                <div 
                  className="w-[1px] h-4 opacity-30"
                  style={{ backgroundColor: 'var(--stroke, rgba(84, 110, 122, 0.15))' }}
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-normal tracking-wide"
                    style={{ 
                      color: 'var(--background-text, #1a2a3a)',
                      fontFamily: 'var(--body-font-family, Karla)'
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Decorative mist layers */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(84, 110, 122, 0.1) 70%)'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{
            background: 'linear-gradient(180deg, rgba(84, 110, 122, 0.2) 0%, transparent 60%)'
          }}
        />

        <div className="flex w-full h-full">
          {/* Text Side */}
          <div className="w-1/2 flex flex-col justify-center p-12">
            <div 
              className="p-8 backdrop-blur-[12px] border border-solid rounded-xl"
              style={{
                background: 'var(--card-color, rgba(255, 255, 255, 0.55))',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
            >
              <h1 
                className="text-4xl font-normal leading-tight mb-6 tracking-wide"
                style={{ 
                  color: 'var(--background-text, #1a2a3a)',
                  fontFamily: 'var(--heading-font-family, Philosopher)'
                }}
              >
                {data.title}
              </h1>
              
              {/* Subtle divider */}
              <div className="flex justify-center mb-6">
                <div 
                  className="h-px w-2/5 opacity-40"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--stroke, rgba(84, 110, 122, 0.15)), transparent)'
                  }}
                />
              </div>
              
              <p 
                className="text-lg font-normal leading-relaxed opacity-90"
                style={{ 
                  color: 'var(--background-text, #1a2a3a)',
                  fontFamily: 'var(--body-font-family, Karla)'
                }}
              >
                {data.description}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-1/2 relative overflow-hidden">
            <div className="absolute inset-4 rounded-xl overflow-hidden">
              <img
                src={data.image?.__image_url__}
                alt={data.image?.__image_prompt__}
                className="w-full h-full object-cover"
              />
              {/* Soft overlay for cohesion */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'linear-gradient(45deg, rgba(84, 110, 122, 0.1), transparent 60%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MountainMistImageTextSlide;