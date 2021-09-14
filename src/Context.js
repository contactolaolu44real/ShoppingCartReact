import React, { Component, useState, createContext, useEffect,useRef } from 'react'
import { storeProducts, detailProduct } from "./data"
const ProductContext = React.createContext();
const FuncitonalCotextProvider=createContext();
// class ProductProvider extends Component {
//   state = {
//       products: [],
//       detailProduct: detailProduct,
//       cart: [],
//       modalOpen: false,
//       modalProduct: detailProduct,
//       cartSubTotal: 0,
//       cartTax: 0,
//       cartTotal: 0
//   }

//   componentDidMount(){
//     this.setProducts();
//   }

//   setProducts = () => {
//     let tempProducts = [];
//     storeProducts.forEach(item=> {
//       const singleItem = {...item};
//       tempProducts = [...tempProducts, singleItem];
//     })
//     this.setState(()=> {
//       return {products: tempProducts};
//     })
//   }

//   getItem = (id) => {
//     const product = this.state.products.find(item=>  item.id === id);
//     return product;
//   }

//   handleDetail = (id) => {
//     const product = this.getItem(id);
//     this.setState(
//       ()=>{
//         return {detailProduct: product};
//       }
//     )
//   }

//   addToCart = (id) => {
//      let tempProducts = [...this.state.products];
//      const product = this.getItem(id);
//      //const index = tempProducts.indexOf(product);
//      product.inCart = true;
//      product.count = 1;
//      const price = product.price;
//      product.total = price;

//      this.setState(()=>{
//        return {products:tempProducts, cart:[...this.state.cart, product]}
//      },
//      ()=>{
//        this.addTotals();
//      })
//   }

//   openModal = (id) => {

//     const product = this.getItem(id);
//     this.setState(()=>{
//       return {modalProduct: product, modalOpen:true};
//     })
//   }

//   closeModal = () => {
//       this.setState(()=>{
//           return {modalOpen: false};
//       })
//   }

//   increment = (id) => {
//     let tempCart = [...this.state.cart];
//     const selectedProduct = tempCart.find(item=>item.id === id);

//     const index = tempCart.indexOf(selectedProduct);
//     const product = tempCart[index];

//     product.count = product.count + 1;
//     product.total = product.count * product.price;

//     this.setState(
//       ()=> {
//         return {cart: [...tempCart]};
//       },
//       ()=> {
//         this.addTotals();
//       }
//     );
//   }

//   decrement = (id) => {
//     let tempCart = [...this.state.cart];
//     const selectedProduct = tempCart.find(item=>item.id === id);

//     const index = tempCart.indexOf(selectedProduct);
//     const product = tempCart[index];
//     product.count = product.count -1;

//     if(product.count === 0){
//       this.removeItem(id);
//     }else {
//       product.total = product.count * product.price;
//       this.setState(
//         ()=>{
//           return {cart: [...tempCart]};
//         },
//         ()=>{
//           this.addTotals();
//         }
//       )
//     }
//   }

//   removeItem = (id) => {
//     let tempProducts = [...this.state.products];
//     let tempCart = [...this.state.cart];

//     tempCart = tempCart.filter(item=>item.id!==id);

//     const index = tempProducts.indexOf(this.getItem(id));
//     let removedProduct = tempProducts[index];
//     removedProduct.inCart = false;
//     removedProduct.count = 0;
//     removedProduct.total = 0;

//     this.setState(()=>{
//       return {
//         cart: [...tempCart],
//         products: [...tempProducts]
//       }
//     }, ()=>{
//       this.addTotals();
//     })
//   }

//   clearCart = () => {
//     this.setState(()=>{
//       return {cart:[]};
//     }, ()=>{
//       this.setProducts();
//       this.addTotals(); 
//     })
//   }

//   addTotals = () => {
//       let subTotal = 0;
//       this.state.cart.map(item => (subTotal += item.total));
//       const tempTax= subTotal * 0.1;
//       const tax = parseFloat(tempTax.toFixed(2));
//       const total = subTotal + tax;
//       this.setState(()=>{
//         return {
//           cartSubTotal: subTotal,
//           cartTax: tax,
//           cartTotal: total
//         }
//       })
//   }
//   render() {
//     return (
//       <ProductContext.Provider value={
//           {
// ...this.state, 
// handleDetail: this.handleDetail,
// addToCart: this.addToCart,
// openModal: this.openModal,
// closeModal: this.closeModal,
// increment: this.increment,
// decrement: this.decrement,
// removeItem: this.removeItem,
// clearCart: this.clearCart
//           }
//       }>
//           {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

const ProductProvider = (props) => {
  const [state,setState] = useState({
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    name:"yinka",
    cartTax: 0,
    cartTotal: 0,
  });


  const isInitialMount = useRef(true);

  useEffect(() => {
    setProducts();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      console.log("in mnt");
   } else {
    setProducts();
    addTotals();
    console.log("not it");
    console.log(state);
   } 
   console.log("in mnt");   
  }, [state.products,state.cart,state.modalOpen,state.name]);

  const setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    setState({ ...state, products:tempProducts });
  }

  const getItem = (id) => {
    const product = state.products.find(item => item.id === id);
    return product;
  }

  const handleDetail = (id) => {
    const product = getItem(id);
    setState({ ...state, detailProduct: product })
  }

  const addToCart = (id) => {
    let tempProducts = [...state.products];
    const product = getItem(id);
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setState({ ...state, products: tempProducts, cart: [...state.cart, product] })
  }

  const openModal = (id) => {
    const product = getItem(id);
    addTotals();
    //setState({ ...state, modalProduct: product, modalOpen: true,name:"akan" })
  }

  const closeModal = () => {
    setState({ ...state, modalOpen: false })
  }

  const increment = (id) => {
    let tempCart = [...state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    setState({ ...state, cart: [...tempCart] }
    );
  }

  const decrement = (id) => {
    let tempCart = [...state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setState({ ...state, cart: [...tempCart] }
      )
    }
  }

  const removeItem = (id) => {
    let tempProducts = [...state.products];
    let tempCart = [...state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setState({
      ...state,
      cart: [...tempCart],
      products: [...tempProducts]
    })
  }

  const clearCart = () => {
    setState({ ...state, cart: [] })
  }

  const addTotals = () => {    
    let subTotal = 0;
    let mutCart = {...state};

    mutCart.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;    
    setState({...state,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    })
  }

  return (<ProductContext.Provider value={{
    ...state,
    handleDetail: handleDetail,
    addToCart: addToCart,
    openModal: openModal,
    closeModal: closeModal,
    increment: increment,
    decrement: decrement,
    removeItem: removeItem,
    clearCart: clearCart
  }}>
    {props.children}
  </ProductContext.Provider>)
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };