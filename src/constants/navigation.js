
import { RiHome8Fill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { MdOutlineTheaters } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

export const  navigation = [
    { label: 'TV Shows', href: '/tv' ,icon:<PiTelevisionFill/> },
    { label: 'Movies', href: '/movie', icon:<MdOutlineTheaters/>}
  ];
  
export const mobileNav=[
    {
      label:"Home",
      href: '/',
      icon:<RiHome8Fill/>
    },
    ...navigation,
  {
    label:"Search",
    href: '/search',
    icon:<IoSearchSharp/>
  }
  ]