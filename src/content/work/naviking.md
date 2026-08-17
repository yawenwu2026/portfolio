---
title: "NaviKing 3D"
subtitle: "Shipping before we were ready, and the eighteen months that followed"
company: "Kingwaytek"
role: "Senior UX Designer, Design Team Lead"
team: "Product Manager, R&D team, QA team, Korean 3D maps engine supplier"
platform: "Android and iOS"
timeline: "Oct 2012 - Jul 2014"
order: 3
isPersonalProject: false
coverImage: "/images/naviking/navi-cover.png"
coverAlt: "NaviKing 3D navigation view showing a 3D city model with route guidance"
thumbImage: "/images/naviking/navi-thumb.jpg"
coverPosition: "50% 50%"
summary: "Taiwan's leading car navigation app was losing revenue, so we rebuilt it on untested 3D mapping technology. We launched at 3.2 stars before the team thought it was ready, then spent six months earning our way to 4.1."
tags: ["Navigation", "Automotive", "Team Leadership", "Cross-border Collaboration"]
---
<div class="section-tint">

## Context

Kingwaytek owned NaviKing, a very popular car navigation app in Taiwan. With revenue declining from 2011, our vice president demanded a next generation product built on brand new 3D maps technology from a Korean supplier.

To differentiate the new app, our team needed to address existing shortcomings, define a desirable role for the product, and make sure it met drivers' actual needs, while collaborating with a Korean 3D maps engine supplier to build entirely new search and map experiences from scratch.

The pressure was intense. Our VP set an aggressive deadline: launch in July 2013. In reality, the project took 19 months, shipping in July 2014, as we worked through building a completely new navigation experience on untested 3D mapping technology.

</div>

<div class="section-tint">

## The Problem

Three problems ran in parallel, and the interesting part of this project is that they pulled against each other.

**Commercial.** Revenue was falling. The company needed a product that could be sold as genuinely new, not an update.

**Technical.** The 3D maps engine was unproven for our use case, built by a supplier in a different country, different language, different schedule. We were designing against a moving technical target.

**Organisational.** Every internal team wanted something different, and their requests weren't compatible.

<div class="figure-row">

I interviewed the vice president, sales, marketing, R&D and QA to understand what each expected.

![Stakeholder interview notes on sticky notes](/images/naviking/navi-01-stakeholder-interviews.png)
*Stakeholder input gathered before any design work. Laying the competing priorities side by side was the only way to make the conflicts discussable.*

</div>

The vice president wanted speed above all: "Need to be done ASAP. Launch in July 2013." That deadline drove every decision that followed, including the ones we later regretted.

Sales wanted simpler map guidance with more emphasis on text to speech, and fewer reasons for drivers to touch the screen. Their sharpest complaint: "It's not easy to find the Navigation simulation button when I want to showcase our app." A sales demo is a real use case, and nobody had designed for it.

Marketing wanted the speed limit alert enlarged, having heard it was too small.

R&D wanted a heads up display, an improved 2D map browsing interface, QR code destination setup, and Android 4.0's native sharing. They wanted to exploit the new technology while also fixing known issues in the old interface.

Reconciling these was a design problem before it was an interface problem.

</div>

<div class="section-tint">

## Process

### Understanding drivers

<div class="figure-row">

I collected user feedback from store reviews, complaint emails and phone support records, channels most teams treat separately.

![User feedback analysis with categorised sticky notes](/images/naviking/navi-02-user-feedback.png)
*Feedback from store reviews, complaint emails and phone records, coded into themes.*

</div>

Users wanted cloud sync: "Hope My Favourite of NaviKing can be synced with My Places of Google Maps... Even if I use an iPhone later, I don't need to reset those places again." They wanted map data stored on an external SD card, and more control over the interface, including choosing the main menu colour.

Interaction complaints were sharper. Returning to a previous page reset the scroll position to the top every time, forcing people to scroll again. And voice control took so long to start listening that ambient noise got captured: "It easily puts some noise in and greatly reduces the accuracy rate."

I designed the interview questions and, with two teammates, interviewed 7 drivers with varying navigation experience and driving habits, documenting profiles, driving behaviour, hardware and specific pain points.

![User research table documenting seven interviewed drivers](/images/naviking/navi-03-user-research.png)
*Seven drivers, deliberately spanning heavy dependence on navigation through to occasional use.*

### From goals to requirements

I built a requirement analysis that listed each user goal alongside the reason behind it, the observed behaviour and the resulting feeling, then derived the benefit they valued and the app functions that would deliver it.

![User requirement analysis spreadsheet](/images/naviking/navi-04-requirement-analysis.png)
*Goals, reasons, behaviours and feelings on the left, derived requirements in the yellow columns on the right.*

One example shows how it worked. When drivers wanted to "set a destination efficiently," what they valued was having multiple input methods, because typing an address manually is slow and error prone while driving. That single insight produced four separate requirements: voice control, favourite locations, recent destinations, and QR code scanning.

The reason this document mattered more than usual was the supplier relationship. When a requirement travels to another country to be built by people who can't ask you a quick question, it has to carry its own justification.

### Architecting a complex product

A car navigation app is a large system. I built the information architecture in Excel, documenting categories, main pages, definitions, required APIs, and implementation notes.

![Information architecture spreadsheet with categories, functions and API notes](/images/naviking/navi-05-information-architecture.png)
*Excel was the right tool because this document had to serve the Korean supplier and internal R&D as much as it served design.*

Excel is not a glamorous design tool. It was the correct one, because this artefact needed to be readable by engineers in two organisations and precise enough to specify API behaviour.

### Prototyping against a moving target

<div class="figure-row">

I built the prototype in Axure, and it became our final deliverable to R&D rather than a step towards one.

![Axure prototype documentation with annotated navigation screens](/images/naviking/navi-06-prototyping.png)
*The prototype carried revision annotations throughout development. It was a living specification, not a presentation artefact.*

</div>

It had to demonstrate behaviour, not screens: how the map transitioned between 2D and 3D, how a voice command interrupted active navigation, how route alternatives were presented, and how a driver interacted with the interface while the vehicle was moving.

It was revised many times through development as we discovered what the 3D engine could and could not do. Every technical constraint we hit was a design decision reopened.

### Instrumenting before launch

I set up page naming and event tracking for Google Analytics before release, so we would know which features were actually used, where people got stuck, and what to prioritise afterwards.

![Google Analytics tracking plan with page hierarchy and event definitions](/images/naviking/navi-07-analytics.png)
*The tracking plan, defined before launch rather than after. This turned out to matter more than we expected.*

</div>

<div class="section-tint">

## Solution

### Smart search with a custom keyboard

<div class="figure-row">

Search used a purpose built keyboard offering place and address suggestions as you type, supporting both Chinese Zhuyin and English input and switching between them automatically. Typing "COST" immediately suggested Costco locations across Taiwan.

![Smart search screens showing the Zhuyin keyboard, English keyboard and a place detail page](/images/naviking/navi-08-smart-search.png)
*Building a custom keyboard rather than using the system one was the only way to make bilingual destination entry fast enough to do at a red light.*

</div>

### Multiple route suggestions

<div class="figure-row">

Route options presented distance, time and cost for each alternative. Drivers could see current traffic speed colour coded along the route, and road works or congestion ahead.

![Route planning screens showing three route alternatives with traffic conditions](/images/naviking/navi-09-route-suggestions.png)
*Cost mattered as much as time in Taiwan, where toll roads make the cheapest route and the fastest route genuinely different decisions.*

</div>

### 3D navigation view

<div class="figure-row">

The engine rendered 3D objects matching what drivers actually saw through the windscreen, which made guidance easier to follow at complex junctions. The left panel carried upcoming road names and current speed, colour coded green, yellow and red.

![Three 3D navigation views showing daytime, elevated highway and night rendering](/images/naviking/navi-10-3d-navigation.png)
*Matching the rendered scene to the real one is the entire argument for 3D navigation. At a five way interchange, a driver should not have to translate an abstraction.*

</div>

</div>

<div class="section-tint">

## Outcome

After 19 months of development, NaviKing 3D released on 27 July 2014, even though our team didn't feel the product was mature enough to launch. VP-driven deadline pressure forced us to ship with known issues in the 3D rendering.

Initial reviews reflected that: 3D rendering was slow on older devices, buildings looked distorted at certain angles, and battery consumption was significantly higher than our previous 2D product.

Rather than defend our decisions, we listened. User reviews became our product roadmap: we prioritised the most mentioned pain points, worked with our Korean supplier to optimise 3D rendering performance, added an easy 2D/3D toggle, and cut battery consumption. Six months of focused iteration paid off: users who'd complained about performance began praising how 3D landmarks helped them navigate complex highway interchanges, exactly the feature we'd envisioned from the start.

**3.2★ → 4.1★.** App store rating, launch to six months post-launch iteration.

</div>

<div class="section-tint">

## Reflection

**A deadline is a design constraint, and it should be treated as one.** We accepted July as fixed and negotiated everything else around it. In hindsight the more useful conversation would have been about what we could credibly ship by July, rather than compressing the full scope into the available time and hoping.

**Analytics before launch changed what happened after it.** Setting up tracking beforehand meant that when the criticism arrived we could tell which complaints reflected widespread behaviour and which were vocal minorities. That is what made six months of iteration efficient rather than reactive. It is the reason I now treat instrumentation as a precondition rather than a follow up task.

**Specifications carry weight across distance.** Working with a supplier in another country taught me that a requirement has to travel with its reasoning attached. When someone cannot ask you a quick question, ambiguity does not surface as a question. It surfaces as a built feature that does the wrong thing.

**Leading a team is mostly translation.** Between the vice president's deadline and the R&D team's feature ambitions, between user needs and API constraints, between our expectations and the supplier's. The design deliverables mattered, but the work that actually moved the project was making those groups legible to each other.

**A bad launch is recoverable. A defensive response to one is not.** The rating recovery came from taking the criticism literally. That instinct, treating negative feedback as the most efficient research available, is the single most useful habit I took from this project.

</div>
