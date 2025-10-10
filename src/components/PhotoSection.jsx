import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  "/creative/1.jpg",
  "/creative/2.jpg",
  "/creative/3.jpg",
  "/creative/4.jpg",
  "/creative/5.jpg",
  "/creative/6.jpg",
  "/creative/7.jpg"
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
      Ngoài đam mê lập trình, tôi còn yêu thích khám phá những khía cạnh sáng tạo — từ minh họa, chỉnh sửa ảnh cho đến nhiếp ảnh. Đây là một vài tác phẩm mà tôi tâm đắc nhất.
      </p>

      <div className="flex justify-center mt-12">
        <a
          className="cosmic-button w-fit flex items-center gap-2"
          target="_blank"
          href="https://github.com/Tunaa-11342"
        >
          Tìm hiểu thêm <ArrowRight size={16} />
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




