import { useEffect, useState } from "react";
import { LuArrowUpFromDot } from "react-icons/lu";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScrool = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrool);
    return () => window.removeEventListener("scroll", listenToScrool);
  }, []);

  return (
    <section className="gotheTop top-btn">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <LuArrowUpFromDot />
        </div>
      )}
    </section>
  );
};
