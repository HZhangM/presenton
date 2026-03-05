import React from 'react';
import * as z from 'zod';

export const layoutId = "electric-purple-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide.";

export const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's connect and build something amazing together"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | +1 (555) 123-4567")
});

const ElectricPurpleClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const resolvedData = Schema.parse(data);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Urbanist)" 
        }}
      >
        {/* Decorative Elements */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 opacity-10"
          style={{
            background: `conic-gradient(from 0deg, var(--primary-color, #bb86fc), transparent, var(--primary-color, #bb86fc))`,
            borderRadius: '16px',
            filter: 'blur(1px)',
            transform: 'rotate(45deg)'
          }}
        />
        <div 
          className="absolute bottom-24 right-24 w-24 h-24 opacity-15"
          style={{
            border: `2px solid var(--primary-color, #bb86fc)`,
            borderRadius: '50%',
            boxShadow: `0 0 20px rgba(187, 134, 252, 0.3)`
          }}
        />

        {/* Header with Company Logo/Name */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ 
              background: `var(--primary-color, #bb86fc)`,
              boxShadow: '0 0 15px rgba(187, 134, 252, 0.4)'
            }}
          >
            <span 
              className="text-sm font-bold"
              style={{ color: 'var(--primary-text, #1a0030)' }}
            >
              C
            </span>
          </div>
          <span 
            className="text-lg font-semibold"
            style={{ color: 'var(--background-text, #e8d0ff)' }}
          >
            Company
          </span>
        </div>

        {/* Main Content - Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
          <h1 
            className="text-6xl font-bold mb-6"
            style={{ 
              color: 'var(--background-text, #e8d0ff)',
              textShadow: `0 0 30px rgba(187, 134, 252, 0.5)`
            }}
          >
            {resolvedData.title}
          </h1>
          
          <p 
            className="text-2xl mb-8 max-w-3xl leading-relaxed"
            style={{ color: 'var(--background-text, #e8d0ff)', opacity: 0.9 }}
          >
            {resolvedData.subtitle}
          </p>

          {/* Gradient Divider */}
          <div 
            className="w-64 h-px mb-8"
            style={{
              background: `linear-gradient(to right, transparent, var(--primary-color, #bb86fc), transparent)`
            }}
          />

          <div 
            className="px-8 py-4 rounded-2xl"
            style={{
              border: `1px solid rgba(187, 134, 252, 0.2)`,
              background: 'rgba(187, 134, 252, 0.08)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 0 25px rgba(187, 134, 252, 0.2)'
            }}
          >
            <p 
              className="text-lg font-medium"
              style={{ color: 'var(--primary-color, #bb86fc)' }}
            >
              {resolvedData.contactInfo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricPurpleClosingSlide;