import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-premium origin-left z-[60]"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollProgress;
