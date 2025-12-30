# Sports Store React - PayPal Sandbox Integration

## Overview

This project is a **React-based sports store** with the following features:

* Login and registration pages (visual only, no backend authentication yet).
* Home page with slider and looping logo animation.
* Category pages: All Products, Sportswear, Shoes, Equipment.
* Product details page with **PayPal sandbox payment** for each product.
* PayPal button is **disabled if the product is out of stock**.
* Prices are displayed in USD, payments are processed in USD via PayPal sandbox.

---

## Features

* Home page with a slider and looping logo.
* Visual login and registration pages.
* Multiple category pages (All, Sportswear, Shoes, Equipment).
* Individual product pages with PayPal sandbox payment.
* Single product checkout.
* Stock availability check disables payment if the product is not in stock.
* Redirect to a success page with product and payer details after payment.
---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Install PayPal React SDK:

```bash
npm install @paypal/react-paypal-js
```

---

## Setup

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/).
2. Create a **sandbox business account**.
3. Create a new **app** in Sandbox → My Apps & Credentials.
4. Copy the **Client ID**.
5. Replace `YOUR_SANDBOX_CLIENT_ID` in `App.jsx`:

```jsx
<PayPalScriptProvider options={{ 'client-id': 'YOUR_SANDBOX_CLIENT_ID', currency: 'USD' }}>
```

---

## Usage

1. Start the React app:

```bash
npm start
```

2. Navigate through the pages: Home, Categories, Product Details.
3. On the product details page, click the PayPal button to perform a **sandbox payment**.
4. If the product is out of stock, the PayPal button will be disabled.
5. After successful payment, you will be redirected to a **Success** showing product and payer details.

---

## Notes

* All payments are in **sandbox mode**; no real money is used.
* Login and registration pages are **visual only**; no authentication is implemented.
* Can be extended later with a real backend for authentication and order management.

---
## PayPal Sandbox Credentials (For Testing Only)

<strong>Note: These credentials are for testing purposes only. Do not use them in production.</strong>

* Email: testpaypalpay2222@gmail.com
* Password: testtest123

 <strong>⚠️ Only use these credentials in the PayPal Sandbox environment. Real payments should never use these credentials.</strong>
--- 

## License

This project is for educational and testing purposes. No real payments are processed.
