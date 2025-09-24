import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a36d2695-58f8-4644-9e19-71988334e345",
  "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9f9148ad-74c2-4ebc-a769-bb90fec7b9a5",
  "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ff35104e-3a7e-458f-8077-7ea2780706fa",
  "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/060546fb-1cbb-428e-b48d-eae2711a0c83",
  "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7feb903b-33f7-4326-90eb-a4f54c86c68e",
  "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/417d1d6b-4100-4419-9e01-37561a354b80",
];

export default function GallerySection() {
  const [cards, setCards] = useState(images);
  const [swapping, setSwapping] = useState(false);

  const triggerSwap = () => {
    if (swapping) return;
    setSwapping(true);

    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        newCards.push(first);
        return newCards;
      });
      setSwapping(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(triggerSwap, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
<section id="creative" className="py-24 px-4 relative">
  <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Content */}
    <div>
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
  Creative <span className="text-yellow-400">Works</span>
</h2>


      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Besides coding, I also love exploring creative directions — from
        illustrations and photo editing to photography. Here are some of my
        favorite works.
      </p>

      <div className="flex justify-center mt-12">
        <a
          className="cosmic-button w-fit flex items-center gap-2"
          target="_blank"
          href="https://github.com/Tunaa-11342"
        >
          Explore More <ArrowRight size={16} />
        </a>
      </div>
    </div>

    {/* Stack */}
    <div className="relative w-full h-[480px] flex justify-end items-center">
      {cards.map((src, index) => {
        const isTop = index === 0;
        const scale = 1 - index * 0.05;
        const zIndex = cards.length - index;
        const xOffset = index * 25;

        return (
<motion.div
  key={src}
  drag={isTop ? "x" : false}
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(e, info) => {
    if (!isTop) return;
    if (Math.abs(info.offset.x) > 50) triggerSwap();
  }}
  animate={{
    x: swapping && isTop ? -200 : xOffset,
    rotateY: swapping && isTop ? -30 : index * 5,
    scale: swapping && isTop ? 1.0 : scale,
  }}
  transition={{ duration: 1.0 }}
  style={{ width: 240, height: 360, zIndex }}
  className={`absolute cursor-pointer overflow-hidden rounded-3xl ${
    isTop
      ? "shadow-[0_0_25px_rgba(255,255,180,0.8)]"
      : "border-2 border-gray-700"
  }`}
  onClick={() => isTop && triggerSwap()}
>
  <img
    src={src}
    alt=""
    className="w-full h-full object-cover rounded-3xl pointer-events-none"
  />
</motion.div>
        );
      })}
    </div>
  </div>
</section>
  );
}
