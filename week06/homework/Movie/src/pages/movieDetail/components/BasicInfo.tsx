import type { MovieDetailData } from "@shared/types/movie";
import { ROW_KEYS } from "@pages/movieDetail/constants/basicInfo";

interface Props {
  movie: MovieDetailData;
}

function BasicInfo({ movie }: Props) {
  return (
    <div className="bg-white border border-primary-200 rounded-xl p-5">
      <h2 className="sub2 text-earth-800 mb-4">기본 정보</h2>
      <table className="w-full">
        <tbody>
          {ROW_KEYS.map(({ label, key }) => (
            <tr
              key={key}
              className="border-b border-primary-100 last:border-none"
            >
              <td className="py-2 pr-4 caption1 text-earth-400 whitespace-nowrap w-20">
                {label}
              </td>
              <td className="py-2 body3 text-earth-700">
                {String(movie[key])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BasicInfo;
