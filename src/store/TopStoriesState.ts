import actionType from './actionType';

interface IProps {
  description: string;
}
// action creators
export const addTopStories = (description: any) => ({
  type: actionType.TOP_STORIES,
  payload: {description},
});

// reducer
let lastId = 0;
export default function reducer(
  state: IProps = {description: ''},
  action: {type: string; payload: IProps},
) {
  // console.log('reducer', action.payload.description);

  switch (action.type) {
    case actionType.TOP_STORIES:
      return {
        description: action.payload.description,
      };
    // case actionType.BUG_REMOVED:
    //   return state.filter(bug => bug.id !== action.payload.id);
    // case actionType.BUG_RESOLVED:
    //   return state.map(bug =>
    //     bug.id !== action.payload.id ? bug : {...bug, resolved: true},
    //   );
    default:
      return state;
  }
}
