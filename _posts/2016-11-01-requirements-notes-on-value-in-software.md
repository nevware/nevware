---
id: 116
title: 'Requirements &#8211; notes on value in software.'
date: 2016-11-01T10:15:07+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=116
permalink: /2016/11/01/requirements-notes-on-value-in-software/
---
I was chatting with an old friend recently. We worked together in the 90s, building a custom software solution for a large, complicated multi-national company. The requirements for the system were owned by several senior stakeholders, across several offices, departments and timezones. I don&#8217;t recall a single meeting where all stakeholders were present, and one of the project&#8217;s major challenges was to get a consistent point of view on each feature&#8217;s scope and priority.

&#8220;Agile&#8221; was not yet commonplace &#8211; we had JAD (Joint Application Development) sessions with our key requirements owners to work out what they wanted. As our software was &#8220;client server&#8221;, and there was no virtualization or automated deployment, it was very hard to show people outside the team what we&#8217;d built, or what we might build if they agreed.

We had business analysts who converted the output of the JAD sessions into semi-formal requirement statements, and we planned our development effort based on those requirements. Of course, this was not a particularly reliable process &#8211; the JAD sessions with busy, senior people were hard to manage, and would yield requirements ranging from &#8220;we want a nice user interface, maybe something like Netscape Navigator&#8221; to arcane rules on rounding financial calculations. The business sponsors were unusually responsive &#8211; we could usually get answers in a few days when we had specific questions. However, there was no comprehensive statement of objectives and requirements, and the business analysis team couldn&#8217;t substitute for the business sponsors.

We developers would regularly end our week in the pub around the corner muttering into our beer that if only someone could give us a complete, clear set of requirements, we could be finished with the project in a couple of months and go home. We lived in re-work hell &#8211; we&#8217;d finish a piece of software, the QA team would approve it, and when we showed it to the business owner they&#8217;d change something, and we&#8217;d start again. This feedback loop was typically 3 months or longer.

We weren&#8217;t following a traditional waterfall methodology &#8211; but it was close enough. Releases were painful and expensive, so we did one or two a year. Our team was measured on how many features we delivered according to specification, even if that specification was wrong. The quality of our requirements was low, and  the feedback time was too long &#8211; so our instinct was to improve the quality of the requirements, and to create a process to prevent change to requirements. If our business sponsor gave us &#8220;bad&#8221; requirements, they should bear the cost.

Where was the &#8220;value&#8221; in our software? Even back then, in the glory days of client/server development, the code was the easy bit. It was incredibly laborious compared to today &#8211; but once we all agreed on what to build, writing the software rarely took more than a few days per feature. The real effort went into understanding, agreeing, refining, clarifying, validating the requirements, the re-work, the edge cases, the &#8220;but this requirement isn&#8217;t compatible with that requirement&#8221;. The project was a success &#8211; it saved the business tens of millions of pounds once live, and helped drive a culture shift within the business. But the value wasn&#8217;t in the code &#8211; it was in the agreed, prioritized requirements we&#8217;d implemented.

Fast-forward to today.

Most of the teams I work with can get a development release out in minutes, and feedback from clients in no more than a day. On most projects, we communicate using online tools like Jira and Confluence to capture requirements and design decisions. We use online chat, email and voice calls to discuss requirements and ideas, as well as team progress. Teams are distributed &#8211; my last few projects have had developers in at least 5 locations, and clients in 3 or 4 different offices.

And yet, on many engagements, we still treat code as &#8220;expensive&#8221; &#8211; we spend a significant proportion of our effort capturing, refining, grooming, prioritizing, designing, mocking up, visualizing requirements. It&#8217;s not uncommon for a software project to spend around 30% of its budget on developers. Source code and the final product effectively become the output of a long, complicated process of turning Powerpoint into working software. I&#8217;ve seen this in both agile and &#8220;traditional&#8221; projects &#8211; though of course making public-facing, mass-audience applications for large brands is always going to be design-intensive.

While we have faster communications than in the 90s, and our software cycle time has gone from months to minutes, the challenge remains coming up with a product feature set that everyone agrees on, is feasible given the other project constraints, and which is captured in a way that can be used to manage the project.

It turns out that the solution to this is both simple, and impossible &#8211; the project needs a single, consistent point of view, which combines at the very least the team which is commissioning the software, and the team which is delivering it.

&nbsp;

&nbsp;

&nbsp;

&nbsp;