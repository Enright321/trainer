import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

import TopScroll from './components/TopScroll';

const App = () => {
  return (
    <Router>
      <TopScroll>
        <Header />
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
        </main>
        <Footer />
      </TopScroll>
    </Router>
  );
};

export default App;
