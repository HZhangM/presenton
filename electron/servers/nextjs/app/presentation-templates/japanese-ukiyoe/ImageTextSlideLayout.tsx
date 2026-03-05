import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Traditional Wisdom'),
  description: z.string().min(1).max(200).default('Discover the timeless principles that have guided generations of artisans and craftspeople in their pursuit of excellence and mastery.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Traditional Japanese woodblock print landscape')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Traditional Japanese woodblock print landscape'
  })
});

export const layoutId = 'japanese-ukiyoe-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other, featuring traditional Japanese ukiyo-e aesthetics.';

const JapaneseUkiyoeImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Shippori Mincho)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4 z-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && (
                  <img src={(data as any)?._logo_url__} alt="logo" className="w-[50px] object-contain" />
                )}
                <div 
                  className="w-[2px] h-4"
                  style={{ backgroundColor: 'var(--stroke, rgba(30,30,80,0.15))' }}
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-medium"
                    style={{ 
                      color: 'var(--background-text, #1a1a3a)',
                      fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)'
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div 
          className="absolute top-16 right-12 w-4 h-4 rounded-full opacity-80"
          style={{ backgroundColor: 'var(--primary-color, #c23b22)' }}
        />
        <div 
          className="absolute bottom-20 left-12 w-24 h-px opacity-60"
          style={{ backgroundColor: 'var(--background-text, #1a1a3a)' }}
        />

        <div className="flex w-full h-full">
          {/* Image Side */}
          <div className="w-1/2 relative">
            <img
              src={data.image?.__image_url__}
              alt={data.image?.__image_prompt__}
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0 border-r"
              style={{ borderColor: 'var(--stroke, rgba(30,30,80,0.15))' }}
            />
          </div>

          {/* Text Side */}
          <div className="w-1/2 flex flex-col justify-center p-12">
            <div 
              className="p-8 rounded"
              style={{
                background: 'var(--card-color, rgba(255,255,250,0.7))',
                border: '1px solid var(--stroke, rgba(30,30,80,0.08))'
              }}
            >
              <h1 
                className="text-4xl font-semibold mb-6 leading-tight"
                style={{ color: 'var(--background-text, #1a1a3a)' }}
              >
                {data.title}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <div 
                  className="flex-1 h-px"
                  style={{ backgroundColor: 'var(--background-text, #1a1a3a)', opacity: 0.3 }}
                />
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--background-text, #1a1a3a)', opacity: 0.4 }}
                />
              </div>

              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: 'var(--background-text, #1a1a3a)',
                  fontFamily: 'var(--body-font-family, Zen Kaku Gothic New)',
                  opacity: 0.9
                }}
              >
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JapaneseUkiyoeImageTextSlide;