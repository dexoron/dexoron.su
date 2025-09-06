import type { Route } from './+types/home';
import speeks from "app/static/img/projects/speeks.png"

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Dexoron | Проекты' },
        { name: 'description', content: 'Мои проекты' },
    ];
}

export default function Work() {
    return (
        <div className="h-full w-full flex flex-col gap-2">
            <h1 className="text-center text-4xl font-bold">Мои проекты</h1>
            <div className="w-full flex md:flex-row flex-col gap-2">
                <div className="dark:bg-black/10 bg-white/10 p-2 rounded-[8px] gap-2">
                    <img
                        src={speeks}
                        alt=""
                        className="w-full rounded-[8px]"
                    />
                    <p className="text-center text-2xl font-bold">Speeks</p>
                    <p className="w-full">
                        Speeks App — это современное веб-приложение для общения,
                        включающее систему аутентификации, чаты, список друзей и
                        пользовательские профили.
                    </p>
                    <div className="flex flex-row justify-between">
                        <a href="https://speeks.dexoron.su" className="p-2 dark:bg-black/10 bg-white/10 rounded-[8px] hover:bg-white/20 dark:hover:bg-black/20">
                            Сайт
                        </a>
                        <a href="https://github.com/dexoron/speeks-app" className="p-2 dark:bg-black/10 bg-white/10 rounded-[8px] hover:bg-white/20 dark:hover:bg-black/20">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="dark:bg-black/10 bg-white/10 p-2 rounded-[8px] gap-2">
                    <img
                        src={speeks}
                        alt=""
                        className="w-full rounded-[8px]"
                    />
                    <p className="text-center text-2xl font-bold">Speeks</p>
                    <p className="w-full">
                        Speeks App — это современное веб-приложение для общения,
                        включающее систему аутентификации, чаты, список друзей и
                        пользовательские профили.
                    </p>
                    <div className="flex flex-row justify-between">
                        <a href="https://speeks.dexoron.su" className="p-2 dark:bg-black/10 bg-white/10 rounded-[8px] hover:bg-white/20 dark:hover:bg-black/20">
                            Сайт
                        </a>
                        <a href="https://github.com/dexoron/speeks-app" className="p-2 dark:bg-black/10 bg-white/10 rounded-[8px] hover:bg-white/20 dark:hover:bg-black/200">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="dark:bg-black/10 bg-white/10 p-2 rounded-[8px] gap-2">
                    <img
                        src={speeks}
                        alt=""
                        className="w-full rounded-[8px]"
                    />
                    <p className="text-center text-2xl font-bold">Speeks</p>
                    <p className="w-full">
                        Speeks App — это современное веб-приложение для общения,
                        включающее систему аутентификации, чаты, список друзей и
                        пользовательские профили.
                    </p>
                    <div className="flex flex-row justify-between">
                        <a href="https://speeks.dexoron.su" className="p-2 dark:bg-black/10 bg-white/10 rounded-[8px] hover:bg-white/20 dark:hover:bg-black/20">
                            Сайт
                        </a>
                        <a href="https://github.com/dexoron/speeks-app" className="p-2 dark:bg-black/10 bg-white/10 rounded-[8px] hover:bg-white/20 dark:hover:bg-black/20">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
