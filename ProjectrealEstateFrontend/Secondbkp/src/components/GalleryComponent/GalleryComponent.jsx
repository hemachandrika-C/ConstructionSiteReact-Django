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
                        <img src="picture/gifs/afe8a8d8b60f5fc99b3c58fcf8a4a449.gif" className="img-fluid gal_img1" />

                    </div>
                    <div className="col-lg-3">
                       <img src="picture/bbd065c615a2a3edc6a1dc289fcf4bb6.jpg"  className="img-fluid gal_img2" />
                       <img src="picture/spiced-carrot-cake-with-labneh-icing-46402-2.jpg"  className="img-fluid gal_img3" />
                    </div>
                    <div className="col-lg-3">
                    <img src="picture/114053111-indian-traditional-bengali-sweet-food-chena-toast-also-called-chhena-sweets-bangla-sweet-or-bengali-.jpg"   className="img-fluid gal_img4"/>
                       <img src="picture/114053111-indian-traditional-bengali-sweet-food-chena-toast-also-called-chhena-sweets-bangla-sweet-or-bengali-.jpg"  className="img-fluid gal_img5"/>

                    </div>

                </div>
                <div className="row pt-5">
                    <div className="col-lg-3">
                    <img src="https://wallpaperaccess.com/full/1570301.jpg"  className="img-fluid gal_img6" />
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/blog/2019/05/colourfulfoods_898.jpg"  className="img-fluid gal_img7" />

                    </div>
                    <div className="col-lg-6">
                    <img src="picture/gifs/tumblr_mg504gTjVr1s1mjseo1_500.gif"  className="img-fluid gal_img8" />
                     

                    </div>
                    <div className="col-lg-3">
                    <img src="https://us.123rf.com/450wm/tverdohlib/tverdohlib1706/tverdohlib170600794/80251886-macaron-delicious-french-macarons-colorful-multilevel-pyramid-and-sweet-cake-dessert-on-plates-or-st.jpg?ver=6"  className="img-fluid gal_img9" />
                       <img src="https://images.unsplash.com/photo-1604672857367-a0d662dfd7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sb3JmdWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"  className="img-fluid gal_img10 " />

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default GalleryComponent
