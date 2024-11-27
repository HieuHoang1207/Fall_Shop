import React from "react";
function Introduce() {
  return (
    <div>
      {/* Header */}
      <div className="inner-header">
        <div className="container">
          <div className="pull-left">
            <h6 className="inner-title">Giới thiệu</h6>
          </div>
          <div className="pull-right">
            <div className="beta-breadcrumb font-large">
              <a href="index.html">Home</a> / <span>Giới thiệu</span>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div id="content">
          <div className="our-history">
            <h2 className="text-center wow fadeInDown">Fall Shop</h2>
            <div className="space35">&nbsp;</div>
            <div className="history-slider">
              <div className="history-slides">
                <div>
                  <div className="row">
                    <div className="col-sm-5">
                      <img src="source/image/infor/gioithieu.jpg" alt="" />
                    </div>
                    <div className="col-sm-7">
                      <p>
                        <b>470 Đường Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng</b>
                      </p>
                      <div className="space20">&nbsp;</div>
                      <p>
                        Fall Shop chúng tôi không đơn thuần là cái đẹp thời
                        trang, chúng tôi khao khát kiến tạo những giá trị xã hội
                        nhân văn, trở thành một lối sống để đồng hành cùng mọi
                        người trên hành trình thấu cảm vẻ đẹp của chính mình.
                        <br />
                        <br />
                        Fall Shop là kênh mua sắm online uy tín hàng đầu, cùng
                        với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết
                        đem những sản phẩm tốt nhất, với giá cả phải chăng, uy
                        tín và chất lượng với dịch vụ tốt nhất đến với mọi
                        người.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space50">&nbsp;</div>
            <hr />
            <div className="space50">&nbsp;</div>

            {/* Achievements */}
            <h2 className="text-center wow fadeInDown">Thành tích</h2>
            <div className="space20">&nbsp;</div>
            <p className="text-center wow fadeInLeft">
              cảm ơn những khách hàng lâu năm đã để lại những bình luận và góp ý
              đến KingGup chúng tôi, chúng tôi xin tiếp thu và ghi nhận ý kiến
              của mọi người để hoàn thiện hơn và ngày càng tốt hơn để mang lại
              những sản phẩm, dịch vụ tốt nhất đến khách hàng
            </p>
            <div className="space35">&nbsp;</div>
            <div className="row">
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon">
                    <i className="fa fa-user"></i>
                  </p>
                  <p
                    className="beta-counter-value timer numbers"
                    data-to="19855"
                    data-speed="2000"
                  >
                    19855
                  </p>
                  <p className="beta-counter-title">Khách hàng hàng năm</p>
                </div>
              </div>
              {/* Repeat counters as needed */}
            </div>

            {/* Founders */}
            <h2 className="text-center wow fadeInDownwow fadeInDown">Vị trí</h2>
            <div className="space20">&nbsp;</div>
            <div className="row">
              <div className="col-sm-6 wow fadeInLeft">
                <div className="beta-person media">
                  <img
                    className="pull-left"
                    src="source/image/infor/im11.jpg"
                    alt=""
                  />
                  <div className="media-body beta-person-body">
                    <h5>Hoàng Đình Hiếu</h5>
                    <p className="font-large">Chủ shop</p>
                    <p>
                      Hy vọng Shop ngày càng phát triển và đem lại được trải
                      nghiệm tốt nhất cho khách hàng
                    </p>
                    <a href="https://www.facebook.com/hieufall/">
                      Facebook <i className="fa fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Repeat founders as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
