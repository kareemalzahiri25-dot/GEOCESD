import { useState, useMemo } from 'react';
import { SCIENTIFIC_REFERENCES, ScientificReference } from '../models/references.model';

export type ReferenceCategory = 'All' | 'Dieng' | 'Material' | 'Standar';

export function useReferencesController() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ReferenceCategory>('All');

  const filteredReferences = useMemo(() => {
    return SCIENTIFIC_REFERENCES.filter((item) => {
      const matchCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyPoint.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredReferences,
  };
}
