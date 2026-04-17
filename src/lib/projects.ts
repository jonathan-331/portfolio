// Helper to encode paths with spaces for use as src attributes
function img(folder: string, filename: string): string {
  return `/img/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface ProjectSection {
  id: string
  title: string
  body: string[]
  images?: ProjectImage[]
  imageLayout?: 'single' | 'grid' | 'wide'
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  role: string
  overview: string
  thumbnail: string
  hero: string
  sections: ProjectSection[]
}

const projects: Project[] = [
  {
    slug: 'gates-foundation',
    title: 'Knowledge Management',
    subtitle: 'Gates Foundation',
    role: 'Research, Design & Strategy',
    overview:
      'Led UX work for the Gates Foundation\'s Human Centered Design group on Aurora — a search engine for discovering investment information about international organizations.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Gates Foundation Logo.png'),
    hero: img('Gates Foundation', 'GF - Design System.jpg'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'The Gates Foundation\'s Human Centered Design group needed a robust search experience for Aurora — an internal tool that surfaces investment intelligence about international organizations from a vast knowledge base.',
          'I led the UX effort across research, design system creation, and AI-integrated search, with a consistent focus on accessibility and global usability.',
        ],
        images: [
          { src: img('Gates Foundation', 'GF - Logo.png'), alt: 'Gates Foundation logo' },
        ],
        imageLayout: 'single',
      },
      {
        id: 'research',
        title: 'Research & Synthesis',
        body: [
          'Consolidated existing research findings into a centralized team resource, ensuring continuity and shared understanding across the design group.',
          'Conducted user research across a geographically dispersed global community to understand how Foundation staff discover and evaluate partner organizations.',
        ],
        images: [
          { src: img('Gates Foundation', 'GF - Documents Reviewed.jpg'), alt: 'Documents reviewed during research', caption: 'Research synthesis — consolidating prior findings' },
          { src: img('Gates Foundation', 'GF - Card Sort.jpg'), alt: 'Card sort activity', caption: 'Card sorting to understand mental models' },
          { src: img('Gates Foundation', 'GF - Partner Data Screenshot.png'), alt: 'Partner data screenshot', caption: 'Exploring existing partner data structures' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'design-system',
        title: 'Design System',
        body: [
          'Built a comprehensive design system on top of Microsoft\'s Fluent 2 framework, enabling consistent UI across multiple Aurora applications.',
          'The system was designed with developer handoff in mind — all components were documented and paired with implementation guidance.',
        ],
        images: [
          { src: img('Gates Foundation', 'GF - Design System.jpg'), alt: 'Aurora design system overview', caption: 'Apex design system components' },
        ],
        imageLayout: 'wide',
      },
      {
        id: 'prototype',
        title: 'Prototype & Testing',
        body: [
          'Developed a clickable prototype integrating with Airtable to simulate real search results, allowing for meaningful usability sessions.',
          'Usability testing via card sorting confirmed that participants consistently found the search interface intuitive. Sessions surfaced edge cases that informed the final interaction model.',
        ],
        images: [
          { src: img('Gates Foundation', 'GF - Chat Wireframe.png'), alt: 'Chat search wireframe', caption: 'AI-integrated chat search concept' },
          { src: img('Gates Foundation', 'GF - Map Wireframe.png'), alt: 'Map visualization wireframe', caption: 'Geographic data visualization' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'ai-integration',
        title: 'AI Integration',
        body: [
          'Designed AI-integrated search patterns centered on transparency — users needed to understand how Aurora\'s results were generated to trust and act on them.',
          'Focused on surfacing provenance, confidence indicators, and natural-language explanation alongside structured results.',
        ],
        images: [
          { src: img('Gates Foundation', 'GF - Aurora Exact Match.png'), alt: 'Aurora exact match result', caption: 'Exact match search result pattern' },
        ],
        imageLayout: 'wide',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'Delivered a comprehensive search experience, a robust multi-application design system, and AI-integrated search patterns grounded in user research.',
          'A future-state roadmap outlined upcoming capabilities: interactive maps, data visualizations, and generative AI enhancements — all with accessibility built in from the start.',
        ],
      },
    ],
  },

  {
    slug: 'aperture',
    title: 'Aperture',
    subtitle: 'Director of UX',
    role: 'UX Design Director',
    overview:
      'As Director of UX at Aperture (formerly Artemis Intelligence), I built the design function, established the design system, and led the company\'s full rebrand.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Aperture Logo.png'),
    hero: img('Aperture', 'Aperture - Main Template.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Aperture is an AI-powered web application that helps companies identify and capitalize on new market and innovation opportunities — analyzing millions of research papers, news articles, and patent filings to surface unmet needs.',
          'When I joined as Director of UX, the platform had significant usability issues preventing users from effectively acting on the insights it generated.',
        ],
        images: [
          { src: img('Aperture', 'Aperture Logo.gif'), alt: 'Aperture logo animation' },
        ],
        imageLayout: 'single',
      },
      {
        id: 'user-types',
        title: 'Users & Priorities',
        body: [
          'Working across three primary user types — Product Managers, Innovation Managers, and Market Research Analysts — I ran workshops to understand their distinct workflows and priorities.',
          'Each group had different mental models for how opportunity data should be surfaced, filtered, and acted upon.',
        ],
        images: [
          { src: img('Aperture', 'Aperture - User Types.png'), alt: 'User type definitions', caption: 'Primary user archetypes' },
          { src: img('Aperture', 'Aperture - Priorities.png'), alt: 'User priorities', caption: 'Priorities mapped across user types' },
          { src: img('Aperture', 'Aperture - Continuums.png'), alt: 'Design continuums', caption: 'Design direction continuums from workshops' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'design-system',
        title: 'Design System',
        body: [
          'Built "Apex" — an atomic design system built in Google Material Design — for use across wireframes, prototypes, and React implementation.',
          'The system established consistent patterns for Aperture\'s complex data-dense interfaces, giving the engineering team clear implementation guidance.',
        ],
        images: [
          { src: img('Aperture', 'Aperture - Material Design.png'), alt: 'Material Design baseline', caption: 'Material Design as the system foundation' },
          { src: img('Aperture', 'Aperture - Design System - Atoms.png'), alt: 'Design system atoms', caption: 'Atomic components' },
          { src: img('Aperture', 'Aperture - Design System - Molecules.png'), alt: 'Design system molecules', caption: 'Composite components' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'rebrand',
        title: 'Rebrand',
        body: [
          'Led the renaming of the company from Artemis Intelligence to Aperture.ai, including a comprehensive brand guide covering visual identity, messaging strategy, and brand voice.',
          'The new identity better reflected the product\'s positioning — opening a window onto hidden market opportunities.',
        ],
        images: [
          { src: img('Aperture', 'Aperture - Marketing Page.png'), alt: 'Marketing page design', caption: 'Redesigned marketing presence' },
          { src: img('Aperture', 'Aperture - Speak Your Mind.png'), alt: 'Speak Your Mind feature', caption: 'Feature exploration — user feedback integration' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'Resulted in a more focused organization with a unified product vision, clearly defined user workflows, and a scalable design system.',
          'The rebrand repositioned the company in the market and provided a foundation for consistent communication across product, marketing, and sales.',
        ],
      },
    ],
  },

  {
    slug: 'nasa',
    title: 'NASA DAACs',
    subtitle: 'Research & Design',
    role: 'Research & Design',
    overview:
      'Led a research study with 91 scientists across 11 NASA DAAC websites to understand barriers to accessing and utilizing satellite data.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - NASA Logo.png'),
    hero: img('NASA', 'NASA Logo.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'NASA\'s 12 Distributed Active Archive Centers (DAACs) collectively hold the world\'s largest archive of satellite-derived Earth science data. Despite major investment, scientists weren\'t fully utilizing these resources.',
          'I led a research study to understand the barriers — coordinating sessions with 91 scientists across 11 DAAC websites and multiple disciplines.',
        ],
        images: [
          { src: img('NASA', 'NASA Logo.png'), alt: 'NASA logo' },
        ],
        imageLayout: 'single',
      },
      {
        id: 'research',
        title: 'Research Methods',
        body: [
          'Used think-aloud protocols, semi-structured interviews, task scenarios, and co-creation exercises to understand how scientists discovered and used DAAC data in their work.',
          'Recruiting 91 scientists internationally — across disciplines from oceanography to atmospheric science — required careful coordination to ensure data consistency and representativeness.',
        ],
        images: [
          { src: img('NASA', 'NASA - User Types.png'), alt: 'User types diagram', caption: 'Four distinct scientific user archetypes' },
          { src: img('NASA', 'NASA - CoCreation.png'), alt: 'Co-creation session', caption: 'Co-creation exercises with scientists' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'findings',
        title: 'Key Findings',
        body: [
          'Primary DAAC access generally succeeded — scientists knew their home archive well. The major obstacles emerged when cross-DAAC navigation was required.',
          'Dataset discovery across DAACs, data format comprehension, and inconsistent terminology were the most significant barriers to effective use.',
        ],
        images: [
          { src: img('NASA', 'NASA - User Journeys.png'), alt: 'User journey maps', caption: 'Journey maps revealing cross-DAAC pain points' },
          { src: img('NASA', 'NASA - Results Table.png'), alt: 'Research results table', caption: 'Findings synthesized across 91 participants' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'design',
        title: 'Design Recommendations',
        body: [
          'Translated findings into actionable design recommendations addressing cross-DAAC navigation, standardized data format documentation, and improved search terminology.',
        ],
        images: [
          { src: img('NASA', 'NASA - Wireframe Suggestion.png'), alt: 'Wireframe design suggestion', caption: 'Design recommendation — unified data discovery' },
        ],
        imageLayout: 'wide',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'Design recommendations were implemented on multiple DAAC websites. NASA recognized the project as a model for user-centered data infrastructure.',
          'User journey posters from the study are displayed in NASA facilities. The work established a foundation for ongoing UX improvements across the DAAC network.',
        ],
      },
    ],
  },

  {
    slug: 'power-plants',
    title: 'Power Plants',
    subtitle: 'Design Strategy',
    role: 'Design Strategy',
    overview:
      'Redesigned shutdown scheduling software for nuclear power plants — transforming a system causing operational inefficiencies into one that supports critical maintenance workflows.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Power Plants.png'),
    hero: img('Power Plants', 'Power Plants - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Nuclear power plants operate within strict regulatory frameworks and require scheduled shutdowns for maintenance and upgrades. The existing scheduling software wasn\'t meeting user needs, creating inefficiencies and potential delays in critical operations.',
          'I led interaction design and design strategy — facilitating workshops, building journey maps, and creating wireframes and interactive prototypes.',
        ],
      },
      {
        id: 'workshops',
        title: 'Design Workshops',
        body: [
          'Facilitated structured workshops to align stakeholders and define scope. Used affinity mapping, keyword exercises, and adjective voting to build shared design direction.',
          'A key session had participants independently identify design priorities — separating individual insight from groupthink — before converging on key attributes: innovative, robust, user-friendly, efficient, secure.',
        ],
        images: [
          { src: img('Power Plants', 'Power Plants - Keywords.png'), alt: 'Keyword exercise', caption: 'Keyword prioritization from workshops' },
          { src: img('Power Plants', 'Power Plants - Continuums.png'), alt: 'Design continuums', caption: 'Design direction continuums' },
          { src: img('Power Plants', 'Power Plants - Concept Cards.png'), alt: 'Concept cards', caption: 'Concept ideation cards' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'process',
        title: 'Design Process',
        body: [
          'Built out journey maps to understand the full shutdown scheduling workflow, then developed storyboards and wireflows to explore interaction patterns before committing to screens.',
          'Created an information architecture revision and detailed wireframes in Sketch, then an interactive prototype for usability testing.',
        ],
        images: [
          { src: img('Power Plants', 'Power Plants - Journey Map.png'), alt: 'Journey map', caption: 'Shutdown scheduling journey map' },
          { src: img('Power Plants', 'Power Plants - Scope Targets.png'), alt: 'Scope targets', caption: 'Design scope prioritization' },
          { src: img('Power Plants', 'Power Plants - Information Architecture.png'), alt: 'Information architecture', caption: 'Revised information architecture' },
          { src: img('Power Plants', 'Power Plants - Storyboard.png'), alt: 'Storyboard', caption: 'Interaction storyboards' },
          { src: img('Power Plants', 'Power Plants - Interaction Flow.png'), alt: 'Interaction flow', caption: 'Core interaction flows' },
          { src: img('Power Plants', 'Power Plants - Wireframe.png'), alt: 'Wireframes', caption: 'High-fidelity wireframes' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'The design direction was successfully implemented. Users reported satisfaction with the new system, and the client continued the engagement — extending the work into adjacent scheduling workflows.',
        ],
      },
    ],
  },

  {
    slug: 'moen',
    title: 'Moen Voice Interaction',
    subtitle: 'Research & Design',
    role: 'Research & Design',
    overview:
      'Designed and tested voice interaction for Moen\'s U by Moen smart shower — resulting in an Alexa integration that launched at CES.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Moen Wirefram.png'),
    hero: img('Moen', 'Moen - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Moen wanted to bring voice interaction to their U by Moen smart shower — but without embedding a device in the shower itself. The challenge: design a voice experience that felt natural in a wet, hands-free context.',
          'I served as lead interaction designer and user researcher, designing the prototype, recruiting participants, and structuring the research sessions.',
        ],
      },
      {
        id: 'research',
        title: 'Research Approach',
        body: [
          'Created an iPad prototype displayed in a shower environment, allowing participants to simulate shower use while interacting with voice commands.',
          'Designed interaction flows for three device ecosystems — Alexa, Apple (Siri), and Google Assistant — each with different invocation patterns and terminology conventions.',
        ],
        images: [
          { src: img('Moen', 'Moen - Lab Setup.png'), alt: 'Lab setup for shower research', caption: 'Research lab configured to simulate shower context' },
          { src: img('Moen', 'Moen - High Level Flows.png'), alt: 'High level interaction flows', caption: 'High-level multi-device interaction flows' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'design',
        title: 'Interaction Design',
        body: [
          'The core design challenge was identifying natural utterances — what people would actually say to control their shower, not what engineers assumed they would say.',
          'Developed an utterance exploration process that mapped natural language patterns across temperature, timing, and presets.',
        ],
        images: [
          { src: img('Moen', 'Moen - Utterance Exploration.png'), alt: 'Utterance exploration', caption: 'Natural language utterance mapping' },
          { src: img('Moen', 'Moen - Utterances.png'), alt: 'Final utterances', caption: 'Finalized utterance library' },
          { src: img('Moen', 'Moen - Interactions.png'), alt: 'Interaction patterns', caption: 'Core interaction patterns' },
          { src: img('Moen', 'Moen - Alexa Interactions.png'), alt: 'Alexa interactions', caption: 'Alexa-specific interaction design' },
          { src: img('Moen', 'Moen - Final Interaction Flows.png'), alt: 'Final interaction flows', caption: 'Final multi-device interaction flows' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'Research revealed which device ecosystem users actually preferred and what they would naturally say — leading to a clear recommendation to launch with Alexa first.',
          'Moen followed that recommendation. The U by Moen Alexa integration launched and received significant media attention at CES. Apple and Google integrations followed.',
        ],
      },
    ],
  },

  {
    slug: 'gaming',
    title: 'Learning a Card Game',
    subtitle: 'Research',
    role: 'Research',
    overview:
      'Led research for a major card game company to understand how children learn to play — comparing poster vs. booklet instructions with 10 participant pairs.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Gaming.png'),
    hero: img('Gaming', 'Gaming - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'A well-known card game company wanted to understand how children learned their game — specifically, what instruction format worked best: a large poster-style reference or a traditional booklet.',
          'I led the research from recruiting through synthesis, working with 10 pairs (half adult-child, half child-child) to observe natural learning behavior.',
        ],
      },
      {
        id: 'method',
        title: 'Method & Lab Setup',
        body: [
          'Designed a multi-camera lab setup — overhead shot, two side angles, and a mounted microphone — to capture all interactions without making participants self-conscious.',
          'For child participants, used a "Smile-O-Meter" (a Likert scale with emoticons rather than numbers) to gather authentic preference data in a developmentally appropriate way.',
        ],
        images: [
          { src: img('Gaming', 'Gaming - Camera Setup.png'), alt: 'Camera setup diagram', caption: 'Multi-camera lab configuration' },
          { src: img('Gaming', 'Gaming - Smile-O-Meter.png'), alt: 'Smile-O-Meter', caption: 'Child-friendly Likert scale' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'findings',
        title: 'Findings',
        body: [
          'The poster-style format provided a quick reference but participants found it cumbersome — and almost no one flipped it over to access the back.',
          'The booklet was preferred, but caused a consistent problem: participants would start playing before finishing the instructions, leading to rule gaps and frustration.',
        ],
        images: [
          { src: img('Gaming', 'Gaming - Participant Enjoyment Levels.png'), alt: 'Participant enjoyment levels chart', caption: 'Enjoyment levels across instruction formats' },
        ],
        imageLayout: 'wide',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'Recommended replacing the poster format with a revised booklet, and redesigning specific pages that triggered premature game-starting behavior.',
          'Both recommendations were adopted. The changes addressed the root cause of rule comprehension failures without changing the game itself.',
        ],
      },
    ],
  },

  {
    slug: 'blood-banks',
    title: 'Blood Banks',
    subtitle: 'Research & Design',
    role: 'Research & Design',
    overview:
      'Redesigned blood bank processing software with a 30-second processing target — balancing speed with accuracy in a high-stakes medical environment.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Blood Banks.png'),
    hero: img('Blood Banks', 'Blood Banks - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'A blood bank software company wanted to revive their product design. Blood products need to be processed and out the door quickly — the design challenge was achieving that without sacrificing accuracy.',
          'I served as both researcher and interaction designer, conducting concept testing in real blood bank environments and designing desktop and mobile prototypes.',
        ],
      },
      {
        id: 'research',
        title: 'Research & Concept Testing',
        body: [
          'Spent the first week building domain knowledge — blood banking involves highly specialized terminology and strictly regulated workflows that aren\'t documented in public resources.',
          'Conducted concept testing virtually and in-person at active blood banks, testing designs against real workflows with staff who process products daily.',
        ],
        images: [
          { src: img('Blood Banks', 'Blood Banks - Concept.png'), alt: 'Concept design', caption: 'Early concept tested with blood bank staff' },
          { src: img('Blood Banks', 'Blood Banks - High Level Flow.png'), alt: 'High level flow', caption: 'Core processing workflow' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'design',
        title: 'Design',
        body: [
          'Designed both desktop and mobile experiences — the mobile prototype focused on rapid barcode scanning for product intake, while the desktop prototype captured full preparation and navigation flows.',
        ],
        images: [
          { src: img('Blood Banks', 'Blood Banks - Mobile.png'), alt: 'Mobile prototype', caption: 'Mobile scanning workflow' },
          { src: img('Blood Banks', 'Blood Banks - Desktop.png'), alt: 'Desktop prototype', caption: 'Full desktop processing interface' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'The client expressed strong satisfaction with the deliverables and returned for additional work. The project received a high Net Promoter Score from the client team.',
          'The company was restructured as the deliverables were handed off — we hope the designs made it into production.',
        ],
      },
    ],
  },

  {
    slug: 'brain-science',
    title: 'Brain Science',
    subtitle: 'Research & Design',
    role: 'Research & Design',
    overview:
      'Redesigned a brain science organization\'s website to serve both expert scientists and curious non-experts — without alienating either.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Brain Science.png'),
    hero: img('Brain Science', 'Brain Science - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'A brain science organization needed to revamp their site — updating the look and feel while making vast amounts of scientific data accessible to both domain experts and general audiences.',
          'The central design challenge: create navigation that lets expert scientists find data instantly without overwhelming non-specialists.',
        ],
      },
      {
        id: 'research',
        title: 'Research',
        body: [
          'Conducted ethnographic research sessions with scientists to understand how they navigated existing resources and what they expected from a brain data portal.',
          'Used card sorting to understand mental models for organizing genes, brain sections, and experimental data.',
        ],
        images: [
          { src: img('Brain Science', 'Brain Science - Journey Map.png'), alt: 'Journey map', caption: 'User journey map — scientist data access workflows' },
          { src: img('Brain Science', 'Brain Science - Card Sort.png'), alt: 'Card sort results', caption: 'Card sort — organizing brain science taxonomy' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'design',
        title: 'Design Exploration',
        body: [
          'Developed two distinct design approaches to test with users: a "Story" approach (narrative-led, accessible) and a "Utility" approach (tool-first, expert-focused).',
          'Research revealed that users strongly preferred longer pages with dense information over simplified navigation — a counterintuitive finding that shaped the final architecture.',
        ],
        images: [
          { src: img('Brain Science', 'Brain Science - Story Approach.png'), alt: 'Story approach', caption: 'Story approach — narrative navigation' },
          { src: img('Brain Science', 'Brain Science - Utility Approach.png'), alt: 'Utility approach', caption: 'Utility approach — expert-focused' },
          { src: img('Brain Science', 'Brain Science - Wireframe Prototype.png'), alt: 'Wireframe prototype', caption: 'Wireframe prototype for testing' },
          { src: img('Brain Science', 'Brain Science - Scrolling Topics.png'), alt: 'Scrolling topics', caption: 'Scrolling topic navigation pattern' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'The site launched according to the proposed design language. The navigation structure I recommended was adopted in full.',
          'The project received a high Net Promoter Score, and the final design successfully bridged the expert/non-expert divide.',
        ],
        images: [
          { src: img('Brain Science', 'Brain Science - Final Design.png'), alt: 'Final design', caption: 'Launched design' },
        ],
        imageLayout: 'wide',
      },
    ],
  },

  {
    slug: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Research, Design & Strategy',
    role: 'Research, Design & Strategy',
    overview:
      'Redesigned title exam software for real estate professionals — the result was recognized as an industry breakthrough and the company was acquired.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Real Estate.png'),
    hero: img('Real Estate', 'Real Estate - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'Real estate title exams involve investigation across multiple sources — deeds, liens, easements, judgments — entered into a database interface that had grown unwieldy over decades.',
          'I led design strategy, research, and interaction design to create a streamlined experience that satisfied both user and business needs.',
        ],
      },
      {
        id: 'workshops',
        title: 'Design Strategy',
        body: [
          'Ran a "Remember the Future" workshop with stakeholders — asking them to envision the product five years ahead and work backwards to identify the features that got them there.',
          'This exercise surfaced alignment on priorities and created buy-in for bold design changes that might otherwise have faced resistance.',
        ],
        images: [
          { src: img('Real Estate', 'Real Estate - Remember the Future.png'), alt: 'Remember the Future workshop', caption: '"Remember the Future" — stakeholder visioning exercise' },
        ],
        imageLayout: 'wide',
      },
      {
        id: 'design',
        title: 'Design',
        body: [
          'Defined five design principles: Error Prevention, Learnability, Simplification, single-screen focus, and strong information scent.',
          'Designed for three user types — Managers, Searchers, and Examiners — with a shared goal of achieving tasks in fewer clicks with less domain knowledge required.',
        ],
        images: [
          { src: img('Real Estate', 'Real Estate - High Level Flow.png'), alt: 'High level flow', caption: 'Core workflow map' },
          { src: img('Real Estate', 'Real Estate - Wireflows.png'), alt: 'Wireflows', caption: 'Annotated wireflows' },
          { src: img('Real Estate', 'Real Estate - Prototype.png'), alt: 'Interactive prototype', caption: 'High-fidelity prototype' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'The redesigned software was recognized as a breakthrough for the real estate title industry and won an industry award.',
          'The company was subsequently acquired by a major real estate corporation — with the new design as a central part of the value proposition.',
        ],
      },
    ],
  },

  {
    slug: 'trains',
    title: 'Positive Train Control',
    subtitle: 'Research & Design',
    role: 'Research & Design',
    overview:
      'Designed a GUI for train control radio systems — helping operators transition from command-line interfaces with reduced cognitive load.',
    thumbnail: img('Portfolio Options', 'Portfolio Option - Trains.png'),
    hero: img('Trains', 'Train - Header.png'),
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: [
          'A train controller company wanted to modernize their radio interface — moving from coded command-line inputs to a graphical UI that reduced cognitive load for operators.',
          'The challenge: users were deeply resistant to any change from their established command-line workflow. Safety-critical systems require careful change management.',
        ],
      },
      {
        id: 'research',
        title: 'Research',
        body: [
          'Conducted contextual inquiries across three distinct operational environments: mission control, a help center, and a response center — each with different monitoring needs, access restrictions, and workflows.',
          'Observed operators in situ to understand what information they actually used, at what frequency, and with what level of urgency.',
        ],
      },
      {
        id: 'design',
        title: 'Design Process',
        body: [
          'Developed high-level flows and concepts from research findings, then built wireframes and prototypes for concept testing with actual operators.',
          'Iterated based on testing, producing annotated wireframes for the visual design and development team.',
        ],
        images: [
          { src: img('Trains', 'Train - Information Architecture.png'), alt: 'Information architecture', caption: 'Revised information architecture' },
          { src: img('Trains', 'Train - Wireframe.png'), alt: 'Wireframe', caption: 'Core interface wireframe' },
          { src: img('Trains', 'Train - Prototype.png'), alt: 'Interactive prototype', caption: 'Prototype used in concept testing' },
        ],
        imageLayout: 'grid',
      },
      {
        id: 'outcomes',
        title: 'Outcomes',
        body: [
          'Once implementation began, internal developers insisted on preserving their command-line interface alongside the GUI — a compromise that ultimately validated the depth of user resistance identified in research.',
          'The visual design and conceptual architecture were implemented as proposed, with the command-line available as a fallback for experienced operators.',
        ],
      },
    ],
  },
]

export default projects
