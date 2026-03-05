import React from 'react';
import * as z from 'zod';

const layoutId = "monochrome-noir-closing-slide";
const layoutName = "Closing Slide";
const layoutDescription = "A thank-you or call-to-action ending slide.";

const Schema = z.object({
  title: z.string().min(1).max(40).default("Thank You"),
  subtitle: z.string().min(1).max(100).default("Let's build something extraordinary together"),
  contactInfo: z.string().min(1).max(100).default("contact@company.com | +1 (555) 123-4567")
});

const MonochromeNoirClosingSlide: React.FC<{ data: Partial<z.infer<typeof Schema>> }> = ({ data }) => {
  const title = data.title ?? Schema.shape.title._def.defaultValue();
  const subtitle = data.subtitle ?? Schema.shape.subtitle._def.defaultValue();
  const contactInfo = data.contactInfo ?? Schema.shape.contactInfo._def.defaultValue();

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div 
        className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
        style={{ 
          background: "var(--background-color, transparent)", 
          fontFamily: "var(--heading-font-family, Space Grotesk)" 
        }}
      >
        {/* Decorative geometric elements */}
        <div 
          className="absolute top-8 left-8 w-20 h-20 border-4"
          style={{ borderColor: "var(--primary-color, #000000)" }}
        />
        <div 
          className="absolute bottom-8 right-8 w-16 h-16"
          style={{ background: "var(--primary-color, #000000)" }}
        />

        {/* Company header */}
        <div className="absolute top-8 left-0 right-0 px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 border-2"
                style={{ borderColor: "var(--primary-color, #000000)" }}
              />
              <span 
                className="text-lg font-bold"
                style={{ color: "var(--background-text, #000000)" }}
              >
                COMPANY
              </span>
            </div>
            <div 
              className="w-24 h-0.5"
              style={{ background: "var(--primary-color, #000000)" }}
            />
          </div>
        </div>

        {/* Main content - centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            {/* Large centered title */}
            <h1 
              className="text-6xl font-bold mb-6 tracking-tight"
              style={{ 
                color: "var(--background-text, #000000)",
                fontWeight: "700"
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p 
              className="text-2xl font-medium mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--background-text, #000000)" }}
            >
              {subtitle}
            </p>

            {/* Thick divider */}
            <div 
              className="w-32 h-1 mx-auto mb-8"
              style={{ background: "var(--primary-color, #000000)" }}
            />

            {/* Contact info */}
            <div 
              className="inline-block px-8 py-4 border-2"
              style={{ 
                borderColor: "var(--primary-color, #000000)",
                background: "#ffffff"
              }}
            >
              <p 
                className="text-lg font-medium"
                style={{ color: "var(--background-text, #000000)" }}
              >
                {contactInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { layoutId, layoutName, layoutDescription, Schema };
export default MonochromeNoirClosingSlide;