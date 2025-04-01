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

- `/auth` - Kimlik doğrulama işlemleri
- `/terms` - Dönem yönetimi
- `/courses` - Ders yönetimi
- `/grades` - Not yönetimi
- `/gpa` - GPA hesaplama
- `/grade-scales` - Not ölçek tanımları

## Katkı

Katkıda bulunmak için lütfen bir pull request açın.

## Lisans

[MIT](LICENSE) 