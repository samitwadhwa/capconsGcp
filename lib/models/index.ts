import { IoIosQuote } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";

export const products: Product[] = [
  {
    name: "Blogs",
    description:
      "Insights, Ideas & latest feature launch: Your Go-To Hub for the Latest in Social",
    href: "#",
    icon: "description",
  },
  {
    name: "Events",
    description:
      "Learn, Engage, Excel: Your Gateway to know partners, team at CapCons",
    href: "#",
    icon: "editor_choice",
  },
  {
    name: "How-to videos",
    description: "Steps-by-Steps guide to community creation",
    href: "#",
    icon: "animated_images",
  },
  {
    name: "Stormnorms",
    description: "Contest that celebrates creators",
    href: "#",
    icon: IoIosQuote,
  },
];

export const callsToAction: CallToAction[] = [
  { name: "Book a demo", href: "#", icon: IoMdPlayCircle },
  { name: "Contact us", href: "#", icon: FaPhoneAlt },
];
