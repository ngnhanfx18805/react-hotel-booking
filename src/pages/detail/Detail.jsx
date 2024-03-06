import "./Detail.css";

const Detail = () => {
  const dataDetail = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };

  return (
    <div>
      <div className="detail" key={Math.random()}>
        <div>
          <h1>{dataDetail.name}</h1>
          <p className="address">{dataDetail.address}</p>
          <p className="distance-">{dataDetail.distance}</p>
          <p className="price---">{dataDetail.price}</p>
        </div>
        <button type="button">Reserve or Book Now!</button>
      </div>
      <div className="image--">
        {dataDetail.photos.map((image) => (
          <img src={image} />
        ))}
      </div>
      <div className="title-">
        <div className="title--">
          <h1>{dataDetail.title}</h1>
          <p>{dataDetail.description}</p>
        </div>
        <div className="content-detail">
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart og Krakow, this propperty has an excellent
            location score of 9.8
          </p>
          <p className="money">
            <b>${dataDetail.nine_night_price}</b> (9 nights)
          </p>
          <button type="button">Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
