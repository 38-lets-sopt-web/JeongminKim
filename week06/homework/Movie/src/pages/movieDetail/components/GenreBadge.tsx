interface Props {
  genre: string;
}

function GenreBadge({ genre }: Props) {
  return (
    <span className="inline-block border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full">
      {genre}
    </span>
  );
}

export default GenreBadge;
