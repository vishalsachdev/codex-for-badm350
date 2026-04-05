# Alex's Notes (Previous PM)

*Last updated: who knows. Alex left on Nov 15 with basically no handoff. These are the notes we pulled from their Notion before the account was deactivated.*

---

## Retention Ideas (brainstorm)

- coffee personality matching?? Maya keeps talking about this. something like Myers-Briggs but for coffee drinkers. could be huge or could be gimmicky idk
- maybe a taste profile quiz during onboarding? Driftaway does something like this but theirs is basic. we could go deeper
  - roast preference (light/med/dark)
  - flavor notes they like (fruity, chocolatey, nutty, floral)
  - brewing method matters A LOT for grind + bean selection
  - how adventurous are they? (stick with faves vs. explore new origins)
  - caffeine sensitivity? decaf mix?
  - TODO: talk to Sam about whether the rec engine can even handle this
  - TODO: look at what data we already have from
- IDEA: what if each subscriber had a "coffee journey" — like a progression? month 1 = comfort zone, month 2 = gentle stretch, month 3 = adventure pick...
  - this could solve the "gets boring" problem AND the "too random" problem
  - need to think about inventory implications though
  - Jordan said this would be "amazing for content" — each month's bag comes with a story
  - never followed up on this

## A/B Test: Welcome Email Sequence

Started Aug 12, ended... actually did we ever end this?

**Variant A** (control): Standard welcome → first bag shipped → check-in after delivery
**Variant B**: Welcome → taste preference survey (3 questions) → "here's why we picked your first bag" email → delivery → "how'd we do?" feedback loop

Results (partial, pulled Sep 2):
- Variant B had 23% higher email engagement
- Variant B subscribers rated first bag satisfaction 4.7 vs 4.5
- Month 2 retention: B was 78% vs A at 71%
- Month 3 retention: ??? never pulled this data
- Sample size: ~400 per variant. Probably not statistically significant but directional

**NOTE TO SELF**: This is actually really promising?? The taste survey thing works. Why did we stop this test? I think it was because Sam said the survey responses weren't connected to the recommendation engine so it was basically theater — we asked people what they liked but then sent them the same semi-random bag anyway. That's... bad.

## Slack Copies (things I wanted to remember)

**Maya in #product, Sep 3:**
> "We have 47 roaster partners and 200+ SKUs and we're basically throwing darts at a board to decide what goes in each box. This is insane. We need a matching system."

**Sam in #engineering, Sep 8:**
> "The rec engine was a weekend hack I built in 2022. It filters by roast level preference and excludes anything they've already received. That's literally it. Building real personalization would be a 2-3 month project minimum and I'm already underwater with the Shopify migration."

**Jordan in #marketing, Sep 15:**
> "Just got off a call with an influencer who said our unboxing experience is 'fine but forgettable.' She said Trade Coffee sends a card explaining why that specific coffee was matched to your taste profile. We need something like that."

**Support team in #cx, Sep 20:**
> "Another cancellation where the customer said 'I kept getting dark roasts but I told you I like light roasts.' Checked their account — they selected 'light' during signup but the system sent them whatever we had excess inventory of. This is a trust issue now."

## Churn Analysis (half-done)

Started looking at churn by cohort. Some patterns:

- Subscribers who sign up through paid ads churn ~40% faster than organic
- Gift subscription recipients almost never convert to paid (< 5% conversion)
- The #1 month for churn is month 3 (not month 1 or 2 — interesting)
- Subscribers who contact support at least once actually retain BETTER (maybe because we fix their issue? or maybe engaged users are just more likely to reach out?)
- No correlation between subscription tier and churn rate — Connoisseur churns just as fast as Explorer
- Haven't looked at geographic patterns yet
- Haven't segmented by roast preference yet

## TODO (never done)

- [ ] Build a proper taste profile quiz (need design + engineering)
- [ ] Connect quiz results to recommendation engine (Sam says "not trivial")
- [ ] Analyze month 3 churn — what happens between month 2 and 3?
- [ ] Look at whether customers who receive the same origin/roaster twice churn faster
- [ ] Set up cohort analysis dashboard (data analyst just started, hasn't gotten to this)
- [ ] Talk to Maya about the "coffee personality" framework — she has a napkin sketch somewhere
- [ ] Competitor deep dive on Trade Coffee's matching algorithm
- [ ] Calculate impact of inventory-driven shipping vs. preference-driven shipping on margins
- [ ] Figure out why the quiz attempt campaign got abandoned (see old-campaigns folder)

## Random Thoughts

The recommendation engine is basically random and everyone knows it but nobody wants to admit it because Sam built it and Sam is overwhelmed and also Sam is a founder.

I think the answer is some kind of taste profiling system that:
1. Captures preferences at signup (quiz)
2. Learns from feedback over time (ratings, implicit signals)
3. Actually drives what goes in the box
4. Tells the customer WHY they're getting what they're getting (transparency)

But this is a significant product + engineering effort and I'm not sure the company has the bandwidth or runway to

---

*[notes end here]*
