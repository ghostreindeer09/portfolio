import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 700, default: 700 },
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: baseWeight } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: letterLeft, width } =
        letter.getBoundingClientRect();

      const distance = Math.abs(
        mouseX - (letterLeft - left + width / 2)
      );

      const intensity = Math.exp(-(distance ** 2) / 20000);

      const weight = min + (max - min) * intensity;

      animateLetter(letter, weight);
    });
  };
  
  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, baseWeight);
    });
  };
  
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `"wght" ${baseWeight}`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = setupTextHover(titleRef.current, "title");
    const cleanupSubtitle = setupTextHover(
      subtitleRef.current,
      "subtitle"
    );

    return () => {
      cleanupTitle?.();
      cleanupSubtitle?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Rishit! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText(
          "portfolio",
          "text-9xl italic font-georama",
          700
        )}
      </h1>

      <div className="small-screen">
        This portfolio is only made for desktop or tablet only.
      </div>
    </section>
  );
};

export default Welcome;