import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./socials";
import ProfilePhoto from "./profile-photo";

const Hero: React.FC = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-[url('/hero/hero-bg.png')] bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text Content */}
          <div className="flex max-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Virtual Assistant
            </div>
            <h1 className="h1 mb-4">Hi, I am Korina Javier</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Organized and reliable, I help with scheduling, email management,
              to-do lists, and data entry, providing efficient and proactive
              support to enhance productivity.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contacts">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* Profile Section */}
          <div className="hidden xl:flex justify-center items-center w-[380px] h-[360px]">
            <div className="w-full h-full flex justify-center items-center relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-[url('/hero/shape-2-light.svg')] dark:bg-[url('/hero/shape-2-dark.svg')] bg-contain bg-center bg-no-repeat" />
              
              {/* Profile Photo */}
              <ProfilePhoto
                containerStyles="w-full h-full bg-[url('/hero/shape-1-light.svg')] bg-contain bg-no-repeat flex justify-center items-center relative"
                imgSrc="/hero/korina-sample.png"
                imgStyles="w-full h-full object-cover object-bottom"
                maskUrl="/hero/shape-1.svg"
              />
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;