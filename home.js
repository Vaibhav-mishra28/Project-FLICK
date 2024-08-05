document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('video-container');
    const uploadForm = document.getElementById('upload-form');

    // Dummy data for video cards
    const videos = [
      { title: 'Video 1', url: 'video1.mp4' },
      { title: 'Video 2', url: 'video2.mp4' },
      { title: 'Video 3', url: 'video1.mp4' },
      { title: 'Video 4', url: 'video2.mp4' },
      { title: 'Video 5', url: 'video1.mp4' },
      { title: 'Video 6', url: 'video2.mp4' },
      { title: 'Video 7', url: 'video1.mp4' },
      { title: 'Video 8', url: 'video2.mp4' },
      { title: 'Video 9', url: 'video1.mp4' },
      { title: 'Video 10', url: 'video2.mp4' },
      { title: 'Video 11', url: 'video1.mp4' },
      { title: 'Video 12', url: 'video2.mp4' },
      { title: 'Video 13', url: 'video1.mp4' },
      { title: 'Video 14', url: 'video2.mp4' },
      // Add more videos as needed
    ];

    // Display existing videos
    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card');
      videoCard.innerHTML = `
        <video width="100%" controls>
          <source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p>${video.title}</p>
      `;
      videoContainer.appendChild(videoCard);
    });

    // Handle video upload
    uploadForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Handle video upload logic here
      // You can use FormData to send the form data to your server

      // After successful upload, you can add the new video to the videoContainer
      // For example:
      // const newVideo = { title: 'New Video', url: 'newvideo.mp4' };
      // const newVideoCard = document.createElement('div');
      // newVideoCard.classList.add('video-card');
      // newVideoCard.innerHTML = `
      //   <video width="100%" controls>
      //     <source src="${newVideo.url}" type="video/mp4">
      //     Your browser does not support the video tag.
      //   </video>
      //   <p>${newVideo.title}</p>
      // `;
      // videoContainer.appendChild(newVideoCard);

      // Clear the form after upload
      uploadForm.reset();
    });
  });