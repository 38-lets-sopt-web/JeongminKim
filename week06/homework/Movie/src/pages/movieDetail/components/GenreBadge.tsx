interface Props {
  genre: string;
}

function GenreBadge({ genre }: Props) {
  return (
    <span className="inline-block border border-sage-400 text-sage-700 caption1 px-3 py-1 rounded-full">
      {genre}
    </span>
  );
}

export default GenreBadge;
