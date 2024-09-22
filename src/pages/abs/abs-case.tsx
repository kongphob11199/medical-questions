import epigastriumActive from "../../assets/abs/epigastrium-active.png";
import epigastriumHighlight from "../../assets/abs/epigastrium-highlight.png";
import luqActive from "../../assets/abs/luq-active.png";
import luqHighlight from "../../assets/abs/luq-highlight.png";
import llqActive from "../../assets/abs/llq-active.png";
import llqHighlight from "../../assets/abs/llq-highlight.png";
import suprapubicActive from "../../assets/abs/suprapubic-active.png";
import suprapubicHighlight from "../../assets/abs/suprapubic-highlight.png";
import rlqActive from "../../assets/abs/rlq-active.png";
import rlqHighlight from "../../assets/abs/rlq-highlight.png";
import ruqActive from "../../assets/abs/ruq-active.png";
import ruqHighlight from "../../assets/abs/ruq-highlight.png";
import umbilicusActive from "../../assets/abs/umbilicus-active.png";
import umbilicusHighlight from "../../assets/abs/umbilicus-highlight.png";

import allOverHighlight from "../../assets/abs/all-over-highlight.png";

export const area1CoordsAbs =
  "402,335,366,361,345,395,363,428,400,469,431,437,457,395,431,358";
export const area2CoordsAbs = "421,469,467,403,518,421,530,508,454,510,441,481";
export const area3CoordsAbs =
  "453,527,529,528,526,570,513,603,496,621,472,640,463,619,450,591,433,573,425,563,444,550";
export const area4CoordsAbs =
  "399,566,427,582,438,599,456,641,439,657,411,669,397,674,368,660,356,650,347,639,359,608,376,583,385,571";
export const area5CoordsAbs =
  "375,561,354,544,348,533,347,525,266,525,266,553,267,572,273,586,284,602,301,620,313,630,328,635,338,632,351,596";
export const area6CoordsAbs =
  "348,507,354,490,364,479,377,471,383,469,369,448,358,435,343,417,328,403,316,407,300,413,291,420,282,427,276,435,273,454,271,474,271,494,270,506,290,510,321,510";
export const area7CoordsAbs =
  "382,482,400,478,424,485,438,500,440,518,435,535,422,550,401,555,388,554,374,544,363,534,360,520,361,506,367,489";
export const area8CoordsAbs =
  "296,854,493,853,519,867,527,886,527,905,518,920,503,931,496,934,298,933,280,923,270,909,266,893,269,878,277,862";

export type DataAbsPotionProps = {
  id: number;
  active: string;
  highlight: string;
  coords: string;
};

export const dataAbsPotion: DataAbsPotionProps[] = [
  {
    id: 1,
    active: epigastriumActive,
    highlight: epigastriumHighlight,
    coords: area1CoordsAbs,
  },
  {
    id: 2,
    active: luqActive,
    highlight: luqHighlight,
    coords: area2CoordsAbs,
  },
  {
    id: 3,
    active: llqActive,
    highlight: llqHighlight,
    coords: area3CoordsAbs,
  },
  {
    id: 4,
    active: suprapubicActive,
    highlight: suprapubicHighlight,
    coords: area4CoordsAbs,
  },
  {
    id: 5,
    active: rlqActive,
    highlight: rlqHighlight,
    coords: area5CoordsAbs,
  },
  {
    id: 6,
    active: ruqActive,
    highlight: ruqHighlight,
    coords: area6CoordsAbs,
  },
  {
    id: 7,
    active: umbilicusActive,
    highlight: umbilicusHighlight,
    coords: area7CoordsAbs,
  },
  {
    id: 8,
    active: "",
    highlight: allOverHighlight,
    coords: area8CoordsAbs,
  },
];
