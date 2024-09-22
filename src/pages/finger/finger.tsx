import { useRef, useState } from "react";
import defaultFinger from "../../assets/finger/default-finger.png";
import useWindowSize from "../../utility/useWindowSize";
import { dataFingerPotion, DataFingerPotionProps } from "./finger-case";
import ButtonCustom from "../../component/button/button-custom";
import CardCustom from "../../component/card/card-custom";

type FingerProps = {
  onSubmit: () => void;
};

const Finger = (props: FingerProps) => {
  const { width: widthWindow } = useWindowSize();
  const originalWidth = 828;
  const originalHeight = 976;

  const [fingerImgSize, setFingerImgSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [dataFinger, setDataFinger] = useState<DataFingerPotionProps[]>([]);
  const fingerRef = useRef<HTMLImageElement>(null);

  const scaleCoords = (coords: string) => {
    const widthScale = fingerImgSize.width / originalWidth;
    const heightScale = fingerImgSize.height / originalHeight;
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

  const handleDataFinger = (item: DataFingerPotionProps) => {
    const handleSetData = () => {
      if (!dataFinger?.length) {
        return [item];
      } else {
        if (dataFinger.some((info) => info.id === item.id)) {
          return dataFinger.filter(
            (info) => info.id !== item.id && info.id !== 4
          );
        } else {
          return [...dataFinger.filter((info) => info.id !== 4), item];
        }
      }
    };
    const newData = item.id === 4 ? [item] : handleSetData();
    setDataFinger(newData);
  };

  return (
    <>
      <CardCustom>
        <div className={`text-center pb-[16px] text-[24px] font-medium`}>
          จุดไหนที่คุณปวดนิ้วมากที่สุด ?
        </div>
        <div className={"relative w-fit h-fit"}>
          <div ref={fingerRef}>
            <img
              src={defaultFinger}
              useMap="#finger-container"
              onLoad={() => {
                setFingerImgSize({
                  width:
                    fingerRef?.current?.offsetWidth || widthWindow - 48 || 0,
                  height: fingerRef?.current?.offsetHeight || 0,
                });
              }}
            />
          </div>

          <map name="finger-container">
            {dataFingerPotion.map((item) => {
              return item.itemsCoords.map((info, num) => {
                return (
                  <area
                    key={num}
                    shape="poly"
                    coords={scaleCoords(info.coords)}
                    onClick={() => handleDataFinger(item)}
                    className={`cursor-pointer`}
                  />
                );
              });
            })}
          </map>

          <div
            className={`${
              dataFinger?.some((item) => item?.id) ? "opacity-100" : "opacity-0"
            } transition-all duration-200 ease-in-out`}
          >
            {dataFinger.map((item, index) => {
              return (
                <div key={index}>
                  {dataFinger.length !== 3 && (
                    <div className={`absolute top-0`}>
                      <img src={item.active} useMap="#finger-container" />
                    </div>
                  )}
                  <div className={`absolute top-0`}>
                    <img src={item.highlight} useMap="#finger-container" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardCustom>

      <div className={`pt-[24px] text-center`}>
        <ButtonCustom
          className={` text-[24px] font-medium `}
          disabled={!dataFinger?.length}
          onClick={() => props.onSubmit()}
          variant="text"
        >
          ต่อไป
        </ButtonCustom>
      </div>
    </>
  );
};

export default Finger;
