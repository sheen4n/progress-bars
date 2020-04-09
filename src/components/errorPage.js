import React from 'react';

const ErrorPage = () => {
  return (
    <div className='container'>
      <section className='section'>
        <h1 className='title'>Uh-oh!! So sorry you are seeing this page.</h1>
        <p>Most likely you have entered invalid endpoints data.</p>
        <p>Ensure that you endpoint data are in this example format.</p>
        <p> "buttons: [10, 38, -13, -18], bars: [62, 250, 49], limit: 230"</p>
      </section>
    </div>
  );
};

export default ErrorPage;
