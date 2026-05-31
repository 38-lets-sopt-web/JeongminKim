interface Props {
  backdropUrl: string;
  title: string;
}

function BackdropHero({ backdropUrl, title }: Props) {
  return (
    <div className="w-full aspect-[16/7] rounded-xl overflow-hidden bg-primary-300 mb-4">
      <img
        src={backdropUrl}
        alt={`${title} 배경`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default BackdropHero;
