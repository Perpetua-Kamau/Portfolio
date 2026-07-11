# Your Name — Excel &amp; Data Expert Portfolio

A single-page portfolio built with plain HTML/CSS/JS — no build step, no
framework, which makes it the simplest possible fit for GitHub Pages.

## What's here

```
index.html   the whole page: hero, expertise, case studies, about, contact
style.css    all styling (design tokens are at the top of the file)
script.js    footer year, banner dismiss, and the ledger count-up animation
resume.pdf   ← add your own resume here (referenced by two download links)
```

## Publishing to GitHub Pages

1. Create a new repository on GitHub — for a **user site** name it exactly
   `portfolio`.
2. Upload these files to the repository root
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**,
   pick `main` and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site within a minute or two at:
   - `https://yourusername.github.io` (user site), or
   - `https://yourusername.github.io/repo-name` (project site)

Any time you push a new commit to `main`, the live site updates automatically.

## Before you publish

Search the files for these and swap in your own details (line numbers below
are for `index.html` as it ships — they'll drift as you edit, so Ctrl+F the
text itself if a line looks off):

- `Your Name` → her name — appears in 4 places: line 6 (title tag), line 22
  (nav), line 45 (hero paragraph), line 228 (footer)
- `you@example.com` → her email — line 218
- `yourusername` → her LinkedIn/Upwork handles — lines 220–221
- The three placeholder `<article class="project">` blocks → her real case
  studies — they start at lines 119, 142, and 158
- The five `.expertise__card` blocks → her real strengths, if different —
  they start at lines 80, 85, 90, 95, and 100
- `resume.pdf` → drop her actual résumé PDF into this folder with that
  filename (see the **Exact lines to edit for résumé and case study links**
  section below if you want to rename it or link elsewhere instead)
- The "about" paragraphs → line 182 onward, and the three `.fact` stat cards
  → lines 198, 202, and 206


## Editing your page with no software installed

If you're a student and just want to swap in your own name, links, and case
studies — you don't need git or a code editor. Everything can be done in
the browser, directly on github.com:

1. Open your repository on github.com and click on **`index.html`**.
2. Click the **pencil icon** (top right of the file view) to edit it.
3. Use your browser's find tool (Ctrl+F on Windows, Cmd+F on Mac) to jump to
   things like `Your Name`, `you@example.com`, or `yourusername`, and type
   over them with your own details. Do the same for the case-study text.
4. Scroll to the bottom of the page. Under "Commit changes," leave the
   default option ("Commit directly to the main branch") selected and click
   **Commit changes**.
5. Wait about a minute, then refresh your live site — your edits will be there.

Repeat the same steps for **`style.css`** only if you want to change colors
or fonts — most students will only ever need to touch `index.html`.

**To add your résumé PDF:** on your repo's main page, click **Add file →
Upload files**, drag in your résumé, name it `resume.pdf`, and commit. The
two "Download résumé" buttons already point to that filename.

## Exact lines to edit for résumé and case study links

Each of these links also has a matching comment right above it in
`index.html` explaining what to do — search for `RESUME LINK` or `CASE
STUDY` with Ctrl+F if these line numbers have shifted after other edits.

| What | Line in `index.html` | What to do |
|---|---|---|
| Résumé link (nav bar) | 33 | **Upload:** name your PDF `resume.pdf` and upload it via *Add file → Upload files* — no editing needed here at all. **Or link elsewhere:** replace `resume.pdf` with a full URL, e.g. a Google Drive share link. |
| Résumé link (about section) | 194 | Same file as above — if you changed line 33, change this one to match. |
| Case study 1 — "Case study" link | 136 | Replace `#` with a URL to a write-up: a blog post, a Google Doc (set sharing to "anyone with the link"), or another page. |
| Case study 1 — "Download workbook" link | 137 | **Upload:** add your `.xlsx` file to the repo (*Add file → Upload files*, maybe into a `projects/` folder), then set this to `href="projects/your-file.xlsx"`. **Or link elsewhere:** paste a Google Drive/OneDrive share link instead. |
| Case study 2 — both links | 152–153 | Same two options as above. |
| Case study 3 — both links | 168–169 | Same two options as above (this one is labeled "Template" instead of "Download workbook"). |

A quick way to upload a file and get its exact path: after uploading via
*Add file → Upload files*, click on the file in your repo, then click **Raw**
— that page's URL is a link you can paste directly into any `href="..."` if
you'd rather link straight to the raw file than a relative path.

## Setting this up for my students

The easiest way to hand this to a group of students:

1. In **your** copy of this repo, go to **Settings → General → Template
   repository** and check the box. This turns "Code" into "Use this
   template" for anyone who visits the repo.
2. Share the repo link with your students. Each student clicks **Use this
   template → Create a new repository**, names it `their-username.github.io`
   under their own account, and gets an independent copy — edits one
   student makes won't affect another's.
3. Each student then follows the **Editing your page** section above, and
   turns on Pages themselves following **Publishing to GitHub Pages** (step
   3–4), using their own repository's Settings.

If you'd rather not use the template-repository feature, sharing this ZIP
and having each student create their own repo and upload the files (via
**Add file → Upload files**, no git required) works just as well.

## Notes on the design

- Palette is grounded in the ledger: warm ivory paper, deep umber ink, an
  emerald "verified" green, and a brass gold used for numerals and rules —
  the accountant's-stamp feel, deliberately not a coder's dark terminal.
- Fonts are Spectral (an editorial serif, used in italic for numerals and
  accents) paired with Work Sans for body copy — loaded via Google Fonts,
  no local files to manage.
- The hero's ledger card — a total counting up, then confirmed with a
  hand-drawn checkmark — is the one signature visual element. Edit the
  `target` value in `script.js` if you want a different number, or the
  markup in `.ledger` in `index.html` for different labels.
- There's a dismissable "make this yours" banner at the top of the page —
  click the × once everything's customized, or delete the `#howto-banner`
  div from `index.html`.
- All animation respects `prefers-reduced-motion`, and the nav/buttons are
  keyboard-focusable by default.
