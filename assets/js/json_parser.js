async function beginPopulate() {
    const requestURL_resume = 'https://gabrel-s.github.io/web-dev-portfolio/assets/js/json/resume.json';
    const requestURL_projects = 'https://gabrel-s.github.io/web-dev-portfolio/assets/js/json/projects.json';
    
    const request_resume = new Request(requestURL_resume);
    const request_projects = new Request(requestURL_projects);

    const response_resume = await fetch(request_resume);
    const response_projects = await fetch(request_projects);
    
    const resume = await response_resume.json();
    const projects = await response_projects.json();
    
    headerPopulate(resume);
}

function headerPopulate(obj){
    const headerStatus = document.getElementById('headerStatus');
    
    const subject = document.createElement('p');
    const status = document.createElement('p');
    const sub_status = document.createElement('p');
    
    subject.textContent = obj.subject;
    status.textContent = obj.status;
    sub_status.textContent = obj.sub_status;
  
    headerStatus.appendChild(subject);
    headerStatus.appendChild(status);
    headerStatus.appendChild(sub_status);
}

function mainPopulate(obj){
    const main = document
}
beginPopulate();
