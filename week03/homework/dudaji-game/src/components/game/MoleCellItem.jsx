import mole from "@/assets/mole.svg";
import moleHit from "@/assets/mole-hit.svg";
import bomb from "@/assets/bomb.svg";

const IMAGE_MAP = {
  mole: { src: mole, alt: "두더지" },
  "mole-hit": { src: moleHit, alt: "두더지 공격" },
  bomb: { src: bomb, alt: "폭탄" },
};

function MoleCellItem({ type, onClick }) {
  const image = IMAGE_MAP[type];

  return (
    <div
      onClick={onClick}
      className="rounded-full aspect-square cursor-pointer bg-main-300  flex items-center justify-center overflow-hidden"
    >
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default MoleCellItem;
