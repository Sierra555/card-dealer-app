export const modelYearsList = [...Array(new Date().getFullYear() - 2015 + 1)].map(
    (_, index) => 2015 + index
  );
