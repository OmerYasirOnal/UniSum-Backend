# UniSum Backend
=====================================

Üniversite not takibi için geliştirilen bir API. Bu proje, öğrencilerin notlarını takip etmelerine ve dönemsel not ortalamalarını hesaplamalarına yardımcı olur.

## Overview
------------

UniSum Backend, üniversite öğrencilerinin notlarını takip etmelerine yardımcı olmak amacıyla geliştirilmiştir. Proje, kullanıcı kaydı ve kimlik doğrulama, dönem yönetimi, ders yönetimi, not ve ağırlıklı not ortalaması (GPA) hesaplama gibi özelliklere sahiptir.

## Tech Stack
-------------

* **JavaScript**: Uygulama dili
* **Express**: Web framework
* **npm**: Paket yöneticisi
* **Sequelize**: Veritabanı ORM

## Quickstart
------------

Projenin çalışır hale gelmesi için aşağıdaki adımları takip edin:

1. **Repoyu klonlayın**:
```bash
git clone https://github.com/OmerYasirOnal/UniSum-Backend.git
cd UniSum-Backend
```

2. **Bağımlılıkları yükleyin**:
```bash
npm install
```

3. **.env.example dosyasını kopyalayıp.env olarak kaydedin ve gerekli ayarları yapın**:
```bash
cp.env.example.env
#.env dosyasını düzenleyin
```

4. **Veritabanını kurun**:
```bash
# Veritabanını oluşturun (MySQL)
# Veritabanı şemalarını oluşturmak için Sequelize kullanabilirsiniz
npx sequelize db:migrate
```

5. **Uygulamayı başlatın**:
```bash
npm start
```

## Configuration
--------------

Proje, `.env` dosyasında tanımlanan değişkenler aracılığıyla yapılandırılır. Aşağıdaki değişkenler desteklenir:

* `DB_HOST`: Veritabanı sunucusu adresi
* `DB_USER`: Veritabanı kullanıcı adı
* `DB_PASSWORD`: Veritabanı parolası
* `DB_NAME`: Veritabanı adı

## Available Scripts
-------------------

* `npm start`: Uygulamayı başlatır
* `npm test`: Birim testlerini çalıştırır

## API Endpoints
----------------

API aşağıdaki endpoint'leri sağlar:

* `/auth`: Kimlik doğrulama işlemleri
* `/terms`: Dönem yönetimi
* `/courses`: Ders yönetimi
* `/grades`: Not yönetimi
* `/gpa`: GPA hesaplama
* `/grade-scales`: Not ölçek tanımları

## Katkı
---------

Katkıda bulunmak için lütfen bir pull request açın.

## Lisans
---------

[MIT](LICENSE)