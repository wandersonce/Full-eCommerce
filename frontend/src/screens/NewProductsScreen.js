import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts } from '../actions/productActions';


function NewProductsScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;
    const productSave = useSelector(state => state.userSignin);
    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            name, price, image, category,
            description, brand, countInStock
        }));

    }


    return (
        <div className="content constent-margined">
            <div className="product-header">
                <h3>Producst</h3>
                <button>Create Product</button>
            </div>

            <div className="form">


                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Create Product</h2>
                        </li>
                        <li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>{errorSave}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                        </label>
                            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="price">
                                Price
                        </label>
                            <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="image">
                                Image
                        </label>
                            <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="brand">
                                Brand
                        </label>
                            <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="category">
                                Category
                        </label>
                            <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="countInStock">
                                Count in Stock
                        </label>
                            <input type="text" name="countInStock" id="countInStock" onChange={(e) => setCountInStock(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="Description">
                                Description
                        </label>
                            <textarea name="Description" id="Description" onChange={(e) => setDescription(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button primary">Create</button>
                        </li>
                    </ul>
                </form>
            </div>
            <div className="product-list">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>
                            (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>

                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}


export default NewProductsScreen;