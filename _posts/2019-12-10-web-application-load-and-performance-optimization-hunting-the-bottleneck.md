---
id: 224
title: 'Web application load and performance optimization &#8211; hunting the bottleneck.'
date: 2019-12-10T20:35:00+00:00
author: "Neville Kuyt"
layout: single
guid: http://www.kuyt.org/?p=224
permalink: /2019/12/10/web-application-load-and-performance-optimization-hunting-the-bottleneck/

header: 
  image: /assets/images/bottleneck.png
  teaser: /assets/images/bottleneck.png

---
The Internet is fun. &#8220;How many users do we need to support?&#8221; is a question I have heard hundreds of times, and nearly always, the answer is &#8220;I don&#8217;t know&#8230;.&#8221;. I worked on a project for a well-known reality talent TV show; we were building their very first &#8220;vote on the web for who you want to remain in the competition&#8221; solution; when we asked about how many users we had to support, the answer was &#8220;last year, we jammed the telephone system on the US East coast&#8221;. 

That, of course, is an extreme. But for any non-trivial web application, load and performance testing is unavoidable. And my approach has always been to figure out at which point we think the application starts to break its acceptable response times. Measuring response time is a tricky subject in its own right, but I typically use time to first byte and time to last byte as the guides.

**Time to first byte** (ttfb) measures the time between the user asking for a resource (typically a web page) and the server sending back the first bit of the response. This should typically be less than 1 second, and ideally less than 500 milliseconds. For the purposes of this blog post, I&#8217;ll go with 1 second for all responses.

**Time to last byte** (ttlb) measures how long it takes for the server to complete a response. This is much more subjective, as the application may appear responsive to the end user even if the server hasn&#8217;t completed its response, but the process of returning the response consumes (scarce) resources on the server, so typically I look for less than 2 seconds

So, the first step is to create a test suite that will exercise the application so we can find out at which point it exceeds the goals for ttfb and ttlb. 

There are typically two major decisions to make here: 

  * How do we create a credible traffic profile for the test?
  * On which infrastructure do we run the test?

This leads me to my first mind shift.  
**We are not trying to predict how many users we can support. We are trying to understand how and when our application will break**, **under realistic circumstances.**  
We can then offer options to move the point where the application &#8220;breaks&#8221; &#8211; bigger or more hardware, architectural changes, etc.

So in the early phases, &#8220;realistic traffic&#8221; is not our goal &#8211; our goal is to cover the application&#8217;s major features and see how they hold up under load. For instance, in an ecommerce application, you may believe that &#8220;typical&#8221; traffic will browse 100 pages for every check-out action &#8211; but if your load test reflects that, and you get a sale which is hugely popular, your check-out may break. Much better to figure out at which point each major feature breaks, so you can decide how to mitigate that.

My general approach is to create load tests that don&#8217;t create artificial challenges &#8211; for instance, instead of unleashing every test request at the same second, ramping up over time so the application server can warm up &#8211; but I don&#8217;t stress too much about reflecting &#8220;real user traffic&#8221;. I typically split the test cases into the major user journeys, and run the same number of each journey. 

Similarly with the infrastructure &#8211; to begin with, you don&#8217;t need &#8220;production-like&#8221; infrastructure. You want to be able to experiment, quickly and easily, with infrastructure options so you can figure out where the problems and opportunities are. This usually means a relatively simple test system which can be reconfigured quickly and easily &#8211; adding more instances, or increasing the sizing of an specific instance.

## Nev&#8217;s first law of performance and scalability optimization

Your job is to find the bottleneck, and then to find out how to move it to the right.<figure class="wp-block-image size-large">

<img src="http://www.kuyt.org/wp-content/uploads/2019/12/Bottleneck-2.png" alt="" class="wp-image-236" /> </figure> 

The diagram above shows a typical response time curve for a web application. As the number of concurrent users increases, response times go up slowly (linearly, or close); then, at some point, you see a sharp upward spike. That&#8217;s where you encounter the bottleneck.

The job is to figure out what causes the bottleneck, and move that point to the right:<figure class="wp-block-image size-large">

<img src="http://www.kuyt.org/wp-content/uploads/2019/12/bottleneck_right-1.png" alt="" class="wp-image-231" /> </figure> 

How do you do that? You add monitoring to the application, and figure out what the bottleneck resource is. My preferred route is to use a simple process: <figure class="wp-block-image size-large">

<img src="http://www.kuyt.org/wp-content/uploads/2019/12/test-cycle.png" alt="" class="wp-image-232" /> </figure> 

**Hypothesis:** It&#8217;s important to test one thing at a time, so you can isolate different cause and effect sequences. Reaching a hypothesis depends heavily on having data to analyze (which is why this is a circular process), but you have to start somewhere. Let&#8217;s say your best guess is &#8220;the slowest feature on our web application is signing up new users. Our hypothesis is that this is caused by slow database queries.&#8221;

**Test plan:** Before you start optimizing your database, you should verify that this is, indeed the case. There are much easier ways to verify that this is the database than going for full-on database optimization &#8211; for instance, you might stub out the database calls for the relevant functions. You&#8217;re looking for the quickest and easiest way to (dis) prove your hypothesis, you don&#8217;t want to fix the application.

**Test execution:** Instrument the application so you can verify your hypothesis, and build the instrumentation that allows you to measure whether your hypothesis is correct.  
At the very least, this requires you to have a baseline to compare against, so if this is the first time around the loop, run a load and performance test without any changes. If you&#8217;ve already got test runs, select the one which will form the baseline &#8211; usually, the last test which gave you the best result.  
You will also need response times &#8211; most load testing tools provide these in neat dashboards.  
Often, you&#8217;ll need to monitor application or infrastructure level metrics &#8211; &#8220;time spent running query&#8221;, &#8220;memory in use&#8221;, &#8220;number of waiting requests&#8221; etc. Pull those into a dashboard you can observe while running the tests, and log files which you can analyse

**Analysis:** Once you have executed the tests, the first question is &#8220;did the bottleneck more right?&#8221;. The second question is &#8220;how confident am I it moved because of the changes we made?&#8221; &#8211; sometimes, especially when the application has lots of complex dependencies, that&#8217;s a hard question to answer. If you have any doubts, re-run the test. During the early analysis phase, relatively short tests (1 hour or less) are much more useful than long-running tests.  
Make sure that the metrics you are collecting are useful in assessing whether the bottleneck is being hit.

Once you confirm a hypothesis about the performance characteristics, you may want to run a second experiment to see how realistic it is to reduce that bottleneck. For instance, if you know that database time is a big challenge, it&#8217;s not realistic to pretend &#8220;we&#8217;ll never talk to the database&#8221;, which is what stubbing that code out does. Instead, you might invest 1 day into database optimizations, and limit your performance test to the area you&#8217;ve managed to improve in that day. Don&#8217;t try to optimize everything &#8211; do enough work to allow you to prove that database optimization is a credible strategy.

## Nev&#8217;s second law of load and performance optimization: run at least one hypothesis per day for several weeks.

For any non-trivial application, you&#8217;re likely to face several bottlenecks, and some of those will be entirely unexpected. One large-scale project we were running had a load-balancer as the bottleneck &#8211; nobody expected it, and we&#8217;d never have found it if we hadn&#8217;t kept running load tests to find the mysterious bottleneck.

Getting in the habit of running at least one experiment every day forces you to automate your testing, your infrastructure and your deployments; you would have done this anyway, right? But it also forces you to invest in instrumentation and operational transparency &#8211; dashboards, log analysis, warning mechanisms. 

Your goal at the end of this process is to be able to say:  
  
_We&#8217;ve tested 20 different hypotheses on load and performance. This has shown that our application can sustain traffic up to x without breaking the response time goals; the bottleneck is y, and moving that bottleneck would require z._

How do you get from your load and performance tests to &#8220;traffic up to x&#8221;? It&#8217;s an inexact science, and you may need to add some assumptions:  
  
_Our model assumes that users will behave in the following way (&#8230;). If users instead do (&#8230;), the traffic number reduces to (&#8230;)._

This allows the business stakeholders to plan &#8211; if your application is especially sensitive to performance problems with &#8220;authentication&#8221;, they might hold off on a big &#8220;get new signed-up customers&#8221; marketing campaign.

## Nev&#8217;s third law of load and performance engineering: build your load and performance metrics into your operational dashboards

No matter how good your testing is, once you go into production, you&#8217;ll get surprises. The one thing worse than having your website going down is to not know about it until customer service phones you out of bed; the next worst is to have to figure out, retrospectively, what happened without having the tools and data that will help you avoid that next phone call.

So, when you run your load and performance tests to (dis) prove your hypothesis, make sure that the metrics you collect to figure out if you&#8217;re correct are built into the operational observability stack, and ideally glue them into a dashboard &#8211; you can always remove them if they turn out to be a red herring.

This is one of the best ways to make sure that on go-live, your application is providing a reasonable set of metrics to allow the operations folk to keep on top of things.

## So, now what?

After you&#8217;ve proven or disproven 20 or so hypotheses about the performance characteristics of your web application, you should have a pretty good understanding of where the bottlenecks are, and what you can do to move them towards &#8220;more concurrent users&#8221;. This doesn&#8217;t mean you can guarantee how many users your application can support, or that you can predict what will happen on unusual days like Black Friday. And that, of course, is what the commercial expectation is &#8211; the business folk want some degree of certainty, and that&#8217;s not unreasonable &#8211; every customer who sees a &#8220;site too busy, try again later&#8221; represents a loss of revenue.

The way I like to work with the business is by comparing the exercise with buying insurance &#8211; you don&#8217;t know how likely it is that your house will burn down, but you spend money on insurance anyway. The amount you&#8217;re willing to spend depends on your personal assessment of risk, the amount you&#8217;d stand to lose, and the amount you&#8217;re willing to spend to mitigate that loss. If you think the premium is too high, you might buy fire alarms, or sprinklers to reduce the risk.  
Load and performance testing give you an indication of how likely it is you&#8217;ll run into trouble, but no absolute certainties. By executing your hypotheses, you&#8217;ve made sure you are unlikely to crash and burn under light load, and you should have a number of steps you can take &#8211; &#8220;if we optimize the database code, we can move the bottleneck up by x users; we think we need x days to achieve this&#8221;. You should also have a set of metrics that allows you to say &#8220;we will know when the application is close to reaching its bottleneck&#8221;.

## But I want a guarantee!

If you want to guarantee your house will never burn down, you spend a lot of money &#8211; you buy all the houses in the neighbourhood and knock them down to create a firewall, you have redundant water supplies and your own fire truck and crew &#8211; you get the idea. The cost of the &#8220;fireproof house&#8221; is many times that of a house with a low risk of fire.

If you want to guarantee your site will not buckle under load, you spend a lot of money on over-provisioning infrastructure (even if you&#8217;re hosting in the Cloud, auto-scaling will not save you from temporary problems), and you build complex architectural solutions to remove potential (but unproven!) bottlenecks. The cost of these steps will be a multiple of a site that will _probably_ be OK.