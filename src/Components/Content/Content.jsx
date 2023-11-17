import { Avatar, Button, Stack, Typography } from "@mui/material";
import {
    AddRounded,
    FacebookRounded,
    Instagram,
    Reddit,
    Twitter,
} from "@mui/icons-material";

import ImageSlider from "./ImageSlider";
import Subscribe from "./Subscribe";
import TabView from "./TabView";
import Bitcoin from "./Bitcoin";

import {
    image1,
    image2,
    image3,
    image4,
    image7,
    image8,
    image6,
    image12,
    image13,
    image17,
    image21,
} from "../../assets";
import { Link } from "react-router-dom";

// import { AnimationOnScroll } from 'react-animation-on-scroll';

const Content = () => {
    const slides = [
        { url: image1, title: "beach" },
        { url: image2, title: "boat" },
        { url: image3, title: "forest" },
        { url: image4, title: "bitcoin" },
    ];
    return (
        <>
            <Stack className="HomeBgColor Vertex_Content_Home" direction={"row"} p={"2.4em 3em"}>
                <Stack gap={"1em"} width={"50%"} mt={"3%"}>
                    <div>
                        <Typography variant="h3">Say Hello!</Typography>
                        <Typography variant="h4">To the Future of Finance</Typography>
                    </div>
                    <Typography variant="subtitle1">
                        Unlock the power of blockchain technology with Vertex. We're here to
                        redefine your digital financial experience, providing you with
                        secure, efficient, and user-friendly solutions. Whether you're new
                        to cryptocurrencies or a seasoned trader, Vertex is your trusted
                        partner on this transformative journey.
                    </Typography>
                    <img src={image13} alt="" className="Bear_Coin Bear_1" />
                    <Link to={'/signup'}>
                        <Button
                            variant="contained"
                            color="warning"
                            sx={{ width: "max-content" }}
                            startIcon={<AddRounded />}
                        >
                            Create Account
                        </Button>
                    </Link>
                </Stack>
                <Bitcoin />
            </Stack>

            <Stack className="MixBgColor Vertex_Content_Slider" direction={"row"} p={"2em 3em"}>
                <Stack
                    sx={{
                        width: "70%",
                        height: "30em",
                        margin: "0 auto",
                    }}
                >
                    <ImageSlider slides={slides} />
                </Stack>
                <img src={image21} alt="" className="Bear_Coin Bear_2" />
            </Stack>

            <Stack className="BgColor Vertex_Content_Main BitcoinImage" direction={"row"} p={"2em 3em"}
            >
                <Typography variant="h4">Discover the Benefits of Vertex</Typography>
                <Stack className="grid_view">
                    <div className="sub_grid">
                        <Typography variant="h5">Security</Typography>
                        <Typography variant="subtitle1">
                            Your digital assets are your wealth. At Vertex, we prioritize the
                            highest security standards, safeguarding your investments with
                            cutting-edge technology.
                        </Typography>
                    </div>
                    <Avatar
                        className="Avatar_img"
                        sx={{ background: "#fff", width: "8em", height: "8em" }}
                        src={image8}
                    />
                </Stack>
                <Stack className="grid_view">
                    <Avatar
                        className="Avatar_img"
                        sx={{ background: "#fff", width: "8em", height: "8em" }}
                        src={image7}
                    />
                    <div className="sub_grid">
                        <Typography variant="h5">Simplicity</Typography>
                        <Typography variant="subtitle1">
                            We believe in making blockchain and cryptocurrencies accessible to
                            all. Our platform simplifies complex processes, allowing you to
                            buy, hold, and trade with ease.
                        </Typography>
                    </div>
                </Stack>
                <Stack className="grid_view">
                    <div className="sub_grid">
                        <Typography variant="h5">Innovation</Typography>
                        <Typography variant="subtitle1">
                            Stay ahead of the curve with Vertex. Explore the latest
                            advancements in blockchain, including smart contracts and
                            decentralized applications (DApps).
                        </Typography>
                    </div>
                    <Avatar
                        className="Avatar_img"
                        sx={{ background: "#fff", width: "8em", height: "8em" }}
                        src={image6}
                    />
                </Stack>
            </Stack>

            <Stack className="BgColor Vertex_Content_Main" direction={"row"} p={"2em 3em"}>
                <Stack
                    sx={{ justifyContent: "center", alignItems: "center", gap: "3em" }}
                >
                    <img src={image17} alt="" className="Bear_Coin Bear_3" />
                    <Typography
                        variant="h3"
                        sx={{ width: "55%", textAlign: "start", mb: "0.5em" }}
                    >
                        Explore more!
                    </Typography>
                    <TabView />
                </Stack>
            </Stack>

            <Stack className="BgColor Vertex_Content_Main" direction={"row"} p={"2em 3em"}>
                <Stack
                    direction={"row"}
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Stack width={"50%"}>
                        <img src={image12} alt="" className="Bear_Coin Bear_4" />
                        <Typography variant="h4">Get in touch with us!</Typography>
                        <Typography variant="h6" mt={"2em"}>
                            Follow us on social media and also Subscribe the Vertex newsletter
                            and get the latest updates direct on your Email Address.{" "}
                        </Typography>

                        <Stack direction={"row"} gap={"2em"} mt={"2em"}>
                            <Button
                                sx={{ maxWidth: "fit-content", minWidth: "max-content" }}
                                color="primary"
                                variant="contained"
                            >
                                <FacebookRounded />
                            </Button>
                            <Button
                                sx={{ maxWidth: "fit-content", minWidth: "max-content" }}
                                color="warning"
                                variant="contained"
                            >
                                <Instagram />
                            </Button>
                            <Button
                                sx={{ maxWidth: "fit-content", minWidth: "max-content" }}
                                color="primary"
                                variant="contained"
                            >
                                <Twitter />
                            </Button>
                            <Button
                                sx={{ maxWidth: "fit-content", minWidth: "max-content" }}
                                color="error"
                                variant="contained"
                            >
                                <Reddit />
                            </Button>
                        </Stack>
                    </Stack>
                    <Subscribe />
                </Stack>
            </Stack>
        </>
    );
};

export default Content;
