interface Props {
  genre: string;
}

function GenreBadge({ genre }: Props) {
  return (
    <span
      className="inline-block border border-primary-400 text-primary-700
      caption2 px-3 py-1 rounded-full"
    >
      {genre}
    </span>
  );
}

export default GenreBadge;
