// import React, { Component } from 'react';

// Error: Event likely a bug
// Load is the prop that is brought down throw app.js onto DynamicImport

// Link: https://codesandbox.io/embed/didmount-willmount-hooks-r9ios

// Case #1

// const useComponentWillMount = func => {
//   const willMount = React.useRef(true);

//   if (willMount.current) {
//     func();
//   }
// };

// export default function DynamicImport(props) {
//   const [component, setComponent] = React.useState(null);
//   const { load, children } = props;

//   useComponentWillMount(() =>
//     load().then(mod => {
//       console.log('mod.default: ' + mod.default) || setComponent(mod.default);
//     })
//   );

//   console.log('props:', props);
//   console.log('load:', load());
//   console.log('children:', children());
//   console.log('component:', component);
//   return children(component);
// }

// Case #2 -- useEffect --

// export default function DynamicImport(props) {
//   const [component, setComponent] = React.useState(null);
//   const { load, children } = props;

//   React.useEffect(() => {
//     load().then(mod => {
//       setComponent(mod.default);
//     });
//   }, []);

//   console.log('props:', props);
//   console.log('load:', load());
//   console.log('children:', children());
//   console.log('component:', component);
//   return children(component);
// }

// Case #3 -- Original --

// export default class DynamicImport extends Component {
//   state = {
//     component: null
//   };

//   componentWillMount() {
//     this.props.load().then(mod =>
//       this.setState(() => ({
//         component: mod.default
//       }))
//     );
//   }
//   render() {
//     console.log('props', this.props);
//     console.log('load:', this.props.load());
//     console.log('children:', this.props.children());
//     console.log('component:', this.state.component);

//     return this.props.children(this.state.component);
//   }
// }
