import { h, Fragment } from "preact";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tag: string]: any;
    }
  }
}