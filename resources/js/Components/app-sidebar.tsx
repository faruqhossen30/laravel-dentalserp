import { NavMain } from '@/Components/nav-main';
import { NavProjects } from '@/Components/nav-projects';
import { NavUser } from '@/Components/nav-user';
import { TeamSwitcher } from '@/Components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/Components/ui/sidebar';
import { data } from '@/data/sidebar-data';
import { usePage } from '@inertiajs/react';
import * as React from 'react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user;

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavProjects projects={data.projects} />
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={{ ...user, avatar: '' }} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
