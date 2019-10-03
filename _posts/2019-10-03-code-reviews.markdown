---
layout: post
title:  "My Code Reviews"
date:   2019-10-03 10:23:57 -0600
---

I enjoy giving code reviews, as I think it’s one of the best ways to learn and teach in our industry. I know that you may not feel quite the same, so I’m including a decoding guide so you (hopefully) have a clear sense of my intention behind any comments, and know exactly which require action. 

Decoding my comments:
* `JPT`/`KPT` prefixed messages are for java/kotlin protips. Functionally the same code, but just some tips and tricks I’ve picked up over the years of ways to write clean, maintainable code. Often this guidance is lifted from the pages of [Effective Java](https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997) my java bible. I put them here to help teach, but feel free to ignore if you prefer. I’m also happy to discus the merits of my suggestion offline, just ping me!
* `PQ` prefixed messages are my personal questions. I want to learn from things you’ve written so these are simply for my knowledge and understanding. I’d love a comment with your answer or feel free to follow up offline, but it’s not the highest priority, so also feel free to ignore if you’re busy and in a hurry.
* `NIT` prefixed messages are for the small little details I notice. I’d prefer them to be fixed if you’re already in the code responding to other comments, but if not, no sweat, feel free to :shipit:
* Messages with questions without any prefix, mean I think the code could use some clarity at this point, either with comments or more clear naming of variables/methods etc. These are the questions I’d ask if I was ever in making changes to the code in the future and so I’m trying to be preemptive about getting them answered here. 
* Messages with suggestions and no prefix are changes I’d like to see. I will do my best to always provide at least pseudo code as a guide, but if for some reason I haven’t feel free to ping me and we can walk through it. 

Decoding my review status:
* Approved -> Even if I’ve left comments the code looks good enough to me. Don’t wait for any more of my feedback, and feel free to :shipit:
* Comment -> I either don’t feel comfortable in the current state to approve, or don’t think I have the expertise to approve this particular PR, but I don’t feel strongly enough to block the code either. Take my feedback if you like, but if someone else approves, feel free to ship.
* Changes Requested -> There is something in the code that I believe _must_ be fixed before we merge. 
