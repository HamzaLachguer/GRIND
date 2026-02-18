import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useShowPanel = (state, containerRef, drawerRef) => {
  const tl = useRef(null);

  useGSAP(() => {

    if (!containerRef.current || !drawerRef.current) return;

    let mm = gsap.matchMedia();

    mm.add({
      desktop: "(min-width: 1024px)",
      mobile: "(max-width: 1023px)"
    }, (context) => {
      const {desktop, mobile} = context.conditions;

      gsap.set(containerRef.current, {background: "rgb(0,0,0,0)"});

      gsap.set(drawerRef.current, {
        x: desktop ? "100%" : 0,
        y: mobile ? "100%" : 0,
      })

      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(drawerRef.current, {
          x: desktop ? 0 : undefined,
          y: mobile ? 0 : undefined,
          duration: 0.2,
        })
        .to(containerRef.current, {
          background: "rgb(0,0,0,0.05)",
          duration: 0.2,
        });

    });
  }, { scope: containerRef })

  useGSAP(() => {
    if (!tl.current) return;

    state ? tl.current.play() : tl.current.reverse();
  }, { dependencies: [state] })
}

export default useShowPanel;