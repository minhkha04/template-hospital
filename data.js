const danhSachBenhNhan = [
  {
    id: 1,
    hoTen: "Nguyễn Văn Minh Kha",
    tuoi: 45,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS001",
    diaChi: "123 Đường Lê Lợi, Quận 1, TP.HCM",
    ngaySinh: "1979-05-15",
    quocTich: "Việt Nam",
    diDong: "0909123456",
    cccd: "123456789",
    soTheBHYT: "987654321",
    email: "jons@example.com",
    ngheNhiep: "Kỹ sư",
    doiTuong: "Bệnh Nhân",
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
    cccd: "234567890",
    soTheBHYT: "876543210",
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
    cccd: "345678901",
    soTheBHYT: "765432109",
    email: "cuong.le@example.com",
    ngheNhiep: "Bác sĩ",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 4,
    hoTen: "Phạm Thị Dung",
    tuoi: 28,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS004",
    diaChi: "321 Lý Thường Kiệt, Quận 10, TP.HCM",
    ngaySinh: "1996-12-05",
    quocTich: "Việt Nam",
    diDong: "0934567890",
    cccd: "456789012",
    soTheBHYT: "654321098",
    email: "dung.pham@example.com",
    ngheNhiep: "Y tá",
    doiTuong: "Bệnh Nhân",
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
    cccd: "567890123",
    soTheBHYT: "543210987",
    email: "em.hoang@example.com",
    ngheNhiep: "Kế toán",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 6,
    hoTen: "Vũ Thị Phượng",
    tuoi: 38,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS006",
    diaChi: "987 Võ Văn Tần, Quận 3, TP.HCM",
    ngaySinh: "1986-11-25",
    quocTich: "Việt Nam",
    diDong: "0956789012",
    cccd: "678901234",
    soTheBHYT: "432109876",
    email: "phuong.vu@example.com",
    ngheNhiep: "Luật sư",
    doiTuong: "Bệnh Nhân",
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
    cccd: "789012345",
    soTheBHYT: "321098765",
    email: "giang.dang@example.com",
    ngheNhiep: "Kiến trúc sư",
    doiTuong: "Bệnh Nhân",
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
    cccd: "890123456",
    soTheBHYT: "210987654",
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
    diaChi: "369 Điện Biên Phủ, Quận Bình Thạnh, TP.HCM",
    ngaySinh: "1977-06-20",
    quocTich: "Việt Nam",
    diDong: "0989012345",
    cccd: "901234567",
    soTheBHYT: "109876543",
    email: "ich.mai@example.com",
    ngheNhiep: "Doanh nhân",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 10,
    hoTen: "Ngô Thị Kim",
    tuoi: 35,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS010",
    diaChi: "741 Xô Viết Nghệ Tĩnh, Quận Bình Thạnh, TP.HCM",
    ngaySinh: "1989-02-28",
    quocTich: "Việt Nam",
    diDong: "0990123456",
    cccd: "012345678",
    soTheBHYT: "098765432",
    email: "kim.ngo@example.com",
    ngheNhiep: "Dược sĩ",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 11,
    hoTen: "Đỗ Văn Long",
    tuoi: 61,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS011",
    diaChi: "852 Lê Văn Sỹ, Quận Phú Nhuận, TP.HCM",
    ngaySinh: "1963-01-12",
    quocTich: "Việt Nam",
    diDong: "0901234567",
    cccd: "123450987",
    soTheBHYT: "987650321",
    email: "long.do@example.com",
    ngheNhiep: "Giảng viên",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 12,
    hoTen: "Trịnh Thị Mai",
    tuoi: 43,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS012",
    diaChi: "963 Hoàng Văn Thụ, Quận Phú Nhuận, TP.HCM",
    ngaySinh: "1981-10-08",
    quocTich: "Việt Nam",
    diDong: "0911234567",
    cccd: "234561098",
    soTheBHYT: "876541210",
    email: "mai.trinh@example.com",
    ngheNhiep: "Nhà báo",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 13,
    hoTen: "Phan Văn Nam",
    tuoi: 39,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS013",
    diaChi: "159 Cộng Hòa, Quận Tân Bình, TP.HCM",
    ngaySinh: "1985-05-16",
    quocTich: "Việt Nam",
    diDong: "0921234567",
    cccd: "345672109",
    soTheBHYT: "765432109",
    email: "nam.phan@example.com",
    ngheNhiep: "Lập trình viên",
    doiTuong: "Bệnh Nhân",
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
    cccd: "456783210",
    soTheBHYT: "654323098",
    email: "ngoc.ly@example.com",
    ngheNhiep: "Thiết kế đồ họa",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 15,
    hoTen: "Võ Văn Oanh",
    tuoi: 54,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS015",
    diaChi: "753 Tân Sơn Nhì, Quận Tân Phú, TP.HCM",
    ngaySinh: "1970-08-07",
    quocTich: "Việt Nam",
    diDong: "0941234567",
    cccd: "567894321",
    soTheBHYT: "543214987",
    email: "oanh.vo@example.com",
    ngheNhiep: "Thợ điện",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 16,
    hoTen: "Dương Thị Phúc",
    tuoi: 26,
    gioiTinh: "Nữ",
    trangThai: "CK",
    soHoSo: "HS016",
    diaChi: "951 Âu Cơ, Quận Tân Phú, TP.HCM",
    ngaySinh: "1998-11-19",
    quocTich: "Việt Nam",
    diDong: "0951234567",
    cccd: "678905432",
    soTheBHYT: "432105876",
    email: "phuc.duong@example.com",
    ngheNhiep: "Sinh viên",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 17,
    hoTen: "Chu Văn Quân",
    tuoi: 49,
    gioiTinh: "Nam",
    trangThai: "ĐK",
    soHoSo: "HS017",
    diaChi: "246 Quang Trung, Quận Gò Vấp, TP.HCM",
    ngaySinh: "1975-04-13",
    quocTich: "Việt Nam",
    diDong: "0961234567",
    cccd: "789016543",
    soTheBHYT: "321096765",
    email: "quan.chu@example.com",
    ngheNhiep: "Tài xế",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 18,
    hoTen: "Tô Thị Rạng",
    tuoi: 37,
    gioiTinh: "Nữ",
    trangThai: "ĐK",
    soHoSo: "HS018",
    diaChi: "468 Phan Văn Trị, Quận Gò Vấp, TP.HCM",
    ngaySinh: "1987-12-21",
    quocTich: "Việt Nam",
    diDong: "0971234567",
    cccd: "890127654",
    soTheBHYT: "210987654",
    email: "rang.to@example.com",
    ngheNhiep: "Chủ cửa hàng",
    doiTuong: "Bệnh Nhân",
  },
  {
    id: 19,
    hoTen: "Hồ Văn Sơn",
    tuoi: 58,
    gioiTinh: "Nam",
    trangThai: "CK",
    soHoSo: "HS019",
    diaChi: "579 Nguyễn Oanh, Quận Gò Vấp, TP.HCM",
    ngaySinh: "1966-07-03",
    quocTich: "Việt Nam",
    diDong: "0981234567",
    cccd: "901238765",
    soTheBHYT: "109876543",
    email: "son.ho@example.com",
    ngheNhiep: "Nông dân",
    doiTuong: "Bệnh Nhân",
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
    cccd: "012349876",
    soTheBHYT: "098765432",
    email: "tam.dinh@example.com",
    ngheNhiep: "Điều dưỡng",
    doiTuong: "Bệnh Nhân",
  },
];
// Danh sách bệnh án chi tiết (demo cho trang Xem bệnh án)
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
      <div class="mb-2"><strong>I. Lý do khám bệnh:</strong> Đau bụng, mệt mỏi kéo dài.</div>
      <div class="mb-2"><strong>II. Tổng trạng:</strong> Mạch 72l/p, huyết áp 110/70 mmHg, cân nặng 51kg, chiều cao 157cm, BMI 20.7.</div>
      <div class="mb-2"><strong>III. Bệnh sử:</strong> Vàng da 2 tuần, ăn kém, không sốt.</div>
      <div class="mb-2"><strong>IV. Khám lâm sàng:</strong> Bụng mềm, không phù, gan không to, lưỡi sạch.</div>
      <div class="mb-2"><strong>V. Chẩn đoán:</strong> Theo dõi viêm gan virus B mạn tính.</div>
      <div class="mb-2"><strong>VI. Cận lâm sàng:</strong> AST/ALT tăng, HBV-DNA 3.2E7 copies/ml.</div>
      <div class="mb-2"><strong>VII. Điều trị:</strong> Uống tenofovir 300mg ngày 1 viên, hẹn tái khám sau 4 tuần.</div>
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
        <div style="font-size: 16px; font-weight: 700;">BÁO CÁO KẾT QUẢ TÁI KHÁM</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS002</div>
      </div>
      <div class="mb-2"><strong>Họ tên:</strong> Trần Thị B</div>
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
      <div class="mb-2"><strong>Tóm tắt:</strong> Bệnh nhân được tư vấn chiến lược điều trị duy trì.</div>
      <div class="mb-2"><strong>Hướng dẫn:</strong> Chế độ ăn nhạt muối, hạn chế rượu bia.</div>
      <div class="mb-2"><strong>Ghi chú:</strong> Cần làm xét nghiệm HBV DNA sau 2 tháng.</div>
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
      <div class="mb-2"><strong>Kế hoạch:</strong> Tái khám sau 2 tuần, làm lại xét nghiệm men gan.</div>
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
      <div class="mb-2"><strong>Gợi ý:</strong> Vận động nhẹ 30 phút/ngày, chế độ ăn ít muối.</div>
    `,
  },
  {
    id: "ba-06",
    maHoSo: "HS006",
    tieuDe: "05/07/2025 Tư vấn dinh dưỡng",
    ngay: "2025-07-05",
    phong: "Phòng khám Dinh dưỡng",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Dinh dưỡng</div>
        <div style="font-size: 16px; font-weight: 700;">TƯ VẤN DINH DƯỠNG</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS006</div>
      </div>
      <div class="mb-2"><strong>Nội dung:</strong> Hướng dẫn chế độ ăn giàu protein, giảm dầu mỡ.</div>
      <div class="mb-2"><strong>Lịch hẹn:</strong> Tái khám dinh dưỡng sau 1 tháng.</div>
    `,
  },
  {
    id: "ba-07",
    maHoSo: "HS007",
    tieuDe: "12/07/2025 Báo cáo xét nghiệm",
    ngay: "2025-07-12",
    phong: "Phòng khám Xét nghiệm",
    noiDung: `
      <div class="text-center mb-3">
        <div style="font-size: 12px; text-transform: uppercase;">Phòng khám Xét nghiệm</div>
        <div style="font-size: 16px; font-weight: 700;">BÁO CÁO KẾT QUẢ</div>
        <div class="text-muted" style="font-size: 12px;">Mã hồ sơ: HS007</div>
      </div>
      <div class="mb-2"><strong>KQ:</strong> HbA1c 5.6%, Cholesterol 4.5 mmol/L.</div>
    `,
  },
];