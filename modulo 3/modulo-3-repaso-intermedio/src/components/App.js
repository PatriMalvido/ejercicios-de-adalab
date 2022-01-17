import '../styles/App.scss';
import { useEffect, useState } from 'react';
import originalData from '../data/originalData.json';

function App() {
  const [data, setData] = useState(originalData); //esta variable de estado es para nuestra lista de contactos

  const [filterContact, setFilterContact] = useState(''); // esta variable de estado es para el input de filtrar por nombre

  const [newContact, setNewContact] = useState(''); //esta variable de estado es para los inputs de nuevo contacto

  //------------------------------------------------------------------------
  //FUNCION PARA RENDERIZAR LA LISTA DE CONTACTOS y filtrar por nombre
  const renderContacts = () => {
    return data
      .filter((eachContact) => {
        return eachContact.name
          .toLowerCase()
          .includes(filterContact.toLowerCase());
      })
      .map((eachContact, index) => {
        return (
          <li key={index} className="contact__item">
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>
              {eachContact.name}&nbsp;
              {eachContact.lastname}
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href={`tel:${eachContact.phone}`} title="Pulsa aquí para llamar a Lola">
                {eachContact.phone}
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a
                href={'mailto:' + eachContact.email}
                title="Pulsa aquí para escribir a Lola"
              >
                {eachContact.email}
              </a>
            </p>
          </li>
        );
      });
  };
  //-----------------------------------------------------------
  //FUNCION PARA FILTRAR POR NOMBRE

  const handleChangeFilter = (ev) => {
    setFilterContact(ev.currentTarget.value);
  };
  //-------------------------------------------------------------
  //FUNCION PARA INPUT DE NUEVO CONTACTO Y BOTON AÑADIR

  const handleChangeContact = (ev) => {
    setNewContact({
      ...newContact,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  const handleClickAdd = () => {
 
    setData([...data, newContact]);
    setNewContact({});
  };


//------------------------------------------------------------------

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <input
            id="filterSearch"
            onChange={handleChangeFilter}
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{renderContacts()}</ul>

        {/* new contact */}
        <form
          onSubmit={(ev) => ev.preventDefault()}
          className="new-contact__form"
        >
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            onChange={handleChangeContact}
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            onChange={handleChangeContact}
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            onChange={handleChangeContact}
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            onChange={handleChangeContact}
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            onClick={handleClickAdd}
            className="new-contact__btn"
            type="submit"
            value="Añadir"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
