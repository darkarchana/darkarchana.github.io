import { CHANGE_IMAGE, ImageContent, ImageAction } from "../../types";

export function changeImage(payload: ImageContent): ImageAction {
    return { type: CHANGE_IMAGE, payload }
};