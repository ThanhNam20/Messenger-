import view from "../view.js";
import login from "./login.js";
const homePageScreen = `<div class="masthead d-flex">
    <div class="container text-center my-auto">
      <h1 class="mb-1">Yellow Messenger</h1>
      <h3 class="mb-5">
        <em>A Free Chat For Simple Person</em>
      </h3>
      <a id="home" class="btn btn-primary btn-xl js-scroll-trigger">Get Started</a>
    </div>`;

    function onload(){
        const home = document.getElementById('home');
        home.addEventListener('click',event=>{
            view.loadScreen(login);
        })
    }

    const home = {
      content: homePageScreen,
      onload: onload
    };
    export default home;

