---
title: Chatway Integration Guide
---

# Chatway Integration Guide

A complete guide for integrating Chatway chat widgets into Next.js applications.

## Overview

This guide documents the proper way to integrate Chatway chat widgets into Next.js sites, including common pitfalls and the correct implementation pattern.

## ✅ Working Implementation

### Step 1: Create `pages/_document.tsx`

Create or modify your `pages/_document.tsx` file with this exact code:

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          id="chatway"
          async
          src="https://cdn.chatway.app/widget.js?id=6qxBzuIMeu2h"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

### Step 2: Clear Cache (If Needed)

If you experience refresh loops or build issues:

```bash
rm -rf .next
npm run dev
```

## Key Learning Points

### ✅ Correct Approaches
- **Use regular `<script>` tags in `_document.tsx`** - NOT the Next.js `Script` component
- **Place in `<Head>` section** of the document, not in components or theme configs  
- **Clear `.next` cache** if you get stuck in refresh loops
- **Widget loads site-wide** with this approach

### ❌ Common Mistakes
- **Don't use** `Script` component in `_document.tsx` (causes issues)
- **Don't put scripts** in theme configs or other components for global widgets
- **Don't use** `next/head` for external widget scripts

## Implementation Prompt

Use this prompt for implementing Chatway on other Next.js sites:

---

**Chatway Integration Prompt**

I need to integrate a Chatway chat widget into my Next.js site. The widget should appear on all pages with a preview bubble and welcome message.

**Requirements:**
- Use Chatway widget ID: `6qxBzuIMeu2h` (or replace with your own)
- Follow Next.js best practices (no console warnings)
- Load on all pages
- Should not cause refresh loops

**Implementation:**

Create a `pages/_document.tsx` file with this exact code:

```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          id="chatway"
          async
          src="https://cdn.chatway.app/widget.js?id=6qxBzuIMeu2h"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

**Important Notes:**
- Use regular `<script>` tag in `_document.tsx` Head section (NOT Next.js Script component)
- If you get refresh loops, run: `rm -rf .next` then restart dev server
- The widget will appear site-wide with the configured preview message
- Perfect for support contexts - consider customizing the preview message

**Troubleshooting:**
- If you see Next.js script warnings, make sure you're using regular `<script>` not `Script` component
- Clear `.next` cache if the page keeps refreshing
- Widget should load asynchronously without blocking page rendering

---

## Troubleshooting

### Common Issues and Solutions

**Issue: "Do not add script tags using next/head" warning**
- **Solution**: Make sure you're using regular `<script>` in `_document.tsx`, not `Script` component

**Issue: Page keeps refreshing in development**
- **Solution**: Clear build cache with `rm -rf .next` and restart dev server

**Issue: Widget not appearing**
- **Solution**: Check that widget ID is correct and Chatway account is properly configured

**Issue: Widget appears but preview bubble doesn't show**
- **Solution**: Check Chatway dashboard settings for preview bubble configuration

## Widget Configuration

In your Chatway dashboard, you can configure:
- Preview bubble text and timing
- Agent availability status
- Welcome messages
- Widget positioning and styling
- Response templates

## Related Projects

This integration pattern was successfully implemented on:
- [Energy Flow Documentation](https://energy-flow-eight.vercel.app)
- [No Bad Parts Collective](https://www.nobadpartscollective.com/)

## Contributing

Found an issue or improvement? Please update this guide or reach out via the chat widget! 🎉 