import ResultPageClient from '@/components/ResultPageClient';
import { modelYearsList } from '@/helpers/constants';

export default async function ResultPage({ params }) {
  const { makeId, year, makeName } = await params;

  return <ResultPageClient makeId={makeId} year={year} makeName={makeName} />;
}

export async function generateStaticParams() {
  const makesResponse = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  );
  const makesData = await makesResponse.json();
  const makes = makesData?.Results || [];

  const years = modelYearsList;

  const paths = makes.flatMap((make) =>
    years.map((year) => ({
      params: {
        makeId: make?.MakeId.toString(),
        year: year.toString(),
      },
    }))
  );

  return paths;
}
