import { Card, CardContent } from "@/components/ui/card";

const GallerySection = () => {
  return (
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
  );
};

export default GallerySection;
