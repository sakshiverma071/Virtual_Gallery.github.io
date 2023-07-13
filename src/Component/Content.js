import React from "react";
import './Content.css';
import sak3 from "../assets/sak3.mp4"
import  { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import modernart1 from  "../assets/modernart1.jpg";
import landscape7 from "../assets/landscape7.jpg";
import traditional1 from "../assets/traditional1.jpg"
import abstract1 from "../assets/abstract1.jpg";
import potrait1 from "../assets/potrait1.jpg";
import artgallery from "../assets/artgallery.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Footer from "./Footer";


function Content(){ 
    const scroll = new LocomotiveScroll();
    
    return(
        <div >
          
         <div id="main">
         
        <div data-scroll data-scroll-speed="-5" id="page1" >
          
        <Navbar></Navbar>
            <div className="bottom-page1">
                <h1><span>Experience Virtual <br /> Art Gallery</span></h1>
                <div className="bottom-page1-inner">
                    <h2>“The modern world thinks of art as very important:
something close to the meaning of life.” </h2>
                    
                </div>
                
            </div>
            <video src={sak3} autoPlay loop muted ></video>
        </div>
        <div  id="page2"className="12" >
          
            <div id="sa" className="col-5" >
            <h2>Modern Art</h2>
            <h1>“New needs need new techniques. And the modern artists have found new ways and new means of making their statements… the modern painter cannot express this age, the airplane, the atom bomb, the radio, in the old forms of the Renaissance or of any other past culture.” 
            </h1>
            <p>― Tom Stoppard, Artist Descending a Staircase</p>
            </div>
            <div className="col-1"></div>
            <div id="ss" className="col-5">
                <img src ={modernart1} alt="assets"/>
            </div>
            
        </div>
        
        <Slider />
        <div data-scroll data-scroll-speed="-3" id="page4" className="col-12">
        <div id="ss" className="col-5">
                <img src ={landscape7} alt="assets"/>
            </div>
            <div className="col-1"></div>
            <div id="sa" className="col-5" >
            <h2>Landscape Art</h2>
            <h1>For me, going back to itinerant landscape painting, it's not about returning to an older method, but about building on what happened in the 20th century in photography. And also highlighting what the differences are between a painting and a photograph in picturing space.
            </h1>
            <p>--Cynthia Daignault</p>
            </div>
        </div>
        <Slider2 />

        <div data-scroll data-scroll-speed="-4" id="page5" className="col-12">
            <div id="sa" className="col-5" >
            <h2>Traditional Art</h2>
            <h1>Those who feel guilty contemplating 'betraying' the tradition they love by acknowledging their disapproval of elements within it should reflect on the fact that the very tradition to which they are so loyal... is in fact the evolved product of many adjustments firmly but delicately made by earlier lovers of the same tradition.
            </h1>
            <p>--Daniel Dennett</p>
            </div>
            <div className="col-1"></div>
            <div id="ss" className="col-5">
                <img src ={traditional1} alt="assets"/>
            </div>
        </div>
        <Slider3 />
        <div data-scroll data-scroll-speed="-2" id="page6" className="col-12">
        <div id="ss" className="col-5">
                <img src ={abstract1} alt="assets"/>
            </div>
            <div className="col-1"></div>
            <div id="sa" className="col-5" >
            <h2>Abstract Art</h2>
            <h1>“Abstraction allows man to see with his mind what he cannot see physically with his eyes....Abstract art enables the artist to perceive beyond the tangible, to extract the infinite out of the finite. It is the emancipation of the mind. It is an exploration into unknown areas.”

            </h1>
            <p>―- Arshile Gorky</p>
            </div>
        </div>
        <Slider4 />
        <div data-scroll data-scroll-speed="-4" id="page7" className="col-12">
            <div id="sa" className="col-5" >
            <h2>Portrait Art</h2>
            <h1>“Every portrait that is painted with feeling is a portrait of the artist, not of the sitter. The sitter is merely the accident, the occasion. It is not he who is revealed by the painter; it is rather the painter who, on the coloured canvas, reveals himself.”
            </h1>
            <p>― Oscar Wilde, The Picture of Dorian Gray</p>
            </div>
            <div className="col-1"></div>
            <div id="ss" className="col-5">
            <img src ={potrait1} alt="assets"/>
            </div>
        </div>
        <Slider5 />
        <div data-scroll data-scroll-speed="-4" id="page8" className="col-12">
            <div id="sa">
            
            <h1>To my mind a picture should be something pleasant, cheerful and pretty. There are too many unpleasant things in life as it is, without creating still more of them.
            </h1>
            <p>―  Pierre-Auguste Renoir</p>
            </div>
            
        </div>
        <div  id="page9" className="col-12">
          
        <div id="ss" className="col-8">
          
                <img src ={artgallery} alt="assets"/>
            </div>
            <div className="col-1"></div>
            <div id="sa" className="col-3" >
            <h2>Our Art Gallery</h2>
            <h1>“The only way to understand painting is to go and look at it.
                And if out of a million visitors, there is even one to whom art means something, that is enough to justify art Gallery.” 
            </h1>
            <p>Visit us----</p>
            </div>
            
        </div>
       
        


        
        <Footer />
    </div>
    
   
    
  function loco(){
        useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 8, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
})}
loco()

function MyComponent() {
  useEffect(() => {
    const updateContent = () => {
      const h1Element = document.querySelector("#page2>#sa>h1");
      const content = h1Element.textContent;
      let clutter = "";

      content.split("").forEach((dets) => {
        clutter += `<span>${dets}</span>`;
      });

      h1Element.innerHTML = clutter;
    };

    updateContent();

    gsap.to("#page2>#sa>h1>span", {
      scrollTrigger: {
        trigger: `#page2>#sa>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: `#fff`,
    });
  }, [])}

  function MyComponent() {
  useEffect(() => {
    const updateContent = () => {
      const h1Element = document.querySelector("#page4>#sa>h1");
      const content = h1Element.textContent;
      let clutter = "";

      content.split("").forEach((dets) => {
        clutter += `<span>${dets}</span>`;
      });

      h1Element.innerHTML = clutter;
    };

    updateContent();

    gsap.to("#page4>#sa>h1>span", {
      scrollTrigger: {
        trigger: `#page4>#sa>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: `#fff`,
    });
  }, [])}

function MyComponent() {
  useEffect(() => {
    const updateContent = () => {
      const h1Element = document.querySelector("#page5>#sa>h1");
      const content = h1Element.textContent;
      let clutter = "";

      content.split("").forEach((dets) => {
        clutter += `<span>${dets}</span>`;
      });

      h1Element.innerHTML = clutter;
    };

    updateContent();

    gsap.to("#page5>#sa>h1>span", {
      scrollTrigger: {
        trigger: `#page5>#sa>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: `#fff`,
    });
  }, [])}
  function MyComponent() {
  useEffect(() => {
    const updateContent = () => {
      const h1Element = document.querySelector("#page6>#sa>h1");
      const content = h1Element.textContent;
      let clutter = "";

      content.split("").forEach((dets) => {
        clutter += `<span>${dets}</span>`;
      });

      h1Element.innerHTML = clutter;
    };

    updateContent();

    gsap.to("#page6>#sa>h1>span", {
      scrollTrigger: {
        trigger: `#page6>#sa>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: `#fff`,
    });
  }, [])}

function MyComponent() {
  useEffect(() => {
    const updateContent = () => {
      const h1Element = document.querySelector("#page7>#sa>h1");
      const content = h1Element.textContent;
      let clutter = "";

      content.split("").forEach((dets) => {
        clutter += `<span>${dets}</span>`;
      });

      h1Element.innerHTML = clutter;
    };

    updateContent();

    gsap.to("#page7>#sa>h1>span", {
      scrollTrigger: {
        trigger: `#page7>#sa>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: `#fff`,
    });
  }, [])}
  function MyComponent() {
  useEffect(() => {
    const updateContent = () => {
      const h1Element = document.querySelector("#page9>#sa>h1");
      const content = h1Element.textContent;
      let clutter = "";

      content.split("").forEach((dets) => {
        clutter += `<span>${dets}</span>`;
      });

      h1Element.innerHTML = clutter;
    };

    updateContent();

    gsap.to("#page9>#sa>h1>span", {
      scrollTrigger: {
        trigger: `#page9>#sa>h1>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: "#main",
        scrub: 0.5,
      },
      stagger: 0.2,
      color: `#fff`,
    });
  }, [])}
    
    
        
        </div>
        
        
    )
}

export default Content;