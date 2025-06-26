Perfect — I’ll deliver a rewritten project plan where we use a one-time CSV import from Supabase to Shopify, with all images referenced via public Supabase URLs to avoid manual uploads. This plan will include theme setup, code customisation via Cursor, the import process, and a future note on subscriptions.

I’ll get started and share the full updated plan shortly.

**Updated Plan (with one-time CSV import)**

# Project Plan for Bene’s Shopify Store (Option 2)

This plan outlines how to launch a new **Bene** e-commerce store using Shopify. We will select a modern Shopify theme, customize its design to match the current Sunni.be site, and then import all product data from Supabase into Shopify via a **one-time CSV upload** (ensuring images are included without manual effort). Future steps for subscriptions are noted as well. Each phase is detailed below.

## 1. Select a Shopify Theme

Choose a base theme from Shopify’s Theme Store that fits Bene’s branding and layout needs. We are considering the following themes (preview links included):

- **Icon** – _A visually striking theme with parallax scrolling_ – [Preview Link](https://themes.shopify.com/themes/icon/styles/icon/preview)
    
- **Align** – _A clean, minimalist theme for product-focused stores_ – [Preview Link](https://themes.shopify.com/themes/align/styles/clean/preview)
    
- **Highlight** – _A creative, storytelling theme ideal for showcasing products_ – [Preview Link](https://themes.shopify.com/themes/highlight/styles/highlight/preview)
    
- **Exhibit** – _An art-inspired theme with bold imagery_ – [Preview Link](https://themes.shopify.com/themes/exhibit/styles/art/preview)
    
- **Dawn** – _Shopify’s default free theme (OS 2.0), modern and flexible_ – [Preview Link](https://themes.shopify.com/themes/dawn/styles/default/preview)
    
- **Studio** – _A free theme geared towards art and publications_ – [Preview Link](https://themes.shopify.com/themes/studio/styles/default/preview)
    

**Outcome:** We will pick one theme as the starting point. (All listed themes allow an unlimited free trial; you only pay when publishing the theme.) Once selected, we’ll use this theme’s code as the foundation for the store.

## 2. Set Up Theme Development & Customize Design

With the chosen theme, we will adapt the look and feel to match Bene’s current site design (Sunni.be). This will be done in a local development environment using Cursor (our IDE) and Shopify’s CLI tools:

- **Download Theme Code:** Install the Shopify CLI and authenticate (`shopify login`). Use `shopify theme pull` to download the theme’s code to our local machine. This fetches all Liquid templates, assets, and configuration files for editing.
    
- **Local Development Server:** Run `shopify theme dev` to open a local preview of the theme. This command uploads the theme as a **development theme** on the Shopify store and provides a URL (e.g. `http://127.0.0.1:9292`) to preview it live. As we modify files, the preview auto-reloads with changes, allowing rapid UI iteration.
    
- **Customize Theme Design:** Using Cursor, we’ll modify the theme’s code to align with Bene’s branding and content:
    
    - Update the **homepage** sections to mirror Sunni.be’s layout (hero images, copy, featured content). We will reuse existing assets (images, text) from Sunni.be where possible.
        
    - Adjust **styles (CSS)** for Bene’s color palette, typography, and spacing to ensure a consistent brand look.
        
    - Implement any **custom sections or snippets** needed to replicate unique Sunni.be elements (e.g. custom banners, info sections). We’ll define them in Liquid and JSON schema so they are editable via Shopify’s theme editor.
        
    - Configure **navigation and footer** to include the appropriate menus/links similar to the current site.
        
- **Workflow Best Practices:** We will follow Shopify’s theme development best practices:
    
    - Work on an **unpublished theme** (theme draft) to avoid affecting any live store. We’ll push changes using `shopify theme push --unpublished`, creating a draft theme in the Shopify admin. This acts as our staging version for review.
        
    - Use **Theme Check** (`shopify theme check`) to lint and catch Liquid errors or schema issues before publishing.
        
    - Keep large media assets in Shopify’s built-in **Files** section or a CDN. (For example, if we have banner images or videos, we’ll upload them to Shopify’s Files or ensure they are served from a reliable source, rather than hardcoding them in the theme code. Shopify will then host these on its fast CDN.)
        
- **Preserve Editable Content:** Remember that content like product descriptions, collection info, blog posts, etc., are stored in Shopify’s database rather than in the theme files. Our theme code changes will not overwrite those. After deploying the theme, the business team can adjust text and images via Shopify’s **Online Store > Customize** or the Shopify admin for products/collections without needing code changes.
    

**Outcome:** We will have a customized Shopify theme (in draft mode) closely matching Bene’s desired design and user experience. Once everything is approved, we’ll publish this theme to make it the live storefront for Bene.

## 3. Import Product Data from Supabase to Shopify (CSV Bulk Upload)

To efficiently migrate Bene’s product catalog, we will perform a **one-time bulk import** of all product data from the Supabase database into Shopify, using Shopify’s CSV import feature. This avoids manual data entry and ensures that product details and images transfer quickly and accurately:

- **Export Data from Supabase:** First, we’ll extract the product information stored in Supabase. We can write a query or use the Supabase dashboard to export the data (likely from tables such as `artworks` for product info, `variants` for options like sizes, and `images` for product images). We will gather all relevant fields: product title, description, prices, variants (e.g. frame sizes, colors if applicable), inventory counts, and image URLs. This data will be the basis of our CSV.
    
- **Prepare Shopify CSV Format:** Format the exported data into Shopify’s required CSV structure for products. Key considerations:
    
    - **Handles:** Each product needs a unique handle (URL slug). We can use the existing slug from Supabase (e.g. the `artworks.slug`) to maintain consistency.
        
    - **Variants and Options:** If a product has multiple frame sizes or other options, we’ll represent these as variants in the CSV. Shopify’s format uses one row per variant, with shared fields (like Title, Handle) repeated. For example, an artwork available in two sizes would have two rows with the same Handle, and different values under the Size option column and price columns for each variant. We will map Supabase’s `variants.size` field to a Shopify **Option** (likely call it “Size” or “Frame Size”). If there are multiple options (size, color, etc.), Shopify supports up to 3 options per product.
        
    - **Price:** Decide which price to use for the Shopify product. (Supabase might have fields like `launch_price`, `ownership_price`, etc. For the initial launch, we will likely use the main retail price – e.g. the ownership or standard price – as the variant’s Price in Shopify. We can omit subscription-specific pricing for now since subscriptions will be handled later.)
        
    - **Inventory (Stock):** Set the initial stock level for each variant. Since Bene’s products are limited-edition frames, inventory should reflect the available quantity. We can use the Supabase data (e.g. `edition_size` minus `sold` for each artwork) to determine how many are in stock. That number will go into the CSV’s **Variant Inventory Qty** column. We will also set the **Inventory Tracker** to Shopify and the **Inventory Policy** to “deny” (so Shopify won’t allow sales beyond the stock count).
        
    - **Tags, Product Type, Vendor:** If the Supabase data or Sunni.be site categorizes products (e.g. by artist or collection), we can include these as tags or types in Shopify. For example, we might tag all products with “Bene Frames” or specific collection names, and set a Product Type like “Framed Print”. This can be done in the CSV columns for Tags and Type to help organize products on Shopify.
        
- **Include Image URLs (No Manual Uploading):** We will **not** upload images one by one. Instead, for each product (and variant, if variants have unique images), we’ll include the image link from Supabase in the CSV. Shopify’s CSV has an **Image Src** column where we can put a publicly accessible URL of the product image. Since our images are already hosted in Supabase’s storage (and likely accessible via a public URL), we will use those links. During import, Shopify will fetch each image from Supabase and copy it into the Shopify store’s media library for that product. This means all product images will be added in bulk – with **no need for manual image uploads**. We can also specify **Image Position** (ordering) and **Alt Text** in the CSV for better SEO, if desired.
    
    - If a product has multiple images, the CSV will have multiple rows for that product’s handle: the first row for the first variant will include the first image, and additional images can be listed by additional rows that share the same handle (with the Image Src filled and other columns like variant details left blank as needed). Shopify will associate all those images with the one product on import.
        
- **Import into Shopify:** Once the CSV file is ready, we’ll go to Shopify Admin > **Products** > **Import** and upload the CSV. Shopify will process the file and create all products, variants, and attach images automatically. We’ll double-check the import summary for any errors. If the dataset is large, the import might take a short while; Shopify will email a confirmation when done.
    
- **Verify and Clean Up:** After the import, we will verify that all products have been created correctly in Shopify:
    
    - Check a few product pages in the Shopify admin to ensure titles, descriptions, prices, and variants are accurate.
        
    - Spot-check that images have imported and appear on the products as expected.
        
    - Ensure inventory counts match what we expect for each variant.
        
    - Make any minor adjustments if needed (for example, tweak formatting in descriptions, or re-order images via Shopify admin if the order wasn’t preserved).
        
- **Ongoing Product Management:** Since this is a one-time import (we are not setting up continuous syncing), any future product additions or changes will be done directly in Shopify after launch. Our Supabase will remain as an archive or for internal use, but going forward Shopify will be the primary source for product data. This is acceptable because once we’ve populated the initial catalog, the store staff can manage products in Shopify’s user-friendly interface. (If needed, we can always do another CSV import or export in the future to sync large updates, but a real-time integration won’t be necessary for now.)
    

**Outcome:** All existing Bene products (frames/artworks) will be populated in the new Shopify store with their details, variants (e.g. sizes or colors), stock levels, and images. This bulk import approach is the fastest way to get the catalog live on Shopify, and it avoids any tedious manual copying or image uploads. The products will be immediately ready for sale on the new site once the theme is published.

## 4. Future Phase – Subscription & Waitlist Features

_(To be tackled after the initial store launch.)_

Bene plans to offer subscription-based products or memberships for frames. This will be addressed in a Phase 2 project. We will integrate the existing **waitlist app** (which was custom-built for Bene) or a subscription app to handle this functionality:

- **Waitlist Integration:** We have a custom waitlist application from the previous system (Sunni.be) which allows customers to sign up for notifications or early access. In the new Shopify store, we can embed this waitlist functionality on relevant pages (for example, on a “Subscribe” page or alongside subscription products). This could be as simple as adding the waitlist signup form script to the Shopify theme or using an iframe/embedded widget that communicates with our Supabase backend.
    
- **Subscription Products:** When Bene is ready to launch subscriptions, we’ll likely use Shopify’s native subscription APIs or a Shopify App that supports subscription billing. The plan would be:
    
    - Create subscription variants or separate products in Shopify (e.g. a product for “Monthly Frame Subscription” or an option on a product for “Subscribe and Save”).
        
    - Use a Shopify subscription app or the Shopify Payments subscription feature to handle recurring payments securely.
        
    - The waitlist app can feed into this by capturing interested users ahead of time. Once we launch the subscriptions, we can email those on the waitlist or automatically convert them to active subscriptions via the app’s backend.
        
- **Data Flow:** If subscription sign-ups need to be recorded in Supabase (for instance, if we continue using Supabase to track some customer info or manage the waitlist), we can set up a one-way sync or webhook from Shopify to Supabase. For example, when a customer subscribes on Shopify, a webhook could notify our Supabase to mark that user as subscribed. This ensures our original system remains aware of subscription status. (This would be a lightweight integration, much simpler than a full product sync.)
    
- We will ensure that introducing subscriptions does not disrupt the normal operation of the store. It will be an add-on feature: customers not interested in subscriptions can still buy frames outright as usual, while those who want a subscription model can utilize the new feature.
    

**Outcome:** _(For future implementation.)_ Bene’s Shopify store will be able to support subscription sales, likely by using the prior waitlist system as a foundation for managing interested customers. This phase will be planned in detail once the main store is live, and we’ll leverage Shopify-compatible solutions to manage recurring orders. (We have placeholders in the codebase for the waitlist app integration — to be linked when we proceed with this step.)

---

By following this plan, we’ll efficiently launch a new Shopify-powered Bene store. We’ll get a beautiful, responsive site (via a modern theme) up quickly, migrate all products and images in bulk (using the CSV import to save time), and set the stage for future enhancements like subscriptions. This approach prioritizes speed and reliability, ensuring Bene can start selling on Shopify with minimal downtime or manual work. Let’s proceed with this plan and adjust if any issues come up during execution.