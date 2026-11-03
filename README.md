# Feasibility Study Project — FARIZON P6M MEA

เว็บไซต์นำเสนอผู้บริหาร (Executive Interactive Presentation) 15 สไลด์
สำหรับ Feasibility Study โครงการจัดหารถตู้ไฟฟ้า FARIZON P6M 38 คัน ให้เช่าแก่การไฟฟ้านครหลวง

**สถานะ: Draft V1.0 — Pending Financial Verification**
NPV, Equity IRR และส่วนต่างโครงการเป็นค่า Preliminary ยังไม่รับรอง

---

## โครงสร้างไฟล์

```
feasibility-study-project/
├── index.html          ← Source code (อ้างอิงภาพใน assets/)
├── assets/             ← โลโก้และภาพต้นฉบับ
│   ├── logo-smart-terminal-s.png
│   ├── logo-smart-terminal.png
│   ├── logo-primemobility.png
│   ├── logo-farizon-maporn-navy.png
│   ├── logo-farizon-maporn-white.png
│   ├── hero-delivery-36.jpg
│   └── vehicle-p6m-mea-livery.jpg
├── dist/
│   └── index.html      ← ไฟล์เดียวพร้อมใช้ (ฝังภาพแล้ว) สำหรับ Deploy / ส่งต่อ
├── package.json
└── README.md
```

ไม่ต้องติดตั้ง library ใด ๆ — HTML/CSS/JavaScript ล้วน ใช้ฟอนต์ Prompt และ Inter จาก Google Fonts (ถ้าไม่มีอินเทอร์เน็ตจะใช้ฟอนต์สำรองของเครื่อง)

## วิธีเปิดใช้งาน

**แบบที่ 1 — เปิดไฟล์ตรง (ง่ายที่สุด)**
ดับเบิลคลิก `dist/index.html` เปิดด้วย Chrome หรือ Edge

**แบบที่ 2 — รันเซิร์ฟเวอร์ในเครื่อง** (ต้องมี Node.js 18 ขึ้นไป)
```bash
cd feasibility-study-project
npm start            # เปิด http://localhost:3000
```
หรือใช้ Python:
```bash
python3 -m http.server 3000
```

**แบบที่ 3 — Deploy ขึ้น Vercel**
```bash
npm i -g vercel
cd feasibility-study-project/dist
vercel --prod
```
หรือลากโฟลเดอร์ `dist` ไปวางที่ https://vercel.com/new

## การใช้งานระหว่างนำเสนอ

| ปุ่ม / คีย์ | การทำงาน |
|---|---|
| → / Space / Page Down / Enter | สไลด์ถัดไป |
| ← / Page Up / Backspace | สไลด์ก่อนหน้า |
| Home / End | สไลด์แรก / สุดท้าย |
| O หรือ G | ภาพรวมสไลด์ (Slide Overview) |
| F | โหมดนำเสนอเต็มจอ (Presentation Mode) · Esc เพื่อออก |
| ปัดซ้าย/ขวา | เปลี่ยนสไลด์บนแท็บเล็ต |
| ปุ่ม PDF | Export PDF — เลือก "Save as PDF" (1 สไลด์ต่อ 1 หน้า) |

- ลิงก์ตรงไปสไลด์ได้ด้วย `#s5` เช่น `index.html#s13`
- บนมือถือ สไลด์เรียงต่อกันเป็นหน้าเลื่อนอ่าน
- สไลด์ 13 Sensitivity Analysis เลื่อนปรับค่าเช่า ดอกเบี้ย ค่าบำรุงรักษา และจำนวนรถ ผลคำนวณเปลี่ยนทันที (คำนวณกลไกเงินสดรายเดือน ไม่ได้คำนวณ NPV/IRR)

**Export PDF:** ใน Print dialog ตั้ง Destination = Save as PDF, ปิด Headers and footers, เปิด Background graphics

## แก้ไขข้อมูล

ตัวเลขหลักอยู่ในบล็อก `DATA` ต้นแท็ก `<script>` ของ `index.html`:

- `D` — สมมติฐานโครงการ (จำนวนรถ ราคา ค่าเช่า ดอกเบี้ย รอบผ่อน บำรุงรักษา เงินสำรอง ขายซาก)
- `RISKS` — การ์ดความเสี่ยง (สไลด์ 14)
- สไลด์ 15 บทสรุปผู้บริหาร — เขียนไว้ใน HTML ของสไลด์โดยตรง

ตัวเลขในตารางและการ์ดบางส่วนเขียนไว้ใน HTML ของแต่ละสไลด์ เมื่อแก้ตัวเลขใดให้ค้นหา (Ctrl+F) ตัวเลขเดิมแล้วแก้ทุกจุด
หลังแก้ `index.html` ให้สร้าง `dist/index.html` ใหม่ด้วย:
```bash
npm run build
```

## แหล่งข้อมูล

1. FARIZON P6M MEA — Draft V1.0 (4 พ.ย. 2569)
2. Document Verification Checklist (4 พ.ย. 2569)
3. หนังสือ SMART TERMINAL เลขที่ ST 69/1021/003 (21 ต.ค. 2569)
4. Project Budget Master (Dealer 2,200,000 บาท/คัน, O&M Master v2.0)

ตัวเลขที่ระบุว่า "คำนวณ" ได้จากสูตรของตัวเลขข้างต้นเท่านั้น ข้อมูลที่ยังไม่มีแสดงเป็น "รอยืนยัน / รอคำนวณ"

© SMART TERMINAL CORPORATION · www.smartterminal.co.th
