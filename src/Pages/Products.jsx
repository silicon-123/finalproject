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
  "Toddler Girl": [
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw422d196b/productimages/2P902710_1.jpg?sw=354&sh=444",
      title: "Toddler Owl Jersey Tee",
      price: "$15.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa0c70143/productimages/rtfokeotex1.jpg?sw=354&sh=444",
      title: "Toddler Pull-On Flare Pants",
      price: "$12.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw1e7eb780/productimages/CAR_F23_PICT_TAKING_273_E%20-%20Copy.jpg?sw=354&sh=444",
      title: "Toddler Girls Basic Denim Jacket",
      price: "$22 .00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw71a2a8f7/productimages/2P527010_1.jpg?sw=354&sh=444",
      title: "Toddler Floral Print LENZING™ ECOVERO™ Dress",
      price: "$18.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw22515449/productimages/CS23R04H_2.jpg?sw=354&sh=444",
      title: "Toddler Heart Water Shoes",
      price: "$15.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw8bc2c6bc/productimages/2P561110_1.jpg?sw=354&sh=444",
      title: "Toddler Apple Jersey Dress",
      price: "$10.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw02744078/productimages/2Q261514_LV03.jpg?sw=354&sh=444",
      title: "Toddler Strawberry Plant Jersey Tee",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe3a2d3e5/productimages/CR07250.jpg?sw=354&sh=444",
      title: "2-Pack Bracelets",
      price: "$6.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe3a4b48c/productimages/B2237392_1.jpg?sw=354&sh=444",
      title: "Toddler Floral Print Fleece Lined Jacket",
      price: "$32.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7db97e42/productimages/CARACCBASICSSU23TGKG20PKMULTIPACK1.jpg?sw=354&sh=444",
      title: "20-Pack Stretch Cotton Undies",
      price: "$36.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dweb115eb9/productimages/OF22M04H_1.jpg?sw=354&sh=444",
      title: "Toddler Floral-Print Fashion Boots",
      price: "$23.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw37249fe1/productimages/2N728310_LV03.jpg?sw=354&sh=444",
      title: "Toddler 2-Piece Halloween 100% Snug Fit Cotton Pajamas",
      price: "$10.00",
    },
  ],
  
    
    
  "kid Girl": [
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
  "Baby Boy": [
    {
      img: "https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/a6ab0650c708013b47180ead9ecbf798.yottaa.net/v~4b.2b7/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw0be97a79/productimages/1P543210.jpg?sw=354&sh=444&yocs=4G_4E_",
      title: "Baby Zip-Front Fleece Hoodie",
      price: "$14.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa0c70143/productimages/rtfokeotex1.jpg?sw=354&sh=444",
      title: "Baby Pull-On Fleece Joggers",
      price: "$8.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw5810d046/productimages/1P334510_LV03.jpg?sw=354&sh=444",
      title: "Baby 2-Piece Henley Bodysuit Pant Set",
      price: "$10.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw05f4e3b5/productimages/1P544910_LV03.jpg?sw=354&sh=444",
      title: "Baby Grandpa Long-Sleeve Bodysuit",
      price: "$7.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw143ddf97/productimages/1P334710_LV03.jpg?sw=354&sh=444",
      title: "Baby 2-Piece Camo Bodysuit Pant Set",
      price: "$10.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa6ecedc4/productimages/1P545110_LV03.jpg?sw=354&sh=444",
      title: "Baby Best Bros Long-Sleeve Bodysuit",
      price: "$7.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw85a92b72/productimages/1P545610_LV03.jpg?sw=354&sh=444",
      title: "Baby Auntie Long-Sleeve Bodysuit",
      price: "$7.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw16922d49/productimages/1P338010_LV03.jpg?sw=354&sh=444",
      title: "Baby Dinosaur Striped Romper ",
      price: "$7.00",
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
      price: "7.00",
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
 "Top":[
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw02744078/productimages/2Q261514_LV03.jpg?sw=354&sh=444",
      title: "Toddler Strawberry Plant Jersey Tee",
      price:"$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwf9959d84/productimages/2Q221713_LV03.jpg?sw=354&sh=444",
      title: "Toddler Daydreamer Jersey Tee",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwf4217e53/productimages/2P987515_LV03.jpg?sw=354&sh=444",
      title: "Toddler OshKosh Originals Graphic Tee",
      price: "$7.00",
    },
    {
    img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw6428b3b5/productimages/3Q261116_LV03.jpg?sw=354&sh=444",
    title: "Kid Llama Jersey Tee",
    price: "$6.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwb168812a/productimages/2Q221711_LV03.jpg?sw=354&sh=444",
      title: "Toddler Mommy's Mini Jersey Tee",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe4a8cd7a/productimages/2P988019_LV03.jpg?sw=354&sh=444",
      title: "Toddler All Smiles All Day Jersey Tee",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwac9650e2/productimages/2P751417_LV03.jpg?sw=354&sh=444",
      title: "Toddler OshKosh Originals Graphic Tee",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwa197694a/productimages/3O734919_LV03.jpg?sw=354&sh=444",
      title: "Kid Speed Machine Jersey Tee",
      price: "$6.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw6b3b9436/productimages/3O902711_LV03.jpg?sw=354&sh=444",
      title: "Kid Striped Jersey Tank",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw14872b60/productimages/3O986410_1.jpg?sw=354&sh=444",
      title: "Kid Lace Pocket Jersey Tank",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw57423580/productimages/2Q262211_LV03.jpg?sw=354&sh=444",
      title: "Toddler OshKosh Originals Graphic Tee",
      price: "$5.00",
    },
    {
      img: "https://api.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwb2d395ab/productimages/2Q262210_LV03.jpg?sw=354&sh=444",
      title: "Toddler OshKosh Originals Graphic Tee",
      price: "$5.00",
    },
  ],
  "Bottom": [
    {
      img: "https://www.carters.com/carters-bottoms/V_2N357710.html",
      title: "Toddler Classic True Blue Wash Jeans",
      price: "$28.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_2N357910.html",
      title: "Toddler Boot-Cut Heritage Rinse Jeans",
      price: "$34.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_2N131710.html",
      title: "Toddler Stretch Chino Shorts",
      price: "$18 .00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_1P539010.html",
      title: "Baby Classic OshKosh Overall",
      price: "$31.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3N386911.html",
      title: "Kid Skinny Leg Heritage Rinse Jeans",
      price: "$35.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3O984410.html",
      title: "Kid Paperbag Waist Belted Button-Front Skirt",
      price: "$18.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3P313010.html",
      title: "Kid Active Jersey Baseline Shorts",
      price: "$6.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_2O973210.html",
      title: "Toddler Active Mesh Shorts",
      price: "$10.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3P534810.html",
      title: "Kid High-Rise Flare Jeans",
      price: "$19.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3P292910.html",
      title: "Kid Floral Print Tiered Pull-On Skirt",
      price: "$20.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3N376010.html",
      title: "Kid Straight Leg Tinted Wash Jeans",
      price: "$34.00",
    },
    {
      img: "https://www.carters.com/carters-bottoms/V_3O173810.html",
      title: "Kid Leaf Leggings",
      price: "$17.00",
    },
  ],
  "Shoes": [
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
