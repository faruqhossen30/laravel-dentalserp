import {
    AudioWaveform,
    Command,
    Frame,
    SquareTerminal,
    User,
    User2Icon,
} from 'lucide-react';

export const data = {
    teams: [
        {
            name: 'Dental Agency',
            logo: User2Icon,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
        },
    ],
    navMain: [
        {
            title: 'Playground',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'History',
                    url: '#',
                },
                {
                    title: 'Starred',
                    url: '#',
                },
                {
                    title: 'Settings',
                    url: '#',
                },
            ],
        },
        {
            title: 'Admin',
            url: '#',
            icon: User,
            isActive: false,
            items: [
                {
                    title: 'Users',
                    url: route('admin.users.index'),
                },
                {
                    title: 'Admins',
                    url: route('admin.admins.index'),
                },
                {
                    title: 'Roles',
                    url: route('admin.roles.index'),
                },
                {
                    title: 'Categories',
                    url: route('admin.categories.index'),
                },
                {
                    title: 'Blogs',
                    url: route('admin.blogs.index'),
                },
                {
                    title: 'Contacts',
                    url: route('admin.contacts.index'),
                },
                {
                    title: 'General Settings',
                    url: route('admin.general-setting.index'),
                },
                {
                    title: 'SMTP Settings',
                    url: route('admin.smtp-setting.index'),
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Dashboard',
            url: route('dashboard'),
            icon: Frame,
        },
    ],
};
