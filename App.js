// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React");
// console.log(heading); // object
import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag")
//     ]),
//     ]);
const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src="https://picsum.photos/id/237/200/300" alt="image" />

            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
                </div>  
                   </div>
    )
}
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
        </div>
    )
}
console.log(parent); // object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);