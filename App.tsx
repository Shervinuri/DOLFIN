
import * as React from 'react';
import { SparklesCore } from './components/ui/sparkles';
import { AnimatePresence, motion } from 'framer-motion';

const BackgroundPattern = () => (
    <div
        className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-[115deg] from-transparent from-40% via-[rgba(255,255,255,0.08)] via-48% to-transparent to-60% [background-size:250%_250%] animate-metallic-sheen"
        style={{
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext x='0' y='35' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3Ctext x='50' y='85' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3C/svg%3E")`,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext x='0' y='35' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3Ctext x='50' y='85' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3C/svg%3E")`,
        }}
    />
);

const SideGlow = ({ side }: { side: 'left' | 'right' }) => (
    <div
        className={`content-[''] absolute -z-10 top-1/2 w-[150px] h-full blur-[45px] animate-subtle-flicker`}
        style={{
            background: 'radial-gradient(ellipse 30% 70% at 50% 50%, rgba(0, 32, 159, 0.4) 0%, transparent 80%)',
            ...(side === 'left' 
                ? { left: 0, '--transform-flicker-from': 'translate(-45%, -50%) scaleY(0.95)', '--transform-flicker-to': 'translate(-45%, -50%) scaleY(1.05)' } 
                : { right: 0, '--transform-flicker-from': 'translate(45%, -50%) scaleY(0.95)', '--transform-flicker-to': 'translate(45%, -50%) scaleY(1.05)' }),
        }}
    />
);

const WatermarkBackground = () => {
    const watermarkSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg transform='rotate(-45 200 200)'%3E%3Ctext x='25' y='50' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='225' y='50' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='125' y='150' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='325' y='150' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='25' y='250' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='225' y='250' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='125' y='350' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='325' y='350' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3C/g%3E%3C/svg%3E")`;

    return (
        <div 
            className="absolute inset-[1px] rounded-[12px] overflow-hidden z-0"
            style={{
                maskImage: 'radial-gradient(ellipse 90% 95% at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 95% at center, black 60%, transparent 100%)',
            }}
        >
            <div
                className="w-full h-full animate-watermark-wave"
                style={{
                    backgroundImage: `${watermarkSvg}, linear-gradient(160deg, rgba(18, 175, 255, 0.1), rgba(0, 32, 159, 0.15) 50%, rgba(255, 255, 255, 0.05))`,
                    backgroundSize: '400px 400px, 400% 400%',
                }}
            />
        </div>
    );
};


const App = () => {
    const [alertMessage, setAlertMessage] = React.useState<string | null>(null);

    const handleInteractionAttempt = (e: React.MouseEvent | React.ClipboardEvent) => {
        if (alertMessage) return; // Prevent spamming alerts
        e.preventDefault();
        const message = "این قابلیت در نسخه پرو در دسترس خواهد بود";
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage(null);
        }, 3000);
    };

    return (
        <main 
            className="bg-[#121212] flex justify-center items-center min-h-screen w-full p-2 sm:p-8 overflow-hidden relative select-none"
            onContextMenu={handleInteractionAttempt}
            onCopy={handleInteractionAttempt}
        >
            <BackgroundPattern />

            <div className="relative w-full md:w-[90%] max-w-[1200px] h-[90vh] md:h-[80vh] rounded-[20px] z-10 p-[10px] bg-gradient-to-br from-[#12afffc0] to-[#00209f] shadow-[inset_3px_3px_8px_rgba(0,0,0,0.6),inset_-3px_-3px_8px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.5)]">
                <SideGlow side="left" />
                <SideGlow side="right" />
                
                <div className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] bg-[#121212] rounded-[12px] z-0" />
                
                <div className="relative z-10 w-full h-full bg-transparent rounded-[12px] flex flex-col overflow-hidden animated-iframe-border">
                    <WatermarkBackground />

                    <header className="relative z-10 bg-transparent text-center shrink-0">
                         <div className="w-full h-24 relative overflow-hidden">
                            {/* Gradients to enhance the particle effect */}
                            <div className="absolute inset-x-10 sm:inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-[#00209f] to-transparent h-px w-3/4 blur" />
                            <div className="absolute inset-x-10 sm:inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-[#00209f] to-transparent h-[2px] w-3/4" />
                            <div className="absolute inset-x-30 sm:inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-[#12afff] to-transparent h-px w-1/4" />
                            <div className="absolute inset-x-30 sm:inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-[#12afff] to-transparent h-[5px] w-1/4 blur" />

                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1.2}
                                particleDensity={800}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                                direction="up"
                            />
                            {/* Radial Gradient to prevent sharp edges of the particle container */}
                            <div className="absolute inset-0 w-full h-full bg-[#121212] [mask-image:radial-gradient(400px_100px_at_bottom,transparent_35%,white)]"></div>
                        </div>
                    </header>

                    <iframe 
                        className="relative z-10 flex-grow w-full border-none block bg-transparent" 
                        src="https://chat.dphn.ai" 
                        title="DOLFIN"
                    ></iframe>
                    
                    <footer className="relative z-10 bg-transparent text-center shrink-0">
                        {/* Particle container starts here, positioned to appear under the iframe */}
                        <div className="w-full h-24 relative overflow-hidden">
                            {/* Gradients to enhance the particle effect */}
                            <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#00209f] to-transparent h-px w-3/4 blur" />
                            <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#00209f] to-transparent h-[2px] w-3/4" />
                            <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#12afff] to-transparent h-px w-1/4" />
                            <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#12afff] to-transparent h-[5px] w-1/4 blur" />

                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1.2}
                                particleDensity={800}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                            {/* Radial Gradient to prevent sharp edges of the particle container */}
                            <div className="absolute inset-0 w-full h-full bg-[#121212] [mask-image:radial-gradient(400px_100px_at_top,transparent_35%,white)]"></div>
                        </div>

                        <a 
                            href="https://t.me/shervini" 
                            className="text-lg font-medium no-underline bg-gradient-to-r from-[#00ffff] via-[#8a2be2] to-[#12afffc0] bg-[size:400%_400%] bg-clip-text text-transparent animate-wave inline-block relative z-20 -mt-8 pb-4" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Exclusive SHΞN™ made
                        </a>
                    </footer>
                </div>
            </div>

            <AnimatePresence>
                {alertMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 p-3 px-6 rounded-lg bg-[rgba(0,32,159,0.8)] text-white shadow-lg backdrop-blur-sm border border-cyan-400/50"
                    >
                        {alertMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default App;
