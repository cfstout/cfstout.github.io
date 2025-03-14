---
layout: post
title: "The \"Begin Again\" Method: Getting the Most Out of LLM Coding Assistants"
date: 2025-03-08
categories: [Coding, AI, Best Practices]
excerpt: "A practical approach to working with AI coding assistants that embraces iteration and starting fresh with better prompts."
---

In the year or so since ChatGPT and other LLM coding assistants have hit the mainstream, I've noticed a pattern in how I use these tools most effectively. After many projects where I've paired with these AI assistants, I've developed what I call the "Begin Again" method—a surprisingly effective technique that embraces the iterative nature of working with LLMs.

## Start with a Rough Draft (Always)

The journey always begins the same way: with a rough draft. I've found that one of the most effective strategies when working with coding assistants is to start by writing out a high-level description of what you want to accomplish. Nothing fancy, just enough to give the AI something to work with.

This initial draft will *never* be perfect, and that's by design. The goal isn't to get flawless code on the first try, but rather to kickstart a process of discovery. It's like sketching before painting—you're setting up the broad strokes before diving into details.

For example, when I wanted to add book reviews to my Jekyll site, I started with a basic prompt:

```
I want to add a series of blog posts called "What I'm reading" with a 
template format that includes a brief synopsis, my thoughts, and whether 
I recommend the book. I'd also like to have a spoiler tag feature to 
hide giveaways.
```

The initial response gave me something workable but not quite right. And that's exactly what I expected.

## Embrace the Failures

The next step is where the real learning happens. Implement the initial solution and watch it crash and burn—or at least wobble precariously. This is the point.

When you begin implementing, you'll inevitably discover:
- Edge cases you hadn't considered
- Technical constraints you weren't aware of
- Features you realize you need halfway through

Each failure or limitation is valuable information. Your mental model of the problem is evolving, becoming more nuanced with each iteration. The AI doesn't have access to your codebase or full context, so these collisions between its suggestions and reality are where you make progress.

As you work through these issues, you're building a richer understanding of both your problem and how to more effectively communicate with the AI. Take notes about what you're clarifying, what assumptions were wrong, and what additional context was missing from your initial prompt.

## Recognizing "Chatbot Merge Hell"

If you continue this iterative refinement process long enough, you'll eventually hit what I call "chatbot merge hell." This typically happens somewhere between the 5th and 10th back-and-forth exchange.

The signs are unmistakable:
- You've made changes to your code that the chatbot doesn't know about
- The AI suggests modifications that break your existing implementation
- You find yourself explaining more about what you've already done than making forward progress
- You're spending more time reconciling conflicts than writing new code
- The conversation feels like it's spiraling out of control

This is the moment where most people get frustrated with AI assistants. But I've come to see it as a crucial milestone in the process—a signal that you've gathered enough information to make a significant leap forward.

## The Zen of Beginning Again

Here's where the method gets its name. When you hit chatbot merge hell, the best thing to do is:

1. Save your work (commit to a branch or stash it)
2. Take a deep breath
3. Begin again with a fresh, comprehensive prompt

There's something almost zen-like about this willingness to let go of the messy, complicated conversation you've been having. Instead of trying to guide the AI through the tangled web you've created together, you're starting with a clean slate—but armed with all the knowledge you've gained.

Your second prompt should be dramatically more detailed than your first. Include:
- Specific requirements you discovered through iteration
- Constraints that emerged during implementation
- Example patterns that worked well and you want to keep
- Explicit instructions about things that didn't work

With my book review example, my second prompt grew to include:

```
I want to create a custom layout for book reviews with standardized 
metadata fields. Each review should have:
- Cover image display
- Book title, author, and publication date
- A rating system (highly recommend, recommend, do not recommend)
- Text that can be hidden behind a spoiler tag that reveals on click
- A standardized CSS and JS structure for future reviews

The review content should be formatted with sections for Synopsis, 
My Thoughts, and Verdict. I need to ensure the spoiler functionality 
uses JavaScript that doesn't conflict with my existing site code.
```

This comprehensive prompt, informed by all the stumbling blocks encountered in the first iteration, typically yields dramatically better results.

## The Second Implementation: Cleaner and Further

The code and guidance you get after this "Begin Again" moment is almost always substantially better. You'll find that:

1. The implementation is cleaner and more aligned with your needs
2. You encounter fewer unexpected issues along the way
3. You make it much further toward your goal before hitting any new roadblocks

If you do hit another wall, the process can be repeated. Save your work, extract the lessons learned, and begin again with an even more refined prompt.

## Conclusion

The most powerful way to use LLM coding assistants isn't to expect perfect results from the start, but to use them as tools for discovery and refinement. This approach works particularly well for adding features to existing codebases, implementing complex components, or when requirements aren't fully clear at the outset.

Two key factors make this method effective:

1. **Context limitations:** LLMs have token limits that restrict how much conversation they can remember. A fresh, comprehensive prompt makes the most of this limited context.

2. **Clear communication:** A single, well-crafted prompt eliminates ambiguities that accumulate during back-and-forth exchanges.

Next time you find yourself in chatbot merge hell, remember: it's not a failure—it's a crucial step in the process. Save your work, take what you've learned, and begin again. This willingness to start fresh, informed by your previous attempts, is often the fastest path to a successful implementation.
