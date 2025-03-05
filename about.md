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
        <p>I'm a Staff Backend Engineer with 11+ years of experience building robust, scalable software systems. I specialize in JVM technologies, with deep expertise in Java, Kotlin, and Scala.</p>

        <p>Throughout my career, I've architected and developed high-performance backend systems that handle millions of requests daily. I'm passionate about clean code, thoughtful system design, and creating software that solves real-world problems elegantly.</p>
        
        <p>As a staff engineer, I thrive on mentoring other developers, establishing best practices, and making strategic technical decisions that guide products toward success. I believe in pragmatic solutions that balance technical excellence with business value.</p>
        
        <p>When I'm not coding, you can find me building small games and apps, exploring new technologies, or contributing to open-source projects. I'm always looking to expand my knowledge and skills in the ever-evolving tech landscape.</p>
        
        <div class="about-cta">
          <a href="{{ '/assets/resume.pdf' | relative_url }}" class="btn primary" target="_blank">Download Resume</a>
          <a href="mailto:{{ site.email }}" class="btn outline">Contact Me</a>
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
          <li>Java (11+)</li>
          <li>Kotlin</li>
          <li>Scala</li>
          <li>SQL</li>
          <li>HTML/CSS/JavaScript</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3><i class="fas fa-cubes"></i> Frameworks</h3>
        <ul class="skill-list">
          <li>Dropwizard</li>
          <li>Ktor</li>
          <li>Play Framework</li>
          <li>Spring Boot</li>
          <li>Akka</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3><i class="fas fa-database"></i> Data & Messaging</h3>
        <ul class="skill-list">
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Kafka</li>
          <li>RabbitMQ</li>
        </ul>
      </div>
      
      <div class="skill-category">
        <h3><i class="fas fa-cloud"></i> Cloud & DevOps</h3>
        <ul class="skill-list">
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>CI/CD Pipelines</li>
          <li>Terraform</li>
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
          <div class="timeline-date">2021 - Present</div>
          <h3 class="timeline-title">Staff Backend Engineer</h3>
          <p class="timeline-company">Tech Innovation Inc.</p>
          <p>Leading backend architecture for a cloud-native SaaS platform. Designed and implemented microservices using Kotlin and Ktor, reduced API response times by 40%, and mentored junior engineers.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2017 - 2021</div>
          <h3 class="timeline-title">Senior Software Engineer</h3>
          <p class="timeline-company">Data Systems Corp</p>
          <p>Developed high-throughput data processing systems using Scala and Akka. Implemented event-driven architecture with Kafka, enhanced system reliability with comprehensive test suites.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2014 - 2017</div>
          <h3 class="timeline-title">Software Engineer</h3>
          <p class="timeline-company">Enterprise Solutions LLC</p>
          <p>Built RESTful APIs using Java and Dropwizard. Optimized database queries, implemented caching strategies, and contributed to the migration from monolith to microservices.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-content">
          <div class="timeline-date">2011 - 2014</div>
          <h3 class="timeline-title">Junior Developer</h3>
          <p class="timeline-company">Digital Innovations Co</p>
          <p>Developed backend features for e-commerce platforms using Java and Spring. Collaborated with front-end developers to ensure seamless API integration.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact-cta">
  <div class="container">
    <div class="cta-content animate-on-scroll">
      <h2>Let's Connect</h2>
      <p>I'm always interested in discussing new projects, opportunities, or just chatting about technology.</p>
      <div class="cta-buttons">
        <a href="mailto:{{ site.email }}" class="btn primary">Send Email</a>
        <a href="https://github.com/{{ site.github_username }}" class="btn outline" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="btn outline" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</section>
