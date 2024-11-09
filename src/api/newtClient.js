import { createClient } from "newt-client-js"; // Newtモジュールのインポート

export const client = createClient({
  spaceUid: import.meta.env.VITE_NEWT_SPACE_UID, // Newt SpaceUIDの指定
  token: import.meta.env.VITE_NEWT_API_KEY, // Newt アクセストークンの指定
  apiType: "cdn",
});
