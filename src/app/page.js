import Image from "next/image";
import HeaderLogo from "../media/header-logo.png";
import SaudDP from "../media/SaudDP.png";
import ShreytamDP from "../media/ShreytamDP.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 bg-white text-black pb-20">
      <div className="flex justify-center py-10 max-md:w-40">
        <Image src={HeaderLogo} width={300} />
      </div>
      <h1 className="text-6xl font-bold max-md:text-4xl text-center">
        We build <span className="text-sky-500">awesome AI</span> projects!
      </h1>
      <h2 className="mt-8 bg-sky-500 rounded-full py-1 px-2 text-white text-lg max-md:text-base">
        Our 2024 resolution:{" "}
        <u className="text-black font-semibold">build 69 projects</u> 😏
      </h2>
      <section className="flex flex-col text-center mt-20 gap-3">
        <h1 className="text-2xl underline font-bold mb-20">Who we are?</h1>

        {/* SAUD SECTION */}
        <div className="flex pr-20 justify-evenly max-md:flex-col max-md:pr-0">
          <div className="flex-1 flex justify-center">
            <Image className="rounded-md shadow-lg" src={SaudDP} width={300} height={300}/>
          </div>
          <div className="text-left flex-1 max-md:mt-10 max-md:text-center">
            <h1 className="text-3xl font-bold">Saud Hashmi</h1>
            <code className="text-sky-500">Co-Founder @ OnlyGANs, Head of Engineering @ Meme-Ed</code>
            <p className="text-sm">Saud is an educator, engineer and entrepreneur (E3) working towards creating real social value in the ventures he is involved in. He bases his work on the E3 philosophy, a strong set of tenets he lives by in his professional life. Primarily, he has an engineering background in computer science, which means he is just as comfortable with building AI models, as he is with developing designs & websites. What makes him unique is his persistence to learn and build whatever is required.</p><br/>
            <div className="flex gap-2 justify-center text-sm text-white">
              <a className="px-2 py-1 bg-gradient-to-bl from-sky-500 to-sky-300 rounded-full hover:bg-gradient-to-t hover:text-black duration-150" href="https://saudhashmi.com/resume">Resume</a>
              <a className="px-2 py-1 bg-gradient-to-bl from-sky-500 to-sky-300 rounded-full hover:bg-gradient-to-t hover:text-black duration-150" href="https://github.com/BetterCallSaud">GitHub</a>
              <a className="px-2 py-1 bg-gradient-to-bl from-sky-500 to-sky-300 rounded-full hover:bg-gradient-to-t hover:text-black duration-150" href="https://twitter.com/BtrCallSaud">Twitter / X</a>
            </div>
          </div>
        </div>

        {/* SHREYTAM SECTION */}
        <div className="mt-10 flex pr-20 justify-evenly max-md:flex-col max-md:pr-0">
          <div className="flex-1 flex justify-center">
            <Image className="rounded-md shadow-lg" src={ShreytamDP} width={300} height={300}/>
          </div>
          <div className="text-left flex-1 max-md:mt-10 max-md:text-center">
            <h1 className="text-3xl font-bold">Shreytam Goyal</h1>
            <code className="text-sky-500">Intern @ TDB.AI, Co-Founder @ OnlyGANs</code>
            <p className="text-sm">Shreytam is a typical geek. He is a total Apple/Nvidia/Samsung/Sony fanatic. Considering all those companies, it is safe to say he's invested in R&D projects from all around the world, esp. in the fields of semiconductors, computing hardware, computer vision and analog computing. Once he's invested in something, he gets into it deep; analysing and absorbing all concepts necessary behind the workings of some technology. His best part: asking good questions.</p><br/>
            <div className="flex gap-2 justify-center text-sm text-white">
              <a className="px-2 py-1 bg-gradient-to-bl from-sky-500 to-sky-300 rounded-full hover:bg-gradient-to-t hover:text-black duration-150" href="https://github.com/ShreytamGoyal">GitHub</a>
              <a className="px-2 py-1 bg-gradient-to-bl from-sky-500 to-sky-300 rounded-full hover:bg-gradient-to-t hover:text-black duration-150" href="https://twitter.com/Shreytamgoyall">Twitter / X</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
