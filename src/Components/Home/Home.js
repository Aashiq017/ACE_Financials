import React, { useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CloseIcon from "@material-ui/icons/Close";
import { Popover, IconButton } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { useDispatch } from "react-redux";
import { setLoc } from "../../Features/Navigation/NavigationSlice";

import intro1_wall from "./Intros/intro1_wall.png";
import intro1_img from "./Intros/intro1_img.png";
import intro2_wall from "./Intros/intro2_wall.png";
import intro2_img from "./Intros/intro2_img.png";
import intro3_wall from "./Intros/intro3_wall.png";
import intro3_img from "./Intros/intro3_img.png";
import content1 from "./contents/content1.png";
import content2 from "./contents/content2.png";
import content3 from "./contents/content3.png";

const intro1_style = {
  backgroundImage: `url(${intro1_wall})`
};
const intro2_style = {
  backgroundImage: `url(${intro2_wall})`
};
const intro3_style = {
  backgroundImage: `url(${intro3_wall})`
};

function Home() {
  const dispatch = useDispatch();

  const Loc = "home";

  dispatch(setLoc(Loc));

  gsap.registerPlugin(ScrollTrigger);

  const introAnim = () => {
    const intro = document.querySelector(".home__intro");
    const intro2 = document.querySelector(".Intro2");
    const intro3 = document.querySelector(".Intro3");

    const tl2 = gsap.timeline();

    tl2.from(intro2, 2, { xPercent: -100 }).from(intro3, 2, { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: intro,
      markers: false,
      start: "top top",
      end: "+=3000",
      scrub: false,
      pin: true,
      anticipatePin: 1
    });
  };

  useEffect(() => {
    introAnim();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(
    '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(250, 250, 250); margin-right: -10px;"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path></svg>'
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(anchorEl);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="home">
      <div className="home__tabIcon">
        <IconButton>
          <ArrowForwardIosIcon
            fontSize="large"
            style={{ color: grey[50], marginRight: -10 }}
            onClick={handleClick}
          />
        </IconButton>
      </div>
      <Popover
        id={id}
        open={open}
        className="home__popover"
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div className="popover__">
          <div className="popover__new">
            <h4>
              What's New{" "}
              <IconButton onClick={handleClose}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </h4>
            <h6>
              <span>White Paper:</span> The Benefits of Running Your Entire
              Business on One System
            </h6>
          </div>
          <div className="popover__content1">
            <h4>Chain of Hotels</h4>
            <h6>Truly comprehensive software suite for chain of hotels</h6>
          </div>
          <div className="popover__content2">
            <h4>Wellness & SPA</h4>
            <h6>Have an enquiry about our Spa & Wellness solutions?</h6>
          </div>
          <div className="popover__content3">
            <h4>Large Enterprise</h4>
            <h6>Tired of painful ongoing ERP upgrades and version lock?</h6>
          </div>
          <div className="popover__content4">
            <h4>Global, Multi-Subsidiary Business</h4>
            <h6>Truly comprehensive software suite for chain of hotels</h6>
          </div>
        </div>
      </Popover>
      <div className="home__intro">
        <div className="Intro1" style={intro1_style}>
          <div className="Intro__content">
            <div className="Intro__contentText">
              <h2>Smartest Way to Manage Your Property</h2>
              <h4>
                The 100% web-based HMS Solution for hotel, motel, inn and
                resorts
              </h4>
              <h3>
                <Link to="/services">
                  AceFinancials <ArrowForwardIcon fontSize="large" />
                </Link>
              </h3>
            </div>
            <img src={intro1_img} alt="" />
          </div>
        </div>
        <div className="Intro2" style={intro2_style}>
          <div className="Intro__content">
            <div className="Intro__contentText">
              <h2>ACE Business Intelligence</h2>
              <h4>For faster and more useful data analysis</h4>
              <h3>
                <Link to="/hotels">Read more..</Link>
              </h3>
            </div>
            <img src={intro2_img} alt="" />
          </div>
        </div>
        <div className="Intro3" style={intro3_style}>
          <div className="Intro__content">
            <div className="Intro__contentText">
              <h2>Business Automation</h2>
              <h4>
                Comprehensive solution for end to end business automation and
                intelligent decision making.
              </h4>
              <h3>
                <Link to="/analytics">Read more..</Link>
              </h3>
            </div>
            <img src={intro3_img} alt="" />
          </div>
        </div>
      </div>

      <div className="home__content">
        <div className="content_head">
          <h1>LEADING HOSPITALITY SOFTWARE SUITE</h1>
          <h3>
            ONE COMPLETE SYSTEM INCLUDING ACCOUNTING, LOYALTY AND BUSINESS
            INTELLIGENCE
          </h3>
        </div>
        <div className="content__1">
          <h5>
            Sunshine Systems is a leading IT solutions provider catering to
            domains such as Hospitality, Manufacturing, Loyalty, and bespoke
            software development and Data warehousing solutions.
          </h5>
          <img src={content1} alt="" />
        </div>
        <div className="content__2">
          <h5>
            Sunshine Systems was founded in 2002 and is headquartered in India.
            Sunshine systems today has global offices in the US and UAE. It has
            built a reputation in implementing hospitality solutions across
            major hotels internationally while also developing and customizing
            solutions as per clients requirements in the manufacturing sector.
          </h5>
          <img src={content2} alt="" />
        </div>
        <div className="content__3">
          <h5>
            Sunshine Systems today supports over 35 international hotels and
            resorts, 10 major manufacturing companies, 4 corporates for Business
            Intelligence and Data warehousing solutions.
          </h5>
          <img src={content3} alt="" />
        </div>
      </div>
      <div className="content__clients">
        <h4>Over 40+ Hotels Run Their Business Better with ACE Financials</h4>
        <div style={{ display: "flex" }}>
          {/*<div className="content__clientSideLeft"></div>*/}
          <div className="content__clientsBox">
            <div className="box_clients">
              <img
                src="https://images.all-free-download.com/images/graphiclarge/le_meridien_107418.jpg"
                alt=""
              />
              <img
                src="https://somewhere-hotels.com/wp-content/uploads/2017/01/logo_original_500x120.png"
                alt=""
              />
              <img
                src="https://www.radissonhotelgroup.com/uploads/Brand%20Resources/Radisson/RADISSON_RGB_LOGO.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/originals/83/8c/6c/838c6c3137a027f19364d1129b930f70.jpg"
                alt=""
              />
              <img
                src="https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/hotelmanagement/1552326388/Sheraton-Full-LockUp-1.png?fxs58ITvR367V7_qRtHitdIfgScL_atH&itok=Hg1cCznG"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Aloft_Hotels_logo.svg/1200px-Aloft_Hotels_logo.svg.png"
                alt=""
              />
              <img
                src="https://thepointe.ae/assets/themes/the-pointe/vendor/images/logo_en.png"
                alt=""
              />
              <img
                src="https://d2a5i90cjeax12.cloudfront.net/Member%20Documents/MeydanLogo5d63884a59071.png"
                alt=""
              />
            </div>
            <div className="box_clients">
              <img
                src="https://stafftravel.voyage/_assets/UHZtRWJkSE5naEQ5M2w0Z3ZvYjg3QT09"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Kempinski_Hotels_%26_Resorts_Logo.svg/1280px-Kempinski_Hotels_%26_Resorts_Logo.svg.png"
                alt=""
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAdVBMVEX///8AAABzc3Pc3NxgYGDMzMzv7+/AwMATExPz8/O2tra+vr5tbW2EhIT29vY+Pj6fn5/V1dVOTk44ODiZmZlVVVXj4+N8fHxaWlpjY2Orq6t5eXkfHx+Pj4/IyMgxMTEiIiIYGBhKSkopKSlCQkKTk5OlpaVYYAnHAAAEZUlEQVR4nO3ae3eaMACHYahAK6gFBbzU2tv0+3/E5UYgbEUOK9izvs8fO5gRSH5gCKmeBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/EN53uHXjprXzO6xu3bpJ3XUk8XDrxk2r8664deOmdb773NOtGwfcTBhmcXR9tyzLkvEbc1uFGBZPV/eKfsLoGYg+hlf3in7CM5UorO8eRVTOpzqVjWK1CIKFKgqLYHdWW/EuKNRA4kRRFovlIq8PkQbLZVGKI2yXDXI2Uq6rT3kr7sV2uW9fgdVuvwzKRkF0/lBTvPXhizrbzUYxFxtvqigRWzqUVGzFqlHNKGatKaj6OBNd+WOOOmt+ThtnzWTBrtWUgyxc1p/TRuXrN+6/c6J4UUX9orDP1qRnFP6+Pqt+5Wk9xB/diM9O5QmycKJ4VEX9orDXtHCiKNbGo9nz7UnM3XUv46qKCe3stMTkVkVcqpPcz2Zh7tsbdlSDo/DNcBb5ThTOwWf2mKu12PxVlR90Hbd7W124Nh9T2wqVyrH0xjY8irRuclcUm0alqnwjYnn23bmdrL1diH9Mn5/EZjVcJu/ZF3W3y8AoHqqBxTuKq9sjCjW4mjUgOWim8lIHjX1j2ZB78c+z/rwUm+9f2tVrBkbxrHuvu/XcI4qw8Z936tpv3IHzXZ2hPo+Mxj+es+mW0AZGcdqY5574hu8PJhe/6eQ1x4rwWH/1V/p6y1r17ETuutUDhllLPVZHCvLZmAlYA6O4v5iLLDv91yhCr/0w9U2PDvqo8oRH2w75fcj0TVbokuitrrmZIoyBUSSRvvByX+/SL4rqWSqfrCuvNef3zeDz4tuB0zu81JUnWCIYGoW3Vjut5ffERKHGijTXzqXXiqJsVF948/lKjgbVtEtu5ytRKCdWz7Z10em8eNDVeyyq/KPBUcjGq/KZE4VzcLnnRyw0b4qtc6uYHr43y1rTqUh+efzL1/e9pTOKbUcU8pZOUnVb511RqCdIWtdvTc/17KR0C/XAWT87ZCPvxui9Y3gUYg4UfKi+9HiY1rfFwe21HjiXbuFOn9OODzLJ8dfdh0eR2Tu8RxQXewA5nYgz7bU6uax50mWhOejMr19m5bv6+C/qnW+mnVGoBqoL2IzCvo79Kp0plm96o4aP6kiyohw45VhiZ557X72oqZxf8zALY/UgGX8Fx4niVRX1jUK9fSSeG0XNjSI1t8y2cbH1EBGp55Bv/0h98tXA2Ro+Jli96Vy6+TyK2Gssg3dGYV5V1FW+6H3q56KcYuS613WTfB3MvGgcLPbGVy/oFX8u6KWfLOgFhaqy3e3UBT6I3Up9hFoRqT2DauQXOwWBdxLHbgyAiTrpQRQ21rjyXbBTU4vsSefwkU+yvvnNl3lXZTn+QoXxzaOYElFY/KHQCuOkx5+PV4kwQWuA7+my4AdIxsLvcOvGTYsfK1pFRxQ/7Ces/LAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLh+A46qNRspQExMAAAAAElFTkSuQmCC"
                alt=""
              />
              <img
                src="https://bikesiliconvalley.org/wp-content/uploads/Grosvenor-logo.jpg"
                alt=""
              />
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBETExISFhUXFxYYFRgVFxUWGRcXFRcXFxcVFxoYHSggGBolHRUVIjMhJSkrLi4vFx8zODMtNygtLysBCgoKDg0OGxAQGi0lHyUtLS0tMC0tLSstKy0tLS0tKy0tLS0tLS0tLS0tLS0tLSstLS0tLSstLS0tLS0rLS03Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAEkQAAEDAgMFBAUGCwYHAQAAAAEAAgMEEQUSIQYxQVFhEyJxgRQyQpGhI0NScrGyFiUzNGJzksHR4fAHFVOzwvE1RGN0gqLSJP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEBAQACAwEBAQEAAAAAAAAAAREhMQISQVFhwYH/2gAMAwEAAhEDEQA/APuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLw+VoIBcBc2Fza55DmUHtERAREQEREBERAREQEREBERAREQEREBERAREQEWLrF0HpFyVOIQx3L5Y2W35ntb9pUTUbaULTYTB55RhzyfDKLFTYmrCiq34TTy/m9BUO5OmyxN8dSV5NLiUoJlqIKZnEQtzvt1c/RviFPb8NTuJ4pFTszzSNY3qdT4DeT4KvUpkr6mGcsdHTQnNFm0fK8iwfbgwa+P2RVP6K2U+jQy19QN8rzmY09ZD3R5DzU9TemsJqKqeKOJgc50UTcwsAT3nu1uOnJZ3U7WULK5sPrGzRMkZfK9ocLixsRcXHBdK6NCIiAiIgIiICIiAiIgIiICIiAiLlr8QjgYXyuDGDeSfgOZ6BB03XLX4jFC3NLIxg/ScBfwvvPQKtjFKyt/Nmejwn56UXe4c42HcOp94XZQ7I07D2kmaol4vmJf7gdAFnd6Tfxqdti15tS09RUdWsLWeb3bvcnbYtLujpacfpudK4fsix+Ck9ncSbUwdo1mSznMLdDlLCRbTTkfNSgCmW/TFYGA1z/ymJSeEUUbPjvT8C4nflZ6uX68zre5tlaFiyvrDEFS7HULNRTMJ5vLnn/3JUvT0ccYsxjGj9FoH2LcufEK1kMbpJCA1oJJP9b1ckMxqxbEoqeJ0srgGjzJPBrRxPRV2PDp8Q+Uqs0VP7FO0lrnjg6ZwsR9X7F7wahfWStrKltmjWmhO5jTulcNxefhp0VsAWe+ztwzGGlgc4NayONpdZoAFgL6dSqZPNUT01NBK856yUvc3d2dO0hxaLcLZfepjbEmZ1LRj56S8n6qLvO9+nuXnBm9viVVN7EDW08XK+jpLcrHTwUvNxL2tELA0BoFgAAByAFgFsWAsro0IiICIiAiIgIiICIiAiIgIi11EoY1znEANBJJ4AakoODHsajpYs77lxNmMbq57juaP4qGw3AZJ3iprrOf83BvjiG8XG5z+v8redm6c1c5r5hpctpWH2Yxcdpb6Ttdf5K2ALHfKZpYKv7SY4YyKeAZ6mQWY0ewCPyj+QHVbNqMWfE2OKEB08ziyO+5thdz3dAFjCMKhoo3yyPvIe9NPIRdx8TubyCtt6hrr2dwwUtOyK9yLlx+k9xJcfefdZSd1UzjdTWEiiY1kW41EwNj+rZ7XifgsU9RVU1XTRTTidk/aAEsaxzHMbm0y72qTyhq23WHPA3kKA2vr5GMiihdllnkEbXfQG97/ACA+K0RbC0XzjHyu4uke4uPXQ/YrvOQ1ZsyqMn4xqyzfS0zu9ymmHs9Wtt/V107S1Rhiio6YWll+TiA+bYBZ0nQAcf4KUw2kio6drAQ1jG95ziBc73PceZNypeeBItC9KEwzailqJuxhkzusSSGuy2ba+p8QpOuqhFG+R25jXOPg0X/ctbF1VI6oGtr6t3qU0XZM5XA7R9ut7Dz6qT2HozHRRF3ryXleeZkJcL/+JaFVzC7+7KaE/la6cF/O0ji9zvJoZ7+i+jRNAaANwFh4DcsePesx6REXRoREQEREBERAREQEREBERAVa27kJgigabGolZFfk0m7z7grKqxtXpVYY4+qJnNP1nss396z5dJVipoWsY1jRZrQGtHIAWA9wW1YCytKhsfwQ1HZPZIYpYnF0bwA61xYgg7wVwxbJ9o4PrJ31BBu1hAZEDzyDefH4qz2WCs+s1MjwxoaLAAADS24AcFWKd3pWKOkGsdI0sB5zSXD7eDdF0bS4y9pbTU/eqZdG8om8ZX8rDctFQ9mG0TI4wXyuOWMe1LM7e8jfv1PSwUtS1hj/AEjFS4ax0kZbf/rS3BHk3RWKvq2RRvkebNaLuPQfvUfsvhPo1OGON5HEvld9KR2rj4cPJQ9Y7+8KnsGm9LA4GZw3SyDdECN4HH/ZNyf1eoYGQ0TYnVdwvb3Afm4W+q0D6TtD1v1WKDDH4g4VFUCIL3gp9Rpwkl5k77L1Vs9OrRB/y1MWulA9WSXe2PqG63HiFbbWSTUir4PE04pVFoAbDDFE0AAAZrvIAH9arZt48ugjpmHv1MjYx0aDme7yA+KxsT3/AE2b/FqZbfVZ3W/w8lzMqWy4hPUuPyNGxzAeHanWQjqG6e5T4fG2NglxVrWj5Okh06SS2AH7H2dVawFWthoHdg+okFpKl7pT0adGDwsL+asy149asERFpRERAREQEREBERAREQEREGCVEbTYZ6TTuY05ZGkPjd9GRhu3+HmpKrY50b2tOVxa4NPIkEA+RVH2MwaspJKiWpJEYYbjOH5yNc4sTwDt+uqz5X4lqbwTadj7RT2hqG6PY/u3O7MwnRwNr/x3mwhyouD47T4pI6Galbo0uYScxsCL62BadRuKk/wLiH5OorIh9GOdwHxufis+Plc45SX8WOepaxuZ7mtA3lxAA8yqzVbSPqHGKgZ2jtzpnAiKPmbn1z06cUdspRRfKVD3yAcamUuHxsCvP4Rh/wAjh0Ha20zBvZwR9b6ZvAb+CW36rZFFBhsL5ZXmSaQ9551kmfwawcB04L3geGSyS+mVQ+UItDFvEDD/AKzxP9DTBhkdMfS66dsk1tHP0ZH+jEzn1GvgvL62pr+7Th8FOfWncLSSDlE3e0H6RRGzGcTkqJDR0ju98/MN0LToWjnIeV9Ps6q90WHULuzbYMbaMcXSO0F+ZJ1KkMMw+GlhyMDWMGriba6aveeJ03nkq9SE4jVNlsfRIHXivp20o0z2Pst4f7q8/wDRM7K4UaamYx2sjrvlJ3mR+rrnpoPJd2K1HZwSyfQY937LSVVdrdtHUdQ2JsQcMrXOJJBIJIs33FT+OUrqikljZo6SMhubS19deSSzMi78is0GIGlwyljiGapnbeJvG8pzGQ9AHXv/ADXmrw8BkGFxOJc60lW8b8l7uJ43cbAdLc0ih9Ay3IqK+RoZEwbmNAsGgeywAanS9vFWLZvBDTse57s88pzTSc3fRH6I4BZk1mcpmOINAAAAAAAHADcF7RF1bEREBERAREQEREBERAREQEREBeXNuvSII+hwengL3RRMYXesWjf/AAHQKn43iB9IlZ6ZWgB1skEHq9A+3e8Vfn7lRsXxMNqZWf3pLAQdGPgaWDT2XEajqufmzZw4KajiJDm4dXVL+DqtwA+Jy/BT0dPicgDR6NSR7gGDtHgdPYHkuemimk9TGmu+qynP2Lrbs5O/1sSqXD9DIz7LrMn5/hjdR7LU8bu1nc+eQa9pUOzBv1QdGhK/a6ljORjjNJwjhGckjhcaD3rU3YmlJBlM0xH+NI53wFgpWnjpaZtmdhEONsrff/Nbmz+LygjhtVXG9X8jBfSBh7z7ajtXDh0HwVrggaxoa0BrQLADQADgAoWr2woY9O3Y48BHeQn9m64zj9XPpS0TwP8AEqfk2+OUauSWROE9XUULyJJY4nFmoc9rTltrcF25QNVtG+dxhoGCRw0fM7SKPrf2z4fFZbstJOQ6uqDLx7JnciHiBq7zsrJS0zY2hjGta0bg0AAeQTmr2itn8AZT5nucZZ36ySu9Y9B9FvRTQCyi1JiiIioIiICIiAiIgIiICIiAiIgIiICIiAQtcsDHCzmtcOTgCPivd1lBC1OydDJ61NF5DKfe2y43bCUHCJ48JZf3uVlJQFT1n4mRWfwDoeLJD4yy/wD0t8GxdA3UUzT9dz3/AH3FWBFPWfhkc1Jh8MX5OKNn1WgfYujKsotKWREQEREBERARYJWA5B6REQEREBERAREQEREBYLgsqo7UOfPVU9CHuYx7XSTFpsTG24DAeRIN/JS3EqxsxOAuyCaIu+iHtv4Wutzahhc5oc0ub6wBBIvuuN4UM7ZGhMeT0aMabwLP8c/rX81C7GUr4sQxCN7y8tbCA53rFovkueJy5R5LO2Xk2u/G3n+9cMAJsRUXF9D8k7fzVoCquOf8VwvwqP8AKcrUFfHuk+o/aA//AJKn9VJ9wrh2WrGMw+ldJI1vybdXuAufE8V3bQfmlT+qk+4VWNjNm4pKWGapaJXFgEbZLOZHGNGta06agXJ6qXd4S9rlT1Ubxdj2uHNpDh8FtuqVtLhbKENraUdkWOaJmN0ZJG5waQW7ri679scQkEUEULi19TI2MOG9rTq5w62t7ynt+rqclxOBrsrpog7kXtB9xK3GpZmDM7cxFw24uRzA32ULR7IUTI8no8b+bngOeTxJcdQT0UBQYYafGIYw5xj7F5iDjcsaSbsud4Dr26FPaw2rzLUMbbM5rbmwzEC5O4C+8rz6ZHnyZ259+W4zW523qr/2jh3o9PkNnekxZTydZ+U++ylcH2cp6chzWZpdc0rtXuJ9Yk9Vdu4bylpZmtBLnAAbyTYDxJWqmr4pL5JY3235XB1vGyqdLSNxCtqXT3dDTvMUcVyGl7bh73DjqFI4pstBlL6djYJmAmN8QDNR7LgNHA7jdT2vZyn4KhjwHMc1zTuLSCD5hYFXH3++3uevqO7fXvcvNVz+zgfi6Dxf99yiKHB21OJ4gJSTC18bnRg2D35bNzW3gDNp1T24n9NXOpcyaF4bIMrmvbnY4aaEEhw0BGvuWnZ6jZDBHGyUytF7PJDr3JO8cNbLFTRRw0kscTGsYI5LNaLAXDidPElcmwo/F9L9T95V+ifREWlEREBERAREQEREBVXaimliqKetiYZOzDmSsbq4xuubtHEgk+8K1LFlLNSzVZG3FEWaSOc/hG1jjIT9EC2/zUdsZLI7EK90rcj3NhcW3uWhwJY09Q3LdXURNvewvztqshg5LPrd5pirY4fxthfhUf5TlagmUcllakwiO2h/NKn9VJ9wqp7KbRtpqWGOqvG3KDFLYlj2O7wFxuc29rdFfCF5MQtawty4KWXdMUnGsTGJZaWlDnRl7TPLlIY1rXB2UE73Ej7OZtK7X4ZI+GKSAXkp3tkY36QGhb7vsViDANALeCyQp6mKxT7cUeT5R7onj1o3tcHA8tBqonD62SbF4ZXMdGx0Mgia8WeWN9pzeFyT5K9mJt72F+dlnsxyT1t7TKq235+SpP8Au4P9StKFgO8LNlrOdXFL9IOG1dQ6RrzTVDu0EjQXCOQ3zB9twJP2dbdVbtXFMDFRkzTPGVuUODWX0zvcRoArSWhYbE0bgB4aKZTFZ/s4IOGwW3Xfb9ty87Ln8YYr9eH7jlaQwDcEDBySePX8McuL/m836t/3SozYQ/i6l+p/qKniEDQFc51WURFQREQEREBERAREQEREBERAREQYuuSqxFsckLHA3lcWtta12tLjfyCjNrah7WQMD3RtlnZHI9psWscHE2PskkBt+qi6vD2Q11A1kkhBdITG+R0m6M98ZySN9jwKzfJLVxzJmUFWTEYlTAuIa6CewubFwfFw3EgX+KxhdRmxCuGYkNZTi1yQ0kSF1hwO66e3JqTo8SbI+ZjQbxPDHX5lrX6dLOC7LqmUOHRz1uIB8kndlYRGyR8e+JnfOQgndbXTTquvB8QlFFVEOdKYXTNie45jIIxdpJ9o30vxspPI1Z8y56+s7Jmbs3v1aMrBc94gXtyF7+SpOLUbW4Y6pFVP2rog4yds+z3O3sDb5QNSAANLBT+1cpbRAtcQe0ptQSDYzRg6jgQVfY1YFlYCytKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiINFXSslYWSNDmHe1wBBXDSbPUsbmuZC0Oabh2pINiN5N7WJ03KVRTIOPEcLhnAEsbXgG7b7weYI1HkvFBhEEBJijawkAG3HLe1+Z7zteq70VwRVVs7SyOc58LS5xJLtQSSA06g3tYDTdou+mpWRsaxjQ1rRYNaAAByAW5FMEM7ZejJcTTx96999u9vIG5pN94sVIVVFHIwMe3M0FpsebCHNOnIgHyXSiZDGAsoioIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k="
                alt=""
              />
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxUQEhMWFRUVGRcWEhUVFhIVEBIQFRYWGBcWFhcYHyggGBomGxYXITEjJSkrLi4uGB80ODMtNygtLisBCgoKDg0OGxAQGi0mICUtLS0tLS0tKy0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEEBgcIAwL/xABMEAABAwIDBAUGCQcKBwAAAAABAAIDBBEFEiEGMUFRBxMiYXEUMnOBkaEjJDVCUpKys8EzNGNygrHRFRclU2KTosLS4RZFg6PD8PH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QANBEBAAIBAgMGBAUDBQEAAAAAAAECAxExBBIhEzJBUXGBBTNhwRQikaGxIzTwQkNSU/EV/9oADAMBAAIRAxEAPwDeKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIIvGtoKWky+USBme+TRzictr6NB3XHtXJtEbrceG+TuRqjjt7hoAJn0O49XPY+By6qPPCccLlmdIhR23uGgAmewO4mOYA+HZ1XeeCOFyz0iEtJirTS+VRAytydYwNIBey19M1rG3Nd16aqeSeblnot9lca8spW1OTJnLwG5s1gx7mgk2Gptf1pWdYTzYuyvyphdVCCl0FUBAQEBAQEBAQEBAQEBAQEBAQEBAKCEr9nIp6tlTN8II25Yo3D4Nry4lzyPnE9ka7svhaM11nqtrmtWk1jxYv0zNAo4e6aw8Oqk/goZdmv4d8yfRl1NQxS0ccUjGvYY2AtcLttlG7kpxETDFNpreZiVvSYSKWgkp2vLmNbL1ebzmsdmcGE8bXtddiNI0Sm/PfmljvRpJPJhsUUThG1hkD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RSNBe4uZfrm8QCbkW08V2mOceWZjaf5RvkrfFETMRaP4fL8JdLA02MU8bnuicctwS4kAlpN2kHUJbDN6R4TGztM8UvMb1neHxHQTjyaoDLyRtc2WO4BLX78pva4Ou/XmuRivHLfxjeHZy4558fhM6xK5HXmp6zLKIgwksLmXfLcWDRfQWvvICs/P2nN100V/k7PlmY11/ZYVOHTZIp2MeZ2yZ3MLmZRmJMjb3sAdw8Aqb4raVvWOuv7LseWutqWmOWY/8XkjZvLhOIXlnU9XoYs2cuzbi7dwVkxaM3Py9NNFfNTsOTm666+ynUzioFWIz22dXLFmbnaA4ljgb5SbbxfjxXeW8ZO009nOek4+ymdp1iVw6ne+obUOYWiJjwxl29Y9z7XJsbAWFhc8eClNJteLzG2v7oxeK45pE76fshcNwieGOKVkVpY3ObKzMy00LyTob2uNN9tyy48N6RW0R1jpPo1Zc+PJNqzP5Zjp9JXdRQufVySPp3ujdE1g1izBwNyfP08VbOOZyza0dNFUZIjDFYtGuurIaR7nMBe3ITe7bgka6AkaXtZbKzrDJbSJ6IfanZanro7SDK9v5OVoGdncfpN7j7jquWrFt12DPbFOsNexT4pgrsrm9bTE95h/ZdqYnHkdN+h3qrW1G+YwcVHlZm+B7e0NQADJ1Tz8yUhuvc7zXe2/crK3rLFl4PLj8GTteCLjUcxuU2ZUFAugXQReLbRUdMPhp2MP0cwMhtyYLuPsXJmIW0w5L92EG3H62t0oYTDEd9VUN0tzii+f3Em2mqjrM7Lexx4+uSdZ8o+8pvBcBipszgXSSv8Ays0hzTSW4E8Gjg0WAUojRTky2v08PJLLqsQEBAQECyClkCyBZAsgWQLIFk0CyBZBWyClkFUBB8vYCLEXB0IO4hBieMdHdBOS5rDC48YjZv1DdvsAUJxxLVj43LTprqx7+buug1pK6w4NJliHryFwPsUOzmNpafxuK/fo9Bhm0rNBUsPrhd73xrul/NztODn/AEz/AJ7vQYbtM7Q1UTfHqR9iElNL+aPacJG1Z/z3e7diMQm/OsSkI4sizgH13A/wpyTO8ufisVe5jj3TeC7DUFMQ4RdY8fPlOd1+YB7IPeApxSIUX4rJfprpH0ZJlCkzqoCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//Z"
                alt=""
              />
              <img
                src="https://www.kumarakomlakeresort.in/images/home_banner/dummy.jpg"
                alt=""
              />
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          {/*<div className="content__clientSideRight"></div>*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
