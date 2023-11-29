import { PointEstimate } from '@/gql/graphql';
import pointEstimateToNumber from './pointEstimateToNumber';

describe('pointEstimateToNumber', () => {
  it('should convert a point estimate to a point value', () => {
    const pointValue = pointEstimateToNumber(PointEstimate.Eight);

    expect(pointValue).toBe(8);
  });
});
