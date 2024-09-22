import React from "react";

type CardCustomProps = {
  children: React.ReactNode;
};

const CardCustom = (props: CardCustomProps) => {
  return (
    <>
      <div
        className={`relative w-fit h-fit rounded-[8px] shadow-[0px_10px_20px_rgba(0,0,0,0.19),_0px_6px_6px_rgba(0,0,0,0.23)]  bg-[#dbdbdb] p-[24px]`}
      >
        {props.children}
      </div>
    </>
  );
};

export default CardCustom;
