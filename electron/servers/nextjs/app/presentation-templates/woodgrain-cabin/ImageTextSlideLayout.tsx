import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Welcome to Our Cabin'),
  description: z.string().min(1).max(200).default('Experience the warmth and comfort of rustic living. Our handcrafted cabin offers a perfect retreat from the modern world, surrounded by nature\'s beauty.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Cozy wooden cabin in forest setting')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Cozy wooden cabin in forest setting'
  })
});

export const layoutId = 'woodgrain-cabin-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const WoodgrainCabinImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, 'Amatic SC')" 
        }}
      >
        {/* Company Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-6 pt-4 z-30">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img src={(data as any)?._logo_url__} alt="logo" className="w-12 h-12 object-contain flex-shrink-0" />
              )}
              {(data as any)?.__companyName__ && (
                <>
                  <div 
                    className="w-0.5 h-4 flex-shrink-0"
                    style={{ backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ 
                      color: 'var(--background-text, #f5efe6)',
                      fontFamily: "var(--body-font-family, 'Cabin')"
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
          className="absolute top-4 right-8 w-8 h-8 opacity-20"
          style={{ color: 'var(--primary-color, #d4a76a)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" />
          </svg>
        </div>

        <div 
          className="absolute bottom-6 left-8 w-6 h-6 opacity-15"
          style={{ color: 'var(--primary-color, #d4a76a)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 21V18H3L8 13V10L4.5 7.5C4.5 6.1 5.6 5 7 5H17C18.4 5 19.5 6.1 19.5 7.5L16 10V13L21 18H14V21H10M7.5 7.5V9.5L9.5 11.5V9.5L7.5 7.5M16.5 7.5L14.5 9.5V11.5L16.5 9.5V7.5Z" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="flex w-full h-full">
          {/* Text Content Side */}
          <div className="w-1/2 flex items-center justify-center p-12">
            <div 
              className="max-w-md p-8 rounded-lg"
              style={{ 
                background: 'var(--card-color, rgba(255, 250, 240, 0.9))',
                border: '1px solid rgba(139,90,43,0.15)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <h1 
                className="text-4xl font-bold mb-4 leading-tight"
                style={{ color: 'var(--primary-text, #2a1a0e)' }}
              >
                {data.title}
              </h1>
              
              {/* Decorative Divider */}
              <div className="flex items-center mb-6">
                <div 
                  className="flex-1 h-px"
                  style={{ backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}
                />
                <div 
                  className="w-3 h-3 mx-2 rotate-45 border"
                  style={{ 
                    borderColor: 'var(--primary-color, #d4a76a)',
                    backgroundColor: 'var(--primary-color, #d4a76a)'
                  }}
                />
                <div 
                  className="flex-1 h-px"
                  style={{ backgroundColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}
                />
              </div>

              <p 
                className="text-base leading-relaxed"
                style={{ 
                  color: 'var(--primary-text, #2a1a0e)',
                  fontFamily: "var(--body-font-family, 'Cabin')"
                }}
              >
                {data.description}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-1/2 relative">
            <img
              src={data.image?.__image_url__}
              alt={data.image?.__image_prompt__}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 border-2 opacity-30"
              style={{ borderColor: 'var(--stroke, rgba(212, 167, 106, 0.3))' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WoodgrainCabinImageTextSlide;