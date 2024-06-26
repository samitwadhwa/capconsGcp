import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className=" rounded-full bg-muted overflow-hidden absolute top-[22px] -right-[16px] z-20  ">
      <Button
        onClick={() => setIsOpen?.()}
        className="rounded-md hover:bg-white/20 border-none bg-muted w-8 h-8"
        variant="outline"
        size="icon"
      >
        <MdKeyboardDoubleArrowLeft
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}
