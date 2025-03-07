import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizonScrollCard = ({ data = [], heading }) => {
  const containerRef = useRef();

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth"; // ✅ Enable smooth scrolling
      containerRef.current.scrollBy({ left: -300 });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth"; // ✅ Enable smooth scrolling
      containerRef.current.scrollBy({ left: 300 });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>

      <div className="relative">
        {/* ✅ Scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll scrolbar-none relative"
        >
          {data.map((item, index) => (
            <Card key={item.id + "heading" + index} data={item} index={index + 1} trending={true} />
          ))}
        </div>

        {/* ✅ Scroll Buttons */}
        {data.length > 0 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2 hidden lg:flex">
            <button onClick={scrollLeft} className="bg-white text-black rounded-full p-2 shadow-lg">
              <FaAngleLeft />
            </button>
            <button onClick={scrollRight} className="bg-white text-black rounded-full p-2 shadow-lg">
              <FaAngleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizonScrollCard;
