---
id: 162
title: Artificial Intelligence, Big Data, and story-telling apes
date: 2018-01-25T15:02:16+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=162
permalink: /2018/01/25/artificial-intelligence-big-data-and-story-telling-apes/
---
I&#8217;ve been reading, and focusing on AI. In the fiction area, <a href="https://www.amazon.co.uk/gp/product/1785151274/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=1785151274&linkCode=as2&tag=kuytcom-21&linkId=ff65ce152a4e86cb3f1b6b59ef1a7ff9" target="_blank" rel="noopener">Gnomon</a><img loading="lazy" style="border: none !important; margin: 0px !important;" src="//ir-uk.amazon-adsystem.com/e/ir?t=kuytcom-21&l=am2&o=2&a=1785151274" alt="" width="1" height="1" border="0" /> is a complete mind-melt. One of the many premises of the book is that a &#8220;system&#8221; will run society. <a href="https://www.amazon.co.uk/gp/product/0857664719/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0857664719&linkCode=as2&tag=kuytcom-21&linkId=4188847b668562cd89112cd8c3596c06" target="_blank" rel="noopener">If Then</a><img loading="lazy" style="border: none !important; margin: 0px !important;" src="//ir-uk.amazon-adsystem.com/e/ir?t=kuytcom-21&l=am2&o=2&a=0857664719" alt="" width="1" height="1" border="0" /> takes it a step further, positing a system that runs multi-variate testing on communities to optimize itself.

In the popular science range, the best description of AI I&#8217;ve found is <a target=&#8221;\_blank&#8221; href=&#8221;https://www.amazon.co.uk/gp/product/0141979240/ref=as\_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0141979240&linkCode=as2&tag=kuytcom-21&linkId=d330230d01aa2851262ec78dac65513e&#8221;>The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World</a><img src=&#8221;//ir-uk.amazon-adsystem.com/e/ir?t=kuytcom-21&l=am2&o=2&a=0141979240&#8243; width=&#8221;1&#8243; height=&#8221;1&#8243; border=&#8221;0&#8243; alt=&#8221;&#8221; style=&#8221;border:none !important; margin:0px !important;&#8221; /> &#8211; an intelligible history of machine learning and AI.

I listened to this [You Are Not So Smart podcast](https://youarenotsosmart.com/2017/11/20/yanss-115-how-we-transferred-our-biases-into-our-machines-and-what-we-can-do-about-it/) on how biases are baked into AI, and what we might do about that.

And most recently, I&#8217;ve read [this](https://arxiv.org/pdf/1703.02596.pdf) description of an online retailer&#8217;s efforts to predict whether a user will be profitable, based on all the attributes that retailer knows. It&#8217;s probably the state of the art in this sort of thing &#8211; it&#8217;s a fairly general problem, there online retailers have lots of data, and getting it right has big financial pay-offs. Instinctively, it feels right &#8211; a shop keeper recognizes signs that a customer might spend a lot of money, and knows that treating high value customers better will make them even more valuable. Though they get it wrong &#8211; remember the scene in Pretty Woman? A sex worker, acted by Julia Roberts, goes into an expensive boutique, and the shop assistants size her up and discourage her from shopping there; it&#8217;s only when the sex worker&#8217;s client (Richard Gere) shows up and they recognize his spending power that they treat her like a valued customer.

<figure style="width: 640px" class="wp-caption alignleft"><img loading="lazy" class="size-medium" src="https://atypified.files.wordpress.com/2014/05/pretty-woman-shopping-scene-2.jpg?w=640" alt="Pretty woman shop scene" width="640" height="342" /><figcaption class="wp-caption-text">Pretty woman shop scene</figcaption></figure>

The fun bit is to see how hard this problem is, and how the economics work.

The paper describes a few ways the retailer has approached the &#8220;how can we predict the value of a customer&#8221; question. They&#8217;ve created over 130 different attributes, and looked for which ones were most predictive. Those 130 attributes sound like a lot &#8211; but many of them are really simple, like &#8220;how many orders have you placed&#8221;, &#8220;how often do you place orders&#8221; etc. And with those 13o attributes, they get fairly good results &#8211; around 75% accurate.

The second part of the paper describes how they&#8217;re trying to include &#8220;self-learning&#8221; algorithms, that look at all of the data they have, and use it to create a better prediction. The website tracks everything you do &#8211; surely, there must be a correlation between looking at certain products and spending more money (there is) &#8211; so how do you let the algorithm work that out?

It turns out to be possible, but the cost of training the system to find these behavioural correlations on fast-moving product catalogues is high &#8211; and with AI, that cost is often measured in money, not just time.

What does that mean?

It means that the AI would apply a statistical model to Julia Roberts&#8217; web traffic, and unless she matches one of those 130 attributes they use to predict her life time value, the AI would assume she&#8217;s &#8220;just another customer&#8221;. However, if she then browses the expensive, high-fashion dresses category and spends a lot of money, the AI would not learn that customers who look at expensive, high-value customers are likely to spend a lot of money.

Why is this interesting? Because a state-of-the-art machine learning system, with significant commercial incentives, cannot economically learn to identify behaviour triggers without human intervention.

It boils down to &#8220;using traditional methods, we can consider perhaps a handful of attributes to predict your lifetime value. Current machine learning allows us to expand that to hundreds of attributes. But to learn from the thousands of subtle clues each of us leaves is currently orders of magnitude too hard&#8221;. It&#8217;s the difference between categorizing you by crude methods, less crude methods, or treat you like an individual.

And this brings me to the second topic here &#8211; human intelligence is very much tied up in story-telling. Sure, humans can manipulate symbols and abstractions, and use formal logic to prove or disprove things. But explaining phenomena in the real world is largely story telling. There&#8217;s an example I read somewhere about a finance editor on the TV news explaining the stock market behaviour, and using exactly the same underlying fact to explain opposite trends &#8211; something like &#8220;positive figures on the labour market lead to higher stock prices as the market anticipated stronger consumer spending&#8221;, and &#8220;positive figures on the labour market lead to lower stock prices as the market anticipated a rise in interest rates to curb inflation&#8221;.

If you read the academic paper on customer lifetime value prediction, the authors do some story telling &#8211; &#8220;it makes sense that high value customers look at the more recent products, because they are more fashion conscious&#8221;. Story telling apes observe things in the world &#8211; the rising of the moon, an erupting volcano, a pattern in the data &#8211; and we tell stories to explain those things. As we&#8217;ve built better models of the world, the stories have become more accurate (and therefore more useful); many stories have become quantifiable and predictable &#8211; we no longer believe the sun rises because a deity drags it across the sky on a chariot; instead we can calculate to the second what time the sun will rise thanks to Newton&#8217;s formulae.

So what is the point of this long-winded musing?

Whilst ecommerce sites are non-trivial, they are certainly not the most complex system you might imagine when considering the uses of artificial intelligence. And they have relatively clear outcomes, within a meaningful timeframe &#8211; you buy something or you don&#8217;t, and you usually do it within a fairly short time of visiting the site. And even at this scale, we struggle to identify actions that correlate cleanly with the outcomes using current machine learning techniques. We need story-telling apes to at least identify hypotheses for the A.I. to test.

If you try to expand the scope of AI to &#8220;look at human behaviours, and anticipate health outcomes&#8221;, or &#8220;anticipate criminal behaviour&#8221;, or &#8220;anticipate political choices&#8221; &#8211; we&#8217;re still a long way off.

&nbsp;