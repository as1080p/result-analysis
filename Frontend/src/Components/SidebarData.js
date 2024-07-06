import React from 'react';
import * as FaIcons from "react-icons/fa";

import { IoMdClose } from "react-icons/io";
import { PiStudentBold} from "react-icons/pi";
import { MdOutlineHome } from "react-icons/md";
import { PiChalkboardTeacherLight} from "react-icons/pi";
import {RiAdminLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";




export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<MdOutlineHome />,
        cName:'nav-text'
    },
    {
        title:'Student',
        path:'/student',
        icon:<PiStudentBold />,
        cName:'nav-text'
    },
    {
        title:'Teacher',
        path:'/teacher',
        icon:<PiChalkboardTeacherLight />,
        cName:'nav-text'
    },
    {
        title:'Admin',
        path:'/admin',
        icon:<RiAdminLine />,
        cName:'nav-text'
    }
]

export default SidebarData;