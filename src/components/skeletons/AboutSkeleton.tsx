
const AboutSkeleton = () => {
     return (
          <section id="about" className="h-max py-12">
               <div className="max-w-6xl mx-auto px-4">
                    <div
                         className="mb-8"
                    >
                         <div className="bg-gray-700 h-10 w-2/3 rounded-md"></div>
                    </div>
                    <div className="m-5 flex flex-wrap lg:flex-nowrap font-title space-y-8 lg:space-y-0 lg:space-x-8">
                         <div
                              className="text-white lg:w-1/2"
                         >
                              <div>
                                   <div className="bg-gray-700 h-8 w-1/4 rounded-md"></div>
                                   <div className='w-[150px] h-6 bg-gray-700 mt-4 rounded-md'></div>
                              </div>
                              <div className="bg-gray-700 h-24 w-full mt-5 rounded-md"></div>
                              <div className='ml-5 mt-10'>
                                   <div className="flex items-center mb-5">
                                        <div className="bg-gray-700 h-6 w-6 rounded-full"></div>
                                        <span className="ml-2 bg-gray-700 h-6 w-2/3 rounded-md"></span>
                                   </div>
                                   <div className="flex items-center mb-5">
                                        <div className="bg-gray-700 h-6 w-6 rounded-full"></div>
                                        <span className="ml-2 bg-gray-700 h-6 w-2/3 rounded-md"></span>
                                   </div>
                              </div>
                              <div className="mt-10">
                                   <div className="flex flex-col">
                                        <div className="bg-gray-700 h-6 w-1/4 rounded-md"></div>
                                        <div className="flex items-center mt-4">
                                             <div className="bg-gray-700 h-6 w-6 rounded-full"></div>
                                             <span className="ml-2 bg-gray-700 h-6 w-1/3 rounded-md"></span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div

                              className="lg:w-1/2 grid grid-cols-2 gap-4"
                         >
                              <div
                                   className="col-span-1"
                              >
                                   <div className="bg-gray-700 h-48 w-full rounded-lg"></div>
                              </div>
                              <div
                                   className="col-span-1"
                              >
                                   <div className="bg-gray-700 h-48 w-full rounded-lg"></div>
                              </div>
                              <div
                                   className="col-span-2"
                              >
                                   <div className="bg-gray-700 h-48 w-full rounded-lg"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default AboutSkeleton
