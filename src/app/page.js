'use client';

import Container from '@/components/Container';
import { useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import DropDown from '@/components/DropDown';
import Link from 'next/link';
import Button from '@/components/Button';
import useFetch from '@/hooks/useFetch';
import { modelYearsList } from '@/helpers/constants';

const ENDPOINT =
  'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json';

export default function FilterPage() {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const { data, error } = useFetch(ENDPOINT);

  if (error) {
    return <p>Fetching vehicle makes failes</p>;
  }

  const vehicleMakes = data?.Results;
  const defaultMake = vehicleMakes?.[0]?.MakeName || 'Select a vehicle make';
  const disabledBtn = !(selectedMake && selectedYear);
  const selectedMakeId = vehicleMakes?.find(
    (make) => make.MakeName === selectedMake
  )?.MakeId;

  return (
    <main>
      <section>
        <Container>
          <ErrorBoundary
            fallback={<p className="error">Something went wrong...</p>}>
            <div className="flex flex-col justify-center items-center gap-5 px-5">
              <div className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto">
                <DropDown
                  label="Select a vehicle make"
                  id="make"
                  value={selectedMake}
                  handleChange={(e) => setSelectedMake(e.currentTarget.value)}>
                  <option value={defaultMake}>{defaultMake}</option>
                  {vehicleMakes?.map(({ MakeId, MakeName }) => (
                    <option key={MakeId} value={MakeName}>
                      {MakeName}
                    </option>
                  ))}
                </DropDown>
                <DropDown
                  label="Select a vehicle year"
                  id="years"
                  value={selectedYear}
                  handleChange={(e) => setSelectedYear(e.currentTarget.value)}>
                  <option value="2015">2015</option>
                  {modelYearsList.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </DropDown>
              </div>
              <Link
                href={
                  !disabledBtn
                    ? `/result/${selectedMakeId}/${selectedYear}`
                    : '/not-found'
                }
                className="w-full md:w-[200px]">
                <Button label="Next" disabled={disabledBtn} />
              </Link>
            </div>
          </ErrorBoundary>
        </Container>
      </section>
    </main>
  );
}
