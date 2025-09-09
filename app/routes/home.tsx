import type { Route } from './+types/home';
import Logo from '~/static/img/logo-8-round.svg';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Dexoron' },
        {
            name: 'description',
            content: 'Привет, я Dexoron, разработчик интузиаст!',
        },
    ];
}

export default function Home() {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col-reverse md:flex-row items-center gap-2">
                <div className="flex flex-col max-w-[520px] gap-2">
                    <p className="">Web-Разработчик</p>
                    <p className="md:text-6xl text-5xl font-bold">Dexoron</p>
                    <p className="">
                        Привет! Я занимаюсь веб-разработкой и веб-дизайном с
                        2023 года. Создаю личные проекты, которые публикую в
                        своем профиле на GitHub. Также разрабатываю программное
                        обеспечение и системные утилиты для Linux. Использую
                        операционную систему ArchLinux.
                    </p>
                    <div className="flex flex-row">
                        <a
                            className="bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 px-4 py-2 rounded-[8px] text-xl font-bold"
                            href="https://github.com/dexoron"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="max-w-[320px] max-h-[320px]">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    );
}
