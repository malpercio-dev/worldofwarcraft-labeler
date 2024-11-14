import "dotenv/config";

export const PORT = Number(process.env.PORT ?? 4001);
export const DID = process.env.DID ?? "";
export const SIGNING_KEY = process.env.SIGNING_KEY ?? "";
export const BSKY_IDENTIFIER = process.env.BSKY_IDENTIFIER ?? "";
export const BSKY_PASSWORD = process.env.BSKY_PASSWORD ?? "";
export const JETSTREAM_URL =
  process.env.JETSTREAM_URL ?? "wss://jetstream.atproto.tools/subscribe";
export const MAXLABELS = 1;
export const DELETE = "3laumgcczjk2y";
export const POSTS: Record<string, string> = {
  // races
  "3laun2wwblc2v": "bloodelf",
  "3laun2wwckk2v": "darkirondwarf",
  "3laun2wwdjs2v": "dracthyr",
  "3laun2wwdjt2v": "draenei",
  "3laun2wwej32v": "dwarf",
  "3laun2wwej42v": "earthen",
  "3laun2wwej52v": "gnome",
  "3laun2wwej62v": "goblin",
  "3laun2wwfig2v": "highmountaintauren",
  "3laun2wwfih2v": "human",
  "3laun2wwfii2v": "kultiran",
  "3laun2wwfij2v": "lightforgeddraenei",
  "3laun2wwghr2v": "magharorc",
  "3laun2wwghs2v": "mechagnome",
  "3laun2wwght2v": "nightborne",
  "3laun2wwghu2v": "nightelf",
  "3laun2wwghv2v": "orc",
  "3laun2wwghw2v": "pandaren",
  "3laun2wwghx2v": "tauren",
  "3laun2wwghy2v": "troll",
  "3laun2wwghz2v": "undead",
  "3laun2wwhhb2v": "voidelf",
  "3laun2wwhhc2v": "vulpera",
  "3laun2wwhhd2v": "worgen",
  "3laun2wwhhe2v": "zandalaritroll",

  // classes
  "3launfgto2u2v": "deathknight",
  "3launfgto2v2v": "demonhunter",
  "3launfgto2w2v": "druid",
  "3launfgtp262v": "evoker",
  "3launfgtp272v": "hunter",
  "3launfgtp2a2v": "mage",
  "3launfgtp2b2v": "monk",
  "3launfgtpzj2v": "paladin",
  "3launfgtpzk2v": "priest",
  "3launfgtpzl2v": "rogue",
  "3launfgtpzm2v": "shaman",
  "3launfgtqyu2v": "warlock",
  "3launfgtqyv2v": "warrior",
};
