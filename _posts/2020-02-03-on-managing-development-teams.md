---
id: 198
title: On managing development teams.
date: 2020-02-03T14:49:10+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=198
permalink: /2020/02/03/on-managing-development-teams/
header: 
  image: /assets/images/team-teaser.jpg
  teaser: /assets/images/team-teaser.jpg
---
## **Favour** l**earning over fixing**. {#Favour-learning-over-fixing}

<p class="has-drop-cap">
  Most software projects encounter lots of &#8220;problems&#8221;. Bugs, production issues, team members not getting on, external dependencies failing &#8211; it can often feel like a constant stream. In my first team lead role, I insisted on &#8220;fixing&#8221; all those problems. I jumped from one crisis to the next &#8211; and in some weird way, I enjoyed it. Being &#8220;busy&#8221; meant I was adding value, protecting the team, moving the project forward! But it became clear that I was becoming the bottleneck. I was training the team to push all the &#8220;problems&#8221; to me, and they were just getting on with their day job. <br />I had this epiphany one afternoon, when I was trying to figure out a particularly complicated database design problem, and one of the team members told me she needed to take a few days off work to deal with a family problem and asked me when she could do that; at the same time a new member of the team messaged me to say he was blocked because he couldn&#8217;t get into the source code repository. It felt like I had somehow become the only person who could solve problems.<br />So, instead of &#8220;solving&#8221; all the problems, I started to spend time with the developer who had the database design problem, and helped him think through the options; once he had a clear idea, he validated it with the rest of the team, and implemented it. I worked with the developer who wanted time off to figure out how her work fit with the next milestone, and what would need to be done before she could take time off. I reminded the new developer of the &#8220;readme&#8221; files we&#8217;d gone through.<br />Since that epiphany, I&#8217;ve resisted the urge to &#8220;fix&#8221; problems. Nev does not scale.
</p>

## Fix the right problems.  {#Problems-are-the-day-job}

Once I found a way of extricating myself from the low-level problems, life got more interesting. I soon realized that I&#8217;d been so focused on fixing the team&#8217;s problems and shielding them from disruption that I&#8217;d missed the bigger challenges. The team was making progress, improving output, gradually building trust with our business stakeholders &#8211; but some of the pressures I&#8217;d tried to keep away from the team reflected serious business problems. In simple terms, we&#8217;d overspent our budget, and the board was not inclined to give us more money. This meant the project was likely to have to reduce in size, and that would mean half the team losing their job.  
This was a much bigger risk than a suboptimal database design &#8211; and I&#8217;d been ignoring it. Worse, I may have made it worse by trying to deflect the budget questions from the team. As a result, I made a checklist.

  * Where is the money for the project coming from? 
  * How much confirmed budget is left?
  * How long will it take to renew the budget, and how does that work?
  * Does the remaining budget cover the team for the expected duration?
  * Would an outsider, with no vested interests, continue the spend on the project?

I look through this check list every month or so &#8211; it&#8217;s in my calendar. It&#8217;s more important that I think about these questions than that I get the right answers every time.

## The right problem depends on what you want to optimize for.

So, how do you know what the right problem is for you to work on? Managing development teams is an endless series of trade-offs. Sure, everyone wants to hire the &#8220;best&#8221; developers, but also wants to pay &#8220;affordable&#8221; salaries. You want the team to &#8220;deliver value&#8221;, but you also want to keep down technical debt.  
A long time ago, I was the CTO of a scrappy ecommerce start-up. Our goal was simple: we had to launch our online store, and get enough paying customers to secure our next round of funding, by a certain date or we&#8217;d be out of business. The team was small, and freelance. We optimized for a handful of goals:  
&#8211; end-to-end, working code, deployed to production as quickly as possible  
&#8211; make sure the solution is secure and bug-free in the checkout and payment section  
&#8211; scale to hundreds of orders per day but no more  
These goals were obviously limited &#8211; by focusing our QA attention on just the payment and check-out process, we were ensuring we didn&#8217;t lose customers&#8217; money, but ideally we&#8217;d have spent time testing the basket, the product catalogue, the user interface on multiple browsers. By scaling to hundreds of orders per day, we risked having to rewite lots of features later when (hopefully) we&#8217;d have thousands of orders. There were no goals about improving team dynamics, continuous improvement, we didn&#8217;t put enough focus on many non-functional requirements.  
But broadly, I think our goals were right &#8211; the things you&#8217;d do for a long-term, strategic development team didn&#8217;t really apply to a start-up with a short runway.  
Similarly, I looked after a team for a more established professional service company, where our strategic success depended on keeping our team up to date with technology tools and processes &#8211; and we had to balance short-term project goals with long-term growth. Our goals were something like:  
&#8211; deliver a great project for our clients, within the commercial constraints  
&#8211; treat each project as a way to grow or learn  
&#8211; expose team members to new opportunities  
This created lots of interesting problems &#8211; the easiest way to deliver great projects is to use tried-and-tested team members, not someone who was learning. If we wanted to grow or learn from a project, it often meant taking risks &#8211; perhaps trying a new technology framework, or working with a new partner.

## You can only optimize for 3 things at a time.

And that might be a stretch. It might be better to pick just one or two. You want to get everyone in the team to work towards the same goals. That&#8217;s really hard to do; typically, it takes weeks or months to get the team to buy into the goals, weeks or months to really get that into the instinctive decision making, and weeks or months for the results to come through. So, it&#8217;s easier to find a single, big, unifying thought and drive towards that than picking 3 smaller improvements.  
I found this when I was looking after a development team that had run into trouble &#8211; after 6 months of development, they&#8217;d built a few standalone components, but nothing was wired together, and the client didn&#8217;t understand what we&#8217;d built or why. My boss asked me to help the team to get back on track; my first session with the key team leads went a bit like this.  
Nev: so, what&#8217;s the most important thing you&#8217;re optimizing for?  
Tech Lead: optimal use of this expensive CMS we&#8217;re using &#8211; it&#8217;s got lots of features, and the client expects us to use them all, even if they are overkill.  
Product Lead: seamless operation once we&#8217;re live &#8211; the client really wants everything to be fully automated.  
Design Lead: cutting edge visual impact, across all devices. Super smooth animations, ideally 3D.  
Delivery Lead: sticking to the budget and making sure the team is working hard.  
CMS Lead: scalability &#8211; some of the features we&#8217;re using could really hurt performance and scalability.  
Subject Matter Expert: we&#8217;ve got lots of product catalogue detail, and we owe it to our users to show it all.  
QA Lead: automated testing, there&#8217;s too much content and data to verify manually.  
All those priorities were right in their own terms &#8211; but by trying to do them all, we&#8217;d lost sight of the most important goals: building and retaining trust with the customer.  
My next conversations were with the customer &#8211; they worked for a business famous for quality and rigour. But their approach was incredibly pragmatic &#8211; the most important goal for them was to be able to work to a credible deadline, and a predictable budget. They were happy to trade features and polish to get to those goals, but they wanted to see regular evidence that we were moving in the right direction.

So, together with the team, we set as our goal &#8220;rebuild trust with the client&#8221;, and we optimized for (I&#8217;m becoming repetitive) frequent delivery of software with a known quality, demonstrating progress towards the overall deliverable.

The problem was that in optimizing for half a dozen different (sometimes conflicting) priorities, the team was missing them all. In my experience, the very best teams in the very best circumstances can optimize for 3 things. Most teams should focus on just one &#8211; and it&#8217;s nearly always &#8220;frequent delivery of valuable software&#8221;.

## People over process, architecture or anything else.

I often joke about my role being about &#8220;people tetris&#8221;. Finding the right people to work on the right project has been the biggest leaver I&#8217;ve found. The important aspect here is that it&#8217;s not the people who are &#8220;right&#8221; or &#8220;wrong&#8221; in general &#8211; but they may not be right for a specific project. 

I wish I could formulate how to find this mysterious rightness. I&#8217;ve had a fair amount of success putting teams together, but I don&#8217;t know if that was luck or judgement. A few heuristics:

  * Availability is not a skillset. Don&#8217;t put people onto a team just because they happen to be available.
  * The more visible the person is within the team, the more attitude matters. Having a grumpy scrum master or product owner will affect the entire team.
  * Figure out the overall behaviour/culture/attitude you want to build and don&#8217;t bring people into the team who don&#8217;t fit or can&#8217;t adapt, no matter how good their skills.
  * Look for balance &#8211; if you already have a perfectionist, look for a pragmatist.

Running engineering teams is hard &#8211; but the time you spend talking to the engineers and leads has huge impact. Look for opportunities to celebrate success publicly; discuss failures in private.