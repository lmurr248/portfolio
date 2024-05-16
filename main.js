// Show email address on hover - Contact Page
const emailBox = document.getElementById("email");

const email = "laurencemurrin@gmail.com";

const emailLink = document.createElement("a");
emailLink.setAttribute("href", "mailto:" + email);
emailLink.textContent = email;
emailLink.style.opacity = 0;

emailBox.appendChild(document.createElement("br"));
emailBox.appendChild(emailLink);

function showContactInfo() {
  emailLink.style.opacity = 1;
}

function hideContactInfo() {
  emailLink.style.opacity = 0;
}

emailBox.addEventListener("mouseenter", showContactInfo);
emailBox.addEventListener("mouseleave", hideContactInfo);

// Show github link on hover - Contact Page
const gitHubBox = document.getElementById("github");

const gitHubUrl = "https://github.com/lmurr248";

const gitHubLink = document.createElement("a");
gitHubLink.setAttribute("href", gitHubUrl);
gitHubLink.textContent = gitHubUrl;
gitHubLink.style.opacity = 0;

gitHubBox.appendChild(document.createElement("br"));
gitHubBox.appendChild(gitHubLink);

function showGitHubInfo() {
  gitHubLink.style.opacity = 1;
}

function hideGitHubInfo() {
  gitHubLink.style.opacity = 0;
}

gitHubBox.addEventListener("mouseenter", showGitHubInfo);
gitHubBox.addEventListener("mouseleave", hideGitHubInfo);
