---
id: 186
title: 'Slices, layers, tiers, components &#8211; oh my!'
date: 2019-08-19T12:49:08+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=186
permalink: /2019/08/19/slices-layers-tiers-components-oh-my/
---
A few days ago, I wrote about my experience delivering a large web project and compared it to the Hertz/Accenture law suit. A friend asked me to go into more detail &#8211; here&#8217;s the gist of our conversation.

<blockquote class="wp-block-quote">
  <p>
    X: isn&#8217;t there a risk that by delivering slices, you&#8217;ll introduce lots of duplication? If I want to implement a business rule saying &#8220;all orders must have a validated shipping address&#8221;, and I have two slices &#8211; &#8220;website user creates order&#8221; and &#8220;contact centre creates order&#8221;, won&#8217;t they duplicate that logic?
  </p>
</blockquote>

Sure &#8211; that&#8217;s a risk. You could well end up with a mess of duplicate code, especially if you have lots of teams working in parallel. There are broadly speaking two ways to mitigate this risk. 

The most common is through &#8220;architecture&#8221; &#8211; you agree a software design where there is a single component which manages orders and their business rules. This is perfectly reasonable &#8211; but it often comes with some baggage. There is a temptation to design this architecture in great detail, and assign a team to each component. This often means that the component is designed up front, and cannot change in the light of real requirements that are uncovered during development. I&#8217;m all for architecture, and I&#8217;m all for cleanly defined components which do one thing and do it well. But I believe architecture should be lightweight and focus on principles and infrastructure, and the actual implementation should evolve along with the application.

The second way to avoid duplication is through process and culture &#8211; you make sure the teams communicate about their design decisions, and know how and where to look for existing code which is related to their work. You make sure the team has enough time to refactor and extend existing components, and that everybody understands that the team is evolving the architecture together. 

<blockquote class="wp-block-quote">
  <p>
    X: What about multiple UIs? What if I want to build a platform that supports web, mobile apps, smart TVs, VR glasses?
  </p>
</blockquote>

Sure, another really important consideration. I&#8217;ve worked on projects with multiple brands, multiple markets, multiple devices &#8211; the possibility for lots of duplication is even bigger. The same answer applies as above, really &#8211; yes, a clean architecture is the answer, but no, designing that architecture up front and dedicating a team to the &#8220;re-usable&#8221; layer is often a bad idea. The user experience on those different devices is often very different, and it&#8217;s much better to evolve the re-usable layer as you learn about what you really need than trying to design it in detail up front. 

<blockquote class="wp-block-quote">
  <p>
    X: And what about skills? Front-end developers want to work with other front-end developers, you get much better code if you have people work together on the same technology layer.
  </p>
</blockquote>

This is indeed a challenge &#8211; especially when you have skill requirements you can&#8217;t realistically embed in each &#8220;slice&#8221; team, or where you have particularly complex requirements in one part of the slice. But in my experience, once developers are used to working in cross-functional teams, they really enjoy it &#8211; they learn a lot from working with other disciplines. Some of the most useful code review sessions have come from front-end developers and back-end developers looking at each other&#8217;s code &#8211; they tend to spot mistaken assumptions, rather than stylistic problems. 

I don&#8217;t think there&#8217;s a nice structural solution to this question &#8211; a neat org chart you can draw showing how teams work. I think the solution lies in culture, rather than structure &#8211; coding in the open, joint ownership, a shared understanding of &#8220;what the project is about&#8221;.

<blockquote class="wp-block-quote">
  <p>
    X: OK, but how big should a &#8220;slice&#8221; be?
  </p>
</blockquote>

Good question. As usual, it depends. 

The key goal of &#8220;slices&#8221; is to make sure everyone &#8211; developers, business sponsors, QA, designers &#8211; has the same perspective on &#8220;what the project is&#8221;, and &#8220;how much is done&#8221;. So a slice needs to be demonstrable to business people, in a way that clearly communicates what works and what doesn&#8217;t. It needs to have a user interface (even if most of it is placeholder), and it needs to push logic all the way down the stack.

But it doesn&#8217;t need to scale, or be fast, or be pretty. It can have some technical debt, and it can cover only the &#8220;happy&#8221; path. It might only work for one of the different types of users, or one type of content, or one workflow. 

<blockquote class="wp-block-quote">
  <p>
    X: I think I understand. What do I do after my first slice?
  </p>
</blockquote>

Another good question. I like to structure projects so that we build the first slice as quickly as possible (4 weeks or so is great); I typically ask the entire team to focus on this goal. Once the first slice is delivered, I like to add more slices every 2 weeks. At this point, it may make sense to have some of the team working on cross-cutting concerns (build/deployment, shared look & feel, etc.). It may also make sense to build larger components outside a slice &#8211; some things just take more than 2 weeks to deliver. However, I try to keep at least half the team working on the &#8220;slice&#8221;.