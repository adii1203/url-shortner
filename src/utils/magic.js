import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const createMagic = (key) => {
  return (
    typeof window !== "undefined" &&
    new Magic(key, {
      deferPreload: true,
      extensions: [new OAuthExtension()],
    })
  );
};

export const magic = createMagic("pk_live_18F57B47F60779D9");
