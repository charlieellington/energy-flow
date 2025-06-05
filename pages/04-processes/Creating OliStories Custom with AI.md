
---

### 1. Pin the Mood First

- Get the illustration style that you want to use 

---

### 2. Image Training 

- Train: 
	- https://fal.ai/models/fal-ai/flux-lora-portrait-trainer for characters 
	- https://fal.ai/models/fal-ai/flux-lora-fast-training for a fast output with 100s of images 
	- https://fal.ai/models/fal-ai/recraft/v3/create-style - for illustrative 

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
