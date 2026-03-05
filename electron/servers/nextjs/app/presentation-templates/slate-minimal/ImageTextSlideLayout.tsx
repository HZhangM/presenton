import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Technical Excellence'),
  description: z.string().min(1).max(200).default('Our engineering approach focuses on scalable architecture, robust testing frameworks, and continuous integration to deliver reliable software solutions that meet enterprise standards.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Modern software development workspace with code')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Modern software development workspace with code'
  })
});

export const layoutId = 'slate-minimal-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const SlateMinimalImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Inter)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-6 pt-4 z-30">
            <div className="flex items-center gap-3">
              {(data as any)?._logo_url__ && (
                <img src={(data as any)?._logo_url__} alt="logo" className="w-8 h-8 object-contain" />
              )}
              {(data as any)?.__companyName__ && (
                <>
                  <div 
                    className="w-px h-4" 
                    style={{ backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ color: 'var(--background-text, #1e293b)' }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        <div className="flex h-full">
          <div className="w-1/2 flex items-center p-12">
            <div 
              className="bg-white border rounded-lg p-8 w-full"
              style={{ 
                background: 'var(--card-color, rgba(255, 255, 255, 0.95))',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
                />
                <div 
                  className="h-px flex-1"
                  style={{ backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}
                />
              </div>

              <h1 
                className="text-3xl font-600 leading-tight mb-4"
                style={{ color: 'var(--background-text, #1e293b)' }}
              >
                {data.title}
              </h1>

              <div 
                className="w-12 h-px mb-4"
                style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
              />

              <p 
                className="text-base leading-relaxed font-400"
                style={{ color: 'var(--background-text, #1e293b)' }}
              >
                {data.description}
              </p>
            </div>
          </div>

          <div className="w-1/2 p-6 flex items-center justify-center">
            <div className="w-full h-full max-w-lg max-h-96">
              <img
                src={data.image?.__image_url__}
                alt={data.image?.__image_prompt__}
                className="w-full h-full object-cover rounded-lg"
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>

        <div 
          className="absolute top-8 right-16 w-32 h-px opacity-30"
          style={{ backgroundColor: 'var(--stroke, rgba(59, 130, 246, 0.15))' }}
        />
        
        <div 
          className="absolute bottom-12 left-8 w-1 h-16 opacity-20"
          style={{ backgroundColor: 'var(--primary-color, #3b82f6)' }}
        />
      </div>
    </>
  );
};

export default SlateMinimalImageTextSlide;