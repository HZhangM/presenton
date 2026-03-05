import React from 'react';
import * as z from 'zod';

export const layoutId = "botanical-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide with botanical elegance";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's cultivate success together"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | (555) 123-4567")
});

const BotanicalClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bodoni Moda)" }}>
        
        {/* Company Header */}
        <div className="absolute top-8 left-8 z-30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full" style={{ background: "var(--primary-color, #558b2f)" }}></div>
            <span className="text-xl font-bold" style={{ color: "var(--background-text, #2d3a2e)" }}>Company</span>
          </div>
        </div>

        {/* Decorative Vine Element */}
        <div className="absolute top-0 right-0 w-80 h-80 opacity-10 z-10">
          <svg viewBox="0 0 200 200" className="w-full h-full" style={{ fill: "var(--primary-color, #558b2f)" }}>
            <path d="M20,180 Q60,140 100,160 Q140,180 180,140 Q160,100 140,60 Q120,20 80,40 Q40,60 20,100" 
                  stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
            <circle cx="100" cy="160" r="3" opacity="0.5"/>
            <circle cx="140" cy="60" r="2" opacity="0.4"/>
            <circle cx="80" cy="40" r="2" opacity="0.4"/>
          </svg>
        </div>

        {/* Decorative Leaf Pattern */}
        <div className="absolute bottom-0 left-0 w-60 h-60 opacity-8 z-10">
          <svg viewBox="0 0 150 150" className="w-full h-full" style={{ fill: "var(--primary-color, #558b2f)" }}>
            <path d="M30,120 Q50,100 70,120 Q60,110 50,100 Q40,90 30,100 Z" opacity="0.2"/>
            <path d="M60,130 Q80,110 100,130 Q90,120 80,110 Q70,100 60,110 Z" opacity="0.15"/>
            <path d="M90,140 Q110,120 130,140 Q120,130 110,120 Q100,110 90,120 Z" opacity="0.1"/>
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center h-full px-16">
          
          {/* Main Card */}
          <div className="text-center max-w-4xl mx-auto p-12" 
               style={{ 
                 background: "var(--card-color, rgba(255, 255, 255, 0.75))",
                 border: "1px solid rgba(85,139,47,0.1)",
                 borderRadius: "12px"
               }}>
            
            {/* Title */}
            <h1 className="text-6xl font-bold mb-8" 
                style={{ 
                  color: "var(--primary-color, #558b2f)",
                  fontFamily: "var(--heading-font-family, Bodoni Moda)"
                }}>
              {title}
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px flex-1" style={{ background: "var(--stroke, rgba(85, 139, 47, 0.2))" }}></div>
              <div className="mx-4">
                <svg width="20" height="12" viewBox="0 0 20 12" style={{ fill: "var(--primary-color, #558b2f)" }}>
                  <path d="M10,2 Q6,6 2,4 Q6,8 10,6 Q14,8 18,4 Q14,6 10,2 Z" opacity="0.6"/>
                </svg>
              </div>
              <div className="h-px flex-1" style={{ background: "var(--stroke, rgba(85, 139, 47, 0.2))" }}></div>
            </div>

            {/* Subtitle */}
            <p className="text-2xl mb-12" 
               style={{ 
                 color: "var(--background-text, #2d3a2e)",
                 fontFamily: "var(--body-font-family, Lato)"
               }}>
              {subtitle}
            </p>

            {/* Contact Info */}
            <div className="inline-block px-8 py-4 rounded-lg" 
                 style={{ 
                   background: "var(--primary-color, #558b2f)",
                   border: "1px solid rgba(85,139,47,0.15)"
                 }}>
              <p className="text-lg font-medium" 
                 style={{ 
                   color: "var(--primary-text, #ffffff)",
                   fontFamily: "var(--body-font-family, Lato)"
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

export default BotanicalClosingSlide;