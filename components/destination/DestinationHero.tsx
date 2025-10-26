type DestinationHeroProps = {
  name: string;
  description: string;
};

export const DestinationHero = ({
  name,
  description,
}: DestinationHeroProps) => {
  return (
    <div className="relative bg-[#B3C8CF] mb-8">
      {/* Hero content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Destination name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{name}</h1>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};
