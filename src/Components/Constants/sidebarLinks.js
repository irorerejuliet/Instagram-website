import { BsMessenger } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdCreateNewFolder, MdOutlineExplore } from "react-icons/md";
import { TbFreezeRow } from "react-icons/tb";
import { TiHome } from "react-icons/ti";

 
 export const sidebarLinks =[
 {
        name: "Home",
        link: "/Home",
        icon: TiHome ,
        id: 1,
      },
      {
        name: "Search",
        link: "/search",
        icon: IoSearchOutline,
        id: 2,
      },
      {
        name: "Explore",
        link: "/Explore",
        icon: MdOutlineExplore,
        id: 3,
      },
      {
        name: "Reels",
        link: "/Reels",
        icon: TbFreezeRow,
        id: 4,
      },
      {
        name: "Messages",
        link: "/Messages",
        icon: BsMessenger ,
        id: 5,
      },
      {
        name: "Notifications",
        link: "/Notifications",
        icon: IoIosHeartEmpty,
        id: 6,
      },
      {
        name: "Create",
        link: "/Create",
        icon: MdCreateNewFolder,
        id: 7,
      },
    ];
 