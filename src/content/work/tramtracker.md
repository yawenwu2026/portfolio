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

This is a self-directed project, not client work. I've labelled it clearly because how a designer spends unpaid time says something, and because the constraint here was genuinely different from anything I met at work.

tramTRACKER was one of Melbourne's most popular public transport apps, serving thousands of daily commuters who rely on it to catch trams across the city. I was one of them, and I ran into the same usability issues that frustrated everyone else.

Redesigning something people already use every day is a different problem to designing something new. Any change I made would break a habit someone had built over years. The goal couldn't be "make it better", it had to be "make it better without making it unfamiliar".

</div>

<div class="section-tint">

## The Problem

I started from evidence rather than my own irritation, because as a daily user I couldn't trust my instincts about what was actually broken versus what was merely different from my preference.

### What the store reviews said

I collected and coded reviews from Google Play and the App Store. What users loved was narrow and specific: "Especially like the notification feature." The complaints clustered.

Tutorial messages kept interrupting people, with many noting "Annoying tips!" and being "forced through a tutorial."

The list-based stop interface didn't match how people think about a city. One review put it better than any research summary could: "A list of stop names is stupid. I don't know the tram network... I have no idea what the stop names are and which stop is near where I want to go."

Features didn't do what they promised. The tram alarm was "extremely unreliable and hardly ever accurate," and every upgrade reset user settings, punishing the most loyal users hardest.

And there was a clear unmet need: "What we need is a map. You tap on the map where you want to go and it suggests a route and when you need to leave." The app couldn't do that at all.

### What street interviews added

I interviewed six people on the street: five waiting for trams, one riding a tram while using the app. Short, contextual, in the moment.

<div class="figure-row">

The conversations revealed three distinct user types, each with different needs. One structure was serving all three, and suiting none of them.

![Photographs of street interviews with tram riders](/images/tramtracker/tram-09-street-interviews.png)
*Interviewing at the stop rather than in a room. People described what they were doing rather than what they remembered doing.*

</div>

### The structural diagnosis

I mapped the existing page flow to understand what was where and why.

![Page flow diagram of the existing tramTRACKER app](/images/tramtracker/tram-01-current-flow.png)
*The existing structure. Note the size of the "More" branch on the right, which is where anything that did not fit elsewhere had accumulated.*

Section by section:

**Nearby** listed stop names, which doesn't help you find a tram unless you already know the network. I always switched to map mode myself.

**Favourites** hid the "add to favourite" button inside a menu, and managing favourite groups and stops wasn't easy to understand.

**Routes** broke an expectation. Choosing a tram line looked like it would show real-time info, but it only listed the line's stops. Choosing a stop didn't show real-time info either.

**myTram** asked people to enter a tram vehicle number to get arrival times, which assumes the tram is already in front of you.

**More** was a dumping ground for functions with no organisation.

Two smaller problems too: the main menu button sat close enough to the advertisement banner that people tapped the ad by accident, and the app volunteered information most people didn't need, like tram vehicle style and air conditioning.

</div>

<div class="section-tint">

## Process

### Personas: three riders, not one

Rather than a single composite user, the interviews supported three distinct types.

**Frank**, 34, a software salesperson. Drives his daughter to school then takes trams to visit clients around the CBD to avoid the parking hassle. He knows the network well and needs an accurate wait time, since his professional reputation depends on arriving when he said he would. His complaint: the estimate is sometimes wrong.

**Joseph**, 23, a waiter working shifts across the week. Lives near a tram stop and takes trams everywhere, but doesn't know the network and doesn't want to learn it. He needs the app to just tell him how to get from home to a bar. Today he opens Google Maps instead, because tramTRACKER can't answer that question.

<div class="figure-row">

**Mei**, 28, visiting from overseas. She has no idea about the tram network, the stop names, or the suburb names. She wants to see Melbourne's well known places within limited time and budget. Nothing in the app was designed for someone in her position.

![Three persona cards: Frank, Joseph and Mei](/images/tramtracker/tram-02-personas.png)
*Three riders with incompatible needs. The old structure served the expert case and left the other two to Google Maps.*

</div>

Side by side, the redesign brief became obvious. The app was built for Frank. Joseph and Mei were leaving.

### Competitive analysis

I compared tramTRACKER against PTV, Transit and Commutr across downloads, ratings and feature coverage.

![Competitive analysis table comparing four transit apps](/images/tramtracker/tram-03-competitive-analysis.png)
*Feature comparison across the four apps. The gaps were as informative as the overlaps.*

Transit had the highest rating, 4.2 from 32,897 reviews, and the broadest search: contacts, addresses, stops, stations and places. PTV offered trip planning, which tramTRACKER lacked entirely.

But tramTRACKER wasn't weak everywhere. It was the only app offering both list and map modes for favourites, and it carried the most detailed stop information: tram type, air conditioning, and nearby points of interest.

The conclusion shaped the whole redesign. tramTRACKER didn't have an information problem, it had a navigation and planning problem. The depth was already there and worth protecting. What was missing was a way in for people who didn't already know the network.

### Restructuring around four features

I rebuilt the information architecture around four entry points, mapped deliberately to the three personas.

**Nearby** shows nearby routes rather than a list of stop names, so you get the tram line, the closest stop, and the waiting time. This is Frank's case, made faster.

**Favourites** keeps the existing data structure but changes the interface for managing personal content. Keeping the data model intact was deliberate: existing users had already invested in their favourites, and I didn't want to make them rebuild.

**A to B** lets people search a place, an address, or drop a map point for start and destination, with home and work saved as personal locations. This is Joseph's need for route planning, and the feature the reviews had been asking for.

**Discover** shows nearby sights in map and list view, with keyword search and one-tap transit directions. This is Mei.

![Information architecture diagram showing the four main sections](/images/tramtracker/tram-04-information-architecture.png)
*Four entry points instead of five sections plus an overflow menu. Everything that had accumulated in "More" was either given a home or removed.*

### Testing on paper first

<div class="figure-row">

I drew the main pages by hand and tested them before moving to anything higher fidelity. Four people worked through the flow and found the functions easy to understand and the information clear.

![Paper prototypes and photographs of paper testing sessions](/images/tramtracker/tram-05-lofi-prototypes.png)
*Paper testing costs an afternoon and catches structural problems that are expensive to fix once anything is drawn properly.*

</div>

<div class="figure-row">

Then mid-fidelity wireframes in Axure to work through interaction detail.

![Mid-fidelity wireframes of the four main screens](/images/tramtracker/tram-06-wireframes.png)
*Wireframes for Nearby, Favourites, A to B and Discover.*

</div>

### Validation

<div class="figure-row">

I built an interactive prototype in inVision and ran usability tests with four people.

![Photograph of a usability testing session](/images/tramtracker/tram-07-usability-testing.png)
*Testing the interactive prototype.*

</div>

The most useful comment: "The 'A to B' is easy because it looks like Google Maps." That was the intention, not a shortcut. Borrowing an established pattern for a genuinely new feature kept the learning cost close to zero, which mattered given the whole constraint of this project was not disturbing existing habits.

People also responded strongly to the map of nearby attractions: "I love the map which shows nearby attractions." It was the one feature with no equivalent in any competitor.

</div>

<div class="section-tint">

## Solution

<div class="figure-row">

The final high-fidelity design was built in Sketch, applying a clean, modern visual language while keeping what existing users would recognise: the green identity, the numeric route badges, the minute countdown.

![High fidelity designs showing Nearby, A to B and route detail screens](/images/tramtracker/tram-08-hifi-design.png)
*Route number and wait time remain the largest elements on screen, because that is what people open the app for.*

</div>

The structural change shows in what didn't change. The route badge, the countdown and the green identity are all still there. The navigation underneath them is completely different.

</div>

<div class="section-tint">

## Outcome

This was a personal project, so there's no launch, no analytics, and no adoption figure. I want to be plain about that rather than imply otherwise.

What it produced was a validated structure: four participants completed key tasks in the new flow, including the trip planning task the original app couldn't support at all, and the familiar patterns kept the learning curve low.

What it produced for me was more durable. This was the project where I learned to separate "this is badly designed" from "this is not how I would have done it", a distinction I've needed in every redesign since.

</div>

<div class="section-tint">

## Reflection

**Designing for existing users is a different discipline.** Redesigning a popular app meant constantly balancing improvement with familiarity. Users had established habits and mental models that couldn't be completely disrupted, and the best idea that doesn't break a habit often beats the objectively better one. Learning to identify what was genuinely problematic, versus merely different from my preference, was the core skill this project taught me.

**Personas earn their keep when they disagree.** Creating personas for Frank, Joseph and Mei showed me a single interface needed to serve multiple use cases. The four-feature structure came from recognising these different needs, not from trying to force everyone into one workflow.

**Borrowed patterns are a legitimate tool.** Making A to B look like Google Maps wasn't a lack of originality, it was spending the user's learning budget on what was actually new rather than the interface around it. I used the same reasoning years later deciding how much of the field service app's structure to preserve.

**Why this sits alongside commercial work.** The constraint here, improving something without disrupting established mental models, is exactly the constraint I met again at Next Technik, where technicians had years of muscle memory in an app they disliked. The reasoning transferred directly.

</div>
