import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Origami Innovation'),
  description: z.string().min(10).max(200).default('Transform your business with elegant solutions that fold complexity into simplicity. Our approach creates lasting impact through thoughtful design and strategic execution.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('origami paper crane on soft pastel background')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'origami paper crane on soft pastel background'
  })
});

export const layoutId = 'origami-paper-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const OrigamiPaperImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Outfit)" 
        }}
      >
        {/* Company Header */}
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-5">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img 
                  src={(data as any)?._logo_url__} 
                  alt="logo" 
                  className="w-12 h-12 object-contain flex-shrink-0" 
                />
              )}
              <div 
                className="w-0.5 h-6 flex-shrink-0"
                style={{ backgroundColor: 'var(--stroke, rgba(224, 122, 95, 0.15))' }}
              />
              {(data as any)?.__companyName__ && (
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'var(--background-text, #2d2d3d)' }}
                >
                  {(data as any)?.__companyName__}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex h-full w-full">
          {/* Left Image Side */}
          <div className="w-1/2 relative">
            <img
              src={data.image?.__image_url__}
              alt={data.image?.__image_prompt__}
              className="w-full h-full object-cover"
            />
            {/* Geometric fold overlay */}
            <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
              <div 
                className="w-full h-full transform rotate-45"
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary-color, #e07a5f) 0%, transparent 50%)',
                  clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                }}
              />
            </div>
          </div>

          {/* Right Text Side */}
          <div className="w-1/2 flex flex-col justify-center p-12">
            <div 
              className="bg-white/85 border border-black/6 rounded border-solid p-8 relative"
              style={{
                background: 'var(--card-color, rgba(255, 255, 255, 0.85))',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '4px',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.04)'
              }}
            >
              <h1 
                className="text-4xl font-bold mb-4 leading-tight"
                style={{ 
                  color: 'var(--background-text, #2d2d3d)',
                  fontFamily: 'var(--heading-font-family, Outfit)'
                }}
              >
                {data.title}
              </h1>
              
              {/* Decorative divider with triangle */}
              <div className="flex items-center mb-6">
                <div 
                  className="h-px flex-1 max-w-16"
                  style={{ backgroundColor: 'var(--primary-color, #e07a5f)' }}
                />
                <div 
                  className="w-2 h-2 ml-1 transform rotate-45"
                  style={{ backgroundColor: 'var(--primary-color, #e07a5f)' }}
                />
              </div>

              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: 'var(--background-text, #2d2d3d)',
                  fontFamily: 'var(--body-font-family, "Nunito Sans")'
                }}
              >
                {data.description}
              </p>

              {/* Paper fold accent */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-30">
                <div 
                  className="w-full h-full"
                  style={{ 
                    background: 'var(--primary-color, #e07a5f)',
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative triangle accent */}
        <div className="absolute bottom-12 left-8 w-6 h-6 opacity-15">
          <div 
            className="w-full h-full"
            style={{ 
              background: 'var(--primary-color, #e07a5f)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OrigamiPaperImageTextSlide;