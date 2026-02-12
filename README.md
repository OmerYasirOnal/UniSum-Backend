```markdown
# UniSum Backend

Üniversite not takibi için geliştirilen bir API.

## Özellikler

- Kullanıcı kaydı ve kimlik doğrulama
- Dönem yönetimi
- Ders yönetimi
- Not ve ağırlıklı not ortalaması (GPA) hesaplama
- Not ölçeklendirme sistemi desteği

## Kurulum

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/UniSum-Backend.git
   cd UniSum-Backend
   ```
   
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. `.env.example` dosyasını kopyalayıp `.env` olarak kaydedin ve gerekli ayarları yapın:
   ```bash
   cp .env.example .env
   # .env dosyasını düzenleyin
   ```

4. Veritabanını kurun:
   ```bash
   # Veritabanını oluşturun (MySQL)
   # Veritabanı şemalarını oluşturmak için Sequelize kullanabilirsiniz
   ```

5. Uygulamayı başlatın:
   ```bash
   npm start
   ```

## Kullanım

API aşağıdaki endpoint'leri sağlar:

### Kimlik Doğrulama
- **POST** `/auth/signup` - Yeni kullanıcı kaydı
- **POST** `/auth/login` - Kullanıcı girişi
- **GET** `/auth/verify-email` - E-posta doğrulama
- **POST** `/auth/password-reset` - Şifre sıfırlama talebi
- **POST** `/auth/reset-password` - Yeni şifre belirleme
- **DELETE** `/auth/delete-account` - Kullanıcı hesabını silme

### Dönem Yönetimi
- **POST** `/terms` - Dönem oluşturma
- **GET** `/terms/my-terms` - Kullanıcıya ait dönemleri listeleme
- **DELETE** `/terms/:id` - Dönem silme
- **PUT** `/terms/:termId/updateGPA` - Dönem GPA'sını güncelleme

### Ders Yönetimi
- **POST** `/terms/:termId/courses` - Yeni ders oluşturma
- **GET** `/terms/:termId/courses` - Döneme ait dersleri listeleme
- **DELETE** `/courses/:courseId` - Ders silme
- **PUT** `/courses/:courseId/average` - Ders ortalamasını güncelleme
- **PUT** `/courses/:courseId/updateGPA` - Ders GPA'sını güncelleme
- **PUT** `/updateAllCoursesGPA/:termId` - Döneme ait tüm derslerin GPA'sını güncelleme

### Not Yönetimi
- **POST** `/grades` - Not ekleme
- **GET** `/grades/courses/:courseId` - Dersin notlarını listeleme
- **DELETE** `/grades/:gradeId` - Not silme
- **PUT** `/grades/:gradeId` - Not güncelleme

### GPA Hesaplama
- **GET** `/gpa` - Genel GPA hesaplama
- **GET** `/gpa/terms/:termId` - Dönem GPA'sını hesaplama

### Not Ölçeği Yönetimi
- **GET** `/grade-scales/courses/:courseId` - Dersin not ölçeklerini listeleme
- **POST** `/grade-scales/courses/:courseId` - Özel not ölçeği oluşturma
- **DELETE** `/grade-scales/courses/:courseId` - Özel not ölçeğini silme

## Katkı

Katkıda bulunmak için lütfen bir pull request açın.

## Lisans

[MIT](LICENSE)
```