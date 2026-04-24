import { PropsWithChildren, ReactNode } from 'react';
import AdminLayout from './AdminLayout';

export default function AuthenticatedLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <AdminLayout header={header}>
            {children}
        </AdminLayout>
    );
}
