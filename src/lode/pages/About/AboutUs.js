import React from 'react';
import CommonMain from "../../CommonMain";
import images from "../../../assets/images/images";

const AboutUs = () => {
	return (
		<CommonMain>
			<section className="container main-content">
				<div className="row">
					<div className={"col-md-3"}>
						<div className={"right-panel"}>
							<div className="head-panel">
								<p>Winclub24H</p>
							</div>
							<div className={"cate-about"}>
								<ul className="nav flex-column" >
									<li className="nav-item" >
										<a className="nav-link " data-toggle="tab" href="#home">Về Winclub24H</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#menu1">Trách nhiệm</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-9" >
						<div className="block right-content abo">
							<div className="tab-content">
								<div className="tab-pane container active" id="home">
									<h3>Tự giới thiệu</h3>
									<div className={"text-block"}>
										<p>Winclub24h tự hào là nhà cái cung cấp các dịch vụ lô đề, số đề,
											soi cầu lô đề hàng đầu tại Việt Nam.
											Winclub24h đã đặt bước đi tiên phong trong lĩnh vực Đánh Đề Trực Tuyến,
											hội đủ các kiểu đánh lô đề Miền Bắc, lô đề Miền Trung, lô đề Miền Nam với tỷ lệ lô đề ăn cao và hấp dẫn.
											Nạp & Rút tiền thắng lô đề cực nhanh, Winclub24h luôn làm hài lòng khách hàng chơi số đề, lô đề của cả 3 miền bắc, trung và nam.
											Thay vì phải tốn nhiều thời gian đến nơi Ghi Đề để có thể đánh những con số đề,
											bao những lô đề mà mình yêu thích thì ngày nay với sự xuất hiện của công nghệ Winclub24h thì việc đánh lô đề miền bắc,
											lô đề miền trung hay lô đề miền nam không còn là nỗi lo lắng của bạn nữa.
											Chỉ cần một chiếc máy tính hoặc một chiếc Smartphone có kết nối Internet là bạn có thể Đánh Đề mọi lúc mọi nơi bất cứ khi nào bạn thích.
											Việc kiểm tra kết quả lô đề và tiền thắng số đề cũng trở nên dễ dàng và tiện lợi hơn bao giờ hết.</p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.about} alt="" style={{width:"40%"}}/>
									</div>
									<div className={"text-block"}>
										<p>Ngoài sự phong phú về cách chơi lô đề, số đề online,
											tính tiện ích trong việc Nạp tiền,
											Rút tiền thắng lô đề thì quý khách hàng còn nhận được sự chăm sóc chu đáo,
											tận tình của các tư vấn viên. Bộ phận tư vấn chúng tôi luôn sẵn sàng giải thích mọi thắc mắc cho quý khách hàng về các con số đề,
											các lô đề, soi cầu lô đề, thống kê kết quả lô đề, số đề của 3 miền...</p>
										<p>Winclub24H sử dụng hệ thống bảo mật cao nhất hiện nay là KASPERSKY LAB, công nghệ mã hóa hiện đại đảm bảo an toàn tuyệt đối mọi thông tin của  khách hàng chơi lô đề, số đề.
											Hãy đến với chúng tôi để thỏa mãn đam mê cùng những con số và tận hưởng dịch vụ đánh đề online chuyên nghiệp nhất hiện nay.</p>
									</div>
								</div>
								<div className="tab-pane container fade" id="menu1">
									<h3>Trách nhiệm</h3>
									<div className={"text-block"}>
										<p>Winclub24H là website Đánh Đề Trực Tuyến lớn nhất dành cho người chơi tại Châu Á.
											Chúng tôi đưa ra các tỷ lệ ăn cao nhất cho tất cả người chơi, Chính sách tặng thưởng hoa hồng cực cao dành cho khách hàng giới thiệu thành viên tham gia trang Winclub24H online.
											Đánh Đề là một loại hình giải trí và chúng tôi luôn cố gắng đem lại cho Khách hàng những giây phút giải trí thú vị.
											Với phương châm xem đạo đức và trách nhiệm xã hội là một phần thiết yếu của hoạt động kinh doanh, chúng tôi luôn đặt lợi ích của Khách hàng lên hàng đầu.</p>
										<p>Chúng tôi tuân thủ các nguyên tắc tối cao của dịch vụ khách hàng và giải quyết nhanh chóng và xử lý hiệu quả bất kỳ vấn đề.
											Tất cả các khách hàng của chúng tôi có thể tận hưởng một dịch vụ hoàn chỉnh, thân thiện và chuyên nghiệp với các sản phẩm chất lượng.</p>
										<p>- Cam kết an toàn trên mỗi giao dịch với ghi chú buôn bán tiền ảo hợp pháp.</p>
										<p>- Giao dịch Nạp & Rút cực nhanh trong vòng 5 phút một cách an toàn và thuận tiện cho các thành viên tại Winclub24H.
											Chúng tôi cung cấp hệ thống rút tiền một cách nhanh chóng và an toàn nhất. Quý khách hàng có thể yêu cầu rút tiền bất cứ lúc nào.</p>
										<span style={{fontWeight:"600",color:"#5d5d5d"}}>Bảo mật và quyền riêng tư</span>

									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.baomat} alt="" style={{width:"50%"}}/>
									</div>
									<div className={"text-block"}>
										<p>Winclub24H sử dụng hệ thống bảo mật cao nhất hiện nay là KASPERSKY LAB (SSL 128-bit mã hóa bảo mật), đảm bảo an toàn và bảo mật thông tin khách hàng.
											Các dữ liệu thông tin cá nhân khách hàng sẽ được giám sát chặt chẽ và cam kết không tiết lộ thông tin cho bất kỳ cá nhân hay tổ chức nào khác.</p>
										<span style={{fontWeight:"600",color:"#5d5d5d"}}>Chất lượng dịch vụ khách hàng</span>
										<p>Bộ phận chăm sóc khách hàng của chúng tôi sẽ cung cấp cho bạn dịch vụ tư vấn chuyên nghiệp bất cứ lúc nào.
											Chẳng hạn như đăng ký, gửi tiền, rút tiền, ngay lập tức đáp ứng với yêu cầu của khách hàng và giải quyết vấn đề của khách hàng bằng
											hotline: 0796191047</p>
										<span style={{fontWeight:"600",color:"#5d5d5d"}}>Chất lượng dịch vụ khách hàng</span>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</CommonMain>
	);
};

export default AboutUs;