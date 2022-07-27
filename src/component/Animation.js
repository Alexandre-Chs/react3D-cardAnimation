import { React, Fragment, useCallback } from "react";
import { useSpring, animated, config, useTrail } from "react-spring";
import { useState } from "react";

const Animation = () => {
  //HOVER CARD
  const [isClick, setIsClick] = useState(false);
  const { xyz } = useSpring({
    xyz: isClick ? [0, 120, 0] : [0, 300, 0],
    config: config.slow,
  });

  //FLIPPED CARD
  const [isFlipped, setIsFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 0 : 1,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
  });

  return (
    <div className="cards">
      <div
        className="card bg1"
        onMouseEnter={() => setIsClick(true)}
        onMouseLeave={() => setIsClick(false)}
      >
        <animated.p
          className="text-content"
          style={{
            transform: xyz.to(
              (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
            ),
          }}
        >
          Lorem ipsum dolor sit amet. Id sapiente quod qui quidem voluptatibus
          et ipsum nulla. Vel nemo rerum cum culpa laborum ea dolorem temporibus
          est officiis repellendus est accusantium ipsum.
        </animated.p>
      </div>

      <div className="card" onClick={() => setIsFlipped((current) => !current)}>
        <animated.div className="bg2 c" style={{ opacity: opacity.to(o => 1 - o), transform }} />

        <animated.div
          className="bg3 c"
          style={{ opacity, transform, rotateY: "180deg" }}
        />
      </div>
    </div>
  );
};

export default Animation;
