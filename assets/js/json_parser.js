async function beginPopulate() {
    const requestURL = "https://github.com/gabrel-s/web-dev-portfolio/blob/main/assets/js/json/resume.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const resume = await response.json();
    
    headerPopulate(resume);
}

function headerPopulate(obj){
    const header = document.querySelector('header');
    const subject = document.createElement('h1');
    const status = document.createElement('h1');
    const sub_status = document.createElement('h1');
    
    subject.textContent = obj.subject;
    status.textContent = obj.status;
    sub_status.textContent = obj.sub_status;
    header.appendChild(subject);
    header.appendChild(status);
    header.appendChild(sub_status);
}

beginPopulate();

// BASE

// async function beginPopulate() {
//     const requestURL = './resume.json';
//     const request = new Request(requestURL);

//     const response = await fetch(request);
//     const resume = await response.json();
    
//     headerPopulate(resume);
// }

// function headerPopulate(obj){
//     const header = document.querySelector('header');
//     const subject = document.createElement('h1');
//     const status = document.createElement('h1');
//     const sub_status = document.createElement('h1');
    
//     subject.textContent = obj.subject;
//     status.textContent = obj.status;
//     sub_status.textContent = obj.sub_status;
//     header.appendChild(subject);
//     header.appendChild(status);
//     header.appendChild(sub_status);
// }

// beginPopulate();
