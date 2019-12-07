export const CHANGE_IMAGE: string = "CHANGE_IMAGE";

export interface ImageContent {
    id: number | null,
    name: string | null,
    link: string | null
} 

interface ChangeImageAction {
    type: typeof CHANGE_IMAGE
    payload: ImageContent
}

export type ImageAction = ChangeImageAction
