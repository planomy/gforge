# gforce — story card art

Drop one image per story in this folder. The card automatically loads it.

## Naming

Use the story's `id` as the filename. The loader tries `.jpg` first, then `.png`, then `.webp`. Use whichever format your tool exports — just one per story.

If a file is missing, the card falls back to a topic-colored gradient with the topic emoji, so partial sets work fine.

## Filenames (one per story)

### Sport (green/cyan accent)
- `final-shot.jpg`     — The Final Shot — basketball championship, final seconds
- `wipeout.jpg`        — The Wipeout — young surfer paddles into a huge swell
- `tackle.jpg`         — The Tackle — defender's last chance to save the match
- `sprint.jpg`         — The Sprint — late comeback in the 100-metre final
- `last-wicket.jpg`    — The Last Wicket — cricket final, one ball, one wicket
- `overtime-goal.jpg`  — The Overtime Goal — sudden-death overtime, cup final

### Adventure (orange/gold accent)
- `hidden-chamber.jpg`  — The Hidden Chamber
- `jungle-crossing.jpg` — The Jungle Crossing
- `mountain-pass.jpg`   — The Mountain Pass
- `sunken-wreck.jpg`    — The Sunken Wreck
- `lost-city.jpg`       — The Lost City
- `storm-at-sea.jpg`    — The Storm at Sea

### Mystery (violet/pink accent)
- `empty-house.jpg`    — The Empty House
- `missing-bike.jpg`   — The Missing Bike
- `locked-room.jpg`    — The Locked Room
- `shadow-window.jpg`  — The Shadow at the Window
- `cipher.jpg`         — The Cipher
- `vanishing.jpg`      — The Vanishing

### Sci-Fi (cyan/violet accent)
- `signal.jpg`         — The Signal
- `robot.jpg`          — The Robot
- `wormhole.jpg`       — The Wormhole
- `lab-escape.jpg`     — The Lab Escape
- `first-contact.jpg`  — First Contact
- `reactor.jpg`        — The Reactor

## Recommended specs

- **Aspect ratio**: Any! The card adapts to the image's natural aspect ratio on load — 1:1, 4:3, 16:9, etc. all display in full with no cropping. For visual consistency within a topic, try to keep all six stories in that topic at the same aspect.
- **Dimensions**: 1024 px on the longest edge is the sweet spot (~300KB as PNG). 1280 px for crisp retina.
- **Format**: PNG, JPG, or WebP — all work. PNG is loaded first, then JPG, then WebP.
- **Title baked into the art**: ✅ recommended. When the image loads, the card automatically hides its text title/context — the art's typography is the title. Title can be anywhere in the image since nothing is cropped.
- **Tone**: dark, cinematic, dramatic — the cards sit on a dark purple/orange background, so high-contrast moody art with vibrant accent colors reads best.

## Tips for AI generation

Base prompt template that's been working well:

> Cinematic game tile illustration of [scene], dramatic lighting, vibrant neon and ember accents, dark moody atmosphere, painterly digital art, bold stylized title "[TITLE]" baked into the art in ornate display lettering, 1:1 square aspect ratio, --ar 1:1
