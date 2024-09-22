import { useState } from "react";
import Finger from "../finger/finger";
import Abs from "../abs/abs";
import ButtonCustom from "../../component/button/button-custom";

const Home = () => {
  const [showCase, setShowCase] = useState<"FINGER" | "ABS" | "">("");
  return (
    <>
      <div className={`flex justify-center items-center w-dvw h-dvh`}>
        {!showCase && (
          <div className={`flex flex-col gap-[16px]`}>
            <ButtonCustom
              className={`text-[24px] font-bold py-[12px] px-[60px]  `}
              variant={"outlined"}
              onClick={() => setShowCase("FINGER")}
            >
              <div>ปวดนิ้ว</div>
            </ButtonCustom>
            <ButtonCustom
              className={`text-[24px] font-bold py-[12px] px-[60px]  `}
              variant={"outlined"}
              onClick={() => setShowCase("ABS")}
            >
              ปวดท้อง
            </ButtonCustom>
          </div>
        )}
        {showCase === "FINGER" && (
          <div className={`p-[24px]`}>
            <Finger onSubmit={() => setShowCase("")} />
          </div>
        )}
        {showCase === "ABS" && (
          <div className={`p-[24px]`}>
            <Abs onSubmit={() => setShowCase("")} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
