interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-8 sm:mb-12 md:mb-16 max-w-2xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 tracking-tight">{title}</h1>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
