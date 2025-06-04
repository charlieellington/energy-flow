https://share.descript.com/view/yBTvxR9pF8C 


## Deep-Dive: AI Image Generation Loop

_How I move from blank page to on-brand visuals in under an hour._

---

### 1. Pin the Mood First

- **Unsplash cache** — drag 20–30 reference shots into one folder.

---

### 2. Write the Skeleton Prompt

I open ChatGPT (model o3) and feed it:

```
Brand palette: #FE2C54 magenta, #00E0FF teal, #FFD500 yellow  
Mood: hopeful / rebellious finance  
Subject placeholders: {portrait | device close-up | abstract shape}  
Aspect: 9:16 mobile  
```

Then ask: _“Give me five 25-word prompts, cinematic language, one camera verb, one lighting adjective.”_  
I keep the best two, trim any fluff, and add LoRA tags.

**Template I reuse**

```
<lora:FluxPortraitTrainer:1>, {subject}, {camera action}, rich {lighting adjective} light, brand colours weaving through scene, shallow depth, 35 mm DSLR, f/2.2 --ar 9:16
```

---

### 3. Dial the Model Settings (FowlAI)

|Setting|Value|Why it matters|
|---|---|---|
|**Sampler**|DPM++ 2M Karras|Fast but keeps fine edge detail.|
|**Steps**|25|Past 30 I see diminishing returns.|
|**CFG scale**|7|Balance between prompt loyalty and pleasant noise.|
|**LoRA weight**|0.8|Enough of “me” without cloning every pore.|
|**Batch size**|6|Sweet spot for GPU vs. choice spread.|
|**Negative prompt**|`text, watermark, extra limbs, mushy face`|Cuts common artefacts.|

_(Keep the LoRA file in the app’s cache; avoids reload lag.)_

---

### 4. Generate → Curate in One Pass

1. Fire off three batches (≈18 images, < 90 s on an RTX 4090).
    
2. In the viewer hit _L_ for loupe, skim faces first (eyes crisp = keeper).
    
3. Drop ⭐⭐⭐ on anything with:
    
    - clear brand colour present
        
    - eye-line towards lens
        
    - no anatomical glitches
        
4. Export only the 4–6 best as JPEG 90 % (≈800 KB each, plenty for web).
    

---

### 5. Quick Post-Treatment

- **Upscale** (4× ESRGAN) _only_ if the final slot is hero-size (> 1920 px).
    
- **Palette snap**: one-click LUT that lifts magenta and crushes greens 5 %.
    
- **File name convention**: `yyyymmdd_section_colour_seed.jpg`
    
    - Keeps versioning calm when Sora pulls from a folder.
        

---

### 6. Feed into Sora & Framer

- **Sora** — drag three portrait JPGs into a storyboard row; let it auto-animate.
    
- **Framer** — use `object-fit: cover;` on image blocks so mobile crop stays tight on eyes.
    
- Verify that each page section’s background colour matches the dominant colour in its paired image (red section + red-tinted shot, etc.).
    

---

### 7. Time + Cost Snapshot

|Phase|Minutes|Cost (GPU credits)|
|---|---|---|
|Unsplash pull|10|—|
|Prompt drafting|5|—|
|Batch generation ×3|5|~$0.18|
|Curation + export|10|—|
|Post-treatment|10|—|
|**Total**|**40**|**<$0.20**|

---

### Field Notes

- Raising **CFG above 9** makes colours scream but introduces posterisation.
    
- If faces smear, drop LoRA weight to 0.6 _before_ increasing steps.
    
- Try 1:1 aspect for abstract backgrounds; Sora squashes less on scroll.
    
- Keep a shared Google Drive folder called **“_Rejected/Maybe Later”** — half of those odd shots find a second life in blog banners.
    

---

### Where to Experiment Next

1. **Multi-LoRA mixing**: your portrait LoRA + a typography texture LoRA for hybrid shots.
    
2. **Clip-guided colour lock**: feed the brand palette as the guide image to tame hue drift.
    
3. **Automated seed logging**: tiny Python script writes seed and prompt to EXIF—future-proofs reruns.
    

---

Shoot over any bottlenecks you hit and we’ll tighten the loop again.