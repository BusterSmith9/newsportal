import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="listblock">
                <div className = "firstbar">
                    <div className="symbol">  
                        <a class="navbar-brand" href="#">
                            <img src = "./images/logo.png" alt="logo"/>  
                        </a>
                    </div>
                    <div className="search">
                        <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>                
            </nav> 
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">होमपेज</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">समाचार </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#">खेलकुद </a>

                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#">आर्थिक </a>

                    </li>

                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#">मनोरंजन  </a>

                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#">बिजनेस  </a>

                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#">खेलकुद  </a>

                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link" href="#">अन्य</a>
                        <div className="drop">
                            <ul>
                                <li>अन्तरास्ट्रिय</li>
                                <li>प्रदेश समाचार </li>
                                <li>अन्तरास्ट्रिय</li>
                                <li>प्रदेश समाचार </li>
                                <li>अन्तरास्ट्रिय</li>
                                <li>प्रदेश समाचार </li>
                            </ul>
                        </div>
                    </li>

                </ul>

                </div>
            </div>
            </nav>
            <div className="firstsection">
                <div className="trend">TRENDING</div>
                <div className="list">
                <ul class="trend-list">
                    <li class="list-item">
                    <a class="nav-link active" aria-current="page" href="#"># होमपेज</a>
                    </li>
                    <li class="list-item">
                    <a class="nav-link" href="#">#समाचार </a>
                    </li>
                    <li class="list-item dropdown">
                    <a class="nav-link" href="#">#अन्य</a>
                    </li>
                    <li class="list-item dropdown">
                    <a class="nav-link" href="#">#खेलकुद </a>

                    </li>
                    <li class="list-item dropdown">
                    <a class="nav-link" href="#">#आर्थिक </a>

                    </li>

                    <li class="list-item dropdown">
                    <a class="nav-link" href="#">#अन्तरास्ट्रिय </a>

                    </li>
                    <li class="list-item dropdown">
                    <a class="nav-link" href="#">#बिजनेस </a>

                    </li>

                </ul>

                </div>
            </div>
        </>
    )
}
export default Navbar;
