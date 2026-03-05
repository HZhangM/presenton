import React from 'react';
import * as z from 'zod';

export const layoutId = "comic-book-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide.";

export const Schema = z.object({
  title: z.string().min(5).max(40).default("THANK YOU!"),
  subtitle: z.string().min(10).max(100).default("Ready to unleash your superpowers? Let's connect and make amazing things happen together!"),
  contactInfo: z.string().min(5).max(100).default("contact@yourcompany.com • (555) 123-4567 • www.yourcompany.com")
});

const ComicBookClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bangers)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-6 left-6 z-30">
          <div className="px-4 py-2 bg-white border-3 border-black shadow-[4px_4px_0_#1a1a1a] rounded" style={{ background: "var(--card-color, rgba(255, 255, 255, 0.9))", borderColor: "var(--stroke, rgba(0, 0, 0, 0.8))" }}>
            <div className="text-lg font-bold" style={{ color: "var(--primary-color, #e53935)", fontFamily: "var(--heading-font-family, Bangers)" }}>
              YOUR COMPANY
            </div>
          </div>
        </div>

        {/* Decorative POW badge */}
        <div className="absolute top-12 right-12 z-10 opacity-20">
          <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-black transform rotate-12" style={{ background: "var(--primary-color, #e53935)", borderColor: "var(--stroke, rgba(0, 0, 0, 0.8))" }}>
            <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--heading-font-family, Bangers)" }}>POW!</span>
          </div>
        </div>

        {/* Decorative halftone dots */}
        <div className="absolute bottom-16 left-16 z-10 opacity-15">
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: "var(--primary-color, #e53935)" }}></div>
            ))}
          </div>
        </div>

        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full px-16 text-center">
          
          {/* Main title */}
          <div className="mb-6">
            <h1 className="text-6xl font-bold transform -rotate-1" 
                style={{ 
                  color: "var(--primary-color, #e53935)", 
                  textShadow: "4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))",
                  fontFamily: "var(--heading-font-family, Bangers)"
                }}>
              {title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8 max-w-3xl">
            <div className="bg-white p-6 border-3 border-black shadow-[4px_4px_0_#1a1a1a] rounded transform rotate-1" 
                 style={{ 
                   background: "var(--card-color, rgba(255, 255, 255, 0.9))", 
                   borderColor: "var(--stroke, rgba(0, 0, 0, 0.8))"
                 }}>
              <p className="text-xl font-bold leading-relaxed" 
                 style={{ 
                   color: "var(--background-text, #1a1a1a)",
                   fontFamily: "var(--body-font-family, 'Comic Neue')"
                 }}>
                {subtitle}
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-4">
            <div className="bg-white px-8 py-4 border-3 border-black shadow-[4px_4px_0_#1a1a1a] rounded transform -rotate-1" 
                 style={{ 
                   background: "var(--card-color, rgba(255, 255, 255, 0.9))", 
                   borderColor: "var(--stroke, rgba(0, 0, 0, 0.8))"
                 }}>
              <p className="text-base font-bold" 
                 style={{ 
                   color: "var(--background-text, #1a1a1a)",
                   fontFamily: "var(--body-font-family, 'Comic Neue')"
                 }}>
                {contactInfo}
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default ComicBookClosingSlide;