---
id: 176
title: Serverless is (mostly) about money.
date: 2019-03-08T16:10:12+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=176
permalink: /2019/03/08/serverless-is-mostly-about-money/
---
I&#8217;ve been working on software projects for a living for 30 years. In 1989, I worked on a COBOL application which managed orders, production schedules, billing and payroll for a manufacturing company. Then I worked on a client-server project for professional service automation; next came a range of web projects, along with mobile, video, and VR/AR, and data applications. 

The overwhelming trend over that time is that the proportion of effort expended on domain-specific code has increased dramatically, and the cost of infrastructure capital investment has mostly been replaced by pay-as-go cost.

The latest phenomenon that&#8217;s about to break through into the mainstream is serverless. The definition is a little bit open to interpretation, but [this](https://martinfowler.com/articles/serverless.html) is probably the best I&#8217;ve seen.  
The concept is broken down into two parts: &#8220;Backend as a Service&#8221; (BaaS) provides functionality to applications on a per-use basis &#8211; it&#8217;s a little hard to say exactly where the boundaries lie, but in principle the commercial trade off is &#8220;do I invest effort building feature x, or do I pay on a per-use basis?&#8221;.  
The second type is &#8220;Function as a Service&#8221; (FaaS) &#8211; developers write code, and the service provider runs it in the location determined by the commercial arrangement. Here the commercial trade-off is &#8220;do I invest in a hosting platform (which could be Cloud), which I manage myself, or do I pay a tiny amount every time the code runs, and let someone else sort out the hosting platform?&#8221;.

So why is that mostly about money?

Firstly, it (theoretically) reduces the cost of building solutions &#8211; you don&#8217;t have to worry about scaling, or availability, or anti virus, or back ups, or configuring the run-time for your application just so. More of the effort goes into the unique, special thing your solution does, rather than the plumbing that keeps it up and running.  
This is an ongoing trend, and &#8211; arguably &#8211; the biggest savings came much earlier, with Cloud, containerization and Platform as a Service. 

Secondly, you pay for what you use at a feature level, not infrastructure level. In most Cloud/PaaS models, you pay for running a process, whether it&#8217;s busy or not, and it is your job to figure out how many processes you need. In serverless designs, you only pay for running the feature you care about.  
This is a big deal &#8211; it reduces the fixed costs for building solutions even further. This changes the commercial model &#8211; the more cost you can move from &#8220;fixed and upfront&#8221; to &#8220;scales with use&#8221;, the easier it is to create a business case that works.

That&#8217;s because most organisations look at &#8220;return on investment&#8221; as a key metric for deciding whether a project will go ahead. They typically look for an RoI as a multiple &#8211; &#8220;every pound we invest will pay back x pounds over y years&#8221;. So, every pound you can shave off the upfront cost makes that return on investment calculation easier. This, in turn, makes more projects commercially viable.