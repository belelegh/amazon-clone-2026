import React from 'react'
import Layout from '../../components/Layout/Layout';
function Orders() {
  return (
    <Layout>
      <div>Orders</div>
    </Layout>
  );
}

export default Orders
// import React, { useContext, useState, useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// // import classes"./Orders.module.css"; // Optional: create a CSS file for styling

// function Orders() {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch orders from API or context
//   useEffect(() => {
//     // Simulate API call
//     const fetchOrders = async () => {
//       setLoading(true);
//       // Replace with actual API call
//       // const response = await fetch(`/api/orders?userId=${user?.id}`);
//       // const data = await response.json();

//       // Mock data for demonstration
//       const mockOrders = [
//         {
//           id: "ORD-12345",
//           date: "2024-01-15",
//           total: 129.99,
//           status: "Delivered",
//           items: [{ name: "Wireless Headphones", quantity: 1, price: 129.99 }],
//         },
//         {
//           id: "ORD-12344",
//           date: "2024-01-10",
//           total: 299.97,
//           status: "Shipped",
//           items: [
//             { name: "Phone Case", quantity: 2, price: 49.99 },
//             { name: "USB Cable", quantity: 1, price: 19.99 },
//           ],
//         },
//       ];

//       setTimeout(() => {
//         setOrders(mockOrders);
//         setLoading(false);
//       }, 1000);
//     };

//     if (user) {
//       fetchOrders();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   if (loading) {
//     return (
//       <Layout>
//         <div className="orders-container">
//           <div className="loading-spinner">Loading your orders...</div>
//         </div>
//       </Layout>
//     );
//   }

//   if (!user) {
//     return (
//       <Layout>
//         <div className="orders-container">
//           <div className="sign-in-prompt">
//             <h2>View Your Orders</h2>
//             <p>Sign in to view your order history</p>
//             <button className="sign-in-button">Sign in to your account</button>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <Layout>
//         <div className="orders-container">
//           <h2>Your Orders</h2>
//           <div className="no-orders">
//             <p>You haven't placed any orders yet.</p>
//             <button className="shop-now-button">Start Shopping</button>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div className="orders-container">
//         <h2>Your Orders</h2>
//         <div className="orders-list">
//           {orders.map((order) => (
//             <div key={order.id} className="order-card">
//               <div className="order-header">
//                 <div>
//                   <span className="order-label">ORDER PLACED</span>
//                   <p className="order-date">{order.date}</p>
//                 </div>
//                 <div>
//                   <span className="order-label">TOTAL</span>
//                   <p className="order-total">${order.total.toFixed(2)}</p>
//                 </div>
//                 <div>
//                   <span className="order-label">STATUS</span>
//                   <p className={`order-status ${order.status.toLowerCase()}`}>
//                     {order.status}
//                   </p>
//                 </div>
//                 <div>
//                   <span className="order-label">ORDER # {order.id}</span>
//                   <button className="view-order-button">
//                     View order details
//                   </button>
//                 </div>
//               </div>

//               <div className="order-items">
//                 {order.items.map((item, index) => (
//                   <div key={index} className="order-item">
//                     <div className="item-image">
//                       {/* Add product image here */}
//                       <div className="image-placeholder"></div>
//                     </div>
//                     <div className="item-details">
//                       <h4>{item.name}</h4>
//                       <p>Quantity: {item.quantity}</p>
//                       <p className="item-price">${item.price.toFixed(2)}</p>
//                     </div>
//                     <div className="item-actions">
//                       <button className="buy-again-button">Buy it again</button>
//                       <button className="view-item-button">
//                         View your item
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="order-actions">
//                 <button className="action-button">Archive order</button>
//                 <button className="action-button">Return items</button>
//                 <button className="action-button">Leave seller feedback</button>
//                 <button className="action-button">
//                   Leave delivery feedback
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="orders-footer">
//           <p>
//             Looking for a past order? You can view your complete order history.
//           </p>
//           <button className="view-all-button">View all orders</button>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Orders;