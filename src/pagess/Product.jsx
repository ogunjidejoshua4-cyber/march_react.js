import React, { useEffect, useState } from 'react'

export const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorStatus, setErrorStatus] = useState(null);
    const [retry, setRetry] = useState(0);  

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            setErrorStatus(null);
            try {
                const pro = await fetch('https://fakestoreapi.com/products')
                const res = await pro.json()

                if (res.length >= 1) {
                    setProduct(res)
                    console.log(res, 'our product');
                }
            } catch (error) {
                console.log(error);
                setErrorStatus(error.message)

            } finally {
                setLoading(false)
            }

        }
        getProduct()
    }, [retry])

    return (
        <div>
            <h1>Product</h1>
            {loading && <p>loading ......</p>}
            {errorStatus &&
            <div>
                <p>Error occur while fetching Product</p>
                <button onClick={() => setRetry(retry + 1)}>Retry</button>
            </div>
            //  <p>Error occur while fetching Product</p>
            //  <button onClick={() => window.location.reload()}>Retry</button>
             }
            {
                product.length >= 1 && <div>
                    {product.map((prod, i) => (
                        <ul key={i}>
                            <li>{prod.title}</li>
                            <li>{prod.description}</li>
                            <li>{prod.price}</li>
                            <li><img src={prod.image} width={"100px"} height={"100px"} alt={prod.title} /></li>
                            {/* <li>{prod.rating.}</li> */}
                        </ul>
                    ))}
                </div>
            }
        </div>
    )
}