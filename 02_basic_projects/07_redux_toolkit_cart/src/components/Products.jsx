import { useDispatch, useSelector } from 'react-redux'
import '../components/Product.css'
import { addToCart, clearCart, removeFromCart } from '../app/CartSlice/Index'

function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.products)
    const cart = useSelector((state) => state.cart.cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    // console.log('cart: ', cart);

    return (
        <>
            <div className="cart-container">
                <h1 className="cart-title">
                    🛒 Shopping Cart
                </h1>
                <div className="product-section">
                    <h2 className='section-title'>
                        🧴 Products
                    </h2>

                    <div className="products-list">
                        {products.map((product) => (
                            <div key={product.id} className='product-card'>
                                <div className="product-info">

                                    <span className='product-name'>
                                        {product.emoji} {product.name}
                                    </span>
                                    <span className='product-price'>
                                        {product.price}
                                    </span>
                                </div>
                                <button className='btn add-btn' onClick={() => dispatch(addToCart(product))}>
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='divider' />

                <div className="cart-section">
                    <h2 className="section-title">
                        👜 Your Cart
                    </h2>
                    {cart.length === 0 ? (
                        <p className='empty-cart'>Your Cart is Empty</p>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cart.map((item) => (
                                    <div key={item.id} className='cart-item'>
                                        <span className='product-name'>
                                            {item.emoji} {item.name}
                                        </span>
                                        <span className='product-price'>
                                            {item.price}
                                        </span>
                                        <button className='btn remove-btn' onClick={() => dispatch(removeFromCart(item.id))}>
                                            ❌
                                        </button>
                                    </div>
                                ))}

                                <hr className='divider' />
                                <div className="cart-summary">
                                    <p>
                                        <strong>
                                            🧴 Total Items:-
                                        </strong>
                                        {cart.length}
                                    </p>
                                    <p>
                                        <strong>
                                            Total Price: 💲
                                        </strong>
                                        {totalPrice}
                                    </p>
                                    <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Products