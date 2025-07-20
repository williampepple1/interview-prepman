import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, HardDrive, Tag } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { Algorithm } from '../types';
import { algorithms } from '../data/algorithms';

const AlgorithmExplanations: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories from algorithms
  const categories = useMemo(() => {
    const cats = new Set(algorithms.map(algo => algo.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter algorithms based on selected category
  const filteredAlgorithms = useMemo(() => {
    if (selectedCategory === 'All') return algorithms;
    return algorithms.filter(algo => algo.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Algorithm Explanations</h1>
          <p className="text-gray-600">Detailed explanations of common algorithms with code examples and complexity analysis</p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {category}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Algorithm List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Algorithms</h2>
              <div className="space-y-2">
                {filteredAlgorithms.map((algorithm) => (
                  <button
                    key={algorithm.id}
                    onClick={() => setSelectedAlgorithm(algorithm)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedAlgorithm?.id === algorithm.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <h3 className="font-medium text-gray-900">{algorithm.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{algorithm.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {algorithm.timeComplexity}
                      </span>
                      <span className="flex items-center">
                        <HardDrive className="h-3 w-3 mr-1" />
                        {algorithm.spaceComplexity}
                      </span>
                      <span className="flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {algorithm.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Algorithm Details */}
          <div className="lg:col-span-2">
            {selectedAlgorithm ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedAlgorithm.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedAlgorithm.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Time: {selectedAlgorithm.timeComplexity}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <HardDrive className="h-4 w-4 mr-1" />
                      Space: {selectedAlgorithm.spaceComplexity}
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {selectedAlgorithm.category}
                    </span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <MarkdownRenderer content={selectedAlgorithm.explanation} />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select an Algorithm</h3>
                <p className="text-gray-600">Choose an algorithm from the list to view its detailed explanation</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmExplanations;
