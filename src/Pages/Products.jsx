import React, { ReactNode, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Grid,
  Button,
  Center,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
const data8 = {
  "Baby girl": [
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwee223b6c/productimages/1P543610.jpg?sw=354&sh=444&yocs=4G_4E_"
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130573040021_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Stella Nova Embellished One-Shoulder Dress",
      price: "425.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115657990006_005_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mare Mare x Anthropologie Sequin Bomber Jackets",
      price: "178 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4123464030052_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Hucth Sequin Jumpsuit",
      price: "248.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Kari wide-Leg Pants",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Lack-Sleeve Sweater",
      price: "28.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Varle Vine Half-Zip Pullover",
      price: "58.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "The Marais Printed Chiffon Maxi Dress ",
      price: "80.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mono River Fringed Sweater Dress",
      price: "14.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "T.La Puff Sleeve Tired Dress",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Maeve Parachute Pants",
      price: "48.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mave Back-Bow Sweater Tank ",
      price: "8.00",
    },
  ],

  "New Today": [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/62656665_031_d10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "BHLDN Dylan Satin Charmeuse Dress",
      price: "248.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/63828024_048_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "BHLDN Ruby Satin Charmeuse Dress",
      price: "220.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/62548623_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "BHLDN Cali Satin Charmeuse Midi Dress",
      price: "168.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/69274678_014_b1?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "BHLDN Remy Satin Charmeuse Dress",
      price: "248.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Kari wide-Leg Pants",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Lack-Sleeve Sweater",
      price: "28.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Varle Vine Half-Zip Pullover",
      price: "58.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "The Marais Printed Chiffon Maxi Dress ",
      price: "80.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mono River Fringed Sweater Dress",
      price: "14.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "T.La Puff Sleeve Tired Dress",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Maeve Parachute Pants",
      price: "48.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mave Back-Bow Sweater Tank ",
      price: "8.00",
    },
  ],
  "New This Week": [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113086690097_068_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "The Alani Cashmere Mock-Neck Sweater",
      price: "148.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80076136_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Sanctuary V-Wire Mini Cover-Up Dress",
      price: "85.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/69607877_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Desmond & Dempsey Bandana Short Set",
      price: "228 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Maeve Hourglass Cardigan Sweater",
      price: "168.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80389752_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Kari wide-Leg Pants",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113640120020_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Lack-Sleeve Sweater",
      price: "28.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/60288503_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Varle Vine Half-Zip Pullover",
      price: "58.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_043_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "The Marais Printed Chiffon Maxi Dress ",
      price: "80.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4130448390038_031_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mono River Fringed Sweater Dress",
      price: "14.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80006695_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "T.La Puff Sleeve Tired Dress",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4123650590207_004_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Maeve Parachute Pants",
      price: "48.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113326950106_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mave Back-Bow Sweater Tank ",
      price: "8.00",
    },
  ],
  Baby girl: [
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwea9f37c6/productimages/1P543610_LV03.jpg?sw=354&sh=444",
      title: "Baby Cousin Crew Long-Sleeve Bodysuit",
      price: "$7.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P543910.html",
      title: "Baby Uncle Long-Sleeve Bodysuit",
      price: "$7.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P333510.html",
      title: "Baby 2-Piece Berry Bodysuit Pant Set",
      price: "$10.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P333910.html",
      title: "Baby 2-Piece Floral Bodysuit Pant Set",
      price: "$10.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P543410.html",
      title: "Baby Zip-Up Fleece Hoodie",
      price: "$14.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P543010.html",
      title: "Baby Floral Fleece Joggers",
      price: "$8.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P329310.html",
      title: "Baby Stripped Twill Jumpsuit",
      price: "$11.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P329510.html",
      title: "Baby Stripped jumpsuit ",
      price: "$14.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P333310.html",
      title: "Baby 2-Piece Berry Bodysuit Pant Set",
      price: "$10.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P334110.html",
      title: "Baby 2-Piece Butterfly Bodysuit Pant Set",
      price: "$10.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_1P539610.html",
      title: "Baby Daisy Print Classic Overalls",
      price: "$25.00",
    },
    {
      img: "https://www.carters.com/carters-shop-baby-girl-clothes/V_B2235392.html",
      title: "Baby Floral Print Fleece Lined Jacket",
      price: "$32.00",
    },
  ],
  Jackets: [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115657990006_005_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Mare Mare X Bomber Jackets",
      price: "178.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115237430036_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Greylin Kint Shirt Jackets",
      price: "117.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4133402250064_020_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Eberjey Printed Pajama Set",
      price: "148 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Avec Les Fille Faux Coat",
      price: "248.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4133445000035_020_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Unreal Fur x Linda Puna Jackets",
      price: "79.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115687810002_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Ollari Tweet Blazer",
      price: "98.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115054590064_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "BLANKNYC Perfect Night Faux Leather Jackets",
      price: "68.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/78828522_028_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Beyond Yoga Braves The Elements Sherpa Bomer ",
      price: "69.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4133293120015_001_c2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Berando Plus Quilted Jackets",
      price: "59.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4133402250078_045_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Avec les Filles Faux Leather Puffer Vest",
      price: "9.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115259830010_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Bella Dahi Sherpa-Lined Faux Leather Jackets",
      price: "63.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/69128304_059_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Free People Movement Rocky Ridge Pullover Sweater",
      price: "68.00",
    },
  ],
  Kid Girl: [
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P536810.html",
      title: "Kid Rainbow Jersey Dress",
      price: "$12.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P577610.html",
      title: "Kd Crinkle Jersey Jumpsuit",
      price: "$20.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P578010.html",
      title: "Kid Plaid Cotton Top",
      price: "$21.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_IM753CR.html",
      title: "Kid Barbie Tee",
      price: "$14.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P531711.html",
      title: "Kid Floral Print Jersey Top",
      price: "$14.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P001010.html",
      title: "Kid Floral Print 1-Piece Rashguard",
      price: "$19.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3O176510.html",
      title: "Kid Floral Jersey Dress",
      price: "$14.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3O172610.html",
      title: "Kid Sunflower Tie-Front Top",
      price: "$34.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_34961510.html",
      title: "Kid Boot Cut Upstate Blue Wash Jeans",
      price: "$34.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/CARGPWJUNF23KG8PCMPGIFTSET1.html",
      title: "Kid 8-Piece Dresses & Bike Shorts Set",
      price: "$70.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P535011.html",
      title: "Kid Daisy Print Smocked Jersey Top",
      price: "$12.00",
    },
    {
      img: "https://www.carters.com/carters-shop-kid-girl-clothes/V_3P527810.html",
      title: "Kid Ponte Knit Uniform Skort",
      price: "$12.00",
    },
  ],
  Jumpsuits: [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4123464030052_000_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Hutch Sequin Jumpsuit",
      price: "248.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/78270386_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Free People Movement Releve One-Piece Bodysuit",
      price: "128.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/76038421_020_b2?$an-category$&qlt=80&fit=constrain",
      title: "Free People Movement Releve One-Piece Bodysuit",
      price: "148 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/79994067_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie V-Neck Jumpsuit",
      price: "118.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80233208_031_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie V-Neck Jumpsuit",
      price: "79.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4115687810002_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie V-Neck Jumpsuit",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80249758_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Daily Practice by Anthropologie V-Neck Jumpsuit",
      price: "28.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/78542370_081_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie Lounge Around Jumpsuit ",
      price: "8.00",
    },
  ],
  Toddler Boy: [
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/OKBS22JULTB3PKDENIM1.html",
      title: "Toddler 3-Pack Straight Leg Jeans",
      price: "$90.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/CARBPWMAYSU23TB2PKMULTIPACK17.html",
      title: "2-Pack Everyday Pull-On Pants",
      price: "$18.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2Q262010.html",
      title: "Toddler OshKosh Originals Graphic Tee",
      price: "$8.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2M414211.html",
      title: "Pocket Jersey Tee",
      price: "$7.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2M414211.html",
      title: "",
      price: ".00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2P539010.html",
      title: "Toddler Classic OshKosh Overalls",
      price: "$32.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2O111610.html",
      title: "Product badgeToddler 2-Piece Plaid 100% Snug Fit Cotton Pajamas",
      price: "$12.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/CARBPWJANSP23TB4PKMULTIPACK1.html",
      title: "Toddler 4-Piece Shorts Bundle Set",
      price: "$69.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2N728310.html",
      title: "Toddler 2-Piece Halloween 100% Snug Fit Cotton Pajamas",
      price: "$18.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2Q354314.html",
      title: "Toddler OshKosh Originals Long Sleeve Jersey Graphic Tee",
      price: "$10.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_2N131710.html",
      title: "Toddler Stretch Chino Shorts",
      price: "$12.00",
    },
    {
      img: "https://www.carters.com/carters-shop-toddler-boy-clothes/V_OS23G04H.html",
      title: "Toddler cork sandals",
      price: "$10.00",
    },
  ],

  Shorts: [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80434871_064_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Beach Riot Glitter Bike Shorts",
      price: "88.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/67162057_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Splits59 Venus High-Waisted Rigor Skort",
      price: "124.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80490774_260_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "Beach Riot Balboa Holiday Glitter Stripe Shorts",
      price: "98 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80490626_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Beach Riot Balboa Shorts",
      price: "98.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80056955_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "My Beachy Side x Emily In Paris Freesia Beaded Shorts",
      price: "95.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80835622_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "LSPACE Soul Samba Shorts",
      price: "5.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4125024090025_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Corey Lynn Calter Tweed Skort",
      price: "48.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/76038256_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Free People Movement Way Home Shine Shorts",
      price: "10.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/68450725_061_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Free People Movement The Way Home Shorts",
      price: "10.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4125831920062_027_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie Canvas Shorts",
      price: "10.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4125652010002_026_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Maeve Tailored Skort",
      price: "18.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4125831920061_093_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Pilcro The Wanderer Shorts",
      price: "8.00",
    },
  ],
  Family Mathching: [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/79517447_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie Tiered Skirt",
      price: "78.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80598147_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Seafolly Marrakesh Skirt",
      price: "188.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/78830353_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Beyond Yoga Uptown Velvet Skirt",
      price: "99 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120732510012_062_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "En Saison Lisette Knit Skirt",
      price: "78.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120638570052_099_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Current Air Asymmetrical Tiered Skirt",
      price: "20.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120347470077_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Geisha Designs Lace Skirt",
      price: "98.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120464030109_011_b15?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Hutch Front-Slit Micro Mini Skirt",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120349290022_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Forever That Girl Wrap Skirt ",
      price: "40.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120646420008_001_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie Ruffled Tulle Midi Skirt",
      price: "58.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120929840006_028_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Favorite Daughter Gwen Midi Skirt",
      price: "98.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4139019030041_070_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Essentiel Antwerp Cole Metallic Mini Skirt",
      price: "35.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4120348690098_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "The Colette Skirt",
      price: "18.00",
    },
  ],
  Sweaters: [
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80831720_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "LSPACE Samba Sweater",
      price: "110.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/80224827_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Daily Practice by Anthropologie Hazy Daze Pullover Sweater",
      price: "98.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114356160023_090_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "By Anthropologie Fringed Colorblock Sweater",
      price: "348 .00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113086690088_025_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Maeve Cashmere Convertible Sweater Set",
      price: "328.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113086690097_068_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",

      title: "The Alani Cashmere Mock-Neck Sweater",
      price: "48.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113086690023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Maeve Cashmere Intarsia Sweater",
      price: "80.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114326950086_023_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Maeve Hourglass Cardigan Sweater",
      price: "68.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4113212060004_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "DOLAN Sheer-Sleeve Sweater Top",
      price: "28.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/78660081_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Varley Belgrave Knit Sweater",
      price: "58.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114611020026_000_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
      title: "By Anthropologie Embellished Ombre Sweater",
      price: "98.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114634430007_004_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Endless Rose Polo Sweater Tee",
      price: "8.00",
    },
    {
      img: "https://images.urbndata.com/is/image/Anthropologie/4114529100231_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640",
      title: "Maeve Penguin Cardigan Sweater",
      price: "68.00",
    },
  ],
};
const LinkItems = [
  { name: "New" },
  { name: "New Today" },
  { name: "New This Week" },
  { name: "Dresses" },
  { name: "Jackets" },
  { name: "Jeans" },
  { name: "Jumpsuits" },
  { name: "Pants" },
  { name: "Shorts" },
  { name: "Skirts" },
  { name: "Sweaters" },
];

export default function SimpleSidebar({ children }) {
  const [category, setSelectedCategory] = useState("New");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Box
          fontSize="10"
          minH="100vh"
          bg={useColorModeValue("gray.100", "gray.900")}
        >
          <SidebarContent
            onClose={() => onClose}
            setSelectedCategory={(category) => setSelectedCategory(category)}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
          </Box>
        </Box>
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Grid templateColumns="repeat(4,22%)" ml="5%" gap="7" mt="40px">
          {data8[category].map((item, i) => (
            <div key={i}>
              <Box>
                <img src={item.img} />
                 <Button
                     size="sm"
                     style={{
                     width: "100%",
                     colorScheme: "F7F7F7",
                  }}
                  onClick={()=>{
                    let data=JSON.parse(localStorage.getItem("Cart"))|| []
                    data.push(data8[category][i])
                    localStorage.setItem("Cart",JSON.stringify(data))
                  }}
                  variant="outline"
                >
                  ADD TO BASKET
                </Button>
              </Box>

              <Text>{item.name}</Text>
              <Text fontSize="12">{item.title}</Text>
              <Text fontSize="12">{item.price}</Text>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}

const SidebarContent = ({ onClose, setSelectedCategory, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      //   pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Browse by:
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => setSelectedCategory(link.name)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          textDecoration: "underline",
          //   color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              textDecoration: "underline",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Browse by:
      </Text>
    </Flex>
  );
};
