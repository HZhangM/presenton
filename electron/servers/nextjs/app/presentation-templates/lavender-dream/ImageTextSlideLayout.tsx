import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Gentle Wellness Journey'),
  description: z.string().min(20).max(200).default('Discover the transformative power of mindful living through our carefully curated wellness programs designed to nurture your mind, body, and spirit in perfect harmony.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Serene lavender field at sunset with soft purple hues')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Serene lavender field at sunset with soft purple hues'
  })
});

export const layoutId = 'lavender-dream-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, styled with soft lavender theme and glass-morphism effects.';

const LavenderDreamImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Cormorant Garamond)" 
        }}
      >
        {/* Company Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img src={(data as any)?._logo_url__} alt="logo" className="w-12 h-12 object-contain flex-shrink-0" />
              )}
              {(data as any)?.__companyName__ && (
                <>
                  <div 
                    className="w-0.5 h-4 flex-shrink-0"
                    style={{ backgroundColor: 'var(--stroke, rgba(155, 89, 182, 0.15))' }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ 
                      color: 'var(--background-text, #3a2050)',
                      fontFamily: "var(--body-font-family, Mulish)"
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div 
          className="absolute top-8 right-12 w-16 h-16 rounded-full opacity-10"
          style={{ background: 'var(--primary-color, #9b59b6)' }}
        />
        <div 
          className="absolute bottom-16 left-8 w-8 h-8 rounded-full opacity-5"
          style={{ background: 'var(--primary-color, #9b59b6)' }}
        />

        {/* Main Content */}
        <div className="flex w-full h-full">
          {/* Text Content Side */}
          <div className="w-1/2 flex items-center justify-center p-12">
            <div 
              className="max-w-md backdrop-blur-sm p-8 rounded-xl"
              style={{
                background: 'var(--card-color, rgba(255, 255, 255, 0.65))',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
              }}
            >
              <h1 
                className="text-4xl font-bold mb-4 leading-tight"
                style={{ 
                  color: 'var(--background-text, #3a2050)',
                  fontFamily: "var(--heading-font-family, Cormorant Garamond)"
                }}
              >
                {data.title}
              </h1>
              
              {/* Divider */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-2/5 h-px"
                  style={{ background: 'var(--primary-color, #9b59b6)' }}
                />
              </div>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: 'var(--background-text, #3a2050)',
                  fontFamily: "var(--body-font-family, Mulish)"
                }}
              >
                {data.description}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-1/2 relative p-8 flex items-center justify-center">
            <div 
              className="w-full h-full max-w-lg max-h-96 overflow-hidden"
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(155,89,182,0.12)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
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
      </div>
    </>
  );
};

export default LavenderDreamImageTextSlide;