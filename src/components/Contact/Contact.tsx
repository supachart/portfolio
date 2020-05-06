import * as React from "react";
import * as emailjs from 'emailjs-com';

import './Contact.scss';

const Contact = ({
  name,
  email,
  subject,
  message,
  isSending,
  handleChangeName,
  handleChangeEmail,
  handleChangeSubject,
  handleChangeMessage,
  handleClickSend,
}) => (
  <div className="Contact">
    <div className="Contact__content">
      <div className="Contact__title">
        <h1>Contact me</h1>
      </div>
      <div className="Contact__noted">Have a question or want to work together?</div>
      <div className="Contact__form">
        <form>
          <div className="Contact__formGroup">
            <input type="text" placeholder="Name" value={name} onChange={handleChangeName} />
            <label />
          </div>
          <div className="Contact__formGroup">
            <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
            <label />
          </div>
          <div className="Contact__formGroup">
              <input type="text" placeholder="Subject" value={subject} onChange={handleChangeSubject} />
            <label />
          </div>
          <div className="Contact__formGroup">
            <textarea placeholder="Message" value={message} onChange={handleChangeMessage} />
            <label />
          </div>
          <div className="Contact__formSubmit">
            {isSending ? (
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            ) : (
              <div className="Contact__submit" onClick={handleClickSend}>SEND</div>
            )}
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);

  const handleClickSend = () => {
    setIsSending(true);
    console.log('Submit form');

    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message_html: message,
    };
    // emailjs.send(
    //   'gmail',
    //   'template_8zgwI877',
    //   templateParams,
    //   'user_36227J64XXU5y3vlM6tex'
    // );

    setTimeout(() => {
      // reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSending(false);
    }, 1000);
  };

  return Contact({
    name,
    email,
    subject,
    message,
    isSending,
    handleChangeName: (event) => setName(event.target.value),
    handleChangeEmail: (event) => setEmail(event.target.value),
    handleChangeSubject: (event) => setSubject(event.target.value),
    handleChangeMessage: (event) => setMessage(event.target.value),
    handleClickSend,
  });
};
