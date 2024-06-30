import {motion} from 'framer-motion';

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        className="w-full h-full"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="60"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <motion.ellipse
            rx="150"
            ry="150"
            cx="528.6697045770616"
            cy="362.53329228106594"
            fill="hsl(37, 99%, 67%)"
            animate={{
              cx: [
                '528.6697045770616',
                '628.6697045770616',
                '528.6697045770616',
              ],
              cy: [
                '362.53329228106594',
                '462.53329228106594',
                '362.53329228106594',
              ],
              rx: ['150', '200', '150'],
              ry: ['150', '200', '150'],
            }}
            transition={{duration: 2, yoyo: Infinity, ease: 'easeInOut'}}
          ></motion.ellipse>
          <motion.ellipse
            rx="150"
            ry="150"
            cx="371.95366552862197"
            cy="502.1447181901383"
            fill="hsl(316, 73%, 52%)"
            animate={{
              cx: [
                '371.95366552862197',
                '471.95366552862197',
                '371.95366552862197',
              ],
              cy: [
                '502.1447181901383',
                '602.1447181901383',
                '502.1447181901383',
              ],
              rx: ['150', '200', '150'],
              ry: ['150', '200', '150'],
            }}
            transition={{duration: 1.5, yoyo: Infinity, ease: 'easeInOut'}}
          ></motion.ellipse>
          <motion.ellipse
            rx="150"
            ry="150"
            cx="287.13416478022236"
            cy="321.9497297197113"
            fill="hsl(185, 100%, 57%)"
            animate={{
              cx: [
                '287.13416478022236',
                '387.13416478022236',
                '287.13416478022236',
              ],
              cy: [
                '321.9497297197113',
                '421.9497297197113',
                '321.9497297197113',
              ],
              rx: ['150', '200', '150'],
              ry: ['150', '200', '150'],
            }}
            transition={{duration: 1.2, yoyo: Infinity, ease: 'easeInOut'}}
          ></motion.ellipse>
        </g>
      </svg>
    </div>
  );
}
