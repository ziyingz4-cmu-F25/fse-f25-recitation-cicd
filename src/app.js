// Simple counter and message demo logic
const state = { count: 0 };

function increment() {
  state.count += 1;
  return state.count;
}

function decrement() {
  state.count -= 1;
  return state.count;
}

function setMessage(el, text) {
  if (!el) return;
  el.textContent = text || "Nothing yet";
}

// Wire UI when loaded in browser
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const counterEl = document.getElementById("counter");
    const incr = document.getElementById("incr");
    const decr = document.getElementById("decr");
    const show = document.getElementById("showMsg");
    const clear = document.getElementById("clearMsg");
    const input = document.getElementById("msgInput");
    const shown = document.getElementById("shown");

    function render() {
      if (counterEl) counterEl.textContent = state.count;
    }

    if (incr)
      incr.addEventListener("click", () => {
        increment();
        render();
      });
    if (decr)
      decr.addEventListener("click", () => {
        decrement();
        render();
      });
    if (show)
      show.addEventListener("click", () => setMessage(shown, input.value));
    if (clear)
      clear.addEventListener("click", () => {
        input.value = "";
        setMessage(shown, "Nothing yet");
      });

    render();
  });
}

module.exports = { increment, decrement, setMessage, state };
