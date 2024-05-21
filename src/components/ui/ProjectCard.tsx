"use client";
import { PinContainer } from "../ui/3d-pin";

interface ProjectCardProps {
     projectName: string;
     projectDesc: string;
     projectImg: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, projectDesc, projectImg }) => {
     return (
          <div className="relative z-30 flex items-center justify-center">
               <PinContainer
                    title={projectName}
                    href=""
               >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                         <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                              {projectName}
                         </h2>
                         <div className="text-base !m-0 !p-0 font-normal">
                              <span className="text-slate-500 ">
                                   {projectDesc}
                              </span>
                         </div>
                         <img src={projectImg} alt={projectName} width={250} height={500} className="w-full rounded-lg mt-4" />
                    </div>
               </PinContainer>
          </div>
     );
}
export default ProjectCard;