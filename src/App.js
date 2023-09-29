import ImageComponent from "./components/imageComponent";
import InfoBar from "./components/infoBar";
import briefcase from "./assets/icons/briefcase.svg";
import SkillInfoBar from "./components/skillInfoBar";
import Experience from "./components/experience";

function App() {
  const infoTextArray = [
    "Engineer",
    "New York, USA",
    "ex@example.com",
    "1234567890",
  ];
  const skillNameArray = ["HTML", "CSS", "Javascript", "PHP"];
  const languagesArray = ["English", "Hindi", "Methli"];

  const setDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <>
      <div className="flex h-6 bg-slate-100 dark:bg-black dark:text-white">
        <span className=" my-1 ">Light</span>
        <div className="bg-blue-100 my-1 mx-2 w-10 h-6">
          <div
            className="w-5 h-6 rounded-full bg-white"
            onClick={() => setDarkMode}
          ></div>
        </div>
        <span className=" my-1 ">Dark</span>
      </div>
      <main className="bg-slate-100 dark:bg-black dark:text-white overflow-x-hidden grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
        <aside className="m-8 px-10 py-10 border-slate-500 border-2 shadow-xl md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-span-3">
          <div>
            <ImageComponent
              imgSrc={require("./assets/images/person-thumbnail.png")}
              imgAlt="logo"
            />
            <h2 className="relative font-bold text-5xl bottom-24 text-center text-white">
              John Doe
            </h2>
          </div>
          <div>
            {infoTextArray.map((element) => {
              return <InfoBar infoText={element} />;
            })}
          </div>
          <hr />
          <div className="flex h-10 py-8">
            <img src={briefcase} alt="logo" />
            <h2 className="flex items-center font-bold  text-2xl bottom-24">
              Skills
            </h2>
          </div>
          {skillNameArray.map((element) => {
            return <SkillInfoBar skillName={element} skillPercentage="91%" />;
          })}
          <hr />
          <div className="flex h-10 py-8">
            <img src={briefcase} alt="logo" />
            <h2 className="flex items-center font-bold  text-2xl bottom-24">
              Languages
            </h2>
          </div>

          {languagesArray.map((element) => {
            return <SkillInfoBar skillName={element} skillPercentage="91%" />;
          })}
        </aside>
        <section className="  md:col-start-3 md:col-span-2 lg:col-start-4 lg:col-span-5 ">
          <section className="m-8 px-10 py-10 border-slate-500 border-2 shadow-xl">
            <h3 className="flex items-center font-bold  text-2xl bottom-24">
              Work Experience
            </h3>
            <div>
              <Experience workTitle="Frontend" />
              <Experience workTitle="Backend" />
            </div>
          </section>
          <section className="m-8 px-10 py-10 border-slate-500 border-2 shadow-xl">
            <h3 className="flex items-center font-bold  text-2xl bottom-24">
              Education
            </h3>
            <Experience workTitle="Bechlores" />
            <Experience workTitle="HighSchool" />
          </section>
        </section>
      </main>
      <footer className="bg-cyan-500 flex flex-col">
        <h3 className="flex font-bold text-2xl text-white content-center justify-center">
          Find me on other platform
        </h3>
        <div className="flex flex-1 content-center justify-center w-full py-4">
          <a href="/">
            <img src={briefcase} alt="logo" className="w-8 mx-2" />
          </a>
          <a href="/">
            <img src={briefcase} alt="logo" className="w-8 mx-2" />
          </a>
          <a href="/">
            <img src={briefcase} alt="logo" className="w-8 mx-2" />
          </a>
          <a href="/">
            <img src={briefcase} alt="logo" className="w-8 mx-2" />
          </a>
          <a href="/">
            <img src={briefcase} alt="logo" className="w-8 mx-2" />
          </a>
        </div>
        <div>
          <h1 className="flex font-bold text-2xl text-white content-center justify-center">
            Created By <span className="pl-2 decoration-solid"> @Anand</span>
          </h1>
        </div>
      </footer>
    </>
  );
}

export default App;
