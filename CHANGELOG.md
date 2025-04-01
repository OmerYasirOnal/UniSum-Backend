# Değişiklik Günlüğü

Projedeki tüm önemli değişiklikler bu dosyada belgelenecektir.

## [1.0.3] - 2024-04-01

### Değişiklikler
- Kod yapısı refactor edildi
- Utility ve helper sınıflar eklendi:
  - Merkezi loglama (logger.js)
  - API yanıt standartlaştırma (responseHelper.js)
  - Hız sınırlama (rateLimiter.js)
  - Gelişmiş hata yönetimi (errorHandler.js)
  - Güvenlik iyileştirmeleri (securityMiddleware.js)
  - Giriş doğrulama (validator.js)
- server.js dosyası daha modüler hale getirildi
- Auth rotaları daha iyi dokümante edildi ve güvenlik önlemleri eklendi

## [1.0.2] - 2024-04-01

### Değişiklikler
- Proje yapısı yeniden düzenlendi: Tüm kodlar "src" klasörü altına taşındı
- package.json dosyasındaki yollar güncellendi

## [1.0.1] - 2024-04-01

### Değişiklikler
- package.json dosyasında version numarası 1.0.0'dan 1.0.1'e güncellendi.
- Versiyonlama sistemi için Git tag'leri kullanılmaya başlandı.
- CHANGELOG.md dosyası eklendi.

## [1.0.0] - 2024-04-01

### Eklenenler
- İlk sürüm
- Kullanıcı kimlik doğrulama (kayıt, giriş, e-posta doğrulama)
- Dönem yönetimi
- Ders yönetimi
- Not ve GPA hesaplama
- Not ölçeklendirme sistemi 