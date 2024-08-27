import React from "react";
import Particles from "@tsparticles/react";
import particleConfig from "./config/particle-config.json";

export const ParticleBackground = () => {
    return(
        <Particles id="tsparticles" options={particleConfig} />
    );
};