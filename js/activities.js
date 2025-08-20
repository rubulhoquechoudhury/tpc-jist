// Activities Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeActivitiesPage();
    initializeScrollReveal();
    initializeModalFunctionality();
});

// Initialize activities page functionality
function initializeActivitiesPage() {
    const moreButtons = document.querySelectorAll('.more-btn');
    
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const activityType = this.getAttribute('data-activity');
            handleMoreButtonClick(this, activityType);
        });
    });
}

// Handle more button clicks
function handleMoreButtonClick(button, activityType) {
    const isExpanded = button.classList.contains('expanded');
    
    if (isExpanded) {
        closeModal();
        button.classList.remove('expanded');
        button.innerHTML = '<i class="fas fa-plus"></i> Learn More';
    } else {
        openActivityModal(activityType);
        button.classList.add('expanded');
        button.innerHTML = '<i class="fas fa-times"></i> Close';
    }
}

// Open activity modal with iframe content
function openActivityModal(activityType) {
    const modal = document.getElementById('activityModal');
    const iframe = document.getElementById('activityFrame');
    
    // Add loading state
    modal.classList.add('loading');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Generate dynamic content based on activity type
    const content = generateActivityContent(activityType);
    
    // Create a blob URL for the iframe content
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Load content into iframe
    iframe.onload = function() {
        modal.classList.remove('loading');
    };
    
    iframe.src = url;
    
    // Clean up blob URL after use
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);
}

// Generate dynamic content for each activity
function generateActivityContent(activityType) {
    const activities = {
        technical: {
            title: 'Technical Skills Training',
            content: `
                <div class="activity-detail">
                    <h2>Technical Skills Training Program</h2>
                    <div class="content-grid">
                        <div class="content-section">
                            <h3><i class="fas fa-code"></i> Programming Languages</h3>
                            <ul>
                                <li>Java, Python, C++, JavaScript</li>
                                <li>Web Development (HTML, CSS, React, Node.js)</li>
                                <li>Mobile App Development (Android, Flutter)</li>
                                <li>Database Management (MySQL, MongoDB)</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-tools"></i> Tools & Technologies</h3>
                            <ul>
                                <li>Version Control (Git, GitHub)</li>
                                <li>Cloud Platforms (AWS, Azure, GCP)</li>
                                <li>DevOps Tools (Docker, Jenkins)</li>
                                <li>Development IDEs (VS Code, IntelliJ)</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-calendar-alt"></i> Program Schedule</h3>
                            <ul>
                                <li>Duration: 6 months intensive training</li>
                                <li>Mode: Hybrid (Online + Offline)</li>
                                <li>Timings: Weekdays 4:00 PM - 6:00 PM</li>
                                <li>Weekends: 10:00 AM - 4:00 PM</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-certificate"></i> Certification</h3>
                            <ul>
                                <li>Industry-recognized certificates</li>
                                <li>Project-based assessments</li>
                                <li>Portfolio development</li>
                                <li>Job placement assistance</li>
                            </ul>
                        </div>
                    </div>
                    <div class="cta-section">
                        <button class="btn-primary">Enroll Now</button>
                        <button class="btn-secondary">Download Brochure</button>
                    </div>
                </div>
            `
        },
        softskills: {
            title: 'Soft Skills Development',
            content: `
                <div class="activity-detail">
                    <h2>Soft Skills Development Program</h2>
                    <div class="content-grid">
                        <div class="content-section">
                            <h3><i class="fas fa-comments"></i> Communication Skills</h3>
                            <ul>
                                <li>Verbal and written communication</li>
                                <li>Public speaking and presentations</li>
                                <li>Email etiquette and professional writing</li>
                                <li>Cross-cultural communication</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-users"></i> Leadership & Teamwork</h3>
                            <ul>
                                <li>Team building exercises</li>
                                <li>Leadership development workshops</li>
                                <li>Conflict resolution techniques</li>
                                <li>Project management basics</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-lightbulb"></i> Problem Solving</h3>
                            <ul>
                                <li>Critical thinking development</li>
                                <li>Creative problem-solving techniques</li>
                                <li>Decision-making frameworks</li>
                                <li>Analytical reasoning</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-handshake"></i> Professional Etiquette</h3>
                            <ul>
                                <li>Workplace behavior and ethics</li>
                                <li>Networking skills</li>
                                <li>Time management</li>
                                <li>Stress management techniques</li>
                            </ul>
                        </div>
                    </div>
                    <div class="stats-showcase">
                        <div class="stat-item">
                            <h4>95%</h4>
                            <p>Student Satisfaction</p>
                        </div>
                        <div class="stat-item">
                            <h4>500+</h4>
                            <p>Students Trained</p>
                        </div>
                        <div class="stat-item">
                            <h4>20+</h4>
                            <p>Expert Trainers</p>
                        </div>
                    </div>
                </div>
            `
        },
        interviews: {
            title: 'Mock Interviews & Assessment',
            content: `
                <div class="activity-detail">
                    <h2>Mock Interview & Assessment Program</h2>
                    <div class="content-grid">
                        <div class="content-section">
                            <h3><i class="fas fa-microphone"></i> Interview Types</h3>
                            <ul>
                                <li>Technical interviews with coding rounds</li>
                                <li>HR interviews and behavioral questions</li>
                                <li>Group discussions and case studies</li>
                                <li>Video interviews and phone screenings</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-chart-line"></i> Assessment Areas</h3>
                            <ul>
                                <li>Technical competency evaluation</li>
                                <li>Communication and presentation skills</li>
                                <li>Problem-solving abilities</li>
                                <li>Personality and cultural fit</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-feedback"></i> Feedback Process</h3>
                            <ul>
                                <li>Detailed performance analysis</li>
                                <li>Personalized improvement suggestions</li>
                                <li>Video recording for self-assessment</li>
                                <li>Follow-up coaching sessions</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-trophy"></i> Success Metrics</h3>
                            <ul>
                                <li>90% improvement in confidence levels</li>
                                <li>85% success rate in actual interviews</li>
                                <li>Average 3x increase in job offers</li>
                                <li>Industry-standard evaluation criteria</li>
                            </ul>
                        </div>
                    </div>
                    <div class="process-flow">
                        <h3>Interview Process Flow</h3>
                        <div class="flow-steps">
                            <div class="step">1. Registration</div>
                            <div class="step">2. Pre-Assessment</div>
                            <div class="step">3. Mock Interview</div>
                            <div class="step">4. Feedback Session</div>
                            <div class="step">5. Improvement Plan</div>
                        </div>
                    </div>
                </div>
            `
        },
        industry: {
            title: 'Industry Visits & Internships',
            content: `
                <div class="activity-detail">
                    <h2>Industry Visits & Internship Programs</h2>
                    <div class="content-grid">
                        <div class="content-section">
                            <h3><i class="fas fa-building"></i> Partner Companies</h3>
                            <ul>
                                <li>TCS, Infosys, Wipro, Cognizant</li>
                                <li>Tech Mahindra, HCL, Accenture</li>
                                <li>Startups and emerging companies</li>
                                <li>Government organizations (ISRO, DRDO)</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-map-marked-alt"></i> Visit Locations</h3>
                            <ul>
                                <li>Bangalore - IT Capital of India</li>
                                <li>Hyderabad - Cyberabad</li>
                                <li>Pune - Software hub</li>
                                <li>Guwahati - Regional tech centers</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-briefcase"></i> Internship Opportunities</h3>
                            <ul>
                                <li>Summer internships (2-3 months)</li>
                                <li>Industry projects and research</li>
                                <li>Mentorship programs</li>
                                <li>Full-time job conversion opportunities</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-graduation-cap"></i> Learning Outcomes</h3>
                            <ul>
                                <li>Real-world work experience</li>
                                <li>Industry best practices exposure</li>
                                <li>Professional network building</li>
                                <li>Career path clarity</li>
                            </ul>
                        </div>
                    </div>
                    <div class="testimonial">
                        <blockquote>
                            "The industry visit to TCS Bangalore opened my eyes to the real IT world. 
                            The internship opportunity I got there led to my full-time job offer!"
                        </blockquote>
                        <cite>- Priya Sharma, CSE 2024</cite>
                    </div>
                </div>
            `
        },
        career: {
            title: 'Career Guidance & Counseling',
            content: `
                <div class="activity-detail">
                    <h2>Career Guidance & Counseling Services</h2>
                    <div class="content-grid">
                        <div class="content-section">
                            <h3><i class="fas fa-compass"></i> Career Assessment</h3>
                            <ul>
                                <li>Personality and aptitude tests</li>
                                <li>Skills and interest evaluation</li>
                                <li>Strengths and weaknesses analysis</li>
                                <li>Career compatibility matching</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-route"></i> Career Pathways</h3>
                            <ul>
                                <li>IT and Software Development</li>
                                <li>Core Engineering Fields</li>
                                <li>Research and Higher Studies</li>
                                <li>Entrepreneurship and Startups</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-user-tie"></i> Counseling Sessions</h3>
                            <ul>
                                <li>One-on-one career counseling</li>
                                <li>Group counseling sessions</li>
                                <li>Alumni mentorship programs</li>
                                <li>Industry expert interactions</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-graduation-cap"></i> Higher Studies Guidance</h3>
                            <ul>
                                <li>Masters programs (MS, MTech, MBA)</li>
                                <li>Entrance exam preparation (GRE, GMAT, GATE)</li>
                                <li>University selection and applications</li>
                                <li>Scholarship and funding opportunities</li>
                            </ul>
                        </div>
                    </div>
                    <div class="counselor-team">
                        <h3>Our Counseling Team</h3>
                        <div class="team-grid">
                            <div class="counselor">
                                <h4>Dr. Rajesh Kumar</h4>
                                <p>Career Counseling Expert<br>15+ years experience</p>
                            </div>
                            <div class="counselor">
                                <h4>Ms. Priya Devi</h4>
                                <p>Industry Relations Manager<br>10+ years experience</p>
                            </div>
                            <div class="counselor">
                                <h4>Mr. Amit Sharma</h4>
                                <p>Alumni Relations Coordinator<br>8+ years experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        workshops: {
            title: 'Workshops & Guest Lectures',
            content: `
                <div class="activity-detail">
                    <h2>Workshops & Guest Lecture Series</h2>
                    <div class="content-grid">
                        <div class="content-section">
                            <h3><i class="fas fa-chalkboard-teacher"></i> Regular Workshops</h3>
                            <ul>
                                <li>Resume writing and LinkedIn optimization</li>
                                <li>Interview preparation workshops</li>
                                <li>Technical skill development sessions</li>
                                <li>Entrepreneurship and innovation workshops</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-star"></i> Guest Speakers</h3>
                            <ul>
                                <li>Industry leaders and CEOs</li>
                                <li>Successful alumni and entrepreneurs</li>
                                <li>Technical experts and researchers</li>
                                <li>HR professionals and recruiters</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-calendar-check"></i> Upcoming Events</h3>
                            <ul>
                                <li>AI & Machine Learning Trends - Aug 15</li>
                                <li>Startup Success Stories - Aug 22</li>
                                <li>Cloud Computing Workshop - Sep 5</li>
                                <li>Career Fair Preparation - Sep 12</li>
                            </ul>
                        </div>
                        <div class="content-section">
                            <h3><i class="fas fa-trophy"></i> Past Highlights</h3>
                            <ul>
                                <li>50+ workshops conducted this year</li>
                                <li>2000+ student participants</li>
                                <li>30+ industry expert speakers</li>
                                <li>95% positive feedback rating</li>
                            </ul>
                        </div>
                    </div>
                    <div class="recent-events">
                        <h3>Recent Workshop Gallery</h3>
                        <div class="event-gallery">
                            <div class="event-card">
                                <h4>Tech Talk on Blockchain</h4>
                                <p>July 2025 - Speaker: Mr. Vikash Kumar (Tech Mahindra)</p>
                            </div>
                            <div class="event-card">
                                <h4>Women in Tech Panel</h4>
                                <p>June 2025 - Panel of 5 successful women leaders</p>
                            </div>
                            <div class="event-card">
                                <h4>Startup Pitch Competition</h4>
                                <p>May 2025 - 20 student teams participated</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    };

    const activity = activities[activityType] || activities.technical;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${activity.title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
                    min-height: 100vh;
                }
                
                .activity-detail {
                    padding: 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                
                h2 {
                    font-size: 2.5rem;
                    color: #2c3e50;
                    margin-bottom: 2rem;
                    text-align: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .content-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }
                
                .content-section {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }
                
                .content-section:hover {
                    transform: translateY(-5px);
                }
                
                .content-section h3 {
                    font-size: 1.3rem;
                    color: #667eea;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .content-section ul {
                    list-style: none;
                }
                
                .content-section li {
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #eee;
                    position: relative;
                    padding-left: 1.5rem;
                }
                
                .content-section li:before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #667eea;
                    font-weight: bold;
                }
                
                .content-section li:last-child {
                    border-bottom: none;
                }
                
                .cta-section {
                    text-align: center;
                    margin-top: 2rem;
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                .btn-primary, .btn-secondary {
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }
                
                .btn-primary {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                
                .btn-secondary {
                    background: white;
                    color: #667eea;
                    border: 2px solid #667eea;
                }
                
                .btn-primary:hover, .btn-secondary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
                
                .stats-showcase {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                    text-align: center;
                }
                
                .stat-item {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 2rem 1rem;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                }
                
                .stat-item h4 {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .process-flow {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    margin-top: 2rem;
                }
                
                .process-flow h3 {
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #2c3e50;
                }
                
                .flow-steps {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .step {
                    flex: 1;
                    min-width: 120px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 1rem;
                    border-radius: 10px;
                    text-align: center;
                    font-weight: 600;
                    position: relative;
                }
                
                .step:not(:last-child):after {
                    content: '→';
                    position: absolute;
                    right: -1.5rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #667eea;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                
                .testimonial {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    margin-top: 2rem;
                    text-align: center;
                }
                
                .testimonial blockquote {
                    font-style: italic;
                    font-size: 1.2rem;
                    color: #555;
                    margin-bottom: 1rem;
                    position: relative;
                }
                
                .testimonial blockquote:before {
                    content: '"';
                    font-size: 4rem;
                    color: #667eea;
                    position: absolute;
                    left: -2rem;
                    top: -1rem;
                }
                
                .testimonial cite {
                    color: #667eea;
                    font-weight: 600;
                }
                
                .counselor-team, .recent-events {
                    background: white;
                    padding: 2rem;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    margin-top: 2rem;
                }
                
                .counselor-team h3, .recent-events h3 {
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #2c3e50;
                }
                
                .team-grid, .event-gallery {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .counselor, .event-card {
                    text-align: center;
                    padding: 1.5rem;
                    background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
                    border-radius: 10px;
                    border: 1px solid #e0e6ff;
                }
                
                .counselor h4, .event-card h4 {
                    color: #667eea;
                    margin-bottom: 0.5rem;
                }
                
                .counselor p, .event-card p {
                    color: #666;
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .activity-detail {
                        padding: 1rem;
                    }
                    
                    h2 {
                        font-size: 2rem;
                    }
                    
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    
                    .content-section {
                        padding: 1.5rem;
                    }
                    
                    .cta-section {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .btn-primary, .btn-secondary {
                        width: 100%;
                        max-width: 300px;
                    }
                    
                    .flow-steps {
                        flex-direction: column;
                    }
                    
                    .step:not(:last-child):after {
                        content: '↓';
                        right: 50%;
                        top: 100%;
                        transform: translateX(50%);
                    }
                }
            </style>
        </head>
        <body>
            ${activity.content}
        </body>
        </html>
    `;
}

// Close modal
function closeModal() {
    const modal = document.getElementById('activityModal');
    const iframe = document.getElementById('activityFrame');
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    iframe.src = '';
    
    // Reset all more buttons
    const moreButtons = document.querySelectorAll('.more-btn');
    moreButtons.forEach(button => {
        button.classList.remove('expanded');
        button.innerHTML = '<i class="fas fa-plus"></i> Learn More';
    });
}

// Initialize modal functionality
function initializeModalFunctionality() {
    const modal = document.getElementById('activityModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Initialize scroll reveal animation
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe activity boxes for animation
    const activityBoxes = document.querySelectorAll('.activity-box');
    activityBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`;
        observer.observe(box);
    });
}

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.more-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization - lazy load iframe content only when needed
function optimizeModalPerformance() {
    const modal = document.getElementById('activityModal');
    const iframe = document.getElementById('activityFrame');
    
    // Preload critical CSS for better performance
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'style';
    preloadLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(preloadLink);
}

// Initialize performance optimizations
optimizeModalPerformance();

// Error handling for iframe loading
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('activityFrame');
    
    iframe.addEventListener('error', function() {
        const errorContent = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e74c3c; margin-bottom: 1rem;"></i>
                <h3 style="color: #2c3e50; margin-bottom: 1rem;">Content Loading Error</h3>
                <p style="color: #666; margin-bottom: 2rem;">Sorry, we couldn't load the content. Please try again.</p>
                <button onclick="parent.closeModal()" style="background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer;">Close</button>
            </div>
        `;
        
        const blob = new Blob([errorContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        iframe.src = url;
        
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
});

console.log('Activities page initialized successfully!');
