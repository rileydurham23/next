import * as photos from "./data/photos";

export type PersonPhoto = keyof typeof photos;

export interface Review {
  text: string;
  person?: {
    name: string;
    title: string;
    photo?: PersonPhoto;
  };
}
