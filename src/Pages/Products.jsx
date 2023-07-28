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
  "Baby Deals": [
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwee223b6c/productimages/1P543610.jpg?sw=354&sh=444&yocs=4G_4E_"
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw56177106/productimages/1O951810_LV03.jpg?sw=354&sh=444",
      title: "Baby Chambray Romper",
      price: "$12.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw1ccc1fd0/productimages/1P330110_LV03.jpg?sw=354&sh=444",
      title: "Baby Sleevless Romper",
      price: "$9 .00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwc637c03d/productimages/1N046210_LV03.jpg?sw=354&sh=444",
      title: "Baby 3-peice construction short set",
      price: "$18.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw6a0f1199/productimages/1O878110_LV03.jpg?sw=354&sh=444",
      title: "Play Pajama",
      price: "$8.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw3986c2a0/productimages/1O928410.jpg?sw=672",
      title: "Baby Floral snap Romper",
      price: "$8.00",
    },
    {
      img: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw0536e15e/productimages/1O929910.jpg?sw=470",
      title: "Baby 1- peice watermelon romper",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw877cf7e2/productimages/1O877910_LV03.jpg?sw=354&sh=444",
      title: "Baby Tiger snap-up footie sleep & play pajama ",
      price: "$8.79",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw21cdae44/productimages/1O948810_1.jpg?sw=354&sh=444",
      title: "Baby 2-peice tee",
      price: "$14.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwbb4d8ca7/productimages/1O955510_LV03.jpg?sw=354&sh=444",
      title: "Baby 3-peice little short set",
      price: "$8.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwb4bfb9b5/productimages/1O966610_1.jpg?sw=354&sh=444",
      title: "Baby Embroidered floral frock",
      price: "$13.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe84ee07f/productimages/1P338110.jpg?sw=672",
      title: "Baby Fish Jersey Romper ",
      price: "$8.00",
    },
  ],

  "Deals for him": [
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw6e1056f2/productimages/39125511_1.jpg?sw=354&sh=444",
      title: "Kid Pocket Jersey tee",
      price: "$12.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw4997ca49/productimages/3N040012.jpg?sw=354&sh=444&yocs=4G_4E_",
      title: "Kid Shorts",
      price: "$6.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw2de06eea/productimages/3O889314_1.jpg?sw=354&sh=444",
      title: "Kid Canavas Trail Shorts",
      price: "$7.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe691e589/productimages/2Q354314_LV03.jpg?sw=354&sh=444",
      title: "Toddler long Sleeve shirt",
      price: "$12.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwbea68f3f/productimages/IM721OK.jpg?sw=354&sh=444&yocs=4G_4E_",
      title:"Kid Graphic shirt ",
      price: "$8.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe079d29a/productimages/3N130911_1.jpg?sw=354&sh=444",
      title: "Kid Stretch Chino Shorts",
      price: "$8.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw3ccb6187/productimages/3Q354213_LV03.jpg?sw=354&sh=444",
      title: "Kid Oshkosh's Original Long Sleeve",
      price: "$18.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw20b715ce/productimages/3Q262411_LV03.jpg?sw=354&sh=444",
      title: "Kid Oshkosh's Graphic tee Shirt ",
      price: "$7.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw3d5ed26b/productimages/3O961210_1.jpg?sw=354&sh=444",
      title:"Kid pull-on poplin Short",
      price: "$14.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwadc50cf0/productimages/2P016211_1.jpg?sw=354&sh=444",
      title: "Toddler Stretch Chino Shorts",
      price: "$8.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd62a60b1/productimages/CARS22JANKBTEESBASIC1.jpg?sw=354&sh=444&yocs=4G_4E_",
      title:"4-pocket tees",
      price: "$8.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw20ae806d/productimages/OKBS22JUNTB2PKUNIFSHORTS3.jpg?sw=354&sh=444&yocs=4G_4E_",
      title:"Uniform multi pack",
      price: "$10.00",
    },
  ],
  "Deals for her": [
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw470e0e2f/productimages/3Q261110_LV03.jpg?sw=354&sh=444",
      title: "Kid Flamingo hola hoop",
      price: "$8.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw608fb113/productimages/3N124811.jpg?sw=354&sh=444&yocs=4G_4E_",
      title: "Kid pull-on French Terry shorts",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw477a464d/productimages/IM724OK_LV03.jpg?sw=354&sh=444",
      title: "kid Mustang  Graphic tee",
      price: "$10 .00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa8c254b2/productimages/3O986211_1.jpg?sw=354&sh=444",
      title: "Kid Heart Print Jersey HandStand Skort",
      price: "$11.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw448efb23/productimages/3O171710_LV03.jpg?sw=354&sh=444",
      title: "Kid cat Bow jersey",
      price: "$8.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw517a6cb7/productimages/3O173910.jpg?sw=354&sh=444&yocs=4G_4E_",
      title: "Kid Floral Leggings",
      price: "$9.89",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwcd939c34/productimages/3O172410_LV03.jpg?sw=354&sh=444",
      title: "Kid Floral Book jersey tee",
      price: "$5.67",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw88ca3b17/productimages/OS23D04H_1.jpg?sw=354&sh=444",
      title: "Toddler Recycled Mesh Sneaker ",
      price: "$12.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw53af0372/productimages/OF22A10H_1.jpg?sw=354&sh=444",
      title: "Toddler Moxie Color Block Sneaker",
      price: "$14.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw54000249/productimages/YF22G03H_1.jpg?sw=354&sh=444",
      title: "Kid Slip-on Shoe",
      price: "$18.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw6763a10d/productimages/CF22C15H_1.jpg?sw=354&sh=444",
      title: "Toddler Rainbow Sneaker",
      price: "$20.00",
    },
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwb2325627/productimages/2P009210.jpg?sw=354&sh=444&yocs=4G_4E_",
      title: "Toddler 6 pack socks",
      price: "$15.00",
    },
  ],
  "Baby Girl": [
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
  "kid girl": [
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
  "Toddler boy": [
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
  "Family mathching": [
    {
      img: "https://www.carters.com/carters-family-matching/V_1P355910.html",
      title: "Baby 2-Piece Back To School 100% Snug Fit Cotton Pajamas",
      price: "$11.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_2P355910.html",
      title: "Toddler 2-Piece Back To School 100% Snug Fit Cotton Pajamas",
      price: "$11.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_3P712410.html",
      title: "Kid 2-Piece Back To School 100% Snug Fit Cotton Pajamas",
      price: "$16.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_1P602610.html",
      title: "Baby Littlest Boo Halloween Bodysuit",
      price: "$10",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_2P602410.html",
      title: "Toddler Little Boo Halloween Jersey Tee",
      price: "$15.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_3P718810.html",
      title: "Adult Love My Boo Halloween Jersey Tee",
      price: "$18.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_1P523010.html",
      title: "Baby 2-Piece Glow Skeleton 100% Snug Fit Cotton Pajamas",
      price: "$20.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_2P522510.html",
      title: "Toddler 2-Piece Glow Halloween 100% Snug Fit Cotton Pajamas",
      price: "$30.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_3P523210.html",
      title: "Kid 2-Piece Glow Halloween 100% Snug Fit Cotton Pajamas",
      price: "$35.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_1O121010.html",
      title: "Baby 1-Piece Santa Fleece Footie Pajamas",
      price: "$38.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_2O121010.html",
      title: "Toddler 1-Piece Santa Fleece Footie Pajamas",
      price: "$40.00",
    },
    {
      img: "https://www.carters.com/carters-family-matching/V_3O121010.html",
      title: "Kid 1-Piece Santa Fleece Footie Pajamas",
      price: "$41.00",
    },
  ],
  Shoes: [
    {
      img: "https://www.carters.com/carters-shoes/V_CF22F17H.html",
      title: "Toddler High-Top Boots",
      price: "$30.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_YF23G10H.html",
      title: "Kid Heart Buckle Boots",
      price: "$43.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_ES23D02H.html",
      title: "Baby Every Step Fisherman Sandals",
      price: "$48 .00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_OF22C31H.html",
      title: "Toddler Midnight Slip On Shoes",
      price: "$28.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_OF23P01H.html",

      title: "Toddler Casual Sneakers",
      price: "$48.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_OS22P05H.html",
      title: "Toddler Casual Water Shoe",
      price: "$30.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_CF23G05H.html",
      title: "Toddler Hiking Boots",
      price: "$28.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_YF22C12H.html",
      title: "Kid Ricky Casual Sneakers",
      price: "$38.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_CR07302.html",
      title: "Baby Hook And Loop Soft Sandal",
      price: "$25.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_EF22B05H.html",
      title: "Baby Every Step Sneakers",
      price: "$43.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_CS23P03H.html",
      title: "Toddler Fisherman Sandals",
      price: "$48.00",
    },
    {
      img: "https://www.carters.com/carters-shoes/V_OS23912H.html",
      title: "Kid Criss-Cross Sandals",
      price: "$33.00",
    },
  ],
};
const LinkItems = [
  { name: " Baby Deals" },
  { name: "Deals for him" },
  { name: "Deals for her" },
  { name: "Baby Girl" },
  { name: "Toddler Girl" },
  { name: "kid Girl" },
  { name: "Baby Boy" },
  { name: "Toddler boy" },
  { name: "kid boy" },
  { name: "Family matching" },
  { name: "Tops" },
  { name: "Bottom" },
  { name: "Pajama" },
  { name: "Shoes" },
  { name: "Clearance" },
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
