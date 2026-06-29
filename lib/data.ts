export type LaunchPost = {
  day: number;
  title: string;
  hook: string;
  format: "Reel" | "Founder Reel" | "Carousel" | "Static" | "Static + Stories";
  pillar: string;
  metric: string;
  cta: string;
  asset: string;
  notes: string;
};

export type ReelIdea = {
  title: string;
  hook: string;
  format: string;
  priority: string;
  cta: string;
  shotList: string;
};

export type StoryDay = {
  day: string;
  type: string;
  frames: string;
  sticker: string;
  cta: string;
  highlight: string;
};

export type Concept = {
  post: string;
  pillar: string;
  hook: string;
  cta: string;
  caution: string;
};

export type AssetNeed = {
  name: string;
  type: string;
  format: string;
  consent: string;
  notes: string;
};

export type MetricWeek = {
  week: string;
  notes: string;
};

export type Objection = {
  question: string;
  category: string;
  response: string;
  reel: boolean;
  carousel: boolean;
  faq: boolean;
};

export const notionSources = [
  { name: "Instagram Rebrand Launch Hub", role: "Strategy and operating command center", id: "b3e3db5840e84055ae0824be252502f4" },
  { name: "Content Production Board", role: "Source of truth for 30-day calendar", id: "75c49060adad4abe8a8d6fd602598e7a" },
  { name: "Reels Queue", role: "Discovery engine and repeatable short-form ideas", id: "5217a0ee1688430c81839089c5bf7d49" },
  { name: "Stories System", role: "Recurring daily trust and routing flow", id: "b66877d2d6b140ca8da29420a6c7de6f" },
  { name: "Carousel / Feed System", role: "Saveable education and objection handling", id: "ee75467aee7845cd8fdd81033af3bb9d" },
  { name: "Asset Library", role: "Footage, templates, consent, and export readiness", id: "21ac7d178aa347fcbe1c15781ede8934" },
  { name: "Metrics Review", role: "Weekly learning loop", id: "8b4fe2893bda49178ceef77ebc1ef3a5" },
  { name: "DM & Customer Intelligence Log", role: "Objections and content-response routing", id: "86deb72afb29437e8c3fa65e33ea1467" }
];

export const launchPosts: LaunchPost[] = [
  { day: 1, title: "A new chapter starts here.", hook: "A new chapter starts here.", format: "Static + Stories", pillar: "Brand / founder", metric: "Follower reactivation, comments, story replies", cta: "Stay close / reply with a question", asset: "Wordmark tile, off-white/obsidian variant", notes: "Trust + reactivation. Stories: countdown and same company, new standard." },
  { day: 2, title: "For the man who wants to look like himself again.", hook: "For the man who wants to look like himself again.", format: "Carousel", pillar: "Brand / manifesto", metric: "Saves, profile visits, story completion", cta: "Save this / start with the guide", asset: "5-slide manifesto carousel", notes: "Trust + save. Stories: manifesto broken into 4 frames." },
  { day: 3, title: "I wear what I sell.", hook: "I wear what I sell.", format: "Founder Reel", pillar: "Founder credibility", metric: "Watch time, DMs, follows", cta: "DM START with your biggest question", asset: "Vincent talking head + product macro B-roll", notes: "Trust + DM generation. Stories: BTS from filming + question box." },
  { day: 4, title: "What a hair system actually is, in plain English.", hook: "What a hair system actually is, in plain English.", format: "Reel", pillar: "Category education", metric: "Reach, watch time, saves", cta: "Save this before you compare options", asset: "Product in hand, base close-ups, on-head detail", notes: "Reach + education. Stories: poll: transplant / system / not sure." },
  { day: 5, title: "Lace Fusion VF, photographed honestly.", hook: "Lace Fusion VF, photographed honestly.", format: "Static + Stories", pillar: "Product", metric: "Product page clicks, replies", cta: "View specs / ask about fit", asset: "Hero product photo on paper card", notes: "Product trust. Stories: macro frames of lace and hairline." },
  { day: 6, title: "Will the hairline look real?", hook: "Will the hairline look real?", format: "Carousel", pillar: "Hairline realism", metric: "Saves, shares, profile visits", cta: "Save before you buy your first system", asset: "6-slide proof/education carousel", notes: "Education + saves. Stories: hairline poll + daylight test." },
  { day: 7, title: "I forgot I was wearing it.", hook: "I forgot I was wearing it.", format: "Static + Stories", pillar: "Testimonial / proof", metric: "Profile visits, replies", cta: "Read reviews / reply PROOF", asset: "Quote card with consented customer quote", notes: "Proof + trust. Anonymize unless consent is confirmed." },
  { day: 8, title: "3 things I check before a system ships.", hook: "3 things I check before a system ships.", format: "Reel", pillar: "QC / founder", metric: "Saves, DMs, watch time", cta: "DM QC for the checklist", asset: "QC checklist B-roll, hands, macro", notes: "Trust + conversion support. Stories: founder desk BTS + poll." },
  { day: 9, title: "New here? Start with these 5 decisions.", hook: "New here? Start with these 5 decisions.", format: "Carousel", pillar: "Start Here / buyer guide", metric: "DMs, saves, link clicks", cta: "DM START and I’ll point you to the right guide", asset: "7-slide decision tree carousel", notes: "Conversion + DM generation. Update pinned posts after this day." },
  { day: 10, title: "Why modern hair systems are not old-school toupees.", hook: "Why modern hair systems are not old-school toupees.", format: "Reel", pillar: "Myth education", metric: "Shares, watch time", cta: "Send this to someone who still thinks toupee", asset: "Talking head + old/new contrast without ridicule", notes: "Reach + objection handling. Stories: myth poll." },
  { day: 11, title: "Mono Pro: breathable, structured, understated.", hook: "Mono Pro: breathable, structured, understated.", format: "Static", pillar: "Product / base types", metric: "Saves, product clicks", cta: "Ask if mono fits your lifestyle", asset: "Mono base product still, macro texture", notes: "Product authority. Stories: 2-frame product spotlight." },
  { day: 12, title: "Lace, poly, mono — what they actually mean.", hook: "Lace, poly, mono — what they actually mean.", format: "Carousel", pillar: "Base types", metric: "Saves, completion", cta: "Save this before choosing a base", asset: "5-slide base guide", notes: "Education + saves. Stories: base-type quiz." },
  { day: 13, title: "Can you see the lace?", hook: "Can you see the lace?", format: "Reel", pillar: "Product macro", metric: "Replays, shares, comments", cta: "Comment HAIRLINE for the explainer", asset: "Macro lace/hairline in hand and daylight", notes: "Reach + proof. Stories: repost with naturalness slider." },
  { day: 14, title: "What ownership actually looks like.", hook: "What ownership actually looks like.", format: "Carousel", pillar: "Maintenance", metric: "Saves, DMs", cta: "Save this if you’re considering your first system", asset: "5-slide daily/weekly/monthly care guide", notes: "Education + qualification. Stories: maintenance Q&A box." },
  { day: 15, title: "Confidence is not loud.", hook: "Confidence is not loud.", format: "Static", pillar: "Brand voice", metric: "Shares, comments", cta: "Share with someone considering a quiet change", asset: "Typography hero tile", notes: "Brand authority. Stories: founder note." },
  { day: 16, title: "Am I too far gone? Here’s the honest answer.", hook: "Am I too far gone? Here’s the honest answer.", format: "Reel", pillar: "First-time buyer", metric: "DMs, watch time", cta: "DM FIT with a photo/question", asset: "Founder talking head + pattern sketches", notes: "Reach + DM generation. Stories: question sticker." },
  { day: 17, title: "80 / 100 / 130 density: what changes in real life.", hook: "80 / 100 / 130 density: what changes in real life.", format: "Carousel", pillar: "Density", metric: "Saves, replies", cta: "Save before choosing density", asset: "Comparison carousel with product/model crops", notes: "Education + saves. Stories: density poll." },
  { day: 18, title: "I stopped wearing hats.", hook: "I stopped wearing hats.", format: "Static", pillar: "Social proof", metric: "Profile visits, website clicks", cta: "Read more quiet results", asset: "Quote card, paper canvas", notes: "Proof + emotional resonance. Requires consented quote." },
  { day: 19, title: "Packing an order, with the QC notes I actually check.", hook: "Packing an order, with the QC notes I actually check.", format: "Reel", pillar: "BTS / fulfillment", metric: "Watch time, DMs", cta: "DM QC if you want the checklist", asset: "Packing table, QC card, product close-up", notes: "Trust + process proof. Stories: order desk BTS." },
  { day: 20, title: "Thin skin: why men choose it.", hook: "Thin skin: why men choose it.", format: "Static", pillar: "Product / skin base", metric: "Product clicks, replies", cta: "Ask about skin vs lace", asset: "Skin base on paper/stone surface", notes: "Product education. Stories: product comparison sticker." },
  { day: 21, title: "How to choose your first system without guessing.", hook: "How to choose your first system without guessing.", format: "Carousel", pillar: "Buyer guide", metric: "DMs, saves, link taps", cta: "DM START for the first-system path", asset: "7-slide decision framework", notes: "Conversion + saves. Stories: quiz sequence + link sticker." },
  { day: 22, title: "Hair system vs transplant: different decision, different timeline.", hook: "Hair system vs transplant: different decision, different timeline.", format: "Reel", pillar: "Comparison", metric: "Saves, shares, comments", cta: "Save if you’re comparing both", asset: "Founder talking head + simple chart overlay", notes: "Reach + education. Avoid medical advice or transplant bashing." },
  { day: 23, title: "Made for grown men.", hook: "Made for grown men.", format: "Static", pillar: "Brand authority", metric: "Follows, profile visits", cta: "Follow for straight answers", asset: "Obsidian or paper hero tile depending 9-grid balance", notes: "Trust + profile authority. Stories: founder note." },
  { day: 24, title: "The color mistakes that make systems look fake.", hook: "The color mistakes that make systems look fake.", format: "Carousel", pillar: "Color matching", metric: "Saves, DMs", cta: "Save before submitting a color match", asset: "6-slide color guide", notes: "Education + objection handling. Stories: color match question box." },
  { day: 25, title: "The hairline test: daylight, phone camera, side angle.", hook: "The hairline test: daylight, phone camera, side angle.", format: "Reel", pillar: "Proof / realism", metric: "Replays, shares, DMs", cta: "Ask for the hairline guide", asset: "3-shot test sequence, no heavy filter", notes: "Reach + proof. Stories: daylight poll + link to guide." },
  { day: 26, title: "The care products that protect the investment.", hook: "The care products that protect the investment.", format: "Static", pillar: "Care / retention", metric: "Product clicks, saves", cta: "Add care before checkout / ask what you need", asset: "Care kit hero shot", notes: "Conversion + retention. Stories: routine checklist." },
  { day: 27, title: "Ordering online should not feel like gambling.", hook: "Ordering online should not feel like gambling.", format: "Carousel", pillar: "Buying online trust", metric: "DMs, profile visits, link taps", cta: "DM ORDER with your concern", asset: "6-slide online order reassurance framework", notes: "Trust + conversion. Do not invent refund or replacement promises." },
  { day: 28, title: "5 DMs I got this week, answered honestly.", hook: "5 DMs I got this week, answered honestly.", format: "Reel", pillar: "Community Q&A", metric: "Replies, DMs, saves", cta: "Send your question for next week", asset: "Founder talking head, anonymized questions", notes: "DM generation + trust. Stories: question box for next Q&A." },
  { day: 29, title: "Same man. Different mirror.", hook: "Same man. Different mirror.", format: "Carousel", pillar: "Transformation proof", metric: "Saves, shares, website clicks", cta: "Save if you’re researching quietly", asset: "3-5 slide transformation with context/consent", notes: "Proof + saves. No manipulative insecurity language." },
  { day: 30, title: "What happens next.", hook: "What happens next.", format: "Carousel", pillar: "Launch wrap / next phase", metric: "Story replies, follows, profile visits", cta: "Turn on alerts / DM START", asset: "Paper announcement tile, 4-slide optional", notes: "Retention + expectation setting. Stories: week 5 preview + poll." }
];

export const reels: ReelIdea[] = [
  { title: "What a hair system actually is", hook: "This is not a wig. Here is what it actually is.", format: "Founder answer", priority: "P0 — Launch", cta: "Save before comparing options", shotList: "Hand holding system, base macro, hairline close-up, on-head crop" },
  { title: "I wear what I sell", hook: "I am not hiding behind the brand.", format: "Founder answer", priority: "P0 — Launch", cta: "DM START", shotList: "Founder to camera, product on desk, daylight hairline shot" },
  { title: "Hairline daylight test", hook: "A hairline should survive daylight.", format: "Founder answer", priority: "P0 — Launch", cta: "DM HAIRLINE", shotList: "Window light, phone camera angle, side angle, no-filter note" },
  { title: "3 QC checks before shipping", hook: "Before it ships, I check this.", format: "Hairline / realism test", priority: "P0 — Launch", cta: "DM QC", shotList: "Density check, color check, hairline/base check, packing shot" },
  { title: "Too far gone?", hook: "Most men ask this quietly.", format: "Founder answer", priority: "P0 — Launch", cta: "DM FIT", shotList: "Founder talking head, simple pattern overlay, recommend next step" },
  { title: "First-time buyer mistakes", hook: "Do not make these first-order mistakes.", format: "Founder answer", priority: "P0 — Launch", cta: "DM START", shotList: "Density, color, base, Start Here path" },
  { title: "The 5-minute first decision", hook: "If you are new, start here.", format: "Founder answer", priority: "P0 — Launch", cta: "DM START", shotList: "Base, density, color, lifestyle, support path" },
  { title: "Lace vs poly in 15 seconds", hook: "The base changes the experience.", format: "Product macro", priority: "P0 — Launch", cta: "Save this guide", shotList: "Lace macro, poly macro, mono macro, one-line use case each" }
];

export const stories: StoryDay[] = [
  { day: "Monday", type: "Founder / human", frames: "3-4", sticker: "Question or slider", cta: "Reply with your biggest concern", highlight: "Start Here / About" },
  { day: "Tuesday", type: "Education", frames: "3-4", sticker: "Quiz sticker", cta: "Save the guide / DM CARE", highlight: "Guides" },
  { day: "Wednesday", type: "Product", frames: "3", sticker: "Link sticker", cta: "Tap product / ask if it fits you", highlight: "Products" },
  { day: "Thursday", type: "Q&A", frames: "5-7", sticker: "Question box", cta: "Submit next question", highlight: "FAQ" },
  { day: "Friday", type: "BTS / QC", frames: "4-6", sticker: "Poll", cta: "Want the checklist? DM QC", highlight: "FAQ / About" },
  { day: "Saturday", type: "Founder / human", frames: "2-3", sticker: "Slider", cta: "Reply with weekend question", highlight: "About" },
  { day: "Sunday", type: "Week preview", frames: "3-4", sticker: "Poll + countdown", cta: "Vote for next guide", highlight: "Start Here" }
];

export const carouselConcepts: Concept[] = [
  { post: "Hairline realism — education carousel", pillar: "Hairline realism", hook: "Realism comes from base choice, density, color, fit, cut-in and maintenance.", cta: "DM HAIRLINE", caution: "Avoid absolute undetectable claims." },
  { post: "Base types — education carousel", pillar: "Base types", hook: "The base changes realism, breathability, durability and care.", cta: "DM BASE", caution: "Do not overpromise durability or comfort." },
  { post: "Color matching — education carousel", pillar: "Color matching", hook: "Color must be judged with references and real light, not guesswork.", cta: "DM COLOR", caution: "Do not promise perfect match from poor inputs." },
  { post: "Buying online trust — education carousel", pillar: "Buying online trust", hook: "The process should reduce uncertainty before purchase.", cta: "DM ORDER / Start Here", caution: "Do not invent refund or replacement promises." },
  { post: "Transplant comparison — education carousel", pillar: "Transplant comparison", hook: "A system and transplant solve different problems with different timelines and tradeoffs.", cta: "Save / compare options", caution: "No medical advice or anti-transplant claims." }
];

export const assetNeeds: AssetNeed[] = [
  { name: "Product macro footage", type: "Product macro footage", format: "Video", consent: "N/A", notes: "Macro clips of base, knots, and hairline for Reels." },
  { name: "Founder talking-head clips", type: "Founder talking-head clips", format: "Video", consent: "N/A", notes: "Vincent on-camera answers and brand POV." },
  { name: "Product photography", type: "Product photography", format: "Photo", consent: "N/A", notes: "Clean premium stills of systems and packaging." },
  { name: "Transformation assets", type: "Transformation assets", format: "Photo", consent: "Pending", notes: "Before/after visuals. Documented consent required." },
  { name: "Testimonial screenshots", type: "Testimonial screenshots", format: "Graphic", consent: "Pending", notes: "Real customer messages/reviews. Consent required." },
  { name: "Canva templates", type: "Canva templates", format: "Template", consent: "Internal only", notes: "Reusable post, carousel, and cover templates." },
  { name: "Reel covers", type: "Reel covers", format: "Graphic", consent: "N/A", notes: "Consistent premium cover frames for the grid." },
  { name: "Story backgrounds", type: "Story backgrounds", format: "Graphic", consent: "N/A", notes: "Branded backgrounds for recurring Story formats." },
  { name: "Published exports", type: "Published exports", format: "Video", consent: "N/A", notes: "Final exported assets that went live." }
];

export const metricWeeks: MetricWeek[] = [
  { week: "Week 1 — Rebrand reset", notes: "First 9 grid clarity. Founder, category, product reveal. DM START + Start Here link." },
  { week: "Week 2 — Category clarity", notes: "Base types and first product authority. Macro product footage. DM BASE / DM HAIRLINE." },
  { week: "Week 3 — Realism and maintenance", notes: "Hairline, density, ownership reality. Q&A + objection collection." },
  { week: "Week 4 — Buying online safely", notes: "Order trust and product care. Buying online + first-system guide." },
  { week: "Week 5 — First-system path", notes: "Reduce to sustainable cadence. Consultation / guide CTA." },
  { week: "Week 6 — Hairline realism", notes: "Hairline tests, macro product, hairline mistakes guide. DM HAIRLINE." },
  { week: "Week 7 — Base and lifestyle fit", notes: "Lace/poly/mono by lifestyle. DM BASE." },
  { week: "Week 8 — Maintenance confidence", notes: "Daily/weekly care routines. Care kit / support CTA." },
  { week: "Week 9 — Social proof", notes: "Testimonial and transformation context. Collect consented proof assets." },
  { week: "Week 10 — Cost and value", notes: "Cost, lifespan, two-system rotation. Product page / consultation CTA." },
  { week: "Week 11 — Founder authority", notes: "QC, buying standards, honest opinions. Batch founder scripts." },
  { week: "Week 12 — Conversion close", notes: "Start Here, product fit, proof recap. Remix best performers." },
  { week: "Week 13 — Season 2 setup", notes: "Scale top 3 Reel formats. Plan next 30 days from data." }
];

export const objections: Objection[] = [
  { question: "Will it actually look natural at the hairline?", category: "Hairline realism", response: "Hairline realism Reel + lace front explainer carousel", reel: true, carousel: true, faq: true },
  { question: "Isn’t this just a toupee or wig?", category: "Base types", response: "Myth-busting Reel: what a hair system actually is", reel: true, carousel: true, faq: true },
  { question: "Which base should I choose — lace, poly, or mono?", category: "Base types", response: "Base types comparison carousel + DM keyword BASE", reel: false, carousel: true, faq: true },
  { question: "How do I match my color?", category: "Color matching", response: "Color matching guide carousel + how-to Story", reel: false, carousel: true, faq: true },
  { question: "Am I too far gone for this?", category: "Coverage / fit", response: "Coverage and fit Reel showing a range of cases", reel: true, carousel: false, faq: true },
  { question: "Can I trust ordering this online?", category: "Ordering / trust", response: "Order trust Story sequence + QC walkthrough Reel", reel: true, carousel: false, faq: true },
  { question: "Where do I start?", category: "Getting started", response: "Start Here guide + DM keyword START flow", reel: false, carousel: false, faq: true }
];

export const palette = [
  { name: "Harbor Slate", hex: "#0F2A34", role: "Authority dark, primary action, text on light" },
  { name: "Forest Depth", hex: "#093B33", role: "Editorial trust, founder moments, quote cards" },
  { name: "Champagne Gold", hex: "#D8C08A", role: "Small premium cue only" },
  { name: "Ivory Silk", hex: "#F2EDE1", role: "Primary light surface and dark-surface text" },
  { name: "Ash Ivory", hex: "#D7D2C7", role: "Secondary light surface, borders, muted panels" },
  { name: "Crown Sapphire", hex: "#213F54", role: "Support structure, specs, lower thirds" },
  { name: "Emerald Palace", hex: "#0A5E4E", role: "Rare cameo, never CTA or repeated UI" }
];

export const designRecipes = [
  { name: "Product realism", bestFor: "Hairline close-ups, base material, product range, PDP traffic", surface: "Real image, Ivory, Ash, or Harbor/Forest scrim", avoid: "Covering hairline/base detail or heavy filters" },
  { name: "Education carousel", bestFor: "Buyer questions, base guides, maintenance, expectation-setting", surface: "Ivory and Ash alternating, one dark slide max", avoid: "Dense dark slides or paragraphs on slides" },
  { name: "Founder / trust", bestFor: "Founder covers, BTS, consultation reassurance", surface: "Founder image, Forest, Harbor, or light editorial layout", avoid: "Emerald as founder brand color or ornate gold framing" },
  { name: "Proof / testimonial", bestFor: "Approved reviews, client stories, proof cards", surface: "Ivory or Ash preferred", avoid: "Unapproved quotes or universal-result claims" },
  { name: "Dark editorial", bestFor: "Campaign statements, premium end frames", surface: "Harbor for authority, Forest for intimacy", avoid: "Multiple dark posts in a row" },
  { name: "Video overlay", bestFor: "Reels, TikTok, Stories, Shorts", surface: "Live video first, light text over safe scrim", avoid: "Text over hairline detail or lower UI conflict" }
];

export function formatCounts() {
  return launchPosts.reduce<Record<string, number>>((acc, post) => {
    acc[post.format] = (acc[post.format] || 0) + 1;
    return acc;
  }, {});
}
