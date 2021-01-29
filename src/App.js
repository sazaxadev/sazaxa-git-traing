import { Container } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import './App.css';

function App() {
  return (
    <Container>
      <h2>SAZAXA MEMBERS <PeopleIcon /></h2>
      <li>sazxa <PersonIcon /></li>
      <li>wenodev <PersonIcon /></li>
    </Container>
  );
}

export default App;
