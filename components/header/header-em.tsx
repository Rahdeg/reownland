"use client"
import { motion } from "framer-motion";
import { Fragment } from "react";
import classes from "../header/heading.module.scss"

interface HeadingEmProps {
  text: string;
  emphasis: string;
  lineBreakIndexes: number[];
  emLineBreakIndexes?: number[];
  textAlign?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
}
const HeadingEm = ({
  text,
  emphasis,
  lineBreakIndexes,
  emLineBreakIndexes,
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
}: HeadingEmProps) => {
  const headingTexts = text.split(" ");
  const emphasisTexts = emphasis.split(" ");
  let textAlignClass = "text-start";
  if (textAlign === "center") {
    textAlignClass = "text-center";
  }

  const heading = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.25,
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
  };

  return (
    <motion.h1
      className={`${textAlignClass} ${classes.heading}`}
      variants={heading}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{
        fontSize: fontSize || "3.5rem",
        fontWeight: fontWeight || "600",
        lineHeight: lineHeight || "4rem",
      }}
    >
      {headingTexts.map((text, i) => (
        <Fragment key={i}>
          <span className={classes.wrapper}>
            <motion.span className={classes.headingWrapper} variants={item}>
              {text}
              &nbsp;
            </motion.span>
          </span>
          {lineBreakIndexes.includes(i) && <br />}
        </Fragment>
      ))}
      <em className={classes.em}>
        {emphasisTexts.map((text, i) => (
          <Fragment key={i}>
            <span className={classes.wrapper}>
              <motion.span className={classes.headingWrapper} variants={item}>
                {text}
                &nbsp;
              </motion.span>
            </span>
            {emLineBreakIndexes?.includes(i) && <br />}
          </Fragment>
        ))}
      </em>
    </motion.h1>
  );
};

export default HeadingEm;
