---
title: 'Databases - what I've learnt'
date: 2021-08-22T15:44:43+00:00
author: "Neville Kuyt"
layout: single

excerpt:
    I first saw SQL in 1989. Of all the technical skills I've learnt, relational databases have been the most useful...
---

I'm currently reading [Kleppmann's Designing Data Intensive Applications](https://dataintensive.net/). It's a great book - the writing is clear but not simplistic, and there's a great balance between pragmatism and enthusiasm for the various technologies. 

It reminded me of the other database books that made an impact: [Joe Celko's](https://dl.acm.org/profile/81100357622) [SQL for smarties](https://www.goodreads.com/book/show/1046365.Joe_Celko_s_SQL_for_Smarties) remains a classic. It is incredibly clear, and introduces ways of thinking about databases that aren't obvious - yes, the nested set model for modeling hierarchies.

The first book that made it all click was [C.J. Date's](https://en.wikipedia.org/wiki/Christopher_J._Date)"An Introduction to Database Systems". It's a university text book, but again - very accessible, clearly written, and I found the work-throughs incredibly useful.

So, SQL, relational databases - they've been around since I started working in IT in 1989 (it was called "Data Processing" back then). Most of the other things I learnt back then - COBOL, structured analysis and design, RAD - all seem to have been ephemeral, but good, old SQL is still around. 

I learnt a lot in those days - I worked on a database system to calculate volume rebates for our customers. Thousands of customers, hundreds of thousands, maybe low millions of orders; the total database size was tiny by modern standards. Back then...performance optimization made a _huge_ difference. Adding the right index made the difference between "this will never respond" to "it responds in seconds". There was a weirdness in the SQL implementation which meant the order of the where clause mattered - another great introduction to performance optimization.

My next job was building a client-server application, using Visual Basic and SQL Server. At this point, I knew SQL pretty well, was sorta-kinda comfortable with schema design, but our application required complex calculations, across tens of millions of records. We were calculating profitability for projects, which in turn drove performance-based rewards, and it was _really_ important that we could demonstrate our calculations were correct.

So I learnt about stored procedures, views, and data warehouses. I learnt how to build extract-transform-load pipelines, and how to test my database code. I learnt how to roll out changes so they could be managed consistently, and how to trace data problems through pipelines.

Next I joined an internet start-up - welcome to web-scale traffic, and the joys of caching (and the unspeakable terror of cache invalidation). On to ecommerce, with complex schemas to handle seasonal collections, and then to a digital agency, where we worked on lots of innovative ideas - IoT, content management-combined-with-commerce, automotive websites with configurators - the works. 

And on nearly every project, being able to think of the problem domain in terms of "entities" and "relationships" was helpful. I did learn object-oriented design, and design patterns, and UML - but for understanding a complex problem domain, the first step is usually "what are the major business entities, and how are they related?".

So, a skill I learnt over 3 decades ago remains relevant and useful today. 