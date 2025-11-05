import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const SymbolsSection = () => {
  return (
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
  );
};

export default SymbolsSection;
