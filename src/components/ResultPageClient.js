'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import Container from '@/components/Container';
import Button from '@/components/Button';
import useFetch from '@/hooks/useFetch';

export default function ResultPageClient({ makeId, year }) {
  const ENDPOINT = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

  const { data, error } = useFetch(ENDPOINT);

  if (error) {
    return <p>Fetching vehicle models failed</p>;
  }
  const vehicleModels = data?.Results || [];
  const makeName =
    vehicleModels.length > 0 ? vehicleModels[0]['Make_Name'] : 'Car';

  return (
    <main>
      <section>
        <Container>
          <div className="flex flex-col gap-5">
            <Link href="/" className="mt-6 w-full md:w-[200px]">
              <Button label="Back to the filter" />
            </Link>
            <Suspense fallback={<Spinner />}>
              <h2 className="text-xl font-bold">
                {makeName} models in {year}:
              </h2>
              <ul>
                {vehicleModels.length === 0 ? (
                  <li>No models found</li>
                ) : (
                  vehicleModels.map(({ Model_ID, Model_Name }) => (
                    <li key={Model_ID} className="p-2">
                      {Model_Name}
                    </li>
                  ))
                )}
              </ul>
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}
