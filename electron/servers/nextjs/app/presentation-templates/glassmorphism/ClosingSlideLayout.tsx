import React from 'react';
import * as z from 'zod';

export const layoutId = "glassmorphism-closing-slide";
export const layoutName = "Closing Slide";
export const layoutDescription = "A thank-you or call-to-action ending slide with glassmorphism styling";

export const Schema = z.object({
  title: z.string().min(5).max(40).default("Thank You"),
  subtitle: z.string().min(10).max(100).default("Questions? Let's connect and continue the conversation"),
  contactInfo: z.string().min(10).max(100).default("john.doe@company.com | linkedin.com/in/johndoe")
});

const GlassmorphismClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const { title, subtitle, contactInfo } = { ...Schema.parse({}), ...data };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden" 
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Plus Jakarta Sans)" 
        }}
      >
        {/* Header with Company Logo/Name */}
        <div className="absolute top-8 left-8 z-10">
          <div 
            className="px-6 py-3 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div 
              className="text-lg font-semibold"
              style={{ color: "var(--primary-text, #ffffff)" }}
            >
              COMPANY
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.15)"
          }}
        />
        <div 
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        />

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center h-full px-16">
          {/* Main Card */}
          <div 
            className="text-center px-16 py-12 rounded-3xl max-w-4xl"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
            }}
          >
            {/* Title */}
            <h1 
              className="text-8xl font-bold mb-8"
              style={{ 
                color: "var(--primary-text, #ffffff)",
                fontFamily: "var(--heading-font-family, Plus Jakarta Sans)"
              }}
            >
              {title}
            </h1>

            {/* Decorative Divider */}
            <div 
              className="w-32 h-px mx-auto mb-8"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            />

            {/* Subtitle */}
            <p 
              className="text-2xl font-medium mb-12 leading-relaxed"
              style={{ 
                color: "var(--primary-text, #ffffff)",
                fontFamily: "var(--body-font-family, Plus Jakarta Sans)"
              }}
            >
              {subtitle}
            </p>

            {/* Contact Info Card */}
            <div 
              className="inline-block px-8 py-4 rounded-xl"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                boxShadow: "inset 0 2px 8px rgba(255, 255, 255, 0.1)"
              }}
            >
              <p 
                className="text-xl font-medium"
                style={{ 
                  color: "var(--primary-text, #ffffff)",
                  fontFamily: "var(--body-font-family, Plus Jakarta Sans)"
                }}
              >
                {contactInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)"
          }}
        />
      </div>
    </>
  );
};

export default GlassmorphismClosingSlide;