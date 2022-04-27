import CategoriesPreview from '../categories-preview/CategoriesPreview';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/Category';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
import './shop.styles.scss';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            /* console.log(categoryMap); */
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />


        </Routes>
    )
}

export default Shop;