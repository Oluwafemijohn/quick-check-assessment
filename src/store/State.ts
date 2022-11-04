import actionType from './actionType';

interface IProps {
  description: string;
  id: number;
}
// action creators
export const bugAdded = (description: any) => ({
  type: actionType.BUG_ADDED,
  payload: {description},
});

export const bugRemoved = (id: any) => ({
  type: actionType.BUG_REMOVED,
  payload: {id: id},
});
export const bugResolved = (id: any) => ({
  type: actionType.BUG_RESOLVED,
  payload: {id},
});

// reducer
let lastId = 0;
export default function reducer(
  state: IProps[] = [],
  action: {type: string; payload: IProps},
) {
  switch (action.type) {
    case actionType.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actionType.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);
    case actionType.BUG_RESOLVED:
      return state.map(bug =>
        bug.id !== action.payload.id ? bug : {...bug, resolved: true},
      );
    default:
      return state;
  }
}
