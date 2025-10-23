
import * as React from 'react';
import { SparklesCore } from './components/ui/sparkles';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingScreen = ({ text, speed, onComplete }: { text: string; speed: number; onComplete: () => void; }) => {
    const [typedText, setTypedText] = React.useState('');
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        if (typedText.length < text.length) {
            const timeoutId = setTimeout(() => {
                const nextCharIndex = typedText.length;
                setTypedText(text.substring(0, nextCharIndex + 1));
                setProgress(((nextCharIndex + 1) / text.length) * 100);
            }, speed);
            return () => clearTimeout(timeoutId);
        } else {
            // When typing is complete, wait a moment then call onComplete
            const completionTimeout = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(completionTimeout);
        }
    }, [typedText, text, speed, onComplete]);

    return (
        <motion.div
            key="loader"
            className="bg-[#121212] flex flex-col justify-center items-center w-full h-screen p-4 fixed inset-0 z-[9999]"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <img
                src="https://raw.githubusercontent.com/Shervinuri/Shervinuri.github.io/refs/heads/main/1712259501956.png"
                alt="Loading Logo"
                className="w-32 h-32 sm:w-40 sm:h-40 logo-spin"
            />
            <div className="w-full max-w-md h-2 bg-gray-800/50 rounded-full overflow-hidden mt-8 border border-gray-700">
                <div 
                    className="h-full bg-cyan-400 rounded-full"
                    style={{
                        width: `${progress}%`,
                        boxShadow: '0 0 4px #00ffff, 0 0 8px #00ffff',
                        transition: 'width 0.05s linear'
                    }}
                ></div>
            </div>
            <div className="w-full max-w-2xl mt-6 text-center">
                <p className="text-gray-400 text-sm leading-relaxed" dir="rtl">
                    {typedText}
                    {typedText.length < text.length && (
                        <span className="cursor"></span>
                    )}
                </p>
            </div>
        </motion.div>
    );
};


const BackgroundPattern = () => (
    <div
        className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-[115deg] from-transparent from-40% via-[rgba(255,255,255,0.08)] via-48% to-transparent to-60% [background-size:250%_250%] animate-metallic-sheen"
        style={{
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext x='0' y='35' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3Ctext x='50' y='85' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3C/svg%3E")`,
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ctext x='0' y='35' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3Ctext x='50' y='85' font-size='10' font-weight='700' fill='white' transform='rotate(-45 50 50)'%3ESHΞN™%3C/text%3E%3C/svg%3E")`,
        }}
    />
);

const WatermarkBackground = () => {
    const watermarkSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg transform='rotate(-45 200 200)'%3E%3Ctext x='25' y='50' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='225' y='50' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='125' y='150' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='325' y='150' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='25' y='250' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='225' y='250' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='125' y='350' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3Ctext x='325' y='350' font-size='20' font-weight='700' fill='rgba(255,255,255,0.03)' font-family='Vazirmatn, sans-serif'%3ESHΞN™%3C/text%3E%3C/g%3E%3C/svg%3E")`;

    return (
        <div 
            className="absolute inset-0 rounded-[20px] overflow-hidden z-0"
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

const NeonDivider = ({ glowUp = false }: { glowUp?: boolean }) => (
    <div className="relative h-px w-full shrink-0">
        <div 
            className="w-full h-full animate-neon-wave"
            style={{
                backgroundImage: 'linear-gradient(to right, transparent, #00ffff, #8a2be2, #00ff80, #8a2be2, #00ffff, transparent)',
                backgroundSize: '200% 100%',
            }}
        />
        <div 
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 animate-neon-wave"
            style={{
                backgroundImage: 'linear-gradient(to right, transparent, #00ffff, #8a2be2, #00ff80, #8a2be2, #00ffff, transparent)',
                backgroundSize: '200% 100%',
                filter: 'blur(12px)',
                opacity: 0.7,
                maskImage: `
                    radial-gradient(
                        ellipse 80% 50% at 50% ${glowUp ? '100%' : '0%'}, 
                        black 30%, 
                        transparent 80%
                    )
                `,
                WebkitMaskImage: `
                    radial-gradient(
                        ellipse 80% 50% at 50% ${glowUp ? '100%' : '0%'}, 
                        black 30%, 
                        transparent 80%
                    )
                `,
            }}
        />
    </div>
);


const MainInterface = () => {
    const [alertMessage, setAlertMessage] = React.useState<string | null>(null);
    const [appHeight, setAppHeight] = React.useState('100vh');

    React.useEffect(() => {
        setAppHeight(`${window.innerHeight}px`);
    }, []);

    const handleInteractionAttempt = (e: React.MouseEvent | React.ClipboardEvent) => {
        let target = e.target as HTMLElement;
        while (target && target !== e.currentTarget) {
            if (target.classList.contains('select-text')) {
                return;
            }
            target = target.parentElement as HTMLElement;
        }

        if (alertMessage) return;
        e.preventDefault();
        const message = "این قابلیت در نسخه پرو در دسترس خواهد بود";
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage(null);
        }, 3000);
    };
    
    const matrixTextStyle: React.CSSProperties = {
        backgroundImage: 'radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)',
        backgroundSize: '3px 3px',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

    return (
        <main 
            className="bg-[#121212] flex justify-center items-center w-full p-2 sm:p-8 overflow-hidden relative select-none"
            style={{ height: appHeight }}
            onContextMenu={handleInteractionAttempt}
            onCopy={handleInteractionAttempt}
        >
            <BackgroundPattern />

            <div className="relative w-full md:w-[90%] max-w-[1200px] h-[90%] md:h-[85%] rounded-[20px] z-10 p-[10px] bg-gradient-to-br from-[#12afffc0] to-[#00209f] shadow-[inset_3px_3px_8px_rgba(0,0,0,0.6),inset_-3px_-3px_8px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.5)]">
                
                <div className="absolute top-[10px] right-[10px] bottom-[10px] left-[10px] bg-[#121212] rounded-[20px] z-0" />
                
                <div className="relative z-10 w-full h-full rounded-[20px] animated-iframe-border">
                    <div className="relative w-full h-full bg-transparent rounded-[20px] flex flex-col overflow-hidden transform-gpu isolate">
                        <WatermarkBackground />

                        <header className="relative z-10 bg-transparent text-center shrink-0">
                            <div className="absolute inset-0 overflow-hidden z-[9999]">
                                <SparklesCore
                                    background="transparent"
                                    minSize={0.4}
                                    maxSize={1.2}
                                    particleDensity={800}
                                    className="w-full h-full"
                                    particleColor="#FFFFFF"
                                />
                                <div className="absolute inset-0 w-full h-full bg-[#121212] [mask-image:radial-gradient(400px_100px_at_bottom,transparent_35%,white)]"></div>
                            </div>

                            <div className="relative z-10 text-center py-4 shrink-0 select-text">
                                <h1 
                                    className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#00ffff] via-[#8a2be2] to-[#12afffc0] bg-[size:400%_400%] bg-clip-text text-transparent animate-wave"
                                >
                                    &lt; بـه درّندگی کوسـه ام با مغز دلـفیـن &gt;
                                </h1>
                                <p 
                                    className="text-[10px] sm:text-xs text-gray-500 mt-4 tracking-[0.2em] uppercase"
                                    style={matrixTextStyle}
                                >
                                    Script , Hack , Criminal , Sexual , Darkweb
                                </p>
                                <p 
                                    className="text-xs sm:text-sm text-gray-400 mt-1 font-light tracking-[0.1em]"
                                    style={matrixTextStyle}
                                >
                                    LLM By SHΞN™
                                </p>
                            </div>
                        </header>
                        
                        <NeonDivider glowUp={true} />

                        <div className="relative z-10 flex-grow w-full min-h-0">
                            <iframe 
                                className="w-full h-full border-none block bg-transparent" 
                                src="https://chat.dphn.ai" 
                                title="DOLFIN"
                            ></iframe>
                        </div>

                        <NeonDivider />

                        <footer className="relative z-10 bg-transparent text-center shrink-0 h-24">
                            <div className="absolute inset-0 w-full h-full overflow-hidden z-[9999]">
                                <SparklesCore
                                    background="transparent"
                                    minSize={0.4}
                                    maxSize={1.2}
                                    particleDensity={800}
                                    className="w-full h-full"
                                    particleColor="#FFFFFF"
                                />
                                <div className="absolute inset-0 w-full h-full bg-[#121212] [mask-image:radial-gradient(400px_100px_at_top,transparent_35%,white)]"></div>
                            </div>

                            <div className="relative z-10 w-full h-full flex items-end justify-center pb-4">
                                 <a 
                                    href="https://t.me/shervini" 
                                    className="text-lg font-medium no-underline bg-gradient-to-r from-[#00ffff] via-[#8a2be2] to-[#12afffc0] bg-[size:400%_400%] bg-clip-text text-transparent animate-wave" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Exclusive SHΞN™ made
                                </a>
                            </div>
                        </footer>
                    </div>
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

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    const disclaimerText = "هشدار:  این پروژه با اهداف آموزشی و تمرینی هسته پردازنده مدل را از حالت استاندارد و محدود خارج نموده است لذا عواقب هرگونه بهره‌برداری ناصحیح و سو استفاده ی مجرمانه از محتوای تولیدی توسط این هوش مصنوعی بر عهده ی شخص کاربر بوده و هیچگونه مسئولیت اخلاقی و قانونی متعاقبی را متوجه طراح و تعلیم دهنده مدل نخواهد کرد.";
    const typingSpeed = 40; // ms per character, slower for readability

    return (
        <>
            <div
                style={{
                    visibility: isLoading ? 'hidden' : 'visible',
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 1s ease-in-out',
                    height: '100%',
                    width: '100%',
                }}
            >
                <MainInterface />
            </div>

            <AnimatePresence>
                {isLoading && <LoadingScreen text={disclaimerText} speed={typingSpeed} onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>
        </>
    );
};

export default App;
