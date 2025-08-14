import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './static/css/main.css';
import Navbar from '~/component/Navbar';
import Footer from '~/component/Footer';
import LightMode from '~/component/LightMode';

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: "(function(){try{var k='theme';var s=localStorage.getItem(k);var m=s===null?2:Number(s);if(s===null)localStorage.setItem(k,String(m));var apply=function(mm){var root=document.documentElement;var isDark=mm===1||(mm===2&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);root.classList[isDark?'remove':'add']('dark');};apply(m);}catch(e){}})();",
                    }}
                />
                <Meta />
                <Links />
            </head>
            <body className="h-[100svh] w-full dark:bg-white dark:text-black bg-black text-white flex justify-center p-2">
                <div className="flex flex-col max-w-[1024px] w-full h-full gap-2">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
                <LightMode />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details =
            error.status === 404
                ? 'The requested page could not be found.'
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
