// Import stylesheets
import './style.css';

const btn = document.getElementById('my-btn');

const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => console.log(JSON.stringify(data)));
};

const throttle = (func, delay) => {
  let prevCall = 0;
  return () => {
    let context = this;
    let now = new Date().getTime();
    console.log(now - prevCall, delay);
    if (now - prevCall < delay) {
      return false;
    }
    prevCall = now;
    return func.apply(context);
  };
};
btn.addEventListener('click', throttle(getPosts, 5000));
