---
title: 'Software teams - what does "good" look like?'
date: 2021-08-22T15:44:43+00:00
author: "Neville Kuyt"
layout: single

excerpt:
    When we look at software teams and the way they work, "good" can be hard to capture. Here's what it looks like for me.

---
# What does "good" look like?
A question I hear often from clients, colleagues and friends is "what does a good software delivery team look like?". This can feel a bit like football fans comparing players in their team with some Platonic ideal - "A decent goalkeeper would have stopped that!" -  (or, indeed, their grandmother) - "My nan could have scored that goal!". 
And while most fans would agree the primary purpose of a football team is to win competitions, they often talk about intangible aspects at least as much - "They have spirit", "They play entertaining football", "A real community club". 

Similarly, when talking about software teams, the primary purpose is pretty clear - deliver the software the organisation requires. It's harder to measure than "winning a competition" - is your team more or less efficient than your competitor? Is your quality higher or lower? 

And of course, we see [https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf](lots) of [stories](https://www.oreilly.com/library/view/software-engineering-at/9781492082781/) about [software teams](https://www.theguardian.com/technology/blog/2010/nov/22/facebook-developer-life-inside) in the big tech companies - as well as books like [https://www.goodreads.com/en/book/show/35747076-accelerate](Accelerate), which clearly shows how focusing on 4 metrics allows software teams to deliver value.

But - as ever - it's not straightforward. "Good" is a trade-off between many different dimensions.
I will discuss some of these below.

> When I talk about a "team" below, I am referring to a "2-pizza" size team of 6-10 people. So, in a team of 100 engineers, I'd expect to have 10-15 teams, and each would hit most if not all of the characteristics below.

# The dimensions

## Throughput
Throughput - the amount of software the team can deliver in a given time - is one of the biggest pain points for software teams. There is no consistent way to measure this dimension - "story points per sprint" is intended to help the team improve the accuracy of estimating, not as an objective evaluation criterion. I've seen teams "optimize" this metric simply by estimating more points for a given piece of work.
### Time to value beats throughput
Often, when I ask business stakeholders about their perception of throughput, they say things like "We prioritized a straightforward change, and it took 6 months to be delivered". The [pedant](https://boards.straightdope.com/t/is-this-the-most-intellectual-joke-in-the-world/99894) in me immediatly jumps to "that's not throughput, that's flow". 
The other common complaint is something like "we've been working on this big project for ages now, and it feels like it will never be finished". That's much more about "time to value" and "alignment" than about the raw throughput of the team.

> #### Good throughput
> A "good" team delivers business value regularly, and quickly. Typically, this means new features are released every few weeks, and high priority requirements flow to production in weeks, rather than months. 

## Predictability
A closely related complaint is "we can't tell when things will be done. Everything seems to take much longer than we expect, and we don't understand why". 
This comes back to one of the problems with "Agile" - most organisations need some kind of bounds on the cost versus benefit of a project. "We don't know how long it will take" makes the cost denominator of the return on investment calculation unknowable. 
This becomes much more of a challenge when the team is signing up to "large" (> 6 month) commitments, or facing "large" (> 20%) variations in delivery costs. 
And as the organisation and its technology becomes more complex, teams become less predictable because they have to navigate dependencies at design, build and run time. "We can't finish our work until that team finishes theirs" can damage business confidence in the team.

> #### Good predictability
> Good teams make small promises, isolate themselves from dependencies, and build a steady "release to production" routine. 
> Nearly every "good" team I've seen in action routinely delivers to production several times per month. They tend to be fairly restrained with their delivery commitments, and focus heavily on isolating themselves from dependencies.

## Relationships and alignment
Software teams tend to be "different" to the rest of the organisation - even in technology companies. They tend to have a slightly different culture - I worked with a software team in a finance company where the developers wore hoodies, and everyone else wore a suit. They often have different jargon, and different peers. It's not uncommon for the software team to have career privileges the rest of the organisation doesn't - salary levels, for instance, may be higher.
It's also not uncommon for software teams to become a little isolated, or to think that every problem has a software solution. Individuals may appear arrogant, and people may start to focus on the behaviours of the team, rather than the outcomes - in one case, I had a client whose best engineer was put on a disciplinary program because they were routinely 20 minutes late into the office.

Another problem is that development teams may drift away from the overall organisation's priorities. In one case, I saw a development team in a struggling retail company embark on a large-scale, strategic re-architecture programme, while the rest of the business was cutting costs, and desperately looking for ways to survive. The re-architecture was justified and necessary - but the timing was terrible.

In a positive example, one client had a weekly team update where they linked the previous week's commercial performance with work done by the teams - "New feature X resulted in a 3% uplift in metric Y".

> #### Good alignment
> Good teams maintain a link between the organisation's priorities and their own roadmap. They can explain how they contribute to the mission, and maintain good personal relationships with key stakeholders.

## Quality
The next dimension is "quality". A "good" team delivers software with "good" quality. "Good" is relative - a pacemaker has different quality goals than a casual mobile game. But when business stakeholders complain about quality, it's often framed as a very specific, long-running complaint. In one case, the client complained that the website "has always been slow". Everything else was great - but the site performance was a bug bear. The team had worked on it, but not given it enough attention. In another case, the team had let a bug slip through to production which caused a small number of orders to be priced incorrectly - the team had noticed and fixed the defect within hours, but the press had got hold of it, and the business was acutely embarrassed. 

> #### Good quality
> Good teams deliver good quality - but they pay special attention to the issues the business stakeholders care about most.

# Time - past, present, (unknowable) future
The most important thing about "good" is that you can't get there in one go, and that it doesn't stay the same over time. Some of the best teams I have worked with started out...well, not quite so good. 
The single most important aspect of "good" is the ability to learn and improve over time.

At one client, there was an "exemplar" team. They'd been established early on, as a way of demonstrating "what good looks like". The team lead was great - considered, experienced, pragmatic. The engineers were all very experienced, and worked well together. They released their first feature to production after just 6 weeks, and their product area had terrific feedback - and the business stakeholders loved working with them.

After a few months, though, the client said they wanted to "shake up the team". They'd been doing great work, made many incremental improvements - but the other teams had caught up, and they'd gone from "exemplar" to "middle of the pack". 

> #### Good teams keep improving

Sustainable, consistent improvement is hard. The good teams I have worked with have managed it - usually by focusing on making one change at a time, based on empirical feedback, and keeping that routine going over months and years.