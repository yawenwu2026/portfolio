---
title: "tramTRACKER Redesign"
subtitle: "Improving a transit app people already knew by heart"
company: "Personal project"
role: "UX/UI Designer, User Researcher"
team: "Solo"
platform: "Android"
timeline: "Nov 2016 - Jan 2017"
order: 2
isPersonalProject: false
coverImage: "/images/tramtracker/tram-cover.png"
coverAlt: "The tramTRACKER app displayed on a phone showing tram arrival times"
thumbImage: "/images/tramtracker/tram-thumb.png"
coverPosition: "50% 50%"
summary: "Melbourne's most used tram app had a loyal audience and a two star problem. I redesigned it around three distinct rider types without breaking the habits its regulars depended on."
tags: ["Transit", "Mobile", "Information Architecture", "Personal Project"]
---
<div class="section-tint">

## Context

tramTRACKER was one of Melbourne's most popular public transport apps, serving thousands of daily commuters who rely on it to catch trams across the city. As a frequent user myself, I encountered several usability issues that frustrated my daily commute.

Redesigning such a widely used app presented a unique challenge: any changes needed to preserve the features users already loved while addressing the pain points. The app had a loyal user base who knew exactly where everything was. My challenge was to improve the experience without disrupting their established mental models and daily habits.

</div>

<div class="section-tint">

## The Problem

I started from evidence rather than my own irritation, because as a daily user I couldn't trust my instincts about what was actually broken versus what was merely different from my preference.

### Store reviews and street interviews

I collected reviews from Google Play and the App Store, then interviewed six people on the street, five waiting for trams and one riding one, to learn daily usage patterns and what information people valued most. Three distinct user types emerged, each with different needs.

"A list of stop names is stupid. I don't know the tram network, I don't know which suburb is after which." (App Store review)

"What we need is a map. You tap on the map where you want to go and it suggests a route and when you need to leave." (App Store review)

"Especially like the notification feature." (App Store review)

"[The tram alarm is] extremely unreliable and hardly ever accurate," and every upgrade reset user settings. (App Store review)

<div class="figure-row">

Mapping the existing page flow to see how users navigated the app and where friction lived.

![Photographs of street interviews with tram riders](/images/tramtracker/tram-09-street-interviews.png)
*Interviewing at the stop rather than in a room. People described what they were doing rather than what they remembered doing.*

</div>

### Defining the problems

I mapped the existing page flow to understand what was where and why.

![Page flow diagram of the existing tramTRACKER app](/images/tramtracker/tram-01-current-flow.png)
*The existing structure. Note the size of the "More" branch on the right, which is where anything that did not fit elsewhere had accumulated.*

**Nearby and Favourites.** A long list of stop names didn't help users find their tram, most switched to map mode instead. "Add to favourite" was hidden in a menu, and managing favourite groups wasn't easy to understand.

**Routes and myTram.** Choosing a tram line showed only a stop list, not real-time info. myTram asked users to enter a vehicle number to check arrival time, a strange, unintuitive ask.

**More, and miscellaneous friction.** Functions were scattered with no clear organisation. The mandatory tutorial annoyed users, the main menu sat too close to the ad banner (leading to accidental taps), and the app surfaced information, like tram vehicle style and A/C, that users didn't actually need.

</div>

<div class="section-tint">

## Process

### Personas: three riders, not one

Rather than a single composite user, the interviews supported three distinct types.

**Frank**, 34, a software salesperson. Drives his daughter to school, then visits clients across the CBD by tram to avoid parking. Familiar with the tram network. Needs accurate, reliable wait times, since his professional image depends on being on time.

**Joseph**, 23, a waiter. Works rotating shifts at a café. His apartment is close to a tram stop, so he takes trams everywhere on his days off. Needs a simple way to find the route from home to wherever he's headed.

<div class="figure-row">

**Mei**, 28, a boutique assistant visiting from China. Uses Google Maps to get around when travelling overseas, and is comfortable with the main points of a conversation in English. Needs easy, immediate access to Melbourne's sights within limited time and budget.

![Three persona cards: Frank, Joseph and Mei](/images/tramtracker/tram-02-personas.png)
*Three riders with incompatible needs. The old structure served the expert case and left the other two to Google Maps.*

</div>

### Competitive analysis

I analysed PTV, Transit and Commutr against tramTRACKER.

![Competitive analysis table comparing four transit apps](/images/tramtracker/tram-03-competitive-analysis.png)
*Feature comparison across the four apps. The gaps were as informative as the overlaps.*

Transit had the highest rating (4.2, 32,897 ratings) with comprehensive search. PTV offered trip planning that tramTRACKER lacked. But tramTRACKER was the only app with both list and map favourites, and the most detailed stop information. The analysis pointed to one conclusion: strong information depth, but weak navigation structure and no trip planning.

### Four main features

Based on store reviews, user stories and the competitive analysis, I redesigned the flow around four features.

**Nearby** shows nearby routes to help users find the tram line, closest stop and, most importantly, the waiting time. Addresses commuters like Frank who need quick, accurate information.

**Favourites** keeps the existing data structure but reworks the interface to make managing personal content easier, preserving what existing users love while improving usability.

**A to B** provides directions for transit or walking, searchable by place, address or map point, with saved home and work locations, directly addressing Joseph's need for route planning.

**Discover** shows nearby sightseeing in map and list views, searchable by keyword with one click transit directions, built for users like Mei who don't know Melbourne yet.

![Information architecture diagram showing the four main sections](/images/tramtracker/tram-04-information-architecture.png)
*Four entry points instead of five sections plus an overflow menu. Everything that had accumulated in "More" was either given a home or removed.*

The launch page gives immediate access to all four features, balancing regular commuters who want familiar stops fast, occasional users planning routes, and tourists who need discovery.

### Testing on paper first

<div class="figure-row">

Main pages were sketched on paper and tested to check whether the new flow made sense. 4 out of 4 users found the functions easy to understand and the information clear.

![Paper prototypes and photographs of paper testing sessions](/images/tramtracker/tram-05-lofi-prototypes.png)
*Paper testing costs an afternoon and catches structural problems that are expensive to fix once anything is drawn properly.*

</div>

<div class="figure-row">

Mid-fidelity wireframes built in Axure RP to work through interaction details ahead of stakeholder feedback.

![Mid-fidelity wireframes of the four main screens](/images/tramtracker/tram-06-wireframes.png)
*Wireframes for Nearby, Favourites, A to B and Discover.*

</div>

### Validation

<div class="figure-row">

An interactive InVision prototype was tested with four people to validate the design decisions.

![Photograph of a usability testing session](/images/tramtracker/tram-07-usability-testing.png)
*Testing the interactive prototype.*

</div>

"The 'A to B' is easy because it looks like Google Maps." The familiar patterns borrowed from Google Maps reduced the learning curve while keeping tramTRACKER-specific features front and centre.

"I love the map which shows nearby attractions." It was the one feature with no equivalent in any competitor.

</div>

<div class="section-tint">

## Solution

<div class="figure-row">

Final mockups built in Sketch, applying a clean, modern visual language while keeping recognisable elements from the original app: the green identity, the numeric route badges, the minute countdown.

![High fidelity designs showing Nearby, A to B and route detail screens](/images/tramtracker/tram-08-hifi-design.png)
*Route number and wait time remain the largest elements on screen, because that is what people open the app for.*

</div>

</div>

<div class="section-tint">

## Reflection

**Designing for existing users is a different discipline.** Redesigning a popular app meant constantly balancing improvement with familiarity. Users had established habits and mental models that couldn't be completely disrupted, and the best idea that doesn't break a habit often beats the objectively better one. Learning to identify what was genuinely problematic, versus merely different from my preference, was the core skill this project taught me.

**Personas earn their keep when they disagree.** Creating personas for Frank, Joseph and Mei showed me a single interface needed to serve multiple use cases. The four-feature structure came from recognising these different needs, not from trying to force everyone into one workflow.

</div>
