interface NavigationProps {
  onNavigate: (id: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-primary/20 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-accent text-shadow-glow">Дьявол в культуре</h1>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('history')} className="text-muted-foreground hover:text-accent transition-colors">История</button>
            <button onClick={() => onNavigate('symbols')} className="text-muted-foreground hover:text-accent transition-colors">Символика</button>
            <button onClick={() => onNavigate('art')} className="text-muted-foreground hover:text-accent transition-colors">Искусство</button>
            <button onClick={() => onNavigate('gallery')} className="text-muted-foreground hover:text-accent transition-colors">Галерея</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
