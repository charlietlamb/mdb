import React, {useEffect, useState, useRef} from 'react';

export default function ConnectingLine({
  box1,
  box2,
}: {
  box1: React.RefObject<HTMLDivElement>;
  box2: React.RefObject<HTMLDivElement>;
}) {
  const [coordinates, setCoordinates] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const observer = useRef<MutationObserver | null>(null);

  useEffect(() => {
    function updateCoordinates() {
      if (box1.current && box2.current) {
        const box1Rect = box1.current.getBoundingClientRect();
        const box2Rect = box2.current.getBoundingClientRect();

        const x1 = Math.min(box1Rect.x, box2Rect.x);
        const y1 = Math.min(box1Rect.y, box2Rect.y);
        const x2 = Math.max(
          box1Rect.x + box1Rect.width,
          box2Rect.x + box2Rect.width,
        );
        const y2 = Math.max(
          box1Rect.y + box1Rect.height,
          box2Rect.y + box2Rect.height,
        );

        setCoordinates({
          x1: box1Rect.x + box1Rect.width / 2 - x1,
          y1: box1Rect.y + box1Rect.height / 2 - y1,
          x2: box2Rect.x + box2Rect.width / 2 - x1,
          y2: box2Rect.y + box2Rect.height / 2 - y1,
          width: x2 - x1,
          height: y2 - y1,
          top: y1,
          left: x1,
        });
      }
    }

    observer.current = new MutationObserver(updateCoordinates);

    if (box1.current) {
      observer.current.observe(box1.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    if (box2.current) {
      observer.current.observe(box2.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    updateCoordinates();
    window.addEventListener('resize', updateCoordinates);

    return () => {
      window.removeEventListener('resize', updateCoordinates);
      observer.current?.disconnect();
    };
  }, [box1, box2]);

  const {x1, y1, x2, y2, width, height, top, left} = coordinates;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dr = Math.sqrt(dx * dx + dy * dy);
  const sweep = dy < 0 ? 0 : 1;
  const d = `M${x1},${y1}A${dr},${dr} 0 0,${sweep} ${x2},${y2}`;

  return (
    <svg
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <path
        d={d}
        stroke="red"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
      />
    </svg>
  );
}
