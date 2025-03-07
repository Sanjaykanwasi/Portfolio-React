import React from "react";
import { useRef } from "react";
import { CERTIFICATES } from "../constants";

const Certificates = () => {
  const certificatesReff = useRef(false);
  return (
    <div>
      <section className="py-16" ref={certificatesReff} id="certificates">
        <div className="mx-auto max-w-4xl px-4 ">
          <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
            Certificates
          </h2>
          <div className="flex flex-col space-y-12">
            {CERTIFICATES.map((certificate, index) => (
              <div
                className="flex flex-col items-start justify-between md:flex-row"
                key={index}
              >
                <div className="w-full text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg">
                  {certificate.plateform}
                </div>
                <div className="w-full md:w-3/4">
                  <a
                    href={certificate.link}
                    target="_blank"
                    className="relative z-10 block"
                    style={{ pointerEvents: "auto" }}
                    rel="noopener noreferrer"
                  >
                    <h3 className="mb-2 text-lg lg:text-2xl ">
                      {certificate.name}
                    </h3>
                  </a>

                  <p className="mb-4 text-sm lg:text-base ">
                    {certificate.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.techStack.map((tech, index) => (
                      <span
                        className="rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
