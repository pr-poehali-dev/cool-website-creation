import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-accent text-shadow-glow">Дьявол в культуре</h1>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('history')} className="text-muted-foreground hover:text-accent transition-colors">История</button>
              <button onClick={() => scrollToSection('symbols')} className="text-muted-foreground hover:text-accent transition-colors">Символика</button>
              <button onClick={() => scrollToSection('art')} className="text-muted-foreground hover:text-accent transition-colors">Искусство</button>
              <button onClick={() => scrollToSection('gallery')} className="text-muted-foreground hover:text-accent transition-colors">Галерея</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-background"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <Icon name="Flame" size={80} className="mx-auto mb-6 text-primary animate-glow" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-accent text-shadow-glow">
            Archfiend
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Исследование темных сторон мифологии, символики и культурного наследия образа дьявола в мировых религиях и искусстве
          </p>
        </div>
      </section>

      <section id="history" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-accent text-shadow-glow">
            История и мифы
          </h2>
          
          <div className="mb-12">
            <Card className="bg-card border-primary/30 border-glow">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-6 text-center text-accent">Этимология и происхождение</h3>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <p className="mb-4 leading-relaxed">
                      <span className="font-bold text-accent">Дьявол</span> (от греч. διάβολος — «клеветник, обвинитель») — термин, восходящий к еврейскому <span className="italic">ha-Satan</span> («противник»). В Ветхом Завете Сатана изначально выступал как обвинитель в небесном суде (Книга Иова), а не как воплощение зла.
                    </p>
                    <p className="leading-relaxed">
                      Трансформация образа произошла в период Второго Храма (516 г. до н.э. — 70 г. н.э.) под влиянием зороастрийского дуализма. Межзаветная литература (Книга Еноха, Юбилеев) развила концепцию падших ангелов и космической войны.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 leading-relaxed">
                      <span className="font-bold text-accent">Люцифер</span> (лат. «несущий свет») — отождествление с утренней звездой (Венерой) из Исаии 14:12. Изначально метафора падения вавилонского царя, позднее интерпретированная как история восстания главного ангела.
                    </p>
                    <p className="leading-relaxed">
                      Христианские богословы (Ориген, Августин, Фома Аквинский) систематизировали учение о дьяволе как духовной сущности, лишенной физической формы, но способной материализоваться для искушения человека.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-primary/30 border-glow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Book" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Христианство</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Люцифер — падший ангел, восставший против Бога из гордыни. В христианской традиции дьявол олицетворяет абсолютное зло, искушение и грех.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent font-semibold">Бытие 3:</span> Змей-искуситель в Эдеме</p>
                      <p><span className="text-accent font-semibold">Иов 1-2:</span> Обвинитель перед Богом</p>
                      <p><span className="text-accent font-semibold">Откровение 12:</span> Дракон, сброшенный с небес архангелом Михаилом</p>
                      <p><span className="text-accent font-semibold">Средневековье:</span> Систематизация демонологии — иерархия демонов, ритуалы экзорцизма</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 border-glow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Moon" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Ислам</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Иблис (إبليس) — джинн из огня, отказавшийся поклониться Адаму, созданному из глины. Его падение — результат гордыни (كِبْر).
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent font-semibold">Коран 7:11-18:</span> История отказа Иблиса</p>
                      <p><span className="text-accent font-semibold">Шайтан:</span> Собирательное имя для Иблиса и его потомков-джиннов</p>
                      <p><span className="text-accent font-semibold">Функция:</span> Искушение человека отклониться от пути Аллаха (صراط المستقيم)</p>
                      <p><span className="text-accent font-semibold">Суфизм:</span> Иблис как символ истинной любви — отказался поклониться кому-то, кроме Бога</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 border-glow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Star" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Зороастризм</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ангра-Майнью (Ахриман) — дух-разрушитель, космический антагонист Ахура-Мазды. Основатель концепции космического дуализма.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent font-semibold">Авеста:</span> Извечная борьба добра (Спента-Майнью) и зла</p>
                      <p><span className="text-accent font-semibold">Создания:</span> Дэвы (демоны) — служители Ахримана</p>
                      <p><span className="text-accent font-semibold">Эсхатология:</span> Финальная битва Фрашокерети — победа света над тьмой</p>
                      <p><span className="text-accent font-semibold">Влияние:</span> Повлиял на иудейскую ангелологию в вавилонском плену (586-539 до н.э.)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 border-glow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Skull" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Древние культуры</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Архетип «противника божественного порядка» существовал задолго до монотеистических религий.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent font-semibold">Сет (Египет):</span> Убийца Осириса, бог хаоса и пустыни</p>
                      <p><span className="text-accent font-semibold">Локи (Скандинавия):</span> Трикстер, отец чудовищ, виновник Рагнарёка</p>
                      <p><span className="text-accent font-semibold">Тифон (Греция):</span> Титан, бросивший вызов Зевсу</p>
                      <p><span className="text-accent font-semibold">Мара (Буддизм):</span> Демон-искуситель, пытавшийся помешать просветлению Будды</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-accent">Эволюция образа в истории</h3>
            <div className="space-y-6">
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-xl min-w-[120px]">300-1000</div>
                    <div className="text-muted-foreground">
                      <h4 className="font-bold text-accent mb-2">Раннее Средневековье</h4>
                      <p>Формирование иконографии: черные крылья (пародия на ангелов), рога (языческие божества), копыта (животная природа). Дьявол изображается гротескно — объект насмешек.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-xl min-w-[120px]">1000-1500</div>
                    <div className="text-muted-foreground">
                      <h4 className="font-bold text-accent mb-2">Высокое Средневековье</h4>
                      <p>Инквизиция и охота на ведьм. Дьявол становится реальной угрозой — договоры с Сатаной, шабаши. Систематизация демонологии (Malleus Maleficarum, 1487). Ад визуализируется как место вечных мучений (фрески, мистерии).</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-xl min-w-[120px]">1600-1800</div>
                    <div className="text-muted-foreground">
                      <h4 className="font-bold text-accent mb-2">Эпоха Просвещения</h4>
                      <p>Рационализация зла. Философы (Лейбниц, Кант) переосмысливают дьявола как метафору. Литература (Мильтон) наделяет Сатану трагическим величием — бунтарь против тирании.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-xl min-w-[120px]">1800-1900</div>
                    <div className="text-muted-foreground">
                      <h4 className="font-bold text-accent mb-2">Романтизм</h4>
                      <p>Сатана как романтический герой — символ свободы, индивидуализма, борьбы с догмой. Байрон, Шелли, Лермонтов создают образ благородного изгнанника. Оккультное возрождение — Таро, герметизм.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-xl min-w-[120px]">1900-наст.</div>
                    <div className="text-muted-foreground">
                      <h4 className="font-bold text-accent mb-2">Современность</h4>
                      <p>Секуляризация образа. Дьявол в поп-культуре — антигерой (Люцифер в комиксах/сериалах), символ бунта (сатанинская паника 80-х, метал-культура). Психологизация — архетип Тени по Юнгу. Сатанизм ЛаВея — атеистическая философия индивидуализма.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="symbols" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-accent text-shadow-glow">
            Символика в культурах
          </h2>

          <Tabs defaultValue="visual" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="visual">Визуальные символы</TabsTrigger>
              <TabsTrigger value="numbers">Числа</TabsTrigger>
              <TabsTrigger value="animals">Животные</TabsTrigger>
            </TabsList>

            <TabsContent value="visual" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Star" size={24} />
                      Пентаграмма
                    </h4>
                    <p className="text-muted-foreground mb-3">Перевернутая пятиконечная звезда — ключевой символ сатанизма с XIX века.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Прямая:</span> Защитный символ (микрокосм, 5 элементов)</p>
                      <p><span className="text-accent">• Перевернутая:</span> Церковь Сатаны — козлиная голова Бафомета</p>
                      <p><span className="text-accent">• История:</span> Элифас Леви (1855) связал её с чёрной магией</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Zap" size={24} />
                      Рога и копыта
                    </h4>
                    <p className="text-muted-foreground mb-3">Атрибуты, связывающие дьявола с животной природой и языческими божествами.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Происхождение:</span> Пан (греч.) — бог с козлиными ногами и рогами</p>
                      <p><span className="text-accent">• Символизм:</span> Плотские желания, природная дикость</p>
                      <p><span className="text-accent">• Христианизация:</span> Языческие боги демонизированы в Средневековье</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Anchor" size={24} />
                      Трезубец
                    </h4>
                    <p className="text-muted-foreground mb-3">Инструмент наказания грешников в аду, символ власти над душами.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Ассоциация:</span> Посейдон/Нептун — бог подземных/морских глубин</p>
                      <p><span className="text-accent">• Функция:</span> Пытки в аду (средневековые изображения)</p>
                      <p><span className="text-accent">• Троичность:</span> Пародия на Святую Троицу</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Eye" size={24} />
                      Сигил Люцифера
                    </h4>
                    <p className="text-muted-foreground mb-3">Магическая печать для призыва Люцифера из Гримуара XVI века.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Происхождение:</span> «Гримуар Истины» (Grimorium Verum)</p>
                      <p><span className="text-accent">• Элементы:</span> V (Венера), X (крест), чаша</p>
                      <p><span className="text-accent">• Использование:</span> Оккультные ритуалы вызова демонов</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Flame" size={24} />
                      Адский огонь
                    </h4>
                    <p className="text-muted-foreground mb-3">Вечное пламя — визуальный код ада и дьявольского присутствия.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Библия:</span> «Озеро огненное» (Откровение 20:14-15)</p>
                      <p><span className="text-accent">• Символизм:</span> Очищение через страдание / уничтожение</p>
                      <p><span className="text-accent">• Иконография:</span> Красно-оранжевая палитра в изображениях Сатаны</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Skull" size={24} />
                      Перевернутый крест
                    </h4>
                    <p className="text-muted-foreground mb-3">Крест Святого Петра, переосмысленный как антихристианский символ.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Оригинал:</span> Петр распят вниз головой (недостоин смерти Христа)</p>
                      <p><span className="text-accent">• Субкультура:</span> С 1960-х — знак бунта против церкви</p>
                      <p><span className="text-accent">• Парадокс:</span> Христианский символ смирения vs. сатанинская гордыня</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="numbers" className="space-y-6">
              <div className="space-y-6">
                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-6 text-accent">666 — Число зверя</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-muted-foreground space-y-3">
                        <p className="leading-relaxed">
                          <span className="font-bold text-accent">Откровение 13:18:</span> «Здесь мудрость. Кто имеет ум, тот сочти число зверя, ибо это число человеческое; число его шестьсот шестьдесят шесть.»
                        </p>
                        <p>Самое известное «дьявольское число» в западной культуре. Породило феномен гексакосиойгексеконтагексафобии — страха перед 666.</p>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><span className="text-accent font-semibold">Гематрия:</span> Нерон Кесарь (נרון קסר) = 666 в еврейской нумерологии</p>
                        <p><span className="text-accent font-semibold">Толкование:</span> Тройное несовершенство (7 — полнота, 6 — недостаток)</p>
                        <p><span className="text-accent font-semibold">Вариант:</span> Некоторые рукописи дают 616 вместо 666</p>
                        <p><span className="text-accent font-semibold">Поп-культура:</span> Iron Maiden — «The Number of the Beast» (1982), фильм «Омен» (1976)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-6 text-accent">13 — Несчастливое число</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-muted-foreground space-y-3">
                        <p>Трискайдекафобия — иррациональный страх числа 13, распространенный в западной культуре. Многие здания пропускают 13-й этаж, авиакомпании — ряд 13.</p>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><span className="text-accent font-semibold">Тайная вечеря:</span> Иуда — 13-й за столом, предавший Христа</p>
                        <p><span className="text-accent font-semibold">Пятница 13:</span> Комбинация двух несчастливых символов (пятница — день распятия)</p>
                        <p><span className="text-accent font-semibold">Тамплиеры:</span> Арест ордена в пятницу 13 октября 1307 г.</p>
                        <p><span className="text-accent font-semibold">Ковены:</span> Ведьмовские собрания из 13 человек (12 + предводитель)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-6 text-accent">Другие числа тьмы</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <h4 className="font-bold text-accent mb-2">9</h4>
                        <p>Девять кругов ада Данте. Перевернутая божественная троица (3×3). Число легионов демонов.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-accent mb-2">11</h4>
                        <p>Превышение 10 заповедей — символ трансгрессии. Оккультное число Клифот (антисфирот Каббалы).</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-accent mb-2">4</h4>
                        <p>В китайской традиции (四 sì) звучит как «смерть» (死 sǐ). Тетрафобия — аналог западной трискайдекафобии.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="animals" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Waves" size={24} />
                      Змей / Serpent
                    </h4>
                    <p className="text-muted-foreground mb-3">Древнейший символ дьявола, архетип искушения и мудрости.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Бытие 3:</span> Змей-искуситель Евы в Эдеме</p>
                      <p><span className="text-accent">• Откровение 12:9:</span> «Древний змий, называемый дьяволом и сатаною»</p>
                      <p><span className="text-accent">• Левиафан:</span> Морской змей хаоса в иудейской мифологии</p>
                      <p><span className="text-accent">• Амбивалентность:</span> Исцеление (Асклепий) vs. смерть (яд)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="CircleAlert" size={24} />
                      Козел / Бафомет
                    </h4>
                    <p className="text-muted-foreground mb-3">Символ плотских желаний и оккультной мудрости.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Библия:</span> Козел отпущения (Левит 16) — Азазель, демон пустыни</p>
                      <p><span className="text-accent">• Бафомет:</span> Элифас Леви (1856) — гермафродит с козлиной головой, символ равновесия</p>
                      <p><span className="text-accent">• Инквизиция:</span> Обвинения тамплиеров в поклонении «Бафомету»</p>
                      <p><span className="text-accent">• Церковь Сатаны:</span> Официальный символ с 1966 г.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Bird" size={24} />
                      Ворон
                    </h4>
                    <p className="text-muted-foreground mb-3">Птица-вестник смерти и темной стороны мира.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Фольклор:</span> Спутник ведьм и некромантов</p>
                      <p><span className="text-accent">• Библия:</span> Нечистая птица (Левит 11:15), питается падалью</p>
                      <p><span className="text-accent">• Скандинавия:</span> Хугин и Мунин — вороны Одина (мудрость через смерть)</p>
                      <p><span className="text-accent">• Литература:</span> «Ворон» Эдгара По — символ скорби и безумия</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Flame" size={24} />
                      Дракон
                    </h4>
                    <p className="text-muted-foreground mb-3">Воплощение первобытного хаоса и сатанинской силы.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Откровение 12:</span> Красный дракон с семью головами = Сатана</p>
                      <p><span className="text-accent">• Архетип:</span> Св. Георгий, Св. Михаил — убийцы драконов (победа над злом)</p>
                      <p><span className="text-accent">• Алхимия:</span> Уроборос — змей, кусающий свой хвост (цикличность)</p>
                      <p><span className="text-accent">• Контраст:</span> Восточный дракон — мудрость vs. западный — разрушение</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Bug" size={24} />
                      Муха / Вельзевул
                    </h4>
                    <p className="text-muted-foreground mb-3">«Повелитель мух» — князь демонов в иудео-христианской традиции.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Этимология:</span> Ba'al Zəbûb (ивр.) — «хозяин мух», насмешка над Ваалом</p>
                      <p><span className="text-accent">• Статус:</span> Один из семи князей ада, повелитель гордыни</p>
                      <p><span className="text-accent">• Символизм:</span> Разложение, болезни, моральное падение</p>
                      <p><span className="text-accent">• Литература:</span> Голдинг «Повелитель мух» — метафора зла в человеке</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/30">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-4 text-accent flex items-center gap-2">
                      <Icon name="Moon" size={24} />
                      Черная кошка
                    </h4>
                    <p className="text-muted-foreground mb-3">Спутник ведьм и символ колдовства в европейском фольклоре.</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="text-accent">• Средневековье:</span> Фамильяры ведьм — демоны в кошачьем обличье</p>
                      <p><span className="text-accent">• Инквизиция:</span> Массовое уничтожение черных кошек (→ рост крыс → чума)</p>
                      <p><span className="text-accent">• Суеверие:</span> Перебежавшая дорогу — к несчастью</p>
                      <p><span className="text-accent">• Египет:</span> Священное животное Бастет — конфликт культур</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="art" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-accent text-shadow-glow">
            Влияние на искусство
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="literature" className="border-primary/30 bg-card px-6">
              <AccordionTrigger className="text-2xl font-bold text-accent hover:text-accent/80">
                Литература
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-6 pt-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">«Божественная комедия» (1320) — Данте Алигьери</h4>
                  <p className="mb-3">Архитектура христианского ада: 9 кругов для различных грехов. Люцифер — вмороженный в лёд гигант в центре Земли, пожирающий предателей (Иуда, Брут, Кассий). Не активный искуситель, а страдающий пленник собственного греха.</p>
                  <p className="text-sm italic">«В глубине, где Люцифер томится...» — создание эталонной визуальной модели ада на столетия вперёд.</p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">«Потерянный рай» (1667) — Джон Мильтон</h4>
                  <p className="mb-3">Революционная гуманизация Сатаны. Представлен как трагический герой-бунтарь: «Лучше царствовать в аду, чем прислуживать на небесах». Монологи Люцифера наполнены гордостью, страданием и харизмой — романтики XIX века видели в нём героя свободы.</p>
                  <p className="text-sm italic">Влияние: Байрон («Каин»), Шелли («Прометей освобожденный»), Лермонтов («Демон»).</p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">«Фауст» (1808) — Иоганн Вольфганг фон Гете</h4>
                  <p className="mb-3">Мефистофель — интеллектуальный манипулятор, «часть той силы, что вечно хочет зла и вечно совершает благо». Договор с дьяволом как метафора человеческой жажды знания и опыта. Фауст спасён любовью Маргариты — зло служит божественному плану.</p>
                  <p className="text-sm italic">Архетип сделки с дьяволом: обмен души на земные блага (власть, молодость, знания).</p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">«Братья Карамазовы» (1880) — Фёдор Достоевский</h4>
                  <p className="mb-3">«Легенда о Великом инквизиторе» — Христос vs. дьявол как спор о свободе человека. Дьявол (в образе инквизитора) предлагает человечеству порядок вместо мучительного выбора. Философское исследование природы зла.</p>
                  <p className="text-sm italic">«Если Бога нет, то всё дозволено» — экзистенциальная проблема морали без трансцендентного якоря.</p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">«Мастер и Маргарита» (1966) — Михаил Булгаков</h4>
                  <p className="mb-3">Воланд — элегантный профессор чёрной магии, проводящий моральный аудит Москвы. Справедливый судья: наказывает пороки (алчность, трусость), награждает честность. Сопровождается свитой: Коровьев, Бегемот-кот, Азазелло. «Рукописи не горят» — дьявол как хранитель истины против лжи.</p>
                  <p className="text-sm italic">Парадокс: самый честный персонаж романа — дьявол. Сатира на советскую реальность через мистическую призму.</p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">«Добрые предзнаменования» (1990) — Гейман/Пратчетт</h4>
                  <p className="mb-3">Постмодернистская комедия об апокалипсисе. Демон Кроули и ангел Азирафаэль — лучшие друзья, саботирующие Армагеддон. Деконструкция бинарности добра/зла: обе стороны бюрократичны, истинная человечность — в серой зоне.</p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-bold text-accent mb-2">Современная литература</h4>
                  <p className="text-sm space-y-1">
                    <span className="block"><span className="text-accent font-semibold">• «Интервью с вампиром»</span> (Энн Райс) — демонизация как метафора аутсайдерства</span>
                    <span className="block"><span className="text-accent font-semibold">• «Американские боги»</span> (Нил Гейман) — старые демоны в современной Америке</span>
                    <span className="block"><span className="text-accent font-semibold">• Комикс «Lucifer»</span> (Майк Кэри) — Люцифер уходит на пенсию, открывает бар</span>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="painting" className="border-primary/30 bg-card px-6">
              <AccordionTrigger className="text-2xl font-bold text-accent hover:text-accent/80">
                Живопись
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">Иероним Босх (1450-1516)</h4>
                  <p>«Сад земных наслаждений» — сюрреалистические образы ада с гротескными демонами. Визуализация грехов и божьего суда через фантастические существа.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">Уильям Блейк (1757-1827)</h4>
                  <p>Иллюстрации к «Потерянному раю» — романтизация Сатаны как прометеевской фигуры. Мистические видения границы добра и зла.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">Густав Доре (1832-1883)</h4>
                  <p>Гравюры к «Божественной комедии» Данте — детализированные изображения кругов ада и его правителя. Эталон визуального представления преисподней.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="music" className="border-primary/30 bg-card px-6">
              <AccordionTrigger className="text-2xl font-bold text-accent hover:text-accent/80">
                Музыка
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">Блюз и рок-н-ролл</h4>
                  <p>Легенда о Роберте Джонсоне, продавшем душу дьяволу на перекрестке за музыкальный талант. Мотив Faustian bargain в американской культуре.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">Хэви-метал</h4>
                  <p>Использование сатанинской символики группами Black Sabbath, Iron Maiden, Slayer. Эстетизация темных образов как форма бунта против религиозного ханжества.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">Классическая музыка</h4>
                  <p>«Пляска смерти» (1874) Сен-Санса, «Мефисто-вальс» (1861) Листа — музыкальное воплощение дьявольских образов через диссонансы и драматические темы.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cinema" className="border-primary/30 bg-card px-6">
              <AccordionTrigger className="text-2xl font-bold text-accent hover:text-accent/80">
                Кинематограф
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">«Экзорцист» (1973) — Уильям Фридкин</h4>
                  <p>Классика хоррора о демоническом одержимости. Визуализация борьбы веры и зла, определившая жанр на десятилетия.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">«Ребенок Розмари» (1968) — Роман Полански</h4>
                  <p>Психологический триллер о сатанинском культе. Антихрист как метафора паранойи и утраты контроля.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">«Константин» (2005), «Сверхъестественное» (2005-2020)</h4>
                  <p>Современная мифология борьбы с демонами. Дьявол как манипулятор в войне между небом и адом.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="gallery" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-accent text-shadow-glow">
            Галерея образов
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/30 border-glow overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/40b03a9b-aa6b-42c6-a310-4c5a5d1b98be/files/36519735-2952-40a1-9e29-7eac751f405a.jpg" 
                  alt="Дьявол в готическом искусстве"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-accent">Люцифер — падший ангел</h3>
                <p className="text-muted-foreground">Классическая интерпретация дьявола с рогами и демоническими чертами в готическом стиле</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 border-glow overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/40b03a9b-aa6b-42c6-a310-4c5a5d1b98be/files/992545d9-f72a-468d-89e9-1ae94a1cd4ff.jpg" 
                  alt="Оккультные символы"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-accent">Эзотерическая символика</h3>
                <p className="text-muted-foreground">Древние сигилы и магические знаки, связанные с демонологией и оккультными практиками</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30 border-glow overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/40b03a9b-aa6b-42c6-a310-4c5a5d1b98be/files/3d25906a-c000-44c6-95c5-c7c11cb16ffc.jpg" 
                  alt="Средневековое изображение ада"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-accent">Преисподняя в искусстве</h3>
                <p className="text-muted-foreground">Средневековая интерпретация ада в стиле ренессансной живописи — огонь, страдания и демоны</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            Образовательный проект о мифологических и культурных представлениях
          </p>
          <p className="text-sm text-muted-foreground/60">
            Материалы представлены в академических и исследовательских целях
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;