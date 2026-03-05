import React from 'react';
import * as z from 'zod';

export const layoutId = "chalk-pastel-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You!"),
  subtitle: z.string().min(1).max(100).default("Questions? Let's connect and continue the conversation."),
  contactInfo: z.string().min(1).max(100).default("hello@company.com • @company • company.com")
});

const ChalkPastelClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Kalam)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-6 left-8 flex items-center z-10">
          <div className="w-8 h-8 rounded-full" style={{ background: "var(--primary-color, #e57373)" }}></div>
          <span className="ml-3 text-lg font-bold" style={{ color: "var(--background-text, #3a3530)", fontFamily: "var(--heading-font-family, Kalam)" }}>Company</span>
        </div>

        {/* Decorative chalk dots */}
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full opacity-40" style={{ background: "#ffb74d" }}></div>
        <div className="absolute top-32 right-16 w-3 h-3 rounded-full opacity-40" style={{ background: "#64b5f6" }}></div>
        <div className="absolute bottom-24 left-16 w-5 h-5 rounded-full opacity-30" style={{ background: "#aed581" }}></div>

        {/* Decorative wavy underline element */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" width="400" height="8" viewBox="0 0 400 8">
          <path d="M0,4 Q100,1 200,4 T400,4" stroke="var(--primary-color, #e57373)" strokeWidth="2" fill="none" opacity="0.3"/>
        </svg>

        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full px-16 py-20">
          
          {/* Main card */}
          <div className="text-center p-12 rounded-2xl max-w-4xl w-full" style={{ 
            background: "var(--card-color, rgba(255, 255, 255, 0.5))", 
            border: "2px solid var(--stroke, rgba(229, 115, 115, 0.25))",
            borderRadius: "16px"
          }}>
            
            {/* Title with decorative underline */}
            <div className="relative mb-8">
              <h1 className="text-6xl font-bold mb-4" style={{ 
                color: "var(--primary-color, #e57373)", 
                fontFamily: "var(--heading-font-family, Kalam)" 
              }}>
                {title}
              </h1>
              
              {/* Hand-drawn wavy underline */}
              <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" width="200" height="12" viewBox="0 0 200 12">
                <path d="M10,8 Q50,4 100,8 T190,8" stroke="var(--primary-color, #e57373)" strokeWidth="3" fill="none" opacity="0.6"/>
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-2xl mb-10 leading-relaxed" style={{ 
              color: "var(--background-text, #3a3530)", 
              fontFamily: "var(--body-font-family, Nunito)",
              fontWeight: "600"
            }}>
              {subtitle}
            </p>

            {/* Contact info with soft background */}
            <div className="inline-block px-8 py-4 rounded-xl" style={{
              background: "rgba(229, 115, 115, 0.1)",
              border: "2px solid rgba(229, 115, 115, 0.15)"
            }}>
              <p className="text-xl" style={{ 
                color: "var(--background-text, #3a3530)", 
                fontFamily: "var(--body-font-family, Nunito)",
                fontWeight: "600"
              }}>
                {contactInfo}
              </p>
            </div>
          </div>

          {/* Decorative pastel accent blocks */}
          <div className="absolute top-1/4 left-8 w-16 h-16 rounded-2xl opacity-20 rotate-12" style={{ background: "#ffb74d" }}></div>
          <div className="absolute bottom-1/4 right-12 w-12 h-12 rounded-2xl opacity-20 -rotate-12" style={{ background: "#64b5f6" }}></div>
        </div>
      </div>
    </>
  );
};

export default ChalkPastelClosingSlide;