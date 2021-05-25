---
title: 'Content management systems - oh no, not again!'
date: 2021-05-23T15:44:43+00:00
author: "Neville Kuyt"
layout: single

header:
  image: /assets/images/office.jpg
  teaser: /assets/images/office.jpg

---
This weekend, I ported my blog from a Wordpress instance hosted on Site5 to a Jekyll site running on Github Pages.

In my career, I've built dozens, scores, maybe hundreds of corporate content-driven websites. In every case, "we need a content management system (CMS)" was a non-negotiable requirement. So, off we go - sometimes the client had selected a CMS, sometimes they asked us to recommend one. The first one I remember was Vignette Storyserver. Since then, I've used Microsoft CMS, Umbraco, Ektron, Episerver, Sitecore, Adobe Experience Manager, Drupal, and Wordpress, as well as headless CMS solutions like Contentful.

In each case, the CMS brought benefits - WYSIWYG preview, publication workflows, versioning, meta data etc. - as well as an implementation effort, along with design constraints and technical challenges.

In one case back in the mid 2000s, a client asked us to build a brand website, and intended to point a large marketing campaign at the homepage. "Can you make sure we can handle hundreds of thousands for visitors between 8PM and 10PM, Friday evenings, US East Coast time? We're doing a promotion with America's Got Talent". The website was hosted on a CMS platform, and the basic page generation code was provided by the CMS. While the CMS had sophisticated caching capabilities, but our early load testing showed we couldn't hit those traffic numbers. We spent weeks optimizing, tweaking, testing/retesting and finally came up with a solution. The homepage did not change for 18 months after that - not for technical reasons, but because the content strategy didn't require it.

The tragic thing - in 99% of cases, the web pages we built didn't change after we'd launched the website. And most of the time, the client would hire us to update the site, rather than use the CMS.

In other cases, the client was using their website as a key marketing channel, and wanted us to deliver personalized journeys based on sophisticated business rules. While the CMS platform provided some tooling, it rarely met the requirements - and in some cases was rather oversold by the vendors. In pretty much every case, we ended up implementing a 3rd party Martech component instead, and the CMS was relegated to providing headers, footers and perhaps some JSON to populate the personalized pages.

And then, a large, ambitious client asked us to build a marketing website based on their product catalogue information, using a well-known CMS platform. Their products were often made up of configurable components - so a customer might buy a Thing, made up of three different Widgets, a Doohicky,and a Whatsamecallit. The logic went like this: our product database is incredibly complex, and managed by a dedicated system. That system can provide updates to the CMS, which can then re-generate the pages automatically, thus saving hundreds of days of manual updating time. The CMS in question relied heavily on caching to ensure response times were acceptable - page generation was generally slow.

The problem was that the dependencies between items in the product catalogue and content on the website was hard to track - "widget X's name has changed, which pages do we need to update? Now we've changed those pages, are there any other pages that need to change, and recursively on and on. The outcome was that for most changes, we ended up invalidating the cache on the entire site, which would then cause the site to appear unavailable for a few minutes as each page generation would take time, and we did it in response to a user requesting a page.

And then..."content-only" websites have become anachronisms. It's hard to imagine a company build a brochure-ware site in the 2020s - and even content companies (news, entertainment, sport) need interactivity - pay-per-view, social integration, personalization, commenting (never read the comments!).

The large CMS platforms have tried to keep up, adding more features and capabilities, or integrating with complementary products or services. Often, this has come at the expense of significant additional complexity, and the "walled garden" ecosystem built by the vendors is often a generation or so behind.

And the industry seems to be moving quickly - chat bots, voice integration, personalization and rich customer data platforms are pretty much table stakes for most websites. [This site](https://buildyourdxp.com/) shows some great examples.

So, the challenge for CMS solutions is that customer expectations have shifted well beyond the basic CMS features, and that the landscape is fragmenting - there are dozens if not hundreds of popular analytics tools alone. Some vendors - like Adobe - are pushing for a complete, walled-garden feature set, with offerings that work well together out of the box. Others - like Wordpress - have taken a platform approach, where they allow 3rd parties to offer plugins to deliver features that aren't in the main product base.

Both approaches face a major challenge - the complexity of using a CMS as a composition tool for functionality. Your CMS configuration, including/excluding/configuring external features, becomes a programming language in its own right - but without the tooling and processes that allow mainstram programming languages to be productive, like test frameworks, debuggers, IDEs etc. 

## Static sites, dynamic pages: JAMStack, Content Mesh and serverless##

I'm not the first person to realize this - the JAMStack concept was launched around 2016, and in my experience has exited the "early adopter" phase.

The new orthodoxy for web applications seems to be:
  
  - A design library, capturing the brand's common interaction patterns, components and page layouts.
  - A static site generator which combines content with components and layouts from the design library to render static web pages
  - JavaScript-based integration with either off-the-shelf services such as OAuth, Google Analytics, etc., or custom-written serverless functions to add functionality to the webpages. Asynchronous where possible, graceful degredation where not.
  - Hosted on auto-scaling Cloud infrastructure, with a robust CDN to serve static assets.
  


