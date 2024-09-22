import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "../../utility/useWindowSize";
import defaultAbs from "../../assets/abs/default-abs.png";
import { dataAbsPotion, DataAbsPotionProps } from "./abs-case";
import CardCustom from "../../component/card/card-custom";

type AbsProps = {
  onSubmit: () => void;
};

const Abs = (props: AbsProps) => {
  const { width: widthWindow } = useWindowSize();
  const originalWidth = 828;
  const originalHeight = 976;

  const [absImgSize, setAbsImgSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const AbsRef = useRef<HTMLImageElement>(null);
  const [dataAbs, setDataAbs] = useState<DataAbsPotionProps[]>([]);

  const scaleCoords = (coords: string) => {
    const widthScale = absImgSize.width / originalWidth;
    const heightScale = absImgSize.height / originalHeight;
    const newCoords = coords
      .split(",")
      .map((point, index) => {
        return index % 2 === 0
          ? Math.round(Number(point) * widthScale)
          : Math.round(Number(point) * heightScale);
      })
      .join(",");
    return newCoords;
  };

  const handleDataAbs = (item: DataAbsPotionProps) => {
    const handleSetData = () => {
      if (!dataAbs?.length) {
        return [item];
      } else {
        if (dataAbs.some((info) => info.id === item.id)) {
          return dataAbs.filter((info) => info.id !== item.id && info.id !== 8);
        } else {
          return [...dataAbs.filter((info) => info.id !== 8), item];
        }
      }
    };
    const newData = item.id === 8 ? [item] : handleSetData();
    setDataAbs(newData);
  };

  return (
    <>
      <CardCustom>
        <div className={`text-center pb-[16px] text-[24px] font-medium`}>
          จุดไหนที่คุณปวดท้องมากที่สุด ?
        </div>
        <div className={"relative w-fit h-fit z-10"}>
          <div ref={AbsRef} className={"abs-content"}>
            <img
              src={defaultAbs}
              useMap="#abs-container"
              onLoad={() => {
                setAbsImgSize({
                  width: AbsRef?.current?.offsetWidth || widthWindow - 48 || 0,
                  height: AbsRef?.current?.offsetHeight || 0,
                });
              }}
            />
          </div>

          <map name="abs-container">
            {dataAbsPotion.map((item, index) => {
              return (
                <area
                  key={index}
                  shape="poly"
                  coords={scaleCoords(item.coords)}
                  onClick={() => handleDataAbs(item)}
                  className={`cursor-pointer`}
                />
              );
            })}
          </map>

          <div
            className={`${
              dataAbs?.some((item) => item?.id) ? "opacity-100" : "opacity-0"
            } transition-all duration-200 ease-in-out`}
          >
            {dataAbs.map((item, index) => {
              return (
                <div key={index}>
                  {dataAbs.length !== 7 && (
                    <div className={`absolute top-0`}>
                      <img src={item.active} useMap="#abs-container" />
                    </div>
                  )}
                  <div className={`absolute top-0`}>
                    <img src={item.highlight} useMap="#abs-container" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardCustom>
      <div
        className={`pt-[24px] text-center text-[24px] font-medium cursor-pointer ${
          dataAbs?.length
            ? "text-[#000]"
            : "text-[#abababf5] pointer-events-none"
        }`}
        onClick={() => props.onSubmit()}
      >
        ต่อไป
      </div>
    </>
  );
};

export default Abs;
