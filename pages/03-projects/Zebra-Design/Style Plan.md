
**IMPORTANT:** _Recreate this report based on the chosen theme._ This build plan is written generically; once a specific site theme is selected, the steps and code references should be adapted to that theme’s structure and style.

# Design Customization Build Plan (Reskin Landing Page & Branding)

In this phase, we will **re-skin the landing page**, apply **Sunni’s branding (logo & colors)**, adjust **typography**, add **custom content sections**, and implement a custom **navigation header** and **footer**. We’ll use content from the existing site (sunni.be) and ensure the new theme reflects the same information and branding. Below is a detailed step-by-step plan for developers to follow:

## Overview & Preparation

- **Gather Existing Assets:** Collect all content and media from **sunni.be**, including text copy, images, and logos. Key assets to have on hand:
    
    - **Logos:** Sunni logo (SVG preferred) and partner logo (Benedicte Caramin) in required variants (e.g. a white version for dark backgrounds).
        
    - **Hero Image:** High-quality ocean artwork photo used on the current landing page (the sunlit room with framed ocean art).
        
    - **Section Images:** Three images for the “How it works” steps (e.g. artwork on plinth, alcove with framed print, framed picture on bench).
        
    - **Other Graphics:** Icons or illustrations for membership benefits (if not using theme icons) and the **Ocean Cleanup** logo + related images.
        
    - **Text Content:** All textual copy from sunni.be: tagline, descriptions, step explanations, etc. (We will reuse this content in the new site).
        
- **Set Up Theme for Customization:** Ensure the new theme (once chosen) is installed/running. Familiarize yourself with its structure:
    
    - Identify how the theme’s homepage is structured (hero section, content sections, etc.) and where to insert custom content.
        
    - Locate theme files or settings for colors and typography (e.g. CSS variables, Sass files, Tailwind config, or theme JSON) for brand color updates.
        
    - Confirm the theme’s method for adding navigation links and footer content (it may have menu configuration or require editing layout components).
        
- **Backup & Version Control:** If modifying an existing theme, back up original files. Use version control (git) to track changes as we implement the design customizations.
    

## 1. Reskin the Landing Page (Homepage Content)

We will recreate the landing page using Sunni’s content and the theme’s layout as a foundation. The goal is to make the new homepage look like the Sunni site’s landing page, with clean white backgrounds and our specific sections. Steps to implement:

1. **Hero Section Implementation:** Replace the theme’s default hero/banner with Sunni’s hero content:
    
    - **Background Image:** Insert the ocean art hero image as the section background or a full-width image at the top of the page. Ensure it’s responsive (the theme may have a designated hero image field or use an <img>/<Image> component).
        
    - **Overlay Text:** Add the headline _“Let ocean art light up your space.”_ as a prominent tagline on the hero. In the current Sunni design, this text is centered and overlayed on the image (or placed in a card overlapping the image).
        
        - Use a large, bold font style provided by the theme for this headline (e.g. theme’s display or hero text style).
            
        - If the theme supports a subtitle or description in the hero, include the secondary tagline text from sunni.be. For example, the existing site’s subheading: _“A new gallery and concept — one simple membership. Hand-finished frames, gallery-grade prints. Swap each year — or buy the piece and we credit all your fees.”_ Integrate this as a brief description below the main headline (line breaks as appropriate for readability).
            
    - **Call-to-Action Button:** Include a clear CTA in the hero. On sunni.be, there is a **“Discover the Subscription”** or **“Join the Founding Guests”** prompt. In our new theme, add a button or link in the hero section (if the theme supports one) labeled accordingly (e.g. “**Discover the Subscription**” or “**Join the Launch Guest-List**”). This should link to the sign-up or subscription info:
        
        - If a waitlist or sign-up page exists (such as **waitlist.sunni.be**), link the CTA to that (open in a new tab if external).
            
        - Use the theme’s primary button style for consistency.
            
2. **Membership Benefits Highlight:** Below the hero, present the key benefits of the Sunni membership (this is a custom section not found in a typical theme). We will create a four-column benefit grid (or an equivalent layout) to summarize the service’s unique points:
    
    - **Content for Each Benefit:** Use the four main points from sunni.be:
        
        1. **“Rent the artwork”** – _“We print, frame and deliver your favourite work.”_
            
        2. **“Swap the artwork”** – _“A fresh look for your home or office every year.”_
            
        3. **“Tax deductible”** – _“100% is deductible – ideal for freelancers and businesses.”_
            
        4. **“Ocean cleanup”** – _“10% of memberships contribute to the best ocean cleanup initiatives.”_
            
    - **Design & Layout:** Implement these as feature cards or list items:
        
        - If the theme has a “features” or “services” section component, repurpose it by plugging in the above titles and descriptions. Otherwise, create a simple HTML structure: e.g., a flex/grid with 4 columns (on desktop) or stacked on mobile.
            
        - Include an icon for each point if possible. In the Sunni code, icons like a star, refresh arrow, briefcase, and droplet were used to visually represent each benefit. Use either the theme’s icon set or similar icons (FontAwesome, etc.) in a consistent style. Color the icons in the brand’s primary color (brown) for emphasis.
            
        - Style the benefit cards to be clean: white background, a subtle drop-shadow or border, and use the theme’s heading style for titles (maybe h3 or h4) and body style for descriptions. Ensure text is legible (use dark text on white).
            
3. **“How It Works” Steps Section:** Next, implement the three-step process that explains the membership workflow (often labeled “How the subscription works”). This section guides new users through joining Sunni:
    
    - **Section Heading:** Include a section title like “**How the Membership Works**” for context (visible or at least for screen-readers, as done in code). Use a heading style (h2) consistent with the theme’s section headers.
        
    - **Step 1 – Choose Artwork:** Title: _“Choose an ocean print you love”_. Description: explain selection of a photograph and frame (from sunni.be: _“Explore our collections and pick your favourite limited-edition photograph. Each work will be issued maximum 20 runs. Choose the frame style and size that suits your space. We use the best printing techniques and handcrafted wooden frames.”_).
        
    - **Step 2 – Join the Membership:** Title: _“Become a Sunni member”_ (or “Join the guest-list” as phrased on the old site). Description: explain starting the membership and receiving the first artwork. Include pricing info for founding members vs later members:
        
        - E.g., _“Once you choose your artwork, your Sunni membership starts and you will receive your first frame. Founding memberships are offered at a special rate (around €40–€50 per month for the first cohort). Subsequent memberships will start from the regular subscription price.”_ Update actual prices when available (the code dynamically pulled € values; if static, use the latest known from sunni.be).
            
        - Emphasize the limited slots (e.g., first 40 members for launch) if relevant.
            
    - **Step 3 – Enjoy & Swap:** Title: _“Enjoy your art for 12 months or more”_. Description: _“We deliver your framed artwork to you. Enjoy it for a year. After 12 months, you can swap it for a new piece or continue with the same one. If you end your membership, you have the option to purchase your current artwork (with membership fees credited toward the price) or return it.”_. Highlight the flexibility and that 100% of first-year fees can reduce the purchase price (as mentioned on the old site).
        
    - **Layout & Styling:** Structure each step with an image and text:
        
        - Use a two-column layout for each step on larger screens: one side image, one side text. Alternate the image placement left/right for each step to create visual variety (as done in Sunni’s design).
            
        - On mobile, stack the image above the text for each step (the theme’s responsive grid or a flex-column will handle this).
            
        - Use the theme’s numbering or step indicator style if available, or simply prepend a bold step number “01, 02, 03” to each description for clarity. Ensure the numbers stand out (could use a larger font or colored text — e.g., the brand’s rust/brown color).
            
        - Make sure the images for each step are added (using the ones gathered from sunni.be) and have appropriate alt text (e.g., “Framed ocean artwork on display” for step 1, etc. as in code).
            
        - Keep background **white** for this section for a clean look (no colored section backgrounds, per our plan to maintain white backgrounds).
            
4. **Early Membership Call-to-Action (Launch Reservation Banner):** Add a prominent full-width section to encourage users to reserve their spot or join the launch guest list – reflecting the pre-launch campaign:
    
    - **Highlight Bar:** Create a wide banner section with a contrasting background color for emphasis. Sunni uses a **rust-colored bar (#8F361B)** for this purpose. This bar contains a short message and a CTA:
        
        - Message example: _“Launching July 2025 to the first 40 members”_ – center this in the bar in a white or light-colored font for contrast.
            
        - **Reserve CTA:** A button labeled “**Reserve Your Spot**” linking to the external waitlist ([https://waitlist.sunni.be/):contentReference[oaicite:30]{index=30}](https://waitlist.sunni.be/\):contentReference%5Boaicite:30%5D%7Bindex=30%7D). Use a light button style (on Sunni, the button is off-white with black text to stand out on the rust background). If the theme has a pre-built banner or callout component, adapt it; otherwise, custom-build this with a <section> and some basic styling (centered text and button).
            
    - **Social Proof (Optional):** If feasible, include the dynamic “already X reservations” info to boost urgency:
        
        - On Sunni’s site, after reserving, they show avatars of recent sign-ups and a caption like “Join 14 friends already signed up – [Names]… and more…”. Implementation: You could show static placeholder avatars and text for now (or integrate with a backend if available). For the build plan’s scope, note that this element is secondary; we can initially add a simple text like “_20 reservations already taken by early members…_” to simulate this social proof.
            
        - A simpler approach if dynamic data isn’t available in the theme: just state “Several art lovers have already joined the waitlist!” beneath the button.
            
    - **Early-Bird Perks List:** Beneath the main CTA, list the perks of joining early:
        
        - Sunni highlights steps to reserve: _“01 Create an account in 30 seconds”_, _“02 Access limited editions at launch”_, _“03 Founder prices for your selected art”_. We can present these in a 3-column or list format under the banner.
            
        - Keep the text styling consistent with theme’s small print or list style. Use icons or bold numbers to match the design. (These can be static since they’re just informational bullet points.)
            
    - **Responsive Behavior:** Ensure the banner and its contents are responsive:
        
        - Text should be centered on mobile. Avatars (if included) can be hidden or a couple shown on small screens to avoid clutter.
            
        - The benefits list can stack vertically on mobile for readability.
            
5. **“Clean Ocean Project” Section:** Incorporate the give-back message about supporting The Ocean Cleanup:
    
    - This is a distinct section (often at the bottom of the page) highlighting that **10% of subscription fees go to The Ocean Cleanup initiative**. It’s important for the brand story.
        
    - **Content:** A short statement like: _“**10%** of all membership fees support **The Ocean Cleanup**”_, followed by a one-liner _“Giving back to the ocean and nature is part of the membership.”_.
        
    - Include The Ocean Cleanup’s logo for recognition. The logo (and perhaps a link to the initiative’s site) should be present.
        
    - **Layout:** In Sunni’s design, this appears as a white card with the logo and text on the left and a small gallery of images on the right (showing the ocean and cleanup efforts):
        
        - For our implementation, we can create a similar horizontal split:
            
            - Left column: the text and logo. Make the “10%” bold or larger for emphasis, and ensure “The Ocean Cleanup” is a clickable link (opening in a new tab).
                
            - Right column: a few small images (e.g., 3 thumbnails) related to ocean cleanup as visuals. These can be the images of cleanup projects (from sunni.be or The Ocean Cleanup resources). If the theme has a gallery or image grid widget, use that; if not, manually insert <img> tags or theme’s image components side by side. On mobile, you may hide these images to save space (as was done originally).
                
        - Keep this section’s background white to maintain the clean look. Add a subtle border or shadow to the container if needed to distinguish it from the page background.
            

By the end of these steps, the **homepage** should closely match Sunni’s original landing page content structure, all on clean white backgrounds (except the intentionally colored banner). We have introduced all custom sections (benefits grid, how-it-works steps, reservation banner, and charity blurb) while using the theme’s layout as much as possible.

## 2. Tweak Color Scheme and Typography

Next, adjust the global styles to apply Sunni’s branding. This includes updating colors (brand palette) and fonts/typography settings:

- **Integrate Brand Colors:** Update the theme’s color scheme to reflect Sunni’s colors:
    
    - **Primary Color – Brown:** Sunni’s main brand color is a medium brown (hex `#6E554C`). Use this as the primary accent color in the theme (for example, for headings, icons, links or buttons where appropriate). In code or theme settings, replace the default primary color with this brown:
        
        - If using Tailwind or CSS variables, define a custom color (e.g., `brand-brown`) with this hex.
            
        - Apply the brown to elements like link hover states, iconography (as done for the benefit icons), section titles, or any decorative elements to tie the design to the brand.
            
    - **Secondary Color – Soft Pink:** Sunni’s palette also includes a soft pink (hex `#DBC0B7`). This can be a secondary accent (perhaps used for subtle backgrounds or highlights). Since we aim to keep backgrounds mostly white, use the pink sparingly:
        
        - Possible uses: as a background for badges or labels, a hover color for buttons, or in graphics/illustrations.
            
        - Ensure contrast and readability when using pink (it’s a light tone, so avoid pink text on white; it’s better as a light background with dark text).
            
    - **Neutral/Background Colors:** Set all section backgrounds to white unless the design explicitly calls for color (like the rust banner). Remove any off-brand background colors the theme might have. The goal is a clean, minimal backdrop so the artwork and content stand out. For example, if the theme had grey or colored panels, override them to `#FFFFFF`.
        
    - **Button Styles:** Adjust button colors to align with the brand:
        
        - Primary buttons: if the theme’s primary buttons were a different color, consider using the brand brown or neutral tones. However, test legibility (brown buttons with white text could work if contrast is sufficient).
            
        - Secondary buttons or links: can use either brown text or a subtle styling. The reservation banner’s button in Sunni is a light neutral (almost white) with black text – ensure such styling is replicated by customizing CSS or theme options for that specific case.
            
    - **Check Minor Elements:** Icons (like social icons, burger menu lines, etc.) should also use appropriate brand colors if needed (many might just be black or white which is fine on white background).
        
- **Typography and Fonts:** We will use the **theme’s default typography** rather than importing the old site’s exact font, to maintain consistency with the chosen theme’s design:
    
    - Identify the theme’s default font family for headings and body text. Ensure those fonts are loaded and applied.
        
    - **Font Sizes/Hierarchy:** Compare the theme’s font sizing with Sunni’s design:
        
        - The hero headline should be bold and large (likely the theme already has a big hero text style; use it or adjust to approximate Sunni’s look).
            
        - Section headings (like “How it works”) should be clear and prominent (maybe theme’s H2 size).
            
        - Body text should be easily readable (the Sunni site uses a base ~16px font size which is standard). If the theme’s base font size is smaller, consider increasing it to ~16px for better readability.
            
    - **Font Family:** If Sunni’s original site had a specific font (for instance, the codebase references a font “Livvic” in Tailwind config), we will **not** enforce it if the new theme has its own well-designed font. Stick with the theme’s font to keep visual harmony. For example, if the theme uses a modern sans-serif like Open Sans, that’s fine to use for all text.
        
        - However, ensure that the chosen font conveys a similar clean and contemporary feel as Sunni’s brand. If the theme’s font is drastically different (e.g., a very decorative font not suitable for an art website), you might reconsider using Sunni’s font. _(This can be revisited once the theme is known.)_
            
    - **Headings & Styles:** Adjust any heading styles to match branding if needed – e.g., maybe use the brand brown for headings instead of theme’s default color, to subtly tie in the palette.
        
    - **Line Heights and Spacing:** Maintain good readability by using the theme’s spacing. In the code, they set a base line-height of 1.5 for text – ensure the theme’s text also has comfortable line spacing (usually themes do). If needed, tweak line-height or letter-spacing for large text that might overlay images (so that it’s legible).
        
    
    _After this step, the site’s colors and text should clearly reflect Sunni’s branding: the **Sunni logo and brown color** will be immediately identifiable, and the typography will be clean and consistent (using theme defaults for reliability)._
    

## 3. Add Custom Sections (Homepage Continued)

_(This step overlaps with the earlier landing page reskin, but here we ensure any additional sections unique to Sunni are fully integrated. If the theme’s homepage was modular, we might need to create new sections/modules for these.)_

- **Implementing Custom Sections in Theme:** Many themes have pre-designed sections for common needs (hero, features, testimonials, etc.), but the Sunni site has unique sections like the **reservation banner** and **Ocean Cleanup note**. We should be prepared to add those either via the theme’s custom content blocks or by directly editing the homepage template:
    
    - If the theme supports adding custom HTML or has a page builder, use it to insert the sections at the right positions (e.g., after the how-it-works steps, add a HTML block for the reservation banner).
        
    - If manual coding is needed (as in a React/Next.js template), create new components/sections files for these and include them in the homepage layout.
        
    - Ensure that all custom sections are responsive and match the overall style (we might reuse theme classes for text and buttons to get consistent fonts and padding).
        
- **Order of Sections:** Verify the sequence of sections on the homepage matches the intended flow:
    
    1. Hero + Tagline (with CTA)
        
    2. Benefits Grid (4 key benefits)
        
    3. How It Works (3 steps)
        
    4. Early Bird Reservation Banner (join waitlist)
        
    5. Launch Collection Teaser (if any – e.g., a note about “Launching July 2025” with button to view collection, which on Sunni is integrated with the waitlist section)
        
    6. Ocean Cleanup/Charity message
        
    7. _Footer (next step covers this)_
        
    
    Each section should transition logically (the user learns about the offering, how it works, is invited to join, and then sees the mission support note).
    
- **Styling Consistency:** As you add these sections, maintain consistency:
    
    - Use **white backgrounds** for all sections (the reservation banner is an exception with rust background by design; other sections like benefits and how-it-works should be white with content cards rather than colored blocks).
        
    - Use the brand color primarily for highlights (e.g., icons, headings, link text) and keep large areas clean. This aligns with the decision to “move backgrounds to white for a cleaner look.”
        
    - Ensure spacing (margins/padding) between sections is visually balanced, likely using the theme’s default section spacing. For example, add top/bottom padding around the how-it-works and cleanup sections so they aren’t jammed together.
        
    - If the theme has scroll animations or specific grid systems, incorporate the content within those to maintain the interactive feel (optional).
        

By completing this step, all **custom content sections from Sunni’s design are present** on the new site. The homepage now contains all the tailored information the old site had, but integrated into the new theme’s structure.

## 4. Customize Navigation (Header)

Now we will adjust the site’s header and navigation menu to use the Sunni branding and menu structure:

- **Logo in Header:** Replace the theme’s default logo or site title with the **Sunni logo**:
    
    - Import or upload the Sunni logo file into the theme’s assets. Prefer using an SVG for crisp scaling. In code, we have filenames like _“Sunni Logo.svg”_ and a special _“sunni-logo-home.svg”_ (possibly a variant for the transparent header).
        
    - If the theme supports a configurable logo (e.g., via settings or a file replacement), use that mechanism. Otherwise, edit the header component to use an `<img>` tag or equivalent component pointing to the Sunni logo file.
        
    - Set appropriate width/height or CSS rules so the logo displays at a good size and is retina-quality. In the Sunni code, the logo was shown at ~120px width in the footer; in the header it might be sized similarly or slightly larger if needed. Ensure it’s not pixelated or squashed.
        
    - **Home Link:** Wrap the logo in a link to the homepage (usually already the case in themes). This allows users to return home by clicking the logo.
        
- **Navigation Links:** Update the header menu items to match Sunni’s site structure:
    
    - From sunni.be’s content, the primary navigation links are:
        
        - **Collections** (or “Explore the Collection”) – likely linking to a page showcasing art collections.
            
        - **The Artist** – linking to an About/Artist page (in code, `/artist` page exists).
            
        - **Contact** – which on sunni.be is a mailto link to an email address or possibly a contact page.
            
        - **Instagram** – the Instagram icon or link might be present in the footer instead (and indeed we see Instagram in the footer menu, but the header menu in code has Contact as mailto and no Instagram).
            
        - If the theme had extra default pages (like “About” or “Blog”), remove or hide those unless needed, focusing the menu on the above key items.
            
    - **Implementing Links:** Using the theme’s menu editor or header component:
        
        - Ensure “Collections” points to the collections page (if using Next.js, that’s likely `/collections` or `/choose-collection` as per code). If the page is not yet built, you might link it to a placeholder or the section on the homepage for now.
            
        - “The Artist” link to the artist page (e.g., `/artist`). If the theme didn’t have this page template, create a basic page for it and fill with content later.
            
        - “Contact” link should open an email compose window to the provided address. Use a `mailto:` link (e.g., `mailto:benedicte.caramin@gmail.com`) as done originally.
            
        - For external links like Instagram, the theme might allow a custom icon or link. In Sunni’s implementation, Instagram was only in the footer, but you could also include a small Instagram icon in the header if desired. Otherwise, keep it just in footer.
            
    - **Style and Active States:** The header links should use theme styles but possibly with color tweaks:
        
        - On a white header background, links could be in the brand brown or default text color. On the homepage hero (if the header is overlaid on the image), you might need the links in white for contrast. Sunni uses a transparent header on the homepage with white text over the hero image. Check if the theme supports a transparent header on the landing page.
            
            - If yes, enable it and ensure the logo and link text are visible (you might use a white version of the logo or white text for menu on that page). The Sunni code has logic to switch the logo SVG to a white variant when on a transparent header.
                
            - If the theme doesn’t support this out of the box, you can custom-code the homepage header: e.g., add a class to make the background transparent and text white, then when the user scrolls (if theme handles sticky headers) it can switch to a solid background. This is a nice-to-have; at minimum, ensure the header looks okay on the hero (even if it’s just the default header style).
                
        - Adjust hover and active states for menu links to use brand colors. For example, hover underline or color could be the pink or brown. Make sure the contrast is good (on white background, brown is fine; on dark transparent background, maybe use a lighter shade or underline).
            
    - **Mobile Menu:** If the theme has a mobile menu (burger icon), verify it works after adding our links:
        
        - Clicking the burger should show the menu items (the theme likely handles this; just confirm our new links appear).
            
        - If needed, style the mobile menu background. On Sunni, the mobile menu likely covers the screen (if using their SimpleHeader, they had code for toggling a vertical menu). Use brand colors if the theme uses any colored mobile menu (many just use white or black backgrounds which is fine).
            
        - Test that external links (like mailto) close the mobile menu properly on click (the Sunni code explicitly closes menu on link click).
            
- **Header Layout:** Ensure the header spacing and alignment looks good with the new content:
    
    - Logo on the left, menu on the right (for desktop). Check that the logo vertical alignment matches the menu (you may need to adjust padding/margins if the new logo file’s aspect ratio is different from the theme’s placeholder).
        
    - If the theme had a tagline or secondary menu in the header, remove it or repurpose it only if needed (likely not needed here).
        
    - If using a sticky header (fixed on scroll), test that with our transparent header approach on home, as mentioned.
        

By the end of this, the **site header should display Sunni’s logo and menu**, providing clear navigation. It will look professional and on-brand, with the logo replacing any generic theme text and the links matching Sunni’s site map.

## 5. Customize Footer

Finally, implement the footer to include the necessary links and branding for Sunni:

- **Footer Structure:** The Sunni homepage footer is a custom design with the Sunni logo on one side, a set of links in the middle, and the Benedicte Caramin logo on the opposite side. We will replicate this in the new theme’s footer:
    
    - If the theme offers a widgetized footer or multiple column layout, allocate one column for the Sunni logo, one for links, and one for the partner logo. If not, manually code a footer component with a three-column layout.
        
    - **Sunni Logo:** Place the Sunni logo (likely the standard version, not white since our footer background will be white or very light) on the left side. Link it to the homepage (footers often have the logo clickable as well, though not mandatory).
        
    - **Footer Links:** Add the key links in the center (or left/middle area) as a horizontal list or column:
        
        - **Collections** – link to collections page (same as header).
            
        - **Instagram** – link to the Instagram profile ([https://www.instagram.com/benedictecaramin/](https://www.instagram.com/benedictecaramin/) as given). Open this in a new tab (use `target="_blank"`).
            
        - **Contact** – mailto link to the email (same as header).
            
        - (If there are any additional relevant links or pages like Terms, FAQ, etc., they could be added here too, but the Sunni site primarily showed these three.)
            
        - Use the theme’s footer link styles (often smaller text). Ensure the links are legible against the footer background. If the theme had dark footer background by default, consider making the footer background white or light gray to align with “keep it clean” aesthetic. In Sunni’s case, the footer appears on a white background.
            
        - If the theme supports social icons, you might use an Instagram icon instead of text. However, since the original shows “INSTAGRAM” text, keeping text is fine and straightforward.
            
    - **Partner Logo (Benedicte Caramin):** On the right side of the footer, include the Benedicte Caramin logo, likely in white if it’s meant to be on a darker background. However, since we plan a white footer background, we might need the colored or black version of that logo:
        
        - The code reference is an SVG named “Benedictecaraminwhite 2.svg”, which implies the logo is originally white text. If our footer is white, a white logo won’t show – instead, use a dark version of the logo (perhaps the brand has a black or colored variant). If a dark variant is unavailable, we could invert the footer color behind that logo specifically (e.g., a colored strip or just use a black text version of the name).
            
        - This logo likely represents the partner artist’s branding, so maintain its aspect ratio and clarity. Aim for a similar visual weight as the Sunni logo on the left (in Sunni’s design, both logos are about the same width in the footer).
            
        - If the partner logo should link somewhere (perhaps the artist’s personal site or a profile), you can link it. Otherwise, it can just be a static image in the footer for branding.
            
    - **Alignment:** On desktop, these three elements (Sunni logo, links, partner logo) should ideally be aligned vertically center and distributed horizontally. On smaller screens, stack them:
        
        - For example, mobile could show Sunni logo centered on its own line, then the links (perhaps as a centered vertical list), then the partner logo below centered. Ensure there’s spacing between these when stacked.
            
        - The Sunni code likely stacks and centers everything on mobile (it mentions “Mobile: Everything is stacked and centered. Desktop: Logos and links are in a row”). We should do the same.
            
- **Footer Style Tweaks:** Make sure the footer adheres to branding:
    
    - Background should be clean (white preferably). If using white, ensure the text and logos have enough contrast (Sunni’s brown logo on white is fine, black text links fine, but a white partner logo would need adjustment as noted).
        
    - If the theme originally had a dark footer and light text, switching to white background means we must also switch link text to dark (most likely the theme will allow or we override with CSS).
        
    - Use the theme’s small text style for things like perhaps a copyright notice if needed (the Sunni example didn’t show a copyright or address, but if needed for completeness, add a small line below the links).
        
    - Verify hover states for footer links (often minimal, but ensure they don’t use some off-brand color if theme had any – set them to maybe underline or a light brown on hover).
        

After this step, the **footer** should be fully branded: Sunni’s logo reinforcing the brand identity, important links for users, and acknowledgment of the artist/partner via their logo. This mirrors the original site’s footer content while fitting into the new theme.

## 6. Final Review and Testing

- **Cross-Page Consistency:** If the theme has other pages (collections, artist, etc.), ensure that the header and footer changes reflect on those pages too (usually these are global components). The color scheme changes should also apply globally (check buttons, links on other pages for the updated colors).
    
- **Responsive Testing:** Test the homepage on various screen sizes:
    
    - On **mobile**, all sections (hero, benefits, steps, banner, cleanup, footer) should stack nicely and text should remain readable without requiring zoom. Pay attention to any sections we customized (e.g., the 4-column benefits should become a single column list on narrow screens, which we planned for; the step images should stack above text; the reservation banner content should be centered and not overflow, etc.).
        
    - On **tablet and desktop**, verify that multi-column layouts appear as intended. For example, the benefits should be 2x2 on tablet, 4x1 on desktop; the steps should alternate properly on desktop; the logos in header/footer should align, etc.
        
- **Browser Testing:** Ensure the design looks correct in major browsers (Chrome, Firefox, Safari). Pay attention to the SVG logos (they should render sharply) and email links (they should trigger email client properly).
    
- **Accessibility:** Check that:
    
    - All images have alt text (we provided alt text suggestions, ensure they’re in the code).
        
    - Headings are used semantically (we have an h1 or hero text, h2 for sections like “How it works”, etc., which it appears we did).
        
    - Link text is descriptive (avoid just “click here”; we have proper labels like “Explore the Collection”).
        
    - Color contrast is sufficient (the brown text on white is okay; white text on rust banner is okay because rust is dark; verify any light pink usage meets contrast if used).
        
- **Brand Approval:** Once implemented, compare the new site’s look side-by-side with sunni.be:
    
    - The **content** should match one-to-one (all key messages and sections present).
        
    - The **feel** should be clean and upscale, as the original, with improvements like a consistent theme typography.
        
    - Get feedback if possible from stakeholders on colors (e.g., is the brown correctly applied, do we need more/less pink, etc.).
        
- **Note for Theme-Specific Adjustments:** When the actual theme is chosen, there might be minor tweaks needed:
    
    - For example, if the theme has padding that makes the hero text too low on the image, adjust that in CSS.
        
    - Or if the theme’s section title style doesn’t match well, override it (maybe the theme uses all-caps or some flourish — decide if we keep or override to align with Sunni’s style which seems straightforward and modern).
        
    - If the theme comes with a particular component that could replace a custom section (e.g., a “call to action” banner that could be styled to serve as our reservation banner), use it to reduce custom code.
        
- **Documentation:** Keep this plan updated. Once a theme is picked and we’ve implemented according to it, **recreate this report for the chosen theme** – meaning update the instructions with theme-specific details (file names, settings, etc.) so anyone can follow it exactly for that theme.
    

By following all the steps above, we will have successfully **re-skinned the landing page with Sunni’s content and branding**, while preserving the new theme’s structure for consistency. The result will be a homepage that carries over the unique value proposition of Sunni (ocean art membership, swapping art, charitable impact) in a polished, brand-aligned design, plus a custom header and footer that make the site feel complete and professional. All these customizations set the stage for further development (like implementing the collections page, artist page, etc.) with a strong, consistent design foundation.