import { 
  CHANGE_IMAGE, 
  ImageContent, 
  ImageAction 
} from "../../types";

const initialState: ImageContent = {
  id: null,
  name: null,
  link: null
}

export function imageReducer(state = initialState, action: ImageAction): ImageContent {
  switch (action.type) {
    case CHANGE_IMAGE:
        // return { image: action.payload };
      return action.payload;
    default:
      return state;
  }
}
