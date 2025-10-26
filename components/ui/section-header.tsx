type SectionHeaderProps = {
  children: React.ReactNode;
};

export const SectionHeader = ({ children }: SectionHeaderProps) => (
  <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-4">
    {children}
  </h2>
);
