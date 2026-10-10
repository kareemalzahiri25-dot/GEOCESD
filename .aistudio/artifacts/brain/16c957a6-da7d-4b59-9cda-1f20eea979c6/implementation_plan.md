# Diagnosis & Solusi Layar Putih pada GitHub Pages (`kareemalzahiri25-dot.github.io/GEOCESD/`)

Penjelasan akar masalah mengapa halaman `https://kareemalzahiri25-dot.github.io/GEOCESD/` menampilkan layar putih dan rencana teknis agar aplikasi langsung tampil tanpa error.

### User Review & Critical Decisions

> [!IMPORTANT]
> **Akar Penyebab Layar Putih Teridentifikasi 100%:**
> Saat ini pengaturan **Settings → Pages → Build and deployment → Source** di GitHub Anda masih diatur ke **"Deploy from a branch" (`main` / folder `/ (root)`)**.
>
> Akibatnya, GitHub Pages menyajikan file `index.html` **mentah (belum di-build)** dari root repository yang berisi `<script type="module" src="/src/main.tsx"></script>`. Browser **tidak bisa** mengeksekusi file TypeScript/JSX (`.tsx`) secara langsung dan path `/src/main.tsx` mengarah ke `https://kareemalzahiri25-dot.github.io/src/main.tsx` (404 Not Found), sehingga hanya menampilkan `<div id="root"></div>` kosong (layar putih).

- **Keputusan Terkonfirmasi 1**: Target URL adalah `https://kareemalzahiri25-dot.github.io/GEOCESD/`.
- **Keputusan Terkonfirmasi 2**: Agar GitHub Pages menampilkan hasil kompilasi Vite (`dist/`), workflow perlu mendukung baik mode **GitHub Actions** maupun **Branch `gh-pages`** secara otomatis, serta path entry script di `index.html` diubah menjadi relatif (`./src/main.tsx`).

---

### 1. Mengapa Layar Putih Terjadi? (Alur Masalah Saat Ini)

```
┌───────────────────────────────────────────────────────────────────────────┐
│  KONDISI SAAT INI (Settings > Pages > Source: Deploy from branch `main`)  │
├───────────────────────────────────────────────────────────────────────────┤
│  1. Pengunjung membuka https://kareemalzahiri25-dot.github.io/GEOCESD/    │
│  2. GitHub Pages mengirim file mentah `/index.html` (bukan `/dist`)       │
│  3. `/index.html` meminta `<script src="/src/main.tsx">`                  │
│  4. Browser gagal memuat `/src/main.tsx` (404 & MIME type bukan JS)       │
│  5. `<div id="root"></div>` tetap kosong → LAYAR PUTIH                    │
└───────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Solusi Lengkap & Langkah Perbaikan

Agar link `https://kareemalzahiri25-dot.github.io/GEOCESD/` langsung berjalan baik menggunakan pengaturan **GitHub Actions** maupun **Deploy from a branch**:

1. **Perbaikan Konfigurasi Proyek (Otomatis oleh Kami)**:
   - **Normalisasi Entry Script di `index.html`**: Mengubah `<script type="module" src="/src/main.tsx"></script>` menjadi `<script type="module" src="./src/main.tsx"></script>` agar Vite selalu me-resolve entry point secara relatif terhadap lokasi `index.html`.
   - **Menambahkan File `.nojekyll` di `public/`**: Memastikan GitHub Pages tidak memblokir atau memproses ulang file statis hasil build Vite.
   - **Menambahkan Dukungan Dual-Deploy di Workflow GitHub Actions (`.github/workflows/deploy.yml`)**:
     - Mem-publish hasil build `./dist` ke branch **`gh-pages`** secara otomatis (menggunakan `peaceiris/actions-gh-pages@v4`) sekaligus mendukung **GitHub Actions Pages** resmi.
     - Menambahkan script `"deploy"` di `package.json` jika Anda ingin menjalankan deploy langsung dari terminal lokal.

2. **Langkah 1-Klik di Pengaturan GitHub Anda (Setelah Kode Di-push ke GitHub)**:
   - Pastikan perubahan dari AI Studio sudah di-**push / sync** ke repository GitHub `kareemalzahiri25-dot/GEOCESD`.
   - Buka repository GitHub Anda → klik tab **Settings** → menu **Pages** (di sidebar kiri).
   - Pada bagian **Build and deployment → Source**:
     - **Cara Paling Mudah (Direkomendasikan)**: Ubah dropdown **Source** dari *Deploy from a branch* menjadi **GitHub Actions**, **ATAU**
     - Jika tetap memilih *Deploy from a branch*, ubah branch dari `main` menjadi **`gh-pages` / `/ (root)`** lalu klik **Save**.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Dual Support (`GitHub Actions` + Branch `gh-pages`)**
  - *Chosen Approach*: Mengonfigurasi workflow agar mem-build `dist/` dan mendorong hasilnya ke branch `gh-pages` sekaligus menyediakan job deploy GitHub Pages.
  - *Why*: Banyak pengguna GitHub tetap menggunakan mode *Deploy from a branch*. Dengan tersedianya branch `gh-pages` yang berisi file `index.html` + `assets/*.js` yang sudah terkompilasi, Anda tidak akan pernah mengalami layar putih akibat ter-deploy-nya kode mentah `.tsx` dari branch `main`.
- **Decision 2: Penambahan `public/.nojekyll` & `404.html` Fallback**
  - *Chosen Approach*: Menyertakan file `.nojekyll` kosong di `public/` agar ikut tersalin ke `dist/.nojekyll` setiap kali `npm run build` dijalankan.
  - *Why*: Mencegah pemrosesan Jekyll di GitHub Pages yang sering menyebabkan keterlambatan atau kegagalan pemuatan asset.

---

### 4. Technical Architecture & Deployment Flow

```
┌───────────────────────────────────────────────────────────────────────────┐
│                    ALUR DEPLOYMENT SETELAH PERBAIKAN                      │
├───────────────────────────────────────────────────────────────────────────┤
│  Push ke `main`                                                           │
│       │                                                                   │
│       ▼                                                                   │
│  GitHub Actions menjalankan `npm ci && GITHUB_PAGES=true npm run build`   │
│       │                                                                   │
│       ├──► Menghasilkan folder `dist/` berisi:                            │
│       │      • dist/index.html (script menunjuk ke ./assets/index-*.js)   │
│       │      • dist/.nojekyll                                             │
│       │      • dist/images/*                                              │
│       │                                                                   │
│       ▼                                                                   │
│  Dipublikasikan ke `https://kareemalzahiri25-dot.github.io/GEOCESD/`      │
│  (Melalui Source: GitHub Actions ATAU Branch: `gh-pages`)                 │
└───────────────────────────────────────────────────────────────────────────┘
```
