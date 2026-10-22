# AI image prompts: major images only

Generate each image in Midjourney, ChatGPT or Gemini and save it at the **exact filename** in `public/images/` (overwrite the current file). Then tell Claude, who will check the cropping on every page.

## Style suffix (add to every prompt)

> photorealistic, professional commercial photography, natural lighting, sharp focus, rich detail, shot on a full-frame camera, 35mm lens, no text, no logos, no watermark, no people's faces in close-up

Brand feel: fertiliser company in Tamil Nadu, India. Deep green palette, clean, trustworthy, modern agriculture.

Always ask for **2400 px on the long edge or larger**. Use the aspect ratio shown (`--ar` is the Midjourney syntax).

| File | Used on | Aspect ratio | Prompt (then add the style suffix) |
|---|---|---|---|
| `hero-factory-mfg.jpg` | Home hero, Manufacturing hero | 3:2 (`--ar 3:2`) | Modern fertiliser manufacturing plant in India, wide exterior at golden hour, large stainless steel reactor tanks, pipework and a clean industrial building with green accents, green fields in the background |
| `hero-plant-about.jpg` | About, Contact, Home, Products | 8:5 (`--ar 8:5`) | Aerial view of a fertiliser factory complex surrounded by lush green farmland in Tamil Nadu, India, clear blue sky with soft clouds, tidy warehouses and storage tanks |
| `hero-plant-products.jpg` | Products hero | 2:1 (`--ar 2:1`) | Close-up of different fertiliser products on a clean surface, granules in a scoop, a bag, and liquid bottles, with a blurred green crop field behind, wide composition with space on the left for text |
| `hero-plant-quality.jpg` | Quality hero | 4:3 (`--ar 4:3`) | Modern quality-control laboratory, a technician in a white coat and gloves analysing a soil or fertiliser sample, microscope and glassware, bright clean lighting |
| `hero-ship.jpg` | International Business, Markets, Home | 16:9 (`--ar 16:9`) | Large container ship loaded with colourful containers leaving a port at sunrise, harbour cranes, calm sea, warm light |
| `hero-tank.jpg` | Infrastructure hero | 1:1 (`--ar 1:1`) | Rows of large stainless steel storage and mixing tanks in a clean fertiliser plant, walkways and pipework, strong perspective, soft industrial lighting |
| `about-factory.jpg` | About page | 7:3 (`--ar 7:3`) | Wide view of a clean fertiliser production line with conveyor belts and granulation equipment, bright factory interior, workers in safety gear in the distance |
| `about-team.jpg` | About page | 3:1 (`--ar 3:1`) | Group of agricultural scientists and plant staff in hard hats and white coats, standing in a green crop field beside the factory, friendly and professional, wide panoramic composition |
| `cta-field.jpg` | Banner (call-to-action) | 4:1 (`--ar 4:1`) | Wide panorama of a healthy green crop field at sunrise, rows leading to the horizon, soft golden light, space on the right for text |

## Notes
- Where the image sits behind text, ask for **calm areas with no busy detail** so the text stays readable.
- Avoid generated text or logos in the image. AI tools garble them.
- Crops: heroes are shown with `object-cover`, so keep the key subject in the **centre**.
- Smaller images (product thumbnails, equipment, labs, markets) keep the current upscaled versions for now. I can write prompts for those later if you want.
