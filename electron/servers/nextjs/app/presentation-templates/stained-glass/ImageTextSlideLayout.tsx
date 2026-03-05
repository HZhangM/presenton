import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Sacred Architecture'),
  description: z.string().min(1).max(200).default('Discover the divine beauty and spiritual significance of cathedral stained glass windows, where light transforms colored glass into celestial masterpieces that inspire reverence and wonder.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Beautiful cathedral stained glass window')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Beautiful cathedral stained glass window'
  })
});

export const layoutId = 'stained-glass-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const StainedGlassImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
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
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-30">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />}
                <span
                  style={{ backgroundColor: 'var(--stroke, rgba(192, 57, 43, 0.3))' }}
                  className='w-[2px] h-4'
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-semibold" 
                    style={{ 
                      color: 'var(--background-text, #e8e0d0)',
                      fontFamily: 'var(--body-font-family, Merriweather Sans)'
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Decorative Cross Ornament - Top Left */}
        <div 
          className="absolute top-4 left-4 w-6 h-6 opacity-20 z-10"
          style={{ color: 'var(--primary-color, #c0392b)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L13.09 8.26L20 7.27L14.18 12L20 16.73L13.09 15.74L12 22L10.91 15.74L4 16.73L9.82 12L4 7.27L10.91 8.26L12 2Z"/>
          </svg>
        </div>

        {/* Decorative Floral Ornament - Bottom Right */}
        <div 
          className="absolute bottom-6 right-6 w-8 h-8 opacity-15 z-10"
          style={{ color: 'var(--primary-color, #c0392b)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L12 2L3 7V9H5V19A2 2 0 0 0 7 21H17A2 2 0 0 0 19 19V9H21M11 16H13V18H11V16M11 10H13V14H11V10Z"/>
          </svg>
        </div>

        <div className="flex w-full h-full">
          {/* Image Side */}
          <div className="w-1/2 relative">
            <img
              src={data.image?.__image_url__}
              alt={data.image?.__image_prompt__}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"
            />
          </div>

          {/* Text Side */}
          <div className="w-1/2 flex items-center justify-center p-12">
            <div 
              className="max-w-md p-8 rounded-lg"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(6px)',
                borderRadius: '8px'
              }}
            >
              <h1 
                className="text-4xl font-bold mb-6 leading-tight"
                style={{ 
                  color: 'var(--background-text, #e8e0d0)',
                  fontFamily: 'var(--heading-font-family, Merriweather)'
                }}
              >
                {data.title}
              </h1>
              
              {/* Ornamental Divider */}
              <div className="flex items-center mb-6">
                <div 
                  className="flex-1 h-px"
                  style={{ backgroundColor: 'var(--stroke, rgba(192, 57, 43, 0.3))' }}
                />
                <div 
                  className="mx-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}
                />
                <div 
                  className="flex-1 h-px"
                  style={{ backgroundColor: 'var(--stroke, rgba(192, 57, 43, 0.3))' }}
                />
              </div>

              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: 'var(--background-text, #e8e0d0)',
                  fontFamily: 'var(--body-font-family, Merriweather Sans)'
                }}
              >
                {data.description}
              </p>

              {/* Accent Border */}
              <div 
                className="mt-6 w-16 h-1 rounded"
                style={{ backgroundColor: 'var(--primary-color, #c0392b)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StainedGlassImageTextSlide;