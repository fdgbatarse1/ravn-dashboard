import { PointEstimate } from '@/gql/graphql';

const convertPointEstimateToPointValue = (pointEstimate: PointEstimate) => {
  const pointEstimateToNumber: { [key in PointEstimate]: number } = {
    [PointEstimate.Eight]: 8,
    [PointEstimate.Four]: 4,
    [PointEstimate.One]: 1,
    [PointEstimate.Two]: 2,
    [PointEstimate.Zero]: 0,
  };

  return pointEstimateToNumber[pointEstimate];
};

export { convertPointEstimateToPointValue };

export default {};
