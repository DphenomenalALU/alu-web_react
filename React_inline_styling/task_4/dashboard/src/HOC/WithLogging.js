import React from 'react';

function getComponentName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function WithLogging(WrappedComponent) {
  const componentName = getComponentName(WrappedComponent);

  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${componentName})`;
  return WithLoggingComponent;
}

export default WithLogging;
