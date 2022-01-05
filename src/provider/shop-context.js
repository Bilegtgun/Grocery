import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProItem from "../components/product/product.item";

export const ShopContext = createContext({
    categories: [],
    products: [],
    cartItems: [],
    favoriteItems: [],
    activeProduct: {},
    totalCost: 0,
    eachCost: 0,
    catItems: [],
    isOpen: false,
    addCartItem: () => { },
    addFavItem: () => { },
    removeCartItem: () => { },
    cats: () => { },
    detailShow: () => { },
    inc: () => { },
    dec: () => { },
    setTotalCost: () => { },
    toggleModal: () => { }
})


export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [catItems, setCatItems] = useState([])
    const [activeProduct, setActiveProduct] = useState({})
    const [totalCost, setTotalCost] = useState(0)
    const [eachCost, setEachCost] = useState([])
    const products = [{
        'name': 'Organic Banana',
        'stat': '1kg Price',
        'price': 4.99,
        'img': 'https://purepng.com/public/uploads/large/purepng.com-bananasbananabananasyellow-bananabotanically-a-berryedible-fruitherbaceousgenus-musa-1701527189249nfdcx.png',
        'cart': false,
        'category': 'Fresh Fruits & Vegetable'
    },
    {
        'name': 'Natural Red Apple',
        'stat': '1kg Price',
        'price': 5.99,
        'img': 'https://cdn.picpng.com/apple/apple-view-25231.png',
        'cart': false,
        'category': 'Fresh Fruits & Vegetable'
    },
    {
        'name': 'Colorful Peppers',
        'stat': '250g Price',
        'price': 2.99,
        'img': 'https://www.pngall.com/wp-content/uploads/2016/04/Pepper-Free-Download-PNG.png',
        'cart': false,
        'category': 'Fresh Fruits & Vegetable'
    },
    {
        'name': 'Fresh ginger',
        'stat': '250g Price',
        'price': 2.99,
        'img': 'https://static.libertyprim.com/files/familles/gingembre-large.jpg?1569271778',
        'cart': false,
        'category': 'Fresh Fruits & Vegetable'
    },
    {
        'name': 'beef bone',
        'stat': '1kg Price',
        'price': 14.99,
        'img': 'https://purepng.com/public/uploads/large/purepng.com-meatmeatanimalfleshchicken-1411527705377wl3yg.png',
        'cart': false,
        'category': 'Meat & Fish'
    },
    {
        'name': 'broiler chicken',
        'stat': '1kg Price',
        'price': 9.99,
        'img': 'https://purepng.com/public/uploads/large/purepng.com-grill-chickenfood-meat-chicken-grilled-941524616969gg9vh.png',
        'cart': false,
        'category': 'Meat & Fish'

    },
    {
        'name': 'Laimon Orange',
        'stat': '1 Price',
        'price': 1.99,
        'img': 'https://cdn.geresee.tk/us_undaa/laimon_orange.jpg',
        'cart': false,
        'category': 'Beverages'

    },
    {
        'name': 'Goy yogurt',
        'stat': '1 Price',
        'price': 3.99,
        'img': 'https://cdn.geresee.tk/Milk_and_milk_products/goy_chavgatai_tarag.jpg',
        'cart': false,
        'category': 'Dairy & Eggs'

    },
    {
        'name': 'Trolli candy',
        'stat': '1bag Price',
        'price': 3.99,
        'img': 'https://cdn.geresee.tk/%D0%90%D0%BC%D1%82%D1%82%D0%B0%D0%BD/%D0%A2%D1%80%D0%BE%D0%BB%D0%BB%D0%B8.jpg',
        'cart': false,
        'category': 'Bakery & Snacks'

    },
    {
        'name': 'Honey',
        'stat': '1 Price',
        'price': 11.99,
        'img': 'https://cdn.geresee.tk/tea_coffee/Зөгийн бал нимбэгний уусмал.jpg',
        'cart': false,
        'category': 'Cooking Oil & Ghee'

    }
    ]
    const categories = [{
        'name': 'Fresh Fruits & Vegetable',
        'col': '#53B1751A',
        'bcol': '#53B175B2',
        'img': 'https://www.freepnglogos.com/uploads/vegetables-png/buy-high-quality-organic-vegetables-and-fruits-online-7.png',
    },
    {
        'name': 'Cooking Oil & Ghee',
        'col': '#F8A44C1A',
        'bcol': '#F8A44CB2',
        'img': 'https://purepng.com/public/uploads/large/purepng.com-sunflower-oilsunflower-oilcooking-oilfrying-oilnon-volatile-oil-1411529833165ctzjx.png',
    },
    {
        'name': 'Meat & Fish',
        'col': '#F7A59340',
        'bcol': '#F7A593',
        'img': 'https://www.freepnglogos.com/uploads/meat-png/meat-home-page-attari-super-store-21.png',
    },
    {
        'name': 'Bakery & Snacks',
        'col': '#D3B0E040',
        'bcol': '#D3B0E0',
        'img': 'https://www.freepnglogos.com/uploads/bread-png/bread-bakery-central-lycoming-bakery-23.png',
    },
    {
        'name': 'Dairy & Eggs',
        'col': ' #FDE59840',
        'bcol': '#FDE598',
        'img': 'https://www.freepnglogos.com/uploads/milk-png/milk-our-ice-cream-ingredients-graeter-30.png',
    },
    {
        'name': 'Beverages',
        'col': '#B7DFF540',
        'bcol': '#B7DFF5',
        'img': 'https://www.freepnglogos.com/uploads/pepsi-png/pepsi-buffalo-rock-the-premier-provider-beverages-and-food-18.png',
    }]
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
      setIsOpen(!isOpen);
    }

    // cartItems add one by one     
    // 
    useEffect(() => {
        const costOfAll = eachCost.reduce((acc, cur) => acc + cur.price, 0)
        setTotalCost(costOfAll)

    }, [cartItems]);
    const addCartItem = (item) => {
        let newArr = cartItems.filter((el, i) => item.name === el.name)
        if (newArr.length == 0) { 
            setCartItems([...cartItems, item]) 
            setEachCost([...eachCost, {name: item.name, price: item.price}])
        }
        else {
            setCartItems(cartItems.map(el => el.name !== item.name ? el : { ...el, count: el.count + 1 }))
            setEachCost(eachCost.map(el => { console.log(el.price, 'asdadassd'); return el.name !== item.name ? el : {...el, price: el.price + item.price }}))
        }

    }

    const addFavItem = (item, ind) => {
        let newArr = favoriteItems.filter((el, i) => item.name === el.name)
        if (newArr.length == 0)
            setFavoriteItems([...favoriteItems, item])
        else
            setFavoriteItems(favoriteItems.filter((el, i) => item.name !== el.name))
    }

    const inc = (item) => {
        let newArr = cartItems.filter((el, i) => item.name === el.name)
        newArr.length !== 0 ? setActiveProduct(newArr[0]) : setActiveProduct(item)
        setCartItems(cartItems.map(el => el.name !== item.name ? el : { ...el, count: el.count + 1 }))
        setEachCost(eachCost.map(el => el.name !== item.name ? el : {...el, price: el.price + item.price }))
    }


    const dec = (item) => {
        if (item.count > 0) {
            setCartItems(cartItems.map(el => el.name !== item.name ? el : { ...el, count: el.count - 1 }))
            let newArr = cartItems.filter((el, i) => item.name === el.name)
            newArr.length !== 0 ? setActiveProduct(newArr[0]) : setActiveProduct(item)
            setEachCost(eachCost.map(el => el.name !== item.name ? el : {...el, price: el.price - item.price }))
        }
    }

    const removeCartItem = (item, index) => {
        setCartItems(cartItems.filter((el, ind) => ind != index))
        setEachCost(eachCost.filter(el => el.name !== item.name ))

    }

    const cats = (name) => {
        let newArr = products.filter((el, ind) => el.category === name)
        return newArr.map((el, ind) => {
            setCatItems([...newArr])
        })
    }

    const detailShow = (item) => {
        let newArr = cartItems.filter((el, i) => item.name === el.name)
        newArr.length !== 0 ? setActiveProduct(newArr[0]) : setActiveProduct(item)
    }

    return (
        <ShopContext.Provider value={{
            categories,
            products,
            cartItems,
            favoriteItems,
            activeProduct,
            totalCost,
            catItems,
            isOpen,
            toggleModal,
            setCatItems,
            addCartItem,
            addFavItem,
            removeCartItem,
            cats,
            setActiveProduct,
            setTotalCost,
            detailShow,
            inc,
            dec
        }}>
            {children}
        </ShopContext.Provider>
    )
}