import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(1).max(40).default('Discover Marine Life'),
  description: z.string().min(10).max(200).default('Explore the vibrant underwater world of coral reefs, home to countless species of colorful fish, sea turtles, and diverse marine ecosystems.'),
  image: z.object({
    __image_url__: z.string().default('https://placehold.co/640x360'),
    __image_prompt__: z.string().min(10).max(50).default('Vibrant coral reef underwater scene with tropical fish')
  }).default({
    __image_url__: 'https://placehold.co/640x360',
    __image_prompt__: 'Vibrant coral reef underwater scene with tropical fish'
  })
});

export const layoutId = 'coral-reef-image-text-slide';
export const layoutName = 'Image with Text';
export const layoutDescription = 'A split layout with an image on one side and text content on the other.';

const CoralReefImageTextSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Comfortaa)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && (
                  <img src={(data as any)?._logo_url__} alt="logo" className="w-[60px] object-contain" />
                )}
                <span
                  style={{ backgroundColor: 'var(--stroke, rgba(255,107,107,0.2))' }}
                  className="w-[2px] h-4"
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-semibold" 
                    style={{ color: 'var(--background-text, #2d3436)' }}
                  >
                    {(data as any)?.__companyName__}
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
          </div>

          {/* Text Side */}
          <div className="w-1/2 flex items-center justify-center p-10">
            <div 
              className="p-8 rounded-3xl w-full max-w-md"
              style={{
                background: "var(--card-color, rgba(255, 255, 255, 0.7))",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)"
              }}
            >
              <h2 
                className="text-4xl font-bold mb-4 leading-tight"
                style={{ 
                  color: "var(--primary-color, #ff6b6b)",
                  fontFamily: "var(--heading-font-family, Comfortaa)"
                }}
              >
                {data.title}
              </h2>
              
              {/* Wavy Divider */}
              <div className="mb-6 h-1 w-16 rounded-full" style={{ background: "var(--primary-color, #ff6b6b)" }}></div>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: "var(--background-text, #2d3436)",
                  fontFamily: "var(--body-font-family, Rubik)"
                }}
              >
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Blob Elements */}
        <div 
          className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 pointer-events-none"
          style={{ background: "var(--primary-color, #ff6b6b)" }}
        ></div>
        <div 
          className="absolute bottom-8 left-8 w-24 h-12 rounded-full opacity-15 pointer-events-none"
          style={{ background: "#00cec9" }}
        ></div>
      </div>
    </>
  );
};

export default CoralReefImageTextSlide;