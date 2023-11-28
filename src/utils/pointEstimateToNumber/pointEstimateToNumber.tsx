import { PointEstimate } from '@/gql/graphql';

/**
 * Converts a `PointEstimate` enumeration value to its corresponding numerical value.
 *
 * This function is designed to translate the values of the `PointEstimate` enum, imported from the GraphQL schema,
 * into their respective numerical values. The `PointEstimate` enum presumably contains values like `One`, `Two`, `Four`, etc.,
 * representing a point estimate in a planning or estimation context.
 *
 * @param pointEstimate - An instance of the `PointEstimate` enum. This parameter is the point estimate
 *   value that needs to be converted to a number.
 *
 * The function uses a `pointValueMap` object to map the enum values to their corresponding numerical values.
 * This object is an associative array where the keys are `PointEstimate` enum values and the values are the corresponding
 * numerical representations. The function then returns the numerical value associated with the provided `pointEstimate` enum value.
 *
 * @returns The numerical value corresponding to the provided `PointEstimate` enum value. If the provided enum value does not exist
 *   in the `pointValueMap`, the function will return `undefined`.
 *
 * @example
 * const estimate = PointEstimate.Four;
 * const numericValue = pointEstimateToNumber(estimate);
 * // numericValue will be 4
 *
 * @see PointEstimate - The enum type `PointEstimate`, assumed to be imported from a GraphQL schema.
 */
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
