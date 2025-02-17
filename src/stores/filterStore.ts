import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Nation, Vehicle, VehicleType } from '../graphql/graphql';

type FilterState = {
  levels: NonNullable<Vehicle['level']>[];
  nations: NonNullable<Nation['name']>[];
  vehicleTypes: NonNullable<VehicleType['name']>[];
};

interface FilterStore {
  filters: FilterState;

  setFilter: <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => void;
  resetFilter: (key: keyof FilterState) => void;
  resetAllFilters: () => void;
}

const initialState: FilterState = {
  levels: [],
  nations: [],
  vehicleTypes: [],
};

export const useFilterStore = create<FilterStore>()(
  devtools(
    persist(
      set => ({
        filters: initialState,

        setFilter: (key, value) =>
          set(state => ({
            filters: {
              ...state.filters,
              [key]: value,
            },
          })),

        resetFilter: key =>
          set(state => ({
            filters: {
              ...state.filters,
              [key]: initialState[key],
            },
          })),

        resetAllFilters: () =>
          set({
            filters: initialState,
          }),
      }),
      {
        name: 'filter-store',
      }
    )
  )
);

export const useFilterLevels = () =>
  useFilterStore(state => state.filters.levels);
export const useFilterNations = () =>
  useFilterStore(state => state.filters.nations);
export const useFilterVehicleTypes = () =>
  useFilterStore(state => state.filters.vehicleTypes);
