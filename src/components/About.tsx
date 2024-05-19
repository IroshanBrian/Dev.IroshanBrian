import grid1 from '../assets/grid/grid1.jpg'
import grid2 from '../assets/grid/grid2.jpeg'
import grid3 from '../assets/grid/grid3.jpeg'

const About = () => {
     return (
          <section className="h-max py-12">
               <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-8">
                         <h1 id='#about' className="text-white text-4xl font-extrabold border-b-2 border-red-500 pb-2">About<span className="text-cyan-200">.</span></h1>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap font-pop space-y-8 lg:space-y-0 lg:space-x-8">
                         <div className="text-white lg:w-1/2">
                              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                              <p className="leading-relaxed">I am a self taught professional full stack developer with 3+ years of experience in website development. I specialize in developing and maintaining web applications using a variety of programming languages.</p>
                         </div>
                         <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                              <div className="col-span-1">
                                   <img src={grid1} alt="Description 1" className="w-full h-auto rounded-lg shadow-lg" />
                              </div>
                              <div className="col-span-1">
                                   <img src={grid2} alt="Description 2" className="w-full h-auto rounded-lg shadow-lg" />
                              </div>
                              <div className="col-span-2">
                                   <img src={grid3} alt="Description 3" className="w-full h-auto rounded-lg shadow-lg" />
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )
}

export default About
