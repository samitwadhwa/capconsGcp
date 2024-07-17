"use client";
import React from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

interface InterestTagsProps extends BadgeProps {
  children: React.ReactNode;
  setSelected?: React.Dispatch<React.SetStateAction<boolean>>;
  selected?: boolean;
  onValueChange?: (value: boolean) => void;
}

const InterestTags: React.FC<InterestTagsProps> = ({
  children,
  setSelected,
  selected,
  className,
  onValueChange,
  ...rest
}) => {
  const [internalSelected, setInternalSelected] =
    React.useState<boolean>(false);
  const isSelected = selected ?? internalSelected;

  const toggleSelection = () => {
    const newSelectedValue = !isSelected;

    if (setSelected) {
      setSelected(newSelectedValue);
    } else {
      setInternalSelected(newSelectedValue);
    }

    if (onValueChange) {
      onValueChange(newSelectedValue);
    }
  };

  return (
    <Badge
      {...rest}
      variant={isSelected ? "default" : "outline"}
      onClick={toggleSelection}
      className={cn(
        "space-x-2 cursor-pointer w-fit rounded-sm text-foreground text-sm px-3 py-2 flex",
        className
      )}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onValueChange && onValueChange(!isSelected)}
        className="hidden"
        readOnly
      />
      <span>{children || "Tag"}</span>
      <IoClose
        size={14}
        className={cn("transition-all", !isSelected ? "rotate-45" : "")}
      />
    </Badge>
  );
};

InterestTags.displayName = "InterestTags";

export default InterestTags;
