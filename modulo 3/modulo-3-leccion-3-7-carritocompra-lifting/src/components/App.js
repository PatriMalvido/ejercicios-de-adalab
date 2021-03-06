import '../styles/App.scss';
// Fichero src/components/App.js
import { useState } from 'react';
import Preview from '../components/Preview';
import InputGroupText from '../components/InputGrouptext';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheckbox from './InputGroupCheckBox';
import Button from './Button';

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // Funciones que nos ayudan a renderizar

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}

          <InputGroupText
            labelText="Escribe un nombre"
            inputName="name"
            inputId="name"
            inputValue={name}
            inputPlaceholder="María García"
            handleChange={handleName}
          />

          {/* email */}

          <InputGroupText
            labelText="Escribe un email:"
            inputName="email"
            inputId="email"
            inputValue={email}
            inputPlaceholder="mariagarcia@gmail.com"
            handleChange={handleEmail}
          />

          {/* region */}
          <InputGroupSelect
            labelText="Indica tu región:"
            inputName="region"
            inputId="region"
            inputValue={region}
            handleChange={handleRegion}
            options={[
              'España Peninsular',
              'Islas Canarias',
              'Islas Baleares',
              'Ceuta',
              'Melilla',
            ]}
          />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio
            labelText="Tarjeta de crédito"
            inputName="paymentType"
            inputId="creditCard"
            inputValue="creditCard"
            inputChecked={paymentType === 'creditCard'}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Efectivo"
            inputName="paymentType"
            inputId="cash"
            inputValue="cash"
            inputChecked={paymentType === 'cash'}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Contra reembolso"
            inputName="paymentType"
            inputId="cashOnDelivery"
            inputValue="cashOnDelivery"
            inputChecked={paymentType === 'cashOnDelivery'}
            handleChange={handlePaymentType}
          />

          {/* legal terms */}
          <InputGroupCheckbox
            labelText="Debes aceptar nuestros términos legales para completar la compra:"
            inputName="legalTerms"
            inputId="legalTerms"
            inputChecked={legalTerms}
            handleChange={handleLegalTerms}
            
          />
          
        </div>

        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        />

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <Button
          inputClass="reset"
          inputType="reset"
          inputValue="Limpiar el formulario"
          handleClick={handleResetButton}
        />

        {/* send */}
        <Button
          inputType="submit"
          inputValue="Enviar"
          inputDisabled={isValidForm() === false}
          handleClick={handleForm}
        />
      </form>
    </div>
  );
};

export default App;
