const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1", {}, "This is my h1 heading"),React.createElement("h2", {}, "This is my h2 heading")]
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);