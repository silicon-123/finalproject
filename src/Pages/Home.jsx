import React from "react";
import Final from "../Components/Carousel/Final";
import Final1 from "../Components/Carousel1/Final";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
  Grid,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Link as RouterLink } from "react-router-dom";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        "https://images.ctfassets.net/621t91s0mnkp/ZlV45wqVLj071vvKwkgtu/98f1b1d58e7e98df9fc3b3fbd16ab094/car_desktop_072523_hero_marquee.jpg",
    },
    {
      image:
        "https://images.ctfassets.net/5de70he6op10/g4Rao5dp4XYh9mHJ31Mku/d4fa659fb2753c2aba8ff20538ba126f/121322_Upto50Off_SelectGifting_HPGSecondaryBanner_LS.jpg?w=2882&q=80&fm=webp",
    },
  ];
  const data = [
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/7A9oOokf9FRtfIylHTOR0z/d4d608853f0ec1b8fc0e5c413e404805/car_desktop_072523_sec1_dealsbaby.jpg",
      title: "Baby Deals",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/PpUszDjJZ6Cn52b5cfhJP/1ebdc0d21c1e106757659fb32b92ba63/car_desktop_072523_sec2_dealsforhim.jpg",
      title: "Deals For Him",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/4obVKu5RMH8BssJc05ngtH/7bde1601746b833b8b9c0c8bf8e6011f/car_desktop_072523_sec3_dealsforher.jpg",
      title: "Deals For Her",
    },
    {
      img: "https://images.ctfassets.net/621t91s0mnkp/4QO99yChcfgWZ3BbEk25FI/bf5d9b24fa2c888181ca36e7d1b36c0a/car_desktop_072723_sec4_shoes.jpg",
      title: "Stock-up for Sale",
    },
    
  ];
  const data2 = [
    {
      img: "https://images.ctfassets.net/5de70he6op10/7xr3zj76r8uzB0cWfUrKQR/ed4322b5e2ed657b06321686489bb645/LS_M3_Home_Thursday.jpg?w=2640&q=80&fm=webp",
      title: "shop gifts forn the home",
    },
  ];
  const data3 = [
    {
      img: "https://images.ctfassets.net/5de70he6op10/4Coxu47V0tyfirEz2UcoJM/176476dd10f81019582c3e3de68eaefa/LS_M4_Winterwhites.jpg?w=2641&q=80&fm=webp",
      title: "shop all clothing",
    },
  ];
  const data4 = [
    {
      img: "https://images.ctfassets.net/5de70he6op10/6smg43UznC0EXEEvtUZOeK/2d857986576d95ecf780716a37fc0b77/LS_M5_BHLDN.jpg?w=2641&q=80&fm=webp",
      title: "shop the spring '23 collection",
    },
  ];
  const data5 = [
    {
      img: "https://images.ctfassets.net/5de70he6op10/3nbfFkkusdFDrzp6kA4OIl/8ea10bc434ae2397c6543085c9d3d01d/111422_HPG_RR_Furniture.jpg?w=856&q=80&fm=webp",
      title: "shop furniture",
    },
    {
      img: "https://images.ctfassets.net/5de70he6op10/CShsGv8tmOEkdHcEZKrZn/4496b2a68f8b9d4b5efee0ed2fb17690/RR_BeddingPillowsThrows.jpg?w=856&q=80&fm=webp",
      title: "shop beddding,pillows & throws",
    },
    {
      img: "https://images.ctfassets.net/5de70he6op10/5wTKXC5wjHWgVTJDtirqZG/09b9d97dbe5f7e80923d24f7221e35e2/RR_Candles_Default.jpg?w=856&q=80&fm=webp",
      title: "shop candles",
    },
  ];
  

  const data8 = [
    {
      img: "https://images.ctfassets.net/5de70he6op10/61SwHEwIBXGqyievjZO7vG/4399fed484247331197d235ddd824007/MTE_1_Giftcards.jpg?w=856&q=80&fm=webp",
      name: "The Sure-to-Please Shop",
      title: "The best present?The one they pick themeselves!",
    },
    {
      img: "https://images.ctfassets.net/5de70he6op10/5rXqHDYoqXytAscv6my5TW/26470fa9cfec82723705866d62c341bb/MTE_3.jpg?w=856&q=80&fm=webp",
      name: "The Art of the Dress",
      title:
        "Introducing a lovingly curated collection of sculptural silhouettes,enlightened details,and everlasting impressions.",
    },
    {
      img: "https://images.ctfassets.net/5de70he6op10/4lWXFXOjiia6HPkbeCNQGK/47e13656ccbcb123efc765f17b3d903d/MTE_3_Resortwear.jpg?w=856&q=80&fm=webp",
      name: "Destination:Vaction",
      title:
        "If sunshine is state of mind, considerthese looks virtual boarding pass.",
    },
  ];
  return (
    <>
      <Center>
        <Box
          marginTop={10}
          position={"relative"}
          height={"100px"}
          width={"90%"}
          overflow={"hidden"}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <Box
                key={index}
                height={"-99xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}
              >
                {/* This is the block you need to change, to customize the caption */}
                <Container
                  size="container.lg"
                  height="100px"
                  position="relative"
                >
                  <Stack
                    spacing={6}
                    w={"full"}
                    maxW={"lg"}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)"
                  >
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                      {card.text}
                    </Text>
                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>
      </Center>

      <Grid templateColumns="repeat(3,30%)" ml="5%" gap="7" mt="40px">
        {data.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="100%" />
              </Box>
            </RouterLink>
          </div>
        ))}
      </Grid>

      <Grid ml="5%" mt="40px">
        {data2.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="95%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  mt: "-100px",
                  position: "relative",
                  bottom: "70px",
                  borderRadius: "none",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>
      <Grid ml="5%" mt="40px">
        {data3.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="95%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  mt: "-100px",
                  position: "relative",
                  bottom: "70px",
                  borderRadius: "none",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>

      <Grid ml="5%" mt="40px">
        {data4.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="95%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  mt: "-100px",
                  position: "relative",
                  bottom: "70px",
                  borderRadius: "none",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>

      <Grid templateColumns="repeat(3,30.2%)" ml="5%" gap="7" mt="40px">
        {data5.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="100%" />
              </Box>
            </RouterLink>
            <Center>
              <Button
                style={{
                  width: "auto",
                  backgroundColor: "white",
                  mt: "-100px",
                  position: "relative",
                  bottom: "70px",
                  borderRadius: "none",
                }}
              >
                {item.title}
              </Button>
            </Center>
          </div>
        ))}
      </Grid>
      <Text style={{ marginLeft: "68px" }}> You May Also Like</Text>
      <hr />

      <Final1 />

      <Text style={{ marginLeft: "68px", marginTop: "90px" }}> Trending</Text>
      <hr />

      <Final />

      <Center>
        <Text style={{ marginLeft: "68px", marginTop: "90px" }}> More</Text>
      </Center>
      <hr />

      <Grid
        templateColumns="repeat(3,30%)"
        ml="5%"
        gap="7"
        mt="40px"
        backgroundColor="whitesmoke"
      >
        {data8.map((item, i) => (
          <div key={i}>
            <RouterLink to="/products">
              <Box>
                <img src={item.img} width="100%" />
              </Box>
            </RouterLink>
            <Text fontWeight="300">{item.name}</Text>
            <Text fontSize="12">{item.title}</Text>
          </div>
        ))}
      </Grid>

      <Center>
        <Text
          style={{
            marginLeft: "68px",
            marginTop: "90px",
            marginBottom: "50px",
          }}
        >
          {" "}
          Exclusions apply.See details
        </Text>
      </Center>
      <hr />

      <Text style={{ marginLeft: "68px", marginTop: "30px" }}> About Us</Text>

      <Text style={{ marginLeft: "68px", marginTop: "30px" }}>
        {" "}
        Our mission at Anthropologie has always been to surprise and delight you
        with unexpected, distinctive finds for your closet and home. We source
        and craft all of our products with care, ensuring that any treasure you
        find at Anthropologie is unique, just like you. Explore our dresses shop
        to find styles and fits perfect for any occasion, from cocktail party
        dresses to wedding...
      </Text>
    </>
  );
}
