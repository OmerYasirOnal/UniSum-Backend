# UniSum API Test Raporu

## Genel Bakış

Bu rapor, UniSum Backend API'lerinin testlerinin sonuçlarını ve tespit edilen sorunları içermektedir.

## Test Edilen API'ler

1. **Kimlik Doğrulama API (Auth)**
   - Kayıt (Signup)
   - Giriş (Login)
   - E-posta Doğrulama (Email Verification)
   - Şifre Sıfırlama (Password Reset)
   - Hesap Silme

2. **Dönem API (Term)**
   - Dönem Oluşturma
   - Dönemleri Listeleme
   - Dönem Silme

3. **Ders API (Course)**
   - Ders Oluşturma
   - Dersleri Listeleme
   - Ders Ortalaması Güncelleme
   - Ders GPA Hesaplama
   - Döneme Ait Tüm Derslerin GPA Hesaplaması

4. **Not API (Grade)**
   - Not Ekleme
   - Notları Listeleme
   - Not Güncelleme
   - Not Silme

5. **GPA API**
   - Genel GPA Hesaplama
   - Dönem GPA Hesaplama

6. **Not Ölçeği API (Grade Scale)**
   - Özel Not Ölçeği Oluşturma
   - Not Ölçeklerini Listeleme
   - Özel Not Ölçeği Silme

## Test Sonuçları

### Başarılı İşlemler

- Kullanıcı giriş işlemi başarılı
- Kullanıcı kayıt işlemi başarılı
- E-posta doğrulama işlemi başarılı
- Dönem oluşturma ve listeleme başarılı
- Ders oluşturma ve listeleme başarılı
- Not ekleme, güncelleme ve silme başarılı
- GPA hesaplamaları başarılı

### Tespit Edilen Hatalar

1. **express-rate-limit ve trust proxy Sorunu**

   ```
   ValidationError: The Express 'trust proxy' setting is true, which allows anyone to trivially bypass IP-based rate limiting. See https://express-rate-limit.github.io/ERR_ERL_PERMISSIVE_TRUST_PROXY/ for more information.
   ```

   Bu hata, Express'in 'trust proxy' ayarının rate limiter ile uyumsuz olduğunu göstermektedir. Bu durum, IP tabanlı hız sınırlamasını kolayca bypass etmeye olanak sağlayabilir.

2. **Course Controller Hatası**

   ```
   ERROR: Dönem eklenirken hata oluştu: Cannot read properties of undefined (reading 'toString')
   ```

   Bu hata, bir değişkene erişmeye çalışırken undefined bir değer alınmasından kaynaklanmaktadır.

3. **Null Violation Hatası (Course Oluşturma)**

   ```
   ERROR: Failed to create course: notNull Violation: Course.term_id cannot be null,
   notNull Violation: Course.user_id cannot be null
   ```

   Ders oluşturma işleminde zorunlu alanlar boş bırakılmış.

4. **Null Violation Hatası (Grade Oluşturma)**

   ```
   ERROR: Failed to add grade: notNull Violation: Grade.grade_type cannot be null
   ```

   Not ekleme işleminde zorunlu 'grade_type' alanı boş bırakılmış.

5. **Header Ayarlama Hatası**

   ```
   ERROR: Error updating all courses GPA: Cannot set headers after they are sent to the client
   ```

   updateAllCoursesGPAByTerm fonksiyonunda, yanıt zaten gönderildikten sonra tekrar header ayarlanmaya çalışılıyor.

## Geliştirilmesi Gereken Alanlar

1. **Hız Sınırlama Konfigürasyonu**
   - 'trust proxy' ayarı ve express-rate-limit'in uyumlu çalışması için konfigürasyon düzeltilmeli.
   - Önerilen çözüm: Rate limiter içinde `trustProxy: false` ayarı yapılabilir veya daha sınırlayıcı bir trust proxy ayarı kullanılabilir.

2. **Hata İşleme Geliştirmesi**
   - updateAllCoursesGPAByTerm fonksiyonunda, birden fazla yanıt gönderme sorunu çözülmeli.
   - Tüm controller'larda null değer kontrolü yapılmalı.

3. **Veri Doğrulama İyileştirmesi**
   - API isteklerinde gönderilen parametrelerin tam ve doğru olduğundan emin olmak için kapsamlı doğrulama mekanizmaları eklenmeli.

4. **API Yapısı Standardizasyonu**
   - Bazı endpoint'lerde URL parametreleri, bazılarında request body kullanılıyor. Bu durum standardize edilebilir.

## Log Özeti

```
[2025-04-01T09:03:20.526Z] INFO: Database connected successfully.
[2025-04-01T09:03:20.530Z] INFO: Server running on port 3000
[2025-04-01T09:03:25.246Z] INFO: Login: Kullanıcı giriş yaptı - ID: 55
[2025-04-01T09:03:37.435Z] WARN: 404 - Route bulunamadı: GET /terms - IP: ::1
[2025-04-01T09:03:47.281Z] INFO: Terms fetched for user ID: 55
[2025-04-01T09:03:52.923Z] ERROR: Dönem eklenirken hata oluştu: Cannot read properties of undefined (reading 'toString')
[2025-04-01T09:04:03.714Z] INFO: Term created. ID: 40 for user ID: 55
[2025-04-01T09:04:08.955Z] INFO: Terms fetched for user ID: 55
[2025-04-01T09:04:13.836Z] INFO: Term deleted. ID: 40
[2025-04-01T09:04:19.242Z] INFO: Term created. ID: 41 for user ID: 55
[2025-04-01T09:04:28.508Z] ERROR: Failed to create course: notNull Violation: Course.term_id cannot be null
[2025-04-01T09:04:39.704Z] INFO: Course created. ID: 52
[2025-04-01T09:04:45.370Z] INFO: Course created. ID: 53
[2025-04-01T09:04:50.179Z] INFO: Fetched courses for term ID: 41
[2025-04-01T09:04:55.606Z] INFO: Course average updated. ID: 52, New Average: 85.5
[2025-04-01T09:05:00.741Z] INFO: Course GPA updated. Course ID: 52, GPA: 3.5, Letter Grade: BA
[2025-04-01T09:05:06.338Z] ERROR: Error updating all courses GPA: Cannot set headers after they are sent to the client
[2025-04-01T09:07:30.872Z] ERROR: Failed to add grade: notNull Violation: Grade.grade_type cannot be null
[2025-04-01T09:07:41.960Z] INFO: Grade added. ID: 94 for course: 52
[2025-04-01T09:07:47.595Z] INFO: Grade added. ID: 95 for course: 52
[2025-04-01T09:07:52.704Z] INFO: Grades fetched for course ID: 52
[2025-04-01T09:07:58.072Z] INFO: Grade updated. ID: 94
[2025-04-01T09:08:02.689Z] INFO: Grade deleted. ID: 95
[2025-04-01T09:08:24.860Z] INFO: Grade scales fetched for course ID: 52
[2025-04-01T09:08:30.108Z] INFO: Custom grade scales saved for course ID: 52
[2025-04-01T09:08:30.199Z] INFO: Course GPA updated. Course ID: 52, GPA: 3.5, Letter Grade: BA
[2025-04-01T09:08:34.898Z] INFO: Grade scales fetched for course ID: 52
[2025-04-01T09:08:40.323Z] INFO: Custom grade scales deleted for course ID: 52
```

## Önerilen İyileştirmeler

1. **Rate Limiter Düzeltmesi**
   ```javascript
   // src/middlewares/rateLimiter.js - düzeltilmiş versiyon
   const generalLimiter = rateLimit({
     windowMs: 15 * 60 * 1000,
     max: 100,
     standardHeaders: true,
     legacyHeaders: false,
     trustProxy: false, // trust proxy ayarını devre dışı bırak
     // ... diğer ayarlar
   });
   ```

2. **UpdateAllCoursesGPAByTerm Fonksiyonu Düzeltmesi**
   ```javascript
   // src/controllers/courseController.js - düzeltilmiş versiyon
   async function updateAllCoursesGPAByTerm(req, res) {
     try {
       const { termId } = req.params;
       const courses = await Course.findAll({ where: { term_id: termId } });

       if (!courses.length) {
         logger.error(`Update All Courses GPA: No courses found for term ID: ${termId}`);
         return res.status(404).json({ message: "Bu döneme ait ders bulunamadı." });
       }

       // Tüm dersler için GPA güncellemesi
       await Promise.all(
         courses.map(course =>
           updateCourseGPA({ params: { courseId: course.id } }, { status: () => ({ json: () => {} }) })
         )
       );

       // Dönemin GPA'sini güncelle
       const termResult = await Term.findByPk(termId);
       const updatedTermGPA = await calculateTermGPA(termId);
       
       return res.status(200).json({ 
         message: "Tüm derslerin ve dönemin GPA'sı güncellendi.",
         termId,
         gpa: updatedTermGPA.gpa,
         totalCredits: updatedTermGPA.totalCredits
       });
     } catch (error) {
       logger.error(`Error updating all courses GPA: ${error.message}`);
       return res.status(500).json({ 
         message: "Derslerin GPA'sı güncellenirken hata oluştu.", 
         error: error.message 
       });
     }
   }
   ```

3. **Veri Doğrulama İçin Middleware Eklentisi**
   ```javascript
   // Örnek: src/middlewares/validator.js - kurs doğrulama fonksiyonu
   const validateCourseCreation = (req, res, next) => {
     const { term_id, user_id, name, credits } = req.body;
     
     // Eğer term_id URL'den geliyorsa, ekleyelim
     if (req.params.termId && !term_id) {
       req.body.term_id = parseInt(req.params.termId);
     }
     
     // Eğer user_id token'dan geliyorsa, ekleyelim
     if (req.user && req.user.userId && !user_id) {
       req.body.user_id = req.user.userId;
     }
     
     if (!req.body.term_id || !req.body.user_id || !name) {
       return res.status(400).json({
         success: false,
         message: "term_id, user_id ve name alanları zorunludur"
       });
     }
     
     next();
   };
   ```

Bu rapor, yapılan API testlerinin sonuçlarını, tespit edilen hataları ve önerilen iyileştirmeleri içermektedir. 