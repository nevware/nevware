---
title: 'Team Topologies - journey, not destination?'
date: 2024-07-01T15:44:43+00:00
author: "Neville Kuyt"
layout: single

header:
  image: /assets/images/beach.jpg
  teaser: /assets/images/beach.jpg

excerpt:
    The Team Topologies book is 5 years old. What have I seen, learned, and imagined?

---

A colleague introduced me to [Team Topologies](https://teamtopologies.com/) soon after the book came out. We both enjoyed the book - it finally gave us a framework for the conversations we'd been having. We were working for a large retailer, replatforming their online store, and were seeing many of the challenges that led to the Team Topologies approach. Simple changes would require the alignment of many teams, work was passed around like a hot potato, and nobody was clear about who owned what. There were around a dozen or so teams, some aligned with "business features" like product discovery or fulfillment, some were aligned with technologies like the content management system, some were aligned with architectural layers like "the front end team". The application architecture, unsurprisingly, was incredibly complex, with diffuse responsibilities, duplication and "here be dragons" sub systems. 

By viewing the organisation through the Team Topologies lense, we could see what the problems were - and a route to improvement. But we were in the middle of a high-stakes project, with severe delivery pressure and only limited appetite for change - the client organisation worked with several vendors as well as their inhouse team, and everyone had commercial and political interests to worry about. Most of the writings on Team Topologies take a strategic approach to designing the organisation - [Wardley mapping](https://www.wardleymaps.com/), finding fracture planes, considering whether something could be an independent service etc. 

Our context didn't support such a strategic approach - the politics were too complicated. Instead, we took a very tactical view - we used a new feature request that the business was invested in as the tracer bullet, and looked at all the hand-overs between teams that were required to deliver the feature. It went something like this:

> Business stakeholder -> Product Owner -> Business Analyst -> Technical Architect -> Tech lead(s) -> Backend Developer(s) -> Front-end developers -> Quality Assurance -> Release Manager -> Release team.

This looks like mini waterfall, but in practice it _was_ more agile - I've only captured the responsibility handover, not the many conversations that happen along the way, and the team was pretty good at delivering iteratively and incrementally. Nevertheless, there were many handovers, the overall duration for a small slice of work would routinely be many weeks or months, and the business stakeholder could never really be sure who was responsible for what. And often, features required input from designers, copy writers, MarTech specialists, etc. 

We got buy-in from the business stakeholders to create a dedicated team. There was a real incentive - the purchase journey this team were working on was complicated, the items were expensive, and there were very high returns, so an improved purchase journey was commercially valuable. We started by creating multi-functional teams, so the handover chain went 

> Business stakeholder -> Team(s) -> Release Manager -> Release team.

We had enough work for 2 teams, so split the work between "find, configure" and "buy, track". The interface between those teams was complex - they had to agree on what the "product" was, what the rules were for allowing customers to buy it, etc. We decided not to address that in the first instance - we just wanted to get started, do the smallest possible transformation.

This worked well. The teams were routinely taking work from idea to working software in a matter of days, and deploying to a QA environment. Our business stakeholder was delighted - both with the product, and the way of working. We had several sessions where we took feedback and deployed quick changes to the QA environment before the meetings finished - the business stakeholders were very impressed with this.

They asked for more - so we agreed that deploying to production, not just a QA environment, would be the next step. We talked to the operations team who historically had owned the path to production, and agreed an architectural solution that would keep our new teams' work separate from the rest of the application, and had a small team extend the CI/CD pipelines that already deployed to QA to go to our production environment. The team was now deploying multiple times per day, and at a very high quality level.

We gradually extended the number of stream-aligned teams - one or so per quarter, and once we had 4 or so, invested in a platform team to take care of some of the repeated work that those teams kept bumping into. As there were a few shared concepts that were used by several stream-aligned teams, we built some "X-as-a-service" teams who owned the semantics of those shared concepts, and expose them via an API, rather than having multiple teams work in the same codebase. They became "complicated subsystem" teams.

It wasn't pain free. We had some really challenging situations around line management and HR - individuals felt they were losing connection with the people in their discipline, and line managers found it difficult to keep up with their reports. And of course there was continued pressure from the business stakeholders to deliver, to go faster - and sometimes, the teams stumbled. We invested in more and more "shift left" on quality - but some bugs snuck through to production. The shift to "you build it, you run it" was an HR challenge, with different pay and time-of-in-lieu for different teams/vendors. There were business priorities that cut across our stream-aligned teams and re-introduced handovers, dependencies, bottlenecks.

But we had set up metrics collection from the start, and while "value" is hard to measure, we saw impressive improvements on the [https://docs.gitlab.com/ee/user/analytics/dora_metrics.html](DORA metrics). Deployments went from once a fortnight to multiple releases per day; lead time for change went from "months" to "days". We had some challenges with change failure rate once we added more teams - but we learned from that experience and improved quickly.

More importantly, perhaps - the relationship between the "business" (ultimately, the budget holders) and the delivery organisation improved. The business folk felt they understood how the work flowed, who was responsible for what, and what the trade-offs were.

# What did I learn?

## That's all very well in practice, but it will never work in theory.

Our initial thoughts about how to identify our teams were a long way from where we ended up. While we had a deep understanding of the business domain, and the bounded contexts made sense, it was mapping the handovers in a couple of example features that identified the biggest wins - cross-functional teams, aligned with a key business win. In retrospect, it was a subset of one of the higher-level domains we'd identified. Once the concept of teams with limited handovers had sunk in, we found several opportunities we hadn't previously identified - especially in the "X-as-a-service" teams. 

## Some structures don't fit neatly into the Team Topologies paradigm - and that's OK.

We _really_ struggled with some of the folk we worked with. User Experience designers, for instance, wanted - needed! - to have a view across the entire application. They might contribute to a stream-aligned team in a specialist role, for a fairly short period, by creating UX designs, and then have feedback sessions as work progresses. We couldn't align them with any one value stream, they weren't enablers or complicated subsytems, so we decided not to worry about it. It was fine.

## Small wins, chained together. 

We did not have a mandate from the executive team to make wholesale organisation changes. There were good reasons for this - but in retrospect, I think the decision to start small was the right one. We made quick progress, learned from reality, and found a good cadence. It was very gratifying to see the teams in the "legacy" organisation look enviously at the new teams. We created a Slack channel to celebrate small wins, and it was the most busy channel, with lots of positivity.  

## Numbers matter.

My colleague insisted we use the DORA metrics as a way of evaluating our progress, and they were right. It's very easy for the new normal to become - well, the new normal. By looking at trends over time, we could see where we were making progress, and adjust where necessary. Keeping track of just 4 numbers (though supported by lots of underlying metrics!) was not a huge burden, and when business folk complained about how long things were taking, we could show objective statistics - "it used to take 2 months for a change to make its way to production, now it's a few days" was a very powerful argument.

## People matter more.

This was a challenging engagement. It was high pressure, there were lots of business changes going on that made it hard for people to commit to decisions, and the entire industry was in turmoil. I think most of the team really enjoyed the clarity and focus of the new team structure - but change can be emotionally stressful, and we had a few people who felt very uncomfortable. We supported them as best we could, but could have done a better job, I think.