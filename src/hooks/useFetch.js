'use client';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useFetch(url) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
}
