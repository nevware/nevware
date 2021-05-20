---
id: 151
title: Compose first, build last.
date: 2017-10-16T16:35:19+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=151
permalink: /2017/10/16/compose-first-build-last/
---
I was brainstorming a new product with a client the other day. We had all sorts of amazing ideas, ranging from cool user-interface tweaks to (almost) entirely new business models. &#8220;Wouldn&#8217;t it be cool if&#8230;&#8221; was probably the most commonly uttered phrase.

And then we came back to ground. Brainstorming is fun &#8211; but we wanted to launch a product, and as quickly as possible. So we looked at what we could do by putting together existing services, frameworks and solutions, rather than building things from scratch. We agreed to settle on a common user interface framework, and to use content-as-a-service and commerce-as-a-service platforms; we will run the production site on Amazon Web Services, and we&#8217;ll use Gitlab to manage our code repositories and deployment pipelines. We think we can probably limit the amount of custom development to a couple of weeks &#8211; and most of that time will go to our secret sauce idea, rather than plumbing and housekeeping tasks.

It made me think of my first start-up, back in 1999 &#8211; an ecommerce site selling prints and frames. We hand-built an ecommerce engine, a pick/pack/dispatch module, a label printer for the warehouse, integration with our payment gateway, a basic CMS, and a product catalogue solution.

We had a designer invent our very own navigation metaphor, and our check-out journey was only loosely based on Amazon&#8217;s process. We built a custom &#8220;tooltip&#8221; solution when it became clear not everyone knew how to check out online. I spoke to some of the guys at LastMinute.com and learnt about how they used analytics to see what worked and it blew our minds!

We rented a rack at a hosting provider in West London, and I physically wired in our server (we could only afford the one, to begin with). It took about a month to set up our credit card processing facility &#8211; the bank didn&#8217;t really have much faith in start-up ecommerce companies taking payment online. We built the site with lots of hand-crafted code &#8211; no frameworks for us!

So much has changed. We could build that same solution today mostly by composing existing solutions, for a fraction of the cost. The platform that took 5 of us 6 months to build would probably take 2 people a few weeks at most. The capital required would follow a similar trend &#8211; from tens of thousands for hosting, servers etc. to hundreds.

For a similar project today, we&#8217;d use one of the many ecommerce platforms (I like [Solidius](https://github.com/solidusio/solidus), but we&#8217;d probably end up with Magento or Shopify), and use all of the established design artefacts &#8211; navigation structures, page layouts etc; our user journeys would be like every other ecommerce site (and that would be a good thing!), and we&#8217;d host on Amazon or similar. All of our energy would have gone to the unique, distinguishing features and content which defined our proposition.

On the other hand&#8230;it seemed so easy to launch back then. We built it, they came. We did some PR, a little SEO, and our site got traffic. I remember the go-live date, and somehow, from somewhere, the first visitor arrived. They left after a short while, but we got a dozen or so orders on the first day. It was like magic! Today, it&#8217;s much easier to build things &#8211; but much, much harder to get people to pay attention. Let alone visit your site&#8230;sure, we&#8217;ve got Facebook ads, and Twitter sponsored posts, and Google ads, and the banner ad is still going strong &#8211; but you&#8217;re competing against every other entity in the world for attention. In recent business modelling exercises, we found that while the cost of &#8220;building&#8221; propositions (the design and technical aspects) has dropped around 10-fold in the last 15 years, the cost of acquiring customers online has risen by at least 10-fold, and in some areas by much, much more.