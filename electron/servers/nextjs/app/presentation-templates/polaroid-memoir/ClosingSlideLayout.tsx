import React from 'react';
import * as z from 'zod';

export const layoutId = "polaroid-memoir-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You!"),
  subtitle: z.string().min(1).max(100).default("Let's stay connected and continue this journey together"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com • @company • company.com")
});

const PolaroidMemoirClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden flex items-center justify-center"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Caveat)" 
        }}
      >
        {/* Header with company logo/name */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ 
              background: "var(--primary-color, #d4764e)", 
              color: "var(--primary-text, #ffffff)" 
            }}
          >
            C
          </div>
          <span 
            className="text-lg font-bold"
            style={{ color: "var(--background-text, #3a3020)" }}
          >
            Company
          </span>
        </div>

        {/* Main content centered */}
        <div className="text-center px-8 max-w-4xl">
          {/* Main title card with polaroid styling */}
          <div 
            className="inline-block mb-8 transform rotate-1"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: "2px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
              padding: "24px 24px 48px 24px"
            }}
          >
            <h1 
              className="text-6xl font-bold mb-0"
              style={{ 
                color: "var(--primary-color, #d4764e)",
                fontFamily: "var(--heading-font-family, Caveat)"
              }}
            >
              {title}
            </h1>
            
            {/* Tape decoration on card corner */}
            <div 
              className="absolute -top-2 -right-2 w-12 h-6 transform rotate-45"
              style={{ 
                background: "var(--stroke, rgba(212, 118, 78, 0.2))",
                borderRadius: "1px"
              }}
            ></div>
          </div>

          {/* Subtitle */}
          <p 
            className="text-2xl mb-6 max-w-2xl mx-auto"
            style={{ 
              color: "var(--background-text, #3a3020)",
              fontFamily: "var(--body-font-family, Lato)"
            }}
          >
            {subtitle}
          </p>

          {/* Contact info card */}
          <div 
            className="inline-block transform -rotate-1"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: "2px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
              padding: "16px 20px 32px 20px"
            }}
          >
            <p 
              className="text-lg font-medium"
              style={{ 
                color: "var(--background-text, #3a3020)",
                fontFamily: "var(--body-font-family, Lato)"
              }}
            >
              {contactInfo}
            </p>
            
            {/* Small pin decoration */}
            <div 
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
              style={{ 
                background: "var(--primary-color, #d4764e)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)"
              }}
            ></div>
          </div>
        </div>

        {/* Decorative washi tape strip */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-4 opacity-30 transform rotate-1"
          style={{ 
            background: "repeating-linear-gradient(45deg, var(--stroke, rgba(212, 118, 78, 0.2)), var(--stroke, rgba(212, 118, 78, 0.2)) 10px, transparent 10px, transparent 20px)"
          }}
        ></div>

        {/* Corner tape decoration */}
        <div 
          className="absolute top-16 right-8 w-16 h-8 opacity-40 transform rotate-12"
          style={{ 
            background: "var(--stroke, rgba(212, 118, 78, 0.2))",
            borderRadius: "1px"
          }}
        ></div>
      </div>
    </>
  );
};

export default PolaroidMemoirClosingSlide;