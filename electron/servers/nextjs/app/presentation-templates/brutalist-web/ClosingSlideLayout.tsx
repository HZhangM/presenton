import React from 'react';
import * as z from 'zod';

export const layoutId = "brutalist-web-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("THANK YOU"),
  subtitle: z.string().min(1).max(100).default("Questions? Let's build something brutal together."),
  contactInfo: z.string().min(1).max(100).default("brutal@company.com | @brutalweb | brutalist.dev")
});

const BrutalistWebClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Anton)"
        }}
      >
        {/* Company Header */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <div 
            className="px-6 py-3"
            style={{ 
              background: "var(--primary-color, #ff4500)",
              border: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))",
              borderRadius: "0"
            }}
          >
            <div className="text-sm font-bold" style={{ color: "var(--primary-text, #ffffff)", fontFamily: "var(--body-font-family, 'IBM Plex Mono')" }}>
              PRESENTON
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute top-32 right-8 w-16 h-16 opacity-20 z-10"
          style={{ 
            background: "var(--primary-color, #ff4500)",
            border: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))",
            transform: "rotate(45deg)"
          }}
        />
        
        <div 
          className="absolute bottom-32 left-8 w-4 opacity-30 z-10"
          style={{ 
            height: "80px",
            background: "var(--stroke, rgba(0, 0, 0, 0.8))"
          }}
        />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-full px-8">
          {/* Title */}
          <h1 
            className="text-6xl font-black text-center mb-6 leading-none tracking-tight"
            style={{ 
              color: "var(--background-text, #111111)",
              fontFamily: "var(--heading-font-family, Anton)",
              textShadow: "4px 4px 0 var(--stroke, rgba(0, 0, 0, 0.8))"
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <div 
            className="text-xl font-medium text-center mb-8 max-w-2xl leading-relaxed"
            style={{ 
              color: "var(--background-text, #111111)",
              fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
            }}
          >
            {subtitle}
          </div>

          {/* Contact Info Card */}
          <div 
            className="px-8 py-6 text-center"
            style={{
              border: "4px solid var(--stroke, rgba(0, 0, 0, 0.8))",
              background: "var(--card-color, rgba(255, 255, 255, 0.95))",
              borderRadius: "0",
              boxShadow: "6px 6px 0 var(--stroke, rgba(0, 0, 0, 0.8))"
            }}
          >
            <div 
              className="text-base font-bold tracking-wide"
              style={{ 
                color: "var(--background-text, #111111)",
                fontFamily: "var(--body-font-family, 'IBM Plex Mono')"
              }}
            >
              {contactInfo}
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-2 z-30"
          style={{ background: "var(--primary-color, #ff4500)" }}
        />
      </div>
    </>
  );
};

export default BrutalistWebClosingSlide;