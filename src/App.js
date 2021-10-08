import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import { Container } from 'react-bootstrap';
import TopScroll from './components/TopScroll';

const App = () => {
  return (
    <Router>
      <TopScroll>
        <Header />
        <main className='py-4'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/contact' component={ContactScreen} exact />
          </Container>
        </main>
        <Footer />
      </TopScroll>
    </Router>
  );
};

export default App;
