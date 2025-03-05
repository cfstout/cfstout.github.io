---
layout: default
title: About Me
permalink: /about/
---

<div class="about-header">
  <div class="container">
    <h1>About Me</h1>
  </div>
</div>

<section class="about-section">
  <div class="container">
    <div class="about-grid">
      <div class="about-image animate-on-scroll">
        <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Clayton Stout">
      </div>
      <div class="about-content animate-on-scroll">
        <h2>Hi, I'm Clayton Stout</h2>
        <p>I'm a Staff Software Engineer and Tech Lead with 11+ years of experience building robust, scalable backend systems. Based in Missoula, Montana, I specialize in JVM technologies, with deep expertise in Java, Kotlin, and Scala.</p>

        <p>Throughout my career at companies like Gemini, Hubspot, Classpass, and Spredfast (now Khoros), I've architected and developed high-performance backend systems that handle millions of requests daily. I'm passionate about designing asynchronous, event-driven architectures that efficiently process large volumes of data while maintaining reliability and debuggability.</p>
        
        <p>As a tech lead, I excel in guiding teams through complex architectural transitions, such as moving from monolithic to microservice-based architectures. I thrive on mentoring other developers, establishing best practices, and making strategic technical decisions that align with business objectives.</p>
        
        <p>I'm a staunch advocate for functional programming, approaching problems with an emphasis on discrete inputs and outputs while minimizing shared mutable state to create more reliable and maintainable systems.</p>
        
        <div class="about-cta">
          <a href="{{ '/assets/resume.pdf' | relative_url }}" class="btn primary" target="_blank">Download Resume</a>
          <a href="mailto:clayfstout@gmail.com" class="btn outline">Contact Me</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="skills-section">
  <div class="container">
    <h2 class="section-title">Technical Skills</h2>

    <div class="skills-grid animate-on-scroll">
      <div class="skill-category">
        <h3><i class="fas fa-code"></i> Languages</h3>
        <ul class="skill-list">
          <li>Java (Expert)</li>
          <li>Kotlin (Expert)</li>
          <li>Scala (Expert)</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Ruby/Rails</li>
          <li>Bash</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3><i class="fas fa-cubes"></i> Frameworks</h3>
        <ul class="skill-list">
          <li>Dropwizard</li>
          <li>Ktor</li>
          <li>Play Framework</li>
          <li>ZIO</li>
          <li>Spring Boot</li>
          <li>Docker/Kubernetes</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3><i class="fas fa-database"></i> Data & Messaging</h3>
        <ul class="skill-list">
          <li>Kafka</li>
          <li>Elasticsearch</li>
          <li>Cassandra</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Redis</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3><i class="fas fa-cloud"></i> Cloud & DevOps</h3>
        <ul class="skill-list">
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>CI/CD Pipelines</li>
          <li>Chaos Engineering</li>
          <li>Monitoring Systems</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="experience-section">
  <div class="container">
    <h2 class="section-title">Work Experience</h2>

    <div class="timeline animate-on-scroll">
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2022 - Present</div>
          <h3 class="timeline-title">Staff Software Engineer / Tech Lead</h3>
          <p class="timeline-company">Gemini (Remote)</p>
          <p>Leading the Identity team that manages user data across all Gemini products, overseeing validation APIs, and maintaining authentication systems including MFA. Spearheaded the transition from monolith to microservices, improving deployment frequency while mentoring engineers and designing hiring pipelines.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2020 - 2022</div>
          <h3 class="timeline-title">Senior Software Engineer II</h3>
          <p class="timeline-company">Hubspot (Remote)</p>
          <p>Optimized the Search team's performance through quality of service bucketing. Led the Chaos Engineering initiative by developing tools for failure injection, experiment running, and load testing. Conducted game days to validate postmortem remediations and improved workflows around outages.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2019 - 2020</div>
          <h3 class="timeline-title">Senior Software Engineer</h3>
          <p class="timeline-company">Classpass (Remote and Missoula, MT)</p>
          <p>Redesigned the ingestion system for improved scalability and debuggability, handling data sync from 30k+ studio partners. Created a real-time update API with Kafka library code for company-wide use. Led the backend guild, evangelizing best practices and teaching Kotlin to other engineers.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2016 - 2019</div>
          <h3 class="timeline-title">Senior Software Engineer</h3>
          <p class="timeline-company">Spredfast (now Khoros) (Austin, TX)</p>
          <p>Transitioned the system from PHP to Java-based microservices using Kafka, enhancing content polling efficiency to over 4000 items per second. Integrated with multiple social networks and revamped our metrics fetching pipeline. Created an internal debugging tool that improved bugfix turnaround from 3 weeks to 4 days.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2014 - 2016</div>
          <h3 class="timeline-title">Software Engineer</h3>
          <p class="timeline-company">Bazaarvoice (Austin, TX)</p>
          <p>Designed a reporting service for advertising campaign ROI, contributing to significant revenue. Created a Storm topology for real-time processing of 2500 pageviews per second. Migrated data between legacy MySQL and new Cassandra database while optimizing Elasticsearch to handle 4000 requests per second.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="education-section">
  <div class="container">
    <h2 class="section-title">Education</h2>

    <div class="education-grid animate-on-scroll">
      <div class="education-item">
        <div class="education-content">
          <div class="education-date">2013 - 2014</div>
          <h3 class="education-title">Georgia Institute of Technology</h3>
          <p class="education-details">Bachelor of Science in Computer Science</p>
          <p class="education-gpa">GPA: 3.93/4.0</p>
        </div>
      </div>
      
      <div class="education-item">
        <div class="education-content">
          <div class="education-date">2009 - 2012</div>
          <h3 class="education-title">United States Naval Academy</h3>
          <p class="education-details">Pursuing Bachelor of Science in Computer Science, Minor in Arabic</p>
          <p class="education-gpa">GPA: 3.97/4.0</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact-cta">
  <div class="container">
    <div class="cta-content animate-on-scroll">
      <h2>Let's Connect</h2>
      <p>I'm currently open to remote opportunities where I can leverage my expertise in backend architecture and team leadership.</p>
      <div class="cta-buttons">
        <a href="mailto:clayfstout@gmail.com" class="btn primary">Send Email</a>
        <a href="https://github.com/cfstout" class="btn outline" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/clayton-stout-91098666/" class="btn outline" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</section>
