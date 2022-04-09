export enum ExpandActionTypes {
  SET_EXPANDED_NATURE = 'SET_EXPANDED_NATURE',
  SET_EXPANDED_WEIGHT = 'SET_EXPANDED_WEIGHT',
  SET_EXPANDED_PARCEL = 'SET_EXPANDED_PARCEL',
  SET_EXPANDED_PICKUP = 'SET_EXPANDED_PICKUP',
  SET_EXPANDED_DESTINATION = 'SET_EXPANDED_DESTINATION',
  SET_EXPANDED_COST = 'SET_EXPANDED_COST',
}

export interface ExpandAction {
  type: ExpandActionTypes;
  payload: boolean;
}

export interface ExpandState {
  natureExpanded: boolean;
  weightExpanded: boolean;
  parcelCountExpanded: boolean;
  pickupExpanded: boolean;
  destinationExpanded: boolean;
  costExpanded: boolean;
}

export const initialState = {
  natureExpanded: false,
  weightExpanded: false,
  parcelCountExpanded: false,
  pickupExpanded: false,
  destinationExpanded: false,
  costExpanded: false,
};

const reducer = (state: ExpandState, action: ExpandAction) => {
  const { type, payload } = action;
  switch (type) {
    case ExpandActionTypes.SET_EXPANDED_NATURE:
      return {
        ...state,
        natureExpanded: payload,
      };
    case ExpandActionTypes.SET_EXPANDED_WEIGHT:
      return {
        ...state,
        weightExpanded: payload,
      };
    case ExpandActionTypes.SET_EXPANDED_PARCEL:
      return {
        ...state,
        parcelCountExpanded: payload,
      };
    case ExpandActionTypes.SET_EXPANDED_PICKUP:
      return {
        ...state,
        pickupExpanded: payload,
      };
    case ExpandActionTypes.SET_EXPANDED_DESTINATION:
      return {
        ...state,
        destinationExpanded: payload,
      };
    case ExpandActionTypes.SET_EXPANDED_COST:
      return {
        ...state,
        costExpanded: payload,
      };
    default: throw new Error(`Unhandled Action Type ${type}`);
  }
};

export default reducer;
