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
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-primary/30 border-glow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Book" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Христианство</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Люцифер — падший ангел, восставший против Бога. В христианской традиции дьявол олицетворяет абсолютное зло, искушение и грех. Образ развивался от библейского змея-искусителя до правителя ада в средневековых текстах.
                    </p>
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
                    <p className="text-muted-foreground leading-relaxed">
                      Иблис (Шайтан) — джинн, отказавшийся поклониться Адаму. В исламской традиции он не является падшим ангелом, а существом из огня, олицетворяющим гордыню и непокорность воле Аллаха.
                    </p>
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
                    <p className="text-muted-foreground leading-relaxed">
                      Ангра-Майнью — дух разрушения, противостоящий Ахура-Мазде. Древнейшая дуалистическая концепция борьбы добра и зла, повлиявшая на формирование образа дьявола в авраамических религиях.
                    </p>
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
                    <p className="text-muted-foreground leading-relaxed">
                      Сет в египетской мифологии, Локи в скандинавской традиции — боги-трикстеры, олицетворяющие хаос и разрушение. Их образы повлияли на формирование архетипа противника божественного порядка.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Пентаграмма</h4>
                      <p className="text-muted-foreground">Перевернутая пятиконечная звезда — символ сатанизма и оккультизма, противопоставленный небесной защите</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Рога и копыта</h4>
                      <p className="text-muted-foreground">Атрибуты, заимствованные из образов языческих божеств плодородия и животного мира</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Трезубец</h4>
                      <p className="text-muted-foreground">Инструмент наказания грешников, символ власти над подземным миром</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="numbers" className="space-y-6">
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-accent">666 — Число зверя</h4>
                      <p className="text-muted-foreground">Из Откровения Иоанна Богослова — символ Антихриста и апокалипсиса. Интерпретируется как несовершенство (777 — божественная полнота)</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-accent">13 — Несчастливое число</h4>
                      <p className="text-muted-foreground">Ассоциируется с предательством Иуды (13-й за столом) и связывается с дьявольскими силами в европейской традиции</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="animals" className="space-y-6">
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Змей</h4>
                      <p className="text-muted-foreground">Библейский искуситель в Эдемском саду — символ коварства и греха</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Козел</h4>
                      <p className="text-muted-foreground">Бафомет — козлоголовое божество оккультизма, символ плотских желаний</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Ворон</h4>
                      <p className="text-muted-foreground">Вестник смерти и темных сил в европейском фольклоре</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-accent">Дракон</h4>
                      <p className="text-muted-foreground">Воплощение хаоса и зла в христианской иконографии</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">«Потерянный рай» (1667) — Джон Мильтон</h4>
                  <p>Эпическая поэма, представившая Сатану как трагического героя с человеческими чертами — гордостью и страданием. Революционная интерпретация, повлиявшая на романтизм.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">«Фауст» (1808) — Иоганн Вольфганг фон Гете</h4>
                  <p>Мефистофель как интеллектуальный манипулятор, воплощающий философский скептицизм и искушение знанием. Договор с дьяволом как метафора человеческих амбиций.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-accent mb-2">«Мастер и Маргарита» (1966) — Михаил Булгаков</h4>
                  <p>Воланд — харизматичный дьявол, судья человеческих пороков. Сатира на советское общество через призму дьявольского вмешательства.</p>
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
