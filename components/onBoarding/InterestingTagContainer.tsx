"use client";
import React, { useState, useCallback } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import InterestTags from "./interestTags";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { IoIosArrowDown } from "react-icons/io";

interface InterestingTagContainerProps {
  TagList: string[];
  tagStyle?: string;
  heading?: string;
  icon?: React.ReactNode;
  onValueChange?: (selectedInterests: string[]) => void;
}

const InterestingTagContainer: React.FC<InterestingTagContainerProps> = ({
  TagList,
  tagStyle,
  heading,
  icon,
  onValueChange,
}) => {
  const [opened, setOpened] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(
    new Set()
  );

  const handleTagChange = useCallback(
    (tag: string, selected: boolean) => {
      setSelectedInterests((prev) => {
        const newSelectedInterests = new Set(prev);
        if (selected) {
          newSelectedInterests.add(tag);
        } else {
          newSelectedInterests.delete(tag);
        }

        onValueChange?.(Array.from(newSelectedInterests));
        return newSelectedInterests;
      });
    },
    [onValueChange]
  );

  const renderTags = (tags: string[]) => (
    <div className="w-full flex gap-2.5 flex-wrap">
      {tags.map((tag, index) => (
        <InterestTags
          onValueChange={(e) => handleTagChange(tag, e)}
          className={cn(tagStyle)}
          key={index}
        >
          {tag}
        </InterestTags>
      ))}
    </div>
  );

  const renderCollapsibleTags = () => {
    const HeaderTags = TagList.slice(0, 10);
    const BodyTags = TagList.slice(10);

    return (
      <Collapsible>
        <h4 className="scroll-m-20 flex space-x-2 items-center py-3 text-xl font-semibold tracking-tight">
          {icon} <span>{heading}</span>
        </h4>
        {renderTags(HeaderTags)}
        <CollapsibleContent>
          <div className="w-full mt-2.5">{renderTags(BodyTags)}</div>
        </CollapsibleContent>
        {BodyTags.length > 0 && (
          <CollapsibleTrigger
            onClick={() => setOpened(!opened)}
            className="flex text-sm mt-2 text-accent relative w-full items-center gap-x-2"
          >
            <Separator className="flex-1" />
            <span>Show More</span>
            <IoIosArrowDown
              className={cn(
                "transition-all",
                opened ? "rotate-180" : "rotate-0"
              )}
            />
            <Separator className="flex-1" />
          </CollapsibleTrigger>
        )}
      </Collapsible>
    );
  };

  return TagList.length > 10 ? (
    renderCollapsibleTags()
  ) : (
    <div className="py-4">
      <h4 className="scroll-m-20 flex space-x-2 items-center py-3 text-xl font-semibold tracking-tight">
        {icon} <span>{heading}</span>
      </h4>
      {renderTags(TagList)}
      <Separator className="flex-1 mt-4" />
    </div>
  );
};

export default InterestingTagContainer;
