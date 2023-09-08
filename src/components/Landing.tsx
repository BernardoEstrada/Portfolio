import { useCallback } from "react";
import Particles from "react-particles";
import {
  Container,
  Engine
} from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { particleOptions } from "../config/Landing.particles";
import { ParticleImageManager } from "../config/Landing.particleIcons";
import resume from "@assets/BernardoEstrada.resume.json" assert { type: "json" }
import headshot from "@assets/headshot.jpg" assert { type: "jpg" }
import HelloWorld from "@assets/HelloWorld.json" assert { type: "json" }
import { TypeAnimation } from "react-type-animation";
import * as r_ from "radash";
import pdfResume from "@assets/BernardoEstrada.resume.pdf" assert { type: "pdf" }

export default function Landing() {
  const particlesInit = useCallback(async (engine: Engine) => {
    const manager = ParticleImageManager.getInstance();
    await manager.loadParticles();
    manager.getParticles().forEach((shape) => {
      engine.addShape(shape.name, (context, _, radius) => {
        const offset = - radius;
        const size = radius * 2;
        context.drawImage(shape.img, offset, offset, size, size);
      });
    });
    
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container
  }, []);


  const seq: Array<number | string | (() => void | Promise<void>)> = [
    HelloWorld[0],
    HelloWorld[1],
    ...r_.shuffle(HelloWorld)
  ].flatMap(e => [e.msg, 2000])

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleOptions}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />

        <div className="card grid grid-rows-1 md:grid-cols-3 md:grid-rows-2 justify-items-center items-center max-w-fit max-h-fit shadow-2xl bg-base-100 p-12 mt-16 md:mt-0">
          <div className="avatar justify-center md:row-span-3">
            <div className="w-36 md:w-56 rounded-animated transition-transform">
              <img src={headshot} alt="A headshot of Bernardo Estrada"/>
            </div>
          </div>
          <div className="md:col-span-2">
            <TypeAnimation
              cursor={true}
              sequence={seq}
              wrapper="h1"
              className="mt-2 text-3xl md:text-6xl font-bold text-center text-primary-focus"
              speed={30}
              deletionSpeed={50}
              repeat={Infinity}
            />
            {/* <h1 className="text-6xl font-bold text-center text-primary">Hi!</h1> */}
          </div>
          <div className="md:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-primary-focus md:whitespace-nowrap">
              I'm <span className="text-primary">{resume.basics.name}</span>
            </h1>
          </div>
          <div className="md:col-span-2 max-w-md">
            <p className="mt-3 text-2xl text-center text-base-content">
              {resume.basics.headline}
            </p>
          </div>
        </div>

        <div className="card grid grid-rows-1 md:grid-cols-3 justify-items-center items-center max-w-fit max-h-fit shadow-2xl bg-base-100 p-12 mt-16 md:mt-8 mb-16 md:mb-0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <div className="md:col-span-3">
            <div className="flex flex-col justify-start space-x-4 max-w-2xl">
              <h3 className="text-2xl font-bold text-left text-primary-focus">
                Work in progress
              </h3>
              <br/>
              <p className="text-2xl text-left text-base-content">
                I'm currently working on my portfolio, check back soon!
                Meanwhile you can check out my GitHub, LinkedIn or resume.
              </p>
              <p className="text-5xl text-center text-base-content mt-3">
                <a href="https://github.com/BernardoEstrada" target="_blank">
                  <i className="devicon-github-original mx-4"></i>
                </a>
                <a href="https://linkedin.com/in/bernardoef/" target="_blank">
                  <i className="devicon-linkedin-plain mx-4"></i>
                </a>
                <a href={pdfResume} target="_blank" className="mx-4 my-0 align-text-top">
                    <svg className="inline-block w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                </a>

              </p>
          
          

            </div>
          </div>
        </div>
      </div>
  );
}
