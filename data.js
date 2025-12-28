const danhSachBenhNhan = [
  {
    id: 1,
    hoTen: "Nguyễn Văn Minh",
    tuoi: 45,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS001",
    diaChi: "123 Lê Lợi, Quận 1, TP.HCM",
    ngaySinh: "1979-05-15",
    quocTich: "Việt Nam",
    diDong: "0909123456",
    cccd: "012345678",
    soTheBHYT: "SV123456789",
    email: "minh.nguyen@example.com",
    ngheNhiep: "Kỹ sư",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 2,
    hoTen: "Trần Thị Bích",
    tuoi: 32,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS002",
    diaChi: "456 Nguyễn Huệ, Quận 1, TP.HCM",
    ngaySinh: "1992-08-22",
    quocTich: "Việt Nam",
    diDong: "0912345678",
    cccd: "123456789012",
    soTheBHYT: "SV223456789",
    email: "bich.tran@example.com",
    ngheNhiep: "Giáo viên",
    doiTuong: "Người nhà",
  },
  {
    id: 3,
    hoTen: "Lê Hoàng Cường",
    tuoi: 56,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS003",
    diaChi: "789 Trần Hưng Đạo, Quận 5, TP.HCM",
    ngaySinh: "1968-03-10",
    quocTich: "Việt Nam",
    diDong: "0923456789",
    cccd: "223456789012",
    soTheBHYT: "SV323456789",
    email: "cuong.le@example.com",
    ngheNhiep: "Bác sĩ",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 4,
    hoTen: "Phạm Thu Dung",
    tuoi: 28,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS004",
    diaChi: "321 Lý Thường Kiệt, Quận 10, TP.HCM",
    ngaySinh: "1996-12-05",
    quocTich: "Việt Nam",
    diDong: "0934567890",
    cccd: "323456789012",
    soTheBHYT: "SV423456789",
    email: "dung.pham@example.com",
    ngheNhiep: "Y tá",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 5,
    hoTen: "Hoàng Văn Em",
    tuoi: 41,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS005",
    diaChi: "654 Cách Mạng Tháng 8, Quận 3, TP.HCM",
    ngaySinh: "1983-07-18",
    quocTich: "Việt Nam",
    diDong: "0945678901",
    cccd: "423456789012",
    soTheBHYT: "SV523456789",
    email: "em.hoang@example.com",
    ngheNhiep: "Kế toán",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 6,
    hoTen: "Vũ Thị Phương",
    tuoi: 38,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS006",
    diaChi: "987 Võ Văn Tần, Quận 3, TP.HCM",
    ngaySinh: "1986-11-25",
    quocTich: "Việt Nam",
    diDong: "0956789012",
    cccd: "523456789012",
    soTheBHYT: "SV623456789",
    email: "phuong.vu@example.com",
    ngheNhiep: "Luật sư",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 7,
    hoTen: "Đặng Quốc Giang",
    tuoi: 52,
    gioiTinh: "Nam",
    trangThai: "ĐK",
    soHoSo: "HS007",
    diaChi: "147 Pasteur, Quận 1, TP.HCM",
    ngaySinh: "1972-04-30",
    quocTich: "Việt Nam",
    diDong: "0967890123",
    cccd: "623456789012",
    soTheBHYT: "SV723456789",
    email: "giang.dang@example.com",
    ngheNhiep: "Kiến trúc sư",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 8,
    hoTen: "Bùi Thị Hà",
    tuoi: 29,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS008",
    diaChi: "258 Hai Bà Trưng, Quận 1, TP.HCM",
    ngaySinh: "1995-09-14",
    quocTich: "Việt Nam",
    diDong: "0978901234",
    cccd: "723456789012",
    soTheBHYT: "SV823456789",
    email: "ha.bui@example.com",
    ngheNhiep: "Nhân viên văn phòng",
    doiTuong: "Người nhà",
  },
  {
    id: 9,
    hoTen: "Mai Văn Ích",
    tuoi: 47,
    gioiTinh: "Nam",
    trangThai: "ĐK",
    soHoSo: "HS009",
    diaChi: "369 Điện Biên Phủ, Bình Thạnh, TP.HCM",
    ngaySinh: "1977-06-20",
    quocTich: "Việt Nam",
    diDong: "0989012345",
    cccd: "823456789012",
    soTheBHYT: "SV923456789",
    email: "ich.mai@example.com",
    ngheNhiep: "Doanh nhân",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 10,
    hoTen: "Ngô Thị Kim",
    tuoi: 35,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS010",
    diaChi: "741 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM",
    ngaySinh: "1989-02-28",
    quocTich: "Việt Nam",
    diDong: "0990123456",
    cccd: "923456789012",
    soTheBHYT: "SV103456789",
    email: "kim.ngo@example.com",
    ngheNhiep: "Dược sĩ",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 11,
    hoTen: "Đỗ Văn Long",
    tuoi: 61,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS011",
    diaChi: "852 Lê Văn Sỹ, Phú Nhuận, TP.HCM",
    ngaySinh: "1963-01-12",
    quocTich: "Việt Nam",
    diDong: "0901234567",
    cccd: "101234567890",
    soTheBHYT: "SV113456789",
    email: "long.do@example.com",
    ngheNhiep: "Giảng viên",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 12,
    hoTen: "Trịnh Thị Mai",
    tuoi: 43,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS012",
    diaChi: "963 Hoàng Văn Thụ, Phú Nhuận, TP.HCM",
    ngaySinh: "1981-10-08",
    quocTich: "Việt Nam",
    diDong: "0911234567",
    cccd: "111234567890",
    soTheBHYT: "SV123456780",
    email: "mai.trinh@example.com",
    ngheNhiep: "Nhà báo",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 13,
    hoTen: "Phan Văn Nam",
    tuoi: 39,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS013",
    diaChi: "159 Cộng Hòa, Tân Bình, TP.HCM",
    ngaySinh: "1985-05-16",
    quocTich: "Việt Nam",
    diDong: "0921234567",
    cccd: "121234567890",
    soTheBHYT: "SV133456780",
    email: "nam.phan@example.com",
    ngheNhiep: "Lập trình viên",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 14,
    hoTen: "Lý Thị Ngọc",
    tuoi: 31,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS014",
    diaChi: "357 Lạc Long Quân, Quận 11, TP.HCM",
    ngaySinh: "1993-03-24",
    quocTich: "Việt Nam",
    diDong: "0931234567",
    cccd: "131234567890",
    soTheBHYT: "SV143456780",
    email: "ngoc.ly@example.com",
    ngheNhiep: "Thiết kế đồ họa",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 15,
    hoTen: "Võ Văn Oanh",
    tuoi: 54,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS015",
    diaChi: "753 Tân Sơn Nhì, Tân Phú, TP.HCM",
    ngaySinh: "1970-08-07",
    quocTich: "Việt Nam",
    diDong: "0941234567",
    cccd: "141234567890",
    soTheBHYT: "SV153456780",
    email: "oanh.vo@example.com",
    ngheNhiep: "Thợ điện",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 16,
    hoTen: "Dương Thu Phúc",
    tuoi: 26,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS016",
    diaChi: "951 Âu Cơ, Tân Phú, TP.HCM",
    ngaySinh: "1998-11-19",
    quocTich: "Việt Nam",
    diDong: "0951234567",
    cccd: "151234567890",
    soTheBHYT: "SV163456780",
    email: "phuc.duong@example.com",
    ngheNhiep: "Sinh viên",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 17,
    hoTen: "Chu Văn Quân",
    tuoi: 49,
    gioiTinh: "Nam",
    trangThai: "ĐK",
    soHoSo: "HS017",
    diaChi: "246 Quang Trung, Gò Vấp, TP.HCM",
    ngaySinh: "1975-04-13",
    quocTich: "Việt Nam",
    diDong: "0961234567",
    cccd: "161234567890",
    soTheBHYT: "SV173456780",
    email: "quan.chu@example.com",
    ngheNhiep: "Tài xế",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 18,
    hoTen: "Tạ Thu Rừng",
    tuoi: 37,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS018",
    diaChi: "468 Phan Văn Trị, Gò Vấp, TP.HCM",
    ngaySinh: "1987-12-21",
    quocTich: "Việt Nam",
    diDong: "0971234567",
    cccd: "171234567890",
    soTheBHYT: "SV183456780",
    email: "rung.ta@example.com",
    ngheNhiep: "Chủ cửa hàng",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 19,
    hoTen: "Hồ Văn Sơn",
    tuoi: 58,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS019",
    diaChi: "579 Nguyễn Oanh, Gò Vấp, TP.HCM",
    ngaySinh: "1966-07-03",
    quocTich: "Việt Nam",
    diDong: "0981234567",
    cccd: "181234567890",
    soTheBHYT: "SV193456780",
    email: "son.ho@example.com",
    ngheNhiep: "Nông dân",
    doiTuong: "Bệnh nhân",
  },
  {
    id: 20,
    hoTen: "Đinh Thị Tâm",
    tuoi: 44,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS020",
    diaChi: "680 Phan Huy Ích, Quận 12, TP.HCM",
    ngaySinh: "1980-09-27",
    quocTich: "Việt Nam",
    diDong: "0991234567",
    cccd: "191234567890",
    soTheBHYT: "SV203456780",
    email: "tam.dinh@example.com",
    ngheNhiep: "Điều dưỡng",
    doiTuong: "Bệnh nhân",
  },
];

const danhSachBenhAnChiTiet = [
  {
    id: "ba-01",
    maHoSo: "HS001",
    tieuDe: "26/04/2025 Viêm gan virus",
    ngay: "2025-04-26",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Bệnh viện Đại học Y Dược TP.HCM</div>
        <div style="font-size: 16px; font-weight: 700;">BỆNH ÁN NGOẠI TRÚ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS001</div>
      </div>
      <div class="mb-2"><strong>Họ tên:</strong> Nguyễn Thị A &nbsp;&nbsp; <strong>Giới tính:</strong> Nữ &nbsp;&nbsp; <strong>Năm sinh:</strong> 1986</div>
      <div class="mb-2"><strong>Đối tượng:</strong> BHYT &nbsp;&nbsp; <strong>Số thẻ:</strong> 123-456-789</div>
      <div class="mb-2"><strong>Ngày khám:</strong> 26/04/2025 &nbsp;&nbsp; <strong>Phòng khám:</strong> Gan</div>
      <hr>
      <div class="mb-2"><strong>I. Lý do khám bệnh:</strong> Đau bụng âm ỉ, mệt mỏi kéo dài.</div>
      <div class="mb-2"><strong>II. Triệu chứng:</strong> Mạch 72l/p, huyết áp 110/70 mmHg, cân nặng 51kg, chiều cao 157cm, BMI 20.7.</div>
      <div class="mb-2"><strong>III. Bệnh sử:</strong> Vàng da 2 tuần, ăn uống kém, không sốt.</div>
      <div class="mb-2"><strong>IV. Khám lâm sàng:</strong> Bụng mềm, không chướng, gan không to.</div>
      <div class="mb-2"><strong>V. Chẩn đoán:</strong> Theo dõi viêm gan virus B mạn tính.</div>
      <div class="mb-2"><strong>VI. Cận lâm sàng:</strong> AST/ALT tăng, HBV-DNA 3.2E7 copies/ml.</div>
      <div class="mb-2"><strong>VII. Điều trị:</strong> Tenofovir 300mg/ngày 1 viên, hẹn tái khám sau 4 tuần.</div>
      <hr>
      <div class="text-end" style="font-size: 13px;">Người lập: Bác sĩ Nguyễn Văn A</div>
    `,
  },
  {
    id: "ba-02",
    maHoSo: "HS002",
    tieuDe: "14/05/2025 Kiểm tra định kỳ",
    ngay: "2025-05-14",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">BÁO CÁO TÁI KHÁM</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS002</div>
      </div>
      <div class="mb-2"><strong>Họ tên:</strong> Trần Thị Bích</div>
      <div class="mb-2"><strong>Ngày khám:</strong> 14/05/2025</div>
      <div class="mb-2"><strong>Kết luận:</strong> Sức khỏe ổn định, men gan giảm.</div>
      <div class="mb-2"><strong>Kế hoạch:</strong> Tiếp tục thuốc, hẹn lại sau 3 tháng.</div>
    `,
  },
  {
    id: "ba-03",
    maHoSo: "HS003",
    tieuDe: "02/06/2025 Tư vấn điều trị",
    ngay: "2025-06-02",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">TƯ VẤN ĐIỀU TRỊ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS003</div>
      </div>
      <div class="mb-2"><strong>Tóm tắt:</strong> Bệnh nhân được tư vấn phác đồ điều trị duy trì.</div>
      <div class="mb-2"><strong>Hướng dẫn:</strong> Hạn chế rượu bia, ăn nhạt, ngủ đúng giờ.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Hẹn xét nghiệm HBV-DNA sau 2 tháng.</div>
    `,
  },
  {
    id: "ba-04",
    maHoSo: "HS004",
    tieuDe: "15/06/2025 Tái khám men gan",
    ngay: "2025-06-15",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">TÁI KHÁM MEN GAN</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS004</div>
      </div>
      <div class="mb-2"><strong>Kết quả:</strong> AST 80, ALT 92, khuyến nghị tiếp tục theo dõi.</div>
      <div class="mb-2"><strong>Kế hoạch:</strong> Tái khám sau 2 tuần, xét nghiệm lại men gan.</div>
    `,
  },
  {
    id: "ba-05",
    maHoSo: "HS005",
    tieuDe: "28/06/2025 Kiểm tra định kỳ",
    ngay: "2025-06-28",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Nội tổng hợp</div>
        <div style="font-size: 16px; font-weight: 700;">KIỂM TRA ĐỊNH KỲ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS005</div>
      </div>
      <div class="mb-2"><strong>Tổng quan:</strong> Huyết áp ổn, đường huyết ổn định.</div>
      <div class="mb-2"><strong>Gợi ý:</strong> Vận động nhẹ 30 phút/ngày, ăn ít muối.</div>
    `,
  },
  {
    id: "ba-06",
    maHoSo: "HS006",
    tieuDe: "05/07/2025 Đánh giá thuốc",
    ngay: "2025-07-05",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">ĐÁNH GIÁ THUỐC</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS006</div>
      </div>
      <div class="mb-2"><strong>Nội dung:</strong> Kiểm tra tuân thủ điều trị và tác dụng phụ.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Không ghi nhận tác dụng phụ đáng kể.</div>
    `,
  },
  {
    id: "ba-07",
    maHoSo: "HS007",
    tieuDe: "12/07/2025 Theo dõi HBV",
    ngay: "2025-07-12",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">THEO DÕI HBV</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS007</div>
      </div>
      <div class="mb-2"><strong>Kết quả:</strong> HBV-DNA giảm còn 1.2E4 copies/ml.</div>
      <div class="mb-2"><strong>Kế hoạch:</strong> Giữ nguyên thuốc, tái khám 1 tháng.</div>
    `,
  },
  {
    id: "ba-08",
    maHoSo: "HS008",
    tieuDe: "20/07/2025 Hướng dẫn dinh dưỡng",
    ngay: "2025-07-20",
    phong: "Phòng khám Dinh dưỡng",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Dinh dưỡng</div>
        <div style="font-size: 16px; font-weight: 700;">HƯỚNG DẪN DINH DƯỠNG</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS008</div>
      </div>
      <div class="mb-2"><strong>Khuyến nghị:</strong> Giảm dầu mỡ, tăng rau xanh, uống đủ nước.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Theo dõi cân nặng hàng tuần.</div>
    `,
  },
  {
    id: "ba-09",
    maHoSo: "HS009",
    tieuDe: "01/08/2025 Kiểm tra siêu âm",
    ngay: "2025-08-01",
    phong: "Phòng siêu âm",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Khoa Chẩn đoán hình ảnh</div>
        <div style="font-size: 16px; font-weight: 700;">SIÊU ÂM Ổ BỤNG</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS009</div>
      </div>
      <div class="mb-2"><strong>Kết quả:</strong> Gan kích thước bình thường, không u khu trú.</div>
      <div class="mb-2"><strong>Đề nghị:</strong> Theo dõi định kỳ 6 tháng/lần.</div>
    `,
  },
  {
    id: "ba-10",
    maHoSo: "HS010",
    tieuDe: "15/08/2025 Xét nghiệm máu",
    ngay: "2025-08-15",
    phong: "Phòng xét nghiệm",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Khoa Xét nghiệm</div>
        <div style="font-size: 16px; font-weight: 700;">XÉT NGHIỆM SINH HÓA</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS010</div>
      </div>
      <div class="mb-2"><strong>Kết quả:</strong> ALT 40, AST 35, Bilirubin bình thường.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Tiếp tục theo dõi.</div>
    `,
  },
  {
    id: "ba-11",
    maHoSo: "HS011",
    tieuDe: "02/09/2025 Đánh giá điều trị",
    ngay: "2025-09-02",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">ĐÁNH GIÁ ĐIỀU TRỊ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS011</div>
      </div>
      <div class="mb-2"><strong>Tình trạng:</strong> Ổn, gan không to, không phù.</div>
      <div class="mb-2"><strong>Kế hoạch:</strong> Hẹn tái khám 2 tháng.</div>
    `,
  },
  {
    id: "ba-12",
    maHoSo: "HS012",
    tieuDe: "18/09/2025 Tái khám đợt 3",
    ngay: "2025-09-18",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Nội tổng hợp</div>
        <div style="font-size: 16px; font-weight: 700;">TÁI KHÁM ĐỢT 3</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS012</div>
      </div>
      <div class="mb-2"><strong>Kết quả:</strong> Men gan giảm còn giới hạn bình thường.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Duy trì thuốc, ăn nhạt.</div>
    `,
  },
  {
    id: "ba-13",
    maHoSo: "HS013",
    tieuDe: "03/10/2025 Theo dõi sau tiêm",
    ngay: "2025-10-03",
    phong: "Phòng tiêm chủng",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng tiêm chủng</div>
        <div style="font-size: 16px; font-weight: 700;">THEO DÕI SAU TIÊM</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS013</div>
      </div>
      <div class="mb-2"><strong>Nội dung:</strong> Không ghi nhận phản ứng bất thường.</div>
      <div class="mb-2"><strong>Đề nghị:</strong> Hẹn nhắc lịch mũi tiếp theo.</div>
    `,
  },
  {
    id: "ba-14",
    maHoSo: "HS014",
    tieuDe: "15/10/2025 Thay đổi thuốc",
    ngay: "2025-10-15",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Gan ABC</div>
        <div style="font-size: 16px; font-weight: 700;">ĐIỀU CHỈNH PHÁC ĐỒ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS014</div>
      </div>
      <div class="mb-2"><strong>Thay đổi:</strong> Chuyển sang Tenofovir alafenamide 25mg.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Theo dõi chức năng thận sau 1 tháng.</div>
    `,
  },
  {
    id: "ba-15",
    maHoSo: "HS015",
    tieuDe: "28/10/2025 Kiểm tra toàn thân",
    ngay: "2025-10-28",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Nội tổng hợp</div>
        <div style="font-size: 16px; font-weight: 700;">KIỂM TRA TOÀN THÂN</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS015</div>
      </div>
      <div class="mb-2"><strong>Tình trạng:</strong> Ổn định, chưa phát hiện bất thường mới.</div>
      <div class="mb-2"><strong>Kế hoạch:</strong> Hẹn tái khám sau 6 tháng.</div>
    `,
  },
  {
    id: "ba-16",
    maHoSo: "HS016",
    tieuDe: "02/11/2025 Tư vấn tiêm chủng",
    ngay: "2025-11-02",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Nội tổng hợp</div>
        <div style="font-size: 16px; font-weight: 700;">TƯ VẤN TIÊM CHỦNG</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS016</div>
      </div>
      <div class="mb-2"><strong>Nội dung:</strong> Lên lịch tiêm nhắc viêm gan.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Kiểm tra tiền sử dị ứng trước tiêm.</div>
    `,
  },
  {
    id: "ba-17",
    maHoSo: "HS017",
    tieuDe: "05/11/2025 Khám sức khỏe",
    ngay: "2025-11-05",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Nội tổng hợp</div>
        <div style="font-size: 16px; font-weight: 700;">KHÁM SỨC KHỎE</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS017</div>
      </div>
      <div class="mb-2"><strong>Chẩn đoán:</strong> Tổng quát, theo dõi chỉ số.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Uống đủ nước trước khi xét nghiệm.</div>
    `,
  },
  {
    id: "ba-18",
    maHoSo: "HS018",
    tieuDe: "10/11/2025 Theo dõi xơ gan",
    ngay: "2025-11-10",
    phong: "Phòng khám Gan ABC",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Bệnh viện Đại học Y Dược TP.HCM</div>
        <div style="font-size: 16px; font-weight: 700;">BỆNH ÁN NGOẠI TRÚ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS018</div>
      </div>
      <div class="mb-2"><strong>Chẩn đoán:</strong> Theo dõi xơ gan F1.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Tăng cường vận động nhẹ.</div>
    `,
  },
  {
    id: "ba-19",
    maHoSo: "HS019",
    tieuDe: "15/11/2025 Tư vấn lối sống",
    ngay: "2025-11-15",
    phong: "Phòng khám Nội tổng hợp",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Nội tổng hợp</div>
        <div style="font-size: 16px; font-weight: 700;">TƯ VẤN LỐI SỐNG</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS019</div>
      </div>
      <div class="mb-2"><strong>Nội dung:</strong> Điều chỉnh chế độ ăn và nghỉ ngơi.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Giảm dần uống cà phê.</div>
    `,
  },
  {
    id: "ba-20",
    maHoSo: "HS020",
    tieuDe: "20/11/2025 Đánh giá CLS",
    ngay: "2025-11-20",
    phong: "Phòng xét nghiệm",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng xét nghiệm</div>
        <div style="font-size: 16px; font-weight: 700;">ĐÁNH GIÁ CẬN LÂM SÀNG</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS020</div>
      </div>
      <div class="mb-2"><strong>Chẩn đoán:</strong> Đánh giá kết quả xét nghiệm định kỳ.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> So sánh với lần khám trước.</div>
    `,
  },
];
