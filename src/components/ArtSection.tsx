import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ArtSection = () => {
  return (
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
  );
};

export default ArtSection;
