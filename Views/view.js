const view = {};
view.loadScreen = function (screen) {
    document.getElementById("app").innerHTML=screen.content;
    screen.onload();
    }
export default view;