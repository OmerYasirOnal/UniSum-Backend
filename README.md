# UniSum Backend
=====================================

Üniversite not takibi için geliştirilen bir API. Bu proje, öğrencilerin notlarını takip etmelerine ve dönemsel not ortalamalarını hesaplamalarına yardımcı olur.

## Overview
------------

UniSum Backend, üniversite öğrencilerinin not takibi için tasarlanmış bir API'dir. Kullanıcı kaydı ve kimlik doğrulama, dönem yönetimi, ders yönetimi, not ve ağırlıklı not ortalaması (GPA) hesaplama gibi özelliklere sahiptir. Ayrıca, not ölçeklendirme sistemi desteği de mevcuttur.

## Tech Stack
-------------

* **Programlama Dili:** JavaScript
* **Framework:** Express
* **Veritabanı:** MySQL
* **ORM:** Sequelize

## Quickstart
------------

Projenin çalışır hale gelmesi için aşağıdaki adımları takip edin:

1. **Repoyu Klonlayın:**
   ```bash
git clone https://github.com/OmerYasirOnal/UniSum-Backend.git
cd UniSum-Backend
```

2. **Bağımlılıkları Yükleyin:**
   ```bash
npm install
```

3. **.env Dosyasını Oluşturun:**
   ```bash
cp.env.example.env
#.env dosyasını düzenleyin
```

4. **Veritabanını Kurun:**
   Veritabanını oluşturun ve şemalarını oluşturmak için Sequelize kullanabilirsiniz.
   ```bash
# MySQL için
mysql -u root -p
CREATE DATABASE unisum;
```
   Ardından, Sequelize ile şemaları oluşturun:
   ```bash
npx sequelize db:migrate
```

5. **Uygulamayı Başlatın:**
   ```bash
npm start
```

## Configuration
--------------

`.env` dosyasında aşağıdaki değişkenler bulunmaktadır:

* `DB_HOST`: Veritabanı host adı
* `DB_USER`: Veritabanı kullanıcı adı
* `DB_PASSWORD`: Veritabanı parolası
* `DB_NAME`: Veritabanı adı
* `PORT`: Uygulama portu

## Available Scripts
-------------------

* `npm start`: Uygulamayı başlatır
* `npm test`: Testleri çalıştırır

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

[MIT](LICENSE) lisansına tabidir.