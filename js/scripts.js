document.addEventListener('DOMContentLoaded', () => {
  fetch('blog/posts.json')
    .then(response => response.json())
    .then(posts => {
      const blogPosts = document.getElementById('blog-posts');
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'bg-white p-6 rounded-lg shadow-md';
        postElement.innerHTML = `
          <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
          ${post.video ? `<iframe class="w-full h-48 mb-4" src="${post.video}" frameborder="0" allowfullscreen></iframe>` : `<img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover mb-4 rounded">`}
          <p class="text-gray-700">${post.excerpt}</p>
          <a href="${post.link}" class="text-blue-600 hover:underline">Đọc thêm</a>
        `;
        blogPosts.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error loading posts:', error));
});