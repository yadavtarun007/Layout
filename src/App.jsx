import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/image";
import Grid from "./components/grid";
import { GiLindenLeaf } from "react-icons/gi";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />

      <div className="h-9 m-auto"></div>

      <Image />
      <div className="h-9 m-auto"></div>

      <Grid source={"https://image.jimcdn.com/app/cms/image/transf/dimension=296x10000:format=jpg/path/s547d5631c0ee5571/image/i9e4911d2e6de113e/version/1491914241/image.jpg"}
      />

      <div className="h-9 m-auto"></div>

      <div className="h-[27rem] w-[100%] mx-auto px-5">
        <div className="relative h-[100%] w-[100%]">
          <img
            src="https://sweetmansfarm.com/wp-content/uploads/2019/03/Farm-Vegetables3_opt.jpg"
            alt="This is image"
            className="h-full w-full block"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="h-full w-full bg-black absolute opacity-40 top-0 left-0"></div>

            <div className="z-10 flex flex-col items-center">
              <h1 className="text-white text-4xl mb-6">FRESH & NON-GMO PRODUCTS</h1>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, assumenda!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-9 m-auto"></div>
      <Grid icon={<GiLindenLeaf className="text-5xl text-green-400"/>}/>

      <div className="h-9 m-auto"></div>
      <Footer/>
    </div>
  );
}

export default App;