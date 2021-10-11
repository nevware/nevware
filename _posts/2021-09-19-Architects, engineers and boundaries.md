---
title: 'Software architects and engineers - where do you draw the boundary?'
date: 2021-08-22T15:44:43+00:00
author: "Neville Kuyt"
layout: single

header:
  image: /assets/images/architects.jpg
  teaser: /assets/images/architects.jpg
  
excerpt:
    What's the role of an architect in a modern software development project?
    Here's what I've learnt...

---

I was talking to a friend about how software teams are structured, and specifically what the role is of software architects. It's a fruitful topic of conversation - because it helps expose assumptions about teams, processes, and technologies. My friend has recently moved from the title of "software architect" to "technical lead", as well as change jobs.

So, here's what I've seen in the ways organizations use "architect".

## Architects as super coders.

The simplest case is that the organization runs out of career track for software engineers, and gives them a cooler-sounding title once they've got to the end of that track. In this case, software architects are generally exceptional coders, with deep understanding of the business - but their day job generally remains mostly coding. While this is inelegant, it's perfectly valid - and I've seen it work well as a way of retaining engineers. Of course, the downside is that there is no deliberate attention to the other work an architect might do, or the skills required to do that work.

## Architects as design authority

The other case is that the software architect takes every major decision on a project - they draw UML diagrams, and the engineers' role is merely to turn those diagrams into code. One client who operated this way told me they got great productivity from relatively junior developers this way, and that it was a great way to ensure a consistent approach across a complex application. The architect was incredibly smart, but became a bottleneck fairly quickly; they then extended the architecture team, with each architect owning a microservice. That worked well - but once the team exceeded 5 or 6 micro services (and therefore architects), the coordination between the architects became problematic. 

More worryingly, it became obvious that while the engineers had been efficient in turning the designs into working code, that code was not always connected with actual use cases - this was an agile team, with regular prioritization and feature pruning, and the architects were often unable to keep up with those changes, so the team built what was designed - but not always what was agreed with the business.

### Boundaries of design

With architects as the design authority, the obvious question is "where does design end? How much detail should architects get into?". 

What I've seen work well is architects owning the structure of the major subsystems and interactions between those subsystems. A "subsystem" in this model might equate to a microservice, or a "bounded context" in DDD. Agreeing how to carve the overall solution up into subsystems, how those subsystems should interact, and what the major architectural choices for those subsystems are (development language/framework, deployment architecture, build-and-deploy strategy etc.) definitely requires architectural thinking.

However, within those subsystems, I'd want the delivery team to be the primary decision makers, figuring out detailed implementation decisions as they go. Architects can advise and offer a governance structure - but they quickly become bottlenecks, and - more importantly - deprive the delivery team of agency. The delivery team should own the delivery and implementation choices - this drives up quality, improves maintainability, and 

## Architects as the owner of risk

I used to run an architecture team at a digital agency. My approach was shaped by the circumstances - our projects were rarely very large (the largest had around 60 developers for 12 months), and were usually not at the very core of our clients' organization (unlike SAP, for instance).

My approach was get the architects to *reduce risk for the delivery teams*.

Sometimes, that risk came from areas traditionally associated with software architecture - a complex application structure, lots of integration points, communication with many technical stakeholders; we drew _lots_ of UML diagrams, had lots of meetings and conference calls, filled endless whiteboards.

Quite often, however, the overall design of the solution was not particularly risky - a web application, using a well-understood framework, with perhaps some SaaS integration points. In those cases, the architect would discuss the approach with the development team, but act as a sounding board and facilitator, rather than the design authority. 

Those well-understood web applications, however, would regularly have some attribute which required dedicated risk mitigation. For instance, an ecommerce application with very short, very high load predictions (think selling tickets to one-off events with world-famous singers). Or we'd have to integrate a mobile app with a brand new IoT device, using a protocol that could be described as "under heavy development". Or a user experience which navigated incredibly complex underlying data structures - but had to hide that complexity from the end user.

In those cases, I'd get the architects to take ownership of the high-risk attribute of the project, and integrate it with the "regular' development team with the minimum of friction. That meant the teams would be able to make progress on the 80% of the project that was known and understood, and the architect was responsible for the 20% that was risky and confusing.

## Architects as an investment in the future

The final mental model I like concerns time horizons. Every software project is a trade-off between short-term delivery versus long-term survival. Alastair Cockburn talks about [software development as a collaborative game](https://blog.codinghorror.com/software-development-as-a-collaborative-game/), one of whose goals is to get to play again. It's not enough to be fast, have lots of features, a cool UI - you have to survive so you can play again.

And this is much easier if you can ask different people to worry about different things. I've seen engineering leads spin their wheels for days, and reversing decisions repeatedly, because they had to worry both about "getting the thing out the door" and "make sure we can handle this future, somewhat hypthetical, use case".

Some of my clients have solved this by asking delivery teams to focus primarily on the short-term delivery challenges, and architects on looking at the future. Concerns for the future usually involve high-level system design and overall implementation quality. But they also involve looking at the product roadmap and figuring out how to deliver key new capabilities. "Our current release only handles one payment method, but in 6 months we need to handle 5 - let's make sure we don't have to throw away today's version".

### Architects and the SDLC

It's worth discussing the role of the software development lifecycle (SDLC) in this context. A key factor in software quality and maintainability is the way the team converts requirements into running code. A single developer, pushing code straight to production may be fast, but unit tests, static code analysis, BDD-style acceptance tests, peer reviews etc. will probably improve the quality (and thus reflect an investment in the future).

I've seen many architects shy away from these process questions - but I believe they're a key aspect of "Architects as an investment in the future". They ensure that the team build the muscle memory to deliver high quality software, but also that the process is tuned to the demands of the project. 
