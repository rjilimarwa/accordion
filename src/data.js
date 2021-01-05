const questions = [
    {
        id: 1,
        title: 'How React works? How Virtual-DOM works in React?',
        info:
            'React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.',
    },
    {
        id: 2,
        title: 'What is JSX?',
        info:
            'JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions. Eventhough React does not require JSX, it is the recommended way of describing our UI in React app.',
    },
    {
        id: 3,
        title: 'What is React.createClass?',
        info:
            'React.createClass allows us to generate component "classes." But with ES6, React allows us to implement component classes that use ES6 JavaScript classes. The end result is the same -- we have a component class. But the style is different. And one is using a "custom" JavaScript class system (createClass) while the other is using a "native" JavaScript class system.',
    },
    {
        id: 4,
        title: 'What is ReactDOM and what is the difference between ReactDOM and React?',
        info:
            'Prior to v0.14, all ReactDOM functionality was part of React. But later, React and ReactDOM were split into two different libraries.',
    },
    {
        id: 5,
        title: ' What are the differences between a class component and functional component?',
        info:
            'Class components allows us to use additional features such as local state and lifecycle hooks. Also, to enable our component to have direct access to our store and thus holds state.',
    },
]
export default questions