---
title: "What comes after open source?"
date: "2019-01-21"
---

_This post explores the differences between software tools and services; how the stateful nature of software services led them to be closed; and posits how crypto networks can catalyze a new era of open services that reignite combinatorial innovation._

<!-- excerpt -->

Before the ubiquity of internet services (search, maps, social, commerce), software was more similar in its nature to tools (word processing, spreadsheets, graphics editing).

Because of the permissionless nature of open source code, software tools benefitted from combinatorial innovation and evolved quickly.

Internet services use software tools (like databases) as their building blocks, but also provide new and advanced functionality that tools aren’t capable of. They are dynamic, social, and collaborative in ways tools are not. A service’s reliance on [state](<https://en.wikipedia.org/wiki/State_(computer_science)>) makes it fundamentally different than a tool. A service’s software, when instantiated, creates a vessel for persisting state. It starts off empty and becomes useful only when filled with data, users or both.

The business model of internet services is predicated on monetizing state. State is a competitive advantage, and is defended by keeping services proprietary and closed. Further combinatorial innovation of services is restricted because outside developers can’t benefit from true composability of existing services and their underlying data.

DNS, the [phonebook of the internet](https://www.cloudflare.com/learning/dns/what-is-dns/), while limited in capability, is one of a handful examples of a successful early open internet service that resulted in a lot of downstream innovation. Because of incompatible incentives, there are no open internet services today that come close to the complexity or utility of dominant closed ones.

That’s where crypto comes in. Crypto networks rely on open source code, but also instantiate global services that depend on open state. Open state is a critical requirement for cryptographic verification and provides the lynchpin of trust in blockchains. In addition, tokens create a new incentive model for sustaining crypto networks that is aligned with their open nature.

## Conditions for innovation

Combinatorial innovation is a cultural process for invention by which existing ideas are combined in novel ways to create new ideas. The resulting output is fed back into the process to generate more new ideas, ad infinitum. As more ideas are explored, more possibilities present themselves.

Take the analogy of a garden: A healthy garden requires room for growth, ample light, regular watering, and an attentive gardener. Similar prerequisites exist for robust combinatorial innovation: A healthy landscape where a diverse set of products and services can grow.

First, a community of inventors must be **interconnected** through communication technology (language, writing) so ideas can flow widely and efficiently. The presence of a culture of **sharing** allows ideas to be challenged and refined (scientific method, peer review), and for the strongest ones to rise to the top.

Participation in a global marketplace for ideas (capitalism) provides the **incentives** for inventors to compete, driving innovation.

But all of these together are complex systems. Complex technology naturally leads to **modularity**. Specialists subdivide and conquer that complexity to improve the building blocks, creating fractal competition.

Software is the ultimate environment for combinatorial innovation, excelling in all dimensions at an unprecedented scale: The internet is the ultimate connectivity network. Open source culture continuously refines modules of code. And billions of users with interconnected devices present an unprecedented addressable market.

## Software tools: the user is in control

In some ways, software tools are not unlike the products of the industrial era. Like a manufacturing tool, they carry out a particular function, useful in and of itself.

In fact, early software predominantly produced better digital versions of industrial information and media processing tools:

| Software tool                | Industrial tool |
| ---------------------------- | --------------- |
| Word processor (WordPerfect) | Typewriter      |
| Spreadsheet (Excel)          | Accounting book |
| Graphics editor (Photoshop)  | Darkroom        |

Later, as computers became more affordable, ubiquitous and interconnected by the internet, a new breed of service-like software emerged, enabling new modes of communication, collaboration and interaction, upending the top-down models of production and distribution in media industries, and also bringing forth new implications for power and control.

All tool-like software has certain key properties:

It is **self contained**. Run the code and it’ll do what is promised. There are no external dependencies. Word processor software, for example, is so useful by itself that successful companies were built selling computers with a [single purpose](https://www.youtube.com/watch?v=AuX-6761KTQ).

It offers **single player utility**. Like a hammer that you own, you don’t need anything or anyone else to use it.

The **user is the operator**. There is a strong sense of ownership, even property, as well as control, for the user. It’s your personal tool, not a service you hire from someone else.

Copies are **interchangeable**. If you forget your laptop, you can borrow a friend’s and still retouch your pictures in their instance of Photoshop.

Not surprisingly, the initial business model for tool-like software was selling licenses. Piracy naturally emerged, since the tools were so useful, but the code was also easy and inexpensive to copy and share. Piracy, in a sense, is natural to the combinatorial innovation process, since intellectual property is a barrier to the flow of ideas.

The open source community rapidly created openly-licensed alternatives to most proprietary software, free to reuse and modify. Since the idea of tool software is synonymous with its utility, anyone can attempt to create an alternate, open version from scratch (even though open source alternatives were often [inferior](https://en.wikipedia.org/wiki/GIMP) to [proprietary](https://en.wikipedia.org/wiki/Adobe_Photoshop) originals).

Next, as connectivity to the internet became commonplace and the web started to pick up steam, the focus of software innovation shifted from digital productivity tools to programming communication and interactivity between computers. Software edged toward offering new capabilities of being collaborative, multiplayer, dynamic, and social, in turn producing the building blocks for the next generation of software, internet services.

## Code vs state

To understand the evolution, it is important to to distinguish between the **logic** (code) of a program and its **ability to remember** (state).

Early software was functional in nature—an input led to an output. A story in your mind is translated to a digital document with the aid of a word processor. A scanned photo is cropped and text is overlaid with image processing software.

The ability to remember preceding events or user interactions (state) was primitive and minimal. State input also only came from the single user of the program.

Internet services leveraged sophisticated state management, allowing them to provide unprecedented new utility.

## Internet services: users give up state

Personal computing is defined by the idea that a user runs a **personal** instance of a program on **their** computer. The internet is defined by a new class of software centered around the concept of a **shared** service that runs on a **remote** server.

Instead of “one computer, one program”, where there are many identical instances of software run by independent individuals, one server operator (or company) runs a single instance of a program on their server (or datacenter). Lots of people connect to that service and interact with it over the internet.

Importantly, instead of a user maintaining their own state, a service maintains state on a user’s behalf.

This has important consequences. Power shifts away from the user and their private [bicycle for the mind](https://youtu.be/rTRzYjoZhIY). A new force of consolidation and control emerges. Ironically, the internet, a decentralized communication network, produced some of the most centralizing services in history.

Let’s look at the generic definition of “service”:

> a system supplying a public need such as transport, communications, or utilities such as electricity and water.

Services are categorically different than tools.

| Tool          | Service                |
| ------------- | ---------------------- |
| Car           | Transportation network |
| Engine        | Power grid             |
| Personal blog | Social network         |
| RSS reader    | Search engine          |
| TensorFlow    | Google Ads             |
| Unity         | Dota 2                 |
| MP3 player    | Spotify                |

Services thrive at scale, from both [economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale) (an industrial concept) and a new notion of stateful [network effects](https://a16z.com/2016/03/07/all-about-network-effects/). They desire to be global and singular. They have long, continuous lifespans and operate autonomously. Like for services in the real world, a failure of an internet service is catastrophic for users that depend on it.

Users find more value in plugging into an existing service than from building their own, making them naturally become monopolies.

Services can be deployed in data centers, enabling applications to run at a scale that would be infeasible for a personal computer. Crawling the entire web is possible by a well funded and architected service.

## State gives services superpowers

A user may interact with the service to address a personal need, for example, to find a certain website with the aid of a keyword query. The service satisfies that need by returning a list of results, but a byproduct of the user’s action is the service improving its global state. In the case of search, the user action updates the global ranking of the selected website in the system, improving results for all other users in the future. Even though users are using the service for a selfish reason, the service gets smarter and more useful for all users.

Over a service’s lifespan, the utility of its code begins to diverge with the utility of its state.

State compounds and becomes more valuable superlinearly. Code, while crucial for the stable operation and evolution of a service, becomes less important and necessary to defend.

It is not surprising that most services are primarily constructed out of open source components. Anyone can attempt to copy a service or even re-instantiate the actual codebase, but an existing service with more users will have more useful state, and will be more desirable to new users. This creates a feedback loop, where more users beget more state, leading to a more useful service that attracts further users and more state.

## From open source to open services

As my partner Chris has [written](https://www.wired.com/story/how-blockchain-can-wrest-the-internet-from-corporations/), we are seeing a great consolidation of internet services among a few corporations. Years of state accumulated by innovative companies produced tremendously useful services (search, maps, social, commerce), but further combinatorial innovation is off-limits to outside developers and entrepreneurs. Rebuilding services from scratch on the same terms and this late in the game is hopeless.

As crypto networks evolve, they are likely to provide strong incentives to unlock further state and create open services in many areas dominated by closed ones today. Open services powered by crypto networks will present unprecedented opportunity for a new generation of developers and entrepreneurs to innovate.

_Thanks to [Jesse Walden](https://twitter.com/jessewldn) and [Chris Dixon](https://twitter.com/cdixon) for reviewing drafts of this post._
