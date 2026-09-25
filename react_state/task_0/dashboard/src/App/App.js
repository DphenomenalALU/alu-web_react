import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  {
    id: 3,
    type: 'default',
    html: { __html: getLatestNotification() },
  },
];

const styles = StyleSheet.create({
  app: {
    color: '#e0344b',
    fontFamily: 'Arial, Helvetica, sans-serif',
    minHeight: '100vh',
  },
  body: {
    color: '#222',
    minHeight: 300,
    padding: '48px 24px',
  },
  footer: {
    borderTop: '3px solid #e0344b',
    fontStyle: 'italic',
    padding: '20px 24px',
    textAlign: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyDown(event) {
    const key = event.key || event.keyCode;

    if (event.ctrlKey && (key === 'h' || key === 'H' || key === 72)) {
      window.alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    return (
      <React.Fragment>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications}
        />
        <div className={`App ${css(styles.app)}`}>
          <Header />
          <main className={`App-body ${css(styles.body)}`}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Stay curious, keep learning, and share your progress.</p>
            </BodySection>
          </main>
          <Footer className={`App-footer ${css(styles.footer)}`} />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
