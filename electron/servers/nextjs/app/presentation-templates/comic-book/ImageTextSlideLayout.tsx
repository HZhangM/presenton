import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('HERO EMERGES!'),
  description: z.string().min(1).max(200).default('With incredible powers and unwavering determination, our hero faces the ultimate challenge to save the city from impending doom!'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('superhero flying over city skyline')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'superhero flying over city skyline'
  })
});

export const layoutId = 'comic-book-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const ComicBookImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Bangers)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />}
                <span
                  style={{ backgroundColor: 'var(--stroke, #1a1a1a)' }}
                  className="w-[2px] h-4"
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-bold" 
                    style={{ color: 'var(--background-text, #1a1a1a)' }}
                  >
                    {(data as any)?.__companyName__ || 'Company Name'}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex w-full h-full">
          {/* Image Side */}
          <div className="w-1/2 relative">
            <img
              src={data.image?.__image_url__}
              alt={data.image?.__image_prompt__}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 border-r-3"
              style={{ borderColor: 'var(--stroke, #1a1a1a)', borderRightWidth: '3px' }}
            />
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 25% 25%, rgba(229, 57, 53, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)`
              }}
            />
          </div>

          {/* Text Side */}
          <div className="w-1/2 flex flex-col justify-center p-10 relative">
            <div 
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center transform rotate-12"
              style={{ 
                background: 'var(--primary-color, #e53935)', 
                border: '3px solid var(--stroke, #1a1a1a)',
                boxShadow: '4px 4px 0 var(--stroke, #1a1a1a)'
              }}
            >
              <span 
                className="text-lg font-bold"
                style={{ 
                  color: 'var(--primary-text, #ffffff)',
                  fontFamily: 'var(--heading-font-family, Bangers)'
                }}
              >
                POW!
              </span>
            </div>

            <div 
              className="p-6 relative"
              style={{
                border: '3px solid var(--stroke, #1a1a1a)',
                background: 'var(--card-color, rgba(255, 255, 255, 0.9))',
                borderRadius: '4px',
                boxShadow: '4px 4px 0 var(--stroke, #1a1a1a)'
              }}
            >
              <h1 
                className="text-4xl font-bold mb-4 leading-tight"
                style={{ 
                  color: 'var(--primary-color, #e53935)',
                  fontFamily: 'var(--heading-font-family, Bangers)',
                  textShadow: '2px 2px 0 var(--stroke, #1a1a1a)'
                }}
              >
                {data.title}
              </h1>

              <div 
                className="h-1 w-16 mb-4"
                style={{ 
                  background: 'var(--stroke, #1a1a1a)',
                  clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)'
                }}
              />

              <p 
                className="text-lg leading-relaxed font-bold"
                style={{ 
                  color: 'var(--background-text, #1a1a1a)',
                  fontFamily: 'var(--body-font-family, Comic Neue)'
                }}
              >
                {data.description}
              </p>
            </div>

            <div 
              className="absolute bottom-8 left-8 w-12 h-12 rounded-full"
              style={{
                background: 'repeating-radial-gradient(circle at center, var(--primary-color, #e53935) 0px, var(--primary-color, #e53935) 2px, transparent 2px, transparent 6px)',
                opacity: 0.3
              }}
            />
          </div>
        </div>

        <div 
          className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'repeating-radial-gradient(circle at center, var(--stroke, #1a1a1a) 0px, var(--stroke, #1a1a1a) 1px, transparent 1px, transparent 4px)'
          }}
        />

        <div 
          className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'repeating-radial-gradient(circle at center, #ffc107 0px, #ffc107 1px, transparent 1px, transparent 3px)'
          }}
        />
      </div>
    </>
  );
};

export default ComicBookImageTextSlide;