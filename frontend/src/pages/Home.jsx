// Import thư viện cần thiết
import {
  Container,
  Carousel,
  CardGroup,
  Card,
  Placeholder,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useMenuApi from "../hooks/useMenuApi";
// Import định dạng CSS
import "../styles/pages/Home.css";
// Import ảnh, icon
import HomeImages from "../assets/HomePage/index";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
  const { loading, data = [], error } = useMenuApi("/api/best-sales");
  const navigate = useNavigate();
  const visibleData = data.slice(0, 2); // Hiển thị tối đa 2 sản phẩm

  // Hàm xử lý sự kiện "Buy Now"
  const handleBuyNow = (item) => {
    console.log(`Product added to cart: ${item.title}`);
    // Thêm logic xử lý giỏ hàng ở đây
  };

  return (
    <article id="HomePage">
      <Container fluid="xxl">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img className="" src={HomeImages.carousel1} alt="Carousel 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="" src={HomeImages.carousel2} alt="Carousel 2" />
          </Carousel.Item>
        </Carousel>

        {/* Best Sales Menu */}
        <section className="bestSales">
          <div className="row pt-2">
            <h2 className="heading">Best Sales</h2>
          </div>

          {/* Hiển thị thông báo lỗi hoặc danh sách sản phẩm */}
          {error ? (
            <div className="alert alert-danger" role="alert">
              Something went wrong. Please try again later.
            </div>
          ) : (
            <CardGroup className="best-sales-list">
              {loading || !data || data.length === 0
                ? // Placeholder khi đang tải hoặc không có dữ liệu
                  Array.from({ length: 2 }).map((_, idx) => (
                    <Card className="best-sales-item shadow-sm" key={idx}>
                      <div className="row g-0">
                        <div className="col-4">
                          <Card.Img
                            src="holder.js/150x150"
                            className="img-fluid rounded-start item-image"
                          />
                        </div>
                        <div className="col-8">
                          <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                              Item Title
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                              Item Description
                            </Placeholder>
                            <button className="btn">
                              <AiOutlineShoppingCart className="cart-icon" />
                              <span>Buy Now</span>
                            </button>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  ))
                : // Hiển thị dữ liệu khi có
                  visibleData.map((item) => (
                    <Card className="best-sales-item shadow-sm" key={item.id}>
                      <div className="row g-0">
                        <div className="col-4">
                          <Card.Img
                            variant="top"
                            src={item.image}
                            alt={item.title}
                            className="img-fluid rounded-start item-image"
                          />
                        </div>
                        <div className="col-8">
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <button
                              className="btn"
                              onClick={() => handleBuyNow(item)}
                            >
                              <AiOutlineShoppingCart className="cart-icon" />
                              <span>Buy Now</span>
                            </button>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  ))}
            </CardGroup>
          )}

          {/* Nút Read More */}
          {data.length > 2 && (
            <div className="text-center mt-3">
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/menu")}
              >
                Read More
              </button>
            </div>
          )}
        </section>
      </Container>
    </article>
  );
}

export default Home;
