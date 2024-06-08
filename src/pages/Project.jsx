import React, { useEffect, useState } from "react";
import useGetProjects from "../utils/getProjects";
import { useAPI } from "../store/backendapi";
const Project = () => {
  const API = useAPI();
  const getProjects = useGetProjects();
  const [project, setProject] = useState(null);
  const [nfMessage, setNfMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCard, setShowCard] = useState("all");

  useEffect(() => {
    getProjects()
      .then((res) => {
        setProject(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setNfMessage(err.message);
        setIsLoading(false);
      });
  }, []);
  const handleProject = (category) => {
    setShowCard(category);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  My Project
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Mine Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of works that I have done. Here are
                  some of my recent projects.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-red-500"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                {project
                  ? project
                      .reduce((unique, item) => {
                        return unique.includes(item.category)
                          ? unique
                          : [...unique, item.category];
                      }, [])
                      .map((category, index) => {
                        return (
                          <li className="mb-1" key={index}>
                            <button
                              onClick={() =>
                                handleProject(`${category.toLowerCase()}`)
                              }
                              className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                                showCard === `${category.toLowerCase()}`
                                  ? "activeClasses bg-primary text-red-500"
                                  : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                              }`}
                            >
                              {category}
                            </button>
                          </li>
                        );
                      })
                  : ""}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {nfMessage ? (
              <div>{nfMessage}</div>
            ) : (
              project.map((item, index) => {
                return (
                  <PortfolioCard
                    ImageHref={`${API}${item.image}`}
                    category={item.category}
                    title={item.name}
                    button="View Details"
                    buttonHref={
                      item.link.startsWith("http://") ||
                      item.link.startsWith("https://")
                        ? item.link
                        : `http://${item.link}`
                    }
                    showCard={showCard}
                    key={index}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <a
              href={buttonHref}
              target="_blank"
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
