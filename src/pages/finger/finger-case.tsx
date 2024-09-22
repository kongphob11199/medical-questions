import dipActive from "../../assets/finger/dip-active.png";
import dipHighlight from "../../assets/finger/dip-highlight.png";
import pipActive from "../../assets/finger/pip-active.png";
import pipHighlight from "../../assets/finger/pip-highlight.png";
import mcpActive from "../../assets/finger/mcp-active.png";
import mcpHighlight from "../../assets/finger/mcp-highlight.png";
import othersHighlight from "../../assets/finger/others-highlight.png";

export type ItemsCoordsProps = {
  id: number;
  subId: number;
  coords: string;
};

export type DataFingerPotionProps = {
  id: number;
  active: string;
  highlight: string;
  itemsCoords: ItemsCoordsProps[];
};

export const area1_1CoordsFinger =
  "470,146,505,143,510,137,514,128,512,120,504,115,492,111,469,114,462,122,461,129,463,139";
export const area1_2CoordsFinger =
  "364,116,374,121,401,117,408,109,411,100,403,88,393,86,372,87,361,94,359,105";
export const area1_3CoordsFinger =
  "273,137,286,131,303,130,313,131,317,137,320,143,318,152,314,159,303,162,295,163,286,163,276,157,271,149";
export const area1_4CoordsFinger =
  "195,233,207,233,214,238,217,245,217,255,213,262,207,266,196,270,189,272,180,269,174,262,172,252,175,244,181,237,187,234";

export const area2_1CoordsFinger =
  "640,401,653,397,662,400,670,405,676,411,680,417,680,425,676,434,670,441,659,443,648,437,639,429,635,420,633,409";
export const area2_2CoordsFinger =
  "463,211,470,208,479,208,489,207,498,208,507,211,513,219,514,230,510,237,501,243,490,243,479,243,469,243,460,237,455,228,457,217";
export const area2_3CoordsFinger =
  "370,198,377,195,388,194,397,195,408,194,416,200,420,209,419,218,414,226,405,230,376,232,370,226,365,218,362,206";
export const area2_4CoordsFinger =
  "326,259,332,250,332,238,324,231,315,228,306,228,295,231,285,234,277,241,275,252,279,259,285,264,294,267,303,266,314,264";
export const area2_5CoordsFinger =
  "223,306,231,304,237,305,244,312,247,320,245,327,239,336,230,341,221,343,212,341,202,335,199,324,201,315,209,308";

export const area3_1CoordsFinger =
  "584,504,600,509,612,521,618,528,621,537,619,550,607,558,598,561,589,559,580,553,572,544,565,535,563,525,568,514,575,508";
export const area3_2CoordsFinger =
  "467,339,475,341,482,341,493,342,501,344,507,348,514,358,513,372,507,380,501,388,490,386,481,386,472,383,463,382,452,379,446,368,444,357,447,348,454,342";
export const area3_3CoordsFinger =
  "376,344,385,342,420,342,431,345,435,354,435,365,432,374,428,382,419,385,382,386,374,380,367,371,365,360,368,351";
export const area3_4CoordsFinger =
  "303,370,339,357,349,358,356,364,362,373,364,381,362,390,358,398,321,411,311,410,301,404,297,395,294,386,297,378";
export const area3_5CoordsFinger =
  "234,403,271,391,280,392,286,397,292,403,294,410,294,421,291,429,280,433,271,438,257,442,247,442,236,439,228,429,225,420,228,410";

export const area4_1CoordsFinger =
  "145,879,652,879,673,889,680,897,686,908,688,922,683,933,677,945,668,954,654,960,153,960,137,953,125,943,119,929,117,918,118,907,122,896,132,887";

export const dataFingerPotion: DataFingerPotionProps[] = [
  {
    id: 1,
    active: dipActive,
    highlight: dipHighlight,
    itemsCoords: [
      {
        id: 1,
        subId: 1,
        coords: area1_1CoordsFinger,
      },
      {
        id: 1,
        subId: 2,
        coords: area1_2CoordsFinger,
      },
      {
        id: 1,
        subId: 3,
        coords: area1_3CoordsFinger,
      },
      {
        id: 1,
        subId: 4,
        coords: area1_4CoordsFinger,
      },
    ],
  },
  {
    id: 2,
    active: pipActive,
    highlight: pipHighlight,
    itemsCoords: [
      {
        id: 2,
        subId: 1,
        coords: area2_1CoordsFinger,
      },
      {
        id: 2,
        subId: 2,
        coords: area2_2CoordsFinger,
      },
      {
        id: 2,
        subId: 3,
        coords: area2_3CoordsFinger,
      },
      {
        id: 2,
        subId: 4,
        coords: area2_4CoordsFinger,
      },
      {
        id: 2,
        subId: 5,
        coords: area2_5CoordsFinger,
      },
    ],
  },
  {
    id: 3,
    active: mcpActive,
    highlight: mcpHighlight,
    itemsCoords: [
      {
        id: 3,
        subId: 1,
        coords: area3_1CoordsFinger,
      },
      {
        id: 3,
        subId: 2,
        coords: area3_2CoordsFinger,
      },
      {
        id: 3,
        subId: 3,
        coords: area3_3CoordsFinger,
      },
      {
        id: 3,
        subId: 4,
        coords: area3_4CoordsFinger,
      },
      {
        id: 3,
        subId: 5,
        coords: area3_5CoordsFinger,
      },
    ],
  },
  {
    id: 4,
    active: "",
    highlight: othersHighlight,
    itemsCoords: [
      {
        id: 4,
        subId: 1,
        coords: area4_1CoordsFinger,
      },
    ],
  },
];
