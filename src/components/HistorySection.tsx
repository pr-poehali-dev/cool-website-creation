import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HistorySection = () => {
  return (
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
  );
};

export default HistorySection;
