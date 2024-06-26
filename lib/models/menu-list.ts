import { GoHome } from "react-icons/go";
import { IoBulbOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { AiFillAudio } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { PiCalendarBlank } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

type Submenu = {
  href: string;
  label: string;
  sactive: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Home",
          active: pathname.endsWith("/dashboard"),
          icon: GoHome,
          submenus: [],
        },
        {
          href: "/dashboard/insights",
          label: "Insights",
          active: pathname.includes("/dashboard/insights"),
          icon: IoBulbOutline,
          submenus: [],
        },
        {
          href: "/dashboard/posts",
          label: "Posts",
          active: pathname.includes("/dashboard/posts"),
          icon: FaRegPenToSquare,
          submenus: [
            {
              href: "/dashboard/posts/blog",
              label: "Add blog",
              sactive: pathname.includes("/dashboard/posts/blog"),
            },
            {
              href: "/dashboard/posts/listing",
              label: "Blog Listing",
              sactive: pathname.includes("/dashboard/posts/listing"),
            },
          ],
        },
        {
          href: "/dashboard/category",
          label: "Category",
          active: pathname.includes("/dashboard/category"),
          icon: MdOutlineCategory,
          submenus: [],
        },
        {
          href: "/dashboard/podcasts",
          label: "Podcasts",
          active: pathname.includes("/dashboard/podcasts"),
          icon: AiFillAudio,
          submenus: [],
        },
        {
          href: "/dashboard/commerce",
          label: "Commerce",
          active: pathname.includes("/dashboard/commerce"),
          icon: PiShoppingBagLight,
          submenus: [
            {
              href: "/dashboard/commerce/products",
              label: "Products",
              sactive: pathname.includes("/dashboard/commerce/products"),
            },
            {
              href: "/dashboard/commerce/orders",
              label: "Orders",
              sactive: pathname.includes("/dashboard/commerce/orders"),
            },
            {
              href: "/dashboard/commerce/coupons",
              label: "Coupons",
              sactive: pathname.includes("/dashboard/commerce/coupons"),
            },
          ],
        },
        {
          href: "/dashboard/livestream",
          label: "Livestream",
          active: pathname.includes("/dashboard/livestream"),
          icon: CiStreamOn,
          submenus: [],
        },
        {
          href: "/dashboard/events",
          label: "Events",
          active: pathname.includes("/dashboard/events"),
          icon: PiCalendarBlank,
          submenus: [],
        },
        {
          href: "/dashboard/courses",
          label: "Courses",
          active: pathname.includes("/dashboard/courses"),
          icon: PiBooks,
          submenus: [],
        },
        {
          href: "/dashboard/users",
          label: "Users",
          active: pathname.includes("/dashboard/users"),
          icon: CiUser,
          submenus: [],
        },
        {
          href: "/dashboard/billing",
          label: "billing",
          active: pathname.includes("/dashboard/billing"),
          icon: CgNotes,
          submenus: [],
        },
        {
          href: "/dashboard/return",
          label: "Return",
          active: pathname.includes("/dashboard/return"),
          icon: MdOutlineAssignmentReturn,
          submenus: [
            {
              href: "/dashboard/return/cancelapproval",
              label: "Cancelation Approval",
              sactive: false,
            },
            {
              href: "/dashboard/return/pickup",
              label: "Return Pick up Approval",
              sactive: false,
            },
            {
              href: "/dashboard/return/refund",
              label: "Refund",
              sactive: false,
            },
          ],
        },
      ],
    },
  ];
}
