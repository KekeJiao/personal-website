# Placeholder photographs

Every image on the site is a placeholder hosted on Unsplash, referenced from `lib/site.ts`. Replace
them with your own files when they are ready. The filenames above are suggestions; keep the
`src`, `alt` and caption together and the layout will not change.

| #   | Where it appears                  | Current file constant                  | Frame             | What it should be                                                                                                                     |
| --- | --------------------------------- | -------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Hero, directly under the headline | `heroPhoto`                            | 16:9, 2000 × 1125 | The one image that says what you do. A wide frame with air in it — a room before an event, a landscape, a full-body portrait in situ. |
| 2   | Beside the introduction           | `portraitPhoto`                        | 4:5, 900 × 1125   | A portrait of you, or a portrait that looks like you. Soft, available light, eyes away from the lens.                                 |
| 3   | Work, first frame                 | `work[0]` — “Before the vows”          | 4:5               | The quiet before a wedding: getting ready, hands, a doorway.                                                                          |
| 4   | Work, second frame                | `work[1]` — “Six forty in the evening” | 3:2               | A portrait made in the last hour of light.                                                                                            |
| 5   | Work, third frame                 | `work[2]` — “Salt”                     | 3:2               | An editorial or commissioned frame — fashion, product in context, or a travel commission.                                             |
| 6   | Work, fourth frame                | `work[3]` — “Her mother's garden”      | 4:5               | A wedding frame outside, in weather, with people in it.                                                                               |
| 7   | Work, fifth frame                 | `work[4]` — “Studio, Tuesday”          | 1:1               | A studio portrait against a plain ground.                                                                                             |
| 8   | Work, sixth frame                 | `work[5]` — “The long way home”        | 3:2               | A personal frame — the picture you would hang at home rather than deliver.                                                            |

## How to swap them

1. Put the exported files in `public/photos/` (create the folder), e.g. `public/photos/hero.jpg`.
2. In `lib/site.ts`, point the entry at the local path:

   ```ts
   export const heroPhoto = {
     src: "/photos/hero.jpg",
     alt: "…",
     caption: "…",
   }
   ```

3. Export long edge at roughly 2000px for the hero and 1600px for gallery frames, quality 80, sRGB.
   `next/image` will produce the responsive sizes and modern formats.
4. Update `alt` and `caption` for each frame — they currently describe the placeholder, not your
   photograph.

## Also placeholder, less visible

- `site.email` — `hello@kekejiao.com` is a stand-in; use the inbox you actually read.
- `site.socials` — Instagram and 小红书 links point at their home pages.
- `site.url` / `NEXT_PUBLIC_SITE_URL` — the fallback domain `www.kekejiao.com`.
- Prices in `rates` — starting points in CNY; adjust to your own numbers.
- Copy throughout `components/sections/*` is written in the photographer's voice; read it once and
  make it yours.
