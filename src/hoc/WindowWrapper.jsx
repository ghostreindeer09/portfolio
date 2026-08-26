import { useGSAP } from "@gsap/react";
import useWindowStore from "../stores/window";
import { useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

const windowSizes = {
  finder: "w-[900px] h-[600px]",
  resume: "w-[800px] h-[700px]",
  safari: "w-[1000px] h-[650px]",
  terminal: "w-[700px] h-[500px]",
  txtfile: "w-[700px] h-[600px]",
  imgfile: "w-[800px] h-[600px]",
   contact: "w-[400px] h-[500px]",
};

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow } = useWindowStore();
    const windowState = windows[windowKey];

    const ref = useRef(null);

    const isOpen = windowState?.isOpen ?? false;
    const zIndex = windowState?.zIndex ?? 0;

    useGSAP(() => {
      const el = ref.current;

      if (!el) return;

      if (isOpen) {
        el.style.display = "block";

        gsap.fromTo(
          el,
          {
            scale: 0.8,
            opacity: 0,
            y: 40,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power3.out",
          }
        );
      } else {
        el.style.display = "none";
      }
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;

      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    return (
      <section
        ref={ref}
        id={windowKey}
        style={{ zIndex }}
        className={`absolute ${
          windowSizes[windowKey] ?? "w-[800px] h-[600px]"
        }`}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;