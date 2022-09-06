import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { certificate } from '../constants/certificate'
import { techStack } from '../constants/techstack'

export default function Home() {
  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset)
      }

      window.addEventListener('scroll', updatePosition)

      updatePosition()

      return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()

  const downloadCV = () => {
    const dl = document.createElement('a')
    dl.setAttribute('href', '/Alvieto_CV.pdf')
    dl.setAttribute('download', 'Alvieto_CV')
    dl.click()
  }

  return (
    <Fragment>
      <Head>
        <title>Alvieto Haykal</title>
        <meta name="description" content="Alvieto Haykal Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className={classNames(
          scrollPosition > 0 ? 'navbar-fixed' : 'absolute z-10 bg-transparent',
          'top-0 left-0 flex w-full items-center'
        )}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4">
              <a
                href="#home"
                className="block py-6 text-lg font-bold text-primary"
              >
                Alvieto Haykal
              </a>
            </div>
            <div className="hidden lg:flex items-center px-4">
              <nav
                id="nav-menu"
                className="top-full w-full py-5 static block max-w-full bg-transparent"
              >
                <ul className="flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-8 flex py-2 text-base text-white group-hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-white group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="mx-8 flex py-2 text-base text-white group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="mailto: haykalcs@gmail.com"
                      className="mx-8 flex py-2 text-base text-primary"
                    >
                      <i className="ri-mail-line mr-2"></i> haykalcs@gmail.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hi 👋, {"I'm"}
                <span className="my-5 block text-4xl font-bold text-white lg:text-5xl">
                  Alvieto Haykal
                </span>
              </h1>
              <h2 className="mb-3 text-lg font-medium text-secondary lg:text-2xl">
                Backend Developer & Web Programmer
              </h2>
              <h3 className="text-lg font-medium text-secondary lg:text-xl">
                From
              </h3>
              <h3 className="mb-14 text-lg font-medium text-secondary lg:text-xl">
                Indonesia
              </h3>
              <button
                type="button"
                onClick={downloadCV}
                className="rounded border-2 border-primary py-3 px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                Download CV
              </button>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <img
                  src="/img/alvieto.png"
                  alt="Alvieto Haykal"
                  className="relative z-10 mx-auto max-w-full"
                />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-full h-full scale-105">
                  <svg
                    width="full"
                    height="full"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-36 pb-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-3/5">
              <h4 className="mb-3 text-lg font-bold text-primary">About Me</h4>
              <h3 className="max-w-md text-2xl font-bold text-white lg:text-3xl">
                I&apos;m here
              </h3>
              <h3 className="mb-5 max-w-md text-2xl font-bold text-white lg:text-3xl">
                to help your next project
              </h3>
              <p className="text-base mb-5 font-medium leading-relaxed text-secondary text-justify lg:text-lg">
                A skilled, competent, and diligent individual, specializing in
                the backend web development (Laravel - NodeJS/Express/Nest). For
                the last 2 years, I have been developing applications using PHP,
                JavaScript, and TypeScript programming languages.
              </p>
              <p className="text-base mb-5 font-medium leading-relaxed text-secondary text-justify lg:text-lg">
                I’ve hands on in all stages of the programming cycle, from
                planning to development and deployment. No two days are the same
                for me; my tasks may involve analyzing algorithms, altering
                code, fixing bugs, brainstorming ideas for integrating new
                systems.
              </p>
              <div className="flex content-center gap-5 mb-14">
                <div>
                  <h6 className="flex gap-2 mt-3 text-white">
                    <span className="text-primary">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Problem Solving
                  </h6>
                  <h6 className="flex gap-2 mt-3 text-white">
                    <span className="text-primary">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Search A Lot
                  </h6>
                </div>
                <div>
                  <h6 className="flex gap-2 mt-3 text-white">
                    <span className="text-primary">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Creative Idea
                  </h6>
                  <h6 className="flex gap-2 mt-3 text-white">
                    <span className="text-primary">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    High Quality
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-2/5">
              <h3 className="mb-4 text-2xl font-semibold text-white lg:pt-10 lg:text-3xl">
                Technology Stack
              </h3>
              <div className="flex flex-wrap items-center mb-4">
                {techStack.map((tech) => (
                  <img
                    src={tech.url}
                    alt={tech.alt}
                    key={tech.id}
                    className="p-2"
                  />
                ))}
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white lg:pt-10 lg:text-3xl">
                Certifications
              </h3>
              <div className="flex">
                <ul className="list-disc ml-6">
                  {certificate.map((cert) => (
                    <li className="group text-white" key={cert.id}>
                      <a
                        href={cert.url}
                        target="blank"
                        className="text-base underline text-primary group-hover:text-primary-300"
                      >
                        {cert.title}
                      </a>
                      &nbsp;<i className="ri-links-line text-white"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="pt-32 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Some of my works
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-11/12 gap-6 mb-6">
            <div className="lg:flex-1 lg:w-1/2 border border-primary-300 rounded-md shadow shadow-primary-300 lg:relative">
              <div className="overflow-hidden rounded-t-md shadow-md">
                <img
                  src="/img/portfolio/examzpro.png"
                  alt="Landing Page"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3 lg:mb-16">
                <h5 className="text-white mb-2 font-bold">
                  <span className="text-primary mr-2 align-middle">
                    <i className="ri-arrow-right-circle-line ri-2x"></i>
                  </span>
                  Examz{' '}
                  <span className="text-secondary text-sm ml-2">
                    (Jan 2022 - May 2022)
                  </span>
                </h5>
                <p className="text-base font-medium text-secondary text-justify">
                  All-in-One Site for Exam Preparation. Makes exam preparation
                  simplified! Examz is a one step destination for all types of
                  exam preparation.
                </p>
                <div className="text-secondary mt-3">
                  Develop Backend Website
                  <ul className="list-disc ml-6">
                    <li>Exams Module</li>
                    <li>Quiz Module</li>
                    <li>Practice Module</li>
                    <li>Institute Module</li>
                    <li>User Module</li>
                  </ul>
                </div>
              </div>
              <div className="p-3 mb-2 lg:mb-0 lg:absolute lg:bottom-2">
                <a
                  href="https://examz.pro"
                  className="text-white bg-primary p-2 rounded-xl hover:bg-primary-300 hover:text-slate-300 transition"
                >
                  <span className="align-middle mr-1">
                    <i className="ri-links-fill"></i>
                  </span>
                  Launch
                </a>
              </div>
            </div>

            <div className="lg:flex-1 lg:w-1/2 border border-primary-300 rounded-md shadow shadow-primary-300 lg:relative">
              <div className="overflow-hidden rounded-t-md shadow-md">
                <img
                  src="/img/portfolio/quizapi.png"
                  alt="Landing Page"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3">
                <h5 className="text-white mb-2 font-bold">
                  <span className="text-primary mr-2 align-middle">
                    <i className="ri-arrow-right-circle-line ri-2x"></i>
                  </span>
                  Ecosystem Quiz App{' '}
                  <span className="text-secondary text-sm ml-2">
                    (Sep 2021 - Okt 2021)
                  </span>
                </h5>
                <p className="text-base font-medium text-secondary text-justify">
                  This is Student Online Learning System project developed using
                  Laravel for the backend. API documentation created using
                  swagger.
                </p>
              </div>
              <div className="p-3 lg:absolute lg:bottom-0">
                <a
                  href="https://github.com/alvietomhf/quiz-api"
                  className="text-white hover:text-slate-300 transition"
                >
                  <span className="align-middle">
                    <i className="ri-github-fill ri-2x"></i>
                  </span>
                </a>
                <a
                  href=""
                  className="text-white bg-primary p-2 rounded-xl hover:bg-primary-300 hover:text-slate-300 ml-3 transition"
                >
                  <span className="align-middle mr-1">
                    <i className="ri-links-fill"></i>
                  </span>
                  Launch
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-11/12 gap-6 mb-6">
            <div className="lg:flex-1 lg:w-1/2 border border-primary-300 rounded-md shadow shadow-primary-300 lg:relative">
              <div className="overflow-hidden rounded-t-md shadow-md">
                <img
                  src="/img/portfolio/essay.png"
                  alt="Landing Page"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3 lg:mb-16">
                <h5 className="text-white mb-2 font-bold">
                  <span className="text-primary mr-2 align-middle">
                    <i className="ri-arrow-right-circle-line ri-2x"></i>
                  </span>
                  Essay Automatic Scoring{' '}
                  <span className="text-secondary text-sm ml-2">
                    (Feb 2022 - Apr 2022)
                  </span>
                </h5>
                <p className="text-base font-medium text-secondary text-justify">
                  This is Student Online Learning System project developed using
                  Laravel. On this website there is an student essay test where
                  the assessment method is done automatically using the Rabin
                  Karp algorithm with a synonym recognition approach.
                </p>
              </div>
              <div className="p-3 lg:absolute lg:bottom-0">
                <a
                  href="https://github.com/alvietomhf/essay"
                  className="text-white hover:text-slate-300 transition"
                >
                  <span className="align-middle">
                    <i className="ri-github-fill ri-2x"></i>
                  </span>
                </a>
                <a
                  href=""
                  className="text-white bg-primary p-2 rounded-xl hover:bg-primary-300 hover:text-slate-300 ml-3 transition"
                >
                  <span className="align-middle mr-1">
                    <i className="ri-links-fill"></i>
                  </span>
                  Launch
                </a>
              </div>
            </div>

            <div className="lg:flex-1 lg:w-1/2 border border-primary-300 rounded-md shadow shadow-primary-300 lg:relative">
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-t-md shadow-md">
                  <img
                    src="/img/portfolio/cpp.png"
                    alt="Landing Page"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3 lg:mb-16">
                  <h5 className="text-white mb-2 font-bold">
                    <span className="text-primary mr-2 align-middle">
                      <i className="ri-arrow-right-circle-line ri-2x"></i>
                    </span>
                    TestCPP{' '}
                    <span className="text-secondary text-sm ml-2">
                      (May 2022 - Aug 2022)
                    </span>
                  </h5>
                  <p className="text-base font-medium text-secondary text-justify">
                    This is Student Online Learning System project developed
                    using Laravel. On this website there is a compiler for
                    student competency test, which is made by integrating third
                    party (Jdoodle).
                  </p>
                </div>
                <div className="p-3 lg:absolute lg:bottom-0">
                  <a
                    href="https://github.com/alvietomhf/test-cpp"
                    className="text-white hover:text-slate-300 transition"
                  >
                    <span className="align-middle">
                      <i className="ri-github-fill ri-2x"></i>
                    </span>
                  </a>
                  <a
                    href=""
                    className="text-white bg-primary p-2 rounded-xl hover:bg-primary-300 hover:text-slate-300 ml-3 transition"
                  >
                    <span className="align-middle mr-1">
                      <i className="ri-links-fill"></i>
                    </span>
                    Launch
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-11/12 gap-6 mb-6">
            <div className="lg:flex-1 lg:w-1/2 border border-primary-300 rounded-md shadow shadow-primary-300 lg:relative">
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-t-md shadow-md">
                  <img
                    src="/img/portfolio/internhunt.png"
                    alt="Landing Page"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3 lg:mb-16">
                  <h5 className="text-white mb-2 font-bold">
                    <span className="text-primary mr-2 align-middle">
                      <i className="ri-arrow-right-circle-line ri-2x"></i>
                    </span>
                    Intern Hunt{' '}
                    <span className="text-secondary text-sm ml-2">
                      (Apr 2021 - Jun 2021)
                    </span>
                  </h5>
                  <p className="text-base font-medium text-secondary text-justify">
                    This is a &quot;Monitoring and Internship Seekers&quot;
                    project for students who are going to do an internship. On
                    this project, applies the SAW method which is a method that
                    provides certain criteria that have a weighted value which
                    from the sum of the weights will be obtained the results
                    that will be the final decision. Developed using Laravel and
                    implementing PWA (Progressive Web App).
                  </p>
                </div>
                <div className="p-3 lg:absolute lg:bottom-0">
                  <a
                    href="https://github.com/alvietomhf/intern-hunt"
                    className="text-white hover:text-slate-300 transition"
                  >
                    <span className="align-middle">
                      <i className="ri-github-fill ri-2x"></i>
                    </span>
                  </a>
                  <a
                    href=""
                    className="text-white bg-primary p-2 rounded-xl hover:bg-primary-300 hover:text-slate-300 ml-3 transition"
                  >
                    <span className="align-middle mr-1">
                      <i className="ri-links-fill"></i>
                    </span>
                    Launch
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:flex-1 lg:w-1/2 border border-primary-300 rounded-md shadow shadow-primary-300 lg:relative">
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-t-md shadow-md">
                  <img
                    src="/img/portfolio/umkm.png"
                    alt="Landing Page"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3">
                  <h5 className="text-white mb-2 font-bold">
                    <span className="text-primary mr-2 align-middle">
                      <i className="ri-arrow-right-circle-line ri-2x"></i>
                    </span>
                    Sistem Informasi UMKM Malang{' '}
                    <span className="text-secondary text-sm ml-2">
                      (Feb 2021 - Mar 2021)
                    </span>
                  </h5>
                  <p className="text-base font-medium text-secondary text-justify">
                    This is a project used to manage a cooperative or UMKM.
                    There are several modules including Business, Product, User.
                    It also includes Excel data export and import features for
                    data management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-12 pb-16">
        <div className="container">
          <div className="w-full border-t border-slate-700 pt-10">
            <div className="mb-5 flex items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/alvietomhf"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-box-fill ri-2x"></i>
              </a>
              <a
                href="https://github.com/alvietomhf"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-github-fill ri-2x"></i>
              </a>
              <a href="mailto: haykalcs@gmail.com" className="text-primary">
                <i className="ri-mail-send-fill ri-2x"></i>
              </a>
            </div>
            <p className="text-center text-xs font-medium text-slate-500">
              © Copyright 2022 - Developed by
              <a
                href="mailto: haykalcs@gmail.com"
                className="font-bold text-primary"
              >
                {' Alvieto Haykal '}
              </a>
              All right reserved.
            </p>
          </div>
        </div>
      </section>

      <footer className="navbar-fixed-footer -bottom-1 pb-1 left-0 flex w-full items-center lg:hidden">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="flex items-center px-4">
              <nav
                id="nav-menu"
                className="w-full py-2 static block max-w-full"
              >
                <ul className="flex align-middle">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-8 flex py-2 text-base text-white group-hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-white group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="mx-8 flex py-2 text-base text-white group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={classNames(
          scrollPosition > 0 ? 'flex' : 'hidden',
          'fixed bottom-[70px] md:bottom-[75px] lg:bottom-4 right-4 z-[9999] h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse'
        )}
        id="to-top"
      >
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
      </button>
    </Fragment>
  )
}
