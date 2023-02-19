import React, { useState, useEffect } from "react";
import { MouseoffSoftball } from "../../components/MouseoffSoftball";
import { Component4 } from "../../components/Component4";
import { Component1 } from "../../components/Component1";
import { NavBar } from "../../components/NavBar";
import "./style.css";
import Coursel from "../../components/coursel/coursel";

export const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const writeToCSV = async () => {
    const data = {
      name,
      email,
      message,
      phone,
    };
    console.log(data);
  };

  const handleSlideDown = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    var image = document.querySelectorAll(".HOMEPAGE-pexels-vlad-chean");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.8,
      overflow: true,
      delay: 0,
      transition: "none",
    });
  }, []);
  return (
    <div className={"HOMEPAGE-HOMEPAGE-wrapper"}>
      <div className={"HOMEPAGE-HOMEPAGE"}>
        <div className={"HOMEPAGE-overlap"}>
          <img
            className={"HOMEPAGE-pexels-maria-orlova"}
            src={"/img/pexels-maria-orlova-4916522-1.png"}
          />
          <div className={"HOMEPAGE-rectangle"} />
          <div className={"HOMEPAGE-rectangle-69"} />
          <div className={"HOMEPAGE-rectangle-35"} />
          <div className={"HOMEPAGE-rectangle-42"} />
          <div className={"HOMEPAGE-THE-FACILITY"}>THE FACILITY</div>
          <div className={"HOMEPAGE-CONTACT-US"}>CONTACT US</div>
          <div className={"HOMEPAGE-rectangle-36"} />
          <div className={"HOMEPAGE-rectangle-43"} />
          <div className={"HOMEPAGE-rectangle-37"} />
          <div className={"HOMEPAGE-rectangle-44"} />

          <div className={"HOMEPAGE-SPECIFICATIONS"}>SPECIFICATIONS</div>
          <div className={"HOMEPAGE-element-sq-ft"}>
            <span className={"HOMEPAGE-text-wrapper"}>25,000</span>
            <span className={"HOMEPAGE-span"}> Sq ft</span>
          </div>
          <div className={"HOMEPAGE-element-batting-cages"}>
            <span className={"HOMEPAGE-text-wrapper"}>14</span>
            <span className={"HOMEPAGE-span"}> Batting Cages</span>
          </div>
          <p
            className={
              "HOMEPAGE-element-dedicated-cages-for-hittrax-fungoman-BOLA-machine"
            }
          >
            <span className={"HOMEPAGE-text-wrapper"}>
              2 Dedicated Cages
              <br />
            </span>
            <span className={"HOMEPAGE-span"}>
              for HiTtrax, Fungoman &amp; BOLA machine
            </span>
          </p>
          <div className={"HOMEPAGE-video-analysis"}>
            <span className={"HOMEPAGE-text-wrapper"}>Video </span>
            <span className={"HOMEPAGE-span"}>Analysis</span>
          </div>
          <div className={"HOMEPAGE-certified-coaches"}>
            <span className={"HOMEPAGE-text-wrapper"}>Certified </span>
            <span className={"HOMEPAGE-span"}>Coaches</span>
          </div>
          <div className={"HOMEPAGE-monthly-evaluation-feedback"}>
            <span className={"HOMEPAGE-text-wrapper"}>Monthly </span>
            <span className={"HOMEPAGE-span"}>
              Evaluation &amp;
              <br />
              Feedback
            </span>
          </div>
          <div className={"HOMEPAGE-KPI-metrics"}>
            <span className={"HOMEPAGE-text-wrapper"}>KPI </span>
            <span className={"HOMEPAGE-span"}>Metrics</span>
          </div>
          <img className={"HOMEPAGE-area"} src={"/img/area-1.png"} />
          <img className={"HOMEPAGE-vector"} src={"/img/vector-7.svg"} />
          <img
            className={"HOMEPAGE-screenshot-at"}
            src={"/img/screenshot-2023-01-26-at-5-33-1.png"}
          />
          <img className={"HOMEPAGE-image"} src={"/img/image-2.png"} />
          <img
            className={"HOMEPAGE-iconsax-linear-video"}
            src={"/img/iconsax-linear-video.svg"}
          />
          <img
            className={"HOMEPAGE-iconsax-linear-okru"}
            src={"/img/iconsax-linear-okru.svg"}
          />
          <img
            className={"HOMEPAGE-iconsax-linear-calendarsearch"}
            src={"/img/iconsax-linear-calendarsearch.svg"}
          />
          <img className={"HOMEPAGE-group"} src={"/img/group-4.png"} />
        </div>
        <div className={"HOMEPAGE-overlap-group12"}>
          <img
            className={"HOMEPAGE-pexels-vlad-chean"}
            src={"/img/pexels-vlad-che-an-2694317-1.png"}
            style={{
              willChange: "transform",
              transform: "translate3d(0px,73px,0px)",
            }}
          />
          <div className={"HOMEPAGE-rectangle-15"} />
          <img
            className={"HOMEPAGE-professional-baseball-players"}
            src={"/img/professional-baseball-players-1.png"}
          />
          <div className={"HOMEPAGE-IMAGESEQ"}>
            <div className="imageseq" data-id="170:881">
              <video
                src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/files/parallax-vid.mp4"
                anima-src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/files/parallax-vid.mp4"
                className="imageseq"
                loop
                autoPlay
                playsInline
                muted
              ></video>
            </div>
          </div>
          {/* <Component1
            style={{
              cursor: "pointer",
              left: "165px",
              position: "absolute",
              top: "51px",
              transition: "all 0.2s ease",
            }}
            vector="/img/vector-3.svg"
          />
          <Component4
            style={{
              cursor: "pointer",
              left: "1181px",
              position: "absolute",
              top: "51px",
              transition: "all 0.2s ease",
            }}
            vector="/img/vector-3.svg"
          />
          <a href="">
            <MouseoffSoftball
              style={{
                cursor: "pointer",
                left: "682px",
                position: "absolute",
                top: "51px",
                transition: "all 0.2s ease",
              }}
              vector="/img/vector-3.svg"
            />
          </a> */}
          <Coursel id="coursel" />
          <div className={"HOMEPAGE-rectangle-39"} />
          <div className={"HOMEPAGE-rectangle-41"} />
          <p
            className={
              "HOMEPAGE-olympic-indoor-sports-is-a-high-performance-facility-that-provides-training-in-baseball-softball-cricket-skills"
            }
          >
            Olympic Indoor Sports is a high-performance facility that provides
            <br />
            training in Baseball, Softball &amp; Cricket skills.
          </p>
          <p
            className={
              "HOMEPAGE-we-help-student-athletes-gain-confidence-get-better-and"
            }
          >
            We help student-athletes gain confidence, get better, and..
          </p>
          <div className={"HOMEPAGE-HAVE-FUN"}>HAVE FUN!</div>
          <div className={"HOMEPAGE-columbia-MD"}>Columbia, MD</div>
          <div className={"HOMEPAGE-ABOUT-US"}>ABOUT US</div>
          <img className={"HOMEPAGE-vector-8"} src={"/img/vector-8.svg"} />
          <img
            className={"HOMEPAGE-iconsax-linear-cup"}
            src={"/img/iconsax-linear-cup.svg"}
          />
        </div>
        <div className={"HOMEPAGE-overlap-group15"}>
          <div className={"HOMEPAGE-overlap-group11"}>
            <div className={"HOMEPAGE-rectangle-52"} />
            <div className={"HOMEPAGE-rectangle-45"} />
            <div className={"HOMEPAGE-rectangle-49"} />
            <div className={"HOMEPAGE-rectangle-50"} />
            <div className={"HOMEPAGE-rectangle-48"} />
            {/* <p className={"HOMEPAGE-first-name-last-name"}>
              First Name &amp; Last Name
            </p> */}
            <input
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className={"HOMEPAGE-first-name-last-name"}
              placeholder="First Name &amp; Last Name"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                border: "none",
              }}
            ></input>

            <input
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              className={"HOMEPAGE-phone-number"}
              placeholder="Phone Number"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                border: "none",
              }}
            ></input>

            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className={"HOMEPAGE-email-address"}
              style={{
                backgroundColor: "transparent",
                width: "100%",
                border: "none",
              }}
              placeholder="Email Address"
            />

            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              rows={4}
              className={"HOMEPAGE-message-or-question"}
              placeholder="Message or Question"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                border: "none",
              }}
            />
            <div className={"HOMEPAGE-rectangle-51"} />
            {/* <div className={"HOMEPAGE-SUBMIT"}>SUBMIT</div> */}
            <button
              onClick={() => writeToCSV()}
              className={"HOMEPAGE-SUBMIT"}
              border="none"
              style={{
                background: "transparent",
                border: "none",
                width: "396px",
                height: "64px",
                zIndex: "999",
              }}
            >
              SUBMIT
            </button>
            <div className={"HOMEPAGE-rectangle-68"} />
          </div>
          <h1 className={"HOMEPAGE-got-questions-we-will-love-to-hear-them"}>
            <span className={"HOMEPAGE-text-wrapper-2"}>
              Got questions?
              <br />
            </span>
            <span className={"HOMEPAGE-text-wrapper-3"}>
              We will love to hear them!
            </span>
          </h1>
          <img
            className={"HOMEPAGE-iconsax-linear-messagequestion"}
            src={"/img/iconsax-linear-messagequestion-1.svg"}
          />
        </div>
        <div className={"HOMEPAGE-overlap-group10"}>
          <div className={"HOMEPAGE-rectangle-9"} />
          <div className={"HOMEPAGE-rectangle-8"} />
          <div className={"HOMEPAGE-rectangle-14"} />
          {/* <div className={"HOMEPAGE-comp"} /> */}
          {/* <video src="Loop video gif.mp4" className={"HOMEPAGE-comp"} /> */}
          {/* <video className={"HOMEPAGE-comp"} controls>
            <source src="./Loop video gif.mp4" type="video/mp4"></source>
          </video> */}
          <div className="comp-1-1" data-id="170:869">
            <video
              className={"HOMEPAGE-comp comp-1-1"}
              src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/files/loop-video-gif.mp4"
              anima-src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/files/loop-video-gif.mp4"
              loop
              autoPlay
              playsInline
              muted
            ></video>
          </div>
          <div className={"HOMEPAGE-rectangle-7"} />
          <p className={"HOMEPAGE-high-performance-facility-in-the-BA"}>
            <span className={"HOMEPAGE-text-wrapper-4"}>
              High Performance Facility
            </span>
            <span className={"HOMEPAGE-text-wrapper-5"}>&nbsp;</span>
            <span className={"HOMEPAGE-text-wrapper-4"}>in the BA.</span>
          </p>
          <div className={"HOMEPAGE-OLYMPIC-INDOOR-SPORTS"}>
            OLYMPIC INDOOR SPORTS
          </div>
          <div className={"HOMEPAGE-WHAT-WE-DO"}>WHAT WE DO!</div>
          <div className={"HOMEPAGE-rectangle-10"} />
          <img className={"HOMEPAGE-TICKER"} src={"/img/ticker-1.gif"} />
          <div className={"HOMEPAGE-group-1"}>
            <div className={"HOMEPAGE-overlap-group4"}>
              <div className={"HOMEPAGE-register"}>Register</div>
            </div>
          </div>
          <div className={"HOMEPAGE-group-2"}>
            <div className={"HOMEPAGE-overlap-group5"}>
              <div className={"HOMEPAGE-learn-more"}>Learn More</div>
            </div>
          </div>
        </div>
        <div className={"HOMEPAGE-overlap-group13"}>
          <p
            className={
              "HOMEPAGE-element-olympic-indoor-sports-powered-by-eazy-eyez-entertainment"
            }
          >
            <br />© 2023 Olympic Indoor Sports.&nbsp;&nbsp;Powered by Eazy Eyez
            Entertainment.
          </p>
        </div>
        <div className={"HOMEPAGE-overlap-group9"}>
          <p
            className={
              "HOMEPAGE-olympic-indoor-sports-a-game-changing-platform-for-young-athletes-in-maryland-to-step-up-and-show-off-their-skills-in-sports-such-as-baseball-softball-cricket-and-lacrosse-our-mission-is-to-provide-a-comprehensive-space-where-these-young-rising-stars-can-take-a-swing-at-their-athletic-aspirations-and-score-big-in-the-game-of-life-we-re-proud-to-be-the-home-plate-for-the-future-generation-of-american-sports-and-we-hope-to-establish-a-precedent-for-other-players-in-the-industry-so-come-on-over-join-the-team-and-let-s-play-ball"
            }
          >
            Olympic Indoor Sports, a game-changing platform for young athletes
            in Maryland <br />
            to step up and show off their skills in sports such as baseball,
            softball, cricket, and lacrosse. <br />
            <br />
            Our mission is to provide a comprehensive space where these young
            rising stars can take a swing at their athletic aspirations and
            score big in the game of life. <br />
            <br />
            We&#39;re proud to be the home plate for the future generation of
            American sports, and we hope to establish a precedent for other
            players in the industry. So come on over, join the team, and
            let&#39;s play ball!
          </p>
          <div className={"HOMEPAGE-the-facility"}>The Facility</div>
          <p
            className={
              "HOMEPAGE-olympic-indoor-sports-red-branch-rd-suite-a-columbia-MD"
            }
          >
            <span className={"HOMEPAGE-text-wrapper-6"}>
              Olympic Indoor Sports
              <br />
            </span>
            <span className={"HOMEPAGE-text-wrapper-7"}>
              <br />
              9179 Red Branch rd Suite #A Columbia, MD 21045
            </span>
          </p>
          <p
            className={
              "HOMEPAGE-element-AM-EST-PM-EST-from-monday-to-sunday-you-will-receive-a-prompt-response-from-our-team-within-hours"
            }
          >
            <span className={"HOMEPAGE-text-wrapper-8"}>
              7:00 AM EST - 11:00 PM EST
            </span>
            <span className={"HOMEPAGE-text-wrapper-7"}>
              {" "}
              from Monday to Sunday. <br />
              <br />
              You will receive a prompt response from our team within 24 hours.
            </span>
          </p>
          <div className={"HOMEPAGE-overlap-group14"}>
            <div
              className={"HOMEPAGE-email-info-olympicindoorsports-com-phone"}
            >
              <span className={"HOMEPAGE-text-wrapper-8"}>Email: </span>
              <span className={"HOMEPAGE-text-wrapper-7"}>
                info@olympicindoorsports.com
                <br />
              </span>
              <span className={"HOMEPAGE-text-wrapper-8"}>Phone: </span>
              <span className={"HOMEPAGE-text-wrapper-7"}>
                (123) 456-7890
                <br />
              </span>
            </div>
            <div className={"HOMEPAGE-group-3"}>
              <div className={"HOMEPAGE-overlap-group6"}>
                <div className={"HOMEPAGE-div"}>Learn More</div>
              </div>
            </div>
            <img
              className={"HOMEPAGE-LOGOEMBLEM"}
              src={"/img/logoemblem-1.png"}
            />
            <div className={"HOMEPAGE-CONTACT-US-2"}>CONTACT US</div>
          </div>
          <div className={"HOMEPAGE-memberships"}>Memberships</div>
          <div className={"HOMEPAGE-batting-cages"}>Batting Cages</div>
          <div className={"HOMEPAGE-programs-events"}>
            Programs &amp; Events
          </div>
          <div className={"HOMEPAGE-contact-us"}>Contact Us</div>
          <div className={"HOMEPAGE-QUICK-LINKS"}>QUICK LINKS</div>
          <div className={"HOMEPAGE-LOCATION"}>LOCATION</div>
          <div className={"HOMEPAGE-TIMINGS"}>TIMINGS</div>
        </div>
        <img
          className={"HOMEPAGE-LOGOEMBLEM-2"}
          src={"/img/logoemblem-2-1.png"}
        />
        <div className={`app ${isOpen ? "open" : ""}`}>
          <NavBar
            handleClick={handleSlideDown}
            SIGNUpStyle={{
              left: "1605px",
            }}
            battingCagesStyle={{
              cursor: "pointer",
              left: "880px",
            }}
            contactUsStyle={{
              cursor: "pointer",
              left: "1268px",
            }}
            homeStyle={{
              left: "399px",
            }}
            iconsaxLinearUsersquare="/img/iconsax-linear-usersquare-2.svg"
            iconsaxLinearUsersquareStyle={{
              left: "1563px",
            }}
            membershipsStyle={{
              cursor: "pointer",
              left: "703px",
            }}
            programsEventsStyle={{
              cursor: "pointer",
              left: "1060px",
            }}
            rectangle6Style={{
              left: "380px",
            }}
            rectangleStyle={{
              width: "1728px",
            }}
            rectangleStyleOverride={{
              width: "1727px",
            }}
            style={{
              left: "0",
              position: "fixed",
              top: "0",
              width: "1728px",
            }}
            theFacilityStyle={{
              cursor: "pointer",
              left: "535px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
