async function beginPopulate() {
    const requestURL = 'https://gabrel-s.github.io/web-dev-portfolio/assets/js/json/resume.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const resume = await response.json();
    
    headerPopulate(resume);
}

function headerPopulate(obj){
    const header_div = document.getElementById('header_div');
    
    const subject = document.createElement('p');
    const status = document.createElement('p');
    const sub_status = document.createElement('p');
    
    subject.textContent = `SUBJECT: ${obj.subject}`;
    status.textContent = `STATUS: ${obj.status}`;
    sub_status.textContent = obj.sub_status;
    header_div.appendChild(subject);
    header_div.appendChild(status);
    header_div.appendChild(sub_status);
}

beginPopulate();
