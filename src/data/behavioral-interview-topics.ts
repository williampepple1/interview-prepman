import { Topic } from '../types';

export const behavioralInterviewTopics: Topic[] = [
  {
    id: 'star-method',
    title: 'STAR Method Framework',
    description: 'Master the STAR method for structuring behavioral interview responses',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    content: `
# STAR Method Framework

The STAR method is a structured approach to answering behavioral interview questions. It helps you provide clear, concise, and compelling responses.

## What is STAR?

- **Situation**: Describe the context and background
- **Task**: Explain your responsibility and what needed to be done
- **Action**: Detail the specific steps you took
- **Result**: Share the outcomes and impact of your actions

## Why Use STAR?

- Provides structure to your responses
- Ensures you cover all important aspects
- Makes your answers more memorable
- Demonstrates your problem-solving approach
- Shows quantifiable results when possible

## Tips for Using STAR

1. **Be Specific**: Use concrete details and examples
2. **Focus on Your Role**: Emphasize your actions and decisions
3. **Quantify Results**: Use numbers and metrics when possible
4. **Keep It Concise**: Aim for 2-3 minutes per response
5. **Practice**: Rehearse common scenarios using this framework
    `,
    subtopics: [
      {
        id: 'star-structure',
        title: 'STAR Structure Breakdown',
        content: `
## Situation (S)

**Purpose**: Set the context and provide background information.

**What to Include**:
- When and where the situation occurred
- Your role at the time
- The company/organization context
- Any relevant constraints or challenges

**Example**:
"In my previous role as a software engineer at TechCorp, I was working on a critical project with a tight deadline..."

## Task (T)

**Purpose**: Explain your specific responsibility and what needed to be accomplished.

**What to Include**:
- Your specific role and responsibilities
- The goal or objective you needed to achieve
- Any constraints or limitations you faced
- Why the task was important

**Example**:
"My task was to lead a team of three developers to deliver a new feature within two weeks, while ensuring code quality and team collaboration..."

## Action (A)

**Purpose**: Detail the specific steps you took to address the situation.

**What to Include**:
- Your specific actions and decisions
- The reasoning behind your approach
- How you collaborated with others
- Any challenges you overcame
- Your leadership or initiative

**Example**:
"I started by breaking down the project into smaller, manageable tasks and created a detailed timeline. I held daily stand-up meetings to track progress and address blockers immediately..."

## Result (R)

**Purpose**: Share the outcomes and impact of your actions.

**What to Include**:
- Quantifiable results when possible
- Positive outcomes and achievements
- Lessons learned
- Long-term impact
- Recognition or feedback received

**Example**:
"As a result, we delivered the feature on time with 95% test coverage. The team's productivity increased by 20%, and the feature received positive user feedback..."
        `,
        keyPoints: [
          'Situation provides context and background',
          'Task clarifies your specific responsibility',
          'Action shows your problem-solving approach',
          'Result demonstrates impact and outcomes'
        ],
        estimatedTime: '15 minutes'
      },
      {
        id: 'star-examples',
        title: 'STAR Method Examples',
        content: `
## Example 1: Leadership Challenge

**Question**: "Tell me about a time when you had to lead a team through a difficult situation."

**STAR Response**:

**Situation**: "As a senior developer at my previous company, I was assigned to lead a team of five developers on a project that was already behind schedule by two weeks."

**Task**: "My task was to get the project back on track while maintaining team morale and ensuring we didn't compromise on code quality."

**Action**: "I immediately scheduled a team meeting to understand the root causes of the delays. I discovered that unclear requirements and lack of communication were the main issues. I implemented daily stand-ups, created a detailed project timeline, and established clear communication channels with stakeholders."

**Result**: "We successfully delivered the project on time with high quality. Team satisfaction scores improved by 30%, and we received positive feedback from the client. The processes I implemented became standard practice for future projects."

## Example 2: Conflict Resolution

**Question**: "Describe a situation where you had to resolve a conflict between team members."

**STAR Response**:

**Situation**: "Two senior developers on my team had conflicting opinions about the architecture for a new feature, which was causing delays and tension in the team."

**Task**: "I needed to facilitate a resolution that would satisfy both parties while ensuring the project moved forward efficiently."

**Action**: "I scheduled individual meetings with both developers to understand their perspectives. Then I organized a collaborative session where they could present their approaches and discuss the trade-offs. I encouraged them to find common ground and compromise."

**Result**: "They agreed on a hybrid approach that incorporated the best aspects of both proposals. The conflict was resolved, and they actually improved their working relationship. The project was completed successfully, and the team learned valuable collaboration skills."

## Example 3: Problem-Solving

**Question**: "Tell me about a time when you had to solve a complex technical problem."

**STAR Response**:

**Situation**: "Our production system was experiencing intermittent crashes that were affecting user experience, and the issue was difficult to reproduce consistently."

**Task**: "I needed to identify the root cause of the crashes and implement a solution quickly to minimize user impact."

**Action**: "I started by analyzing the crash logs and monitoring system metrics. I created a detailed reproduction plan and worked with the QA team to identify patterns. I also researched similar issues and consulted with senior engineers."

**Result**: "I discovered it was a race condition in our caching layer. I implemented a fix with proper locking mechanisms and added comprehensive tests. The crashes stopped completely, and we improved our monitoring to catch similar issues early."
        `,
        keyPoints: [
          'Use specific, real examples',
          'Include quantifiable results',
          'Show your problem-solving process',
          'Demonstrate leadership and collaboration'
        ],
        estimatedTime: '20 minutes'
      }
    ]
  },
  {
    id: 'leadership-questions',
    title: 'Leadership & Management',
    description: 'Common behavioral questions about leadership, team management, and decision-making',
    difficulty: 'Intermediate',
    estimatedTime: '45 minutes',
    content: `
# Leadership & Management Questions

Leadership questions assess your ability to guide teams, make decisions, and drive results. These questions often focus on your management style, conflict resolution, and ability to inspire others.

## Common Leadership Questions

1. "Tell me about a time when you had to lead a team through a difficult situation."
2. "Describe a situation where you had to make an unpopular decision."
3. "How do you motivate team members who are underperforming?"
4. "Tell me about a time when you had to delegate a critical task."
5. "Describe a situation where you had to lead without authority."

## Key Leadership Competencies

- **Communication**: Clear, effective communication with team members
- **Decision-making**: Making tough decisions with incomplete information
- **Empathy**: Understanding and supporting team members
- **Accountability**: Taking responsibility for team outcomes
- **Adaptability**: Adjusting leadership style to different situations
    `,
    subtopics: [
      {
        id: 'team-leadership',
        title: 'Team Leadership Scenarios',
        content: `
## Leading Through Change

**Scenario**: You're leading a team through a major organizational change (e.g., new technology adoption, restructuring, or process changes).

**Key Points to Address**:
- How you communicated the change to your team
- How you addressed resistance and concerns
- How you supported team members during the transition
- How you measured success and adjusted your approach

**Example Response**:
"When our company decided to migrate to a new cloud platform, I knew it would be a significant change for my team. I started by clearly explaining the business reasons behind the decision and the benefits it would bring. I addressed concerns by providing training opportunities and creating a detailed transition plan. I also established regular check-ins to support team members and gather feedback."

## Managing Underperforming Team Members

**Scenario**: You have a team member who is consistently underperforming or missing deadlines.

**Key Points to Address**:
- How you identified the performance issue
- How you approached the conversation with the team member
- How you provided support and resources
- How you measured improvement and next steps

**Example Response**:
"I noticed that one of my team members was consistently missing deadlines and the quality of their work had declined. I scheduled a private meeting to understand what was happening. I discovered they were struggling with personal issues and feeling overwhelmed by the workload. I worked with them to create a more manageable schedule, provided additional training, and connected them with our employee assistance program."

## Delegating Critical Tasks

**Scenario**: You need to delegate an important project or task to a team member.

**Key Points to Address**:
- How you selected the right person for the task
- How you provided clear instructions and expectations
- How you supported them throughout the process
- How you ensured accountability and quality

**Example Response**:
"When I needed to delegate a critical client presentation, I carefully considered each team member's strengths and current workload. I chose someone who had strong communication skills and was looking for growth opportunities. I provided clear guidelines, shared relevant background information, and offered to review their work. I also made myself available for questions and feedback throughout the process."
        `,
        keyPoints: [
          'Focus on communication and empathy',
          'Show how you support team members',
          'Demonstrate accountability and follow-through',
          'Include specific actions and results'
        ],
        estimatedTime: '25 minutes'
      },
      {
        id: 'decision-making',
        title: 'Decision-Making & Problem-Solving',
        content: `
## Making Tough Decisions

**Scenario**: You had to make a difficult decision that affected your team or organization.

**Key Points to Address**:
- How you gathered information and analyzed options
- How you considered different perspectives and stakeholders
- How you communicated your decision
- How you handled the aftermath and feedback

**Example Response**:
"When I had to choose between two equally qualified candidates for a promotion, I created a structured evaluation process. I reviewed their performance data, gathered feedback from colleagues, and considered their career goals. I also consulted with HR to ensure fairness. I communicated my decision transparently, explaining the reasoning and providing constructive feedback to both candidates."

## Leading Without Authority

**Scenario**: You had to influence or lead people who didn't report to you.

**Key Points to Address**:
- How you built relationships and credibility
- How you communicated your vision or goals
- How you addressed resistance or skepticism
- How you achieved buy-in and collaboration

**Example Response**:
"When I needed to implement a new coding standard across multiple teams, I started by building relationships with key stakeholders. I presented the benefits clearly, using data to show how it would improve code quality and reduce bugs. I addressed concerns by being flexible and incorporating feedback. I also created a pilot program to demonstrate success before rolling it out company-wide."

## Crisis Management

**Scenario**: You had to lead your team through a crisis or emergency situation.

**Key Points to Address**:
- How you assessed the situation and prioritized actions
- How you communicated with stakeholders
- How you coordinated team efforts
- How you ensured business continuity

**Example Response**:
"When our main server went down during peak hours, I immediately assessed the impact and communicated with leadership. I coordinated with the infrastructure team to understand the issue and estimated recovery time. I kept customers informed through our status page and social media. I also worked with the team to implement temporary solutions and prevent similar issues in the future."
        `,
        keyPoints: [
          'Show systematic approach to decision-making',
          'Demonstrate stakeholder management',
          'Include risk assessment and mitigation',
          'Focus on communication and transparency'
        ],
        estimatedTime: '20 minutes'
      }
    ]
  },
  {
    id: 'teamwork-collaboration',
    title: 'Teamwork & Collaboration',
    description: 'Questions about working effectively with others, resolving conflicts, and contributing to team success',
    difficulty: 'Beginner',
    estimatedTime: '40 minutes',
    content: `
# Teamwork & Collaboration Questions

Teamwork questions assess your ability to work effectively with others, contribute to team goals, and handle interpersonal dynamics. These questions often focus on collaboration, communication, and conflict resolution.

## Common Teamwork Questions

1. "Tell me about a time when you had to work with a difficult team member."
2. "Describe a situation where you had to resolve a conflict between colleagues."
3. "How do you handle disagreements with your manager or colleagues?"
4. "Tell me about a time when you had to adapt to a new team."
5. "Describe a situation where you had to give constructive feedback."

## Key Teamwork Competencies

- **Communication**: Clear, respectful communication with team members
- **Collaboration**: Working effectively with others toward common goals
- **Conflict Resolution**: Addressing disagreements constructively
- **Adaptability**: Adjusting to different team dynamics and work styles
- **Empathy**: Understanding and considering others' perspectives
    `,
    subtopics: [
      {
        id: 'conflict-resolution',
        title: 'Conflict Resolution',
        content: `
## Resolving Team Conflicts

**Scenario**: You had to resolve a conflict between team members that was affecting productivity.

**Key Points to Address**:
- How you identified and understood the conflict
- How you approached each person involved
- How you facilitated a resolution
- How you ensured the conflict didn't recur

**Example Response**:
"When two team members had a disagreement about project priorities that was affecting our delivery timeline, I scheduled individual meetings with both to understand their perspectives. I discovered it was a miscommunication about requirements. I brought them together for a collaborative discussion where they could share their viewpoints and find common ground. We established clearer communication protocols to prevent similar issues."

## Working with Difficult People

**Scenario**: You had to work with someone who was challenging to collaborate with.

**Key Points to Address**:
- How you approached the relationship
- How you adapted your communication style
- How you focused on common goals
- How you maintained professionalism

**Example Response**:
"I worked with a colleague who was very direct and sometimes came across as abrasive. I learned to appreciate their efficiency and directness, and I adapted my communication style to be more concise and factual. I focused on our shared goal of delivering quality work and found that we actually complemented each other well - they were great at identifying issues quickly, while I was good at building consensus."

## Giving Constructive Feedback

**Scenario**: You had to give difficult feedback to a colleague or team member.

**Key Points to Address**:
- How you prepared for the conversation
- How you delivered the feedback constructively
- How you provided specific examples and suggestions
- How you followed up and supported improvement

**Example Response**:
"When I needed to give feedback to a team member about their communication style, I prepared specific examples and focused on the impact rather than personality. I scheduled a private meeting and started with positive feedback about their technical skills. I then shared specific instances where their communication could be improved and offered concrete suggestions. I also asked for their perspective and worked together to create an improvement plan."
        `,
        keyPoints: [
          'Focus on understanding different perspectives',
          'Show collaborative problem-solving approach',
          'Demonstrate empathy and professionalism',
          'Include specific actions and outcomes'
        ],
        estimatedTime: '20 minutes'
      },
      {
        id: 'team-contribution',
        title: 'Team Contribution & Collaboration',
        content: `
## Contributing to Team Success

**Scenario**: You made a significant contribution to your team's success.

**Key Points to Address**:
- How you identified opportunities to contribute
- How you collaborated with team members
- How you overcame challenges
- How you measured and celebrated success

**Example Response**:
"When our team was struggling with code review bottlenecks, I noticed that many reviews were getting stuck due to unclear feedback. I created a standardized review template and organized a team workshop to establish best practices. I also implemented a buddy system for new team members. This reduced review time by 40% and improved code quality significantly."

## Adapting to New Teams

**Scenario**: You had to quickly adapt to a new team or work environment.

**Key Points to Address**:
- How you learned about the team and its processes
- How you built relationships with team members
- How you contributed while learning
- How you demonstrated value quickly

**Example Response**:
"When I joined a new team, I spent the first week shadowing team members and asking questions about their processes and challenges. I identified a pain point in their deployment process and proposed a solution based on my previous experience. I worked with the team to implement it, which reduced deployment time by 50%. This helped me establish credibility and build relationships quickly."

## Cross-functional Collaboration

**Scenario**: You had to work with people from different departments or backgrounds.

**Key Points to Address**:
- How you built relationships across functions
- How you communicated effectively with different audiences
- How you aligned goals and priorities
- How you overcame challenges and achieved results

**Example Response**:
"When working on a product launch that required coordination between engineering, marketing, and sales teams, I organized regular cross-functional meetings to ensure alignment. I learned to translate technical concepts into business terms for non-technical stakeholders. I also created a shared project timeline and established clear communication channels. This resulted in a successful launch with all teams working cohesively."
        `,
        keyPoints: [
          'Show initiative and proactive approach',
          'Demonstrate relationship-building skills',
          'Include specific contributions and results',
          'Focus on collaboration and communication'
        ],
        estimatedTime: '20 minutes'
      }
    ]
  },
  {
    id: 'problem-solving',
    title: 'Problem-Solving & Innovation',
    description: 'Questions about your approach to solving complex problems, thinking creatively, and driving innovation',
    difficulty: 'Intermediate',
    estimatedTime: '35 minutes',
    content: `
# Problem-Solving & Innovation Questions

Problem-solving questions assess your analytical thinking, creativity, and ability to overcome challenges. These questions often focus on your approach to complex problems, innovation, and continuous improvement.

## Common Problem-Solving Questions

1. "Tell me about a time when you had to solve a complex problem."
2. "Describe a situation where you had to think outside the box."
3. "How do you approach problems when you don't have all the information?"
4. "Tell me about a time when you had to learn something new quickly."
5. "Describe a situation where you had to innovate or improve a process."

## Key Problem-Solving Competencies

- **Analytical Thinking**: Breaking down complex problems into manageable parts
- **Creativity**: Generating innovative solutions and approaches
- **Learning Agility**: Quickly acquiring new knowledge and skills
- **Persistence**: Overcoming obstacles and setbacks
- **Results Orientation**: Focusing on outcomes and impact
    `,
    subtopics: [
      {
        id: 'complex-problems',
        title: 'Solving Complex Problems',
        content: `
## Technical Problem-Solving

**Scenario**: You had to solve a complex technical problem that was affecting your team or organization.

**Key Points to Address**:
- How you analyzed and understood the problem
- How you researched and gathered information
- How you developed and tested solutions
- How you implemented and validated the fix

**Example Response**:
"When our application was experiencing intermittent performance issues that were difficult to reproduce, I started by analyzing the system logs and monitoring data to identify patterns. I researched similar issues and consulted with senior engineers. I created a systematic testing approach to reproduce the problem and developed multiple potential solutions. I implemented the most promising solution with proper monitoring and validated that it resolved the issue."

## Business Problem-Solving

**Scenario**: You had to solve a business problem that required creative thinking.

**Key Points to Address**:
- How you understood the business context and constraints
- How you identified root causes and opportunities
- How you developed innovative solutions
- How you measured and communicated results

**Example Response**:
"When our customer support team was overwhelmed with repetitive questions, I analyzed the most common issues and identified that many could be resolved through self-service. I proposed creating a comprehensive FAQ system and knowledge base. I worked with the support team to document solutions and implemented a chatbot for common queries. This reduced support tickets by 60% and improved customer satisfaction."

## Learning New Skills Quickly

**Scenario**: You had to learn a new technology or skill quickly to solve a problem.

**Key Points to Address**:
- How you identified what you needed to learn
- How you prioritized and structured your learning
- How you applied your new knowledge
- How you shared your learning with others

**Example Response**:
"When our team needed to implement a new cloud service that I wasn't familiar with, I started by reading the official documentation and watching tutorial videos. I created a small proof-of-concept to test the basic functionality. I then worked with more experienced team members to understand best practices and potential pitfalls. Within a week, I was able to implement the solution and train other team members."
        `,
        keyPoints: [
          'Show systematic approach to problem analysis',
          'Demonstrate research and learning skills',
          'Include testing and validation steps',
          'Focus on results and impact'
        ],
        estimatedTime: '20 minutes'
      },
      {
        id: 'innovation-improvement',
        title: 'Innovation & Process Improvement',
        content: `
## Process Improvement

**Scenario**: You identified and improved an inefficient process in your organization.

**Key Points to Address**:
- How you identified the opportunity for improvement
- How you analyzed the current process
- How you developed and implemented improvements
- How you measured and sustained the improvements

**Example Response**:
"I noticed that our code deployment process was taking too long and causing frequent issues. I analyzed the current process and identified bottlenecks in testing and approval workflows. I proposed implementing automated testing and a streamlined approval process. I worked with the team to implement these changes and created monitoring dashboards to track improvements. This reduced deployment time by 70% and decreased production issues by 50%."

## Creative Problem-Solving

**Scenario**: You had to think creatively to solve a problem with limited resources.

**Key Points to Address**:
- How you approached the problem with limited resources
- How you generated creative alternatives
- How you evaluated and selected the best approach
- How you implemented and validated the solution

**Example Response**:
"When our team needed to test our application across multiple devices but didn't have access to expensive testing tools, I researched open-source alternatives and found a cloud-based testing platform that offered a free tier. I also created a device testing matrix to prioritize the most important combinations. This allowed us to achieve comprehensive testing coverage without exceeding our budget."

## Driving Innovation

**Scenario**: You introduced an innovative idea or approach that improved your team or organization.

**Key Points to Address**:
- How you identified the opportunity for innovation
- How you developed and refined your idea
- How you gained buy-in and support
- How you implemented and measured the impact

**Example Response**:
"I noticed that our team was spending too much time in meetings that weren't productive. I proposed implementing a structured meeting format with clear agendas, time limits, and action items. I created a template and trained the team on the new format. This reduced meeting time by 30% and improved team productivity significantly."
        `,
        keyPoints: [
          'Show creative thinking and resourcefulness',
          'Demonstrate systematic approach to improvement',
          'Include measurement and validation',
          'Focus on sustainable solutions'
        ],
        estimatedTime: '15 minutes'
      }
    ]
  },
  {
    id: 'communication-skills',
    title: 'Communication & Presentation',
    description: 'Questions about your communication style, presentation skills, and ability to influence others',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    content: `
# Communication & Presentation Questions

Communication questions assess your ability to convey information clearly, present ideas effectively, and influence others. These questions often focus on your communication style, presentation skills, and ability to adapt your message to different audiences.

## Common Communication Questions

1. "Tell me about a time when you had to explain a complex topic to a non-technical audience."
2. "Describe a situation where you had to present to senior leadership."
3. "How do you handle difficult conversations with colleagues or clients?"
4. "Tell me about a time when you had to persuade someone to see your point of view."
5. "Describe a situation where you had to communicate bad news."

## Key Communication Competencies

- **Clarity**: Conveying information clearly and concisely
- **Adaptability**: Adjusting communication style to different audiences
- **Active Listening**: Understanding and responding to others' perspectives
- **Influence**: Persuading and motivating others
- **Empathy**: Understanding and considering others' feelings and needs
    `,
    subtopics: [
      {
        id: 'technical-communication',
        title: 'Technical Communication',
        content: `
## Explaining Complex Topics

**Scenario**: You had to explain a technical concept to a non-technical audience.

**Key Points to Address**:
- How you simplified complex concepts
- How you used analogies and examples
- How you ensured understanding
- How you handled questions and feedback

**Example Response**:
"When I had to explain our new database architecture to the marketing team, I used the analogy of a library system to describe how data is organized and retrieved. I created visual diagrams and focused on the business benefits rather than technical details. I also provided concrete examples of how it would improve their work processes. I asked for feedback throughout the presentation to ensure they understood the key points."

## Presenting to Leadership

**Scenario**: You had to present a proposal or update to senior leadership.

**Key Points to Address**:
- How you prepared and structured your presentation
- How you focused on business impact and value
- How you handled questions and challenges
- How you followed up and maintained momentum

**Example Response**:
"When presenting a proposal for a new development tool to senior leadership, I started with the business problem and its impact on productivity. I provided data on current inefficiencies and projected benefits. I kept technical details to a minimum and focused on ROI and timeline. I anticipated potential concerns and prepared responses. After the presentation, I followed up with detailed documentation and offered to answer additional questions."

## Documentation and Knowledge Sharing

**Scenario**: You had to create documentation or share knowledge with your team.

**Key Points to Address**:
- How you organized and structured the information
- How you made it accessible and useful
- How you gathered feedback and improved it
- How you ensured it was maintained and updated

**Example Response**:
"When I created documentation for our new API, I organized it by user roles and use cases. I included code examples, troubleshooting guides, and best practices. I worked with team members to review and improve the documentation. I also set up a process for regular updates and created a feedback mechanism for users to suggest improvements."
        `,
        keyPoints: [
          'Focus on audience needs and understanding',
          'Use analogies and examples effectively',
          'Show preparation and structure',
          'Include feedback and improvement processes'
        ],
        estimatedTime: '15 minutes'
      },
      {
        id: 'difficult-conversations',
        title: 'Difficult Conversations',
        content: `
## Delivering Bad News

**Scenario**: You had to communicate bad news to a team member or client.

**Key Points to Address**:
- How you prepared for the conversation
- How you delivered the message clearly and empathetically
- How you provided context and explanation
- How you supported the person and next steps

**Example Response**:
"When I had to inform a client that we couldn't meet their original deadline, I prepared by gathering all the facts and identifying potential solutions. I scheduled a call and delivered the news directly but empathetically. I explained the reasons and provided a revised timeline with specific milestones. I also offered alternative approaches and asked for their input on priorities."

## Persuasion and Influence

**Scenario**: You had to persuade someone to adopt your idea or approach.

**Key Points to Address**:
- How you understood their perspective and concerns
- How you presented your case with evidence
- How you addressed objections and concerns
- How you built consensus and agreement

**Example Response**:
"When I wanted to implement a new testing framework, I first understood my colleague's concerns about the learning curve and time investment. I presented data showing how it would reduce bugs and improve code quality. I addressed their concerns by proposing a gradual rollout with training sessions. I also highlighted how it would benefit their specific work and offered to help with the transition."

## Conflict Communication

**Scenario**: You had to communicate effectively during a conflict or disagreement.

**Key Points to Address**:
- How you remained calm and professional
- How you focused on facts and solutions
- How you listened to and acknowledged others' perspectives
- How you worked toward resolution and agreement

**Example Response**:
"During a disagreement about project priorities, I focused on the facts and our shared goals rather than personal opinions. I actively listened to understand my colleague's perspective and acknowledged their concerns. I proposed a collaborative approach to find a solution that addressed both our priorities. We worked together to create a compromise that satisfied both parties."
        `,
        keyPoints: [
          'Show empathy and professionalism',
          'Focus on facts and solutions',
          'Demonstrate active listening',
          'Include follow-up and support'
        ],
        estimatedTime: '15 minutes'
      }
    ]
  },
  {
    id: 'adaptability-resilience',
    title: 'Adaptability & Resilience',
    description: 'Questions about handling change, overcoming setbacks, and demonstrating resilience in challenging situations',
    difficulty: 'Intermediate',
    estimatedTime: '35 minutes',
    content: `
# Adaptability & Resilience Questions

Adaptability questions assess your ability to handle change, learn from setbacks, and demonstrate resilience in challenging situations. These questions often focus on your response to change, ability to learn from failure, and capacity to bounce back from difficulties.

## Common Adaptability Questions

1. "Tell me about a time when you had to adapt to a major change at work."
2. "Describe a situation where you failed and what you learned from it."
3. "How do you handle stress and pressure in the workplace?"
4. "Tell me about a time when you had to learn something new quickly."
5. "Describe a situation where you had to work with limited resources."

## Key Adaptability Competencies

- **Flexibility**: Adapting to changing circumstances and requirements
- **Learning Agility**: Quickly acquiring new knowledge and skills
- **Resilience**: Bouncing back from setbacks and challenges
- **Stress Management**: Maintaining performance under pressure
- **Resourcefulness**: Finding creative solutions with limited resources
    `,
    subtopics: [
      {
        id: 'handling-change',
        title: 'Handling Change & Uncertainty',
        content: `
## Organizational Change

**Scenario**: You had to adapt to a major organizational change (restructuring, new leadership, process changes).

**Key Points to Address**:
- How you initially reacted to the change
- How you adapted your approach and mindset
- How you supported others through the change
- How you found opportunities in the new situation

**Example Response**:
"When our company went through a major restructuring, I initially felt uncertain about the changes. However, I focused on understanding the business reasons behind the changes and how I could contribute to the new direction. I adapted my work style to align with the new processes and helped my team members navigate the transition. I also identified opportunities to take on new responsibilities and grow in the new structure."

## Technology Changes

**Scenario**: You had to adapt to new technologies or tools in your work.

**Key Points to Address**:
- How you approached learning the new technology
- How you managed the transition period
- How you helped others adapt
- How you leveraged the new technology for improvement

**Example Response**:
"When our team migrated to a new development framework, I embraced the change as an opportunity to improve our processes. I invested time in learning the new framework thoroughly and created documentation to help my team members. I also identified ways to leverage the new technology to improve our development workflow and code quality."

## Role Changes

**Scenario**: You had to adapt to a new role or responsibility.

**Key Points to Address**:
- How you approached the learning curve
- How you prioritized and managed new responsibilities
- How you sought support and resources
- How you measured your progress and success

**Example Response**:
"When I was promoted to a team lead role, I focused on understanding the expectations and responsibilities of the new position. I sought mentorship from experienced leaders and invested time in developing my management skills. I also worked closely with my team to understand their needs and establish effective working relationships."
        `,
        keyPoints: [
          'Show positive mindset and adaptability',
          'Demonstrate learning and growth',
          'Include support for others',
          'Focus on opportunities and improvement'
        ],
        estimatedTime: '20 minutes'
      },
      {
        id: 'overcoming-setbacks',
        title: 'Overcoming Setbacks & Failure',
        content: `
## Learning from Failure

**Scenario**: You experienced a failure or setback and learned from it.

**Key Points to Address**:
- How you initially reacted to the failure
- How you analyzed what went wrong
- How you learned from the experience
- How you applied those lessons to future situations

**Example Response**:
"When a project I was leading failed to meet its objectives, I took time to reflect on what went wrong. I analyzed the root causes and identified areas where I could have done better. I learned the importance of better risk management and stakeholder communication. I applied these lessons to future projects and implemented new processes to prevent similar issues."

## Handling Stress and Pressure

**Scenario**: You had to perform under significant stress or pressure.

**Key Points to Address**:
- How you managed your stress and maintained focus
- How you prioritized and organized your work
- How you sought support when needed
- How you maintained quality and performance

**Example Response**:
"During a critical project with tight deadlines, I focused on maintaining a structured approach to manage stress. I broke down the work into manageable tasks and prioritized based on impact. I communicated regularly with my team and stakeholders to manage expectations. I also made sure to take breaks and maintain work-life balance to stay productive."

## Resource Constraints

**Scenario**: You had to achieve results with limited resources (time, budget, people).

**Key Points to Address**:
- How you assessed and prioritized needs
- How you found creative solutions
- How you maximized available resources
- How you communicated constraints and expectations

**Example Response**:
"When our team had to deliver a project with a reduced budget, I focused on identifying the most critical requirements and finding cost-effective solutions. I researched open-source alternatives and negotiated better rates with vendors. I also worked with the team to optimize our processes and eliminate unnecessary expenses."
        `,
        keyPoints: [
          'Show resilience and positive attitude',
          'Demonstrate learning and growth mindset',
          'Include stress management strategies',
          'Focus on creative problem-solving'
        ],
        estimatedTime: '15 minutes'
      }
    ]
  }
]; 