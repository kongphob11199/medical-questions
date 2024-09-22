import React, { useEffect, useState } from "react";

type ButtonCustomProps = {
  title?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "outlined" | "text" | "contained";
  disabled?: boolean;
};

const ButtonCustom = (props: ButtonCustomProps) => {
  const [classButton, setClassButton] = useState<string>("");
  const variantOutlined =
    "border-2 border-transparent rounded-[30px] transition-all duration-200 ease-in-out hover:border-black";
  const variantText = "";
  const variantContained = "";

  const disabledButton = "opacity-50 pointer-events-none";

  const handlePropsVariant = () => {
    const classVariant = {
      outlined: variantOutlined,
      text: variantText,
      contained: variantContained,
    };
    if (props?.variant) {
      setClassButton(classVariant[props.variant]);
    } else {
      setClassButton(classVariant["contained"]);
    }
  };

  useEffect(() => {
    handlePropsVariant();
  }, [props?.variant]);

  return (
    <>
      <button
        id={props?.id}
        className={`${
          props?.disabled && disabledButton
        } ${classButton} cursor-pointer ${props?.className}`}
        style={{ ...props?.style }}
        onClick={(event) => props?.onClick && props?.onClick(event)}
      >
        {props?.title || ""}
        {props?.children}
      </button>
    </>
  );
};

export default ButtonCustom;
