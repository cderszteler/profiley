import {CSSProperties} from "react";

export type Profile = {
  decoration: ProfileDecoration
}

export type ProfileDecoration = {
  borderColor: {
    from: Color
    to: Color
  }
}

type Color = CSSProperties["color"]