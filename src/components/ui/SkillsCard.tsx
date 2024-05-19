import { BackgroundGradient } from "./background-gradient";

interface SkillsCardProps {
     imgSrc: string;
     label: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ imgSrc, label }) => {
     return (
          <div className="max-w-[200px] mx-auto">
               <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                    <img
                         src={imgSrc}
                         alt={label}
                         height={200}
                         width={200}
                         className="object-contain"
                    />
                    <p className="font-title font-medium text-center sm:text-lg text-black mt-4 dark:text-neutral-200">
                         {label}
                    </p>
               </BackgroundGradient>
          </div>
     );
};

export default SkillsCard;
