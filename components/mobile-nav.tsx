import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./nav";
import Logo from "./logo";
import Socials from "./socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <AlignJustify className="cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetContent>
        {/* Required for shadcn Dialog */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" />
            <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;