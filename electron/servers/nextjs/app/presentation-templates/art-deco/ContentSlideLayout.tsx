import React from 'react';
import * as z from 'zod';

export const Schema = z.object({
  title: z.string().min(5).max(40).default('Strategic Market Analysis'),
  description: z.string().min(10).max(200).default('Comprehensive overview of market trends, competitive landscape, and strategic opportunities for sustainable growth in the luxury segment.'),
  keyPoints: z.array(z.object({
    title: z.string().min(5).max(60).default('Market Expansion Opportunities'),
    description: z.string().min(10).max(100).default('Identified three high-potential market segments with projected 25% growth potential.')
  })).min(2).max(4).default([
    {
      title: 'Market Expansion Opportunities',
      description: 'Identified three high-potential market segments with projected 25% growth potential.'
    },
    {
      title: 'Competitive Positioning Strategy',
      description: 'Developed differentiation framework leveraging premium brand positioning and exclusive partnerships.'
    },
    {
      title: 'Digital Transformation Initiative',
      description: 'Implementation roadmap for AI-driven customer experience enhancement across all touchpoints.'
    }
  ])
});

export const layoutId = 'art-deco-content-slide';
export const layoutName = 'Content Slide';
export const layoutDescription = 'A general content slide with title, body text, and 2-4 key points in Art Deco style.';

const ArtDecoContentSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, description, keyPoints } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden p-8"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Poiret One)" 
        }}
      >
        {((data as any)?.__companyName__ || (data as any)?._logo_url__) && (
          <div className="absolute top-0 left-0 right-0 px-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {(data as any)?._logo_url__ && <img src={(data as any)?._logo_url__} alt="logo" className="w-10 h-10 object-contain flex-shrink-0" />}
                <div 
                  style={{ backgroundColor: 'var(--stroke, rgba(212,175,55,0.3))' }}
                  className="w-px h-6 flex-shrink-0"
                />
                {(data as any)?.__companyName__ && (
                  <span 
                    className="text-sm font-medium tracking-wide" 
                    style={{ 
                      color: 'var(--background-text, #e8d8b8)',
                      fontFamily: "var(--body-font-family, Josefin Sans)"
                    }}
                  >
                    {(data as any)?.__companyName__}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Art Deco Decorative Elements */}
        <div className="absolute top-8 right-8 opacity-20">
          <div 
            className="w-16 h-16"
            style={{ 
              background: `conic-gradient(from 0deg, var(--primary-color, #d4af37) 0deg, transparent 60deg, var(--primary-color, #d4af37) 120deg, transparent 180deg, var(--primary-color, #d4af37) 240deg, transparent 300deg)`,
              clipPath: 'polygon(50% 0%, 85% 25%, 85% 75%, 50% 100%, 15% 75%, 15% 25%)'
            }}
          />
        </div>

        <div className="absolute bottom-8 left-8 opacity-15">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-1 bg-current transform rotate-45"
                style={{ 
                  height: `${(i + 1) * 8}px`,
                  color: 'var(--primary-color, #d4af37)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Header Section */}
        <div className="pt-16 pb-6 max-h-[180px]">
          {/* Angular Corner Brackets */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
            
            <h1 
              className="text-4xl font-light mb-4 tracking-widest"
              style={{ 
                color: 'var(--background-text, #e8d8b8)',
                letterSpacing: '0.15em'
              }}
            >
              {title}
            </h1>
            
            {/* Art Deco Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="flex-1 h-px" style={{ background: 'var(--primary-color, #d4af37)' }} />
              <div className="mx-4 w-3 h-3 border-2 transform rotate-45" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
              <div className="h-px" style={{ background: 'var(--primary-color, #d4af37)', width: '2px' }} />
              <div className="mx-1 w-3 h-3 border-2 transform rotate-45" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
              <div className="h-px" style={{ background: 'var(--primary-color, #d4af37)', width: '2px' }} />
              <div className="mx-4 w-3 h-3 border-2 transform rotate-45" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
              <div className="flex-1 h-px" style={{ background: 'var(--primary-color, #d4af37)' }} />
            </div>
            
            <p 
              className="text-lg font-light leading-relaxed"
              style={{ 
                color: 'var(--background-text, #e8d8b8)',
                fontFamily: "var(--body-font-family, Josefin Sans)"
              }}
            >
              {description}
            </p>

            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2" style={{ borderColor: 'var(--primary-color, #d4af37)' }} />
          </div>
        </div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-2 gap-4 h-[420px]">
          {keyPoints?.map((point, index) => (
            <div 
              key={index}
              className="relative p-4 h-fit"
              style={{ 
                border: '1px solid rgba(212,175,55,0.25)', 
                background: 'rgba(212,175,55,0.04)',
                borderRadius: '0'
              }}
            >
              {/* Angular Corner Brackets */}
              <div className="absolute top-1 left-1 w-3 h-3 border-l border-t" style={{ borderColor: 'var(--stroke, rgba(212,175,55,0.3))' }} />
              <div className="absolute top-1 right-1 w-3 h-3 border-r border-t" style={{ borderColor: 'var(--stroke, rgba(212,175,55,0.3))' }} />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b" style={{ borderColor: 'var(--stroke, rgba(212,175,55,0.3))' }} />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b" style={{ borderColor: 'var(--stroke, rgba(212,175,55,0.3))' }} />
              
              <div className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg font-light tracking-wider mt-1"
                  style={{ 
                    color: 'var(--primary-text, #0a2a2a)',
                    background: 'var(--primary-color, #d4af37)'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg font-medium mb-2 tracking-wide leading-tight"
                    style={{ 
                      color: 'var(--primary-color, #d4af37)',
                      fontFamily: "var(--heading-font-family, Poiret One)"
                    }}
                  >
                    {point.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      color: 'var(--background-text, #e8d8b8)',
                      fontFamily: "var(--body-font-family, Josefin Sans)"
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtDecoContentSlide;