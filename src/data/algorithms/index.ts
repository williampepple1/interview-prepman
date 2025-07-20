import { Algorithm } from '../../types';
import { searchingAlgorithms } from './searching';
import { sortingAlgorithms } from './sorting';
import { graphAlgorithms } from './graph';

// Combine all algorithms from different categories
export const algorithms: Algorithm[] = [
  ...searchingAlgorithms,
  ...sortingAlgorithms,
  ...graphAlgorithms
];

// Export individual categories for specific use cases
export { searchingAlgorithms, sortingAlgorithms, graphAlgorithms }; 