import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <Header />
      <main>
        <section id="payment">
          <h2>Select Payment Mode</h2>
          <form id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="payment-mode">Payment Mode:</label>
            <select id="payment-mode" name="payment-mode" required>
              <option value="">Select Payment Mode</option>
              <option value="cash">Cash</option>
              <option value="banking">Banking</option>
              <option value="online">Online Transaction</option>
              {/* Add more payment options as needed */}
            </select><br />
            <button type="submit">Submit Payment</button>
          </form>
        </section>
      </main>
      <Footer />
      {/* CSS styles for Payment page */}
      <style>{`


        #payment {
          margin-top: 20px;
        }

        #payment h2 {
          margin-bottom: 10px;
        }

        form {
          margin-top: 10px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #000;
        }

        select {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #000;
          border-radius: 4px;
          box-sizing: border-box;
          background-color: #fff;
          color: #000;
        }

        button {
          background-color: #000;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          background-color: #333;
        }
      `}</style>
    </div>
  );
};

export default Payment;
