import React from 'react';
import * as z from 'zod';

export const layoutId = "nature-forest-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide";

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Let's grow something amazing together"),
  contactInfo: z.string().min(10).max(100).default("contact@yourcompany.com | (555) 123-4567")
});

const NatureForestClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const {
    title = "Thank You",
    subtitle = "Let's grow something amazing together",
    contactInfo = "contact@yourcompany.com | (555) 123-4567"
  } = data;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Bitter)" }}>
        
        {/* Company Header */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-12" style={{ background: "rgba(26, 46, 16, 0.6)", borderBottom: "1px solid rgba(124, 179, 66, 0.2)" }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full" style={{ background: "var(--primary-color, #7cb342)" }}></div>
            <span className="text-xl font-bold" style={{ color: "var(--background-text, #e8efe0)" }}>Your Company</span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="absolute inset-0 pt-20 flex flex-col items-center justify-center px-12">
          
          {/* Central Thank You Card */}
          <div className="max-w-3xl w-full text-center p-12 rounded-3xl" style={{ 
            background: "rgba(255, 255, 255, 0.08)", 
            border: "1px solid rgba(124, 179, 66, 0.15)",
            backdropFilter: "blur(10px)"
          }}>
            
            {/* Main Title */}
            <h1 className="text-7xl font-bold mb-8" style={{ 
              color: "var(--primary-color, #7cb342)",
              fontFamily: "var(--heading-font-family, Bitter)"
            }}>
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl mb-12 leading-relaxed" style={{ 
              color: "var(--background-text, #e8efe0)",
              fontFamily: "var(--body-font-family, Source Sans 3)",
              fontWeight: "400"
            }}>
              {subtitle}
            </p>

            {/* Contact Information */}
            <div className="p-6 rounded-2xl inline-block" style={{
              background: "var(--card-color, rgba(124, 179, 66, 0.1))",
              border: "1px solid rgba(124, 179, 66, 0.2)"
            }}>
              <p className="text-lg font-medium" style={{ 
                color: "var(--background-text, #e8efe0)",
                fontFamily: "var(--body-font-family, Source Sans 3)"
              }}>
                {contactInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 left-16 w-32 h-32 rounded-full opacity-20" style={{
          background: "radial-gradient(circle, var(--primary-color, #7cb342) 0%, transparent 70%)",
          filter: "blur(20px)"
        }}></div>
        
        <div className="absolute bottom-24 right-20 w-48 h-48 rounded-full opacity-15" style={{
          background: "radial-gradient(circle, var(--primary-color, #7cb342) 0%, transparent 70%)",
          filter: "blur(25px)"
        }}></div>

        {/* Organic Leaf Shapes */}
        <div className="absolute top-1/4 right-12 opacity-10">
          <div className="w-16 h-24 rounded-full transform rotate-45" style={{
            background: "var(--primary-color, #7cb342)",
            borderRadius: "50% 0 50% 50%"
          }}></div>
        </div>

        <div className="absolute bottom-1/3 left-16 opacity-10">
          <div className="w-20 h-28 rounded-full transform -rotate-12" style={{
            background: "var(--primary-color, #7cb342)",
            borderRadius: "50% 0 50% 50%"
          }}></div>
        </div>

      </div>
    </>
  );
};

export default NatureForestClosingSlide;