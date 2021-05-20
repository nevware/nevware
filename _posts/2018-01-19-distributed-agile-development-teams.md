---
id: 159
title: Distributed agile development teams
date: 2018-01-19T16:23:25+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=159
permalink: /2018/01/19/distributed-agile-development-teams/
---
The key to distributed, Agile software development is to get good velocity by making sure the work the developers pick up is &#8220;workable&#8221;. This means validating requirements before adding them to the backlog.

The last few projects I&#8217;ve managed have been larger than most we do in my company. We needed very specific technical skills, and simply couldn&#8217;t find them all in London or Amsterdam.  So, we bit the bullet, and brought in developers from suppliers, partners, other offices in the company, and freelancers working remotely. At one stage, the only people &#8220;in the office&#8221; were the QA lead, the delivery manager, and I running the development team &#8211; but all the developers were in different locations. 4 worked for a Polish specialist software shop; 4 were freelancers working from home, 2 worked in a different office, and 2 worked in our Ukranian tech hub. Oh, and our client and product owners were in a different country, and the user interface design team was in a different office.

I was discussing this experience with a friend yesterday &#8211; he has a co-located team, with the product owner 2 doors away, but was complaining about lots of suboptimal process issues.

I realized then that running a distributed team forces you to answer process questions early on, because problems that can be dealt with informally if you sit next to each other quickly become intractable if you&#8217;re remote. One example was that we agreed between everyone &#8211; client, delivery people, developers, QA &#8211; that the only source of truth was our task database (Jira, if you must know). If it isn&#8217;t in Jira, it doesn&#8217;t exist. If you want something, write it in a Jira ticket, and follow the Jira process to get it on the backlog. Developers had to deliver what the Jira ticket specified; QA had to verify that this is what the software did. This way, you have a crude but accurate view of what you have to do &#8211; x Jira tickets &#8211; and what you have done so far &#8211; y Jira tickets. My friend&#8217;s project, on the other hand, collected work items in user stories, screen designs, casual clarifications from the product owner, bug reports etc. His developers were complaining they were spending a lot of time picking through all those requests to work out what they actually had to deliver. My distributed team, on the other hand, could focus on ticking off their Jira backlog.

I know, this sounds the antithesis of Agile &#8211; I&#8217;ll get to that.

The second benefit of this approach was that I could ask the developers to reject any Jira ticket they didn&#8217;t believe was &#8220;workable&#8221;. Requirements could be expressed in whatever way the originator was happiest with &#8211; but unless a developer could pick it up and start coding in 10 minutes, they could reject it. Lots of bugs got rejected &#8211; if you don&#8217;t include steps to reproduce this bug, or actual versus expected behaviour, the developers can&#8217;t work on it. Lots of features got rejected for being unclear, or incomplete, or contradictory requirements.

Again &#8211; doesn&#8217;t sound very &#8220;Agile&#8221;, does it?

## Velocity is the key to Agile.

In my experience, the key to implementing Agile is to build trust with the business that the team will deliver business value, at the expected quality level, for a reasonable cost. And that means establishing a decent level of velocity.

When I work with clients and we agree on &#8220;ways of working&#8221;, the deal I make is this.

_You make sure I&#8217;ve got a prioritized list of workable items, and I make sure the team delivers the best possible level of velocity and quality._

Business people like this &#8211; they control the priority, and get the best possible value for their development buck. When they see that top priority requests do indeed get turned around in hours or days, and that the team is consistently delivering the priority items in the backlog, they become a lot more confident in Agile as a process.

## Chunking is the key to velocity.

We&#8217;ve seen numerous studies on developer productivity &#8211; but in my experience, the key is to have as much time as possible with clear, complete problems to solve, of a size that allows progress every day. By clear and complete, I mean that a developer should have all the context available when they start work so they have to focus only on the technical design and implementation, not the requirements or UI design.

Most Agile methodologies recognize this &#8211; the &#8220;unblocking&#8221; part of the Scrum Master&#8217;s role, and the &#8220;I am blocked by&#8221; element of the Scrum stand-up, for instance, are designed to allow a developer to hand off tasks that aren&#8217;t executable.

But with a distributed team, this is much harder &#8211; the communication channels are much narrower, and much slower.

## Avoiding blocks is the key to chunking

So, if we want developers to be able to work on executable chunks of work, we need to minimize the number of block they encounter. And in distributed teams, that means we give them complete, executable pieces of work, defined in one or two artefacts &#8211; a task, and a visual design, for instance, or a bug report, or a non-functional specification and test report.

However, often &#8220;requirements&#8221; (in whatever form) are not complete or executable.

## Verifying requirements is the key to avoiding blocks

In &#8220;traditional&#8221; Agile, this is often done mid-sprint. It&#8217;s a bit of a pain, but the product owner sits with the team, and it&#8217;s their job to clarify. In distributed teams, this is much better done before the sprint starts &#8211; get everyone to verify each story before it goes on the sprint backlog, and reject anything that isn&#8217;t ready.

Business stakeholders appreciate this process. The clarification process often brings up problems in the product vision, or highlights prioritization mistakes, or shows up organisational issues that shouldn&#8217;t be solved by software.