import "./Testtimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/img/leftArrow.png";
import rightArrow from "../../assets/img/rightArrow.png";
import { motion } from "framer-motion";

function Testtimonials() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testtimonials">
      <div className="left-t">
        <span>Testtimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
            style={{ color: "var(--orange)" }}
          >
            {testimonialsData[selected].name}
          </motion.span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name}
        />

        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((pre) => pre - 1)
            }
            src={leftArrow}
            alt="arrow"
          />
          <img
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((pre) => pre + 1)
            }
            src={rightArrow}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Testtimonials;
