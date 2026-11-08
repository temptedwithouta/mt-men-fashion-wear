# Desain Restrukturisasi Proyek Statis M&T

## Tujuan

Merapikan proyek situs M&T agar struktur HTML, CSS, JavaScript, gambar, dan data mudah dipahami serta dikembangkan sebagai situs statis multi-halaman. Beranda tetap di root sebagai entry point umum untuk hosting statis.

## Kondisi Saat Ini

- `index.html` dan CSS/JS beranda berada di root, tetapi gambar beranda disimpan di `Home/img/`.
- Halaman About, Clothes, Locations, dan Subscribe menyimpan HTML, CSS/JS, dan gambar di folder halaman masing-masing.
- Ada ratusan path relatif di HTML dan CSS. Kapitalisasi folder pada beberapa path juga tidak konsisten.
- File `Subscribe/xml` berisi SVG; `Subscribe/xml.xsd` adalah skemanya.
- Tidak ada proses build atau dependency manager yang dibutuhkan.

## Sasaran Struktur

```text
index.html
pages/
  about.html
  clothes.html
  locations.html
  subscribe.html
assets/
  css/
    home.css
    about.css
    clothes.css
    singleproduct.css
    locations.css
    subscribe.css
  js/
    home.js
    about.js
    clothes.js
    locations.js
    subscribe.js
  images/
    home/
    about/
    clothes/
    locations/
    subscribe/
    preview/
data/
  subscribe/
    subscribe.svg
    subscribe.xsd
```

Nama direktori gambar yang sudah dipakai di tiap halaman dipertahankan di bawah folder halaman terkait agar perubahan markup tetap mekanis dan aset mudah dicari. Semua path di dalam HTML, CSS, SVG, dan tautan antarhalaman diperbarui agar sesuai lokasi baru. Path ditulis dengan kapitalisasi yang konsisten.

## Pendekatan yang Dipertimbangkan

1. **Perapian ringan:** pertahankan lokasi sekarang dan seragamkan penamaan/path. Ini paling rendah risiko, tetapi aset tetap tersebar.
2. **Pusatkan aset saja:** HTML tetap di lokasi sekarang, sementara CSS/JS/gambar dipindahkan ke `assets/`. Ini memperbaiki pengelompokan aset tanpa mengubah rute halaman.
3. **Susun ulang menyeluruh (dipilih):** pertahankan `index.html` di root, pindahkan halaman lain ke `pages/`, pusatkan CSS/JS/gambar di `assets/`, dan letakkan data pendukung di `data/`. Ini memberi batas yang jelas antara halaman, aset, dan data, dengan konsekuensi seluruh path lokal harus diperbarui.

## Cakupan

- Pindahkan empat dokumen halaman ke `pages/`.
- Pindahkan seluruh stylesheet dan script halaman ke `assets/css/` dan `assets/js/`.
- Kelompokkan gambar per halaman di `assets/images/`, serta pertahankan gambar preview.
- Pindahkan SVG dan skema Subscribe ke `data/subscribe/`; ubah nama file SVG menjadi `subscribe.svg` dan perbarui rujukan skema di dalamnya.
- Perbarui semua tautan navigasi, referensi stylesheet/script, gambar, dan `url(...)` CSS.
- Perbarui README dengan peta struktur dan cara membuka/menjalankan situs statis.

## Bukan Sasaran

- Mengubah tampilan, konten, atau perilaku halaman.
- Menyatukan CSS/JS halaman menjadi shared bundle atau memperkenalkan framework, bundler, server wajib, maupun dependency baru.
- Memperbaiki bug interaksi yang tidak terkait dengan perpindahan file.

## Batasan dan Verifikasi

Situs harus tetap berjalan sebagai berkas statis tanpa proses build. Tautan halaman dan seluruh referensi lokal pada HTML/CSS/SVG harus menunjuk ke file yang ada setelah pemindahan. Verifikasi mencakup pemeriksaan path lokal, pemeriksaan perubahan whitespace, dan smoke test navigasi utama jika browser lokal tersedia. Perubahan tidak akan mencakup commit Git.

## Keputusan Implementasi yang Belum Ditentukan

Pertahankan struktur subfolder gambar yang ada di dalam setiap kelompok `assets/images/<halaman>/`, kecuali penyesuaian minimum diperlukan untuk menghilangkan ketidakcocokan kapitalisasi. Jangan mengubah isi halaman selain memperbarui referensi file.