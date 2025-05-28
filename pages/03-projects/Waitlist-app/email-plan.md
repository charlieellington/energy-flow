# E-mail Deliverability Upgrade – Task 10 Series

_Integrate Re-Send to improve OTP and transactional e-mails while keeping the "one-click deploy" promise._

---

## 0 · Decisions (locked-in)

| Decision | Rationale |
|----------|-----------|
| **Fallback to `resend.dev` sandbox** on first deploy | Ensures buyers see a working product in &lt;60&nbsp;s. They can add a custom domain &amp; DKIM later for branding. |
| **No separate double-opt-in flow** | The existing Supabase magic-link already proves address ownership. We'll add a short GDPR notice inside the welcome e-mail footer. |

---

## 1 · Provider Set-up (Task 10a)
1. Sign-up at [resend.com](https://resend.com) → free tier.  
2. _Optional_ — Add a custom sender domain & DKIM. If skipped, Re-Send will fall back to its shared `resend.dev`.  
3. Grab:  
   • SMTP creds (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)  
   • **API key** for transactional e-mails.

> **DX tip** Even if the user skips domain verification, OTP / magic-link e-mails still work.

---

## 2 · ENV Vars & Docs (Task 10b)
Add to `.env.example`:

```bash
# — Re-Send
RESEND_API_KEY=
RESEND_FROM_EMAIL=no-reply@resend.dev # or hello@yourdomain.com
```

Update README quick-start → new "Step 3 – Add Re-Send keys".

---

## 3 · Supabase SMTP Wiring (Task 10c)
Open Supabase → Auth → Settings → **SMTP** and paste Re-Send creds. Done — all OTP / magic-link e-mails are now delivered by Re-Send.

*README* footnote: buyers can edit subject/body in **Auth → Templates**.

---

## 4 · Welcome E-mail (Task 10d)
1. Create `lib/resend.ts` that instantiates the SDK.  
2. Extend the wait-list Server Action to:

```ts
await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL!,
  to: email,
  subject: "You're on the list ��",
  html: render(<WelcomeEmail name={name} />)
});
```

3. `components/emails/WelcomeEmail.tsx` – Tailwind + shadcn/ui template.  
4. GDPR footer: "You received this e-mail because you explicitly joined the **{{project-name}}** wait-list and verified your address via magic-link."

---

## 5 · DX & Packaging (Task 10e)
* Update README & `content.json`.  
* Add Playwright smoke-test `/api/test-email` (skipped if `RESEND_API_KEY` absent).  
* Warn in console if the API key is missing so devs notice locally.

---

## 6 · QA & Fallback (Task 10f)
1. Test delivery to Gmail, Outlook & Hey.  
2. If `RESEND_API_KEY` undefined → `resend.emails.send` becomes a no-op but returns `{ id: "dev-null" }` so build passes.  
3. Add ☑️ list to scratchpad once each sub-task ships.

---

## Timeline Proposal

| Day | Deliverable |
|-----|-------------|
| **D0 PM** | Tasks 10a–10c complete → staging deploy |
| **D1 AM** | Welcome e-mail, GDPR footer (10d) |
| **D1 PM** | README + smoke-test (10e) |
| **D2** | Inbox QA + polish (10f) | 