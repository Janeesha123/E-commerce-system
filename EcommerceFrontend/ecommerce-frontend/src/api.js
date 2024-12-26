const BASE_URL = 'http://localhost:5132/api';

export const api = {
    getProducts: () =>
        fetch(`${BASE_URL}/products`)
        .then(res => {
            if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            return data;
        }),

    getCart: () =>
        fetch(`${BASE_URL}/Cart`)
        .then(res => {
            if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            return data;
        }),

    addToCart: ({ productId, productName, price, quantity }) =>
        fetch(`${BASE_URL}/Cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, productName, price, quantity })
        })
        .then(res => {
            // console.log('addToCart Response:', res);
            if (!res.ok) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            // console.log('addToCart Data:', data);
            return data;
        }),

    updateCartQuantity: (id, quantity) => {
        return fetch(`${BASE_URL}/Cart/update-quantity/${id}?newQuantity=${quantity}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log('updateCartQuantity Response:', res);
            if (!res.ok) {
                throw new Error(`Failed to update quantity: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            console.log('Updated Cart Item:', data);
            return data;
        });
    },

  removeFromCart: (id) =>
    console.log('Remove from Cart:', id) ||
    fetch(`${BASE_URL}/Cart/${id}`, { method: 'DELETE' })
      .then(res => {
        console.log('removeFromCart Response:', res);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        return res.text();
      })
      .then(data => {
        console.log('removeFromCart Data:', data);
        return data;
      }),

  placeOrder: (items) =>
    fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    })
      .then(res => {
        console.log('placeOrder Response:', res);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('placeOrder Data:', data);
        return data;
      })
};