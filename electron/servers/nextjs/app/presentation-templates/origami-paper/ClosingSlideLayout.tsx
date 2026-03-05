import React from 'react';
import * as z from 'zod';

export const layoutId = "origami-paper-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide with origami paper aesthetic";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's continue the conversation and build something amazing together"),
  contactInfo: z.string().min(1).max(100).default("hello@company.com • +1 (555) 123-4567 • www.company.com")
});

const OrigamiPaperClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Outfit)" }}>
        
        {/* Header with company logo/name */}
        <div className="absolute top-6 left-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color,#e07a5f)] to-orange-400 rounded-sm flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 bg-white/90 transform rotate-45"></div>
          </div>
          <span style={{ color: "var(--background-text, #2d2d3d)" }} className="font-medium text-lg">Company</span>
        </div>

        {/* Decorative triangular fold elements */}
        <div className="absolute top-20 right-16 opacity-10">
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color,#e07a5f)] to-orange-300 transform rotate-12 clip-triangle"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-orange-200 to-orange-100 transform -rotate-6 clip-triangle"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-12 opacity-8">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-[var(--primary-color,#e07a5f)] transform -rotate-24 clip-triangle"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-orange-100 to-orange-200 transform rotate-12 clip-triangle"></div>
          </div>
        </div>

        {/* Main content container - centered */}
        <div className="flex flex-col items-center justify-center h-full px-8">
          
          {/* Main title */}
          <h1 
            className="text-6xl font-bold text-center mb-6 leading-tight"
            style={{ color: "var(--background-text, #2d2d3d)" }}
          >
            {title}
          </h1>

          {/* Decorative divider with triangle */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-[var(--stroke,rgba(224,122,95,0.15))]"></div>
            <div className="w-3 h-3 bg-[var(--primary-color,#e07a5f)] transform rotate-45"></div>
            <div className="w-16 h-0.5 bg-[var(--stroke,rgba(224,122,95,0.15))]"></div>
          </div>

          {/* Subtitle */}
          <p 
            className="text-2xl text-center mb-12 max-w-2xl leading-relaxed"
            style={{ 
              color: "var(--background-text, #2d2d3d)", 
              fontFamily: "var(--body-font-family, 'Nunito Sans')",
              opacity: 0.8
            }}
          >
            {subtitle}
          </p>

          {/* Contact card */}
          <div 
            className="px-8 py-6 rounded-sm border shadow-lg"
            style={{ 
              background: "var(--card-color, rgba(255,255,255,0.85))",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.04)"
            }}
          >
            <p 
              className="text-lg text-center font-medium"
              style={{ 
                color: "var(--background-text, #2d2d3d)",
                fontFamily: "var(--body-font-family, 'Nunito Sans')"
              }}
            >
              {contactInfo}
            </p>
          </div>

        </div>

        {/* Custom styles for triangle clipping */}
        <style jsx>{`
          .clip-triangle {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          }
        `}</style>

      </div>
    </>
  );
};

export default OrigamiPaperClosingSlide;