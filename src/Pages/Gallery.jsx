import React from "react";
import "../index.css";
const Gallery = () => {
    
  return (
    <div className="bg-brown" id="gallery">
      <h1 className="flex justify-center pt-10 items-center text-5xl vanity">
        Gallery
      </h1>
      <div class="grid grid-cols-2 p-20 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcrajputana-jaipur/images/overview/hotel-expereince/cuisine.png"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media-cdn.tripadvisor.com/media/photo-s/2b/d8/46/e8/caption.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://foto.hrsstatic.com/fotos/0/2/600/430/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F1%2F0%2F0%2F0%2F1000583%2F1000583_z30_22639003.jpg/QEO6Uz5i6Jt3TLcmSJgCvA%3D%3D/275%2C206/6/Lavande_Hotel_Dalian_Malan_Square_Liaoning_Normal_University-Dalian-Standardzimmer-28-1000583.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media-cdn.tripadvisor.com/media/photo-s/18/0d/93/59/coral-isle.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media-cdn.tripadvisor.com/media/photo-s/07/05/d8/4b/vertical-city-hotel.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJiSgcAvLSzAqvkPO377pVedP7_C20KIiWcqbSb3zwQ&s"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://q-xx.bstatic.com/xdata/images/hotel/max500/216312689.jpg?k=3d48636e10d4a80a81547c18cfff5e10f03429a333a567ee708feb02ff0922fc&o="
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media-cdn.tripadvisor.com/media/photo-s/16/90/fe/e0/larger-than-normal-hotel.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743751085-N2317B7K3I2YBZHPHENO/image-asset.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://www.usatoday.com/gcdn/-mm-/4a2e7b3505a79d2021a31a26e42f2069aee57fd7/c=186-0-1015-622/local/-/media/2016/05/02/USATODAY/usatsports/yotel_premium_cabin_at_dusk.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://img.freepik.com/free-photo/vertical-shot-big-building-with-hotel-sign-dark-blue-sky_181624-1783.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://media-cdn.tripadvisor.com/media/photo-s/11/08/06/58/img-20171018-wa0054-largejpg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
