import { GlobalStyle } from "GlobalStyle";
import ContactList from "components/ContactList";
import { Container } from "components/Container/Container.styled";
import { Filter } from "components/Filter";
import FormAddContact from "components/FormAddContact";



export default function Contacts() {
  return (
 
    <div>
    <Container>
      <h1>Phonebook </h1>
      <FormAddContact  />
      <h2>Contacts</h2>
      <Filter/>
      <div>
        <ContactList  />
      </div>
      <GlobalStyle />
    </Container>
    </div>
  );
}
