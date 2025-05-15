document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.skill-tab');
    const panes = document.querySelectorAll('.skill-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const tabType = this.getAttribute('data-tab');
            document.getElementById(`${tabType}-skills`).classList.add('active');
        });
    });
});
function animateProjectsSection() {
  const projectsSection = document.getElementById('projects');
  
  if (!projectsSection) return;

  projectsSection.style.opacity = '0';
  projectsSection.style.transform = 'translateY(20px)';
  projectsSection.style.transition = 'opacity 1.5s ease, transform 1.5s ease';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectsSection.style.opacity = '1';
        projectsSection.style.transform = 'translateY(0)';
        observer.unobserve(projectsSection);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(projectsSection);
}

document.addEventListener('DOMContentLoaded', animateProjectsSection);