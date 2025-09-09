import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Dexoron | Навыки' },
        { name: 'description', content: 'Мои навыки и достижения' },
    ];
}

export default function Skill() {
    return (
        <div className="h-full flex-col gap-2">
            <div className="flex flex-col gap-4">
                <p className="text-center text-4xl font-bold">Мои скилы</p>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">Frontend разработка</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    HTML5 & CSS3
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-8/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">TailwindCSS</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-9/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    React.JS & React Router
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-6/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">Backend разработка</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">Express.js</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-5/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">Fast API</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-6/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    PostgreSQL & MySQL
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-7/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">
                        Инструменты и технологии
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    Git & GitHub/GitLab
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-7/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">Vite</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-8/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">npm/yarn</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-10/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">Docker</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-7/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">Linux</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-8/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">UI/UX Дизайн</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">Figma</p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-7/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    Adobe Illustrator
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-7/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    Принципы UI/UX дизайна
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-10/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-4 w-full dark:bg-black/10 bg-white/10 p-2 rounded-[8px] items-center">
                            <div className="flex flex-col md:min-w-[200px] md:max-w-[320px] w-full gap-2">
                                <p className="text-xl font-bold">
                                    Адаптивная верстка
                                </p>
                                <div className="w-full h-2 dark:bg-black/10 bg-white/10 rounded-full">
                                    <div className="relative w-9/10 h-full bg-cyan-400 rounded-full">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-justify">
                                    Далеко-далеко за, словесными горами в стране
                                    гласных и согласных живут рыбные тексты.
                                    Приставка заманивший снова журчит ее дорогу
                                    страну взгляд, вопрос свою большой подпоясал
                                    послушавшись, свой деревни!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
