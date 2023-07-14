import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import { BiGitRepoForked } from "react-icons/bi";


export const SidebarData =[
    {
        title: "Dashboard",
        icon:<BiSolidDashboard/>,
        link: "/dashboard"
    },
    {
        title: "Notifications",
        icon:<BiBell/>,
        link: "/notifications"
    },
    {
        title: "Create Team",
        icon:<BiAddToQueue/>,
        link: "/create team"
    },
    {
        title: "Join Team",
        icon:<BiGitRepoForked/>,
        link: "/join team"
    },
]

