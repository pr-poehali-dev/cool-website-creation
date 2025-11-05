import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
