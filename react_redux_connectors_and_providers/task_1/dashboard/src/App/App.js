import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  app: { color: '#e0344b', fontFamily: 'Arial, Helvetica, sans-serif', minHeight: '100vh' },
  body: { color: '#222', minHeight: 300, padding: '48px 24px' },
});

export class App extends React.Component {
  componentDidMount() { window.addEventListener('keydown', this.handleKeyDown); }

  componentWillUnmount() { window.removeEventListener('keydown', this.handleKeyDown); }

  handleKeyDown = (event) => {
    const key = event.key || event.keyCode;
    if (event.ctrlKey && (key === 'h' || key === 'H' || key === 72)) {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, isLoggedIn,
      listNotifications, login, user } = this.props;
    return (
      <div className={`App ${css(styles.app)}`}>
        <Notifications displayDrawer={displayDrawer} handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer} listNotifications={listNotifications} />
        <Header user={user} />
        <main className={`App-body ${css(styles.body)}`}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list"><CourseList /></BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue"><Login logIn={login} /></BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School"><p>Stay curious, keep learning, and share your progress.</p></BodySection>
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  displayDrawer: PropTypes.bool, handleDisplayDrawer: PropTypes.func, handleHideDrawer: PropTypes.func,
  isLoggedIn: PropTypes.bool, listNotifications: PropTypes.array, login: PropTypes.func,
  logOut: PropTypes.func, user: PropTypes.object,
};

App.defaultProps = {
  displayDrawer: false, handleDisplayDrawer: () => {}, handleHideDrawer: () => {},
  isLoggedIn: false, listNotifications: [], login: () => {}, logOut: () => {},
  user: { email: '', isLoggedIn: false },
};

export function mapStateToProps(state) {
  return { isLoggedIn: state.get('isUserLoggedIn'), displayDrawer: state.get('isNotificationDrawerVisible') };
}

export default connect(mapStateToProps, {
  handleDisplayDrawer: displayNotificationDrawer,
  handleHideDrawer: hideNotificationDrawer,
})(App);
