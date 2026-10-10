# Audit GitHub Pages & Routing — SILICA2CON

Laporan audit teknis kesiapan hosting proyek React + TypeScript + Vite **SILICA2CON** pada **GitHub Pages** beserta rencana implementasi bertahap berdasarkan preferensi yang telah dikonfirmasi.

### User Review & Critical Decisions

> [!IMPORTANT]
> **Status Kesiapan GitHub Pages Saat Ini: `PERLU KONFIGURASI`**
> Berdasarkan audit kode aktual, aplikasi saat ini belum mengatur `base` path untuk subpath repository (`/GEOCESD/`), masih menggunakan path absolut `/images/...` untuk gambar di `public/images/`, menggunakan state memori murni tanpa sinkronisasi URL, dan belum memiliki workflow `.github/workflows/` untuk deployment otomatis ke GitHub Pages.

- **Keputusan Terkonfirmasi 1 (Target URL Hosting)**: **Subpath Repository (`username.github.io/GEOCESD/`)** — Konfigurasi `base` Vite dan seluruh referensi asset publik (`public/images/*`) akan dibuat kompatibel dengan subpath maupun root preview.
- **Keputusan Terkonfirmasi 2 (Strategi Routing & Refresh)**: **Hash Routing Ringan (`#/simulasi`, `#/metopen`, `#/tim-kami`)** — Menggunakan sinkronisasi `window.location.hash` dan event `hashchange` di dalam controller navigasi yang sudah ada tanpa menambah library eksternal dan tanpa risiko error 404 pada GitHub Pages saat akses URL langsung atau refresh halaman.

---

### 1. Laporan Hasil Audit (6 Poin Wajib)

#### 1. Routing Saat Ini: Mekanisme dan File yang Terlibat
- **Mekanisme**: Navigasi berbasis **state React di memori (`useState<PageId>('beranda')`)**, **bukan** menggunakan `react-router-dom`.
- **File yang Terlibat**:
  - Entry point React (`index.html` baris 59 → `src/main.tsx` baris 5) me-render `<App />` secara langsung tanpa provider router.
  - `package.json` (baris 12–21) tidak memuat `react-router` atau `react-router-dom`.
  - `src/App.tsx` (baris 17–24 & 39–54) memanggil `useNavigationController('beranda')` dan melakukan conditional rendering untuk 4 halaman (`beranda`, `simulasi`, `metopen`, `tim-kami`).
  - `src/controllers/useNavigationController.ts` (baris 13–52) menyimpan `currentPage` di `useState`, dan fungsi `navigateTo(page, sectionId)` hanya mengubah state React serta memanggil `window.scrollTo` atau `scrollIntoView` tanpa mengubah URL browser (`window.location`).
- **Dampak pada URL & Refresh**:
  - URL browser tidak berubah saat pengguna berpindah ke halaman **Simulasi**, **Metopen**, atau **Tim Kami**.
  - Halaman selain Beranda tidak memiliki URL langsung yang dapat dibagikan atau di-bookmark, dan setiap kali pengguna menekan **Refresh (F5)** pada halaman Simulasi atau Metopen, aplikasi selalu kembali ke halaman **Beranda**.

#### 2. Kesiapan GitHub Pages
- **Status**: **`PERLU KONFIGURASI`**

#### 3. Temuan Masalah Nyata Beserta Bukti Kode
1. **Tidak Ada Konfigurasi `base` pada Vite (`vite.config.ts` baris 6–25)**:
   - `defineConfig` tidak mendefinisikan properti `base`. Secara default Vite menggunakan `base: '/'`. Jika di-deploy ke subpath GitHub Pages (`https://<username>.github.io/GEOCESD/`), browser akan meminta `/assets/index-*.js` dan `/assets/index-*.css` dari root domain `https://<username>.github.io/assets/...` yang menghasilkan **404 Not Found dan halaman putih (blank page)**.
2. **Hardcoded Root Path `/images/...` pada Asset Gambar Statis**:
   - `src/views/sections/HeroSectionView.tsx` (baris 15): `src="/images/dieng.png"`
   - `src/models/team.model.ts` (baris 36, 52, 68, 82): `avatarUrl: '/images/a.jpg'`, `'/images/i.jpg'`, `'/images/iel.jpg'`, `'/images/dosen.jpg'`
   - `src/views/pages/HomeLandingPageView.tsx` (baris 259, 279, 299): `img: '/images/sdgs9.png'`, `'/images/sdgs11.png'`, `'/images/sdgs12.png'`
   - Pada Vite, string path di dalam JSX/TS yang diawali `/` tidak otomatis ditambahkan prefix `base` saat build. Di subpath GitHub Pages (`/GEOCESD/`), gambar-gambar tersebut akan mengarah ke `https://<username>.github.io/images/...` dan gagal dimuat (404). Menggunakan path relatif atau `import.meta.env.BASE_URL` akan memastikan gambar dimuat dengan benar baik di lokal/AI Studio maupun di GitHub Pages.
3. **Reset Halaman Saat Refresh & Ketiadaan Deep-Link Halaman (`src/controllers/useNavigationController.ts` baris 14 & 29–42)**:
   - Karena `currentPage` diinisialisasi statis ke `'beranda'` dan tidak membaca/menulis `window.location.hash`, pengguna tidak dapat membuka `#/simulasi` atau `#/metopen` secara langsung dan akan kehilangan halaman aktif saat melakukan refresh.
4. **Belum Ada Workflow GitHub Actions (`.github/workflows/`)**:
   - Hasil pemeriksaan direktori root menunjukkan belum ada folder `.github/workflows/` untuk menjalankan `npm ci && npm run build` dan mempublikasikan artefak `dist/` ke GitHub Pages secara otomatis.

#### 4. Perbaikan Minimum yang Disarankan (Urutan Prioritas)
1. **Prioritas 1 — Konfigurasi `base` Dinamis/Relatif di `vite.config.ts`**:
   - Gunakan `base: './'` (atau `process.env.GITHUB_PAGES === 'true' ? '/GEOCESD/' : '/'`) agar bundle JS/CSS di `dist/index.html` bekerja di subpath GitHub Pages `/GEOCESD/` sekaligus tetap berjalan normal di preview AI Studio (`/`).
2. **Prioritas 2 — Normalisasi Path Gambar `public/images/*` dengan `import.meta.env.BASE_URL` (atau Path Relatif)**:
   - Ganti `/images/...` menjadi `${import.meta.env.BASE_URL}images/...` (atau `images/...`) pada `HeroSectionView.tsx`, `HomeLandingPageView.tsx`, dan `team.model.ts` agar seluruh gambar tetap tampil di subpath GitHub Pages.
3. **Prioritas 3 — Sinkronisasi Hash Routing Ringan di `useNavigationController.ts`**:
   - Sinkronkan `currentPage` (`beranda`, `simulasi`, `metopen`, `tim-kami`) dengan `window.location.hash` (`#/beranda`, `#/simulasi`, `#/metopen`, `#/tim-kami`) serta dukung anchor bagian di Beranda (mis. `#ringkasan-essay`, `#alur-evaluasi`).
   - Karena berbasis hash (`#/...`), GitHub Pages selalu melayani `index.html` utama tanpa memerlukan hack redirect `404.html` dan tidak pernah menghasilkan HTTP 404 saat refresh atau bookmark.
4. **Prioritas 4 — Penambahan Workflow Deployment `.github/workflows/deploy.yml`**:
   - Tambahkan workflow standar GitHub Actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`) yang mem-build folder `dist` pada branch utama.

#### 5. Area yang Perlu Diubah (Jika Disetujui untuk Implementasi)
- Konfigurasi build Vite (pengaturan `base` URL).
- Controller navigasi aplikasi (sinkronisasi state `currentPage` dengan URL hash `#/simulasi`, `#/metopen`, `#/tim-kami`).
- Tiga lokasi referensi gambar statis (Hero, SDGs di Beranda, dan profil Tim).
- Workflow CI/CD GitHub Pages untuk otomasi build dan deploy ke `dist`.

#### 6. Informasi yang Masih Kurang / Perlu DikonfirmasiSaat Deploy di GitHub
- **Nama Branch Utama Repository**: Workflow akan dikonfigurasi mendukung `main` (dan `master`) secara otomatis, namun pada pengaturan GitHub Repository (**Settings → Pages → Build and deployment**), sumber (*Source*) perlu diatur ke **GitHub Actions**.

---

### 2. User Experience & Visual Design

- **Alur Navigasi & URL Langsung**:
  - Membuka `.../GEOCESD/` atau `.../GEOCESD/#/` menampilkan **Beranda**.
  - Klik menu **Simulasi** mengubah URL menjadi `.../GEOCESD/#/simulasi`; menekan tombol **Refresh** atau membuka bookmark URL tersebut langsung memuat halaman **Simulasi** tanpa error 404.
  - Klik menu **Metopen** mengubah URL menjadi `.../GEOCESD/#/metopen`; menekan **Refresh** tetap mempertahankan halaman **Metopen**.
  - Klik menu **Tim Kami** mengubah URL menjadi `.../GEOCESD/#/tim-kami`; menekan **Refresh** tetap mempertahankan halaman **Tim Kami**.
  - Tombol **Back / Forward** pada browser berfungsi secara alami mengikuti riwayat perpindahan halaman.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Hash Routing (`#/simulasi`, `#/metopen`) di Dalam `useNavigationController`**
  - *Chosen Approach*: Memperluas hook `useNavigationController` yang sudah ada dengan parser hash URL dan listener `hashchange` tanpa mengubah prop/kontrak komponen `App.tsx`, `NavbarView.tsx`, `SimulasiPageView.tsx`, maupun `MetopenPageView.tsx`.
  - *Why*: Nol dependensi tambahan, nol perubahan pada komponen UI/engine Simulasi dan Metopen, serta 100% bebas masalah 404 pada static host seperti GitHub Pages.
  - *Alternatives Considered*: History API (`/simulasi`) + duplikasi `404.html` (membutuhkan script redirect query string di `index.html` dan rentan masalah path asset relatif).
- **Decision 2: `base: './'` + Helper Asset `import.meta.env.BASE_URL`**
  - *Chosen Approach*: Mengatur `base: './'` di Vite (atau subpath dinamis) dan menggunakan prefix `import.meta.env.BASE_URL` untuk file di `public/images/`.
  - *Why*: Menjamin hasil build `dist/` bersifat *path-agnostic* sehingga berfungsi baik di `https://<username>.github.io/GEOCESD/`, di custom domain, maupun di preview server lokal port 3000.

---

### 4. Technical Architecture & Data Strategy *(Rencana Implementasi Bertahap)*

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Browser URL & GitHub Pages Host                      │
│        https://<username>.github.io/GEOCESD/#/metopen (or #/simulasi)   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                  useNavigationController (Hash Sync)                    │
│  • parseHashToPage(): '#/simulasi' → 'simulasi'                         │
│                       '#/metopen'  → 'metopen'                          │
│                       '#/tim-kami' → 'tim-kami'                         │
│  • window.addEventListener('hashchange') ↔ setCurrentPage(page)         │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          ▼                         ▼                         ▼
┌───────────────────┐     ┌───────────────────┐     ┌───────────────────┐
│HomeLandingPageView│     │ SimulasiPageView  │     │  MetopenPageView  │
│ (Asset BASE_URL)  │     │ (Isolated Engine) │     │ (Isolated Method) │
└───────────────────┘     └───────────────────┘     └───────────────────┘
```

#### Tahapan Implementasi (Menunggu Persetujuan Anda)
1. **Tahap 1 — Konfigurasi Vite & Path Asset Publik**:
   - Atur `base` pada konfigurasi Vite dan pastikan semua referensi gambar di `public/images/` menggunakan `import.meta.env.BASE_URL` agar bebas 404 di subpath `/GEOCESD/`.
2. **Tahap 2 — Sinkronisasi Hash Routing di Controller Navigasi**:
   - Tambahkan pembacaan hash awal (`#/simulasi`, `#/metopen`, `#/tim-kami`, serta anchor section Beranda) dan sinkronisasi `window.location.hash` + event `hashchange` di `useNavigationController`.
3. **Tahap 3 — Workflow GitHub Actions Deployment**:
   - Buat konfigurasi workflow GitHub Pages untuk build (`npm run build`) dan deploy folder `dist` secara otomatis.
4. **Tahap 4 — Verifikasi Build & Lint**:
   - Jalankan `npm run lint` dan `npm run build` untuk memastikan output `dist/` bersih dan siap dipublikasikan.
