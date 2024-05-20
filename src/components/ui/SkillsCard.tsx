import { BackgroundGradient } from "./background-gradient";

interface SkillsCardProps {
     imgSrc: string;
     label: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ imgSrc, label }) => {
     return (
          <div className="max-w-[100px] mx-auto">
               <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                    <img
                         src={imgSrc}
                         alt={label}
                         height={100}
                         width={100}
                         className="object-contain"
                    />
               </BackgroundGradient>
          </div>
     );
};

export default SkillsCard;
