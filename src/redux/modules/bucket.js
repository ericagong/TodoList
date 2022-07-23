// widgets.js

// Actions
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

// InitialState
const initialState = {
  list: ["JS 파트 2 정리하기", "3주차까지 듣기", "혀노 전화하기"],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE":
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    case "bucket/DELETE":
      const deleted_bucket_list = state.list.filter(
        (_, i) => i !== parseInt(action.bucket_index)
      );
      return { list: deleted_bucket_list };
    // do reducer stuff
    default:
      return state;
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
