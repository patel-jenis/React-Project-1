import HeaderMenus from './HeaderMenus'

const Header = () => {

    let elements = [
        {
            menuTitle: "Stylish Bag",
        },
        {
            menuTitle: "Bum Bags",
        },
        {
            menuTitle: "Handbags",
        },
        {
            menuTitle: "Leather Bag",
        },
        {
            menuTitle: "Hobos",
        },
        {
            menuTitle: "More",
        },
    ]

    return (
        <header className='position-fixed top-0 start-0 w-100'>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center py-3'>
                    <div>
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <ul className='nav-menus d-flex align-items-center gap-5 m-0'>
                        {
                            elements.map((data) => {
                                return <HeaderMenus menmenuTitle={data.menuTitle} />
                            })
                        }
                    </ul>
                    <ul className='nav-social d-flex align-items-center gap-3 m-0'>
                        <li>
                            <button className='border-0 bg-transparent'>
                                <i class="ri-search-line"></i>
                            </button>
                        </li>
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                        <li>
                            <button className='border-0 bg-transparent d-flex gap-2 align-items-center'>
                                <i class="ri-shopping-bag-line position-relative">
                                    <span class="cart-bedge position-absolute translate-middle badge rounded-pill">
                                        0
                                    </span>
                                </i>
                                <span>$0.00</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header