import React from 'react'
import './GalleryComponent.scss'

function GalleryComponent() {
    return (
        <div className="gallerycomp">
            <div className="gallerytitle">
                <h1>Our Gallery</h1>
                <p>let's passioniate our world with Saigroup</p>

            </div>
            <div className="container gal">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://drive.google.com/uc?id=1X2UZYtteGrVj6xJ4MxyvTZsB0E1su8ZP" className="img-fluid gal_img1" />

                    </div>
                    <div className="col-lg-3">
                       <img src="https://drive.google.com/uc?id=1Sc7MtNuo-95sNiAKWiU1N5iwR9MGfDnR"  className="img-fluid gal_img2" />
                       <img src="https://drive.google.com/uc?id=1KMb7ZEzFvQsRWsV4kBVeHy5k-gR3DwFA"  className="img-fluid gal_img3" />
                    </div>
                    <div className="col-lg-3">
                    <img src="https://drive.google.com/uc?id=1JLo47hWhenNDZSeI-Yh254yaLZ6QjUGX"   className="img-fluid gal_img4"/>
                       <img src="https://drive.google.com/uc?id=1PoTv_ShjUwi5_REpp4NiJmPI80xLM-_P"  className="img-fluid gal_img5"/>

                    </div>

                </div>
                <div className="row pt-5">
                    <div className="col-lg-3">
                    <img src="https://drive.google.com/uc?id=1E5Z5RMOUcpGjpddO42PtvS6FhNHMpIFw"  className="img-fluid gal_img6" />
                    <img src="https://drive.google.com/uc?id=1G2Bjk1c1HJOcqVsnR7UIKkg_yqrVQ216"  className="img-fluid gal_img7" />

                    </div>
                    <div className="col-lg-6">
                    <img src="https://drive.google.com/uc?id=1ljZDwTQ75rWqkkDccT-IiMPQfJRFFBsX"  className="img-fluid gal_img8" />
                     

                    </div>
                    <div className="col-lg-3">
                    <img src="https://drive.google.com/uc?id=1aQCDyI0_WtUfXri1Efm83YAbxsbaGt3n"  className="img-fluid gal_img9" />
                       <img src="https://drive.google.com/uc?id=1CyzJR--15daZmO5Zhf7ILMH_rBI07zkh"  className="img-fluid gal_img10 " />

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default GalleryComponent
