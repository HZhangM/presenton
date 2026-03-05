import React from 'react';
import * as z from "zod";

export const layoutId = "mountain-mist-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Questions & Discussion"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | www.company.com")
});

const MountainMistClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Philosopher)" }}>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1/3 opacity-10 z-0" style={{ background: "linear-gradient(180deg, var(--primary-color, #546e7a) 0%, transparent 100%)" }}></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/4 opacity-5 z-0" style={{ background: "radial-gradient(circle, var(--primary-color, #546e7a) 0%, transparent 70%)" }}></div>
        
        {/* Company Header */}
        <div className="absolute top-6 left-8 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full opacity-60" style={{ background: "var(--primary-color, #546e7a)" }}></div>
            <span className="text-sm font-medium opacity-70" style={{ color: "var(--background-text, #1a2a3a)", fontFamily: "var(--body-font-family, Karla)" }}>
              Company
            </span>
          </div>
        </div>

        {/* Main Content - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-16">
          <div className="text-center max-w-4xl">
            
            {/* Title */}
            <h1 className="text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--background-text, #1a2a3a)" }}>
              {title}
            </h1>
            
            {/* Decorative Divider */}
            <div className="w-24 h-px mx-auto mb-6 opacity-40" style={{ background: "var(--stroke, rgba(84, 110, 122, 0.15))" }}></div>
            
            {/* Subtitle */}
            <p className="text-2xl mb-8 font-medium opacity-80" style={{ color: "var(--primary-color, #546e7a)", fontFamily: "var(--body-font-family, Karla)" }}>
              {subtitle}
            </p>
            
            {/* Contact Info Card */}
            <div className="inline-block px-8 py-4 rounded-12" style={{
              background: "var(--card-color, rgba(255, 255, 255, 0.55))",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "12px"
            }}>
              <p className="text-base font-medium" style={{ color: "var(--background-text, #1a2a3a)", fontFamily: "var(--body-font-family, Karla)" }}>
                {contactInfo}
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Fade Line */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-px opacity-20" style={{ background: "linear-gradient(90deg, transparent 0%, var(--stroke, rgba(84, 110, 122, 0.15)) 50%, transparent 100%)" }}></div>
        
      </div>
    </>
  );
};

export default MountainMistClosingSlide;