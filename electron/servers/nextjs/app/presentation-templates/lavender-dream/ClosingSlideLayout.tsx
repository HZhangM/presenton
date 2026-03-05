import React from 'react';
import * as z from 'zod';

export const layoutId = "lavender-dream-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide with elegant typography and gentle styling";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's create something beautiful together"),
  contactInfo: z.string().min(1).max(100).default("hello@company.com • +1 (555) 123-4567")
});

const LavenderDreamClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Cormorant Garamond)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold" style={{ color: "var(--primary-color, #9b59b6)" }}>
              Your Company
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-5" style={{ background: "linear-gradient(135deg, var(--primary-color, #9b59b6), rgba(155, 89, 182, 0.3))" }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-10" style={{ background: "var(--primary-color, #9b59b6)" }}></div>

        {/* Main content - centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-20">
          <div className="text-center max-w-4xl">
            
            {/* Title */}
            <h1 className="text-6xl font-bold mb-6" style={{ color: "var(--background-text, #3a2050)", fontFamily: "var(--heading-font-family, Cormorant Garamond)" }}>
              {title}
            </h1>

            {/* Decorative divider */}
            <div className="flex justify-center mb-6">
              <div 
                className="h-px w-32" 
                style={{ background: "var(--stroke, rgba(155, 89, 182, 0.15))" }}
              ></div>
            </div>

            {/* Subtitle */}
            <p className="text-2xl mb-8" style={{ color: "var(--background-text, #3a2050)", fontFamily: "var(--body-font-family, Mulish)" }}>
              {subtitle}
            </p>

            {/* Contact info card */}
            <div 
              className="inline-block px-8 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
              }}
            >
              <p className="text-base font-medium" style={{ color: "var(--background-text, #3a2050)", fontFamily: "var(--body-font-family, Mulish)" }}>
                {contactInfo}
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default LavenderDreamClosingSlide;