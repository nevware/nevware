---
title: '"Estimating is hard. Maybe impossible. So we must do it."'
date: 2023-02-02T15:44:43+00:00
author: "Neville Kuyt"
layout: single

header:
  image: /assets/images/future.jpg
  teaser: /assets/images/future.jpg

excerpt:
    Estimating software projects accurately is hard - especially when the project is poorly understood. And yet, it's often unavoidable. Here's a process I've used to break through that deadlock

---

# Why estimate?
Software estimating has been a challenge for as long as I remmeber. At the beginning of my career, we used [CoCoMo](https://en.wikipedia.org/wiki/COCOMO) and [function point analysis](https://en.wikipedia.org/wiki/Function_point) - rigorous, evidence-based methods that nevertheless rarely yielded "accurate" estimates.

Since then, there's been a lot of thinking/writing, especially in the context of Agile. Some people say [it's a delusion](http://www.ines-panker.com/2020/11/04/estimation-is-bs.html), or [fraught with challenges](https://mdalmijn.com/p/11-laws-of-software-estimation-for-complex-work). Mike Cohn wrote a [great book](https://www.mountaingoatsoftware.com/presentations/agile-estimating) on the topic.

But whether we like it or not, those who pay for the software will want to understand what it will cost, before they release the funds.

That's the paradox. Most people I've worked with agree that estimating is hard or impossible. But in order for the work to go ahead, we need an estimate.

# The cone of uncertainty.

This problem tends to be biggest right at the beginning of the project/product. There's an idea or a hypothesis, and some degree of confidence it will be valuable - sometimes described in financial terms, sometimes just as a broad outline.

So, the first question becomes "I have this idea, I think it's valuable, what would it take to bring it to life?". Often, the next step in that process is to flesh out the idea - to imagine what the interactions would be, what it might look like, how it would work. And then you have to figure out what it would take to build the idea.

And this is where you run into the [cone of uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) - early in the lifecycle, there is so much uncertainty that any estimates are likely to be based on missing or inaccurate information. You don't know what you're building, who's building it, what constraints they are working under, you don't know what's going to go wrong - or what's going to go better than expected.

And yet, in order to make progress, you have to allocate resources - people, money, attention.


# Turning the Return on Investment (ROI) conversation upside down.

So, how do you come up with even a broad outline of the cost (in time, people, money or whatever) at this stage?

I like to use a simple framework for evaluating ideas - [Marty Cagan's 4 attributes of risk](https://www.svpg.com/four-big-risks/).
The idea is that you take each feature making up the bigger idea, at a fairly coarse level, and score them on 4 attributes:

1. #Value# - will this bring value to users? If it's a commercial product, would they pay for it?
2. #Usability" - can we make this something users can interact with, ideally with some degree of joy?
3. #Feasible# - do we know how to build this?
4. #Viable# - will this align with the organisations goals and constraints?

The trick is to find the area where those for attributes overlap - that's the subset of ideas that have value to users, will be usable, make business sense, and can be delivered.

Here's an example from a (long-since defunct) start-up I worked for. It was an ecommerce site, selling custom framed prints online. We had thousands of ideas, ranging from obvious "must-haves" like a product catalogue, basket and checkout, to some fairly wild and exciting options like a virtual art gallery with digital sales people.

Here's how we started figuring out our product strategy. This is an abbreviated form - there were about 20 ideas - and we spent an afternoon working on the evaluation between business, technology and design.

| **Idea**                  | **Valuable** | **Usable** | **Viable** | **Feasible** |
|---------------------------|--------------|------------|------------|--------------|
| Product catalogue         | 10           | ?          | 10         | 10           |
| Visual preview of product | 10           | 8          | 9          | ?            |
| Basket                    | 10           | 7          | 10         | 10           |
| Checkout                  | 10           | ?          | 10         | ?            |
| Virtual gallery           | ?            | 8          | ?          | ?            |
| Rich product content      | 8            | 10         | 4          | 6           |

We could see immediately that there were some ideas with question marks - we simply didn't have enough information to even guess. Our designer was concerned about the usability of the product catalogue - how could we help customers chose between the hundreds of thousands of products we had? For the "visual preview", we weren't sure how to build it - there were several options, but none looked like a great match. Checkout was complex because shipping options were an important consideration, but both the design and tech team needed more information in order to figure out how to make it work. The Virtual Gallery idea had a clear design approach, but our business stakeholders weren't really sure if customers would value that feature, and the technical feasibility was unclear.

This exercise was quick, and we avoided diving into detail - the goal was to get through the list, so we knew where to focus our attention. We agreed collectively that the Virtual Gallery idea was a "not yet" concept. We agreed that the design and tech folk would work together on the checkout process to investigate options and find a workable solution - the value and viability were obvious. Finally, we agreed that the tech team would look at ways to deliver the "visual preview" function.

For areas where design _and_ technology had given high scores for usable and feasible, we asked both teams to break down the idea to specific features - this ensured we didn't have big misalignments. Each idea broke down into 6-10 features - so again, these were fairly quick conversations.

At this point - after spending hours, _maybe_ days, but certainly not weeks, you should have a broad outline of the big ideas, and the way they break into features. Can you estimate against this? Well, you can try - and there's certainly value in the discussion. But the estimate's accuracy is unlikely to be high.

Instead, I'd rephrase the question. Instead of asking _"What will it take to deliver this idea/feature?"_, which suggests a degree of accuracy you can't deliver at this point, you should ask _"What level of effort gives us a better than evens chance to deliver this idea/feature"_. Why is this better? Because you can answer this question much more quickly - by accepting the 50% error margin, you're accepting the uncertainty. You avoid the urge to investigate every single edge case, and you can move much faster. When someone asks "What about ....", you can find out if it makes a material difference to that 50% margin - in most cases it doesn't, and you can move on.

The output of this process is a list of product ideas and features, with a "better than evens" estimate. For our ecommerce start-up, this process took about a week. But "better than evens" is not good enough - so we multiplied every estimate by a "risk factor". We were pretty confident we had to deliver _all_ of the features in order for the solution to be viable, so we didn't want to risk any single feature blowing the budget - so our risk factor was high (we tripled the estimates). Your risk appetite may differ!

At the end, we had enough information to agree on the return on investment for each idea/feature.

We categorized them into 4 groups: "obvious wins" (high value, low cost), "hygiene factors" (high value, high cost, enabled core proposition), "obvious nos" (low value, high cost), and "further investigation".

This was enough to secure our funding, and start work. We didn't need to go into complicated work breakdown processes.

# Estimates as non-functional requirement.

So, that's great - we had a shared understanding of what we were building, and had a (very) rough estimate of the effort required. We started work (lots of other things had to happen, like building a team etc. - that's a story for another time!), and - as always - found out that our "estimates" were....wrong, even after we'd tripled the "better than evens" estimate. Or rather, we found that when we looked at individual features in detail, we uncovered different amounts of work than fit in the estimates. Some features were _much_ easier than we'd expected, some much harder. The variance had many causes - sometimes, we'd just not understood the complexity. In some cases, the design folk came up with a _much_ better option, that was harder to build.

The solution to this was _not_ to re-do the estimates. It was to treat the estimate as a [non-functional requirement](https://en.wikipedia.org/wiki/Non-functional_requirement) in the delivery process. So, rather than asking the team to design the best possible implementation of the idea (in all senses - user experience, visual design, technical design), we asked them to design the best possible implementation that _fit within the estimated budget_.

This is, of course, difficult - how can a visual designer assess the implementation cost of their work? How can a software engineer stick to a budget in the light of all the uncertainty they face? The good news is that while it's difficult, it's _much_ easier than estimating accurately far in advance of having the detail. Generally, it's easier to estimate small-ish pieces of work (features, epics) than estimating an entire application.

We also had teams work together during the design phase - visual designers, engineers, testers, product folk all collaborating on finding solutions that _fit in the budget_. This collaboration was incredibly powerful, and as the team built relationships and momentum, they squeezed a lot of functionality out of the time they had available.

# Handling the unexpected.

Of course, there are cases where you simply cannot fit the work in the estimate - at least not without affecting usability or value. We handle that in the same way as many other non-functional requirements. When the team couldn't figure it out, we had a review meeting where the team presented the options, and we collectively agreed which option we'd ask them to pursue. Sometimes, the option was "spend more time/money" - but sometimes, it was "reduce functionality", or even "leave the feature out".

This is not a magic bullet - but it makes the decisions explicit and transparent, and it takes the responsiblity away from the team.

# So, what's an estimate anyway?

Our approach was not perfect - in some cases, we really did get it dramatically wrong in the up-front scoping, and even after we'd agreed to change the boundaries, the team took longer than the estimate (and re-estimate). But there were very few surprises, and overall we came in within the budget we'd set.

So, the way I see estimates is not "what will it take to deliver this idea/feature/change?". My way of looking at estimates is "how much time and resources would give us a reasonable chance of getting this idea/feature/change done?".

This changes the emphasis from expecting certainty and perfection, and acknowledges you're trying to assess chances, rather than certainties.
