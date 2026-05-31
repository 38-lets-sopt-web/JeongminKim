import type { MovieDetailData } from "../mock";

interface Props {
  movie: MovieDetailData;
}

const ROW_KEYS: { label: string; key: keyof MovieDetailData }[] = [
  { label: "원제", key: "originalTitle" },
  { label: "원어", key: "originalLanguage" },
  { label: "제작 국가", key: "productionCountries" },
  { label: "사용 언어", key: "spokenLanguages" },
  { label: "예산", key: "budget" },
  { label: "수익", key: "revenue" },
];

function BasicInfo({ movie }: Props) {
  return (
    <div className="bg-white rounded-xl p-5">
      <h2 className="text-base font-bold text-gray-900 mb-4">기본 정보</h2>
      <table className="w-full text-sm">
        <tbody>
          {ROW_KEYS.map(({ label, key }) => (
            <tr key={key} className="border-b border-gray-50 last:border-none">
              <td className="py-2 pr-4 text-gray-400 whitespace-nowrap w-20">
                {label}
              </td>
              <td className="py-2 text-gray-700">{String(movie[key])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BasicInfo;
