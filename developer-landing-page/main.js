document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const bookmarks = [
    { text: 'MDN', url: 'https://developer.mozilla.org/en-US/' },
    { text: 'GitHub', url: 'https://github.com/' },
    { text: 'CSS Tricks', url: 'https://css-tricks.com/' },
  ];

  const ul = document.getElementById('list');

  bookmarks.forEach((bookmark) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.setAttribute('href', bookmark.url);
    a.innerText = bookmark.text;

    li.appendChild(a);
    ul.appendChild(li);
  });

  const addBookmark = document.getElementById('add-bookmark');
  addBookmark.addEventListener('click', () => {
    // TODO: Implement adding bookmark to list
  });

  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const searchQuery = document.getElementById('search-query');
    window.location.href = 'https://developer.mozilla.org/en-US/search?q=' + searchQuery.value;
  })
});
