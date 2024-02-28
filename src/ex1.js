// Import the Octokit library
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

// Define your personal access token
const TOKEN = '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';

// Create an instance of Octokit with your access token
const octokit = new Octokit({ auth: TOKEN });

// Function to fetch user information

async function fetchUser(username) {
  try {
    const response = await octokit.request(`GET /users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user information: ${error.message}`);
  }
}

// Function to fetch repositories for a user

async function fetchUserRepositories(username) {
  try {
    const response = await octokit.request(
      `GET /users/${username}/repos?sort=created`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching user information: ${error.message}`);
  }
}

// Main show basic user information
async function userInfo(username) {

  let elMeuPerfilGithub = await fetchUser(username);

  const imgElement = document.getElementById('avatarImage');

  imgElement.src = elMeuPerfilGithub.avatar_url;

  const laMevaBio = document.getElementById('thisBio');

  laMevaBio.textContent = elMeuPerfilGithub.name + " ("+  elMeuPerfilGithub.login+") | " + elMeuPerfilGithub.bio;

  return 204;
}

// Main function to display repository information
async function repos(username) {
  try {
    let elsMeusRepos = await fetchUserRepositories(username);

  console.log(elsMeusRepos);

const globalDiv = document.getElementById("meusRepos");

elsMeusRepos.forEach(repo => {
    const repoDiv = document.createElement("div");
    repoDiv.classList.add("repo-item");
    
    repoDiv.innerHTML = `
        <h3 style="font-weight: bold; font-size: 1.2em;">${repo.name}</h3>
        <p style="font-size: 1.2em;">${repo.description || "No description available"}</p>
        <p><a style="color: blue;" href="${repo.html_url}" target="_blank">View on GitHub</a></p>
        <p>${"Language: " + repo.language || "Unknown"}</p>
        <p>Stars: ${repo.stargazers_count}</p>
        <p>Forks: ${repo.forks_count}</p>
    `;

    repoDiv.style.backgroundColor = "white";
    repoDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    repoDiv.style.padding = "20px";
    repoDiv.style.marginBottom = "20px";
    
    globalDiv.appendChild(repoDiv);
});
  } catch (error) {
    console.error('Error:', error);
  }
}
// Create new repository

async function newRepo() {
  try {
    const response = await octokit.request('POST /user/repos', {
      name: 'hola-nou-repo', // Generic title for the new repository
      auto_init: true // Initialize the repository with a README.md file
    });

    console.log('New repository created:', response.data.html_url);
    alert('New repository created successfully!');

    // You may want to update the repositories list after creating the new repository
    repos("Jashan09");
  } catch (error) {
    console.error('Error creating new repository:', error);
    alert('Error creating new repository. Please check the console for details.');
  }
}

async function deleteRepo() {
  try {
    // Assuming the repository name is 'hola-nou-repo' as created in the newRepo function
    const repoToDelete = 'hola-nou-repo';

    const response = await octokit.request('DELETE /repos/{owner}/{repo}', {
      owner: "Jashan09", // Your GitHub username
      repo: repoToDelete // Name of the repository to delete
    });

    console.log('Repository deleted:', repoToDelete);
    alert('Repository deleted successfully!');

    // Optionally, you can refresh the repositories list after deletion
    repos("Jashan09");
  } catch (error) {
    console.error('Error deleting repository:', error);
    alert('Error deleting repository. Please check the console for details.');
  }
}

// Call the main function with a username
async function main() {
  let elMeuUsername = 'Jashan09';

    userInfo(elMeuUsername);
    repos(elMeuUsername);

}

// make functions available to the browser
window.newRepo = newRepo;
window.deleteRepo = deleteRepo;

main();
