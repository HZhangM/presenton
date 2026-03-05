import React from 'react';
import * as z from 'zod';

export const layoutId = "desert-dune-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide with warm desert styling";

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Let's connect and explore new opportunities together"),
  contactInfo: z.string().min(5).max(100).default("contact@company.com • +1 (555) 123-4567 • linkedin.com/company/yourcompany")
});

const DesertDuneClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <div className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" style={{ background: "var(--background-color, transparent)", fontFamily: "var(--heading-font-family, Tenor Sans)" }}>
      <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      {/* Decorative arch element */}
      <div className="absolute top-8 right-12 w-16 h-8 border-2 rounded-t-full opacity-20" style={{ borderColor: "var(--primary-color, #b8860b)", borderBottomColor: "transparent" }}></div>
      
      {/* Decorative golden lines */}
      <div className="absolute bottom-12 left-12 w-12 h-px opacity-30" style={{ backgroundColor: "var(--primary-color, #b8860b)" }}></div>
      <div className="absolute bottom-16 left-16 w-8 h-px opacity-20" style={{ backgroundColor: "var(--primary-color, #b8860b)" }}></div>

      {/* Company header */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border" style={{ borderColor: "var(--primary-color, #b8860b)" }}></div>
          <span className="text-sm font-medium" style={{ color: "var(--background-text, #3a2e1e)" }}>Your Company</span>
        </div>
      </div>

      {/* Main content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-12 py-16">
        
        {/* Main card */}
        <div className="text-center max-w-4xl" style={{ 
          background: "rgba(255, 255, 255, 0.55)", 
          backdropFilter: "blur(10px)", 
          border: "1px solid rgba(255, 255, 255, 0.4)", 
          borderRadius: "12px"
        }} className="p-12">
          
          {/* Title */}
          <h1 className="text-6xl font-light mb-6" style={{ 
            color: "var(--background-text, #3a2e1e)",
            fontFamily: "var(--heading-font-family, Tenor Sans)"
          }}>
            {title}
          </h1>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px" style={{ backgroundColor: "var(--primary-color, #b8860b)" }}></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl font-light mb-8" style={{ 
            color: "var(--background-text, #3a2e1e)",
            fontFamily: "var(--body-font-family, Work Sans)",
            fontWeight: "300"
          }}>
            {subtitle}
          </p>

          {/* Contact info */}
          <div className="text-base" style={{ 
            color: "var(--primary-color, #b8860b)",
            fontFamily: "var(--body-font-family, Work Sans)",
            fontWeight: "400"
          }}>
            {contactInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesertDuneClosingSlide;