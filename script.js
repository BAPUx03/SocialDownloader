// APIs
const instagramAPI = "https://api.rivaliq.com/api/instagram-downloader?url=";
const youtubeAPI = "https://api.rivaliq.com/api/youtube-downloader?url=";

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function showSection(platform) {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById(`${platform}-section`).style.display = 'block';
    document.getElementById('download-button').style.display = 'none';
    document.querySelector('.back-btn').style.display = 'flex';
}

function goBack() {
    document.querySelectorAll('.download-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('download-button').style.display = 'none';
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.back-btn').style.display = 'none';
}

async function handleInstagramDownload() {
    const url = document.getElementById('instagram-url').value;
    if (!url) return alert('Please enter a valid Instagram URL');

    document.querySelector('.loader').style.display = 'block';
    try {
        const response = await fetch(instagramAPI + encodeURIComponent(url));
        const data = await response.json();
        if (data.downloadUrl) {
            document.getElementById('download-link').href = data.downloadUrl;
            document.getElementById('download-button').style.display = 'block';
        } else {
            alert('Error downloading video. Please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
    document.querySelector('.loader').style.display = 'none';
}

async function handleYoutubeDownload() {
    const url = document.getElementById('youtube-url').value;
    if (!url) return alert('Please enter a valid YouTube URL');

    document.querySelector('.loader').style.display = 'block';
    try {
        const response = await fetch(youtubeAPI + encodeURIComponent(url));
        const data = await response.json();
        if (data.downloadUrl) {
            document.getElementById('download-link').href = data.downloadUrl;
            document.getElementById('download-button').style.display = 'block';
        } else {
            alert('Error downloading video. Please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
    document.querySelector('.loader').style.display = 'none';
}

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
