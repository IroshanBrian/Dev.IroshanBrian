import Hero from "../Hero";

export function Bg() {
     return (
          <div className="absolute top-500 left-0 z-[-20] h-fit w-full dark:bg-[black] bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
               <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
               <Hero />
          </div>
     );
}
