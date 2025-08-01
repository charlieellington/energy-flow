---
title: Creating Images For The Paid247 Website
---

# Creating Images For The Paid247 Website

https://share.descript.com/view/yBTvxR9pF8C 


## Deep-Dive: AI Image Generation Loop

_How I move from blank page to on-brand visuals in under an hour._

---

### 1. Pin the Mood First

- **Unsplash cache** — drag 20–30 reference shots into one folder.

---

### 2. Image Training 

- Train https://fal.ai/models/fal-ai/flux-lora-portrait-trainer on the selected images 

---
### 3. Write the Prompts

I open ChatGPT (model o3) and feed it it info on the brand and the content and ask it create prompts. 

**Template I reuse**

```
<lora:FluxPortraitTrainer:1>, {subject}, {camera action}, rich {lighting adjective} light, brand colours weaving through scene, shallow depth, 35 mm DSLR, f/2.2 --ar 9:16
```


---

### 3. Generate → Curate in One Pass

Create images in https://fal.ai/models/fal-ai/flux-lora
        

---

### 4. Feed into Sora & Framer

- **Sora** — drag three portrait JPGs into a storyboard row; let it auto-animate.
    
- **Framer** — use `object-fit: cover;` on image blocks so mobile crop stays tight on eyes.
    
- Verify that each page section’s background colour matches the dominant colour in its paired image (red section + red-tinted shot, etc.).
    

---
