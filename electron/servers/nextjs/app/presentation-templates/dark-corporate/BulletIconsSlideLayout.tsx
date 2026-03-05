import React from 'react'
import * as z from "zod";

const IconSchema = z.object({
    __icon_url__: z.string().default(""),
    __icon_query__: z.string().min(5).max(20).default("business chart")
});

export const layoutId = 'dark-corporate-bullet-icons-slide'
export const layoutName = 'Bullet Points with Icons'
export const layoutDescription = 'A dark corporate slide with title, description, and bullet points each paired with an icon'

const darkCorporateBulletIconsSlideSchema = z.object({
    title: z.string().min(3).max(40).default('Key Performance Metrics').meta({
        description: "Main title of the slide",
    }),
    description: z.string().min(10).max(150).default('Our data-driven approach delivers measurable results across all key performance indicators, ensuring sustainable growth and competitive advantage in the market.').meta({
        description: "Main description text explaining the topic",
    }),
    bulletPoints: z.array(z.object({
        title: z.string().min(2).max(60).meta({
            description: "Bullet point title",
        }),
        description: z.string().min(10).max(100).meta({
            description: "Bullet point description",
        }),
        icon: IconSchema,
    })).min(2).max(4).default([
        {
            title: 'Revenue Growth',
            description: 'Achieved 35% year-over-year revenue increase through strategic optimization and market expansion.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'trending up chart'
            }
        },
        {
            title: 'Customer Satisfaction',
            description: 'Maintained 98% customer satisfaction rate with improved service delivery and support systems.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'star rating'
            }
        },
        {
            title: 'Operational Efficiency',
            description: 'Reduced operational costs by 22% while increasing productivity through process automation.',
            icon: {
                __icon_url__: '',
                __icon_query__: 'gear settings'
            }
        }
    ]).meta({
        description: "List of bullet points with icons and descriptions",
    })
})

export const Schema = darkCorporateBulletIconsSlideSchema

export type DarkCorporateBulletIconsSlideData = z.infer<typeof darkCorporateBulletIconsSlideSchema>

interface DarkCorporateBulletIconsSlideLayoutProps {
    data?: Partial<DarkCorporateBulletIconsSlideData>
}

const RemoteSvgIcon: React.FC<{
    url: string;
    className?: string;
    color?: string;
    strokeColor?: string;
    title?: string;
}> = ({ url, className = "w-6 h-6", color = "currentColor", strokeColor = "currentColor", title }) => {
    const [svgContent, setSvgContent] = React.useState<string>('');

    React.useEffect(() => {
        if (url) {
            fetch(url)
                .then(response => response.text())
                .then(svg => setSvgContent(svg))
                .catch(() => setSvgContent(''));
        }
    }, [url]);

    if (!svgContent) {
        return <div className={className} style={{ color }} title={title} />;
    }

    return (
        <div
            className={className}
            style={{ color }}
            title={title}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

const DarkCorporateBulletIconsSlideLayout: React.FC<DarkCorporateBulletIconsSlideLayoutProps> = ({ data: slideData }) => {
    const bulletPoints = slideData?.bulletPoints || []

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <div
                className="w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video relative z-20 mx-auto overflow-hidden"
                style={{
                    background: "var(--background-color, transparent)",
                    fontFamily: "var(--heading-font-family, Inter)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                    <div 
                        className="w-full h-full rounded-full border"
                        style={{ 
                            borderColor: 'var(--primary-color, #6366f1)',
                            background: 'radial-gradient(circle, var(--primary-color, #6366f1) 0%, transparent 70%)',
                            opacity: 0.05
                        }}
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 opacity-15">
                    <div className="grid grid-cols-8 gap-1 w-full h-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                            <div 
                                key={i} 
                                className="w-1 h-1 rounded-full" 
                                style={{ backgroundColor: 'var(--primary-color, #6366f1)' }}
                            />
                        ))}
                    </div>
                </div>

                {/* Company Header */}
                {((slideData as any)?.__companyName__ || (slideData as any)?._logo_url__) && (
                    <div className="absolute top-0 left-0 right-0 px-12 pt-6">
                        <div className="flex items-center gap-3">
                            {(slideData as any)?._logo_url__ && <img src={(slideData as any)?._logo_url__} alt="logo" className="w-7 h-7" />}
                            {(slideData as any)?.__companyName__ && (
                                <span className="text-base font-semibold" style={{ color: 'var(--background-text, #e5e7eb)' }}>
                                    {(slideData as any)?.__companyName__}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col h-full px-12 pt-16 pb-12">
                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 
                            className="text-5xl font-bold mb-6"
                            style={{ color: "var(--background-text, #e5e7eb)" }}
                        >
                            {slideData?.title || 'Key Performance Metrics'}
                        </h1>
                        <p 
                            className="text-lg leading-relaxed max-w-4xl"
                            style={{ color: "var(--background-text, #e5e7eb)", opacity: 0.8 }}
                        >
                            {slideData?.description || 'Our data-driven approach delivers measurable results across all key performance indicators, ensuring sustainable growth and competitive advantage in the market.'}
                        </p>
                        <div 
                            className="w-20 h-1 mt-4 rounded-full"
                            style={{ background: 'var(--primary-color, #6366f1)' }}
                        />
                    </div>

                    {/* Bullet Points Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-8">
                        {bulletPoints.map((bullet, index) => (
                            <div 
                                key={index} 
                                className="p-6 rounded-lg relative"
                                style={{ 
                                    border: '1px solid rgba(99,102,241,0.12)',
                                    background: 'rgba(99,102,241,0.06)',
                                    borderLeft: '3px solid var(--primary-color, #6366f1)'
                                }}
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <div 
                                        className="w-14 h-14 rounded-lg flex items-center justify-center"
                                        style={{ 
                                            background: 'var(--primary-color, #6366f1)',
                                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)'
                                        }}
                                    >
                                        <RemoteSvgIcon
                                            url={bullet.icon.__icon_url__}
                                            className="w-7 h-7"
                                            color="var(--primary-text, #ffffff)"
                                            strokeColor="var(--primary-text, #ffffff)"
                                            title={bullet.icon.__icon_query__}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 
                                        className="text-xl font-semibold mb-3"
                                        style={{ color: "var(--background-text, #e5e7eb)" }}
                                    >
                                        {bullet.title}
                                    </h3>
                                    <p 
                                        className="text-base leading-relaxed"
                                        style={{ color: "var(--background-text, #e5e7eb)", opacity: 0.8 }}
                                    >
                                        {bullet.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom accent line */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ 
                        background: 'linear-gradient(90deg, transparent 0%, var(--primary-color, #6366f1) 50%, transparent 100%)',
                        opacity: 0.3
                    }}
                />
            </div>
        </>
    )
}

export default DarkCorporateBulletIconsSlideLayout