import { PointEstimate } from '@/gql/graphql';

const pointEstimateToNumber = (pointEstimate: PointEstimate) => {
  const pointValueMap = {
    [PointEstimate.Eight]: 8,
    [PointEstimate.Four]: 4,
    [PointEstimate.One]: 1,
    [PointEstimate.Two]: 2,
    [PointEstimate.Zero]: 0,
  };

  return pointValueMap[pointEstimate];
};

export default pointEstimateToNumber;
