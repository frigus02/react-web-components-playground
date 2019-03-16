const html = String.raw;
module.exports = html`
  <style>
    #wave {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      font-size: 16px;
      transition: transform 0.1s ease;
    }
    #wave:hover {
      transform: scale(3);
    }
    #wave:active {
      transform: scale(2.9) rotate(10deg);
    }
  </style>

  <div>
    <span id="salutation">Hi</span> <span id="traits"></span> <slot>...</slot>
    <button id="wave">👋</button>
  </div>
`;
