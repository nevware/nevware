---
id: 41
title: Process, product and projects.
date: 2013-09-15T10:51:08+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=41
permalink: /2013/09/15/process-product-and-projects/
---
I&#8217;m fortunate &#8211; I get to work with some of the best-known companies in the world, and observe the way they approach software and marketing projects. These companies are much bigger than the one I work for &#8211; I&#8217;m in India this week, meeting with a systems integrator with more than a quarter of a million employees. And at that kind of scale, you simply must have &#8220;process&#8221; &#8211; you can&#8217;t have projects figure it all out for themselves every time. When you&#8217;re running projects with hundreds of team members, you can&#8217;t rely on people who understand the entire project &#8211; you have to partition.

However, this leads to something I find worthy of comment: there comes a point where the organisation becomes more interested in the process than the product. The team starts to see itself as a machine whose size and complexity is a victory in itself; often the actual output of the machine becomes a secondary concern. It can become hard to identify the people who understand how the machine parts relate to the product it&#8217;s building &#8211; it&#8217;s not uncommon to hear &#8220;my team does x, y and z so that that other team over there can do a, b and c&#8221;, instead of &#8220;my team produces feature x, which contributes to the product by doing y and z&#8221;.

You hear project managers discuss the team organisation chart, the governance structure, the progress reports, the project metrics &#8211; but it&#8217;s not uncommon for those project managers to be unable to explain when the product will be finished &#8211; &#8220;my team&#8217;s work is scheduled to complete on date x, subject to dependencies from that other team, and then we start phase 2.b.2, which runs for another 3 months etc.&#8221;, instead of &#8220;the project goes live on date x, and my team&#8217;s on the critical path, so we have to deliver on date y&#8221;.

The &#8220;quality&#8221; process often involves significant focus on documentation and standards &#8211; but the actual key project characteristics may not always make it into the process, so websites launch that are unusably slow, or mobile apps go into the app store which break because services from &#8220;other&#8221; teams change &#8211; and that&#8217;s not &#8220;in the scope&#8221; of the app project team.

In such organisations, key software processes can be slow and ponderous &#8211; I&#8217;ve seen many release processes which take 4 &#8211; 6 weeks to complete, because the process includes many checkpoints, mandatory evaluations and test scenarios, and there&#8217;s often a &#8220;one size fits all&#8221; process, so small tweaks have to go through the same process as major changes. The processes often seem to arise by accretion &#8211; over time, every mistake that&#8217;s happened is converted into a checklist item. Someone released a piece of software with poor performance? Add a &#8220;performance test &#8211; mandatory&#8221; step to the release process.

I get it &#8211; I really do: once you reach a certain scale, you can&#8217;t rely on smart people doing the right thing. Once your project is too large for a team of 10 &#8211; 12 people, you have to find a way of controlling it without understanding every detail. This is not a rant against &#8220;process&#8221;.

However, losing sight of the product, the end user, the business drivers &#8211; applying &#8220;one size fits all&#8221; processes and judging the project by its adherence to standards rather than the outcome &#8211; all these things make it very hard to do innovative, &#8220;web-native&#8221; work. So, this __is a rant _for_ a focus on the product.

How do you know you&#8217;ve gone to far down the &#8220;process&#8221; route? If you can&#8217;t answer the following questions off the top of your head, you may be at risk&#8230;

  * **Who is the end customer of the project? Why should they care about what you&#8217;re doing? How will your project impact their lives?**  
    If you answer this question with &#8220;the VP of organizational excellence or whatever, because he&#8217;s the budget holder and needs to spend his budget by the end of this fiscal year&#8221; &#8211; well, you might be in trouble.
  * **When does the end product go live? How important is that date to the end user?**  
    If you answer this question with &#8220;not sure &#8211; my part will be finished on x&#8221;, or &#8220;we communicated that date to the steering committee&#8221; &#8211; you might be in trouble.
  * **What are the major subsystems, and what technologies do they use? How can you be sure they&#8217;re going to do what the end user needs?  
** If you answer this with &#8220;well, the hoogenfloomer department is working on project BadgerFoot, and the manager is xxxx; they report to the Vice President of Arm Waving, so he&#8217;s making sure it&#8217;s standards compliant&#8221; &#8211; well, you get the idea.
  * **Why is this the end product important? What are the key business drivers?  
** Okay, you should be getting the hang of this now &#8211; if your answer is &#8220;because it fits into the departmental strategy for x y z&#8221;, you&#8217;re probably not seeing the big picture. Consider using &#8220;[5 whys](http://en.wikipedia.org/wiki/5_Whys "Outline of the "5 whys" technique.")&#8220;. I&#8217;m also fond of [pirate metrics](http://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version "Slides describing Pirate Metrics. ") for web projects&#8230;

I&#8217;ve seen some projects which focused on products fail &#8211; there are no silver bullets. However, the failure rate of process-oriented projects in innovative and/or exploratory projects is &#8211; in my experience &#8211; much higher. Our CEO talks about process being absolutely right for burger flipping &#8211; you don&#8217;t want the kid in MacDonalds to reinvent the burger for every happy meal &#8211; but not for innovation.

Failure modes I&#8217;ve seen are often not the classic &#8220;iron triangle&#8221; issues of time, money or scope &#8211; at least not in the sense that they are usually measured. They&#8217;re also not really correlated to &#8220;waterfall versus agile&#8221; distinctions.

For example, a long while ago, a partner company was working on an &#8220;e-CRM&#8221; project. The purpose for the business was to collect good customer data, and to combine the &#8220;web&#8221; data with their other CRM data. For the end user, the intention was to make the registration and sign-in process easier.

The IT solution provider applied their standard software development process &#8211; honed over many years of enterprise solution development &#8211; and interviewed all the business stakeholders, gathered functional and non-functional requirements, created a technical architecture based on best-practice service-oriented architecture principles, developed a comprehensive data model, and converted all this into a detailed task list, dependency matrix and project plan.

They executed according to the plan; the QA team evaluated the software against the documented requirements, and reported a decent level of quality.

The project delivered on time, and on budget. The development team ticked off each requirement against the traceability matrix, and showed they had met every single requirement. The bug list from the user acceptance testing phase showed no P1 or P2 bugs (though quite a few lower priority issues). From a very narrow project management point of view, the project was a success.

However, from a business point of view, it was a failure.

The sign-up forms were very long (because the team had accommodated all the data requests from the business stakeholders), and many of the data field descriptions on the web forms were meaningless to consumers, because the team had applied the internal business jargon, e.g using &#8220;point of sale&#8221; instead of &#8220;country&#8221;.

The service oriented architecture was based on SOAP messages, and provided admirable decoupling of the systems &#8211; but was also rather slow; the front-end was not designed to work asynchronously, so to the consumer, it often felt unbearably slow.

Finally, there were many small user interface problems &#8211; none of them significant in their own right, but collectively, they made the sign up process feel clunky.

As a result, the sign-up rate declined after the site went live.

Whilst the narrow business goal was indeed met &#8211; what data was collected was of a higher quality than before &#8211; the wider business goals suffered.

I watched this from the sidelines &#8211; my project was going to use the new eCRM solution to manage authentication and authorisation &#8211; but I couldn&#8217;t help thinking that someone in that project should have taken a moment to think about the product, rather than trusting blindly in the process.