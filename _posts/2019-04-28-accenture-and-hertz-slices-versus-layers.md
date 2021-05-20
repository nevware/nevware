---
id: 184
title: 'Accenture and Hertz &#8211; slices versus layers'
date: 2019-04-28T09:00:55+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=184
permalink: /2019/04/28/accenture-and-hertz-slices-versus-layers/
---
I wrote earlier about [Hertz suing Accenture](http://www.kuyt.org/2019/04/26/thoughts-on-the-hertz-accenture-lawsuit/) over the failed web replatforming. Again &#8211; I have no knowledge other than what I read in the press, and this is all conjecture.

There&#8217;s a line in the article that stood out for me. &#8220;_Despite having missed the deadline by five months, with no completed elements and weighed down by buggy code,&#8230;._&#8220;. 

A few years ago, I picked up a large project &#8211; looks like it used the same technology stack (Adobe Experience Manager, Angular). The project had been running for a few months, and our client was unhappy &#8211; they couldn&#8217;t tell if we were making real progress. &#8220;Nev, can you have a look and see what&#8217;s going on?&#8221; asked my boss, so I went for lots of coffee with the team, and ended up taking over the delivery of the project.

The key red flag was this: the team had been working for around 6 months, but didn&#8217;t have anything they could show me other than some passing integration tests. We were building a website, but there were no actual web pages. There was some JSON that could be transformed into web pages, there was a content structure that could create and store JSON, but the only people who could assess progress were developers.

Our client was not a developer &#8211; they were subject matter specialists, product owners, business people. They understood the &#8220;first you have to build the foundations&#8221; logic of building the underlying structures before worrying about making web pages. But they felt that 6 months was a long time to wait, and they felt the team was unable to explain when they might see a working web page. They also felt there was a real risk that once we started making web pages, we&#8217;d have to revisit lots of &#8220;foundation&#8221; code. They were right, as it happens.

The first thing we did with the team was to create placeholder pages for the major parts of the site. AEM has the concept of &#8220;component&#8221; &#8211; a widget which shows a bit of a web page &#8211; and &#8220;template&#8221; which defines which components go on the page, and how they fit together. So, we started to build all the templates we needed, and placeholder components to go on those templates. We made sure that the templates and components reflected the key design decisions (how they&#8217;d render on different screen sizes, basic colour and styling), and created a basic version of the site. 

This took a few weeks, and raised _lots_ of questions. &#8220;Where does this content come from? How does this component work on mobile? How do you get from this page to the next?&#8221;. It was uncomfortable &#8211; we found out exactly how much we didn&#8217;t yet know. It also exposed assumptions we&#8217;d made in designing the &#8220;foundation&#8221; which were totally incorrect. We had uncomfortable conversations with the client &#8211; as we found answers to our questions, we discovered many areas where we weren&#8217;t aligned on requirements. Some of those misalignments reflected significant amounts of effort.

But overall, the trust between our team and our client improved. The conversations were concrete and limited &#8211; instead of asking &#8220;how should content workflow be set up?&#8221;, we could ask &#8220;how do we manage content for this widget on the homepage?&#8221;. Many of our assumptions were tangible &#8211; &#8220;we thought the navigation would be a static component, you think it&#8217;s data-driven&#8221;. By focusing teams on a component (front-end, back-end, design, QA), we could demonstrate that we could make progress in ways our client understood. We&#8217;d agree how a component was supposed to look, how it worked, where the content came from, and then assigned a team to deliver that. Within days, the client would see progress, and their level of confidence would grow.

I refer to this as the &#8220;layers versus slices&#8221; challenge. Logically, it makes sense to build the foundation before you worry about hanging pictures on the wall &#8211; but I think there&#8217;s a better metaphor than building a house. I see it more like building a city &#8211; you want to put down major infrastructure like roads, sewage, utilities first, but then you build each house individually &#8211; foundation, walls, roof, interior. You can build several houses concurrently, but you don&#8217;t build the foundations of all the houses in the city first, then the walls, then the roof etc. (I may have been playing Sim City).

On a web project, the infrastructure is setting up development environments (a huge pain on AEM!), basic content repository structure (how do you manage sub-sites, language variants etc.), deployment pipelines, BDD/TDD testing framework, design system (e.g. material design) with default styling for the project, and the source code control system. 

Once you have the infrastructure layer, I build the user interface, using the basic design system (which may look more like &#8220;boxes and arrows&#8221; style wireframes than the finished product), and minimum versions of all the components. This should give you a web site with placeholder content, and minimal styling. You now have two layers &#8211; infrastructure and user interface. 

The next phase is to focus on slices &#8211; build up all the components so they work properly (however you&#8217;ve defined that!), look right, and have the correct content.

I may be reading too much into the line in the article &#8211; but it sounds to me like the Hertz project focused on &#8220;layers&#8221;, at the expense of &#8220;slices&#8221;.