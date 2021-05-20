---
id: 141
title: Working with large, distributed teams
date: 2017-03-20T11:20:53+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=141
permalink: /2017/03/20/working-with-large-distributed-teams/
---
My last few projects have involved large-ish (up to 50 or so) teams, spread across multiple locations. I&#8217;ve been reading about this, and had the occasional conversation with [@seldo](https://twitter.com/seldo) about how NPM runs its teams, and I&#8217;ve realized a few things.

Firstly &#8211; language is crucial. Invest in a common idiom!

My current development team has roughly 30% native English speakers; we have French, Polish, Romanian, Russian, Gujarati and Dutch speakers too. While everyone speaks great English, there is a lot of subtlety in language. Developers use a specific vocabulary when communicating with each other &#8211; is it a bug, or a defect? Is it a pull request or a review? What, exactly, is the front-end &#8211; is it HTML/CSS/JavaScript, or is it &#8220;the website&#8221;? Is a task &#8220;pending&#8221; or &#8220;open&#8221;? Having a common, shared language makes things easier &#8211; especially when agreeing the status of the project. Is work that&#8217;s &#8220;in review&#8221; done, or not done? Do you accept &#8220;80% done&#8221; as done?

But the business domain is where the real benefits are &#8211; making sure the team (and the client) all share the same language is always important (Evans&#8217; [Domain Driven Design](https://www.amazon.co.uk/Domain-driven-Design-Tackling-Complexity-Software/dp/0321125215) emphasis this too), but with a distributed team, it&#8217;s crucial. I spent about half a day on Slack with a developer in a far-away land trying to work out how to reproduce a bug the client had logged &#8211; it turned out all 3 of us had a slightly different interpretation of &#8220;product&#8221; on the ecommerce site. You can work that out in 5 minutes face-to-face, but at a distance, this can become a huge time-sink.

The second issue is &#8211; ridiculously &#8211; audio quality. One of our offices has beautiful high ceilings, and stylishly sparse decor in some of the meeting rooms &#8211; as a result, the audio quality on audio conferencing is terrible. We&#8217;ve got great speakers from Jabra which help &#8211; but it&#8217;s really worth investing in the best quality audio kit when using Hangouts for a Scrum.

The third issue is a little more subtle. It&#8217;s a culture thing &#8211; and I&#8217;m not sure I always get this balance right. Especially when working remotely, it&#8217;s really important that developers get &#8220;workable&#8221; assignments &#8211; a clearly described problem to solve. If it&#8217;s a development task, the story/task/whatever should be ready for development &#8211; all the dependencies should be clear, the task should have enough requirement detail to allow the developer to work on it. If it&#8217;s a bug, there need to be clear steps to reproduce the bug, expected and actual behaviours etc. This is hard to achieve with a remote team &#8211; backlog grooming, sprint planning etc. is hard to do remotely, and we tend to use a more centralized model, with a small group of developers and managers assessing and assigning work. Some developers enjoy this &#8211; &#8220;I just want to code, give me my todo list and don&#8217;t bother me&#8221;. Others want to be part of the process, and feel ownership of their piece of work. It takes a while to find the balance here &#8211; but I&#8217;ve learnt to hire &#8220;heads-down, coding&#8221; people alongside developers who are more engaged in the process.

&nbsp;